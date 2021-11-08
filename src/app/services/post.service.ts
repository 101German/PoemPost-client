import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Post } from '../models/Post';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

private url = "https://localhost:5001/Post"

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.url);
}
  searchPosts(searchText:string){
    return this.http.get<Post[]>(this.url + "?SearchTerm="+searchText)
  }
}
