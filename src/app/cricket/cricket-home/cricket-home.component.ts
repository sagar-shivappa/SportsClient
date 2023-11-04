import { Component, OnInit } from '@angular/core';
import { cricketRules } from '../../../shared/configurations/cricket-rules';

@Component({
  selector: 'app-cricket-home',
  templateUrl: './cricket-home.component.html',
  styleUrls: ['./cricket-home.component.scss'],
})
export class CricketHomeComponent implements OnInit {
  rules: any;
  ngOnInit(): void {
    this.rules = cricketRules;
  }
}
