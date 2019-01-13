import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingListComponent } from './visiting-list.component';

describe('VisitingListComponent', () => {
  let component: VisitingListComponent;
  let fixture: ComponentFixture<VisitingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
