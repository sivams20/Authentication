import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardLeftPanelComponent } from './board-left-panel/board-left-panel.component';
import { BoardComponent } from './board.component';
import { BoardRightPanelComponent } from './board-right-panel/board-right-panel.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [BoardLeftPanelComponent, BoardComponent, BoardRightPanelComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FlexLayoutModule
  ]
})
export class BoardModule { }
