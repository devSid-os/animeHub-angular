import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "anime/:id", loadChildren: () => import('./anime-detail/anime-detail.module').then(mod => mod.AnimeDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
