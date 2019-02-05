import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFaqsComponent } from './top-faqs.component';

describe('TopFaqsComponent', () => {
  let component: TopFaqsComponent;
  let fixture: ComponentFixture<TopFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
