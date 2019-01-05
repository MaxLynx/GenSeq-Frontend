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

  constructor(private data: ProteinsequencesService) { }

  ngOnInit() {
    this.data.getSequences().subscribe(
      data => this.proteinsequences$ = data 
    );
  }

}
