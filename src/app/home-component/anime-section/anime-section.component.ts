import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/Services/anime.service';

@Component({
  selector: 'app-anime-section',
  templateUrl: './anime-section.component.html',
  styleUrls: ['./anime-section.component.css']
})
export class AnimeSectionComponent implements OnInit {

  private _JIKAN_BASE_URL = "https://api.jikan.moe/v4";
  readonly today = new Date();

  animePage: number = 1;
  animeData: Array<any> = [];
  isError: boolean = false;
  constructor(private _animeService: AnimeService) { }


  ngOnInit(): void {
    this.getAnimeSearch({ order_by: 'start_date', sort: "desc", status: "airing", type: "tv", page: this.animePage });
    this.animePage++;
    this.getAnimeSearch({ order_by: 'start_date', sort: "desc", status: "airing", type: "tv", page: this.animePage });
  }

  getAnimeSearch(filters): void {
    const formattedDate = this.today.toISOString().split('T')[0];
    this._animeService.getAnimeSearch(filters)
      .then((response: any) => {
        this.isError = false;
        this.animeData = this.animeData.concat(response.data);
        console.log("getAnimeSearch() from home component(Anime Section)", response.pagination);
      })
      .catch((error: any) => {
        console.log("Error: ", error)
        this.isError = true;
      });
  }
}
