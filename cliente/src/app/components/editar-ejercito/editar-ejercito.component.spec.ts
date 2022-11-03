import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEjercitoComponent } from './editar-ejercito.component';

describe('EditarEjercitoComponent', () => {
  let component: EditarEjercitoComponent;
  let fixture: ComponentFixture<EditarEjercitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEjercitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEjercitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
