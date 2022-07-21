import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploContenidoDosComponent } from './ejemplo-contenido-dos.component';

describe('EjemploContenidoDosComponent', () => {
  let component: EjemploContenidoDosComponent;
  let fixture: ComponentFixture<EjemploContenidoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploContenidoDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploContenidoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
