import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/Services/anime.service';

@Component({
  selector: 'app-anime-aside',
  templateUrl: './anime-aside.component.html',
  styleUrls: ['./anime-aside.component.css']
})
export class AnimeAsideComponent implements OnInit {

  animeData: Array<any> = [];

  constructor(private _animeService: AnimeService) { }

  ngOnInit(): void {
    this.getPopularAnimes({ limit: "20", filter: "bypopularity" });
  }

  getPopularAnimes(filters: any) {
    this._animeService.getPopularAnimes(filters)
      .then((response: any) => {
        this.animeData = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      })
  }

}
