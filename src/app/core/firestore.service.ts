
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

interface SelectFormVal {
  label: string;
  value: number;
}

@Injectable()
export class FirestoreService {
  restaID?: string | null;
  timeRangeArray?: Array<SelectFormVal> | null;

  constructor(public afs: AngularFirestore, private afStorage: AngularFireStorage, private auth: AuthService) {
    this.initializeTimeSlot();
  }

  /// **************
  /// Get a Reference
  /// **************

  col<T>(ref: CollectionPredicate<T>, queryFn?: any): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(`resta/${this.auth.restaID}/${ref}`, queryFn) : ref;
  }

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(`resta/${this.auth.restaID}/${ref}`) : ref;
  }

  /// **************
  /// Get Data
  /// **************

  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().pipe(map((doc) => {
      return doc.payload.data() as T;
    }));
  }

  col$<T>(ref: CollectionPredicate<T>, queryFn?: any): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(map((docs) => {
      return docs.map((a) => a.payload.doc.data()) as T[];
    }));
  }

  colRoot<T>(ref: CollectionPredicate<T>, queryFn?: any): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(`${ref}`, queryFn) : ref;
  }

  docRoot<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(`${ref}`) : ref;
  }

  docRoot$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.docRoot(ref).snapshotChanges().pipe(map((doc) => {
      return doc.payload.data() as T;
    }));
  }

  colRoot$<T>(ref: CollectionPredicate<T>, queryFn?: any): Observable<T[]> {
    return this.colRoot(ref, queryFn).snapshotChanges().pipe(map((docs) => {
      return docs.map((a) => a.payload.doc.data()) as T[];
    }));
  }

  /// with Ids
  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?: any): Observable<any[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(map((actions) => {
      return actions.map((a) => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  /// **************
  /// Write Data
  /// **************

  /// Firebase Server Timestamp
  /*
    get timestamp() {
      return firebase.firestore.FieldValue.serverTimestamp();
    }
  */

  set<T>(ref: DocPredicate<T>, data: any) {
    const filterData = JSON.parse(JSON.stringify(data));
    return this.doc(ref).set(filterData);
  }

  update<T>(ref: DocPredicate<T>, data: any) {
    return this.doc(ref).update(data);
  }

  delete<T>(ref: DocPredicate<T>) {
    return this.doc(ref).delete();
  }

  add<T>(ref: CollectionPredicate<T>, data: any) {
    const filterData = JSON.parse(JSON.stringify(data));
    return this.col(ref).add(filterData);
  }

  /*
    geopoint(lat: number, lng: number) {
      return new firebase.firestore.GeoPoint(lat, lng);
    }
  */

  /// If doc exists update, otherwise set
  upsert<T>(ref: DocPredicate<T>, data: any) {
    const doc = this.doc(ref).snapshotChanges().pipe(take(1)).toPromise();

    return doc.then((snap) => {
      return snap.payload.exists ? this.update(ref, data) : this.set(ref, data);
    });
  }

  getTimeRangeArray() {
    return this.timeRangeArray;
  }

  /// **************
  /// Inspect Data
  /// **************

  inspectDoc(ref: DocPredicate<any>): void {
    const tick = new Date().getTime();
    this.doc(ref).snapshotChanges().pipe(
      take(1),
      tap((d) => {
        const tock = new Date().getTime() - tick;
        console.log(`Loaded Document in ${tock}ms`, d);
      }),
    ).subscribe();
  }

  inspectCol(ref: CollectionPredicate<any>): void {
    const tick = new Date().getTime();
    this.col(ref).snapshotChanges().pipe(
      take(1),
      tap((c) => {
        const tock = new Date().getTime() - tick;
        console.log(`Loaded Collection in ${tock}ms`, c);
      }),
    ).subscribe();
  }

  /// **************
  /// Create and read doc references
  /// **************

  /// create a reference between two documents
  connect(host: DocPredicate<any>, key: string, doc: DocPredicate<any>) {
    return this.doc(host).update({ [key]: this.doc(doc).ref });
  }

  /// returns a documents references mapped to AngularFirestoreDocument
  /*
    docWithRefs$<T>(ref: DocPredicate<T>) {
      return this.doc$(ref).pipe(map((doc: any) => {
        for (const k of Object.keys(doc)) {
          if (doc[k] instanceof firebase.firestore.DocumentReference) {
            doc[k] = this.doc(doc[k].path);
          }
        }
        return doc;
      }));
    }
  */

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field: any) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  getFileStorageRef(path: string) {
    return this.afStorage.ref(`resImg/${this.auth.restaID}/${path}`);
  }

  uploadFileToStorage(path: string, file: File) {
    return this.afStorage.upload(`resImg/${this.auth.restaID}/${path}`, file);
  }

  deleteFileStorage(path: string) {
    return this.afStorage.ref(`resImg/${this.auth.restaID}/${path}`).delete();
  }

  initializeTimeSlot() {
    this.timeRangeArray = [];
    for (let hour = 0; hour <= 23; hour++) {
      let ampm = 'AM';
      let value = hour * 60;
      const hour12 = hour > 12 ? hour - 12 : hour;
      if (hour > 11) {
        ampm = 'PM';
      }
      for (let min = 0; min < 60; min += 15) {
        value += min;
        const min0 = min < 10 ? `0${min}` : min;
        const hour0 = hour12 < 10 ? `0${hour12}` : hour12;
        const label = `${hour0}:${min0} ${ampm}`;
        this.timeRangeArray.push({
          label,
          value,
        });
      }
    }
  }
}
