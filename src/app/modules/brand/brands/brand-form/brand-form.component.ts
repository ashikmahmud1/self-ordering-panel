import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { AuthService, User } from '../../../../core/auth.service';
import { FirestoreService } from '../../../../core/firestore.service';
import { BrandFirePath } from '../../../firestore.path';
import { Brand } from '../brand.model';

@Component({
  selector: 'brand-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css'],
})
export class BrandFormComponent implements OnInit {
  brand: Brand;
  bigIconFile: File;
  user: User | null;
  constructor(public fireDB: FirestoreService,
    private afs: AngularFirestore,
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService) {
    this.user = this.auth.userDetail;
  }

  ngOnInit() {
    this.fireDB.doc$(`${BrandFirePath}`).subscribe((brandData: Brand) => {
      this.brand = brandData || {};
    });
  }

  compareByOptionCode(firstOption: any, secondOption: any) {
    return firstOption && secondOption && firstOption.name === secondOption.name;
  }

  addBrand(brandForm: any) {
    if (!brandForm.invalid) {
      this.fireDB.set(BrandFirePath, brandForm.form.value);
      this.toastr.success('Brand Updated', 'Success!');
      if (this.user && !this.user.brandSetup) {
        this.afs.doc(`admin/${this.user.uid}`).update({
          brandSetup: true,
        });
        this.router.navigate(['/brand/global-setting/setting']);
      }
    } else {
      this.fireDB.validateAllFormFields(brandForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
