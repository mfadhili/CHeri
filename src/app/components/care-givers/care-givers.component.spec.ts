import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareGiversComponent } from './care-givers.component';

describe('CareGiversComponent', () => {
  let component: CareGiversComponent;
  let fixture: ComponentFixture<CareGiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareGiversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareGiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
