import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';

const routes: Routes = [
  { path: "", component: AllCharactersComponent }
]

@NgModule({
  declarations: [AllCharactersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule
  ]
})
export class AllCharactersModule { }
