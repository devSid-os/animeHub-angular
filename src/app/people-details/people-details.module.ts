import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDetailsComponent } from './people-details.component';
import { LoaderModule } from '../loader/loader.module';
import { RouterModule, Routes } from '@angular/router';
import { PeopleOverwiewComponent } from './people-overwiew/people-overwiew.component';
import { SharedModule } from '../shared/shared.module';
import { CheckOverflowDirective } from './text-overflow.directive';
import { PeopleVoiceRolesComponent } from './people-voice-roles/people-voice-roles.component';
import { AnimeContributionsComponent } from './anime-contributions/anime-contributions.component';

const routes: Routes = [
  { path: '', component: PeopleDetailsComponent }
]

@NgModule({
  declarations: [PeopleDetailsComponent, PeopleOverwiewComponent, CheckOverflowDirective, PeopleVoiceRolesComponent, AnimeContributionsComponent],
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PeopleDetailsModule { }
