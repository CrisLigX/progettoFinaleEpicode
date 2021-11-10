import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  invoices: Ifatture[] = [];
  nomeCliente = '';
  result: string = "";

  constructor(private FattureService: FattureService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.route.params.subscribe(params => this.FattureService.getInvoicesByClient(params.id).subscribe(response => {this.invoices = response.content, this.result = this.invoices[0].cliente.ragioneSociale}))
  }

  newFatture() {
    
  }



  removeInvoices(obj: Ifatture) {}

  selectInvoices(obj: Ifatture) {}

}
