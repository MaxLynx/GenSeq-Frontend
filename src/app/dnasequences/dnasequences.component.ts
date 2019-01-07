import { Component, OnInit } from '@angular/core';
import { DnasequencesService } from '../dnasequences.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dnasequences',
  templateUrl: './dnasequences.component.html',
  styleUrls: ['./dnasequences.component.css']
})

export class DnasequencesComponent implements OnInit {

  dnasequences$: Object;
  sequence: Object;
  percentages: Object;

  constructor(private data: DnasequencesService) { }


  ngOnInit() {
    this.data.getSequences().subscribe(
        data => {
        this.dnasequences$ = data;
      } 
    );
    this.sequence = {id: "", sequence: "", description: "EMPTY", valid: true};
    this.percentages = {first: "", second: ""};
  }

  filter(value: string) {
    this.data.filterSequence(value).subscribe(
      data => {
        this.sequence = data;
      }
    );
  }
  random(length: number) {
    if(length <= 200000){
      this.data.randomSequence(length).subscribe(
        data => {
          this.sequence = data;
        }
      );
    }
  }
  complement(value: string) {
    this.data.complementSequence(value).subscribe(
      data => {
        this.sequence = data;
      }
    );
  }
  measure(value: string) {
    this.data.measureSequence(value).subscribe(
      data => {
        this.percentages = data;
      }
    );
  }
  mutate(value: string, percents: number) {
    this.data.mutateSequence(value, percents).subscribe(
      data => {
        this.sequence = data;
      }
    );
  }
  transcript(value: string) {
    this.data.transcriptSequence(value).subscribe(
      data => {
        this.sequence = data;
      }
    );
  }

}
