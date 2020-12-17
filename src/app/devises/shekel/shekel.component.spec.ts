import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShekelComponent } from './shekel.component';

describe('ShekelComponent', () => {
  let component: ShekelComponent;
  let fixture: ComponentFixture<ShekelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShekelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShekelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
