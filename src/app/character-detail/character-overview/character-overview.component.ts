import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.css']
})
export class CharacterOverviewComponent implements OnInit {

  @Input('characterData') characterData: any;
  @Input('characterPicturesLength') characterPicturesLength: number;
  @Output('onOpenScreenshotModal') onOpenScreenshotModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
