import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidationErrors, FormBuilder, FormArray } from '@angular/forms';
import { ListService } from '../dashboard/list/listService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public orderForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private listService : ListService, private route: Router) { }

  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      contact: this.formBuilder.group({
        name: [''],
        email: [''],
        mobile: ['']
      }),
      shipment: this.formBuilder.group({
        equipment: [''],
        equipmentSize: [''],
        commodity: ['']
      }),
      location: this.formBuilder.array([ 
        this.formBuilder.group({
          origin: '',
          originZip: '',
          pickup: '',
          originRequirement:'',
          originNote: '',
          destination: '',
          destinationzip: '',
          delivery: '',
          destinationRequirement: '',
          destinationNote:''
        })
      ])
    });
  }

  get locaton(): FormArray { return this.orderForm.get('location') as FormArray; }

  onSubmit(){
    console.log(this.orderForm);
    this.listService.setOrderData(this.orderForm.value);
    this.route.navigate(['/dashboard']);
  }

  Add(){
    let fg = this.formBuilder.group({
      origin: '',
      originZip: '',
      pickup: '',
      originRequirement:'',
      originNote: [''],
      destination: [''],
      destinationzip: [''],
      delivery: [''],
      destinationRequirement: [''],
      destinationNote:['']
  });
  this.locaton.push(fg);
  }

}


