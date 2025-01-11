import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeSearchComponent } from './anime-search.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AnimeSearchComponent }
]

@NgModule({
  declarations: [AnimeSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    SharedModule,
    FormsModule
  ]
})
export class AnimeSearchModule { }
