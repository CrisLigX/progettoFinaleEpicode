import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ifatture } from '../interfaces/ifatture';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class FattureService {


  urlFatture = environment.urlAPI + '/api/fatture?page=0&size=1500&sort=id,DESC';
  urlFatture2 = environment.urlAPI + '/api/clienti/';

  constructor(private http: HttpClient) { }

  getAllInvoices() {
    return this.http.get<Iresponse>(this.urlFatture);
  }

  getInvoices30() {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/fatture?page=0&size=30&sort=id,DESC');
  }

  getInvoices70() {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/fatture?page=0&size=70&sort=id,DESC');
  }

  getInvoices120() {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/fatture?page=0&size=120&sort=id,DESC');
  }

  getInvoicesAll() {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/fatture?page=0&size=1500&sort=id,DESC');
  }
  
}
