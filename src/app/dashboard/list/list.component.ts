import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

import { HttpClient } from '@angular/common/http';
import { ListService } from './listService';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: any[] = [];
  public originalList: any[] = [];
  displayedColumns = [ 'name', 'email', 'origin', 'destination'];
  dataSource: MatTableDataSource<any>;
  result = [];
  constructor(private http: HttpClient, private listService: ListService) { }
  ngOnInit() {
	  this.listService.fetchList().subscribe(
      data => { 
        console.log(data);
        this.list = data;
        this.listService.savedData.subscribe(
          result => { 
            console.log(result);
            if(result !== false){
              this.list[this.list.length] = result;
            }
          }
        );

        for(var i = 0; i < data.length; i++){
          for(var j = 0; j < data[i].location.length; j++){
            var location = data[i].location;
            var obj = { name: data[i].contact.name, email: data[i].contact.email, origin: location[j].origin, destination: location[j].destination };
            this.result.push(obj);
          }
        }
        this.originalList = data;
        this.dataSource = new MatTableDataSource<Element>(this.result);
      }
    );

  //   forkJoin(
  //     this.listService.fetchList(), this.listService.savedData
  //  ).subscribe((res) => {
  //     console.log(res);
  //  });

    this.listService.currentMessage.subscribe(
      message => {
        if(message){
          message = message.trim(); 
          message = message.toLowerCase();
          this.dataSource.filter = message;
        }
      }
    );

  }

}
