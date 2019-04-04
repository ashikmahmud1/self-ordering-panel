import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../../core/firestore.service';
import { CategoryFirePath } from '../../../../firestore.path';
import { Category } from '../category.model';

@Component({
  selector: 'outlet-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  outletID: string | null;
  categoryList: Observable<Category[]>;

  constructor(public toastr: ToastrService, private route: ActivatedRoute, public fireDB: FirestoreService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 2].snapshot.paramMap.get('outletid');
    this.categoryList = this.fireDB.colWithIds$(`outlets/${this.outletID}/${CategoryFirePath}`);
  }

  deleteCategory(event: Event, categoryID: string) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
      this.fireDB.delete(`outlets/${this.outletID}/${CategoryFirePath}/${categoryID}`);
      this.toastr.success('Category Deleted', 'Success!');
    }
    return;
  }

}
