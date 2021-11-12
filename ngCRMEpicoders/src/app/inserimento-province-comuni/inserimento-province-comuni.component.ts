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

  risultatoProv = '';
  risutaltoComune = '';

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

    if (this.nuovoComune.nome != "" && this.provinciaSel != 0) {
      if (!this.comuni.find(element => element.nome == this.nuovoComune.nome)) {
        this.nuovoComune.provincia.id = this.provinciaSel;
        this.ComuniService.insertComune(this.nuovoComune).subscribe(response => console.log(response))
        this.risutaltoComune = 'Comune inserito con successo!'
      } else {
        alert('Comune già presente nel database!')
      }
    } else {
      alert('Riempi tutti i campi')
    }
  }

  salvaProvincia() {

    if (this.nuovaProvincia.nome != "" && this.nuovaProvincia.sigla != "") {
      if (!this.province.find(element => element.nome == this.nuovaProvincia.nome)) {
        this.ProvinceService.insertProvince(this.nuovaProvincia).subscribe(response => this.GetProvince());
        this.risultatoProv = 'Provincia inserita con successo!'
      } else {
        alert('Provincia già presente nel database!')
      }
    } else {
      alert('Riempi tutti i campi')
    }
  }

  
  tornaIndietro() {
    history.back()
  }


}
