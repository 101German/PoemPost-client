import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contemporaries-list-table',
  templateUrl: './contemporaries-list-table.component.html',
  styleUrls: ['./contemporaries-list-table.component.css']
})
export class ContemporariesListTableComponent implements OnInit {

  public AuthorType:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
