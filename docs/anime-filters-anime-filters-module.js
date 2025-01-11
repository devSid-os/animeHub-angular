(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anime-filters-anime-filters-module"],{

/***/ "jAf6":
/*!**********************************************************!*\
  !*** ./src/app/anime-filters/anime-filters.component.ts ***!
  \**********************************************************/
/*! exports provided: AnimeFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeFiltersComponent", function() { return AnimeFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/anime-item/anime-item.component */ "mYEO");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");








function AnimeFiltersComponent_ng_container_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_ng_container_22_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const anime_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.redirectToAnimePage(anime_r11.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-anime-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("anime", anime_r11);
} }
function AnimeFiltersComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimeFiltersComponent_ng_container_22_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.animeData);
} }
function AnimeFiltersComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry, No Results Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeFiltersComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onFirstPageClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeFiltersComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active-page-btn": a0 }; };
function AnimeFiltersComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const num_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onPageChange(num_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r16 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.customPagination.current_page === num_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r16, " ");
} }
function AnimeFiltersComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeFiltersComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onLastPageClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.customPagination.last_page, " ");
} }
function AnimeFiltersComponent_div_35_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r21.getSelectedGenresLength(), " Genres Selected)");
} }
const _c1 = function (a0) { return { "chip-hover": a0 }; };
function AnimeFiltersComponent_div_35_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_div_35_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const anime_genre_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onGenreSelect(anime_genre_r25.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_genre_r25 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r22.genresSelectedMap[anime_genre_r25.mal_id]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", anime_genre_r25.name, " ");
} }
function AnimeFiltersComponent_div_35_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_div_35_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.clearAllGenres(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clear Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeFiltersComponent_div_35_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_div_35_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.applyGenreFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Apply Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeFiltersComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_div_35_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_div_35_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " FILTER ANIME BY GENRES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnimeFiltersComponent_div_35_ng_container_5_Template, 4, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnimeFiltersComponent_div_35_button_7_Template, 2, 4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AnimeFiltersComponent_div_35_button_9_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnimeFiltersComponent_div_35_button_10_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getSelectedGenresLength());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.animeGenres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getSelectedGenresLength() || ctx_r8.genreFilterApplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getSelectedGenresLength());
} }
function AnimeFiltersComponent_app_loader_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
const _c2 = function (a0) { return { "text-yellow": a0 }; };
const _c3 = function (a0, a1) { return { "bg-[#ffd600]": a0, "text-black": a1 }; };
const _c4 = function (a0) { return { "text-black": a0 }; };
class AnimeFiltersComponent {
    constructor(_animeService, _route, _router) {
        this._animeService = _animeService;
        this._route = _route;
        this._router = _router;
        this.loading = false;
        this.showGenreFilterModal = false;
        this.genreFilterApplied = false;
        this.animeData = [];
        this.genresSelectedMap = {};
        this.sub = null;
        this.customPagination = {
            limit: 24,
            data: {},
            current_page: 1,
            buttonStart: 1,
            last_page: 1,
            range: 10
        };
        this.filtersApplied = {
            status: '',
            genres: '',
            sfw: true
        };
        this.animeGenres = [];
    }
    ngOnInit() {
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
                selectedGenres.forEach((id) => {
                    id = Number(id);
                    this.genresSelectedMap[id] = true;
                });
            }
            this.getAnimeSearch(Object.assign({}, this.filtersApplied), this.customPagination.current_page);
        });
        this._animeService.showAnimeSearch.next(true);
    }
    ngOnDestroy() {
        this._animeService.showAnimeSearch.next(false);
        if (this.sub instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"])
            this.sub.unsubscribe();
    }
    updatePagination(pageNo) {
        pageNo = Number(pageNo);
        this.customPagination.current_page = pageNo;
        const current_page = Number(this.customPagination.current_page);
        const firstBtn_on_ui = this.customPagination.buttonStart;
        const lastBtn_on_ui = this.customPagination.buttonStart + (this.customPagination.range - 1);
        if (current_page === 1 || current_page === this.customPagination.last_page)
            return;
        if (current_page >= lastBtn_on_ui) {
            this.customPagination.buttonStart += 1;
        }
        else if (current_page <= firstBtn_on_ui) {
            this.customPagination.buttonStart -= 1;
        }
    }
    onLastPageClick() {
        this.customPagination.buttonStart = (this.customPagination.last_page - (this.customPagination.range - 1));
        this.onPageChange(this.customPagination.last_page);
    }
    onFirstPageClick() {
        this.customPagination.buttonStart = 1;
        this.onPageChange(1);
    }
    onPageChange(pageNo) {
        pageNo = Number(pageNo);
        if (pageNo in this.customPagination.data) {
            this.animeData = this.customPagination.data[pageNo];
            this.updatePagination(pageNo);
        }
        else {
            this.getAnimeSearch(Object.assign({}, this.filtersApplied), pageNo);
        }
    }
    getSelectedGenresLength() {
        var isSelected = 0;
        Object.keys(this.genresSelectedMap).forEach((key) => {
            if (this.genresSelectedMap[key] === true)
                isSelected += 1;
        });
        return isSelected;
    }
    // UPDATE GENRES VARIABLES ACCORDINGLY
    onGenreSelect(id) {
        if (id in this.genresSelectedMap && this.genresSelectedMap[id] === true) {
            this.genresSelectedMap[id] = false;
        }
        else {
            this.genresSelectedMap[id] = true;
        }
    }
    redirectToAnimePage(id) {
        this._router.navigate([`/anime/${id}`]);
    }
    applyGenreFilter() {
        const selectedGenres = [];
        Object.keys(this.genresSelectedMap).forEach((key) => {
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
        this.showGenreFilterModal = false;
    }
    // FUNCTION CLEAR ALL GENRES
    clearAllGenres() {
        this.filtersApplied.genres = '';
        Object.keys(this.genresSelectedMap).forEach((key) => {
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
        else
            this.showGenreFilterModal = true;
    }
    closeModal() {
        this.showGenreFilterModal = false;
    }
    rangePaginationButtons(start, end) {
        const startNum = Number(start);
        const endNum = Number(end);
        if (startNum > endNum)
            return []; // Return an empty array if start > end
        return Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i);
    }
    updateStatusQueryParam(param) {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParamsHandling: 'merge',
            queryParams: { status: param }
        });
    }
    getAnimeGenres() {
        this.loading = true;
        this._animeService.getAnimeGenres()
            .then((response) => {
            this.animeGenres = response.data;
            this.showGenreFilterModal = true;
            this.loading = false;
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
    getAnimeSearch(filters, pageNo) {
        this.loading = true;
        filters['page'] = pageNo;
        filters['limit'] = this.customPagination.limit;
        this._animeService.getAnimeSearch(filters)
            .then((response) => {
            this.animeData = response.data;
            this.customPagination.last_page = response.pagination.last_visible_page;
            this.customPagination.data[response.pagination.current_page] = response.data;
            this.updatePagination(response.pagination.current_page);
            this.loading = false;
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
}
AnimeFiltersComponent.ɵfac = function AnimeFiltersComponent_Factory(t) { return new (t || AnimeFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_2__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AnimeFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeFiltersComponent, selectors: [["app-anime-filters"]], decls: 37, vars: 27, consts: [[1, "flex", "flex-col", "justify-between", "md:items-center", "md:flex-row"], [1, "flex-1", "p-4", "py-3"], [1, "m-0", "p-2"], [1, "tracking-wide", "opacity-70", "cursor-pointer", "text-lg", "hover:opacity-100", "md:text-xl", 3, "ngClass", "click"], [1, "custom-container", 2, "margin-top", ".8rem"], [1, "mb-3", "flex", "justify-end", "gap-2"], ["type", "button", 1, "group", "flex", "items-center", "border-1", "p-1", "px-3", "rounded-[16px]", "hover:bg-[#ffd600]", "hover:text-black"], [1, "material-icons-outlined", "text-[16px]", "group-hover:text-black"], ["type", "button", 1, "group", "flex", "items-center", "border-1", "p-1", "px-3", "rounded-[16px]", "hover:bg-[#ffd600]", "hover:text-black", 3, "ngClass", "click"], [1, "material-icons-outlined", "text-[16px]", "group-hover:text-black", 3, "ngClass"], [1, "grid", "grid-cols-3", "sm:grid-cols-4", "md:grid-cols-5", "lg:grid-cols-8", 2, "row-gap", "1.2rem!important", "column-gap", "1rem!important"], [4, "ngIf", "ngIfElse"], ["noDataDiv", ""], [1, "my-8", "flex-wrap", "flex", "justify-center", "items-center", "gap-2"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "tracking-wider", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "disabled", "click"], ["type", "button", "class", "bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm", 3, "click", 4, "ngIf"], ["type", "button", "class", "text-[12px] px-2 py-1 rounded-md border-1 border-[gray] md:text-sm", 4, "ngIf"], ["type", "button", "class", "bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "text-sm", "rounded-md", "border-1", "border-[gray]", "tracking-wider", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "disabled", "click"], ["class", "fixed top-0 left-0 h-screen w-screen overlay", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "relative w-full", 3, "click", 4, "ngFor", "ngForOf"], [1, "relative", "w-full", 3, "click"], [3, "anime"], [1, "col-span-8", "text-center", "tracking-wider", "text-[#bebebe]", "text-md", "md:text-lg"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "click"], ["type", "button", 1, "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "md:text-sm"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "ngClass", "click"], [1, "fixed", "top-0", "left-0", "h-screen", "w-screen", "overlay", 3, "click"], [1, "w-full", "h-full", "flex", "justify-center", "items-center"], [1, "relative", "bg-[#191919]", "w-[90%]", "max-h-[75%]", "p-3", "pb-0", "overflow-auto", "rounded-md", "md:w-[50%]", "md:max-h-[75%]", 2, "padding-right", ".5rem!important", 3, "click"], [1, "mb-4"], [1, "flex", "flex-wrap", "gap-[.7rem]"], ["class", "border-1 cursor-pointer color-[#bebebe] px-[10px] py-1 text-[13px] tracking-wider rounded-[16px] hover:bg-[gray] hover:text-white", "type", "button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "sticky", "bottom-0", "left-0", "w-full", "bg-[#191919]", "flex", "justify-end", "gap-2", "py-[7px]"], ["class", "text-[11px] tracking-wider rounded-sm bg-[seagreen] text-white p-2 py-1 hover:bg-[red] md:text-[13px]", 3, "click", 4, "ngIf"], ["class", "text-[11px] tracking-wider rounded-sm bg-[#ffd600] text-black p-2 py-1 hover:bg-[#e1be08] md:text-[13px]", 3, "click", 4, "ngIf"], [1, "text-[gray]", "font-light"], ["type", "button", 1, "border-1", "cursor-pointer", "color-[#bebebe]", "px-[10px]", "py-1", "text-[13px]", "tracking-wider", "rounded-[16px]", "hover:bg-[gray]", "hover:text-white", 3, "ngClass", "click"], [1, "text-[11px]", "tracking-wider", "rounded-sm", "bg-[seagreen]", "text-white", "p-2", "py-1", "hover:bg-[red]", "md:text-[13px]", 3, "click"], [1, "text-[11px]", "tracking-wider", "rounded-sm", "bg-[#ffd600]", "text-black", "p-2", "py-1", "hover:bg-[#e1be08]", "md:text-[13px]", 3, "click"]], template: function AnimeFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anime List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_Template_li_click_5_listener() { return ctx.updateStatusQueryParam("airing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ongoing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_Template_li_click_7_listener() { return ctx.updateStatusQueryParam("complete"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_Template_li_click_9_listener() { return ctx.updateStatusQueryParam("upcoming"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "swap_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0A to Z ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_Template_button_click_17_listener() { return ctx.showGenresModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "tune");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0Genres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AnimeFiltersComponent_ng_container_22_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AnimeFiltersComponent_ng_template_23_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_Template_button_click_26_listener() { return ctx.onPageChange(ctx.customPagination.current_page - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " PREV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AnimeFiltersComponent_button_28_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AnimeFiltersComponent_button_29_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AnimeFiltersComponent_button_30_Template, 2, 4, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AnimeFiltersComponent_button_31_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AnimeFiltersComponent_button_32_Template, 2, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeFiltersComponent_Template_button_click_33_listener() { return ctx.onPageChange(ctx.customPagination.current_page + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AnimeFiltersComponent_div_35_Template, 11, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AnimeFiltersComponent_app_loader_36_Template, 1, 0, "app-loader", 20);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx.filtersApplied.status === "airing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx.filtersApplied.status === "complete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.filtersApplied.status === "upcoming"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c3, ctx.genreFilterApplied, ctx.genreFilterApplied));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c4, ctx.genreFilterApplied));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animeData.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", 1 === ctx.customPagination.current_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customPagination.buttonStart >= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customPagination.buttonStart >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rangePaginationButtons(0, ctx.customPagination.last_page).slice(ctx.customPagination.buttonStart, ctx.customPagination.buttonStart + ctx.customPagination.range));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customPagination.last_page - ctx.customPagination.buttonStart > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customPagination.last_page - ctx.customPagination.buttonStart >= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.customPagination.last_page === ctx.customPagination.current_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showGenreFilterModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_5__["AnimeItemComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]], styles: [".mat-radio-button  .mat-radio-outer-circle {\n    border-color: white !important;\n    \n}\n\n .mat-radio-button.mat-accent  .mat-radio-checked .mat-radio-inner-circle {\n    background-color: white !important;\n    \n}\n\n .mat-radio-button  .mat-radio-outer-circle:hover {\n    border-color: white !important;\n    \n}\n\n\n\n .mat-radio-inner-circle {\n    background-color: #ffd600 !important;\n}\n\n .mat-radio-ripple .mat-ripple-element {\n    background-color: #ffd600 !important;\n}\n\nh4[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nnav[_ngcontent-%COMP%] {\n    background: linear-gradient(270deg, #191919, #671b1b 50%, #191919);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n    border-right: 1px solid hsla(0, 0%, 100%, .2);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.text-yellow[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n    opacity: 1;\n}\n\n.custom-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 1250px;\n    padding-left: 7px;\n    padding-right: 7px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.manga-image-overlay[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.overlay[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, .7);\n}\n\n.chip-hover[_ngcontent-%COMP%] {\n    background-color: #ffd600;\n    color: black;\n}\n\n.active-page-btn[_ngcontent-%COMP%] {\n    color: black;\n    background-color: var(--color-yellow);\n}\n\n@media screen and (min-width: 768px) {\n    nav[_ngcontent-%COMP%] {\n        background: linear-gradient(90deg, #191919, #831518);\n    }\n\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 1.6rem;\n        padding-right: 1rem !important;\n    }\n\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n        padding-right: 1rem;\n    }\n\n    h4[_ngcontent-%COMP%] {\n        background: linear-gradient(90deg, #000, transparent);\n        text-align: left;\n    }\n\n    .custom-container[_ngcontent-%COMP%] {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtZmlsdGVycy9hbmltZS1maWx0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUEsbURBQW1EOztBQUNuRDtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUVJLGtFQUFrRTtBQUN0RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0k7UUFFSSxvREFBb0Q7SUFDeEQ7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBRUkscURBQXFEO1FBQ3JELGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FuaW1lLWZpbHRlcnMvYW5pbWUtZmlsdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLm1hdC1yYWRpby1idXR0b24gOjpuZy1kZWVwLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAvKiBDaGFuZ2UgdGhlIGJvcmRlciB0byB3aGl0ZSAqL1xufVxuXG46Om5nLWRlZXAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IDo6bmctZGVlcC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAvKiBPcHRpb25hbDogQ2hhbmdlIHRoZSBpbm5lciBjaXJjbGUgdG8gd2hpdGUgd2hlbiBzZWxlY3RlZCAqL1xufVxuXG46Om5nLWRlZXAubWF0LXJhZGlvLWJ1dHRvbiA6Om5nLWRlZXAubWF0LXJhZGlvLW91dGVyLWNpcmNsZTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC8qIEVuc3VyZSBob3ZlciBzdGF0ZSBtYXRjaGVzICovXG59XG5cbi8qIENoYW5nZSB0aGUgaW5uZXIgY2lyY2xlIHRvIHllbGxvdyB3aGVuIGNoZWNrZWQgKi9cbjo6bmctZGVlcC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2MDAgIWltcG9ydGFudDtcbn1cblxuaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbSgjMTkxOTE5KSwgY29sb3Itc3RvcCg1MCUsICM2NzFiMWIpLCB0bygjMTkxOTE5KSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzE5MTkxOSwgIzY3MWIxYiA1MCUsICMxOTE5MTkpO1xufVxuXG5uYXYgdWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxubmF2IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIC4yKTtcbn1cblxubmF2IHVsIGxpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXllbGxvdyB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmN1c3RvbS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5tYW5nYS1pbWFnZS1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XG59XG5cbi5jaGlwLWhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjAwO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmFjdGl2ZS1wYWdlLWJ0biB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbmF2IHtcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzE5MTkxOSksIHRvKCM4MzE1MTgpKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTkxOTE5LCAjODMxNTE4KTtcbiAgICB9XG5cbiAgICBuYXYgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxLjZyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBuYXYgdWwgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjMDAwKSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwLCB0cmFuc3BhcmVudCk7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-filters',
                templateUrl: './anime-filters.component.html',
                styleUrls: ['./anime-filters.component.css']
            }]
    }], function () { return [{ type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_2__["AnimeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "kttf":
/*!*******************************************************!*\
  !*** ./src/app/anime-filters/anime-filters.module.ts ***!
  \*******************************************************/
/*! exports provided: AnimeFiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeFiltersModule", function() { return AnimeFiltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _anime_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anime-filters.component */ "jAf6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








const routes = [
    { path: "", component: _anime_filters_component__WEBPACK_IMPORTED_MODULE_2__["AnimeFiltersComponent"] }
];
class AnimeFiltersModule {
}
AnimeFiltersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnimeFiltersModule });
AnimeFiltersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnimeFiltersModule_Factory(t) { return new (t || AnimeFiltersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnimeFiltersModule, { declarations: [_anime_filters_component__WEBPACK_IMPORTED_MODULE_2__["AnimeFiltersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeFiltersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_anime_filters_component__WEBPACK_IMPORTED_MODULE_2__["AnimeFiltersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=anime-filters-anime-filters-module.js.map