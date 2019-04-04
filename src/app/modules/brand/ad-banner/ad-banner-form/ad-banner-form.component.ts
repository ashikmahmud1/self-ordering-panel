import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../../../core/firestore.service';
import { AdBannerFirePath } from '../../../firestore.path';
import { AdBanner } from '../ad-banner.model';

@Component({
  selector: 'brand-ad-banner-form',
  templateUrl: './ad-banner-form.component.html',
  styleUrls: ['./ad-banner-form.component.css'],
})
export class AdBannerFormComponent implements OnInit {
  adBannerID: string | null;
  adBanner: AdBanner;
  bigIconFile: File | null;

  constructor(public fireDB: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.adBannerID = this.route.snapshot.paramMap.get('id');
    if (this.adBannerID) {
      this.fireDB.doc$(`${AdBannerFirePath}/${this.adBannerID}`).subscribe((adBannerData: AdBanner) => {
        this.adBanner = adBannerData;
      });
    } else {
      this.adBanner = {};
    }
  }

  uploadFile(event: any, type: string) {
    if (event && type) {
      if (type === 'image') {
        if (this.adBannerID) {
          this.toastr.info('File uploading..', 'Wait!');
          const uploadTask = this.fireDB.uploadFileToStorage(`brand/adBanner/${this.adBannerID}/original.jpg`, event.target.files[0]);
          uploadTask.then().then((snapshot) => {
            snapshot.ref.getDownloadURL().then((imageUrl: string) => {
              if (this.adBanner) {
                this.adBanner.image = imageUrl;
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
      if (this.adBannerID) {
        this.fireDB.deleteFileStorage(`brand/adBanner/${this.adBannerID}/original.jpg`);
        if (this.adBanner && this.adBanner.image) {
          this.adBanner.image = '';
        }
      } else {
        this.bigIconFile = null;
      }
    }
  }

  addAdBannerForm(adBannerForm: any) {
    if (!adBannerForm.invalid) {
      if (this.adBannerID) {
        this.fireDB.set(`${AdBannerFirePath}/${this.adBannerID}`, adBannerForm.form.value);
        this.toastr.success('Ad Banner Updated', 'Success!');
      } else {
        this.fireDB.add(AdBannerFirePath, adBannerForm.form.value)
          .then((documentRef) => {
            const adBannerID = documentRef.id;
            if (this.bigIconFile) {
              const uploadTask = this.fireDB.uploadFileToStorage(`brand/adBanner/${adBannerID}/original.jpg`, this.bigIconFile);
              this.toastr.info('File uploading..', 'Wait!');
              uploadTask.then().then((snapshot) => {
                snapshot.ref.getDownloadURL().then((imageUrl: string) => {
                  documentRef.update({
                    image: imageUrl,
                  });
                });
              });
            }
          });
        this.toastr.success('Ad Banner Created', 'Success!');
      }
      this.router.navigate(['/brand/ad-banner/list']);
    } else {
      this.fireDB.validateAllFormFields(adBannerForm.form);
      this.toastr.error('Fill up the form correctly!', 'Error!');
    }
  }

}
