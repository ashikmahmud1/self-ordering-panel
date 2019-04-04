import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../core/firestore.service';
import { MenuFirePath } from '../../../firestore.path';
import { Menu } from '../menu.model';

@Component({
  selector: 'outlet-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  menuList: Observable<Menu[]>;
  outletID: string | null;

  constructor(public fireDB: FirestoreService, private route: ActivatedRoute, public toastr: ToastrService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.menuList = this.fireDB.colWithIds$(`outlets/${this.outletID}/${MenuFirePath}`);
  }

  deleteMenu(event: Event, menuID: string) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
      this.fireDB.delete(`outlets/${this.outletID}/${MenuFirePath}/${menuID}`);
      this.toastr.success('Menu Deleted', 'Success!');
    }
    return;
  }

}
