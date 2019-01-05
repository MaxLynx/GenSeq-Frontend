import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinsequenceComponent } from './proteinsequence.component';

describe('ProteinsequenceComponent', () => {
  let component: ProteinsequenceComponent;
  let fixture: ComponentFixture<ProteinsequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinsequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
