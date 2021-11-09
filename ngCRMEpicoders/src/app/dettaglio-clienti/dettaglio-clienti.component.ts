import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClienti } from '../interfaces/iclienti';
import { ClientiService } from '../services/clienti.service';


@Component({
  selector: 'app-dettaglio-clienti',
  templateUrl: './dettaglio-clienti.component.html',
  styleUrls: ['./dettaglio-clienti.component.css']
})
export class DettaglioClientiComponent implements OnInit {

  constructor(private ClientsService: ClientiService, private router: Router, private route: ActivatedRoute) {}

  selClients: IClienti = {
    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            nome: "",
            provincia: {
                nome: "",
                sigla: ""
            }
        }
    },
    indirizzoSedeLegale: {
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            nome: "",
            provincia: {
                nome: "",
                sigla: ""
            }
        }
    },
    dataInserimento: "",
    dataUltimoContatto: ""
}

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.ClientsService.getClientsById(params.id).subscribe(response => {console.log(response); this.selClients = response}) });
  }

  modifica() {
    this.router.navigate(['modificacliente', this.selClients.id]);
  }

  eliminaUtente() {
    this.ClientsService.deleteClients(this.selClients).subscribe(response => {console.log(response), console.log('Utente eliminato'), this.router.navigate(['listautenti'])})
  }

}
