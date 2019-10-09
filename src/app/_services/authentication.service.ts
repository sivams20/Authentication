import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService{
    constructor(private http : HttpClient){

    }

    login(username: string, password: string){
        return this.http.post('http://localhost:4200/users/authenticate',{ username, password })
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }));
    }

    logout(){

    }
}