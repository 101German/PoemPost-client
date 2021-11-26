import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: OAuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    if (this.authService.hasValidAccessToken()) {
      console.log(this.authService.getIdentityClaims());
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}