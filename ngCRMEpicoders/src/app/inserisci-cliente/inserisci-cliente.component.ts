import { Component, OnInit } from '@angular/core';
import { IClienti } from '../interfaces/iclienti';
import { Icomuni } from '../interfaces/icomuni';
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
    fatturatoAnnuale: 0,
}

tipoClienti = [];
comuni: Icomuni[] = [];
province: Icomuni[] = [];

  constructor(private ClientsService: ClientiService, private ComuniService: ComuniService, private ProvinceService: ProvinceService) { }

  ngOnInit(): void {
    this.TipoClienti();
    this.GetComuni();
    this.GetProvince();
  }

  console() {
    console.log(this.NewClient)
    
  }

  TipoClienti() {
    this.ClientsService.getTipiClienti().subscribe(response => {this.tipoClienti = response, console.log(response)});
  }

  GetComuni() {
    this.ComuniService.getAllComuni().subscribe(response => {this.comuni = response.content; console.log(response.content)});
  }

  GetProvince() {
    this.ProvinceService.getAllProvince().subscribe(response => {this.province = response.content; console.log(this.province)});
  }

}
