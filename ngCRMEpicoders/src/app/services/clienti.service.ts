import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from '../class/clienti';
import { InewClient } from '../interfaces/inew-client';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlClienti = environment.urlAPI + '/api/clienti?page=0&size=2000&sort=id,DESC';
  urlClienti2 = environment.urlAPI + '/api/clienti/';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
   }

  getAllClients() {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/clienti?page=0&size=2000&sort=id,DESC');
  }

  getClients100() {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/clienti?page=0&size=100&sort=id,DESC');
  }

  getClients20() {
    return this.http.get<Iresponse>(environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,DESC');
  }

  getTipiClienti() {
    return this.http.get<[]>(this.urlClienti2 + 'tipicliente');
  }

  getClientsById(id: any) {
    return this.http.get<any>(this.urlClienti2 + id)
  }

  deleteClients(obj: Clienti) {
    return this.http.delete(this.urlClienti2 + obj.id);
  }

  insertClients(obj: InewClient) {
    return this.http.post(environment.urlAPI + '/api/clienti', obj);
  }

  updateClients(item: Clienti) {
    return this.http.put(this.urlClienti2 + item.id, item);
  }

  ricercaCliente(item: any) {
    return this.http.post<any>(environment.urlAPI + '/api/clienti/find', item);
  }
}
