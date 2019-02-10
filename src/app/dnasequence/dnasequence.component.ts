import { Component, OnInit } from '@angular/core';
import { DnasequencesService } from '../dnasequences.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dnasequence',
  templateUrl: './dnasequence.component.html',
  styleUrls: ['./dnasequence.component.css']
})
export class DnasequenceComponent implements OnInit {

  dnasequence$: Object;
  copiedInfoShow: Boolean;
  sequence: Object;
  cashedSequence: Object;
  percentages: Object;
  isProcessing: boolean;

  constructor(private route: ActivatedRoute, private data: DnasequencesService) { }

  ngOnInit() {
    this.data.getSequenceById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.dnasequence$ = data; 
      }
    );
    this.sequence = {id: "", sequence: "", description: "", valid: true};
    this.cashedSequence = this.sequence;
    this.copiedInfoShow = false;
    this.percentages = {first: "", second: ""};
    this.isProcessing = false;
  }

  onCopied() {
    this.copiedInfoShow = true;
    this.cashedSequence = this.sequence;
    this.sequence = this.dnasequence$;
  }

  filter(value: string) {
    this.isProcessing = true;
    this.cashedSequence = this.sequence;
    this.data.filterSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  random(length: number) {
    this.isProcessing = true;
    this.cashedSequence = this.sequence;
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
    this.cashedSequence = this.sequence;
    this.data.complementSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  measure(value: string) {
    this.isProcessing = true;
    this.cashedSequence = this.sequence;
    this.data.measureSequence(value).subscribe(
      data => {
        this.percentages = data;
        this.isProcessing = false;
      }
    );
  }
  mutate(value: string, percents: number) {
    this.isProcessing = true;
    this.cashedSequence = this.sequence;
    this.data.mutateSequence(value, percents).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  transcript(value: string) {
    this.isProcessing = true;
    this.cashedSequence = this.sequence;
    this.data.transcriptSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  translate(value: string) {
    this.isProcessing = true;
    this.cashedSequence = this.sequence;
    this.data.translateSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  processFile(event) {
    this.isProcessing = true;
    this.cashedSequence = this.sequence;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      this.sequence = {id: "", sequence: reader.result, description: "FROM FILE", valid: true};
      this.isProcessing = false;
    }
    reader.readAsText(file);

  
  }
  
    getCached() {
      this.sequence = this.cashedSequence;
    }
}
