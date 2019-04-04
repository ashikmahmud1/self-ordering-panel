import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'outlet-menu-builder',
  templateUrl: './menu-builder.component.html',
  styleUrls: ['./menu-builder.component.css'],
})
export class MenuBuilderComponent {
  constructor(private router: Router,
    private route: ActivatedRoute) {
  }
}
