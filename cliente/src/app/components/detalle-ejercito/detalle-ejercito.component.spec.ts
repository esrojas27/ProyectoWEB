import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEjercitoComponent } from './detalle-ejercito.component';

describe('DetalleEjercitoComponent', () => {
  let component: DetalleEjercitoComponent;
  let fixture: ComponentFixture<DetalleEjercitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEjercitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEjercitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
