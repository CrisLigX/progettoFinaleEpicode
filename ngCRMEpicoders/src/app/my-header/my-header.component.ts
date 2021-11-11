import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RouteGuardService } from '../services/route-guard.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  statelogin: string = '';
  Username: string = '';

  constructor(private RouteGuardService: RouteGuardService, private router: Router, private LoginService: LoginService) { }

  ngOnInit(): void {
    this.Username = this.LoginService.returnUsername();    
    if (this.Username == '') {
      this.statelogin = 'Login';
    } else {
      this.statelogin = 'Logout'
    }
    this.LoginService.localtoken();
  }

  effettuaLogout() {
    this.RouteGuardService.setLogin();
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
