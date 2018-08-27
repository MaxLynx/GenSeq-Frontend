import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RnasequencesService {

  constructor(private http: HttpClient) { }

  getSequences() {
    return this.http.get('api/rnasequences')
  }

  getSequenceById(id) {
    return this.http.get('api/rnasequences/' + id);
  }

  setSequence(sequence) {
    this.http.post('api/rnasequences', sequence);
  }

  updateSequence(id, sequence) {
    this.http.put('api/rnasequences/' + id, sequence);
  }

  deleteSequence(id) {
    this.http.delete('api/rnasequences/' + id);
  }
}
