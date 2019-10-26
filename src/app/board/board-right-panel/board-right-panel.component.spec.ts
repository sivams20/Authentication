import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRightPanelComponent } from './board-right-panel.component';

describe('BoardRightPanelComponent', () => {
  let component: BoardRightPanelComponent;
  let fixture: ComponentFixture<BoardRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
