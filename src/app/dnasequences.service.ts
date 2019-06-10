import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DnasequencesService {

  constructor(private http: HttpClient) { }

  getSequences() {
    return this.http.get('https://genseqbackend.herokuapp.com/dnasequences');
  }

  searchSequences(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/dnasequences/search', seqObj);
  }

  getSequenceById(id) {
    return this.http.get('https://genseqbackend.herokuapp.com/dnasequences/' + id);
  }

  setSequence(sequence) {
    return this.http.post('https://genseqbackend.herokuapp.com/dnasequences', sequence);
  }

  updateSequence(id, sequence) {
    return this.http.put('https://genseqbackend.herokuapp.com/dnasequences/' + id, sequence);
  }

  deleteSequence(id) {
    return this.http.delete('https://genseqbackend.herokuapp.com/dnasequences/' + id);
  }

  filterSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/dnautils/filter', seqObj);
  }

  randomSequence(length) {
    return this.http.get('https://genseqbackend.herokuapp.com/dnautils/random/' + length);
  }

  complementSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/dnautils/complement', seqObj);
  }

  transcriptSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/dnautils/transcript', seqObj);
  }

  translateSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/dnautils/translate', seqObj);
  }

  mutateSequence(sequence, percents) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.put('https://genseqbackend.herokuapp.com/dnautils/mutate/' + percents, seqObj);
  }

  measureSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/dnautils/measurebasepercentages', seqObj);
  }

}
