import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-item',
  templateUrl: './manga-item.component.html',
  styleUrls: ['./manga-item.component.css']
})
export class MangaItemComponent implements OnInit {

  @Input('manga') manga: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
