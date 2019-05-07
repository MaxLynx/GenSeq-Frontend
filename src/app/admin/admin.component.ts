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
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      let data = reader.result;
      data.split('/').forEach(function (seq){
        let seqInfo = seq.split('\n');
        let sequence = {id: "", sequence: seqInfo[1], description: seqInfo[0], valid: true};
        if(seqKind == "dna"){
          this.dnadata.setSequence(sequence);
        }
        else
        if(seqKind == "rna"){
          this.rnadata.setSequence(sequence);
        }
        else
        if(seqKind == "protein"){
          this.proteindata.setSequence(sequence);
        }
        
      });
    }
    reader.readAsText(file);

  
  }

  clearDB(seqKind){
    let data;
    if(seqKind == "dna"){
      data = this.dnadata;
    }
    else
    if(seqKind == "rna"){
      data = this.rnadata;
    }
    else
    if(seqKind == "protein"){
      data = this.proteindata;
    }

    
    data.getSequences().subscribe(
      data => {
      let sequences = data;

      sequences.forEach(function (seq){
        data.deleteSequence(seq.id);
      });
    } 
  );
  }
}
