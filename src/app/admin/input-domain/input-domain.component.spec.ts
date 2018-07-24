import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDomainComponent } from './input-domain.component';

describe('InputDomainComponent', () => {
  let component: InputDomainComponent;
  let fixture: ComponentFixture<InputDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
