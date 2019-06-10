import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  testBackendConnection() {
    return this.http.get('https://genseqbackend.herokuapp.com/general/connection')
  }
}
