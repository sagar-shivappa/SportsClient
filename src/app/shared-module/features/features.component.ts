import { Component, OnInit } from '@angular/core';
import { menu } from '../../../shared/configurations/menu-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  menuItems: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.menuItems = menu;
  }
  handleFeature(link: any) {
    this.router.navigate([link]);
  }
}
