import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDosComponent } from './contenido-dos.component';

describe('ContenidoDosComponent', () => {
  let component: ContenidoDosComponent;
  let fixture: ComponentFixture<ContenidoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
