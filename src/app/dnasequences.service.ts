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
}
