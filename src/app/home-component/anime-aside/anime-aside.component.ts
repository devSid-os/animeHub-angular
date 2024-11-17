import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/Services/anime.service';

@Component({
  selector: 'app-anime-aside',
  templateUrl: './anime-aside.component.html',
  styleUrls: ['./anime-aside.component.css']
})
export class AnimeAsideComponent implements OnInit {

  @Input('animeAsideData') animeAsideData: Array<any> = [];
  @Input('isErrorAside') isErrorAside: boolean = false;

  constructor(private _animeService: AnimeService, private _router: Router) { }

  ngOnInit(): void { }

  selectAnime(anime: any): void {
    this._animeService.selectedAnime = anime;
    this._router.navigate(["/anime", anime.mal_id]);
  }

}