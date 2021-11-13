import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Invoices } from '../class/invoices';
import { Istatofattura } from '../interfaces/istatofattura';
import { FattureService } from '../services/fatture.service';
import { StatofatturaService } from '../services/statofattura.service';

@Component({
  selector: 'app-inserisci-fatture',
  templateUrl: './inserisci-fatture.component.html',
  styleUrls: ['./inserisci-fatture.component.css']
})
export class InserisciFattureComponent implements OnInit {

  newFattura: Invoices = new Invoices;

  Btx01 = 'Salva fattura'
  Btx02 = 'Inserisci una nuova fattura. ID Cliente: ' + this.newFattura.cliente.id 

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
        this.FattureService.getInvoicesById(params.idFattura).subscribe(response => {this.newFattura = response; this.Btx02 = 'Aggiorna fattura ID: ' + this.newFattura.id})
        this.Btx01 = 'Aggiorna fattura';
      } else {
        console.log('Nessun parametro')
        this.Btx02 = 'Inserisci una nuova fattura. ID Cliente: ' + this.newFattura.cliente.id;
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
    if (this.newFattura.data != '' && this.newFattura.importo != 0 && this.newFattura.stato.nome != '') {
      if(!this.newFattura.id) {
        this.FattureService.insertInvoices(this.newFattura).subscribe(response => this.router.navigate(['fatturecliente/' + this.newFattura.cliente.id]));
      } else {
        this.FattureService.updateInvoices(this.newFattura).subscribe(response => this.router.navigate(['fatturecliente/' + this.newFattura.cliente.id]));
      }
      
    } else {
      alert('Compila tutti i campi!')
    }
  }

  tornaIndietro() {
    history.back()
  }
  


}
