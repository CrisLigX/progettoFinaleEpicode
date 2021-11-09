import { Component, OnInit } from '@angular/core';
import { Icomuni } from '../interfaces/icomuni';
import { Iprovince } from '../interfaces/iprovince';
import { InewComune } from '../interfaces/inew-comune';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';
import { InewProvincia } from '../interfaces/inew-provincia';

@Component({
  selector: 'app-inserimento-province-comuni',
  templateUrl: './inserimento-province-comuni.component.html',
  styleUrls: ['./inserimento-province-comuni.component.css']
})
export class InserimentoProvinceComuniComponent implements OnInit {

  constructor(
    private ComuniService: ComuniService,
    private ProvinceService: ProvinceService,
  ) { }

  comuni: Icomuni[] = [];
  province: Iprovince[] = [];
  provinciaSel = 0;

  nuovoComune: InewComune = {
    nome: "",
    provincia: {
        id: 0
    }
  }

  nuovaProvincia: InewProvincia = {
    nome: "",
    sigla: ""
}

  ngOnInit(): void {
    this.GetComuni();
    this.GetProvince();
  }

  GetComuni() {
    this.ComuniService.getAllComuni().subscribe(response => this.comuni = response.content);
  }

  GetProvince() {
    this.ProvinceService.getAllProvince().subscribe(response => this.province = response.content);
  }

  salvaComune() {
    this.nuovoComune.provincia.id = this.provinciaSel;
    console.log(this.nuovoComune)
  }

  salvaProvincia() {
    console.log(this.nuovaProvincia)
  }


}
