import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from '../Services/anime.service';
import { ActivatedRoute } from '@angular/router';
import { TABS } from '../enums';
import { from, of, Subscription } from 'rxjs';
import { concatMap, delay, catchError, toArray, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit, OnDestroy {

  tabs: typeof TABS = TABS;
  loading: boolean = false;
  anime: any = null;
  animePictures: Array<any> = [];
  animeStreamingData: Array<any> = [];
  animeCharacters: Array<any> = [];
  animeRecommendations: Array<any> = [];
  animeStaff: Array<any> = [];
  animeReviews: { pagination: Object, data: Array<any> } = { pagination: {}, data: [] };
  animeId: string | null = null;
  totalRecommendations: number = 12;
  selectedTab: TABS.OVERVIEW | TABS.RECOMMENDATIONS | TABS.REVIEWS | TABS.CHARACTERS | TABS.STAFF = this.tabs.OVERVIEW;
  sub1: Subscription | null = null;
  sub2: Subscription | null = null;

  constructor(private _animeService: AnimeService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub1 = this._route.paramMap.subscribe(params => {
      this.resetProperties();
      this.animeId = params.get('id');
      this.fetchAnimeData(this.animeId);
    });
  }

  ngOnDestroy(): void {
    if (this.sub1 instanceof Subscription) this.sub1.unsubscribe();
    if (this.sub2 instanceof Subscription) this.sub2.unsubscribe();
    this.resetProperties();
  }

  private resetProperties(): void {
    this.selectedTab = this.tabs.OVERVIEW;
    this.anime = null;
    this.animePictures = [];
    this.animeStaff = [];
    this.animeStreamingData = [];
    this.animeCharacters = [];
    this.animeRecommendations = [];
    this.animeReviews = { pagination: {}, data: [] };
    this.animeId = null;
    this.totalRecommendations = 12;
  }

  fetchAnimeData(animeId: string) {
    this.loading = true;
    // Create an array of functions that return promises
    const requests = [
      () => this.getFullAnime(animeId),
      () => this.getAnimeCharacters(animeId),
      () => this.getAnimePictures(animeId),
      () => this.getAnimeStreaming(animeId),
      () => this.getAnimeRecommendations(animeId),
      () => this.getAnimeReviews(animeId, '1'),
      () => this.getAnimeStaff(animeId)
    ];

    this.sub2 = from(requests).pipe(
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

  getFullAnime(animeId: string): Promise<any> {
    return this._animeService.getFullAnimeById(animeId)
      .then((response: any) => {
        this.anime = response.data;
      });
  }

  getAnimeStaff(animeId: string): Promise<any> {
    return this._animeService.getAnimeStaff(animeId)
      .then((response: any) => {
        this.animeStaff = response.data;
      });
  }

  getAnimeCharacters(animeId: string): Promise<any> {
    return this._animeService.getAnimeCharacters(animeId)
      .then((response: any) => {
        this.animeCharacters = response.data;
      });
  }

  getAnimeRecommendations(animeId: string): Promise<any> {
    return this._animeService.getAnimeRecommendations(animeId)
      .then((response: any) => {
        this.animeRecommendations = response.data;
      });
  }

  getAnimeStreaming(animeId: string): Promise<any> {
    return this._animeService.getAnimeStreaming(animeId)
      .then((response: any) => {
        this.animeStreamingData = response.data;
      });
  }

  getAnimePictures(animeId: string): Promise<any> {
    return this._animeService.getAnimePictures(animeId)
      .then((response: any) => {
        this.animePictures = response.data;
      });
  }

  getAnimeReviews(animeId: string, pageNo: any): Promise<any> {
    return this._animeService.getAnimeReviews(animeId, pageNo)
      .then((response: any) => {
        const concatReviews = this.animeReviews.data.concat(response.data);
        this.animeReviews = { pagination: { ...response.pagination }, data: concatReviews };
      });
  }
}
