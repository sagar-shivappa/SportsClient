import { Component, OnInit } from '@angular/core';
import { cricketRules } from '../../../shared/configurations/cricket-rules';
import { teams } from '../../../shared/configurations/cricket-teams';
import { event_information } from 'src/shared/configurations/event-info';

@Component({
  selector: 'app-cricket-home',
  templateUrl: './cricket-home.component.html',
  styleUrls: ['./cricket-home.component.scss'],
})
export class CricketHomeComponent implements OnInit {
  rules: any;
  cricketTeams: any;
  event = event_information;
  ngOnInit(): void {
    this.rules = cricketRules;
    this.cricketTeams = teams;
  }
}
