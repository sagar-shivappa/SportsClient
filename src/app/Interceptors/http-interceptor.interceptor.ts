import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize, map } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Intercept', request);
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}
