import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuanComponent } from './yuan.component';

describe('YuanComponent', () => {
  let component: YuanComponent;
  let fixture: ComponentFixture<YuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
