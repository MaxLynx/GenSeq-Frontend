import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RnasequencesService {

  constructor(private http: HttpClient) { }

  getSequences() {
    return this.http.get('https://genseqbackend.herokuapp.com/rnasequences')
  }

  getSequenceById(id) {
    return this.http.get('https://genseqbackend.herokuapp.com/rnasequences/' + id);
  }

  setSequence(sequence) {
    return this.http.post('https://genseqbackend.herokuapp.com/rnasequences', sequence);
  }

  updateSequence(id, sequence) {
    return this.http.put('https://genseqbackend.herokuapp.com/rnasequences/' + id, sequence);
  }

  deleteSequence(id) {
    return this.http.delete('https://genseqbackend.herokuapp.com/rnasequences/' + id);
  }
}
