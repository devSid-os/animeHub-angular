import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimeService } from '../Services/anime.service';
import { HttpClientModule } from '@angular/common/http';
import { TABS } from '../enums';

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
  selectedTab: TABS.OVERVIEW | TABS.VOICE_ACTORS = this.tabs.OVERVIEW;
  constructor(private _route: ActivatedRoute, private _animeService: AnimeService) { }

  ngOnInit(): void {
    this.sub1 = this._route.paramMap.subscribe((param: ParamMap) => {
      this.characterId = param.get("id");
      this.getFullCharacterDetailsById(this.characterId);
      this.getCharacterPictures(this.characterId);
    });
  }

  ngOnDestroy(): void {
    if (this.sub1 instanceof Subscription) this.sub1.unsubscribe();
    this.characterId = null;
    this.characterData = null;
  }

  getCharacterPictures(id: string): void {
    this._animeService.getCharacterPictures(id)
      .then((response: any) => {
        this.characterPictures = response.data;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      })
  }

  getFullCharacterDetailsById(id: string): void {
    this._animeService.getCharacterFullById(id)
      .then((response: any) => {
        this.characterData = response.data;
        this.characterData.about = this.characterData.about.replace(/(.*?):/g, '<b>$1:</b>');
        this.characterData.about = this.characterData.about.replace(/\n{3,}/g, '<br>');
        this.characterData.about = this.characterData.about.replace(/\n/g, "<br>");
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
