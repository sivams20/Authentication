import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './dashboard/list/list.component';
import { SearchComponent } from './dashboard/search/search.component';

import { OrderComponent } from './order/order.component';
import { ContactComponent } from './order/contact/contact.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BackendInterceptor, JwtInterceptor } from './_helpers';

import { MaterialModule } from './material.module';
import { ShipmentComponent } from './order/shipment/shipment.component';
import { LaneComponent } from './order/lane/lane.component';
import { MatDatepickerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OrderComponent,
    ListComponent,
    SearchComponent,
    ContactComponent,
    ShipmentComponent,
    LaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
