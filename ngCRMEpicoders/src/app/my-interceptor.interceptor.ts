import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  token = ''

  tenant = 'fe_0421';

  constructor(private LoginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let myRequest: HttpRequest<any> = request;
    myRequest= request.clone({headers: request.headers
      .set('Authorization', 'Bearer ' + this.LoginService.returnToken())
      .set('X-TENANT-ID', this.tenant)})
    
    return next.handle(myRequest);


  }


}
