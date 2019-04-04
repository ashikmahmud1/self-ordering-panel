import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onActivate(event: any, outlet: any) {
    // outlet.scrollTop = 0;
  }
}
