import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { TABS } from 'src/app/enums';

type emitValue = TABS.CHARACTERS | TABS.OVERVIEW | TABS.RECOMMENDATIONS | TABS.REVIEWS;
@Component({
  selector: 'app-anime-overview',
  templateUrl: './anime-overview.component.html',
  styleUrls: ['./anime-overview.component.css']
})
export class AnimeOverviewComponent implements OnInit {

  tabs: typeof TABS = TABS;
  @Input('anime') anime: any;
  @Input('animePictures') animePictures: Array<any> = [];
  @Input('animeStreamingData') animeStreamingData: Array<any> = [];
  @Input('animeCharacters') animeCharacters: Array<any> = [];
  @Input('animeRecommendations') animeRecommendations: Array<any> = [];
  @Output() tabChange = new EventEmitter<emitValue>();
  imageNumber: number = 0;
  scoreArray: Array<"h" | "f" | "e"> = ["e", "e", "e", "e", "e"];
  isScreenShotsModalOpen: boolean = false;
  isTrailerModalOpen: boolean = false;

  constructor(public sanitizer: DomSanitizer, private _router: Router) { }

  ngOnInit(): void {
    // RATINGS LOGIC
    const stars: number = Number(this.anime.score) / 2;
    const fullStars = Math.floor(stars);
    const halfStars = stars % 1 >= 0.5 ? 1 : 0;
    var index = 0;
    while (index < fullStars) {
      this.scoreArray[index] = "f";
      ++index;
    }
    if (halfStars > 0) this.scoreArray[index] = "h";

    // REMOVE AUTOPLAY PARAMETER FROM TRAILER'S EMBEDDED URL
    if (this.anime.trailer.embed_url) {
      if (this.anime.trailer.embed_url.includes("&autoplay=1")) {
        this.anime.trailer.embed_url = this.anime.trailer.embed_url.replace("&autoplay=1", "");
      }
      else if (this.anime.trailer.embed_url.includes("autoplay=1")) {
        this.anime.trailer.embed_url = this.anime.trailer.embed_url.replace("autoplay=1", "");
      }
    }
  }

  redirectToAnimeFilterPage(genreId: string) {
    this._router.navigate(['/anime-filters'], {
      queryParams: { genres: genreId }
    });
  }

  openTrailerModal(): void {
    this.isTrailerModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeTrailerModal(): void {
    this.isTrailerModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  redirectToAnimeDetailPage(animeId: string) {
    this._router.navigate(['/anime/', animeId]);
  }

  showNextImage(): void {
    if (this.imageNumber == this.animePictures.length - 1) this.imageNumber = 0;
    else this.imageNumber += 1;
  }

  showPrevImage(): void {
    if (this.imageNumber == 0) this.imageNumber = this.animePictures.length - 1;
    else this.imageNumber -= 1;
  }
}