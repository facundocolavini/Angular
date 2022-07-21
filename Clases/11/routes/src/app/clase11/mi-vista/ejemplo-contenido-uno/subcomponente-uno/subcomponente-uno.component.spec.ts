import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponenteUnoComponent } from './subcomponente-uno.component';

describe('SubcomponenteUnoComponent', () => {
  let component: SubcomponenteUnoComponent;
  let fixture: ComponentFixture<SubcomponenteUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcomponenteUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcomponenteUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
