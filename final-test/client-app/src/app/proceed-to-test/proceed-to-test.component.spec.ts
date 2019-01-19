import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedToTestComponent } from './proceed-to-test.component';

describe('ProceedToTestComponent', () => {
  let component: ProceedToTestComponent;
  let fixture: ComponentFixture<ProceedToTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedToTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedToTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
