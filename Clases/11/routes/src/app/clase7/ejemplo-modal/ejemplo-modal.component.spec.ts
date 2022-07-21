import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploModalComponent } from './ejemplo-modal.component';

describe('EjemploModalComponent', () => {
  let component: EjemploModalComponent;
  let fixture: ComponentFixture<EjemploModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
