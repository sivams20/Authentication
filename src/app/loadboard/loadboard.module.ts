import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadboardRoutingModule } from './loadboard-routing.module';
import { AvailableLoadComponent } from './available-load/available-load.component';
import { MaterialModule } from '@app/material.module';


@NgModule({
  declarations: [AvailableLoadComponent],
  imports: [
    CommonModule,
    LoadboardRoutingModule,
    MaterialModule
  ]
})
export class LoadboardModule { }
