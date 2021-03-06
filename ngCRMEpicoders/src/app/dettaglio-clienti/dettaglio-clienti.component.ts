import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../class/clienti';
import { ClientiService } from '../services/clienti.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-dettaglio-clienti',
  templateUrl: './dettaglio-clienti.component.html',
  styleUrls: ['./dettaglio-clienti.component.css']
})
export class DettaglioClientiComponent implements OnInit {

  userAdmin: boolean = true;

  constructor(private ClientsService: ClientiService, private router: Router, private route: ActivatedRoute, private LoginService: LoginService) {}

  selClients: Clienti = new Clienti;

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.ClientsService.getClientsById(params.id).subscribe(response => this.selClients = response)});
    this.userAdmin = this.LoginService.readUserType();
  }

  modifica() {
    this.router.navigate(['modificacliente', this.selClients.id]);
  }

  eliminaUtente() {
    this.ClientsService.deleteClients(this.selClients).subscribe(response => {console.log(response), console.log('Utente eliminato'), this.router.navigate(['listautenti'])})
  }

  selectInvoicesClients(): void {
    this.router.navigate(['fatturecliente', this.selClients.id,]);
  }

  newFatture() {
    this.router.navigate(['inseriscifattura/' + this.selClients.id]);
  }

}
