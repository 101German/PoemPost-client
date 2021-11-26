import { Injectable, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class JwtService implements OnInit {

  constructor(private jwtHelper: JwtHelperService) { }
  ngOnInit(): void {
 
  }

  public getName(){
   let name = this.jwtHelper.decodeToken()?.name;
   return name;
  }
  public getId(){
    let id = this.jwtHelper.decodeToken()?.sub;
    return id;
  }
}