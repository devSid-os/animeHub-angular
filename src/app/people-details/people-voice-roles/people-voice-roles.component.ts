import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-voice-roles',
  templateUrl: './people-voice-roles.component.html',
  styleUrls: ['./people-voice-roles.component.css']
})
export class PeopleVoiceRolesComponent implements OnInit {

  @Input('personImage') personImage: any;
  @Input('personName') personName: any;
  @Input('personVoices') personVoices: Array<any> = [];
  sliceIndex: number = 8;

  constructor() { }

  ngOnInit(): void {
  }

}
