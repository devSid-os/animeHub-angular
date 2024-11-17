import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { loaderAnimation } from './loader.directive';



@NgModule({
  declarations: [LoaderComponent, loaderAnimation],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, loaderAnimation]
})
export class LoaderModule { }
