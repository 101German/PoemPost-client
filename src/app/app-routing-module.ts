import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { PostComponent } from './components/post/post.component';
import { PostsListTableComponent } from './components/posts-list-table/posts-list-table.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
   [{ path: '', component: PostsListTableComponent },
    {path:'post/:id', component: PostComponent},
    {path:'author/:id',component: AuthorComponent}])],
  exports: [RouterModule]
})

export class AppRoutingModule  { }
