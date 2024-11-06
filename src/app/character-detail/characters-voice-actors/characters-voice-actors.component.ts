import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-voice-actors',
  templateUrl: './characters-voice-actors.component.html',
  styleUrls: ['./characters-voice-actors.component.css']
})
export class CharactersVoiceActorsComponent implements OnInit {

  @Input('characterImage') characterImage: any;
  @Input('characterName') characterName: string;
  @Input('voices') voices: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
