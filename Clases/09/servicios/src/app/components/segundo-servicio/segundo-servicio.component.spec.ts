import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoServicioComponent } from './segundo-servicio.component';

describe('SegundoServicioComponent', () => {
  let component: SegundoServicioComponent;
  let fixture: ComponentFixture<SegundoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
