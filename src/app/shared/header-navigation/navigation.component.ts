import { AfterViewInit, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements AfterViewInit {

  public config: PerfectScrollbarConfigInterface = {};

  constructor(public auth: AuthService,
    public toastr: ToastrService,
    private modalService: NgbModal) { }

  userLogout() {
    this.auth.signOut();
    this.toastr.success('You are logged out successfully.', 'Success!');
  }

  ngAfterViewInit() {
    const set = () => {
      const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
      const topOffset = 0;
      if (width < 1170) {
        $('#main-wrapper').addClass('mini-sidebar');
      } else {
        $('#main-wrapper').removeClass('mini-sidebar');
      }
    };
    $(window).ready(set);
    $(window).on('resize', set);

    $('body').trigger('resize');
  }
}
