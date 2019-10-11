import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@app/_model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService{

    private currentUserSubject : BehaviorSubject <User>;
    public currentUser : Observable <User>;
    constructor(private http : HttpClient){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    login(username: string, password: string){
        return this.http.post<User>('http://localhost:4200/users/authenticate',{ username, password })
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }

    logout(){
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}