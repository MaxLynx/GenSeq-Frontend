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

  constructor(private route: ActivatedRoute, private data: DnasequencesService) { }

  ngOnInit() {
    this.data.getSequenceById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.dnasequence$ = data; 
      }
    );
    this.copiedInfoShow = false;
  }

  onCopied() {
    this.copiedInfoShow = true;
  }

}
