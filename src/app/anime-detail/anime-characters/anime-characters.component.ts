import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-characters',
  templateUrl: './anime-characters.component.html',
  styleUrls: ['./anime-characters.component.css']
})
export class AnimeCharactersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("rendering character component...")
  }

}
