import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    private readonly _JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

    constructor(private _http: HttpClient) { }

    getAnimeGenres(): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/genres/anime`).toPromise();
    }

    getAnimeMovies(filters: any): Promise<any> {
        filters['type'] = 'movie';
        return this._http.get(`${this._JIKAN_BASE_URL}/top/anime`, {
            params: filters
        }).toPromise();
    }

    getPersonPictures(personId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/people/${personId}/pictures`).toPromise();
    }

    getPersonFullById(personId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/people/${personId}/full`).toPromise();
    }

    getAllCharacters(filters: any): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/characters`, {
            params: filters
        }).toPromise()
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

    getAnimeStaff(animeId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/staff`).toPromise();
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