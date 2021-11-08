import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTY2MiwiZXhwIjoxNjM3MjQzNjYyfQ.WaxxzS6R7PaZLxCWbVfVayYcR2Ad1Id7MtYtGAgnBOGsAhOU7WKKm7TPjUt7Zen6DCNXzXpXIq7-psWHunmeeA'
  tenant = 'fe_0421';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let myRequest: HttpRequest<any> = request;
    myRequest= request.clone({headers: request.headers
      .set('Authorization', 'Bearer ' + this.token)
      .set('X-TENANT-ID', this.tenant)})
    
    return next.handle(myRequest);
  }
}
