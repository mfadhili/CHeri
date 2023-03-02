import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingHandsComponent } from './helping-hands.component';

describe('HelpingHandsComponent', () => {
  let component: HelpingHandsComponent;
  let fixture: ComponentFixture<HelpingHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpingHandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpingHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
