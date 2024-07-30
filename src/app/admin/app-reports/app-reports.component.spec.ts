import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReportsComponent } from './app-reports.component';

describe('AppReportsComponent', () => {
  let component: AppReportsComponent;
  let fixture: ComponentFixture<AppReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
