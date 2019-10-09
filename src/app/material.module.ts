import { NgModule } from '@angular/core';

import {  
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,   
  MatFormFieldModule,  
  MatInputModule,  
  MatAutocompleteModule,
  MatDatepickerModule,  
  MatNativeDateModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatOptionModule,  
  MatSlideToggleModule,
  MatListModule,
  MatTableModule
} from '@angular/material';

const modules = [
  MatButtonModule,  
  MatMenuModule,  
  MatToolbarModule,  
  MatIconModule,  
  MatCardModule,   
  MatFormFieldModule,  
  MatInputModule,  
  MatAutocompleteModule,
  MatDatepickerModule,  
  MatNativeDateModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatOptionModule,  
  MatSlideToggleModule,
  MatListModule,
  MatTableModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
