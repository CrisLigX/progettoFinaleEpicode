import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userAdmin: boolean = true;

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
    this.userAdmin = this.LoginService.readUserType();
  }

}
