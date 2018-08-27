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
}
