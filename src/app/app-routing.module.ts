import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'order', component: OrderComponent},
  { path: 'load', loadChildren: () => import('./loadboard/loadboard.module').then(m => m.LoadboardModule) },
  { path: 'board', loadChildren: () => import('./board/board.module').then(m => m.BoardModule) },
  { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }