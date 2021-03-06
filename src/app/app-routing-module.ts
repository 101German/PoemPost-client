import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { CategoriesGridListComponent } from './components/categories-grid-list/categories-grid-list.component';
import { CategoryComponent } from './components/category/category.component';
import { ClassicsListTableComponent } from './components/classics-list-table/classics-list-table.component';
import { ContemporariesListTableComponent } from './components/contemporaries-list-table/contemporaries-list-table.component';
import { PostComponent } from './components/post/post.component';
import { PostsListTableComponent } from './components/posts-list-table/posts-list-table.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
   [{ path: '', component: PostsListTableComponent },
    {path:'post/:id', component: PostComponent},
    {path:'author/:id',component: AuthorComponent},
    {path:'contemporaries',component: ContemporariesListTableComponent},
    {path:'classics',component:ClassicsListTableComponent},
    {path:'categories',component:CategoriesGridListComponent},
    {path:'category/:id',component:CategoryComponent}])],
  exports: [RouterModule]
})

export class AppRoutingModule  { }
