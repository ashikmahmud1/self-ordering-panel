import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { groupBy, keyBy, merge, mapValues, toArray } from 'lodash';
import { FirestoreService } from '../../../../../core/firestore.service';
import { MenuItemFirePath, CategoryFirePath } from '../../../../firestore.path';
import { MenuItem } from '../menu-item.model';
import { Category } from '../../category/category.model';

@Component({
  selector: 'outlet-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css'],
})
export class MenuItemListComponent implements OnInit {
  outletID: string | null;
  menuItemList: Observable<MenuItem[]>;
  menuItemListData: MenuItem[];
  categoryListData: any;
  finalListData: any;

  constructor(public fireDB: FirestoreService, private route: ActivatedRoute, public toastr: ToastrService) { }

  async ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 2].snapshot.paramMap.get('outletid');
    await this.fireDB.colWithIds$(`outlets/${this.outletID}/${CategoryFirePath}`).subscribe((categoryData: Category[]) => {
      this.categoryListData = keyBy(categoryData, 'id');
    });
    this.fireDB.colWithIds$(`outlets/${this.outletID}/${MenuItemFirePath}`).subscribe((menuItemsData: MenuItem[]) => {
      this.menuItemListData = menuItemsData;
      const categoryWise = groupBy(menuItemsData, 'category');
      this.finalListData = toArray(merge({}, this.categoryListData, mapValues(categoryWise, (value) => ({ value }))));
    });
  }

  deleteMenuItem(event: Event, menuItemID: string) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
      this.fireDB.delete(`outlets/${this.outletID}/${MenuItemFirePath}/${menuItemID}`);
      this.toastr.success('Menu Item Deleted', 'Success!');
    }
    return;
  }

}
