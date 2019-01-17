import { Component, OnInit } from '@angular/core';
import { ProteinsequencesService } from '../proteinsequences.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proteinsequences',
  templateUrl: './proteinsequences.component.html',
  styleUrls: ['./proteinsequences.component.css']
})
export class ProteinsequencesComponent implements OnInit {

  proteinsequences$: Object;
  sequence: Object;
  isProcessing: boolean;

  constructor(private data: ProteinsequencesService) { }

  ngOnInit() {
    this.data.getSequences().subscribe(
      data => this.proteinsequences$ = data 
    );
    this.sequence = {id: "", sequence: "", description: "EMPTY", valid: true};
    this.isProcessing = false;
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
  search(value: string) {
    this.isProcessing = true;
    this.data.searchSequences(value).subscribe(
      data => {
        this.proteinsequences$ = data;
        this.isProcessing = false;
      }
    );
  }
  getAll() {
    this.isProcessing = true;
    this.data.getSequences().subscribe(
      data => {
      this.proteinsequences$ = data;
      this.isProcessing = false;
    } 
  );
  }
}
