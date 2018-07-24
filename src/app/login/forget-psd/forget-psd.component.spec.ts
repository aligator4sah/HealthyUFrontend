import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPsdComponent } from './forget-psd.component';

describe('ForgetPsdComponent', () => {
  let component: ForgetPsdComponent;
  let fixture: ComponentFixture<ForgetPsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
