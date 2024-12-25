import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga-section',
  templateUrl: './manga-section.component.html',
  styleUrls: ['./manga-section.component.css']
})
export class MangaSectionComponent implements OnInit {
  @Input('mangaData') mangaData: Array<any> = [];
  constructor(private _router: Router) { }

  ngOnInit(): void {
    // console.log(this.mangaData)
  }

  redirectToMangaFilters(): void {
    this._router.navigate(['/manga-filters'], {
      queryParams: {
        status: 'publishing'
      }
    });
  }

}
