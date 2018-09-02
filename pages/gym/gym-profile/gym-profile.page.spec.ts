import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymProfilePage } from './gym-profile.page';

describe('GymProfilePage', () => {
  let component: GymProfilePage;
  let fixture: ComponentFixture<GymProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
