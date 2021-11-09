import { Component, OnInit } from '@angular/core';
import { Ifatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-lista',
  templateUrl: './fatture-lista.component.html',
  styleUrls: ['./fatture-lista.component.css']
})
export class FattureListaComponent implements OnInit {

  invoices: Ifatture[] = [];

  constructor(private FattureService: FattureService) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.FattureService.getAllInvoices().subscribe(response => {this.invoices = response.content, console.log(this.invoices)});
  }

  removeInvoices(obj: Ifatture) {}

  selectInvoices(obj: Ifatture) {}

}
