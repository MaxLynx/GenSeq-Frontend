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
  percentages: Object;
  isProcessing: boolean;

  constructor(private route: ActivatedRoute, private data: DnasequencesService) { }

  ngOnInit() {
    this.data.getSequenceById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.dnasequence$ = data; 
      }
    );
    this.sequence = {id: "", sequence: "", description: "EMPTY", valid: true};
    this.copiedInfoShow = false;
    this.percentages = {first: "", second: ""};
    this.isProcessing = false;
  }

  onCopied() {
    this.copiedInfoShow = true;
    this.sequence = this.dnasequence$;
  }

  filter(value: string) {
    this.isProcessing = true;
    this.data.filterSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  random(length: number) {
    this.isProcessing = true;
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
    this.data.complementSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  measure(value: string) {
    this.isProcessing = true;
    this.data.measureSequence(value).subscribe(
      data => {
        this.percentages = data;
        this.isProcessing = false;
      }
    );
  }
  mutate(value: string, percents: number) {
    this.isProcessing = true;
    this.data.mutateSequence(value, percents).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  transcript(value: string) {
    this.isProcessing = true;
    this.data.transcriptSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }
  translate(value: string) {
    this.isProcessing = true;
    this.data.translateSequence(value).subscribe(
      data => {
        this.sequence = data;
        this.isProcessing = false;
      }
    );
  }

}
