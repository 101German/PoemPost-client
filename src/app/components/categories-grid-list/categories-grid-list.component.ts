import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-grid-list',
  templateUrl: './categories-grid-list.component.html',
  styleUrls: ['./categories-grid-list.component.css']
})
export class CategoriesGridListComponent implements OnInit {
  
  categories:Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
     this.categoryService.getCategories().subscribe((data:Category[]) => this.categories = data);
  }

}
