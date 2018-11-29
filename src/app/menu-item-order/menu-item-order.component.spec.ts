import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemOrderComponent } from './menu-item-order.component';

describe('MenuItemOrderComponent', () => {
  let component: MenuItemOrderComponent;
  let fixture: ComponentFixture<MenuItemOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
