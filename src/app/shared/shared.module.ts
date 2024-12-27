import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CharactersComponent } from './characters/characters.component';
import { RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { CheckOverflowDirective } from './text-overflow.directive';

@NgModule({
  declarations: [ImageViewerComponent, RecommendationComponent, CharactersComponent, ReviewsComponent, CheckOverflowDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ImageViewerComponent, RecommendationComponent, CharactersComponent, ReviewsComponent]
})
export class SharedModule { }
