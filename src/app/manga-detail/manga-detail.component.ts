import { Component, OnInit } from '@angular/core';
import { from, of, Subscription } from 'rxjs';
import { catchError, concatMap, delay, finalize, toArray } from 'rxjs/operators';
import { MangaService } from '../Services/manga.service';
import { ActivatedRoute } from '@angular/router';
import { TABS } from '../enums';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {

  tabs: typeof TABS = TABS;
  loading: boolean = false;
  manga: any = null;
  mangaPictures: Array<any> = [];
  mangaCharacters: Array<any> = [];
  mangaRecommendations: Array<any> = [];
  mangaReviews: { pagination: Object, data: Array<any> } = { pagination: {}, data: [] };
  mangaId: string | null = null;
  totalRecommendations: number = 12;
  selectedTab: TABS.OVERVIEW | TABS.RECOMMENDATIONS | TABS.REVIEWS | TABS.CHARACTERS = this.tabs.OVERVIEW;
  sub1: Subscription | null = null;

  constructor(private mangaService: MangaService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub1 = this._route.paramMap.subscribe(params => {
      this.resetProperties();
      this.mangaId = params.get('id');
      this.fetchMangaData(this.mangaId);
    });
  }

  ngOnDestroy(): void {
    if (this.sub1 instanceof Subscription) this.sub1.unsubscribe();
    this.resetProperties();
  }

  private resetProperties(): void {
    this.selectedTab = this.tabs.OVERVIEW;
    this.manga = null;
    this.mangaPictures = [];
    this.mangaCharacters = [];
    this.mangaRecommendations = [];
    this.mangaReviews = { pagination: {}, data: [] };
    this.mangaId = null;
    this.totalRecommendations = 12;
  }

  fetchMangaData(mangaId: string) {
    this.loading = true;
    // Create an array of functions that return promises
    const requests = [
      () => this.getFullManga(mangaId),
      () => this.getMangaCharacters(mangaId),
      () => this.getMangaPictures(mangaId),
      () => this.getMangaReviews(mangaId, '1'),
      () => this.getMangaRecommendations(mangaId)
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

  getFullManga(mangaId: string): Promise<any> {
    return this.mangaService.getFullMangaById(mangaId)
      .then((response: any) => {
        this.manga = response.data;
      });
  }

  getMangaCharacters(mangaId: string): Promise<any> {
    return this.mangaService.getMangaCharacters(mangaId)
      .then((response: any) => {
        this.mangaCharacters = response.data;
      });
  }

  getMangaRecommendations(mangaId: string): Promise<any> {
    return this.mangaService.getMangaRecommendations(mangaId)
      .then((response: any) => {
        this.mangaRecommendations = response.data;
      });
  }

  getMangaPictures(mangaId: string): Promise<any> {
    return this.mangaService.getMangaPictures(mangaId)
      .then((response: any) => {
        this.mangaPictures = response.data;
      });
  }

  getMangaReviews(mangaId: string, pageNo: any): Promise<any> {
    return this.mangaService.getMangaReviews(mangaId, pageNo)
      .then((response: any) => {
        const concatReviews = this.mangaReviews.data.concat(response.data);
        this.mangaReviews = { pagination: { ...response.pagination }, data: concatReviews };
      });
  }

}
