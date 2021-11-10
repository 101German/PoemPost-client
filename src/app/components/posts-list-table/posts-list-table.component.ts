import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostParameters } from 'src/app/models/PostsParameters';



@Component({  
  selector: 'app-posts-list-table',
  templateUrl: './posts-list-table.component.html',
  providers:[PostService],
  styleUrls: ['./posts-list-table.component.css']
})
export class PostsListTableComponent implements OnInit,AfterViewInit {
  @Input() authorId: number = 0;

  postParameters!:PostParameters;
  serchText: string ="";
  dataSource = new MatTableDataSource<Post>();
  displayedColumns: string[] = ['title', 'author', 'creationDate', 'likesCount'];
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public postService:PostService){ }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.postParameters = new PostParameters(this.authorId);
    this.loadPosts(this.postParameters);  
}

loadPosts(postParameters:PostParameters) {
    this.postService.getPosts(postParameters)
        .subscribe((data: Post[]) => this.dataSource.data = data);
}

 search(){
this.postService.searchPosts(this.serchText)
.subscribe((data:Post[])=>this.dataSource.data = data)
 }
}
