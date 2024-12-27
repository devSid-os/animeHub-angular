import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TABS } from 'src/app/enums';
import { MangaService } from 'src/app/Services/manga.service';

type emitValue = TABS.CHARACTERS | TABS.OVERVIEW | TABS.RECOMMENDATIONS | TABS.REVIEWS;
@Component({
  selector: 'app-manga-overview',
  templateUrl: './manga-overview.component.html',
  styleUrls: ['./manga-overview.component.css']
})
export class MangaOverviewComponent implements OnInit {

  tabs: typeof TABS = TABS;
  @Input('manga') manga: any;
  @Input('mangaPictures') mangaPictures: Array<any> = [];
  @Input('mangaStreamingData') mangaStreamingData: Array<any> = [];
  @Input('mangaCharacters') mangaCharacters: Array<any> = [];
  @Input('mangaRecommendations') mangaRecommendations: Array<any> = [];
  @Output() tabChange = new EventEmitter<emitValue>();
  imageNumber: number = 0;
  scoreArray: Array<"h" | "f" | "e"> = ["e", "e", "e", "e", "e"];
  isScreenShotsModalOpen: boolean = false;
  isTrailerModalOpen: boolean = false;

  constructor(private _router: Router, private _mangaService: MangaService) { }

  ngOnInit(): void {
    // RATINGS LOGIC
    const stars: number = Number(this.manga.score) / 2;
    const fullStars = Math.floor(stars);
    const halfStars = stars % 1 >= 0.5 ? 1 : 0;
    var index = 0;
    while (index < fullStars) {
      this.scoreArray[index] = "f";
      ++index;
    }
    if (halfStars > 0) this.scoreArray[index] = "h";
  }

  redirectToMangaDetailPage(mangaId: string) {
    this._router.navigate(['/manga/', mangaId]);
  }

  showNextImage(): void {
    if (this.imageNumber == this.mangaPictures.length - 1) this.imageNumber = 0;
    else this.imageNumber += 1;
  }

  showPrevImage(): void {
    if (this.imageNumber == 0) this.imageNumber = this.mangaPictures.length - 1;
    else this.imageNumber -= 1;
  }

}
