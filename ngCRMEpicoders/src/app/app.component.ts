import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { RouteGuardService } from './services/route-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngCRMEpicoders';

  constructor(private RouteGuardService: RouteGuardService, private LoginService: LoginService) { }

  ngOnInit(): void {
    this.localtoken();
    this.LoginService.localtoken();
  }

    localtoken () {
    let toknsv = localStorage.getItem('token');
    if (toknsv != null) {
      this.RouteGuardService.setLogin();
    }
  }

}
