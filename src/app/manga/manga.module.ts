import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaComponent } from './manga.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { MangaSectionComponent } from './manga-section/manga-section.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MangaAsideComponent } from './manga-aside/manga-aside.component';

const routes: Routes = [
  { path: "", component: MangaComponent }
]

@NgModule({
  declarations: [MangaComponent, MangaSectionComponent, MangaAsideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    MatTooltipModule
  ]
})
export class MangaModule { }
