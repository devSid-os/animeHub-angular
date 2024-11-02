import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-anime-recommendations',
  templateUrl: './anime-recommendations.component.html',
  styleUrls: ['./anime-recommendations.component.css']
})
export class AnimeRecommendationsComponent implements OnInit {

  @Input('animeImages') animeImages: any;
  @Input('animeRecommendations') animeRecommendations: Array<any>;
  @Input('animeTitle') animeTitle: string;
  @Input('totalRecommendations') totalRecommendations: number;
  @Output('onTotalRecommendationsChange') onTotalRecommendationsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  trackById(_: number, item: any) {
    return item.entry.mal_id;
  }

}
