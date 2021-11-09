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
