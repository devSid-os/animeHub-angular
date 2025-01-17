import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from "./anime-detail.component"
import { AnimeOverviewComponent } from "./anime-overview/anime-overview.component";
import { MatChipsModule } from "@angular/material/chips";
import { SharedModule } from '../shared/shared.module';
import { LoaderModule } from '../loader/loader.module';
import { AnimeStaffComponent } from './anime-staff/anime-staff.component';

const routes: Routes = [
    { path: '', component: AnimeDetailComponent }
];

@NgModule({
    declarations: [AnimeDetailComponent, AnimeOverviewComponent, AnimeStaffComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatChipsModule,
        SharedModule,
        LoaderModule
    ]
})
export class AnimeDetailModule { }
