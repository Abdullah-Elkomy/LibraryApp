import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksListComponent },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
