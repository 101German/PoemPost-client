import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public authorId!:number
  constructor(private jwtHelper: JwtService,
    private authorService: AuthorService) { }

 

   ngOnInit(){
  this.authorService.getAuthorIdByUserId(this.userId)
  .subscribe((id:number)=>this.authorId = id)
  }
 
  public get name(){
   return this.jwtHelper.getName();
  }
  public get userId(){
    return this.jwtHelper.getId();
  }
}
