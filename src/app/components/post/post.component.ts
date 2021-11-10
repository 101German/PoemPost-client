import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { LikeService } from 'src/app/services/like.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post!: Post

  constructor(
    private route:ActivatedRoute,
    private postService:PostService,
    private likeService:LikeService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('id'));

    this.postService.getPostById(postIdFromRoute).subscribe((data:Post) => this.post = data);
  }

  like(userId:number,postId:number) {

    this.likeService.addLike(userId,postId)
    .subscribe((data:boolean) => {
      if(!data){
        this.post.likesCount-=1;
    }
    else{
      this.post.likesCount+=1;
    }
    });
    
  }
}
