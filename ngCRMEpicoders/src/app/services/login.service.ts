import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../class/login';
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

  getUsersLogin(obj: Login) {
    return this.http.post<ILoginOk>(this.urlLogin, obj);
  }

  saveToken(tkn: string): void {
    this.token = tkn;
    localStorage.setItem('token', this.token);
    this.localtoken();
  }

  saveTypeUser(tkn: string): void {
    localStorage.setItem('userType', tkn)
  }

  readUserType(): boolean {
    return localStorage.getItem('userType') === 'ROLE_ADMIN';
  }

  localtoken() {
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
