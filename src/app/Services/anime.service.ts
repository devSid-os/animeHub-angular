import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    private readonly _JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
    private _selectedAnime: any = null;

    constructor(private _http: HttpClient) { }

    set selectedAnime(anime: any) {
        this._selectedAnime = anime;
    }

    get selectedAnime() {
        return this._selectedAnime;
    }

    getCharacterPictures(characterId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/characters/${characterId}/pictures`).toPromise();
    }

    getCharacterFullById(characterId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/characters/${characterId}/full`).toPromise();
    }

    getAnimeReviews(animeId: string, page: any): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/reviews`, {
            params: {
                page
            }
        }).toPromise();
    }

    getAnimeCharacters(animeId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/characters`).toPromise();
    }

    getAnimeRecommendations(animeId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/recommendations`).toPromise();
    }

    getAnimeStreaming(animeId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/streaming`).toPromise();
    }

    getAnimePictures(animeId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/pictures`).toPromise();
    }

    getAnimeStats(animeId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/statistics`).toPromise();
    }

    getFullAnimeById(animeId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/full`).toPromise();
    }

    getAnimeSearch(filters: any): Promise<any> {

        return this._http.get(`${this._JIKAN_BASE_URL}/anime`, {
            params: filters
        }).toPromise();
    }

    getPopularAnimes(filters: any): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/top/anime`, {
            params: filters
        }).toPromise();
    }
}