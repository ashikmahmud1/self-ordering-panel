import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { toArray } from 'lodash';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '../../../../core/firestore.service';
import { ReportsFirePath, OutletFirePath } from '../../../firestore.path';
import { Reports, defaultReports } from '../reports.model';
import { Outlet } from '../../../outlet/outlets/outlet.model';
@Component({
  selector: 'brand-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css'],
})
export class ReportsListComponent implements OnInit {
  reportsList: Observable<Reports[]>;
  reports: Reports;
  outletName: Outlet;
  constructor(public fireDB: FirestoreService, public toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit() {
    this.reportsList = this.fireDB.colWithIds$(ReportsFirePath);
    this.reports = defaultReports;
  }
  viewDetails(content: any, reports: Reports) {
    this.reports = reports;
    if (reports.carts) {
      this.reports.carts = toArray(reports.carts);
    }
    this.modalService.open(content, { size: 'lg' });
  }
  getOutlet(outletID: any) {
    this.fireDB.doc$(`${OutletFirePath}/${outletID}`).subscribe((outletData: Outlet) => {
      this.outletName = outletData;
    });
    if (this.outletName) {
      return this.outletName.name;
    } else {
      return '';
    }
  }

}
