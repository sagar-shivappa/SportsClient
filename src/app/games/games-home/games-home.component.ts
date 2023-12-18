import { Component, OnInit } from '@angular/core';
import { games } from '../../../shared/configurations/games';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.scss'],
})
export class GamesHomeComponent implements OnInit {
  games: any;

  ngOnInit(): void {
    this.games = games;
  }
}
