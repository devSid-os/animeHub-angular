import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from '../Services/anime.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface Pagination {
  current_page: number,
  last_page: number,
  range: number,
  buttonStart: number,
  data: any,
  limit: number
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  loading: Boolean = false;
  customPagination: Pagination = {
    current_page: 1,
    last_page: 1,
    limit: 24,
    range: 10,
    buttonStart: 1,
    data: {}
  }
  movieData: Array<any> = [];
  filtersApplied: any = {
    filter: ''
  };
  sub: Subscription | null = null;
  constructor(private _animeService: AnimeService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this._route.queryParamMap.subscribe((queryParam) => {
      this.filtersApplied.filter = queryParam.get('status') || 'bypopularity';
      this.resetPagination();
      this.getAnimeMovies({ ...this.filtersApplied }, 1);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  updateQueryParam(param: string): void {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParamsHandling: 'merge',
      queryParams: { status: param }
    });
  }

  resetPagination(): void {
    this.customPagination.current_page = 1;
    this.customPagination.last_page = 1;
    this.customPagination.data = {};
    this.customPagination.buttonStart = 1;
  }

  updatePagination(pageNo: number): void {
    pageNo = Number(pageNo);
    this.customPagination.current_page = pageNo;
    const current_page = Number(this.customPagination.current_page);
    const firstBtn_on_ui = this.customPagination.buttonStart;
    const lastBtn_on_ui = this.customPagination.buttonStart + (this.customPagination.range - 1);
    if (current_page === 1 || current_page === this.customPagination.last_page) return;
    if (current_page >= lastBtn_on_ui) {
      this.customPagination.buttonStart += 1;
    }
    else if (current_page <= firstBtn_on_ui) {
      this.customPagination.buttonStart -= 1;
    }
    // console.log(this.customPagination)
  }

  onLastPageClick(): void {
    this.customPagination.buttonStart = (this.customPagination.last_page - (this.customPagination.range - 1));
    this.onPageChange(this.customPagination.last_page);
  }

  onFirstPageClick(): void {
    this.customPagination.buttonStart = 1;
    this.onPageChange(1);
  }

  onPageChange(pageNo: any): void {
    pageNo = Number(pageNo);
    if (pageNo in this.customPagination.data) {
      this.movieData = this.customPagination.data[pageNo];
      this.updatePagination(pageNo);
    }
    else {
      this.getAnimeMovies({ ...this.filtersApplied }, pageNo);
    }
  }

  redirectToAnimeDetailPage(id: string): void {
    this._router.navigate([`/anime/${id}`]);
  }

  rangePaginationButtons(start: any, end: any) {
    const startNum = Number(start);
    const endNum = Number(end);
    if (startNum > endNum) return []; // Return an empty array if start > end
    return Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i);
  }

  getAnimeMovies(filters: any, pageNo: number): void {
    this.loading = true;
    filters['page'] = pageNo;
    filters['limit'] = this.customPagination.limit;
    this._animeService.getAnimeMovies(filters)
      .then((response: any) => {
        this.movieData = response.data;
        this.customPagination.last_page = response.pagination.last_visible_page;
        this.customPagination.data[response.pagination.current_page] = this.movieData;
        this.updatePagination(response.pagination.current_page);
        this.loading = false;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.loading = false;
      });
  }
}