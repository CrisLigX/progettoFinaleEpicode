import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/i-login';
import { ILoginOk } from '../interfaces/i-login-ok';
import { Iresponse } from '../interfaces/iresponse';
import { RouteGuardService } from './route-guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string = '';

  Username: string = '';

  urlLogin = environment.urlAPI + '/api/auth/login';

  constructor(private http: HttpClient, private RouteGuard: RouteGuardService) { }

  getUsersLogin(obj: ILogin) {
    return this.http.post<ILoginOk>(this.urlLogin, obj);
  }

  saveToken(tkn: string): void {
    this.token = tkn;
    localStorage.setItem('token', this.token);
    this.localtoken();
  }

  localtoken () {
    let toknsv = localStorage.getItem('token');
    if (toknsv != null) {
      this.token = toknsv;
    }
  }

  returnToken(): string {
    return this.token;
  }

  saveUsername(obj: string) {
    this.Username = obj;
  }

  returnUsername(): string {
    return this.Username
  }
}
