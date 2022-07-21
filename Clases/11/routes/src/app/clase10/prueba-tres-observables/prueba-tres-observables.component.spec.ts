import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaTresObservablesComponent } from './prueba-tres-observables.component';

describe('PruebaTresObservablesComponent', () => {
  let component: PruebaTresObservablesComponent;
  let fixture: ComponentFixture<PruebaTresObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaTresObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaTresObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
