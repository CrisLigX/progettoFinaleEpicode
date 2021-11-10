import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ifatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-lista',
  templateUrl: './fatture-lista.component.html',
  styleUrls: ['./fatture-lista.component.css']
})
export class FattureListaComponent implements OnInit {

  invoices: Ifatture[] = [];

  constructor(private FattureService: FattureService, private router: Router) { }

  ngOnInit(): void {
    this.getInvoices30();
  }

  getInvoices30() {
    this.FattureService.getInvoices30().subscribe(response => this.invoices = response.content);
  }

  getInvoices70() {
    this.FattureService.getInvoices70().subscribe(response => this.invoices = response.content);
  }

  getInvoices120() {
    this.FattureService.getInvoices120().subscribe(response => this.invoices = response.content);
  }

  getInvoicesAll() {
    this.FattureService.getInvoicesAll().subscribe(response => this.invoices = response.content);
  }

  removeInvoices(obj: Ifatture) {}

  modificaFatture(obj: Ifatture) {
    this.router.navigate(['modificafattura/', obj.id]);
  }

}
