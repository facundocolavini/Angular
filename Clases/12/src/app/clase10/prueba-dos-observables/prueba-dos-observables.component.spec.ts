import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDosObservablesComponent } from './prueba-dos-observables.component';

describe('PruebaDosObservablesComponent', () => {
  let component: PruebaDosObservablesComponent;
  let fixture: ComponentFixture<PruebaDosObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDosObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaDosObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
