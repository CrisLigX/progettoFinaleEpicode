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

  pipeUsers = "";
  
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  clientsUpd: any;


  constructor(private ClientiService: ClientiService, private router: Router) {
   }

  ngOnInit(): void {
    this.getClients();
  }

  removeClient(obj: IClienti): void {
    this.ClientiService.deleteUsers(obj).subscribe(response => {this.getClients(), console.log(response)});
  }

  selectClient(obj: IClienti): void {
    console.log(obj.cognomeContatto)
    this.router.navigate(['dettaglioclienti', obj.id,]);
  }

  evidenzaClient(obj: IClienti): void {
    this.router.navigate(['products', obj.id, 'buy']);
  }

  getClients() {
    this.ClientiService.getAllClients().subscribe(response => {this.clients = response.content; this.collectionSize = this.clients.length; this.refreshClients();});
  }

  refreshClients() {
    this.getClients()
    this.clients = this.clients.map((clients, i) => ({id: i + 1, ...clients})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
