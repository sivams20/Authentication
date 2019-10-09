import { Component, OnInit } from '@angular/core';
import { ListService } from '../list/listService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {

  }

  onSearchChange(searchValue: string): void {  
    this.listService.changeMessage(searchValue);
  }

}
