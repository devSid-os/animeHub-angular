import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/Services/anime.service';

@Component({
  selector: 'app-anime-overview',
  templateUrl: './anime-overview.component.html',
  styleUrls: ['./anime-overview.component.css']
})
export class AnimeOverviewComponent implements OnInit {

  @Input('anime') anime: any;
  @Input('animePictures') animePictures: Array<any> = [];
  @Input('animeStreamingData') animeStreamingData: Array<any> = [];
  @Input('animeCharacters') animeCharacters: Array<any> = [];
  @Input('animeRecommendations') animeRecommendations: Array<any> = [];
  imageNumber: number = 0;
  scoreArray: Array<"h" | "f" | "e"> = ["e", "e", "e", "e", "e"];
  isScreenShotsModalOpen: boolean = false;
  isTrailerModalOpen: boolean = false;

  constructor(public sanitizer: DomSanitizer, private _router: Router, private _animeService: AnimeService) { }


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

  redirectToAnimeDetailPage(animeId: string) {
    this._animeService.selectedAnime = null;
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