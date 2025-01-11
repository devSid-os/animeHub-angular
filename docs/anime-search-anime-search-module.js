(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anime-search-anime-search-module"],{

/***/ "8ShZ":
/*!********************************************************!*\
  !*** ./src/app/anime-search/anime-search.component.ts ***!
  \********************************************************/
/*! exports provided: AnimeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeSearchComponent", function() { return AnimeSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/anime-item/anime-item.component */ "mYEO");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");









function AnimeSearchComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSearchComponent_ng_container_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const anime_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.redirectToAnimePage(anime_r10.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-anime-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("anime", anime_r10);
} }
function AnimeSearchComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimeSearchComponent_ng_container_7_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchData);
} }
function AnimeSearchComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry, No Results Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeSearchComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSearchComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onFirstPageClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeSearchComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active-page-btn": a0 }; };
function AnimeSearchComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSearchComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const num_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onPageChange(num_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.customPagination.current_page === num_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r15, " ");
} }
function AnimeSearchComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeSearchComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSearchComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onLastPageClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.customPagination.last_page, " ");
} }
function AnimeSearchComponent_app_loader_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AnimeSearchComponent {
    constructor(_route, _animeService, _router) {
        this._route = _route;
        this._animeService = _animeService;
        this._router = _router;
        this.loading = false;
        this.searchData = [];
        this.searchValue = '';
        this.sub$ = null;
        this.filtersApplied = {
            searchQuery: '',
            sfw: true
        };
        this.customPagination = {
            limit: 24,
            data: {},
            current_page: 1,
            buttonStart: 1,
            last_page: 1,
            range: 10
        };
    }
    ngOnInit() {
        this.sub$ = this._route.queryParamMap.subscribe((param) => {
            this.resetPagination();
            this.filtersApplied.searchQuery = (param.get("query") || '');
            this.searchValue = this.filtersApplied.searchQuery;
            this.searchAnime(this.filtersApplied.searchQuery, this.customPagination.current_page);
        });
    }
    resetPagination() {
        this.customPagination.limit = 24;
        this.customPagination.current_page = 1;
        this.customPagination.buttonStart = 1;
        this.customPagination.last_page = 1;
        this.customPagination.range = 10;
        this.customPagination.data = {};
    }
    ngOnDestroy() {
        if (this.sub$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"])
            this.sub$.unsubscribe();
    }
    onSearchEnter(event) {
        if (event.key === 'Enter') {
            this.updateQueryParams(this.searchValue);
        }
    }
    updateQueryParams(query) {
        if (this.searchValue.length > 0 && this.searchValue !== this.filtersApplied.searchQuery) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParamsHandling: 'merge',
                queryParams: { query }
            });
        }
    }
    searchAnime(q, page) {
        this.loading = true;
        this._animeService.getAnimeSearch({ q, sfw: true, limit: 24, page })
            .then((response) => {
            // console.log(response);
            this.searchData = response.data;
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
    redirectToAnimePage(id) {
        this._router.navigate([`/anime/${id}`]);
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
        console.log(pageNo);
        if (pageNo in this.customPagination.data) {
            this.searchData = this.customPagination.data[pageNo];
            this.updatePagination(pageNo);
        }
        else {
            this.searchAnime(this.filtersApplied.searchQuery, pageNo);
        }
    }
    rangePaginationButtons(start, end) {
        const startNum = Number(start);
        const endNum = Number(end);
        if (startNum > endNum)
            return []; // Return an empty array if start > end
        return Array.from({ length: endNum - startNum + 1 }, (_, i) => startNum + i);
    }
}
AnimeSearchComponent.ɵfac = function AnimeSearchComponent_Factory(t) { return new (t || AnimeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_3__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AnimeSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeSearchComponent, selectors: [["app-anime-search"]], decls: 21, vars: 12, consts: [[1, "searchInputDiv", "relative", "w-full", "flex", "justify-center", "my-4"], ["spellcheck", "false", "type", "text", "placeholder", "Search Anime by Title", 1, "min-w-[300px]", "py-3", "tracking-wider", "text-center", "focus:outline-none", 3, "ngModel", "value", "ngModelChange", "keypress"], ["type", "button", 1, "absolute", "right-4", "top-[50%]", "lg:right-16", 2, "transform", "translateY(-50%)", 3, "click"], [1, "material-icons-outlined", "text-[32px]", "text-[#4f4f4f]", "hover:text-[#bebebe]"], [1, "custom-container", 2, "margin-top", ".8rem"], [1, "grid", "grid-cols-3", "sm:grid-cols-4", "md:grid-cols-5", "lg:grid-cols-8", 2, "row-gap", "1.2rem!important", "column-gap", "1rem!important"], [4, "ngIf", "ngIfElse"], ["noDataDiv", ""], [1, "my-8", "flex-wrap", "flex", "justify-center", "items-center", "gap-2"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "tracking-wider", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "disabled", "click"], ["type", "button", "class", "bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm", 3, "click", 4, "ngIf"], ["type", "button", "class", "text-[12px] px-2 py-1 rounded-md border-1 border-[gray] md:text-sm", 4, "ngIf"], ["type", "button", "class", "bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "text-sm", "rounded-md", "border-1", "border-[gray]", "tracking-wider", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "disabled", "click"], [4, "ngIf"], ["class", "relative w-full", 3, "click", 4, "ngFor", "ngForOf"], [1, "relative", "w-full", 3, "click"], [3, "anime"], [1, "col-span-8", "text-center", "tracking-wider", "text-[#bebebe]", "text-md", "md:text-lg"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "click"], ["type", "button", 1, "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "md:text-sm"], ["type", "button", 1, "bg-[#3e3e3e]", "text-[12px]", "px-2", "py-1", "rounded-md", "border-1", "border-[gray]", "hover:bg-[#ffd600]", "hover:text-black", "md:text-sm", 3, "ngClass", "click"]], template: function AnimeSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnimeSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchValue = $event; })("keypress", function AnimeSearchComponent_Template_input_keypress_1_listener($event) { return ctx.onSearchEnter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSearchComponent_Template_button_click_2_listener() { return ctx.updateQueryParams(ctx.searchValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnimeSearchComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AnimeSearchComponent_ng_template_8_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSearchComponent_Template_button_click_11_listener() { return ctx.onPageChange(ctx.customPagination.current_page - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " PREV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AnimeSearchComponent_button_13_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AnimeSearchComponent_button_14_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AnimeSearchComponent_button_15_Template, 2, 4, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AnimeSearchComponent_button_16_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AnimeSearchComponent_button_17_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSearchComponent_Template_button_click_18_listener() { return ctx.onPageChange(ctx.customPagination.current_page + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " NEXT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AnimeSearchComponent_app_loader_20_Template, 1, 0, "app-loader", 14);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue)("value", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchData.length)("ngIfElse", _r1);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_6__["AnimeItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], styles: [".mat-radio-button  .mat-radio-outer-circle {\n    border-color: white !important;\n    \n}\n\n .mat-radio-button.mat-accent  .mat-radio-checked .mat-radio-inner-circle {\n    background-color: white !important;\n    \n}\n\n .mat-radio-button  .mat-radio-outer-circle:hover {\n    border-color: white !important;\n    \n}\n\n\n\n .mat-radio-inner-circle {\n    background-color: #ffd600 !important;\n}\n\n .mat-radio-ripple .mat-ripple-element {\n    background-color: #ffd600 !important;\n}\n\nh4[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.text-yellow[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n    opacity: 1;\n}\n\n.custom-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 1250px;\n    padding-left: 7px;\n    padding-right: 7px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.manga-image-overlay[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.overlay[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, .7);\n}\n\n.chip-hover[_ngcontent-%COMP%] {\n    background-color: #ffd600;\n    color: black;\n}\n\n.active-page-btn[_ngcontent-%COMP%] {\n    color: black;\n    background-color: var(--color-yellow);\n}\n\n.searchInputDiv[_ngcontent-%COMP%] {\n    input {\n        background: #000;\n        background: linear-gradient(90deg, transparent, #000 50%, transparent);\n        \n    }\n}\n\n@media screen and (min-width: 768px) {\n    \n\n    .custom-container[_ngcontent-%COMP%] {\n        padding-left: 15px;\n        padding-right: 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtc2VhcmNoL2FuaW1lLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFFaEIsc0VBQXNFO1FBQ3RFLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7O09BRUc7O0lBRUg7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hbmltZS1zZWFyY2gvYW5pbWUtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAubWF0LXJhZGlvLWJ1dHRvbiA6Om5nLWRlZXAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC8qIENoYW5nZSB0aGUgYm9yZGVyIHRvIHdoaXRlICovXG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgOjpuZy1kZWVwLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC8qIE9wdGlvbmFsOiBDaGFuZ2UgdGhlIGlubmVyIGNpcmNsZSB0byB3aGl0ZSB3aGVuIHNlbGVjdGVkICovXG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uIDo6bmctZGVlcC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLyogRW5zdXJlIGhvdmVyIHN0YXRlIG1hdGNoZXMgKi9cbn1cblxuLyogQ2hhbmdlIHRoZSBpbm5lciBjaXJjbGUgdG8geWVsbG93IHdoZW4gY2hlY2tlZCAqL1xuOjpuZy1kZWVwLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2MDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDYwMCAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC15ZWxsb3cge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5jdXN0b20tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWFuZ2EtaW1hZ2Utb3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4uY2hpcC1ob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDYwMDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5hY3RpdmUtcGFnZS1idG4ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xufVxuXG4uc2VhcmNoSW5wdXREaXYge1xuICAgIGlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDUwJSwgIzAwMCksIHRvKHRyYW5zcGFyZW50KSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsICMwMDAgNTAlLCB0cmFuc3BhcmVudCk7XG4gICAgICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC8qIGg0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9ICovXG5cbiAgICAuY3VzdG9tLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-search',
                templateUrl: './anime-search.component.html',
                styleUrls: ['./anime-search.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_3__["AnimeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "HLRl":
/*!*****************************************************!*\
  !*** ./src/app/anime-search/anime-search.module.ts ***!
  \*****************************************************/
/*! exports provided: AnimeSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeSearchModule", function() { return AnimeSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _anime_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anime-search.component */ "8ShZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









const routes = [
    { path: '', component: _anime_search_component__WEBPACK_IMPORTED_MODULE_2__["AnimeSearchComponent"] }
];
class AnimeSearchModule {
}
AnimeSearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnimeSearchModule });
AnimeSearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnimeSearchModule_Factory(t) { return new (t || AnimeSearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnimeSearchModule, { declarations: [_anime_search_component__WEBPACK_IMPORTED_MODULE_2__["AnimeSearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeSearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_anime_search_component__WEBPACK_IMPORTED_MODULE_2__["AnimeSearchComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=anime-search-anime-search-module.js.map