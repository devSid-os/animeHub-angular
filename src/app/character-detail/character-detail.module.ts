import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AnimeRolesComponent } from './anime-roles/anime-roles.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterOverviewComponent } from './character-overview/character-overview.component';
import { CharactersVoiceActorsComponent } from './characters-voice-actors/characters-voice-actors.component';
import { CheckOverflowDirective2 } from './text-overflow.directive';

const routes: Routes = [
  { path: '', component: CharacterDetailComponent }
]

@NgModule({
  declarations: [CharacterDetailComponent, AnimeRolesComponent, CharacterOverviewComponent, CharactersVoiceActorsComponent,CheckOverflowDirective2],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CharacterDetailModule { }