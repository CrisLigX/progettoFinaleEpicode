import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClienti } from '../interfaces/iclienti';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  private urlAPI = 'http://localhost:3000/product/'

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<IClienti[]>(this.urlAPI);
  }

  getUsersById(id: any) {
    return this.http.get<IClienti>(this.urlAPI + id)
  }

  deleteUsers(obj: IClienti) {
    return this.http.delete(this.urlAPI + obj.id);
  }

  insertUsers(obj: IClienti) {
    return this.http.post<IClienti>(this.urlAPI, obj);
  }

  updateUsers(item: IClienti) {
    return this.http.put<IClienti>(this.urlAPI + item.id, item);
  }
}
