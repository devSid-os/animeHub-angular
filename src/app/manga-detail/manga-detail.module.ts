import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaDetailComponent } from './manga-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MangaOverviewComponent } from './manga-overview/manga-overview.component';
import { LoaderModule } from '../loader/loader.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MangaDetailComponent }
]

@NgModule({
  declarations: [MangaDetailComponent, MangaOverviewComponent],
  imports: [
    SharedModule,
    LoaderModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MangaDetailModule { }
