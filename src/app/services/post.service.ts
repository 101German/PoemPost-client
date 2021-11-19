import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { PostParameters } from '../models/PostsParameters';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://localhost:5001/Post"

  constructor(private http: HttpClient) { }

  getPosts(postParameters:PostParameters) : Observable<HttpResponse<Post[]>>
   {
    let params = new HttpParams()
        .set('pageNumber', postParameters.pageNumber.toString())
        .set('pageSize',postParameters.pageSize.toString());
        if(postParameters.sortField!=' ')
        {
         params = params.append('OrderString',postParameters.sortField + ' ' + postParameters.order)
        }
        if(postParameters.categoryId !=0){
          params = params.append('CategoryId',postParameters.categoryId)
        }
        if(postParameters.authorId != 0){
          params = params.append('AuthorId', postParameters.authorId.toString())
        }
    return this. http.get<Post[]>(this.url,{ observe: 'response',params: params});
  }

  getPostById(id: number) {
    return this.http.get<Post>(this.url + "/" + id)
}
  searchPosts(searchString: string) {
    return this.http.get<Post[]>(this.url + "?SearchTerm=" + searchString)
  }
}
