import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesManageComponent } from './ques-manage.component';

describe('QuesManageComponent', () => {
  let component: QuesManageComponent;
  let fixture: ComponentFixture<QuesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
