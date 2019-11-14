import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Form, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistrationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        name: [''],
        email: [''],
        mobile: ['']
      }),
      address: this.formBuilder.array([
        this.formBuilder.group({
          location: '',
          housenumber: '',
          street: '',
          pin: ''
        })
      ])
    });
    console.log(this.registrationForm);

    this.address.valueChanges.subscribe(
      data => {
        console.log(data);
      }
    );

  }

  public get personal(): any {
    return this.registrationForm.get('personal');
  }

  public get address(): any {
    return this.registrationForm.get('address') as FormArray;
  }

  initAddress() {
    return this.formBuilder.group({
      location: '',
      housenumber: '',
      street: '',
      pin: ''
    });
  }

  addAddress() {
    //(this.registrationForm.controls['address'] as FormArray).push(this.initAddress());
    this.address.push(this.initAddress());
  }

  close(): void {
    this.dialogRef.close('sample');
  }

  save(): void {
    console.log(this.registrationForm);
    //this.dialogRef.close('yes click');
  }

}
