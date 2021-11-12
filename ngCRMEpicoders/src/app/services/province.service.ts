import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InewProvincia } from '../interfaces/inew-provincia';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  urlProvince = environment.urlAPI + '/api/province?size=1000&sort=nome,ASC';

  constructor(private http: HttpClient) { }

  getAllProvince() {
    return this.http.get<Iresponse>(this.urlProvince);
  }

  insertProvince(obj: InewProvincia) {
    return this.http.post(this.urlProvince, obj);
  }

  
}
