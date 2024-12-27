import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class MangaService {
    private readonly _JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

    constructor(private _http: HttpClient) { }

    getMangaRecommendations(mangaId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${mangaId}/recommendations`).toPromise();
    }

    getMangaReviews(mangaId: string, page: any): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${mangaId}/reviews`, {
            params: {
                page
            }
        }).toPromise();
    }

    getMangaCharacters(mangaId: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${mangaId}/characters`).toPromise();
    }

    getMangaPictures(id: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${id}/pictures`).toPromise();
    }

    getFullMangaById(id: string): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${id}/full`).toPromise();
    }

    getMangaGenres(): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/genres/manga`).toPromise();
    }

    getMangaSearch(filters: any): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga`, {
            params: filters
        }).toPromise();
    }
}