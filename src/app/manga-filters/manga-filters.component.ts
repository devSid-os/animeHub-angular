import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MangaService } from '../Services/manga.service';

@Component({
  selector: 'app-manga-filters',
  templateUrl: './manga-filters.component.html',
  styleUrls: ['./manga-filters.component.css']
})
export class MangaFiltersComponent implements OnInit, OnDestroy {
  loading: Boolean = false;
  showGenreFilterModal: Boolean = false;
  showSortingFilterModal: Boolean = false;
  genreFilterApplied: Boolean = false;
  sub1: Subscription | null = null;
  sortOptions: Array<any> = [{ value: 'asc', text: 'A to Z' }, { value: 'desc', text: 'Z to A' }];
  orderByOptions: Array<any> = [{ value: 'title', text: 'Title' }, { value: 'rank', text: 'RANK' }, { value: 'popularity', text: 'Popularity' }];
  filtersApplied = {
    limit: 24,
    status: 'publishing',
    genres: '',
    sort: '',
    order_by: ''
  }
  mangaData: any = { pagination: null, data: [] };
  customPagination: any = {
    buttonRange: {
      from: 1,
      last: 0
    },
    data: {}
  }
  mangaGenres: Array<any> = [];
  genresSelected: Array<any> = [];
  genresSelectedMap: any = {};
  constructor(private _route: ActivatedRoute, private _router: Router, private _mangaService: MangaService) { }

  ngOnInit(): void {
    this.sub1 = this._route.queryParamMap.subscribe((queryParams) => {
      this.filtersApplied.status = queryParams.get("status");
      this.mangaData.data = [];
      this.applyFilters(this.genreFilterApplied);
    });
  }

  trackById(_: number, item: any) {
    return item.mal_id;
  }

  onRadioChange(option: any, type: string): void {
    switch (type) {
      case 'sort':
        this.filtersApplied.sort = option.value;
        break;
      case 'order':
        this.filtersApplied.order_by = option.value;
        break;
    }
    // console.log(this.filtersApplied)
  }

  // FUNCTIONS TO SHOW PAGINATION BUTTONS
  getRange(): number[] {
    const arr = [];
    for (var i = this.customPagination.buttonRange.from; i < this.customPagination.buttonRange.from + this.customPagination.buttonRange.last; ++i) arr.push(i);
    return arr;
  }

  // FUNTION TO UPDATE BUTTON RANGE
  updatePaginationSlice(pageNo: number): void {
    this.customPagination.data[pageNo] = { data: this.mangaData.data, pagination: this.mangaData.pagination };
    if (pageNo === 1) return;
    // console.log(this.customPagination)
    if (pageNo <= this.customPagination.buttonRange.from) {
      this.customPagination.buttonRange.from -= 1;
    }
    else if (this.mangaData.pagination.has_next_page && pageNo >= (this.customPagination.buttonRange.from + 4)) {
      this.customPagination.buttonRange.from += 1;
    }
  }

  onLastPageClick(num: any): void {
    this.customPagination.buttonRange.from = num - 4;
    this.onPaginationButtonClick(num);
  }

  onFirstPageClick(): void {
    this.customPagination.buttonRange.from = 1;
    this.onPaginationButtonClick(1);
  }

  // FUNCTION HANDLE PAGINATION DATA
  onPaginationButtonClick(num: any): void {
    if (num in this.customPagination.data) {
      this.mangaData.data = this.customPagination.data[num].data;
      this.mangaData.pagination = this.customPagination.data[num].pagination;;
      this.updatePaginationSlice(num);
    }
    else {
      this.getMangaSearch({ ...this.filtersApplied, page: num });
    }
  }

  // UPDATE GENRES VARIABLES ACCORDINGLY
  onGenreSelect(id: any): void {
    const index = this.genresSelected.indexOf(id);
    if (index > -1) {
      this.genresSelected.splice(index, 1);
      this.genresSelectedMap[id] = false;
    }
    else {
      this.genresSelected.push(id);
      this.genresSelectedMap[id] = true;
    }
  }

  // SHOW GENRE MODAL FUNCTION
  filterByGenres(): void {
    // IF GENRE DATA IS NOT AVAILABLE FETCH IT
    if (this.mangaGenres.length < 1) {
      this.getMangaGenres();
      return;
    }
    // SHOW GENRE MODAL
    this.showGenreFilterModal = true;
  }

  closeGenreModal() { // CLOSE GENRE MODAL
    this.showGenreFilterModal = false;
    this.showSortingFilterModal = false;
  }

  // FUNCTIONS TO APPLY FILTERS
  applyFilters(genreFilter: Boolean): void {
    this.mangaData.data = [];
    this.customPagination.buttonRange.from = 1;
    this.genreFilterApplied = genreFilter;
    this.customPagination.data = {};
    const genreString: string = this.genresSelected.join(",");
    if (genreString) this.filtersApplied.genres = genreString;
    this.getMangaSearch(this.filtersApplied);
    this.showGenreFilterModal = false;
  }

  // FUNCTION CLEAR ALL GENRES
  clearAllGenres(): void {
    this.genreFilterApplied = false;
    this.filtersApplied.genres = '';
    this.genresSelected = [];
    this.mangaData.data = [];
    this.customPagination.buttonRange.from = 1;
    Object.keys(this.genresSelectedMap).forEach((key: any) => {
      this.genresSelectedMap[key] = false;
    });
    this.customPagination.data = {};
    this.getMangaSearch(this.filtersApplied);
    // CLOSE GENRE MODAL
    this.showGenreFilterModal = false;
  }

  updateQueryParam(param: string): void {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParamsHandling: 'merge',
      queryParams: { status: param }
    });
  }

  getMangaSearch(filters: any): void {
    this.loading = true;
    this._mangaService.getMangaSearch(filters)
      .then((response: any) => {
        this.mangaData.data = response.data;
        this.mangaData.pagination = response.pagination;
        this.loading = false;
        const currentPage = Number(response.pagination.current_page);
        const last_visible_page = Number(response.pagination.last_visible_page);
        this.customPagination.buttonRange.last = last_visible_page;
        // console.log(this.customPagination)
        this.updatePaginationSlice(currentPage);
      })
      .catch((error: any) => {
        this.loading = false;
        console.log(error);
      });
  }

  getMangaGenres(): void {
    this.loading = true;
    this._mangaService.getMangaGenres()
      .then((response: any) => {
        this.mangaGenres = response.data;
        this.mangaGenres = this.mangaGenres.reduce((acc, current) => {
          if (!acc.some((obj: any) => obj.mal_id === current.mal_id)) {
            acc.push(current);
          }
          return acc;
        }, []);
        this.filterByGenres();
        this.loading = false;
      })
      .catch((error: any) => {
        this.loading = false;
        console.log("Error: ", error);
      });
  }

  ngOnDestroy(): void {
    if (this.sub1 instanceof Subscription) this.sub1.unsubscribe();
  }
}