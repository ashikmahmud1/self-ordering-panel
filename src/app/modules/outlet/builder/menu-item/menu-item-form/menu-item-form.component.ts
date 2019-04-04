import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../../../../core/firestore.service';
import { MenuItemFirePath, ModifierFirePath, CategoryFirePath } from '../../../../firestore.path';
import { MenuItem, SelectFormVal, displayRibbonList } from '../menu-item.model';

@Component({
  selector: 'outlet-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.css'],
})
export class MenuItemFormComponent implements OnInit {
  menuItemID: string | null;
  outletID: string | null;
  menuItem: MenuItem;
  uomList: any;
  categoryList: any;
  displayRibbonList: SelectFormVal;
  modifierList: any;
  imageFile: File | null;

  constructor(public fireDB: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.displayRibbonList = displayRibbonList;
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.menuItemID = this.route.snapshot.paramMap.get('id');
    this.fireDB.docRoot$(`global/uom`).subscribe((uomData: any) => {
      this.uomList = uomData.uom;
    });
    this.fireDB.colWithIds$(`outlets/${this.outletID}/${CategoryFirePath}`).subscribe((categoryData) => {
      this.categoryList = categoryData;
    });
    this.fireDB.colWithIds$(`outlets/${this.outletID}/${ModifierFirePath}`).subscribe((modifierData) => {
      this.modifierList = modifierData;
    });
    if (this.menuItemID) {
      this.fireDB.doc$(`outlets/${this.outletID}/${MenuItemFirePath}/${this.menuItemID}`).subscribe((menuItemData: MenuItem) => {
        this.menuItem = menuItemData;
      });
    } else {
      this.menuItem = {};
    }
  }
  uploadFile(event: any, type: string) {
    if (event && type) {
      if (type === 'image') {
        if (this.menuItemID) {
          this.toastr.info('File uploading..', 'Wait!');
          const uploadTask = this.fireDB.uploadFileToStorage(`outlet/${this.outletID}/menu/${this.menuItemID}/original.jpg`, event.target.files[0]);
          uploadTask.then().then((snapshot) => {
            snapshot.ref.getDownloadURL().then((imageUrl: string) => {
              if (this.menuItem) {
                this.menuItem.display = this.menuItem.display || {};
                this.menuItem.display.image = imageUrl;
              }
              this.toastr.success('File uploaded', 'Success!');
            });
          });
        } else {
          this.imageFile = event.target.files[0];
        }
      }
    }
  }

  deleteFile(type: string) {
    if (type === 'image') {
      if (this.menuItemID) {
        this.fireDB.deleteFileStorage(`outlet/${this.outletID}/menu/${this.menuItemID}/original.jpg`);
        if (this.menuItem && this.menuItem.display) {
          this.menuItem.display.image = '';
        }
      } else {
        this.imageFile = null;
      }
    }
  }

  addMoreModifierSizes() {
    if (this.menuItem) {
      this.menuItem.modifier = this.menuItem.modifier || {};
      this.menuItem.modifier.size = this.menuItem.modifier.size || [];
      this.menuItem.modifier.size.push({
        name: '',
        price: 0,
        addons: [],
      });
    }
  }

  deleteModifierSize(i: number) {
    if (this.menuItem && this.menuItem.modifier && this.menuItem.modifier.size) {
      this.menuItem.modifier.size.splice(i, 1);
    }
  }

  addMenuItem(menuItemForm: any) {
    if (!menuItemForm.invalid) {
      if (menuItemForm.form.value.addon && menuItemForm.form.value.addon.size) {
        menuItemForm.form.value.addon.size = toArray(menuItemForm.form.value.addon.size);
      }
      if (this.menuItemID) {
        this.fireDB.set(`outlets/${this.outletID}/${MenuItemFirePath}/${this.menuItemID}`, menuItemForm.form.value);
        this.toastr.success('Menu Item Updated', 'Success!');
      } else {
        this.fireDB.add(`outlets/${this.outletID}/${MenuItemFirePath}`, menuItemForm.form.value)
          .then((documentRef) => {
            const menuItemID = documentRef.id;
            if (this.imageFile) {
              const uploadTask = this.fireDB.uploadFileToStorage(`outlet/${this.outletID}/menu/${menuItemID}/original.jpg`, this.imageFile);
              this.toastr.info('File uploading..', 'Wait!');
              uploadTask.then().then((snapshot) => {
                snapshot.ref.getDownloadURL().then((imageUrl: string) => {
                  documentRef.update({
                    display: {
                      image: imageUrl,
                    },
                  });
                  this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
                  this.toastr.success('Menu Item Created', 'Success!');
                });
              });
            } else {
              this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
              this.toastr.success('Menu Item Created', 'Success!');
            }
          });
      }
      this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
    } else {
      this.fireDB.validateAllFormFields(menuItemForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
