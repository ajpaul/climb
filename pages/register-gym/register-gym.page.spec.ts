import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGymPage } from './register-gym.page';

describe('RegisterGymPage', () => {
  let component: RegisterGymPage;
  let fixture: ComponentFixture<RegisterGymPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGymPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGymPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
