import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableLoadComponent } from './available-load.component';

describe('AvailableLoadComponent', () => {
  let component: AvailableLoadComponent;
  let fixture: ComponentFixture<AvailableLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
