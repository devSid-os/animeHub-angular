import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  @Input('images') images: any;
  @Input('recommendations') recommendations: Array<any> = [];
  @Input('title') title: string;
  @Input('totalRecommendations') totalRecommendations: number;
  @Input('type') type!: 'manga' | 'anime';
  @Output('onTotalRecommendationsChange') onTotalRecommendationsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  redirectToAnimeOrManga(type: 'manga' | 'anime', id) {
    this._router.navigate([`/${type}/${id}`]);
  }

  trackById(_: number, item: any) {
    return item.entry.mal_id;
  }

}
