import { Component } from '@angular/core';
import { event_information } from 'src/shared/configurations/event-info';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent {
  event = event_information;
}
