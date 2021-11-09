import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ifatture } from '../interfaces/ifatture';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  urlFatture = environment.urlAPI + '/api/fatture?page=0&size=150&sort=id,DESC';
  urlFatture2 = environment.urlAPI + '/api/clienti/';

  constructor(private http: HttpClient) { }

  getAllInvoices() {
    return this.http.get<Iresponse>(this.urlFatture);
  }
  
}
