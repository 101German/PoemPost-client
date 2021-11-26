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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { PostComponent } from './components/post/post.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorListTableComponent } from './components/author-list-table/author-list-table.component';
import { ContemporariesListTableComponent } from './components/contemporaries-list-table/contemporaries-list-table.component';
import { ClassicsListTableComponent } from './components/classics-list-table/classics-list-table.component';
import { CategoriesGridListComponent } from './components/categories-grid-list/categories-grid-list.component';
import { CategoryComponent } from './components/category/category.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ProfileComponent } from './components/profile/profile.component';
import { JwtModule } from "@auth0/angular-jwt";
import { TokenInterceptor } from './interceptors/token.interceptor';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { MatSelectModule } from '@angular/material/select';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SubscriptionsListTableComponent } from './components/subscriptions-list-table/subscriptions-list-table.component';

export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}

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
    CategoryComponent,
    ProfileComponent,
    EditPostComponent,
    PostFormComponent,
    AddPostComponent,
    SubscriptionsListTableComponent
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
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
