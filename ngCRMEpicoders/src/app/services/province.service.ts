import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  urlProvince = environment.urlAPI + '/api/province';

  constructor(private http: HttpClient) { }

  getAllProvince() {
    return this.http.get<Iresponse>(this.urlProvince);
  }

  
}
