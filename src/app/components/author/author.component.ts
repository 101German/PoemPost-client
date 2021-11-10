import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/Author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author!:Author
  authorId!:number

  constructor(
    private route : ActivatedRoute,
    private authorService : AuthorService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const authorIdFromRoute = Number(routeParams.get('id'));
    this.authorId = authorIdFromRoute;

    this.authorService.getAuthorById(authorIdFromRoute)
    .subscribe((data:Author) => this.author = data);
  }

}
