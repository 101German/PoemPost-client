import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-poems-list',
  templateUrl: './poems-list-table.component.html',
  providers:[PostService],
  styleUrls: ['./poems-list-table.component.css']
})
export class PoemsListTableComponent implements OnInit {

  serchText: string ="";
  posts!: Post[];
  displayedColumns: string[] = ['title', 'author', 'creationDate', 'likesCount'];

  constructor(public postService:PostService){ }

  ngOnInit() {
    this.loadPosts();  
}

loadPosts() {
    this.postService.getPosts()
        .subscribe((data: Post[]) => this.posts = data);
}

 search(){
this.postService.searchPosts(this.serchText)
.subscribe((data:Post[])=>this.posts = data)
 }

}
