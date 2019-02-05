import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotorialsComponent } from './videotorials.component';

describe('VideotorialsComponent', () => {
  let component: VideotorialsComponent;
  let fixture: ComponentFixture<VideotorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideotorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
