import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from '../Services/anime.service';
import { ActivatedRoute } from '@angular/router';

enum TABS {
  OVERVIEW = 'overview',
  RECCOMENDATIONS = 'reccomendations',
  CHARACTERS = 'characters',
  REVIEWS = 'reviews'
}

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit, OnDestroy {

  tabs: typeof TABS = TABS;
  anime: any = null;
  animeStats: any = null;
  animePictures: Array<any> = [];
  animeStreamingData: Array<any> = [];
  animeCharacters: Array<any> = [];
  animeRecommendations: Array<any> = [];
  animeId: string | null = null;
  selectedTab: 'overview' | 'reccomendations' | 'characters' | 'reviews' = this.tabs.OVERVIEW;

  constructor(private _animeService: AnimeService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.animeId = params.get('id');
      this.fetchAnimeData(this.animeId);
    });
  }

  ngOnDestroy(): void {
    this._animeService.selectedAnime = null;
    this.anime = null;
    this.animeStats = null;
    this.animePictures = [];
    this.animeStreamingData = [];
    this.animeCharacters = [];
    this.animeRecommendations = [];
    this.animeId = null;
  }

  fetchAnimeData(animeId: string) {
    if (this._animeService.selectedAnime === null) {
      this.getFullAnime(animeId);
      this.getAnimePictures(animeId);
      this.getAnimeCharacters(animeId);
      setTimeout(() => {
        this.getAnimeStreaming(animeId);
      }, 1000);
      setTimeout(() => {
        this.getAnimeRecommendations(animeId);
      }, 2000);
    }
    else {
      this.anime = this._animeService.selectedAnime;
      this.getAnimeCharacters(animeId);
      this.getAnimePictures(animeId);
      this.getAnimeStreaming(animeId);
      setTimeout(() => {
        this.getAnimeRecommendations(animeId);
      }, 1000);
    }
  }

  getFullAnime(animeId: string) {
    this._animeService.getFullAnimeById(animeId)
      .then((response: any) => {
        this.anime = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      })
  }

  getAnimeCharacters(animeId: string): void {
    this._animeService.getAnimeCharacters(animeId)
      .then((response: any) => {
        this.animeCharacters = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      });
  }

  getAnimeRecommendations(animeId: string): void {
    this._animeService.getAnimeRecommendations(animeId)
      .then((response: any) => {
        this.animeRecommendations = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      });
  }

  getAnimeStreaming(animeId: string): void {
    this._animeService.getAnimeStreaming(animeId)
      .then((response: any) => {
        this.animeStreamingData = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      });
  }

  getAnimePictures(animeId: string): void {
    this._animeService.getAnimePictures(animeId)
      .then((response: any) => {
        this.animePictures = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      });
  }
}