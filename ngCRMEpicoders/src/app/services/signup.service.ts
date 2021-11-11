import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISignUp } from '../interfaces/i-sign-up';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  urlSignup = environment.urlAPI + '/api/auth/signup';

  constructor(private http: HttpClient) { }

  saveUser(obj: ISignUp) {
    return this.http.post<ISignUp>(this.urlSignup, obj);
  }
}
