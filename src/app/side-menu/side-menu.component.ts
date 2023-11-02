import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menu } from '../../shared/configurations/menu-items';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menu: any;
  @Output() closeMenu = new EventEmitter<any>();
  ngOnInit(): void {
    this.menu = menu;
  }

  menuSelection() {
    this.closeMenu.emit(false);
  }
}
