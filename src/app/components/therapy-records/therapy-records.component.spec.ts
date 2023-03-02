import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyRecordsComponent } from './therapy-records.component';

describe('TherapyRecordsComponent', () => {
  let component: TherapyRecordsComponent;
  let fixture: ComponentFixture<TherapyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapyRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
