import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimeService } from 'src/app/Services/anime.service';

@Component({
  selector: 'app-anime-reviews',
  templateUrl: './anime-reviews.component.html',
  styleUrls: ['./anime-reviews.component.css']
})
export class AnimeReviewsComponent implements OnInit {

  @Input('animeImages') animeImages: any;
  @Input('animeReviews') animeReviews: any;
  @Input('animeId') animeId: string;
  @ViewChildren('pageBtns') pageBtns: QueryList<any>;
  items: Array<any> = [];
  reviewPagination = {
    buttonRange: {
      from: 0,
      to: 0
    },
    from: 0,
    to: 4,
    pageNo: 1
  }
  reviewParamPageNo: number = 1;
  loading: boolean = false;

  constructor(private _animeService: AnimeService) { }

  onPrevReviewChange(pageNo: number): void {
    this.reviewPagination.pageNo = pageNo;
    this.onReviewPageChange(this.reviewPagination.pageNo);
  }

  onNextPageChange(pageNo: number): void {
    this.reviewPagination.pageNo = pageNo;
    if (this.reviewPagination.pageNo > (this.items[this.items.length - 1] + 1)) {
      this.fetchMoreAnimeReviews();
      return;
    }
    this.onReviewPageChange(this.reviewPagination.pageNo);
  }

  onReviewPageChange(pageNo: number) {
    this.reviewPagination.pageNo = pageNo;

    var firstPageButtonNumber: number = parseInt(this.pageBtns.first.nativeElement.textContent);
    var lastPageButtonNumber: number = parseInt(this.pageBtns.last.nativeElement.textContent);
    if (this.reviewPagination.pageNo !== 1 && this.reviewPagination.pageNo === firstPageButtonNumber) {
      this.reviewPagination.buttonRange.from -= 1;
      this.reviewPagination.buttonRange.to -= 1;
    }
    else if (this.reviewPagination.pageNo > lastPageButtonNumber) {
      this.reviewPagination.buttonRange.from += 1;
      this.reviewPagination.buttonRange.to += 1;
    }

    this.reviewPagination.from = (pageNo - 1) * 4;
    this.reviewPagination.to = Math.min(this.reviewPagination.from + 4, this.animeReviews.data.length);

    if (this.reviewPagination.from < 0) {
      this.reviewPagination.from = 0;
    }
    if (this.reviewPagination.from >= this.animeReviews.data.length) {
      this.reviewPagination.from = Math.floor(this.animeReviews.data.length / 4) * 4;
    }

  }

  fetchMoreAnimeReviews() {
    this.loading = true;
    this.reviewParamPageNo += 1;
    this._animeService.getAnimeReviews(this.animeId, this.reviewParamPageNo)
      .then((response: any) => {
        var length = Math.floor(response.data.length / 4);
        if (((response.data.length / 4) % 4) !== 0) length += 1;
        this.items = this.items.concat(Array.from({ length: length - 1 }, (_, i) => this.items[this.items.length - 1] + i + 1));
        this.animeReviews.data = this.animeReviews.data.concat(response.data);
        this.animeReviews.pagination = response.pagination;
        this.loading = false;
        this.onReviewPageChange(this.reviewPagination.pageNo);
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.loading = false;
      });
  }

  trackByReviewId(_: number, item: any) {
    return item.mal_id;
  }

  ngOnInit(): void {
    var length: number = (Math.floor((this.animeReviews.data.length) / 4));
    if (this.animeReviews.data.length % 4 !== 0) length += 1;
    this.items = Array.from({ length }, (_, i) => (i));
    if (length > 5) this.reviewPagination.buttonRange.to = 5;
    else this.reviewPagination.buttonRange.to = length;
  }

}
