import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { DettaglioClientiComponent } from './dettaglio-clienti/dettaglio-clienti.component';
import { InserisciClienteComponent } from './inserisci-cliente/inserisci-cliente.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { InserimentoProvinceComuniComponent } from './inserimento-province-comuni/inserimento-province-comuni.component';
import { FattureListaComponent } from './fatture-lista/fatture-lista.component';
import { InserisciFattureComponent } from './inserisci-fatture/inserisci-fatture.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptorInterceptor,
    multi: true  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
