import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNewServiceComponent } from './apply-new-service.component';

describe('ApplyNewServiceComponent', () => {
  let component: ApplyNewServiceComponent;
  let fixture: ComponentFixture<ApplyNewServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyNewServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyNewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
