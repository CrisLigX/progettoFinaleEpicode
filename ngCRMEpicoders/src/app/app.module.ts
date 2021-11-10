import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { InserisciClienteComponent } from './inserisci-cliente/inserisci-cliente.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { FattureDettaglioComponent } from './fatture-dettaglio/fatture-dettaglio.component';
import { InserimentoProvinceComuniComponent } from './inserimento-province-comuni/inserimento-province-comuni.component';
import { FattureListaComponent } from './fatture-lista/fatture-lista.component';
import { InserisciFattureComponent } from './inserisci-fatture/inserisci-fatture.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'listautenti',
    component: ListaUtentiComponent
  },
  {
    path: 'dettaglioclienti/:id',
    component: DettaglioClientiComponent
  },
  {
    path: 'inseriscicliente',
    component: InserisciClienteComponent
  },
  {
    path: 'modificacliente/:id',
    component: InserisciClienteComponent
  },
  {
    path: 'inserimentoprovcom',
    component: InserimentoProvinceComuniComponent
  },
  {
    path: 'fatture',
    component: FattureListaComponent
  },
  {
    path: 'fatturecliente/:id',
    component: FattureClienteComponent
  },
  {
    path: 'modificafattura/:idFattura',
    component: InserisciFattureComponent
  },
  {
    path: 'inseriscifattura/:idCliente',
    component: InserisciFattureComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    ListaUtentiComponent,
    HomePageComponent,
    DettaglioClientiComponent,
    InserisciClienteComponent,
    FattureClienteComponent,
    FattureDettaglioComponent,
    InserimentoProvinceComuniComponent,
    FattureListaComponent,
    InserisciFattureComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptorInterceptor,
    multi: true  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
