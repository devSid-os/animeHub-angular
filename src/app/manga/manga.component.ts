import { Component, OnInit } from '@angular/core';
import { MangaService } from '../Services/manga.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  loading: Boolean = false;
  mangaData: Array<any> = [];
  mangaAsideData: Array<any> = [];
  pageIndex: number = 1;

  constructor(private __mangaService: MangaService) { }

  ngOnInit(): void {
    this.getMangaSearch({ sort: "desc", order_by: "score", sfw: true, page: this.pageIndex, status: "complete" });
  }

  getMangaSearch(filters: any) {
    this.loading = true;
    this.__mangaService.getMangaSearch(filters)
      .then((response: any) => {
        this.mangaData = this.mangaData.concat(response.data);
        if (this.pageIndex >= 2) {
          this.loading = false;
          this.getPopularMangas({ order_by: "popularity", limit: 20 });
        }
        else {
          this.pageIndex += 1;
          this.getMangaSearch({ sort: "desc", order_by: "score", sfw: true, page: this.pageIndex, status: "complete" });
        }
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.loading = false;
      });
  }

  getPopularMangas(filters: any) {
    this.loading = true;
    this.__mangaService.getMangaSearch(filters)
      .then((response: any) => {
        this.mangaAsideData = this.mangaAsideData.concat(response.data);
        this.loading = false;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.loading = false;
      });
  }
}
