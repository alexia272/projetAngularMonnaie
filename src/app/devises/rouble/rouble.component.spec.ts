import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoubleComponent } from './rouble.component';

describe('RoubleComponent', () => {
  let component: RoubleComponent;
  let fixture: ComponentFixture<RoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
