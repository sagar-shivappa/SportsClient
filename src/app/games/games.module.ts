import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesHomeComponent } from './games-home/games-home.component';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [GamesHomeComponent],
  imports: [CommonModule, GamesRoutingModule],
})
export class GamesModule {}
