import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { User } from './_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuthenticationJWT';
  currentUser : User;
  constructor(private router : Router, private authenticatonService: AuthenticationService){
    this.authenticatonService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout(){
    this.authenticatonService.logout();
    this.router.navigate(['/']);
  }
}
