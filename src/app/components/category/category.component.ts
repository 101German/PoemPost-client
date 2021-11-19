import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId!: number
  category!: Category

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const authorIdFromRoute = Number(routeParams.get('id'));
    this.categoryId = authorIdFromRoute;

    this.categoryService.getCategoryById(authorIdFromRoute)
    .subscribe((data:Category) => this.category = data);
  }

}
