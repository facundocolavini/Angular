import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDosServiciosComponent } from './prueba-dos-servicios.component';

describe('PruebaDosServiciosComponent', () => {
  let component: PruebaDosServiciosComponent;
  let fixture: ComponentFixture<PruebaDosServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDosServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaDosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
