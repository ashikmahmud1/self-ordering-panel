import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['not-found.component.css'],
})
export class NotFoundComponent implements AfterViewInit {

  ngAfterViewInit() {
    $(() => {
      $('.preloader').fadeOut();
    });
  }

}
