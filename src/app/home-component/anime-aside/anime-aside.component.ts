import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-aside',
  templateUrl: './anime-aside.component.html',
  styleUrls: ['./anime-aside.component.css']
})
export class AnimeAsideComponent implements OnInit {

  @Input('animeAsideData') animeAsideData: Array<any> = [];
  @Input('isErrorAside') isErrorAside: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void { }

  selectAnime(anime: any): void {
    this._router.navigate(["/anime", anime.mal_id]);
  }

}