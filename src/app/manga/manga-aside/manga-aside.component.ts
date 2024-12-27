import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga-aside',
  templateUrl: './manga-aside.component.html',
  styleUrls: ['./manga-aside.component.css']
})
export class MangaAsideComponent implements OnInit {
  @Input('mangaAsideData') mangaAsideData: Array<any> = [];

  constructor(private _router: Router) { }

  redirectToMangaDetailPage(id: any): void {
    this._router.navigate(['/manga/' + id]);
  }

  ngOnInit(): void {
  }

}
