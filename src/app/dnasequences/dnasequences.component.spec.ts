import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnasequencesComponent } from './dnasequences.component';

describe('DnasequencesComponent', () => {
  let component: DnasequencesComponent;
  let fixture: ComponentFixture<DnasequencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnasequencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnasequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
