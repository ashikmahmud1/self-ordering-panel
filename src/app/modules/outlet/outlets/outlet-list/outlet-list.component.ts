import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../core/firestore.service';
import { OutletFirePath } from '../../../firestore.path';
import { Outlet } from '../outlet.model';

@Component({
  selector: 'outlets-outlet-list',
  templateUrl: './outlet-list.component.html',
  styleUrls: ['./outlet-list.component.css'],
})
export class OutletListComponent implements OnInit {
  outletList: Observable<Outlet[]>;

  constructor(public toastr: ToastrService, public fireDB: FirestoreService) { }

  ngOnInit() {
    this.outletList = this.fireDB.colWithIds$(OutletFirePath);
  }

  deleteOutlet(event: Event, outletID: string) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
      this.fireDB.delete(`${OutletFirePath}/${outletID}`);
      this.toastr.success('Restaurant Deleted', 'Success!');
    }
    return;
  }

}
