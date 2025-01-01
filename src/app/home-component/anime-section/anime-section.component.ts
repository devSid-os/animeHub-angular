import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/Services/anime.service';

@Component({
  selector: 'app-anime-section',
  templateUrl: './anime-section.component.html',
  styleUrls: ['./anime-section.component.css']
})
export class AnimeSectionComponent implements OnInit {

  animePage: number = 1;
  @Input('animeData') animeData: Array<any> = [];
  @Input('isError') isError: boolean = false;
  constructor(private _animeService: AnimeService, private _router: Router) { }


  ngOnInit(): void { }

  selectAnime(anime: any): void {
    this._animeService.selectedAnime = anime;
    this._router.navigate(['/anime', anime.mal_id]);
  }

  redirectToAnimeFilterPage(): void {
    this._router.navigate(['/anime-filters'], {
      queryParams: {
        status: 'airing'
      }
    });
  }
}
