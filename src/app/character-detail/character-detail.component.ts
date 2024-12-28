import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { from, of, Subscription } from 'rxjs';
import { AnimeService } from '../Services/anime.service';
import { TABS } from '../enums';
import { catchError, concatMap, delay, finalize, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {

  tabs: typeof TABS = TABS;
  characterId: string | null = null;
  sub1: Subscription | null = null;
  characterData: any = null;
  characterPictures: Array<any> = [];
  imageNumber: number = 0;
  isScreenshotModalOpen: boolean = false;
  loading: boolean = false;
  selectedTab: TABS.OVERVIEW | TABS.VOICE_ACTORS | TABS.MANGA_ROLES = this.tabs.OVERVIEW;
  constructor(private _route: ActivatedRoute, private _animeService: AnimeService) { }

  ngOnInit(): void {
    this.sub1 = this._route.paramMap.subscribe((param: ParamMap) => {
      this.characterId = param.get("id");
      this.executeApis();
    });
  }

  executeApis() {
    this.loading = true;
    // Create an array of functions that return promises
    const requests = [
      () => this.getCharacterPictures(this.characterId),
      () => this.getFullCharacterDetailsById(this.characterId)
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

  ngOnDestroy(): void {
    if (this.sub1 instanceof Subscription) this.sub1.unsubscribe();
    this.characterId = null;
    this.characterData = null;
  }

  getCharacterPictures(id: string) {
    return this._animeService.getCharacterPictures(id)
      .then((response: any) => {
        this.characterPictures = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      })
  }

  getFullCharacterDetailsById(id: string) {
    return this._animeService.getCharacterFullById(id)
      .then((response: any) => {
        this.characterData = response.data;
        if (this.characterData.about) {
          this.characterData.about = this.characterData.about.replace(/(.*?):/g, '<b>$1:</b>');
          this.characterData.about = this.characterData.about.replace(/\n{3,}/g, '<br>');
          this.characterData.about = this.characterData.about.replace(/\n/g, "<br>");
        }
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      });
  }

  showNextImage(): void {
    if (this.imageNumber == this.characterPictures.length - 1) this.imageNumber = 0;
    else this.imageNumber += 1;
  }

  showPrevImage(): void {
    if (this.imageNumber == 0) this.imageNumber = this.characterPictures.length - 1;
    else this.imageNumber -= 1;
  }

}
