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
  cashedSequences: Array<Object>;
  alreadyGeneratedSequences: Array<Object>;
  percentages: Object;
  isProcessing: boolean;

  constructor(private data: DnasequencesService) { }


  ngOnInit() {
    this.data.getSequences().subscribe(
        data => {
        this.dnasequences$ = data;
      } 
    );
    this.sequence = {id: "", sequence: "", description: "", valid: true};
    this.cashedSequences = []
    this.alreadyGeneratedSequences = []
    this.cashedSequences.push(this.sequence);
    this.percentages = {first: "", second: ""};
    this.isProcessing = false;
  }

  filter(value: string) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.filterSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  random(length: number) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    if(length <= 200000){
      this.data.randomSequence(length).subscribe(
        data => {
          this.sequence = data;
          this.isProcessing = false;
        }
      );
    }
  }
  complement(value: string) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.complementSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  measure(value: string) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.measureSequence(value).subscribe(
      data => {
        this.percentages = data;
        this.isProcessing = false;
      }
    );
  }
  mutate(value: string, percents: number) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.mutateSequence(value, percents).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  transcript(value: string) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.transcriptSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  translate(value: string) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.translateSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  search(value: string) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.searchSequences(value).subscribe(
      data => {
        this.dnasequences$ = data;
        this.isProcessing = false;
      }
    );
  }
  getAll() {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    this.data.getSequences().subscribe(
      data => {
      this.dnasequences$ = data;
      this.isProcessing = false;
    } 
  );
  }

  processFile(event) {
    this.isProcessing = true;
    this.cashedSequences.push(this.sequence);
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      this.sequence = {id: "", sequence: reader.result, description: "FROM FILE", valid: true};
      this.isProcessing = false;
    }
    reader.readAsText(file);

  
  }


  getCached() {
    this.alreadyGeneratedSequences.push(this.sequence);
    this.sequence = this.cashedSequences.pop();
  }

  getAlreadyGenerated() {
    this.cashedSequences.push(this.sequence);
    this.sequence = this.alreadyGeneratedSequences.pop();
  }

}
