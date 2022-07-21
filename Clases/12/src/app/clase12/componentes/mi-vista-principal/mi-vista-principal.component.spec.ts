import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiVistaPrincipalComponent } from './mi-vista-principal.component';

describe('MiVistaPrincipalComponent', () => {
  let component: MiVistaPrincipalComponent;
  let fixture: ComponentFixture<MiVistaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiVistaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiVistaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
