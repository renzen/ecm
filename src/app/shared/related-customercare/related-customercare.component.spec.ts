import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCustomercareComponent } from './related-customercare.component';

describe('RelatedCustomercareComponent', () => {
  let component: RelatedCustomercareComponent;
  let fixture: ComponentFixture<RelatedCustomercareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedCustomercareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedCustomercareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
