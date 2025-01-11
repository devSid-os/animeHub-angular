import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "anime/:id", loadChildren: () => import('./anime-detail/anime-detail.module').then(mod => mod.AnimeDetailModule) },
  { path: "anime-filters", loadChildren: () => import('./anime-filters/anime-filters.module').then(mod => mod.AnimeFiltersModule) },
  { path: "anime-search", loadChildren: () => import('./anime-search/anime-search.module').then(mod => mod.AnimeSearchModule) },
  { path: "character/:id", loadChildren: () => import('./character-detail/character-detail.module').then(mod => mod.CharacterDetailModule) },
  { path: "people/:id", loadChildren: () => import('./people-details/people-details.module').then(mod => mod.PeopleDetailsModule) },
  { path: "all-characters", loadChildren: () => import('./all-characters/all-characters.module').then(mod => mod.AllCharactersModule) },
  { path: "manga", loadChildren: () => import('./manga/manga.module').then(mod => mod.MangaModule) },
  { path: "manga-filters", loadChildren: () => import("./manga-filters/manga-filters.module").then(mod => mod.MangaFiltersModule) },
  { path: "manga/:id", loadChildren: () => import("./manga-detail/manga-detail.module").then(mod => mod.MangaDetailModule) },
  { path: "movies", loadChildren: () => import("./movies/movies.module").then(mod => mod.MoviesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
