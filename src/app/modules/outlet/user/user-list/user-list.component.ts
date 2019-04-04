import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../core/firestore.service';
import { UserFirePath } from '../../../firestore.path';
import { User } from '../user.model';

@Component({
  selector: 'outlet-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: Observable<User[]>;
  outletID: string | null;

  constructor(public fireDB: FirestoreService, private route: ActivatedRoute, public toastr: ToastrService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.userList = this.fireDB.colWithIds$(`outlets/${this.outletID}/${UserFirePath}`);
  }

  deleteUser(event: Event, userID: string) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
      this.fireDB.delete(`outlets/${this.outletID}/${UserFirePath}/${userID}`);
      this.toastr.success('User Deleted', 'Success!');
    }
    return;
  }

}
