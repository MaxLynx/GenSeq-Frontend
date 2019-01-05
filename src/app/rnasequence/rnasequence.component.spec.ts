import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnasequenceComponent } from './rnasequence.component';

describe('RnasequenceComponent', () => {
  let component: RnasequenceComponent;
  let fixture: ComponentFixture<RnasequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnasequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnasequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
