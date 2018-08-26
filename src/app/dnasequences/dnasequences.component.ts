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

  constructor(private data: DnasequencesService) { }

  ngOnInit() {
    this.data.getSequences().subscribe(
      data => this.dnasequences$ = data 
    );
  }

}
