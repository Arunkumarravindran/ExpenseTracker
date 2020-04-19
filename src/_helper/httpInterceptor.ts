 import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
    } from "@angular/common/http";
    import { Observable } from "rxjs";
    import { Injectable } from "@angular/core";
    @Injectable()
    export class HttpInterceptorService implements HttpInterceptor {
    intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    
    req = req.clone({
    headers: req.headers.set(
    "Authorization",
    "Bearer " + localStorage.getItem("token")
    ),
    });
    return next.handle(req);
    }
    } {
}
