import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLeftPanelComponent } from './board-left-panel.component';

describe('BoardLeftPanelComponent', () => {
  let component: BoardLeftPanelComponent;
  let fixture: ComponentFixture<BoardLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
