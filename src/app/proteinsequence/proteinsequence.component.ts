import { Component, OnInit } from '@angular/core';
import { ProteinsequencesService } from '../proteinsequences.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proteinsequence',
  templateUrl: './proteinsequence.component.html',
  styleUrls: ['./proteinsequence.component.css']
})
export class ProteinsequenceComponent implements OnInit {

  proteinsequence$: Object;
  copiedInfoShow: Boolean;
  sequence: Object;
  cashedSequences: Array<Object>;
  alreadyGeneratedSequences: Array<Object>;
  isProcessing: boolean;

  constructor(private route: ActivatedRoute, private data: ProteinsequencesService) { }

  ngOnInit() {
    this.data.getSequenceById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.proteinsequence$ = data; 
      }
    );
    this.sequence = {id: "", sequence: "", description: "", valid: true};
    this.alreadyGeneratedSequences = []
    this.cashedSequences = []
    this.cashedSequences.push(this.sequence);
    this.isProcessing = false;
  }

  onCopied() {
    this.copiedInfoShow = true;
    this.cashedSequences.push(this.sequence);
    this.sequence = this.proteinsequence$;
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
