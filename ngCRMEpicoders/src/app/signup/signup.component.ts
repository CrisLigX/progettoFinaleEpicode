import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp } from '../interfaces/i-sign-up';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userSignUp: ISignUp = {
    username: '',
    email: '',
    password: '',
    nome: '',
    cognome: '',
    role: ['user']
  }

  typepsw = 'password'

  constructor(private SignupService: SignupService, private router: Router) { }

  ngOnInit(): void {
  }

  showpsw() {
    if (this.typepsw == 'password') {
      this.typepsw = 'text'
    } else {
      this.typepsw = 'password'
    }
  }

  signup() {
    if (this.userSignUp.username.trim() != '' && this.userSignUp.password.trim() != '' && this.userSignUp.email.trim() != '') {
      this.SignupService.saveUser(this.userSignUp).subscribe(response => {console.log(response); alert('Utente registrato con successo! 😊'); this.router.navigate(['login'])})
    } else {
      alert('Compila tutti i campi!')
    }
  }

  login() {
    this.router.navigate(['login']);
  }

}
