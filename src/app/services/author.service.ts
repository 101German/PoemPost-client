import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/Author';
import { AuthorParameters } from '../models/AuthorParameters';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = "https://localhost:5001/Author"

  constructor(private http: HttpClient) { }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(this.url+ "/" + id) 
  }

  public getAuthors(authorParameters:AuthorParameters) : Observable<HttpResponse<Author[]>>
  {
    let params = new HttpParams()
        .set('pageNumber', authorParameters.pageNumber.toString())
        .set('pageSize',authorParameters.pageSize.toString());
         if(authorParameters.authorType !=0){
           params = params.set('authorType',authorParameters.authorType.toString())
         }
        if(authorParameters.sortField!=' ')
        {
         params = params.append('OrderString',authorParameters.sortField + ' ' + authorParameters.order)
        }

        return this.http.get<Author[]>(this.url,{observe:'response',params:params})
  }
  public searchAuthors(searchString:string){
    return this.http.get<Author[]>(this.url + "?SearchTerm=" + searchString)
  }
}
