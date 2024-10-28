import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-characters',
  templateUrl: './anime-characters.component.html',
  styleUrls: ['./anime-characters.component.css']
})
export class AnimeCharactersComponent implements OnInit {

  @Input('animeCharacters') animeCharacters: Array<any>;
  @Input('animeImages') animeImages: any;
  groupedCharacters: { [key: string]: Array<any> } = {};

  constructor() { }

  ngOnInit(): void {
    // console.log("rendering character component...")
    for (var i = 0; i < this.animeCharacters.length; ++i) {
      if (this.animeCharacters[i].role in this.groupedCharacters) {
        this.groupedCharacters[this.animeCharacters[i].role].push(this.animeCharacters[i]);
      }
      else {
        this.groupedCharacters[this.animeCharacters[i].role] = [];
        this.groupedCharacters[this.animeCharacters[i].role].push(this.animeCharacters[i]);
      }
    }
  }

}
