import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaFiltersComponent } from './manga-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MangaItemComponent } from './manga-item/manga-item.component';

const routes: Routes = [
  { path: "", component: MangaFiltersComponent }
]

@NgModule({
  declarations: [MangaFiltersComponent, MangaItemComponent],
  imports: [
    CommonModule,
    LoaderModule,
    MatTooltipModule,
    RouterModule.forChild(routes)
  ]
})
export class MangaFiltersModule { }
