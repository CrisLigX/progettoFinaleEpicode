import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClienti } from '../interfaces/iclienti';
import { Icomuni } from '../interfaces/icomuni';
import { Iprovince } from '../interfaces/iprovince';
import { ClientiService } from '../services/clienti.service';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-inserisci-cliente',
  templateUrl: './inserisci-cliente.component.html',
  styleUrls: ['./inserisci-cliente.component.css']
})
export class InserisciClienteComponent implements OnInit {

  NewClient: IClienti = {
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

tipoClienti = [];
comuni: Icomuni[] = [];
province: Iprovince[] = [];
Btx01 = 'Salva cliente'
Btx02 = 'Inserisci un nuovo cliente'
ProvinciaSelezionata = "";

  constructor(
    private ClientsService: ClientiService,
    private ComuniService: ComuniService,
    private ProvinceService: ProvinceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params.id) {
        this.ClientsService.getClientsById(params.id).subscribe(response => this.NewClient = response)
        console.log(params.id)
        this.Btx01 = 'Aggiorna utente'
        this.Btx02 = 'Aggiorna cliente'
      } else {
        console.log('Nessun parametro')
      }
    })
  
    this.TipoClienti();
    this.GetComuni();
    this.GetProvince();

    
  }

  saveProduct() {
    if (this.NewClient.ragioneSociale != '' && this.NewClient.partitaIva != '') {
      if(!this.NewClient.id) {
        console.log('Cliente aggiunto!')
        console.log(this.NewClient);
        this.ClientsService.insertClients(this.NewClient).subscribe(response => console.log(response));
      } else {
        this.ClientsService.updateClients(this.NewClient).subscribe(response => console.log(response));
        console.log('Cliente aggiornato!')
      }
      
    } else {
      alert('Compila tutti i campi!')
    }
  }

  TipoClienti() {
    this.ClientsService.getTipiClienti().subscribe(response => this.tipoClienti = response);
  }

  GetComuni() {
    this.ComuniService.getAllComuni().subscribe(response => this.comuni = response.content);
  }

  GetProvince() {
    this.ProvinceService.getAllProvince().subscribe(response => this.province = response.content);
  }

  CambioProvincia(obj: Iprovince) {
    this.comuni = this.ComuniService.comuneDaProvincia(obj);
  }

}
