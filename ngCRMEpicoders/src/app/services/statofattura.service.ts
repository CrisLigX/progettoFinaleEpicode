import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class StatofatturaService {

  constructor(private http: HttpClient) { }

  getStatus () {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/statifattura');
  }
}
