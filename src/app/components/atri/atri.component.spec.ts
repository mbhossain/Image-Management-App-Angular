import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtriComponent } from './atri.component';

describe('AtriComponent', () => {
  let component: AtriComponent;
  let fixture: ComponentFixture<AtriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
