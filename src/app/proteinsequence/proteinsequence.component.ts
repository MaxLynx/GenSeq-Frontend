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

  constructor(private route: ActivatedRoute, private data: ProteinsequencesService) { }

  ngOnInit() {
    this.data.getSequenceById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.proteinsequence$ = data; 
      }
    );
  }

  onCopied() {
    this.copiedInfoShow = true;
  }

}
