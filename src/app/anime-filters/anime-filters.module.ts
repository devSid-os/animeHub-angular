import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeFiltersComponent } from './anime-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: "", component: AnimeFiltersComponent }
]

@NgModule({
  declarations: [AnimeFiltersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    SharedModule
  ]
})
export class AnimeFiltersModule { }
