import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/Services/anime.service';

@Component({
  selector: 'app-anime-aside',
  templateUrl: './anime-aside.component.html',
  styleUrls: ['./anime-aside.component.css']
})
export class AnimeAsideComponent implements OnInit {

  animeData: Array<any> = [];
  isError: boolean = false;

  constructor(private _animeService: AnimeService, private _router: Router) { }

  ngOnInit(): void {
    this.getPopularAnimes({ limit: "20", filter: "bypopularity" });
  }

  getPopularAnimes(filters: any): void {
    this._animeService.getPopularAnimes(filters)
      .then((response: any) => {
        this.animeData = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.isError = true;
      });
  }

  selectAnime(anime: any): void {
    this._animeService.selectedAnime = anime;
    this._router.navigate(["/anime", anime.mal_id]);
  }

}