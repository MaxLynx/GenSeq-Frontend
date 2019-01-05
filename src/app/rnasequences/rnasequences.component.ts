import { Component, OnInit } from '@angular/core';
import { RnasequencesService } from '../rnasequences.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rnasequences',
  templateUrl: './rnasequences.component.html',
  styleUrls: ['./rnasequences.component.css']
})
export class RnasequencesComponent implements OnInit {

  rnasequences$: Object;

  constructor(private data: RnasequencesService) { }

  ngOnInit() {
    this.data.getSequences().subscribe(
      data => this.rnasequences$ = data 
    );
  }

}
