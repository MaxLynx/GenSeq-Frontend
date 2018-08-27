import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProteinsequencesService {

  constructor(private http: HttpClient) { }

  getSequences() {
    return this.http.get('api/proteinsequences')
  }

  getSequenceById(id) {
    return this.http.get('api/proteinsequences/' + id);
  }

  setSequence(sequence) {
    this.http.post('api/proteinsequences', sequence);
  }

  updateSequence(id, sequence) {
    this.http.put('api/proteinsequences/' + id, sequence);
  }

  deleteSequence(id) {
    this.http.delete('api/proteinsequences/' + id);
  }
}
