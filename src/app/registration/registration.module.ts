import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';


@NgModule({
  declarations: [RegistrationComponent, RegistrationModalComponent, PersonalInfoComponent, AddressInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents:[
    RegistrationModalComponent
  ]
})
export class RegistrationModule { }
