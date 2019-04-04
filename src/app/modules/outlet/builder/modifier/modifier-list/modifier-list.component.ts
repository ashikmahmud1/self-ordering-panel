import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../../core/firestore.service';
import { ModifierFirePath } from '../../../../firestore.path';
import { Modifier } from '../modifier.model';

@Component({
  selector: 'outlet-modifier-list',
  templateUrl: './modifier-list.component.html',
  styleUrls: ['./modifier-list.component.css'],
})
export class ModifierListComponent implements OnInit {
  outletID: string | null;
  modifierList: Observable<Modifier[]>;

  constructor(public fireDB: FirestoreService, private route: ActivatedRoute, public toastr: ToastrService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 2].snapshot.paramMap.get('outletid');
    this.modifierList = this.fireDB.colWithIds$(`outlets/${this.outletID}/${ModifierFirePath}`);
  }

  deleteModifier(event: Event, modifierID: string) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
      this.fireDB.delete(`outlets/${this.outletID}/${ModifierFirePath}/${modifierID}`);
      this.toastr.success('Modifier Deleted', 'Success!');
    }
    return;
  }

}
