import { AfterViewInit, Component, Input,ViewChild } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostParameters } from 'src/app/models/PostsParameters';
import { merge } from 'rxjs';
import { map, startWith, switchMap } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-posts-list-table',
  templateUrl: './posts-list-table.component.html',
  providers: [PostService],
  styleUrls: ['./posts-list-table.component.css']
})
export class PostsListTableComponent implements AfterViewInit{
  @Input() authorId: number = 0;
  @Input() categoryId: number = 0;

  serchText: string = "";
  dataSource = new MatTableDataSource<Post>();
  displayedColumns: string[] = ['title', 'author', 'creationDate', 'likes'];
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private route: ActivatedRoute,
    private postService: PostService) { }

  ngAfterViewInit() {
    this.initTable();
  }

  search() {
    this.postService.searchPosts(this.serchText)
      .subscribe((data: Post[]) => this.dataSource.data = data);
  }
  initTable() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.postService.getPosts(new PostParameters
             (this.authorId,
              this.categoryId, 
              this.paginator.pageIndex + 1, 
              this.paginator.pageSize,
              this.sort.active,
              this.sort.direction
              ))
        }),
        map(data => {
          this.isLoadingResults = false;
          if (data === null) {
            return [];
          }
          this.resultsLength = JSON.parse(data.headers.get("X-Pagination")!).TotalCount
          return data.body!;
        })
      ).subscribe(data => this.dataSource.data = data)
  }
}
