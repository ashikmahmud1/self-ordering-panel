import { MenuItem } from './../../builder/menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../core/firestore.service';
import { POSItemFirePath, MenuItemFirePath } from '../../../firestore.path';
import { Positem } from './../positem.model';
@Component({
  selector: 'outlet-pos-item',
  templateUrl: './pos-item.component.html',
  styleUrls: ['./pos-item.component.css'],
})
export class PosItemComponent implements OnInit {
  outletID: string | null;

  menuItemListData: MenuItem[];
  posItemList: Observable<Positem[]>;

  constructor(public fireDB: FirestoreService, private route: ActivatedRoute, public toastr: ToastrService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.fireDB.colWithIds$(`outlets/${this.outletID}/${MenuItemFirePath}`).subscribe((menuItemsData: MenuItem[]) => {
      this.menuItemListData = menuItemsData;
    });
    this.posItemList = this.fireDB.colWithIds$(POSItemFirePath);
  }
  addPosItem(posItemForm: any) {
    console.log(posItemForm);
    if (!posItemForm.invalid) {
      this.fireDB.add(POSItemFirePath, posItemForm.form.value)
        .then((documentRef) => {
          const menuItemID = documentRef.id;
          this.toastr.success('Updated', 'Success!');
        });
    }
  }
}
