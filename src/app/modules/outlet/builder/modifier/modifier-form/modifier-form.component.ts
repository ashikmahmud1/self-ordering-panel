import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toArray } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../../../../core/firestore.service';
import { ModifierFirePath } from '../../../../firestore.path';
import { Modifier } from '../modifier.model';

@Component({
  selector: 'outlet-modifier-form',
  templateUrl: './modifier-form.component.html',
  styleUrls: ['./modifier-form.component.css'],
})
export class ModifierFormComponent implements OnInit {
  modifierID: string | null;
  outletID: string | null;
  modifier: Modifier;
  constructor(public fireDB: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.modifierID = this.route.snapshot.paramMap.get('id');
    if (this.modifierID) {
      this.fireDB.doc$(`outlets/${this.outletID}/${ModifierFirePath}/${this.modifierID}`).subscribe((modifierData: Modifier) => {
        this.modifier = modifierData;
      });
    } else {
      this.modifier = {};
    }
  }

  addMoreRows() {
    if (this.modifier) {
      this.modifier.item = this.modifier.item || [];
      this.modifier.item.push({
        name: '',
        price: 0,
        ingredient: '',
      });
    }
  }

  deleteRow(i: number) {
    if (this.modifier && this.modifier.item) {
      this.modifier.item.splice(i, 1);
    }
  }

  addModifier(modifierForm: any) {
    if (!modifierForm.invalid) {
      if (modifierForm.form.value.item) {
        modifierForm.form.value.item = toArray(modifierForm.form.value.item);
      }
      if (this.modifierID) {
        this.fireDB.set(`outlets/${this.outletID}/${ModifierFirePath}/${this.modifierID}`, modifierForm.form.value);
        this.toastr.success('Modifier Updated', 'Success!');
      } else {
        this.fireDB.add(`outlets/${this.outletID}/${ModifierFirePath}`, modifierForm.form.value);
        this.toastr.success('Modifier Created', 'Success!');
      }
      this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
    } else {
      this.fireDB.validateAllFormFields(modifierForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
