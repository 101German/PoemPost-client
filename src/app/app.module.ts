import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './components/app/app.component';
import { PostsListTableComponent } from './components/posts-list-table/posts-list-table.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { PostComponent } from './components/post/post.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorListTableComponent } from './components/author-list-table/author-list-table.component';
import { ContemporariesListTableComponent } from './components/contemporaries-list-table/contemporaries-list-table.component';
import { ClassicsListTableComponent } from './components/classics-list-table/classics-list-table.component';
import { CategoriesGridListComponent } from './components/categories-grid-list/categories-grid-list.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListTableComponent,
    TopBarComponent,
    PostComponent,
    AuthorComponent,
    AuthorListTableComponent,
    ContemporariesListTableComponent,
    ClassicsListTableComponent,
    CategoriesGridListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
