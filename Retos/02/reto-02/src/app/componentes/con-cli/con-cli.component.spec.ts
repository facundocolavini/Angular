import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCliComponent } from './con-cli.component';

describe('ConCliComponent', () => {
  let component: ConCliComponent;
  let fixture: ComponentFixture<ConCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
