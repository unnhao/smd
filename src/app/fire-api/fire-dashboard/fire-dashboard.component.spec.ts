import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDashboardComponent } from './fire-dashboard.component';

describe('FireDashboardComponent', () => {
  let component: FireDashboardComponent;
  let fixture: ComponentFixture<FireDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
