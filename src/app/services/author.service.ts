import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = "https://localhost:5001/Author"

  constructor(private http: HttpClient) { }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(this.url+ "/" + id) 
  }
}
