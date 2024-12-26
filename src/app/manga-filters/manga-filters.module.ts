import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaFiltersComponent } from './manga-filters.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MangaItemComponent } from './manga-item/manga-item.component';
import { MangaTooltipDirective } from './manga-tooltip.directive';

const routes: Routes = [
  { path: "", component: MangaFiltersComponent }
]

@NgModule({
  declarations: [MangaFiltersComponent, MangaItemComponent, MangaTooltipDirective],
  imports: [
    CommonModule,
    LoaderModule,
    MatTooltipModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class MangaFiltersModule { }
