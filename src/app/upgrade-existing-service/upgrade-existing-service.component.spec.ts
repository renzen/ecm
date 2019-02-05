import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeExistingServiceComponent } from './upgrade-existing-service.component';

describe('UpgradeExistingServiceComponent', () => {
  let component: UpgradeExistingServiceComponent;
  let fixture: ComponentFixture<UpgradeExistingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeExistingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeExistingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
