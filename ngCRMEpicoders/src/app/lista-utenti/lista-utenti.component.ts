import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../class/clienti';
import { ClientiService } from '../services/clienti.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  clients: Clienti[] = [];

  userAdmin: boolean = true;

  clientsUpd: any;

  ricercaCliente = {
    conditionList: [
      {
        key: "",
        value: "",
        operation: "EQUAL"
      }
    ]
  }

  keySearch = [
    {
      key: 'ragioneSociale',
      label: 'Ragione sociale'
    },
    {
      key: 'partitaIva',
      label: 'Partita IVA'
    },
    {
      key: 'email',
      label: 'eMail'
    },
    {
      key: 'nomeContatto',
      label: 'Nome contatto'
    },
    {
      key: 'cognomeContatto',
      label: 'Cognome contatto'
    }
  ]

  mostraBtn: boolean = true;


  constructor(private ClientiService: ClientiService, private router: Router, private LoginService: LoginService) {
  }

  ngOnInit(): void {
    this.getClients20();
    this.userAdmin = this.LoginService.readUserType();
  }

  removeClient(item: Clienti) {
    this.ClientiService.deleteClients(item).subscribe(response => { console.log(response), console.log('Utente eliminato'), this.getClients20() })
  }

  selectClient(obj: Clienti): void {
    this.router.navigate(['dettaglioclienti', obj.id,]);
  }

  getAllClients() {
    this.ClientiService.getAllClients().subscribe(response => this.clients = response.content);
  }

  getClients100() {
    this.ClientiService.getClients100().subscribe(response => this.clients = response.content);
  }

  getClients20() {
    this.ClientiService.getClients20().subscribe(response => this.clients = response.content);
  }

  ricercaBy() {
    if (this.ricercaCliente.conditionList[0].key != "" && this.ricercaCliente.conditionList[0].value != "") {
      this.ClientiService.ricercaCliente(this.ricercaCliente).subscribe(response => {this.clients = response.content, this.mostraBtn = false});
    } else {
      alert('Riempi tutti i campi di ricerca!')
    }
  }

  svuotaRicercaBy() {
    this.getClients20();
    this.ricercaCliente.conditionList[0].value = "";
    this.mostraBtn = true;
  }

}
