import { Component, OnInit } from '@angular/core';
import { DnasequencesService } from '../dnasequences.service';
import { RnasequencesService } from '../rnasequences.service';
import { ProteinsequencesService } from '../proteinsequences.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dnadata: DnasequencesService,
    private rnadata: RnasequencesService,
    private proteindata: ProteinsequencesService) { }

  ngOnInit() {
  }

  processFile(event, seqKind) {
    let dataService;
    if(seqKind == "dna"){
      dataService = this.dnadata;
    }
    else
    if(seqKind == "rna"){
      dataService = this.rnadata;
    }
    else
    if(seqKind == "protein"){
      dataService = this.proteindata;
    }
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      let data = reader.result;
      data.split('/').forEach(function (seq){
        let seqInfo = seq.split('\n');
        let sequence = {id: Math.round(Math.random()*1000000), sequence: seqInfo[1], description: seqInfo[0], valid: true};
        dataService.setSequence(sequence).subscribe((data)=>{
        });
        
      });
    }
    reader.readAsText(file);

  
  }

  clearDB(seqKind){
    let dataService;
    if(seqKind == "dna"){
      dataService = this.dnadata;
    }
    else
    if(seqKind == "rna"){
      dataService = this.rnadata;
    }
    else
    if(seqKind == "protein"){
      dataService = this.proteindata;
    }

    
    dataService.getSequences().subscribe(
      data => {
      let sequences = data;
      sequences.forEach(function (seq){
        dataService.deleteSequence(seq.id).subscribe((data)=>{
        });
      });
    });
  }
}
