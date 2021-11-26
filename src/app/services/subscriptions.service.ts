import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from '../models/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  private url: string = 'https://localhost:5001/Subscription'
  constructor(private http: HttpClient) { }
  deleteSubscription(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getSubscriptionsByUserId(userId: string) {
    let param = new HttpParams()
      .set("userId", userId)
    return this.http.get<Subscription[]>(this.url, { observe: 'response', params: param });
  }
  checkExistSubscription(authorId: number, userId: string): Observable<Subscription> {
    let params = new HttpParams()
      .set("userId", userId)
      .set("authorId", authorId);
    return this.http.get<Subscription>(`${this.url}/checkExist`, { params: params });
  }
  addSubscription(authorId: number, userId: string) {
    const body = {
      authorId: authorId,
      userId: userId
    }
    return this.http.post(this.url,body);
  }
}
