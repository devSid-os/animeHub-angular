import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { LoaderModule } from "../loader/loader.module";
import { RouterModule, Routes } from '@angular/router';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieTooltipDirective } from './movie-tooltip.directive';

const routes: Routes = [
  { path: "", component: MoviesComponent }
];

@NgModule({
  declarations: [MoviesComponent, MovieItemComponent, MovieTooltipDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule
  ]
})
export class MoviesModule { }
