import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploContenidoUnoComponent } from './ejemplo-contenido-uno.component';

describe('EjemploContenidoUnoComponent', () => {
  let component: EjemploContenidoUnoComponent;
  let fixture: ComponentFixture<EjemploContenidoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploContenidoUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploContenidoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
