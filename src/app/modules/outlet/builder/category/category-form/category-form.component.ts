import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../../../../core/firestore.service';
import { CategoryFirePath } from '../../../../firestore.path';
import { Category } from '../category.model';

@Component({
  selector: 'outlet-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  categoryID: string | null;
  outletID: string | null;
  category: Category;
  bigIconFile: File | null;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService,
    public fireDB: FirestoreService) { }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
    this.categoryID = this.route.snapshot.paramMap.get('id');
    if (this.categoryID) {
      this.fireDB.doc$(`outlets/${this.outletID}/${CategoryFirePath}/${this.categoryID}`).subscribe((categoryData: Category) => {
        this.category = categoryData;
      });
    } else {
      this.category = {};
    }
  }

  uploadFile(event: any, type: string) {
    if (event && type) {
      if (type === 'image') {
        if (this.categoryID) {
          this.toastr.info('File uploading..', 'Wait!');
          const uploadTask = this.fireDB.uploadFileToStorage(`outlet/${this.outletID}/category/${this.categoryID}/original.jpg`, event.target.files[0]);
          uploadTask.then().then((snapshot) => {
            snapshot.ref.getDownloadURL().then((imageUrl: string) => {
              if (this.category) {
                this.category.image = imageUrl;
              }
              this.toastr.success('File uploaded', 'Success!');
            });
          });
        } else {
          this.bigIconFile = event.target.files[0];
        }
      }
    }
  }

  deleteFile(type: string) {
    if (type === 'image') {
      if (this.categoryID) {
        this.fireDB.deleteFileStorage(`outlet/${this.outletID}/category/${this.categoryID}/original.jpg`);
        if (this.category && this.category.image) {
          this.category.image = '';
        }
      } else {
        this.bigIconFile = null;
      }
    }
  }

  addCategory(categoryForm: NgForm) {
    if (!categoryForm.invalid) {
      if (this.categoryID) {
        this.fireDB.set(`outlets/${this.outletID}/${CategoryFirePath}/${this.categoryID}`, categoryForm.form.value);
        this.toastr.success('Category Updated', 'Success!');
      } else {
        this.fireDB.add(`outlets/${this.outletID}/${CategoryFirePath}`, categoryForm.form.value)
          .then((documentRef) => {
            const categoryID = documentRef.id;
            if (this.bigIconFile) {
              const uploadTask = this.fireDB.uploadFileToStorage(`outlet/${this.outletID}/category/${categoryID}/original.jpg`, this.bigIconFile);
              this.toastr.info('File uploading..', 'Wait!');
              uploadTask.then().then((snapshot) => {
                snapshot.ref.getDownloadURL().then((imageUrl: string) => {
                  documentRef.update({
                    image: imageUrl,
                  });
                  this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
                  this.toastr.success('Category Created', 'Success!');
                });
              });
            } else {
              this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
              this.toastr.success('Category Created', 'Success!');
            }
          });
      }
      this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
    } else {
      this.fireDB.validateAllFormFields(categoryForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
