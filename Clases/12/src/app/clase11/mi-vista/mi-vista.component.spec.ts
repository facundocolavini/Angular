import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiVistaComponent } from './mi-vista.component';

describe('MiVistaComponent', () => {
  let component: MiVistaComponent;
  let fixture: ComponentFixture<MiVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiVistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
