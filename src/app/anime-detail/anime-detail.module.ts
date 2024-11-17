import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from "./anime-detail.component"
import { AnimeOverviewComponent } from "./anime-overview/anime-overview.component";
import { MatChipsModule } from "@angular/material/chips";
import { AnimeCharactersComponent } from './anime-characters/anime-characters.component';
import { AnimeReviewsComponent } from './anime-reviews/anime-reviews.component';
import { AnimeRecommendationsComponent } from './anime-recommendations/anime-recommendations.component';
import { SharedModule } from '../shared/shared.module';
import { CheckOverflowDirective } from './anime-reviews/text-overflow.directive';
import { LoaderModule } from '../loader/loader.module';

const routes: Routes = [
    { path: '', component: AnimeDetailComponent }
];

@NgModule({
    declarations: [AnimeDetailComponent, AnimeOverviewComponent, AnimeCharactersComponent, AnimeReviewsComponent, AnimeRecommendationsComponent, CheckOverflowDirective],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatChipsModule,
        SharedModule,
        LoaderModule
    ]
})
export class AnimeDetailModule { }
