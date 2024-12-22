import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class MangaService {
    private readonly _JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
    private _selectedManga: any = null;

    constructor(private _http: HttpClient) { }

    set selectedAnime(anime: any) {
        this._selectedManga = anime;
    }

    get selectedAnime() {
        return this._selectedManga;
    }

    getMangaSearch(filters: any): Promise<any> {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga`, {
            params: filters
        }).toPromise();
    }
}