import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    private readonly _JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

    constructor(private _http: HttpClient) { }

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