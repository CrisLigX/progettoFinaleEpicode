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
import { InserimentoProvinceComuniComponent } from './inserimento-province-comuni/inserimento-province-comuni.component';
import { FattureListaComponent } from './fatture-lista/fatture-lista.component';
import { InserisciFattureComponent } from './inserisci-fatture/inserisci-fatture.component';
import { RouteGuardService } from './services/route-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes = [
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
    InserimentoProvinceComuniComponent,
    FattureListaComponent,
    InserisciFattureComponent,
    LoginComponent,
    SignupComponent,
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
