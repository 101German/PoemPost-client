import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classics-list-table',
  templateUrl: './classics-list-table.component.html',
  styleUrls: ['./classics-list-table.component.css']
})
export class ClassicsListTableComponent implements OnInit {

  public AuthorType:number = 1;
  constructor() { }

  ngOnInit(): void {
  
  }

}
