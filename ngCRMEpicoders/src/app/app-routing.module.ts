import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { FattureListaComponent } from './fatture-lista/fatture-lista.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InserimentoProvinceComuniComponent } from './inserimento-province-comuni/inserimento-province-comuni.component';
import { InserisciClienteComponent } from './inserisci-cliente/inserisci-cliente.component';
import { InserisciFattureComponent } from './inserisci-fatture/inserisci-fatture.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'listautenti',
    component: ListaUtentiComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'dettaglioclienti/:id',
    component: DettaglioClientiComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'inseriscicliente',
    component: InserisciClienteComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'modificacliente/:id',
    component: InserisciClienteComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'inserimentoprovcom',
    component: InserimentoProvinceComuniComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'fatture',
    component: FattureListaComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'fatturecliente/:id',
    component: FattureClienteComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'modificafattura/:idFattura',
    component: InserisciFattureComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'inseriscifattura/:idCliente',
    component: InserisciFattureComponent,
    canActivate: [RouteGuardService]
  },
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
