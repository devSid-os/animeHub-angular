import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnimeService } from '../Services/anime.service';
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
  selector: 'app-anime-search',
  templateUrl: './anime-search.component.html',
  styleUrls: ['./anime-search.component.css']
})
export class AnimeSearchComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  searchData: Array<any> = [];
  searchValue: string = '';
  sub$: Subscription | null = null;
  filtersApplied = {
    searchQuery: '',
    sfw: true
  }
  customPagination: Pagination = {
    limit: 24,
    data: {},
    current_page: 1,
    buttonStart: 1,
    last_page: 1,
    range: 10
  }

  constructor(private _route: ActivatedRoute, private _animeService: AnimeService, private _router: Router) { }

  ngOnInit(): void {
    this.sub$ = this._route.queryParamMap.subscribe((param: ParamMap) => {
      this.resetPagination();
      this.filtersApplied.searchQuery = (param.get("query") || '');
      this.searchValue = this.filtersApplied.searchQuery;
      this.searchAnime(this.filtersApplied.searchQuery, this.customPagination.current_page);
    });
  }

  resetPagination(): void {
    this.customPagination.limit = 24;
    this.customPagination.current_page = 1;
    this.customPagination.buttonStart = 1;
    this.customPagination.last_page = 1;
    this.customPagination.range = 10;
    this.customPagination.data = {};
  }

  ngOnDestroy(): void {
    if (this.sub$ instanceof Subscription) this.sub$.unsubscribe();
  }

  onSearchEnter(event: any) {
    if (event.key === 'Enter') {
      this.updateQueryParams(this.searchValue);
    }
  }

  updateQueryParams(query: string): void {
    if (this.searchValue.length > 0 && this.searchValue !== this.filtersApplied.searchQuery) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParamsHandling: 'merge',
        queryParams: { query }
      });
    }
  }

  searchAnime(q: string, page: number): void {
    this.loading = true;
    this._animeService.getAnimeSearch({ q, sfw: true, limit: 24, page })
      .then((response: any) => {
        // console.log(response);
        this.searchData = response.data;
        this.customPagination.last_page = response.pagination.last_visible_page;
        this.customPagination.data[response.pagination.current_page] = response.data;
        this.updatePagination(response.pagination.current_page);
        this.loading = false;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.loading = false;
      });
  }

  redirectToAnimePage(id: string): void {
    this._router.navigate([`/anime/${id}`]);
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
    console.log(pageNo)
    if (pageNo in this.customPagination.data) {
      this.searchData = this.customPagination.data[pageNo];
      this.updatePagination(pageNo);
    }
    else {
      this.searchAnime(this.filtersApplied.searchQuery, pageNo);
    }
  }

  rangePaginationButtons(start: any, end: any) {
    const startNum = Number(start);
    const endNum = Number(end);
    if (startNum > endNum) return []; // Return an empty array if start > end
    return Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i);
  }
}
