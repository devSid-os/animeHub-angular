import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-overwiew',
  templateUrl: './people-overwiew.component.html',
  styleUrls: ['./people-overwiew.component.css']
})
export class PeopleOverwiewComponent implements OnInit {

  @Input('personData') personData: any = null;
  @Input('personPictures') personPictures: Array<any> = [];
  isScreenshotModalOpen: boolean = false;
  imageNumber: number = 0;

  showNextImage() {
    if (this.imageNumber >= this.personPictures.length - 1) this.imageNumber = 0;
    else this.imageNumber = this.imageNumber + 1;
  }

  showPrevImage() {
    if (this.imageNumber <= 0) this.imageNumber = this.personPictures.length - 1;
    else this.imageNumber = this.imageNumber - 1;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
