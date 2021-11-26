import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private oauthService: OAuthService) { }
  public login(){
    this.oauthService.initLoginFlow();
  }
  
  public isAuthenticated(){
return this.oauthService.hasValidAccessToken();
  }
  public logOut(){
    this.oauthService.logOut();
  }
}
