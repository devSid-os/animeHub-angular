import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-aside',
  templateUrl: './manga-aside.component.html',
  styleUrls: ['./manga-aside.component.css']
})
export class MangaAsideComponent implements OnInit {
  @Input('mangaAsideData') mangaAsideData: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
