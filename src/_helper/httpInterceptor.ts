 import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
    } from "@angular/common/http";
    import { Observable } from "rxjs";
    import { Injectable } from "@angular/core";
import { retry, catchError } from 'rxjs/operators';
    @Injectable()
    export class HttpInterceptorService implements HttpInterceptor {
        retryCount = 2;
    intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(retry(this.retryCount),catchError((err: HttpErrorResponse)=>{
        throw err;
        
    }));
    } 

    }