import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "anime/:id", loadChildren: () => import('./anime-detail/anime-detail.module').then(mod => mod.AnimeDetailModule) },
  { path: "character/:id", loadChildren: () => import('./character-detail/character-detail.module').then(mod => mod.CharacterDetailModule) },
  { path: "people/:id", loadChildren: () => import('./people-details/people-details.module').then(mod => mod.PeopleDetailsModule) },
  { path: "all-characters", loadChildren: () => import('./all-characters/all-characters.module').then(mod => mod.AllCharactersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
