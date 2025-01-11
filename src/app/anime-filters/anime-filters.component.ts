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
  selector: 'app-anime-filters',
  templateUrl: './anime-filters.component.html',
  styleUrls: ['./anime-filters.component.css']
})
export class AnimeFiltersComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  showGenreFilterModal: boolean = false;
  genreFilterApplied: boolean = false;
  animeData: Array<any> = [];
  genresSelectedMap: any = {};
  sub: Subscription | null = null;
  customPagination: Pagination = {
    limit: 24,
    data: {},
    current_page: 1,
    buttonStart: 1,
    last_page: 1,
    range: 10
  }
  filtersApplied: any = {
    status: '',
    genres: '',
    sfw: true
  };
  animeGenres: Array<any> = [];
  constructor(private _animeService: AnimeService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.sub = this._route.queryParamMap.subscribe((queryParam) => {
      this.customPagination.buttonStart = 1;
      this.customPagination.current_page = 1;
      this.customPagination.last_page = 1;
      this.customPagination.data = {};
      this.filtersApplied.status = queryParam.get('status') || '';
      this.filtersApplied.genres = queryParam.get('genres') || '';
      if (this.filtersApplied.genres) {
        this.genreFilterApplied = true;
        const selectedGenres = this.filtersApplied.genres.split(',');
        selectedGenres.forEach((id: any) => {
          id = Number(id);
          this.genresSelectedMap[id] = true;
        });
      }
      this.getAnimeSearch({ ...this.filtersApplied }, this.customPagination.current_page);
    });

    this._animeService.showAnimeSearch.next(true);
  }

  ngOnDestroy(): void {
    this._animeService.showAnimeSearch.next(false);
    if (this.sub instanceof Subscription) this.sub.unsubscribe();
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
    if (pageNo in this.customPagination.data) {
      this.animeData = this.customPagination.data[pageNo];
      this.updatePagination(pageNo);
    }
    else {
      this.getAnimeSearch({ ...this.filtersApplied }, pageNo);
    }
  }

  getSelectedGenresLength(): number {
    var isSelected: number = 0;
    Object.keys(this.genresSelectedMap).forEach((key) => {
      if (this.genresSelectedMap[key] === true) isSelected += 1;
    })
    return isSelected;
  }

  // UPDATE GENRES VARIABLES ACCORDINGLY
  onGenreSelect(id: any): void {
    if (id in this.genresSelectedMap && this.genresSelectedMap[id] === true) {
      this.genresSelectedMap[id] = false;
    }
    else {
      this.genresSelectedMap[id] = true;
    }
  }

  redirectToAnimePage(id: string): void {
    this._router.navigate([`/anime/${id}`]);
  }

  applyGenreFilter(): void {
    const selectedGenres = [];
    Object.keys(this.genresSelectedMap).forEach((key: any) => {
      if (this.genresSelectedMap[key] === true)
        selectedGenres.push(key);
    });
    const genreString = selectedGenres.join(',');
    this._router.navigate([], {
      relativeTo: this._route,
      queryParamsHandling: 'merge',
      queryParams: { status: this.filtersApplied.status, genres: genreString }
    });
    this.genreFilterApplied = true;
    this.showGenreFilterModal = false
  }

  // FUNCTION CLEAR ALL GENRES
  clearAllGenres(): void {
    this.filtersApplied.genres = '';
    Object.keys(this.genresSelectedMap).forEach((key: any) => {
      this.genresSelectedMap[key] = false;
    });
    if (this.genreFilterApplied) {
      this.genreFilterApplied = false;
      this.customPagination.buttonStart = 1;
      this.customPagination.data = {};
      this.animeData = [];
      this._router.navigate([], {
        relativeTo: this._route,
        queryParamsHandling: 'merge',
        queryParams: { status: this.filtersApplied.status, genres: null }
      });
      // CLOSE GENRE MODAL
      this.showGenreFilterModal = false;
    }
  }

  showGenresModal() {
    if (!this.animeGenres.length) {
      this.getAnimeGenres();
    }
    else this.showGenreFilterModal = true;
  }

  closeModal() {
    this.showGenreFilterModal = false;
  }

  rangePaginationButtons(start: any, end: any) {
    const startNum = Number(start);
    const endNum = Number(end);
    if (startNum > endNum) return []; // Return an empty array if start > end
    return Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i);
  }

  updateStatusQueryParam(param: string): void {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParamsHandling: 'merge',
      queryParams: { status: param }
    });
  }

  getAnimeGenres(): void {
    this.loading = true;
    this._animeService.getAnimeGenres()
      .then((response: any) => {
        this.animeGenres = response.data;
        this.showGenreFilterModal = true;
        this.loading = false;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.loading = false;
      });
  }

  getAnimeSearch(filters: any, pageNo: number): void {
    this.loading = true;
    filters['page'] = pageNo;
    filters['limit'] = this.customPagination.limit;
    this._animeService.getAnimeSearch(filters)
      .then((response: any) => {
        this.animeData = response.data;
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
}