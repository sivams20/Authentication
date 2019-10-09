import { Injectable } from '@angular/core';
import { Observable, Subscriber, BehaviorSubject, Subject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ListService {

    private messageSource = new BehaviorSubject(null);
    private orderData = new BehaviorSubject(false);
    currentMessage = this.messageSource.asObservable();
    savedData = this.orderData.asObservable();

    constructor(private http: HttpClient){

    }

    fetchList() : Observable <any[]> {
        let result = this.http.get<any []>('./assets/sample.json');
        return result;
    }

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    setOrderData(data: any){
        var test = "    fdsfsd ";
        console.log(data);
        this.orderData.next(data);
    }
}