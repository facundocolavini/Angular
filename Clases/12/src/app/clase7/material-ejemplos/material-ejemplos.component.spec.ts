import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEjemplosComponent } from './material-ejemplos.component';

describe('MaterialEjemplosComponent', () => {
  let component: MaterialEjemplosComponent;
  let fixture: ComponentFixture<MaterialEjemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialEjemplosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialEjemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
