import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymListPage } from './gym-list.page';

describe('GymListPage', () => {
  let component: GymListPage;
  let fixture: ComponentFixture<GymListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
