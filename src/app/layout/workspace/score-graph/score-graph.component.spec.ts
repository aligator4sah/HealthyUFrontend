import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreGraphComponent } from './score-graph.component';

describe('ScoreGraphComponent', () => {
  let component: ScoreGraphComponent;
  let fixture: ComponentFixture<ScoreGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
