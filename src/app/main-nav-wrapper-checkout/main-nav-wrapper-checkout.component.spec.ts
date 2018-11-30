import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavWrapperCheckoutComponent } from './main-nav-wrapper-checkout.component';

describe('MainNavWrapperCheckoutComponent', () => {
  let component: MainNavWrapperCheckoutComponent;
  let fixture: ComponentFixture<MainNavWrapperCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavWrapperCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavWrapperCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
