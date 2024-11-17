import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../Services/anime.service';
import { from, of } from 'rxjs';
import { catchError, concatMap, delay, finalize, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animePage: number = 1;
  animeData: Array<any> = [];
  isError: boolean = false;
  animeAsideData: Array<any> = [];
  isErrorAside: boolean = false;
  loading: boolean = false;

  constructor(private _animeService: AnimeService) { }

  ngOnInit(): void {
    this.executeApis();
  }

  executeApis() {
    this.loading = true;
    // Create an array of functions that return promises
    const requests = [
      () => this.getAnimeSearch({ order_by: 'start_date', sort: "desc", status: "airing", type: "tv", page: 1 }),
      () => this.getAnimeSearch({ order_by: 'start_date', sort: "desc", status: "airing", type: "tv", page: 2 }),
      () => this.getPopularAnimes({ limit: "20", filter: "bypopularity" })
    ];

    from(requests).pipe(
      concatMap((requestFunc) => {
        return from(requestFunc()).pipe(
          delay(333), // Add delay for subsequent requests
          catchError(error => {
            console.log("Error: ", error);
            return of(null); // Handle error by returning null
          })
        );
      })
      , toArray(),
      finalize(() => this.loading = false)
    ).subscribe(); // Execute the requests
  }

  getAnimeSearch(filters: any) {
    return this._animeService.getAnimeSearch(filters)
      .then((response: any) => {
        this.isError = false;
        this.animeData = this.animeData.concat(response.data);
        // console.log("getAnimeSearch() from home component(Anime Section)", response.pagination);
      })
      .catch((error: any) => {
        console.log("Error: ", error)
        this.isError = true;
      });
  }

  getPopularAnimes(filters: any) {
    return this._animeService.getPopularAnimes(filters)
      .then((response: any) => {
        this.animeAsideData = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.isErrorAside = true;
      });
  }

}
