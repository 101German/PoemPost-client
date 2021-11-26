import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class ImportPostDataService {
   public post!: Post
  constructor() { }
  public setPostDataForEdit(post: Post){
    this.post = post;
  }
  public getDataForEdit(){
    return this.post;
  }
}
