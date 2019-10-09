import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup,FormControl, Validator, Validators,AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  @Input() shipment: FormGroup;
  equipments = ['Dry van', 'Reefer', 'Flatbed'];
  equipmentSizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  options = [{'city': 'One','zip': 1 }, {'city': 'Two','zip': 2 },{'city': 'Three','zip': 3 }];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdr.detectChanges();
  }

}
