import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { FirestoreService } from '../../../core/firestore.service';

@Component({
  selector: 'outlet-outlet-route',
  templateUrl: './outlet-route.component.html',
  styleUrls: ['./outlet-route.component.css'],
})
export class OutletRouteComponent implements AfterViewInit, OnInit {
  outletID: string | null;
  outletList: any;
  outletIDSelect: any;
  showMobileMenu: boolean;
  constructor(private router: Router,
    public fireDB: FirestoreService,
    private route: ActivatedRoute) {
    this.showMobileMenu = false;
    this.outletIDSelect = [];
  }

  ngOnInit() {
    this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 1].snapshot.paramMap.get('outletid');
    this.fireDB.colWithIds$(`outlets`).subscribe((outletList: any) => {
      this.outletList = outletList;
    });
  }

  outletChangeRoute() {
    this.router.navigate([`/outlet/dash/${this.outletIDSelect}/menu`]);
  }

  ngAfterViewInit() {
    $('.dropdown-toggle').on('click', (event) => {
      $('.dropdown-menu').removeClass('show');
      $(event.target).next().toggleClass('show');
    });
    $('.dropdown-item').on('click', (event) => {
      $('.dropdown-menu').removeClass('show');
    });
    $('.nav-item:not(.dropdown)').on('click', (event) => {
      $('.dropdown-menu').removeClass('show');
    });
  }
}
