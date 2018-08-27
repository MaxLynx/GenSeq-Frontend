import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnasequencesComponent } from './rnasequences.component';

describe('RnasequencesComponent', () => {
  let component: RnasequencesComponent;
  let fixture: ComponentFixture<RnasequencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnasequencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnasequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
