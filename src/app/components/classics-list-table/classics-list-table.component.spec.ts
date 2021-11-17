import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicsListTableComponent } from './classics-list-table.component';

describe('ClassicsListTableComponent', () => {
  let component: ClassicsListTableComponent;
  let fixture: ComponentFixture<ClassicsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicsListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
