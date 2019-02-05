import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EccmMsgComponent } from './eccm-msg.component';

describe('EccmMsgComponent', () => {
  let component: EccmMsgComponent;
  let fixture: ComponentFixture<EccmMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccmMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccmMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
