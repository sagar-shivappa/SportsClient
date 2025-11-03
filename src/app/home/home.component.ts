import { Component } from '@angular/core';
import { event_information } from 'src/shared/configurations/event-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  event = event_information;
}
