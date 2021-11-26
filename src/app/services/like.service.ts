import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private url = "https://localhost:5001/Like"

  constructor(private http:HttpClient) { }

  addLike(postId:number):Observable<boolean>{
    const body = {
      postId:postId
    }
    return this.http.post<boolean>(this.url,body)
  }
}
