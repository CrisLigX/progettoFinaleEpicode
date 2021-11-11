import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../interfaces/i-login';
import { ILoginOk } from '../interfaces/i-login-ok';
import { LoginService } from '../services/login.service';
import { RouteGuardService } from '../services/route-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail!: string;
  loginPassword!: string;

  constructor(private router: Router, private routeGuardService: RouteGuardService, private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  loginUser: ILogin = {
    username: '',
    password: ''
  }

  loginOk!: ILoginOk;

  typepsw = 'password'

  signin() {
    if (this.loginUser.username != '' && this.loginUser.password != '') {
      this.getUser();
    } else {
      alert('Compila tutti i campi!')
    }
  }

  showpsw() {
    if (this.typepsw == 'password') {
      this.typepsw = 'text'
    } else {
      this.typepsw = 'password'
    }
  }

  signup() {
    this.router.navigate(['signup']);
  }

  getUser() {
    this.LoginService.getUsersLogin(this.loginUser).subscribe(
      response => {this.loginOk = response;
        this.routeGuardService.setLogin();
        alert('Bentornato ' + this.loginOk.username + ' 😁'),
        this.LoginService.saveToken(this.loginOk.accessToken),
        this.LoginService.saveUsername(this.loginOk.username),
        this.LoginService.saveTypeUser(this.loginOk.roles[0])
        this.router.navigate(['home'])},
      error => alert('Username e/o password sbagliate!'));
  }

  validateLogin() {
    if (!this.loginOk) {
      alert('Username e/o password sbagliate!');
    }
    else {
    }
  }
}



