import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from "./anime-detail.component"
import { AnimeOverviewComponent } from "./anime-overview/anime-overview.component";
import { MatChipsModule } from "@angular/material/chips";
import { AnimeCharactersComponent } from './anime-characters/anime-characters.component';
import { AnimeReviewsComponent } from './anime-reviews/anime-reviews.component';
import { CheckOverflowDirective } from './anime-reviews/text-overflow.directive';

const routes: Routes = [
    { path: '', component: AnimeDetailComponent }
];

@NgModule({
    declarations: [CheckOverflowDirective, AnimeDetailComponent, AnimeOverviewComponent, AnimeCharactersComponent, AnimeReviewsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatChipsModule
    ]
})
export class AnimeDetailModule { }
