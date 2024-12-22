import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-section',
  templateUrl: './manga-section.component.html',
  styleUrls: ['./manga-section.component.css']
})
export class MangaSectionComponent implements OnInit {
  @Input('mangaData') mangaData: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.mangaData)
  }

}
