import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IClienti } from '../interfaces/iclienti';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlClienti = environment.urlAPI + '/api/clienti?size=100';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
   }

  getAllClients() {
    return this.http.get<Iresponse>(this.urlClienti);
  }

  getUsersById(id: any) {
    return this.http.get<any>(this.urlClienti + id)
  }

  deleteUsers(obj: IClienti) {
    return this.http.delete(this.urlClienti + obj.id);
  }

  insertUsers(obj: IClienti) {
    return this.http.post<IClienti>(this.urlClienti, obj);
  }

  updateUsers(item: IClienti) {
    return this.http.put<IClienti>(this.urlClienti + item.id, item);
  }
}
