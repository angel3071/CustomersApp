import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemMoreInfoComponent } from './menu-item-more-info.component';

describe('MenuItemMoreInfoComponent', () => {
  let component: MenuItemMoreInfoComponent;
  let fixture: ComponentFixture<MenuItemMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
