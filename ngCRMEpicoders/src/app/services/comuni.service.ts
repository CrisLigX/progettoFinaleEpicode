import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icomuni } from '../interfaces/icomuni';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlComuni = environment.urlAPI + '/api/comuni';

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<Iresponse>(this.urlComuni);
  }

}
