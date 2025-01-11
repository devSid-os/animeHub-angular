(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-movies-module"],{

/***/ "348/":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-item/movie-item.component */ "qkyf");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");







function MoviesComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_ng_container_13_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const movie_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.redirectToAnimeDetailPage(movie_r10.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movie-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r10);
} }
function MoviesComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesComponent_ng_container_13_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.movieData);
} }
function MoviesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry, No Results Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onFirstPageClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active-page-btn": a0 }; };
function MoviesComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const num_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onPageChange(num_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.customPagination.current_page === num_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r15, " ");
} }
function MoviesComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoviesComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onLastPageClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.customPagination.last_page, " ");
} }
function MoviesComponent_app_loader_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
const _c1 = function (a0) { return { "text-yellow": a0 }; };
class MoviesComponent {
    constructor(_animeService, _router, _route) {
        this._animeService = _animeService;
        this._router = _router;
        this._route = _route;
        this.loading = false;
        this.customPagination = {
            current_page: 1,
            last_page: 1,
            limit: 24,
            range: 10,
            buttonStart: 1,
            data: {}
        };
        this.movieData = [];
        this.filtersApplied = {
            filter: ''
        };
        this.sub = null;
    }
    ngOnInit() {
        this.sub = this._route.queryParamMap.subscribe((queryParam) => {
            this.filtersApplied.filter = queryParam.get('status') || 'bypopularity';
            this.resetPagination();
            this.getAnimeMovies(Object.assign({}, this.filtersApplied), 1);
        });
    }
    ngOnDestroy() {
        if (this.sub)
            this.sub.unsubscribe();
    }
    updateQueryParam(param) {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParamsHandling: 'merge',
            queryParams: { status: param }
        });
    }
    resetPagination() {
        this.customPagination.current_page = 1;
        this.customPagination.last_page = 1;
        this.customPagination.data = {};
        this.customPagination.buttonStart = 1;
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
        // console.log(this.customPagination)
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
            this.movieData = this.customPagination.data[pageNo];
            this.updatePagination(pageNo);
        }
        else {
            this.getAnimeMovies(Object.assign({}, this.filtersApplied), pageNo);
        }
    }
    redirectToAnimeDetailPage(id) {
        this._router.navigate([`/anime/${id}`]);
    }
    rangePaginationButtons(start, end) {
        const startNum = Number(start);
        const endNum = Number(end);
        if (startNum > endNum)
            return []; // Return an empty array if start > end
        return Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i);
    }
    getAnimeMovies(filters, pageNo) {
        this.loading = true;
        filters['page'] = pageNo;
        filters['limit'] = this.customPagination.limit;
        this._animeService.getAnimeMovies(filters)
            .then((response) => {
            this.movieData = response.data;
            this.customPagination.last_page = response.pagination.last_visible_page;
            this.customPagination.data[response.pagination.current_page] = this.movieData;
            this.updatePagination(response.pagination.current_page);
            this.loading = false;
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_1__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 27, vars: 19, consts: [[1, "flex", "flex-col", "justify-between", "md:items-center", "md:flex-row"], [1, "flex-1", "p-4", "py-3"], [1, "m-0", "p-2"], [1, "tracking-wide", "opacity-70", "cursor-pointer", "text-lg", "hover:opacity-100", "md:text-xl", 3, "ngClass", "click"], [1, "custom-container", 2, "margin-top", ".8rem"], [1, "grid", "grid-cols-3", "sm:grid-cols-4", "md:grid-cols-5", "lg:grid-cols-8", 2, "row-gap", "1.2rem!important", "column-gap", "1rem!important"], [4, "ngIf", "ngIfElse"], ["noDataDiv", ""], [1, "my-8", "flex-wrap", "flex", "justify-center", "items-center", "gap-2"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "tracking-wider", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "disabled", "click"], ["type", "button", "class", "bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm", 3, "click", 4, "ngIf"], ["type", "button", "class", "text-[12px] px-2 py-1 rounded-md border-1 border-[gray] md:text-sm", 4, "ngIf"], ["type", "button", "class", "bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "text-sm", "rounded-md", "border-1", "border-[gray]", "tracking-wider", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "disabled", "click"], [4, "ngIf"], ["class", "relative w-full", 3, "click", 4, "ngFor", "ngForOf"], [1, "relative", "w-full", 3, "click"], [3, "movie"], [1, "col-span-8", "text-center", "tracking-wider", "text-[#bebebe]", "text-md", "md:text-lg"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "click"], ["type", "button", 1, "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "md:text-sm"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "ngClass", "click"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manga List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_li_click_5_listener() { return ctx.updateQueryParam("bypopularity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Most Popular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_li_click_7_listener() { return ctx.updateQueryParam("upcoming"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Upcoming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_li_click_9_listener() { return ctx.updateQueryParam("airing"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ongoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MoviesComponent_ng_container_13_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MoviesComponent_ng_template_14_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_button_click_17_listener() { return ctx.onPageChange(ctx.customPagination.current_page - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " PREV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MoviesComponent_button_19_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MoviesComponent_button_20_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MoviesComponent_button_21_Template, 2, 4, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MoviesComponent_button_22_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MoviesComponent_button_23_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_button_click_24_listener() { return ctx.onPageChange(ctx.customPagination.current_page + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MoviesComponent_app_loader_26_Template, 1, 0, "app-loader", 14);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.filtersApplied.filter === "bypopularity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.filtersApplied.filter === "upcoming"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.filtersApplied.filter === "airing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieData.length)("ngIfElse", _r1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_4__["MovieItemComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], styles: ["h4[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nnav[_ngcontent-%COMP%] {\n    background: linear-gradient(270deg, #191919, #671b1b 50%, #191919);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n    border-right: 1px solid hsla(0, 0%, 100%, .2);\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.text-yellow[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n    opacity: 1;\n}\n\n.active-page-btn[_ngcontent-%COMP%] {\n    color: black;\n    background-color: var(--color-yellow);\n}\n\n.custom-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 1250px;\n    padding-left: 7px;\n    padding-right: 7px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n@media screen and (min-width: 768px) {\n    nav[_ngcontent-%COMP%] {\n        background: linear-gradient(90deg, #191919, #831518);\n    }\n\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 1.6rem;\n        padding-right: 1rem !important;\n    }\n\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n        padding-right: 1rem;\n    }\n\n    h4[_ngcontent-%COMP%] {\n        background: linear-gradient(90deg, #000, transparent);\n        text-align: left;\n    }\n\n    .custom-container[_ngcontent-%COMP%] {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBRUksa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUVJLG9EQUFvRDtJQUN4RDs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFFSSxxREFBcUQ7UUFDckQsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgcmlnaHQgdG9wLCBsZWZ0IHRvcCwgZnJvbSgjMTkxOTE5KSwgY29sb3Itc3RvcCg1MCUsICM2NzFiMWIpLCB0bygjMTkxOTE5KSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzE5MTkxOSwgIzY3MWIxYiA1MCUsICMxOTE5MTkpO1xufVxuXG5uYXYgdWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxubmF2IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIC4yKTtcbn1cblxubmF2IHVsIGxpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXllbGxvdyB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmFjdGl2ZS1wYWdlLWJ0biB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG59XG5cbi5jdXN0b20tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIG5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCMxOTE5MTkpLCB0bygjODMxNTE4KSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE5MTkxOSwgIzgzMTUxOCk7XG4gICAgfVxuXG4gICAgbmF2IHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMS42cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgbmF2IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzAwMCksIHRvKHRyYW5zcGFyZW50KSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMCwgdHJhbnNwYXJlbnQpO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC5jdXN0b20tY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.css']
            }]
    }], function () { return [{ type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_1__["AnimeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "3cYw":
/*!***************************************************!*\
  !*** ./src/app/movies/movie-tooltip.directive.ts ***!
  \***************************************************/
/*! exports provided: MovieTooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTooltipDirective", function() { return MovieTooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MovieTooltipDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.movie = null;
        this.tooltipElement = null;
    }
    onMouseEnter() {
        var _a, _b, _c, _d;
        if (!this.movie)
            return;
        if (!(window.innerWidth > 768))
            return;
        // Create tooltip element
        this.tooltipElement = this.renderer.createElement('div');
        // MOVIE TITLE
        const movieTitleTextH6 = this.renderer.createElement('h6');
        this.addClasses(movieTitleTextH6, ['font-bold', 'break-words', 'tracking-wide', 'text-[15px]', 'font-mulish', 'mb-[5px]']);
        const movieTitleText = this.renderer.createText(this.movie.title_english || this.movie.title);
        this.renderer.appendChild(movieTitleTextH6, movieTitleText);
        this.renderer.appendChild(this.tooltipElement, movieTitleTextH6);
        // MOVIE ALT TITLES 
        if (this.movie.title_synonyms.length) {
            const altMovieTitlesH6 = this.renderer.createElement('h6');
            const span = this.renderer.createElement("span");
            this.addClasses(span, ['font-mulish', 'text-[12px]', 'italic', 'font-normal', 'tracking-wider']);
            this.renderer.appendChild(span, this.renderer.createText('Alt Titles: '));
            this.renderer.appendChild(altMovieTitlesH6, span);
            this.renderer.appendChild(altMovieTitlesH6, this.renderer.createText(this.movie.title_synonyms.join(', ')));
            this.addClasses(altMovieTitlesH6, ['text-[12px]', 'tracking-wider', 'italic', 'font-mulish', 'mb-[5px]']);
            this.renderer.setStyle(altMovieTitlesH6, 'font-weight', '300');
            this.renderer.appendChild(this.tooltipElement, altMovieTitlesH6);
        }
        const extraMovieDetailsDiv = this.renderer.createElement('div');
        this.addClasses(extraMovieDetailsDiv, ['flex', 'items-center', 'gap-2', 'flex-wrap']);
        // MOVIE DURATION
        const chapterTextElement = this.renderer.createElement('p');
        const chapterIconElement = this.renderer.createElement("span");
        this.addClasses(chapterIconElement, ['font-light', 'text-[15px]']);
        this.renderer.addClass(chapterIconElement, 'material-icons-outlined');
        this.renderer.appendChild(chapterIconElement, this.renderer.createText('desktop_windows'));
        this.renderer.appendChild(chapterTextElement, chapterIconElement);
        this.renderer.appendChild(chapterTextElement, this.renderer.createText((((_a = this.movie) === null || _a === void 0 ? void 0 : _a.duration) || 'Duration not available')));
        this.addClasses(chapterTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
        this.renderer.setStyle(chapterTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
        this.renderer.appendChild(extraMovieDetailsDiv, chapterTextElement);
        // MOVIE TYPE
        const movieTypeTextElement = this.renderer.createElement('p');
        this.addClasses(movieTypeTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
        this.renderer.setStyle(movieTypeTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
        this.renderer.appendChild(movieTypeTextElement, this.renderer.createText(this.movie.type || 'MOVIE'));
        this.renderer.appendChild(extraMovieDetailsDiv, movieTypeTextElement);
        // PUBLISHED FROM-TO
        const publishedTextElement = this.renderer.createElement('p');
        const calenderIconElement = this.renderer.createElement("span");
        this.addClasses(calenderIconElement, ['font-light', 'text-[15px]']);
        this.renderer.addClass(calenderIconElement, 'material-icons-outlined');
        this.renderer.appendChild(calenderIconElement, this.renderer.createText('today'));
        this.renderer.appendChild(publishedTextElement, calenderIconElement);
        this.renderer.appendChild(publishedTextElement, this.renderer.createText(((_c = (_b = this.movie) === null || _b === void 0 ? void 0 : _b.aired) === null || _c === void 0 ? void 0 : _c.string) || '?'));
        this.addClasses(publishedTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
        this.renderer.setStyle(publishedTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
        this.renderer.appendChild(extraMovieDetailsDiv, publishedTextElement);
        // MOVIE RATINGS
        const scoreTextElement = this.renderer.createElement('p');
        const ratingIconElement = this.renderer.createElement("span");
        this.renderer.setStyle(ratingIconElement, 'color', '#ffd600');
        this.addClasses(ratingIconElement, ['font-light', 'text-[15px]']);
        this.renderer.addClass(ratingIconElement, 'material-icons-outlined');
        this.renderer.appendChild(ratingIconElement, this.renderer.createText('star'));
        this.renderer.appendChild(scoreTextElement, ratingIconElement);
        this.renderer.appendChild(scoreTextElement, this.renderer.createText(((_d = this.movie) === null || _d === void 0 ? void 0 : _d.score) || 'n/a'));
        this.addClasses(scoreTextElement, ['flex', 'items-center', 'gap-1', 'mb-0']);
        this.renderer.appendChild(extraMovieDetailsDiv, scoreTextElement);
        this.renderer.appendChild(this.tooltipElement, extraMovieDetailsDiv);
        // BACKGROUND OR SYNOPSIS
        const backgroundTextElement = this.renderer.createElement('p');
        const backgroundText = this.movie.background || this.movie.synopsis || 'Description Not Available.';
        this.renderer.appendChild(backgroundTextElement, this.renderer.createText((backgroundText)));
        this.addClasses(backgroundTextElement, ['tracking-wider', 'my-2', 'font-mulish', 'text-[13px]']);
        this.renderer.setStyle(backgroundTextElement, 'font-weight', '300');
        this.renderer.appendChild(this.tooltipElement, backgroundTextElement);
        // MOVIE SOURCE
        if (this.movie.source) {
            const movieSourceTextElement = this.renderer.createElement('p');
            const movieSourceText = 'Source: ' + this.movie.source;
            this.renderer.appendChild(movieSourceTextElement, this.renderer.createText((movieSourceText)));
            this.addClasses(movieSourceTextElement, ['italic', 'tracking-wider', 'mb-2', 'font-mulish', 'text-[11px]']);
            this.renderer.appendChild(this.tooltipElement, movieSourceTextElement);
        }
        // THEMES
        if (this.movie.themes.length) {
            const themeDivContainerElement = this.renderer.createElement('div');
            this.addClasses(themeDivContainerElement, ['flex', 'gap-3', 'items-start']);
            const themeTextSpan = this.renderer.createElement('span');
            this.renderer.appendChild(themeTextSpan, this.renderer.createText('Themes'));
            this.addClasses(themeTextSpan, ['font-bold', 'text-[12px]', 'tracking-wider', 'py-1']);
            const themesDivElement = this.renderer.createElement('div');
            this.addClasses(themesDivElement, ['flex', 'flex-wrap', 'gap-2']);
            this.movie.themes.forEach((theme) => {
                const themeDivElement = this.renderer.createElement('div');
                this.addClasses(themeDivElement, ['bg-[#2e2e2e]', 'font-normal', 'text-[12px]', 'tracking-wider', 'p-1', 'rounded-sm', 'px-2']);
                this.renderer.appendChild(themeDivElement, this.renderer.createText(theme.name));
                this.renderer.appendChild(themesDivElement, themeDivElement);
            });
            this.renderer.appendChild(themeDivContainerElement, themeTextSpan);
            this.renderer.appendChild(themeDivContainerElement, themesDivElement);
            this.renderer.appendChild(this.tooltipElement, themeDivContainerElement);
        }
        // Style the tooltip
        this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
        this.renderer.setStyle(this.tooltipElement, 'top', '50%');
        this.renderer.setStyle(this.tooltipElement, 'transform', 'translateY(-50%)');
        this.renderer.setStyle(this.tooltipElement, 'left', '105%');
        this.renderer.setStyle(this.tooltipElement, 'background', '#1f1f1f');
        this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
        this.renderer.setStyle(this.tooltipElement, 'padding', '10px');
        this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
        this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
        this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
        this.renderer.setStyle(this.tooltipElement, 'pointer-events', 'none');
        this.renderer.setStyle(this.tooltipElement, 'transition', 'opacity 0.2s');
        this.renderer.setStyle(this.tooltipElement, 'opacity', '0');
        this.renderer.setStyle(this.tooltipElement, 'min-width', '400px');
        this.renderer.setStyle(this.tooltipElement, 'width', 'max-content');
        this.renderer.setStyle(this.tooltipElement, 'max-width', '440px');
        this.renderer.setStyle(this.tooltipElement, 'overflow', 'hidden');
        this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
        // Append tooltip to the body
        this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
        if (document.body.scrollWidth > document.body.clientWidth) {
            this.renderer.removeChild(this.el, this.tooltipElement);
            this.renderer.setStyle(this.tooltipElement, 'left', '-324%');
            this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
        }
    }
    addClasses(element, classes) {
        classes.forEach((cls) => {
            this.renderer.addClass(element, cls);
        });
    }
    onMouseLeave() {
        if (this.tooltipElement) {
            this.renderer.removeChild(this.el, this.tooltipElement);
            this.tooltipElement = null;
        }
    }
}
MovieTooltipDirective.ɵfac = function MovieTooltipDirective_Factory(t) { return new (t || MovieTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MovieTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MovieTooltipDirective, selectors: [["", "appMovieTooltip", ""]], hostBindings: function MovieTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MovieTooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MovieTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { movie: ["appMovieTooltip", "movie"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appMovieTooltip]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appMovieTooltip']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "EA54":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.component */ "348/");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-item/movie-item.component */ "qkyf");
/* harmony import */ var _movie_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-tooltip.directive */ "3cYw");









const routes = [
    { path: "", component: _movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"] }
];
class MoviesModule {
}
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesModule_Factory(t) { return new (t || MoviesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"], _movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_5__["MovieItemComponent"], _movie_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["MovieTooltipDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"], _movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_5__["MovieItemComponent"], _movie_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["MovieTooltipDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_3__["LoaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qkyf":
/*!***********************************************************!*\
  !*** ./src/app/movies/movie-item/movie-item.component.ts ***!
  \***********************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-tooltip.directive */ "3cYw");



class MovieItemComponent {
    constructor() {
        this.movie = null;
    }
    ngOnInit() {
    }
}
MovieItemComponent.ɵfac = function MovieItemComponent_Factory(t) { return new (t || MovieItemComponent)(); };
MovieItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieItemComponent, selectors: [["app-movie-item"]], inputs: { movie: "movie" }, decls: 10, vars: 5, consts: [[1, "movie-div", "gap-1", "flex", "flex-col", "items-center", "overflow-hidden", "hover:cursor-pointer"], [1, "w-full", "h-[170px]", "overflow-hidden", "rounded-sm", "sm:h-[200px]", 3, "appMovieTooltip"], ["loading", "lazy", 1, "movie-image", "w-full", "h-full", "object-cover", 3, "src"], [1, "w-full"], [1, "text-[11px]", "tracking-wider", "w-full", "mb-0"], [1, "movie-title", "tracking-wider", "w-full", "text-[13px]", "mb-0", "whitespace-nowrap", "text-ellipsis", "overflow-hidden"], [1, "tracking-wider", "w-full", "text-[gray]", "text-[11px]", "mb-0", "whitespace-nowrap", "text-ellipsis", "overflow-hidden"]], template: function MovieItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appMovieTooltip", ctx.movie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.movie.images.webp.large_image_url || ctx.movie.images.jpg.large_image_url || ctx.movie.images.webp.image_url || ctx.movie.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.movie.rank || "n/a", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.title_english || ctx.movie.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.title_japanese || ctx.movie.title, "");
    } }, directives: [_movie_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["MovieTooltipDirective"]], styles: [".movie-image[_ngcontent-%COMP%] {\n    transition: transform .1s ease-in-out, opacity .1s ease-in-out;\n}\n\n.movie-div[_ngcontent-%COMP%]:hover   .movie-image[_ngcontent-%COMP%] {\n    transform: translateY(-3px);\n    opacity: .7;\n}\n\n.movie-div[_ngcontent-%COMP%]:hover   .movie-title[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n    font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWl0ZW0vbW92aWUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWUtaXRlbS9tb3ZpZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtaW1hZ2Uge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW92aWUtZGl2OmhvdmVyIC5tb3ZpZS1pbWFnZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIG9wYWNpdHk6IC43O1xufVxuXG4ubW92aWUtZGl2OmhvdmVyIC5tb3ZpZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-item',
                templateUrl: './movie-item.component.html',
                styleUrls: ['./movie-item.component.css']
            }]
    }], function () { return []; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['movie']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=movies-movies-module.js.map