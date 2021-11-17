import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemporariesListTableComponent } from './contemporaries-list-table.component';

describe('ContemporariesListTableComponent', () => {
  let component: ContemporariesListTableComponent;
  let fixture: ComponentFixture<ContemporariesListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemporariesListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemporariesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
