import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form() { return this.loginForm.controls; }

  login(){
    if(this.loginForm.invalid){
      return false;
    }
    //this.route.navigate(['/order']);
    this.authService.login(this.form.username.value, this.form.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error =>{
          console.log(error);
        }
      )
    
  }

}
