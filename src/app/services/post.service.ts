import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Post } from '../models/Post';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Observable } from 'rxjs';
import { PostParameters } from '../models/PostsParameters';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://localhost:5001/Post"

  constructor(private http: HttpClient) { }

  getPosts(postParameters:PostParameters) : Observable<Post[]>
   {
    const params = new HttpParams()
        .set('authorId', postParameters.authorId.toString());
    return this.http.get<Post[]>(this.url,{params});
  }

  getPostById(id: number) {
    return this.http.get<Post>(this.url + "/" + id)
}
  searchPosts(searchText: string) {
    return this.http.get<Post[]>(this.url + "?SearchTerm=" + searchText)
  }
}
