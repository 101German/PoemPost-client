import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListTableComponent } from './author-list-table.component';

describe('AuthorListTableComponent', () => {
  let component: AuthorListTableComponent;
  let fixture: ComponentFixture<AuthorListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
