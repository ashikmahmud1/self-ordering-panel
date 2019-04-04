
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of as observableOf } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface User {
  uid: string;
  email?: string;
  emailVerified?: boolean;
  restaID?: string;
  outletID?: string;
  userDataID?: string;
  brandSetup?: boolean;
  globalSetup?: boolean;
  roles?: {
    [key: string]: boolean;
  };
}

@Injectable()
export class AuthService {

  userAuth?: any;
  user: Observable<User | null | undefined>;
  restaID: string;
  userDetail: any;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.restaID = '';
    this.userAuth = this.afAuth.auth;
    this.user = this.afAuth.authState.pipe(
      switchMap((userData: any) => {
        if (userData) {
          return this.afs.doc<User>(`admin/${userData.uid}`).valueChanges();
        } else {
          return observableOf(null);
        }
      }));
  }

  authResolver() {
    return new Promise((resolve, reject) => {
      if (this.restaID !== '' && this.user) {
        resolve({});
      }
      this.afAuth.authState
        .subscribe((userData: any) => {
          if (userData && userData.uid) {
            if (!userData.emailVerified) {
              this.router.navigate(['/auth/email-verify']);
              resolve();
            }
            this.afs.doc<User>(`admin/${userData.uid}`).valueChanges().subscribe((userDetail) => {
              this.userDetail = userDetail;
              this.restaID = this.userDetail.restaID;
              resolve({});
            });
          } else {
            resolve({});
          }
        });
    });
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        return this.updateUserOnSignup(user.user);
      });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  sendEmailVerification() {
    const fbAuth = this.userAuth.currentUser;
    if (fbAuth) {
      return fbAuth.sendEmailVerification(null);
    } else {
      return false;
    }
  }

  async isUserEmailVerified() {
    const fbAuth = this.userAuth.currentUser;
    await fbAuth.reload();
    if (fbAuth) {
      return fbAuth.emailVerified;
    } else {
      return false;
    }
  }

  resetPassword(email: string) {
    const fbAuth = this.userAuth;
    return fbAuth.sendPasswordResetEmail(email);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  isAdmin(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }
    for (const role of allowedRoles) {
      if (user.roles && user.roles[role]) {
        return true;
      }
    }
    return false;
  }

  // Sets user data to firestore after succesful signup
  private async updateUserOnSignup(FbUser: any) {
    const newResta = await this.afs.collection('resta').add({});
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`admin/${FbUser.uid}`);

    const data: User = {
      uid: FbUser.uid,
      email: FbUser.email,
      emailVerified: FbUser.emailVerified || false,
      restaID: newResta.id,
      brandSetup: false,
      roles: {
        admin: true,
      },
    };

    return userRef.set(data, { merge: true });
  }
}
