import { Component, OnInit } from '@angular/core';
import { RnasequencesService } from '../rnasequences.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rnasequence',
  templateUrl: './rnasequence.component.html',
  styleUrls: ['./rnasequence.component.css']
})
export class RnasequenceComponent implements OnInit {

  rnasequence$: Object;
  copiedInfoShow: Boolean;

  constructor(private route: ActivatedRoute, private data: RnasequencesService) { }

  ngOnInit() {
    this.data.getSequenceById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.rnasequence$ = data; 
      }
    );
  }

  onCopied() {
    this.copiedInfoShow = true;
  }

}
