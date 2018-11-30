import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavWrapperListComponent } from './main-nav-wrapper-list.component';

describe('MainNavWrapperListComponent', () => {
  let component: MainNavWrapperListComponent;
  let fixture: ComponentFixture<MainNavWrapperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavWrapperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavWrapperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
