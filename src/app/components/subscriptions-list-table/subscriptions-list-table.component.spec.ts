import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsListTableComponent } from './subscriptions-list-table.component';

describe('SubscriptionsListTableComponent', () => {
  let component: SubscriptionsListTableComponent;
  let fixture: ComponentFixture<SubscriptionsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
