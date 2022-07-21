import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiVistaHijaComponent } from './mi-vista-hija.component';

describe('MiVistaHijaComponent', () => {
  let component: MiVistaHijaComponent;
  let fixture: ComponentFixture<MiVistaHijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiVistaHijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiVistaHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
