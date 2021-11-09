import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icomuni } from '../interfaces/icomuni';
import { Iprovince } from '../interfaces/iprovince';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlComuni = environment.urlAPI + '/api/comuni';

  comuniFilter: Icomuni[]= [];

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<Iresponse>(this.urlComuni);
  }

  comuneDaProvincia(obj: Iprovince) {
    this.getAllComuni().subscribe(response => this.comuniFilter = response.content)
    return this.comuniFilter.filter(element => element.provincia.nome == obj.nome)
  }

}
