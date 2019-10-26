import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableLoadComponent } from './available-load/available-load.component';


const routes: Routes = [
  {path: '', component: AvailableLoadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadboardRoutingModule { }
