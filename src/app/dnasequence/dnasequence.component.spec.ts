import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnasequenceComponent } from './dnasequence.component';

describe('DnasequenceComponent', () => {
  let component: DnasequenceComponent;
  let fixture: ComponentFixture<DnasequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnasequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnasequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
