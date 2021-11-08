import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IClienti } from '../interfaces/iclienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  clients: IClienti[] = [];

  constructor(private ClientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.getClients();
    console.log(this.clients)
  }

  removeClient(obj: IClienti): void {
    this.ClientiService.deleteUsers(obj).subscribe(response => {this.getClients(), console.log(response)});
  }

  selectClient(obj: IClienti): void {
    this.router.navigate(['products', obj.id, 'edit']);
  }

  evidenzaClient(obj: IClienti): void {
    this.router.navigate(['products', obj.id, 'buy']);
  }

  getClients() {
    this.ClientiService.getAllUsers().subscribe(response => this.clients = response);
  }

}
