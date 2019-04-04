import { Posmodifier } from './../posmodifier.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../core/firestore.service';
import { UserFirePath, MenuItemFirePath, POSModifierFirePath } from '../../../firestore.path';
import { MenuItem } from './../../builder/menu-item/menu-item.model';
import { ModifierFirePath } from './../../../firestore.path';
import { Modifier } from './../../builder/modifier/modifier.model';

@Component({
  selector: 'outlet-pos-modifier',
  templateUrl: './pos-modifier.component.html',
  styleUrls: ['./pos-modifier.component.css'],
})
export class PosModifierComponent implements OnInit {
  outletID: string | null;
  modifierList: Modifier[];
  posModifier: Observable<Posmodifier[]>;

  constructor(public fireDB: FirestoreService, private route: ActivatedRoute, public toastr: ToastrService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.fireDB.colWithIds$(`outlets/${this.outletID}/${ModifierFirePath}`).subscribe((modifierData: Modifier[]) => {
      this.modifierList = modifierData;

    });
    this.posModifier = this.fireDB.colWithIds$(POSModifierFirePath);
  }
  addPosModifier(posModifierForm: any) {
    console.log(posModifierForm);
    if (!posModifierForm.invalid) {
      this.fireDB.add(POSModifierFirePath, posModifierForm.form.value)
        .then((documentRef) => {
          const menuItemID = documentRef.id;
          this.toastr.success('Updated', 'Success!');
        });
    }
  }
}
