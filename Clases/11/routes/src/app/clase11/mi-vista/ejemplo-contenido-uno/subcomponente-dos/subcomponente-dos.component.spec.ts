import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponenteDosComponent } from './subcomponente-dos.component';

describe('SubcomponenteDosComponent', () => {
  let component: SubcomponenteDosComponent;
  let fixture: ComponentFixture<SubcomponenteDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcomponenteDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcomponenteDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
