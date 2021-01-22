import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabycardsPage } from './babycards.page';

describe('BabycardsPage', () => {
  let component: BabycardsPage;
  let fixture: ComponentFixture<BabycardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabycardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabycardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
