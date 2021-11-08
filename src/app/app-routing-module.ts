import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemsListTableComponent } from './components/poems-list-table/poems-list-table.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
   [{ path: '', component: PoemsListTableComponent }])],
  exports: [RouterModule]
})

export class AppRoutingModule  { }
