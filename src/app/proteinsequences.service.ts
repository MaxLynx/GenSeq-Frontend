import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProteinsequencesService {

  constructor(private http: HttpClient) { }

  getSequences() {
    return this.http.get('https://genseqbackend.herokuapp.com/proteinsequences')
  }

  searchSequences(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/proteinsequences/search', seqObj);
  }

  getSequenceById(id) {
    return this.http.get('https://genseqbackend.herokuapp.com/proteinsequences/' + id);
  }

  setSequence(sequence) {
    return this.http.post('https://genseqbackend.herokuapp.com/proteinsequences', sequence);
  }

  updateSequence(id, sequence) {
    return this.http.put('https://genseqbackend.herokuapp.com/proteinsequences/' + id, sequence);
  }

  deleteSequence(id) {
    return this.http.delete('https://genseqbackend.herokuapp.com/proteinsequences/' + id);
  }

  filterSequence(sequence) {
    let seqObj = {id: "", sequence: sequence, description: "USER INPUT", valid: true};
    return this.http.post('https://genseqbackend.herokuapp.com/proteinutils/filter', seqObj);
  }

  randomSequence(length) {
    return this.http.get('https://genseqbackend.herokuapp.com/proteinutils/random/' + length);
  }
}
