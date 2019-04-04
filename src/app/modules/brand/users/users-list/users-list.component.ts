import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../core/firestore.service';
import { UsersFirePath } from '../../../firestore.path';
import { Users } from '../users.model';

@Component({
  selector: 'brand-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  usersList: Observable<Users[]>;

  constructor(public fireDB: FirestoreService, public toastr: ToastrService) { }

  ngOnInit() {
    this.usersList = this.fireDB.colWithIds$(UsersFirePath);
  }

}
