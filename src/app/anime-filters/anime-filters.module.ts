import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeFiltersComponent } from './anime-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimeItemComponent } from './anime-item/anime-item.component';
import { LoaderModule } from '../loader/loader.module';

const routes: Routes = [
  { path: "", component: AnimeFiltersComponent }
]

@NgModule({
  declarations: [AnimeFiltersComponent, AnimeItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule
  ]
})
export class AnimeFiltersModule { }
