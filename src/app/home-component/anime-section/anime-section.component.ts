import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-section',
  templateUrl: './anime-section.component.html',
  styleUrls: ['./anime-section.component.css']
})
export class AnimeSectionComponent implements OnInit {

  animePage: number = 1;
  @Input('animeData') animeData: Array<any> = [];
  @Input('isError') isError: boolean = false;
  constructor(private _router: Router) { }


  ngOnInit(): void { }

  selectAnime(anime: any): void {
    this._router.navigate(["/anime", anime.mal_id]);
  }

  redirectToAnimeFilterPage(): void {
    this._router.navigate(['/anime-filters'], {
      queryParams: {
        status: 'airing'
      }
    });
  }
}
