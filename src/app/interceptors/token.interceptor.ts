import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService:OAuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       if(this.authService.hasValidAccessToken()){
           req = req.clone({
               setHeaders:{
                   Authorization:`Bearer ${this.authService.getAccessToken()}`
               }
           })
       }
       return next.handle(req);
    }

}