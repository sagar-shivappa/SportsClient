import { Component, OnInit } from '@angular/core';
import { cricketRules } from '../../../shared/configurations/cricket-rules';
import { teams } from '../../../shared/configurations/cricket-teams';

@Component({
  selector: 'app-cricket-home',
  templateUrl: './cricket-home.component.html',
  styleUrls: ['./cricket-home.component.scss'],
})
export class CricketHomeComponent implements OnInit {
  rules: any;
  cricketTeams: any;
  ngOnInit(): void {
    this.rules = cricketRules;
    this.cricketTeams = teams;
  }
}
