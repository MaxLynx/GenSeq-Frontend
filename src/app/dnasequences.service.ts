import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DnasequencesService {

  constructor(private http: HttpClient) { }

  getSequences() {
    return this.http.get('api/dnasequences')
  }

  getSequenceById(id) {
    return this.http.get('api/dnasequences/' + id);
  }

  setSequence(sequence) {
    this.http.post('api/dnasequences', sequence);
  }

  updateSequence(id, sequence) {
    this.http.put('api/dnasequences/' + id, sequence);
  }

  deleteSequence(id) {
    this.http.delete('api/dnasequences/' + id);
  }

  filterSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('api/dnautils/filter', seqObj);
  }

  randomSequence(length) {
    return this.http.get('api/dnautils/random/' + length);
  }

  complementSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('api/dnautils/complement', seqObj);
  }

  transcriptSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('api/dnautils/transcript', seqObj);
  }

  mutateSequence(sequence, percents) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.put('api/dnautils/mutate/' + percents, seqObj);
  }

  measureSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('api/dnautils/measurebasepercentages', seqObj);
  }

}
