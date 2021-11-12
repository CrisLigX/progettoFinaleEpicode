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
comuniOp: Icomuni[] = [];
comuniFilter: Icomuni[] = [];
province: Iprovince[] = [];
Btx01 = 'Salva cliente'
Btx02 = 'Inserisci un nuovo cliente'
ProvinciaSelezionataLEG = '';
ProvinciaSelezionataOP = '';

  constructor(
    private ClientsService: ClientiService,
    private ComuniService: ComuniService,
    private ProvinceService: ProvinceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.NewClient.dataInserimento = Date.now().toString()
    this.NewClient.dataUltimoContatto = Date.now().toString()

    this.route.params.subscribe(params => {
      if(params.id) {
        this.ClientsService.getClientsById(params.id).subscribe(response => this.NewClient = response)
        this.Btx01 = 'Aggiorna utente'
        this.Btx02 = 'Aggiorna cliente'
      } else {
        console.log('Nessun parametro')
      }
    })
  
    this.TipoClienti();
    this.GetComuni();
    this.GetProvince();
    this.NewClientProv();

    
  }

  saveProduct() {
    if (this.NewClient.ragioneSociale != '' && this.NewClient.partitaIva != '' && this.NewClient.indirizzoSedeLegale.comune.nome != '' && this.NewClient.indirizzoSedeOperativa.comune.nome != '' && this.NewClient.tipoCliente != '') {
      if(!this.NewClient.id) {
        console.log('Cliente aggiunto!')
        console.log(this.NewClient)
        this.ClientsService.insertClients(this.NewClient).subscribe(response => this.router.navigate(['listautenti']));
        localStorage.removeItem('NewClientProv')
      } else {
        this.ClientsService.updateClients(this.NewClient).subscribe(response => this.router.navigate(['listautenti']));
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
    this.ComuniService.getAllComuni().subscribe(response => {this.comuni = response.content, this.comuniOp = response.content, this.comuniFilter = response.content});
  }

  GetProvince() {
    this.ProvinceService.getAllProvince().subscribe(response => this.province = response.content);
  }

  CambioProvincia(obj: Iprovince) {
    this.comuni = this.ComuniService.comuneDaProvincia(obj);
  }

  changeComuni() {
    this.comuni = this.comuniFilter.filter(element => element.provincia.nome == this.ProvinciaSelezionataLEG)
    this.comuniOp = this.comuniFilter.filter(element => element.provincia.nome == this.ProvinciaSelezionataOP)
  }

  inserimentoProvCom() {
    localStorage.setItem('NewClientProv', JSON.stringify(this.NewClient));
    this.router.navigate(['inserimentoprovcom']);
  }

  NewClientProv() {
    let NewClientProv = localStorage.getItem('NewClientProv');
    if (NewClientProv) {
      let NewClientProvOK = JSON.parse(NewClientProv);
      if (NewClientProvOK) {
        this.NewClient = NewClientProvOK;
      }
    }
  }

}
