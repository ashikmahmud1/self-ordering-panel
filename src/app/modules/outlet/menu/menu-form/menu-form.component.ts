import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../../../core/firestore.service';
import { MenuFirePath, CategoryFirePath } from '../../../firestore.path';
import { Menu, SelectFormVal, dayList } from '../menu.model';

@Component({
  selector: 'outlet-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
})
export class MenuFormComponent implements OnInit {
  menuID: string | null;
  outletID: string | null;
  menu: Menu;
  menuItems: any;
  dayList: SelectFormVal;
  constructor(public fireDB: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.dayList = dayList;
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.fireDB.colWithIds$(`outlets/${this.outletID}/${CategoryFirePath}`).subscribe((menuItemsData) => {
      this.menuItems = menuItemsData;
    });
    this.menuID = this.route.snapshot.paramMap.get('id');
    if (this.menuID) {
      this.fireDB.doc$(`outlets/${this.outletID}/${MenuFirePath}/${this.menuID}`).subscribe((menuData: Menu) => {
        this.menu = menuData;
      });
    } else {
      this.menu = {};
    }
  }

  addMoreOperatingHours() {
    if (this.menu) {
      this.menu.opHrs = this.menu.opHrs || [];
      this.menu.opHrs.push({
        fromTime: '',
        toTime: '',
        day: '',
      });
    }
  }

  deleteOperatingHour(i: number) {
    if (this.menu && this.menu.opHrs) {
      this.menu.opHrs.splice(i, 1);
    }
  }
  addMenu(menuForm: any) {
    if (!menuForm.invalid) {
      if (menuForm.form.value.opHrs) {
        menuForm.form.value.opHrs = toArray(menuForm.form.value.opHrs);
      }
      if (this.menuID) {
        this.fireDB.set(`outlets/${this.outletID}/${MenuFirePath}/${this.menuID}`, menuForm.form.value);
        this.toastr.success('Menu Updated', 'Success!');
      } else {
        this.fireDB.add(`outlets/${this.outletID}/${MenuFirePath}`, menuForm.form.value);
        this.toastr.success('Menu Created', 'Success!');
      }
      this.router.navigate(['../..'], { relativeTo: this.route });
    } else {
      this.fireDB.validateAllFormFields(menuForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
