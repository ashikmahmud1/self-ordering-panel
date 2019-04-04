import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, toArray } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../../../core/firestore.service';
import { OutletFirePath } from '../../../firestore.path';
import { Outlet, SelectFormVal, orderTypeList, currencyList } from '../outlet.model';

@Component({
  selector: 'outlets-outlet-form',
  templateUrl: './outlet-form.component.html',
  styleUrls: ['./outlet-form.component.css'],
})
export class OutletFormComponent implements OnInit {
  outletID: string | null;
  outlet: Outlet;
  bigIconFile: File | null;
  orderTypeList: SelectFormVal;
  currencyList: SelectFormVal;
  quillToolbar: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService,
    public fireDB: FirestoreService) { }

  ngOnInit() {
    this.orderTypeList = orderTypeList;
    this.currencyList = currencyList;
    this.outletID = this.route.snapshot.paramMap.get('id');
    if (this.outletID) {
      this.fireDB.doc$(`${OutletFirePath}/${this.outletID}`).subscribe((outletData: Outlet) => {
        this.outlet = outletData;
      });
    } else {
      this.outlet = {};
    }
  }

  uploadFile(event: any, type: string) {
    if (event && type) {
      if (type === 'image') {
        if (this.outletID) {
          this.toastr.info('File uploading..', 'Wait!');
          const uploadTask = this.fireDB.uploadFileToStorage(`outlet/${this.outletID}/logo/original.jpg`, event.target.files[0]);
          uploadTask.then().then((snapshot) => {
            snapshot.ref.getDownloadURL().then((imageUrl: string) => {
              if (this.outlet) {
                this.outlet.image = imageUrl;
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
      if (this.outletID) {
        this.fireDB.deleteFileStorage(`outlet/${this.outletID}/logo/original.jpg`);
        if (this.outlet) {
          this.outlet.image = '';
        }
      } else {
        this.bigIconFile = null;
      }
    }
  }

  addOutlet(outletForm: NgForm) {
    if (!outletForm.invalid) {
      if (outletForm.form.value.opHrs) {
        outletForm.form.value.opHrs = toArray(outletForm.form.value.opHrs);
      }
      if (this.outletID) {
        this.fireDB.set(`${OutletFirePath}/${this.outletID}`, outletForm.form.value);
        this.toastr.success('Restaurant Updated', 'Success!');
        this.router.navigate(['../..'], { relativeTo: this.route });
      } else {
        this.fireDB.add(OutletFirePath, outletForm.form.value)
          .then((documentRef) => {
            const outletID = documentRef.id;
            if (this.bigIconFile) {
              const uploadTask = this.fireDB.uploadFileToStorage(`outlet/${outletID}/logo/original.jpg`, this.bigIconFile);
              this.toastr.info('File uploading..', 'Wait!');
              uploadTask.then().then((snapshot) => {
                snapshot.ref.getDownloadURL().then((imageUrl: string) => {
                  documentRef.update({
                    info: {
                      image: imageUrl,
                    },
                  });
                  this.router.navigate(['../..'], { relativeTo: this.route });
                  this.toastr.success('Restaurant Created', 'Success!');
                });
              });
            } else {
              this.router.navigate(['../..'], { relativeTo: this.route });
              this.toastr.success('Restaurant Created', 'Success!');
            }
          });
      }
    } else {
      this.fireDB.validateAllFormFields(outletForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
