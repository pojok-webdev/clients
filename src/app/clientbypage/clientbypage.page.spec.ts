import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientbypagePage } from './clientbypage.page';

describe('ClientbypagePage', () => {
  let component: ClientbypagePage;
  let fixture: ComponentFixture<ClientbypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientbypagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientbypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
