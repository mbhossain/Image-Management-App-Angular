import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariyamSarahAtriComponent } from './mariyam-sarah-atri.component';

describe('MariyamSarahAtriComponent', () => {
  let component: MariyamSarahAtriComponent;
  let fixture: ComponentFixture<MariyamSarahAtriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariyamSarahAtriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MariyamSarahAtriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
