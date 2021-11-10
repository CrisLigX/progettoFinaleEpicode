import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ifatture } from '../interfaces/ifatture';
import { InewFatture } from '../interfaces/inew-fatture';
import { Istatofattura } from '../interfaces/istatofattura';
import { FattureService } from '../services/fatture.service';
import { StatofatturaService } from '../services/statofattura.service';

@Component({
  selector: 'app-inserisci-fatture',
  templateUrl: './inserisci-fatture.component.html',
  styleUrls: ['./inserisci-fatture.component.css']
})
export class InserisciFattureComponent implements OnInit {

  newFattura: InewFatture = {
    data: "",
    numero: 0,
    anno: 2021,
    importo: 0,
    stato: {
      id: 1,
      nome: "PAGATA"
    },
    cliente: {
      id: 1
    }
  }

  Btx01 = 'Salva fattura'
  Btx02 = 'Inserisci una nuova fattura'

  statoFattura: Istatofattura[] = [];

  constructor(
    private FattureService: FattureService,
    private StatoFatturaService: StatofatturaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInvoicesStatus();
    this.setParams();

    this.route.params.subscribe(params => {
      if(params.idFattura) {
        this.FattureService.getInvoicesById(params.idFattura).subscribe(response => this.newFattura = response)
        this.Btx01 = 'Aggiorna fattura'
        this.Btx02 = 'Aggiorna fattura'
      } else {
        console.log('Nessun parametro')
      }
    })
  }

  getInvoicesStatus() {
    this.StatoFatturaService.getStatus().subscribe(response => this.statoFattura = response.content);
  }

  setParams() {
    this.route.params.subscribe(params => this.newFattura.cliente.id = params.idCliente);
  }

  saveInvoices() {
    if (this.newFattura.data != '' && this.newFattura.importo != 0) {
      if(!this.newFattura.id) {
        this.FattureService.insertInvoices(this.newFattura).subscribe(response => {console.log(response), this.router.navigate(['fatturecliente/' + this.newFattura.cliente.id])});
      } else {
        this.FattureService.updateInvoices(this.newFattura).subscribe(response => {console.log(response), this.router.navigate(['fatturecliente/' + this.newFattura.cliente.id])});
      }
      
    } else {
      alert('Compila tutti i campi!')
    }
  }

  tornaIndietro() {
    this.router.navigate(['fatture'])
  }
  


}
