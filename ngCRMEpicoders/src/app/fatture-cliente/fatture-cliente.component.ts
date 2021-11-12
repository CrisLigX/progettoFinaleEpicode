import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  invoices: Ifatture[] = [];
  nomeCliente = '';
  result: string = "";
  idCliente = 0;

  userAdmin: boolean = true;

  constructor(private FattureService: FattureService, private route: ActivatedRoute, private router: Router, private LoginService: LoginService) { }

  ngOnInit(): void {
    this.getInvoices();
    this.setParams();
    this.userAdmin = this.LoginService.readUserType();
  }

  getInvoices() {
    this.route.params.subscribe(params => this.FattureService.getInvoicesByClient(params.id).subscribe(response => {this.invoices = response.content; this.result = this.invoices[0].cliente.ragioneSociale}))
  }

  setParams() {
    this.route.params.subscribe(params => this.idCliente = params.id);
  }

  newFatture() {
    this.router.navigate(['inseriscifattura/' + this.idCliente]);
  }

  modificaFatture(obj: Ifatture) {
    this.router.navigate(['modificafattura/', obj.id]);
  }

  removeInvoices(obj: Ifatture) {
    this.FattureService.removeInvoices(obj).subscribe(response => {console.log(response), this.getInvoices()})
  }

  tornaIndietro() {
    this.router.navigate(['dettaglioclienti/' + this.idCliente])
  }

}