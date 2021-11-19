import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesGridListComponent } from './categories-grid-list.component';

describe('CategoriesGridListComponent', () => {
  let component: CategoriesGridListComponent;
  let fixture: ComponentFixture<CategoriesGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
