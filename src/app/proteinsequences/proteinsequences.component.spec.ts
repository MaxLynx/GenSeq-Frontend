import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinsequencesComponent } from './proteinsequences.component';

describe('ProteinsequencesComponent', () => {
  let component: ProteinsequencesComponent;
  let fixture: ComponentFixture<ProteinsequencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinsequencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinsequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
