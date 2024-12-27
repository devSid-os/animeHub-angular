import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input('characters') characters: Array<any> = [];
  @Input('images') images: any;
  groupedCharacters: { [key: string]: Array<any> } = {};

  constructor() { }

  ngOnInit(): void {
    // console.log("rendering character component...")
    for (var i = 0; i < this.characters?.length; ++i) {
      if (this.characters[i]?.role in this.groupedCharacters) {
        this.groupedCharacters[this.characters[i]?.role].push(this.characters[i]);
      }
      else {
        this.groupedCharacters[this.characters[i]?.role] = [];
        this.groupedCharacters[this.characters[i]?.role].push(this.characters[i]);
      }
    }
  }

}
