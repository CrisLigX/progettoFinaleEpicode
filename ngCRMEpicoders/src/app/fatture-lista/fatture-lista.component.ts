import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ifatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-fatture-lista',
  templateUrl: './fatture-lista.component.html',
  styleUrls: ['./fatture-lista.component.css']
})
export class FattureListaComponent implements OnInit {

  invoices: Ifatture[] = [];

  userAdmin: boolean = true;

  constructor(private FattureService: FattureService, private router: Router, private LoginService: LoginService) { }

  ngOnInit(): void {
    this.getInvoices30();
    this.userAdmin = this.LoginService.readUserType();
  }

  getInvoices30() {
    this.FattureService.getInvoices30().subscribe(response => this.invoices = response.content);
  }

  getInvoices70() {
    this.FattureService.getInvoices70().subscribe(response => this.invoices = response.content);
  }

  getInvoices120() {
    this.FattureService.getInvoices120().subscribe(response => this.invoices = response.content);
  }

  getInvoicesAll() {
    this.FattureService.getInvoicesAll().subscribe(response => this.invoices = response.content);
  }

  removeInvoices(obj: Ifatture) { }

  modificaFatture(obj: Ifatture) {
    this.router.navigate(['modificafattura/', obj.id]);
  }

  showCliente(obj: Ifatture) {
    if (obj.cliente.id) {
      this.router.navigate(['dettaglioclienti/', + obj.cliente.id])
    }
  }
}
