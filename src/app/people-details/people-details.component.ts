import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimeService } from '../Services/anime.service';
import { TABS } from '../enums';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit, OnDestroy {

  tabs: typeof TABS = TABS;
  loading: boolean = false;
  personData: any = null;
  personId: string | null = null;
  personPictures: Array<any> = [];
  selectedTab: TABS.OVERVIEW | TABS.ANIME_CONTRIBUTIONS | TABS.VOICE_ROLES = this.tabs.OVERVIEW;
  private _sub1: Subscription | null = null;
  constructor(private _route: ActivatedRoute, private _animeService: AnimeService) { }

  ngOnDestroy(): void {
    if (this._sub1 instanceof Subscription) this._sub1.unsubscribe();
  }

  ngOnInit(): void {
    this._sub1 = this._route.paramMap.subscribe((param: ParamMap) => {
      this.personId = param.get("id");
      this.getPersonFullById(this.personId, true);
    });
  }

  getPersonPictures(id: string): void {
    this._animeService.getPersonPictures(id)
      .then((response: any) => {
        this.personPictures = response.data;
        this.loading = false;
      })
      .catch((error: any) => {
        console.log(error);
        this.loading = false;
      })
  }

  getPersonFullById(id: string, initialLoad: boolean = false): void {
    this.loading = true;
    this._animeService.getPersonFullById(id)
      .then((response: any) => {
        this.personData = response.data;
        if (this.personData.about) {
          if (this.personData.birthday) {
            var tempAbout = this.personData.about;
            var dob = new Date(this.personData.birthday);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
              month: 'long', // Full month name
              day: 'numeric', // Day without leading zero
              year: 'numeric', // Full year
            }).format(dob);
            this.personData.about = '<b>Birthday</b>: ' + formattedDate + '\n';
            this.personData.about += tempAbout;
          }
          this.personData.about = this.personData.about.replace(/(.*?):/g, '<b>$1:</b>');
          this.personData.about = this.personData.about.replace(/\n{3,}/g, '<br>');
          this.personData.about = this.personData.about.replace(/\n/g, "<br>");
        }
        if (!initialLoad) this.loading = false;
        else this.getPersonPictures(id);
      })
      .catch((error: any) => {
        console.log(error);
        this.loading = false;
      });
  }

}
