import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Subscription } from 'src/app/models/Subscription';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-subscriptions-list-table',
  templateUrl: './subscriptions-list-table.component.html',
  styleUrls: ['./subscriptions-list-table.component.css']
})
export class SubscriptionsListTableComponent implements OnInit,AfterViewInit {
  @Input() userId!: string
  displayedColumns: string[] = ['author','action'];
  resultsLength = 0;
  isLoadingResults = true;
  dataSource = new MatTableDataSource<Subscription>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private readonly subscriptionService: SubscriptionsService) { }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.initTable();
  }

initTable() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.subscriptionService.getSubscriptionsByUserId(this.userId)
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
  delete(subId:number){
    this.subscriptionService.deleteSubscription(subId)
    .subscribe(()=>this.ngAfterViewInit())
  }
}
