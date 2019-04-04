import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../../../core/firestore.service';
import { UserFirePath } from '../../../firestore.path';
import { User } from '../user.model';

@Component({
  selector: 'outlet-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userID: string | null;
  outletID: string | null;
  user: User;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService,
    public fireDB: FirestoreService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.userID = this.route.snapshot.paramMap.get('id');
    if (this.userID) {
      this.fireDB.doc$(`outlets/${this.outletID}/${UserFirePath}/${this.userID}`).subscribe((userData: User) => {
        this.user = userData;
      });
    } else {
      this.user = {};
    }
  }

  addUser(userForm: NgForm) {
    if (!userForm.invalid) {
      if (this.userID) {
        this.fireDB.set(`outlets/${this.outletID}/${UserFirePath}/${this.userID}`, userForm.form.value);
        this.toastr.success('User Updated', 'Success!');
      } else {
        this.fireDB.add(`outlets/${this.outletID}/${UserFirePath}`, userForm.form.value);
        this.toastr.success('User Updated', 'Success!');
      }
      this.router.navigate(['../..'], { relativeTo: this.route });
    } else {
      this.fireDB.validateAllFormFields(userForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
