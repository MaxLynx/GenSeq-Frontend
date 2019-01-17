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
  isProcessing: boolean;

  constructor(private route: ActivatedRoute, private data: ProteinsequencesService) { }

  ngOnInit() {
    this.data.getSequenceById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.proteinsequence$ = data; 
      }
    );
    this.sequence = {id: "", sequence: "", description: "EMPTY", valid: true};
    this.isProcessing = false;
  }

  onCopied() {
    this.copiedInfoShow = true;
    this.sequence = this.proteinsequence$;
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
  
}
