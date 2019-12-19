import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTopicsComponent } from './special-topics.component';

describe('SpecialTopicsComponent', () => {
  let component: SpecialTopicsComponent;
  let fixture: ComponentFixture<SpecialTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
