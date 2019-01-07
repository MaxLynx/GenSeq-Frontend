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
  }

  onCopied() {
    this.copiedInfoShow = true;
    this.sequence = this.dnasequence$;
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
