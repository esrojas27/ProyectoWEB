import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEjercitoComponent } from './nuevo-ejercito.component';

describe('NuevoEjercitoComponent', () => {
  let component: NuevoEjercitoComponent;
  let fixture: ComponentFixture<NuevoEjercitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEjercitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEjercitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
