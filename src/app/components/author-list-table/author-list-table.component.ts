import { AfterViewInit, Component, Input,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Author } from 'src/app/models/Author';
import { AuthorParameters } from 'src/app/models/AuthorParameters';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list-table',
  templateUrl: './author-list-table.component.html',
  providers: [AuthorService],
  styleUrls: ['./author-list-table.component.css']
})
export class AuthorListTableComponent implements AfterViewInit {
  @Input() authorType: number = 0;

  serchText: string = "";
  dataSource = new MatTableDataSource<Author>();
  displayedColumns: string[] = ['name','postsCount','subscriptionsCount'];
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private authorService: AuthorService) { }

  ngAfterViewInit() {
    this.initTable();
  }
  search() {
    this.authorService.searchAuthors(this.serchText)
      .subscribe((data: Author[]) => this.dataSource.data = data);
  }
  initTable() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.authorService.getAuthors(new AuthorParameters
            (
              this.authorType = this.authorType,
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
