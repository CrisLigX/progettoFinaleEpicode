import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ifatture } from '../interfaces/ifatture';
import { InewFatture } from '../interfaces/inew-fatture';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class FattureService {


  urlFatture = environment.urlAPI + '/api/fatture?page=0&size=1500&sort=id,DESC';
  urlFatture2 = environment.urlAPI + '/api/fatture/';
  urlFattureCliente = environment.urlAPI + '/api/fatture/cliente/';

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

  getInvoicesByClient(id: number) {
    return this.http.get<Iresponse>(this.urlFattureCliente + id)
  }

  getInvoicesById(id: number) {
    return this.http.get<any>(this.urlFatture2 + id)
  }

  insertInvoices(obj: InewFatture) {
    return this.http.post(environment.urlAPI + '/api/fatture', obj);
  }
  
  updateInvoices(obj: InewFatture) {
    return this.http.put(this.urlFatture2 + obj.id, obj);
  }

  removeInvoices(obj: Ifatture) {
    return this.http.delete(this.urlFatture2 + obj.id);
  }

  getInvoicesDate(obj: string, obj2: string) {
    let url = '/api/fatture/data/?from=' + obj + '&to=' + obj2 + '&page=0&size=100&sort=id,DESC'
    return this.http.get<Iresponse>(environment.urlAPI + url);
  }
  
}
