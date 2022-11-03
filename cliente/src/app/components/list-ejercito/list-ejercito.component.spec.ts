import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEjercitoComponent } from './list-ejercito.component';

describe('ListEjercitoComponent', () => {
  let component: ListEjercitoComponent;
  let fixture: ComponentFixture<ListEjercitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEjercitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEjercitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
