import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})
export class LaneComponent implements OnInit {
  @Input() location: FormGroup;

  origin = new FormControl();
  options = [{'city': 'One','zip': 1 }, {'city': 'Two','zip': 2 },{'city': 'Three','zip': 3 }];
  requirements = ['Liftgate', 'Residential', 'Lumper', 'Inside Pickup', 'Drop Trailer'];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdr.detectChanges();
    console.log(this.location);
  }

  onOriginChange(item, type){
    if(type == 'origin'){
      this.location.controls['originZip'].setValue(item.zip);
    }else{
      this.location.controls['origin'].setValue(item);
    }
  }

}
