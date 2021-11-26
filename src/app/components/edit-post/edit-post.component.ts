import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ImportPostDataService } from 'src/app/services/import-post-data.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post|undefined
  constructor(private readonly importPostDataService: ImportPostDataService) { }

  ngOnInit(): void {
   this.post = this.importPostDataService.getDataForEdit();
  }
}
