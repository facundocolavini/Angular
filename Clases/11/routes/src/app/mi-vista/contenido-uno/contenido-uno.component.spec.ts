import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoUnoComponent } from './contenido-uno.component';

describe('ContenidoUnoComponent', () => {
  let component: ContenidoUnoComponent;
  let fixture: ComponentFixture<ContenidoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
