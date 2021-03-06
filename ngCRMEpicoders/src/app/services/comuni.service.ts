import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icomuni } from '../interfaces/icomuni';
import { InewComune } from '../interfaces/inew-comune';
import { Iprovince } from '../interfaces/iprovince';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlComuni = environment.urlAPI + '/api/comuni?page=0&size=1000&sort=nome,ASC';

  comuniFilter: Icomuni[]= [];

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<Iresponse>(this.urlComuni);
  }

  comuneDaProvincia(obj: Iprovince) {
    this.getAllComuni().subscribe(response => this.comuniFilter = response.content)
    return this.comuniFilter.filter(element => element.provincia.nome == obj.nome)
  }

  insertComune(obj: InewComune) {
    return this.http.post(this.urlComuni, obj);
  }

}
