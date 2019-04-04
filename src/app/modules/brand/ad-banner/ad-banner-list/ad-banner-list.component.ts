import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FirestoreService } from '../../../../core/firestore.service';
import { AdBannerFirePath } from '../../../firestore.path';
import { AdBanner } from '../ad-banner.model';

@Component({
  selector: 'brand-ad-banner-list',
  templateUrl: './ad-banner-list.component.html',
  styleUrls: ['./ad-banner-list.component.css'],
})
export class AdBannerListComponent implements OnInit {
  adBannerList: Observable<AdBanner[]>;

  constructor(public fireDB: FirestoreService, public toastr: ToastrService) { }

  ngOnInit() {
    this.adBannerList = this.fireDB.colWithIds$(AdBannerFirePath);
  }

  deleteAdBanner(event: Event, adBannerID: string) {
    const response = confirm('are you sure you want to delete?');
    if (response) {
      this.fireDB.delete(`${AdBannerFirePath}/${adBannerID}`);
      this.toastr.success('Ad Banner Deleted', 'Success!');
    }
    return;
  }

}
