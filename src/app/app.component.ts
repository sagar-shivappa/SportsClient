import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuOpen = false;
  title = 'SportsClient';

  menuAction() {
    this.menuOpen = !this.menuOpen;
  }
}
