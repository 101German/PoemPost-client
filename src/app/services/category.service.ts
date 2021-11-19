import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = "https://localhost:5001/Category"

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  public getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(this.url + "/" + id);
  }
}
