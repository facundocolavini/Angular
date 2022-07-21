import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradoCliComponent } from './generado-cli.component';

describe('GeneradoCliComponent', () => {
  let component: GeneradoCliComponent;
  let fixture: ComponentFixture<GeneradoCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradoCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
