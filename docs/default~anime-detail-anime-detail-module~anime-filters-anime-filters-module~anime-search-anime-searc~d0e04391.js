(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391"],{

/***/ "F26y":
/*!*****************************************************!*\
  !*** ./src/app/shared/reviews/reviews.component.ts ***!
  \*****************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_anime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/anime.service */ "b/W4");
/* harmony import */ var src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/manga.service */ "VlvX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _text_overflow_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text-overflow.directive */ "g59Y");






const _c0 = ["pageBtns"];
function ReviewsComponent_div_9_ng_container_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reaction_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", reaction_r6.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, reaction_r6.key.replace("_", " ")), " ");
} }
function ReviewsComponent_div_9_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReviewsComponent_div_9_ng_container_15_ng_container_1_Template, 7, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reaction_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reaction_r6.key !== "overall");
} }
function ReviewsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReviewsComponent_div_9_ng_container_15_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (review_r4 == null ? null : review_r4.user == null ? null : review_r4.user.images == null ? null : review_r4.user.images.webp == null ? null : review_r4.user.images.webp.image_url) || (review_r4 == null ? null : review_r4.user == null ? null : review_r4.user.images == null ? null : review_r4.user.images.jpg == null ? null : review_r4.user.images.jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r4 == null ? null : review_r4.user == null ? null : review_r4.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, review_r4 == null ? null : review_r4.date, "MMM dd, yyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r4 == null ? null : review_r4.review, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, review_r4.reactions));
} }
const _c1 = function (a0) { return { "bg-[#6c6b6b]": a0 }; };
function ReviewsComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewsComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const page_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onReviewPageChange(page_r9 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.reviewPagination.pageNo === page_r9 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9 + 1, " ");
} }
const _c2 = function (a0) { return { "hover:bg-[seagreen]": a0 }; };
function ReviewsComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewsComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onNextPageChange(ctx_r13.reviewPagination.pageNo + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, !ctx_r2.loading));
} }
function ReviewsComponent_app_loader_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class ReviewsComponent {
    constructor(_animeService, _mangaService) {
        this._animeService = _animeService;
        this._mangaService = _mangaService;
        this.items = [];
        this.reviewPagination = {
            buttonRange: {
                from: 0,
                to: 0
            },
            from: 0,
            to: 4,
            pageNo: 1
        };
        this.reviewParamPageNo = 1;
        this.loading = false;
    }
    onPrevReviewChange(pageNo) {
        this.reviewPagination.pageNo = pageNo;
        this.onReviewPageChange(this.reviewPagination.pageNo);
    }
    onNextPageChange(pageNo) {
        this.reviewPagination.pageNo = pageNo;
        if (this.reviewPagination.pageNo > (this.items[this.items.length - 1] + 1)) {
            if (this.type === 'anime')
                this.fetchMoreAnimeReviews();
            else if (this.type === 'manga')
                this.fetchMoreMangaReviews();
            return;
        }
        this.onReviewPageChange(this.reviewPagination.pageNo);
    }
    onReviewPageChange(pageNo) {
        this.reviewPagination.pageNo = pageNo;
        var firstPageButtonNumber = parseInt(this.pageBtns.first.nativeElement.textContent);
        var lastPageButtonNumber = parseInt(this.pageBtns.last.nativeElement.textContent);
        if (this.reviewPagination.pageNo !== 1 && this.reviewPagination.pageNo === firstPageButtonNumber) {
            this.reviewPagination.buttonRange.from -= 1;
            this.reviewPagination.buttonRange.to -= 1;
        }
        else if (this.reviewPagination.pageNo > lastPageButtonNumber) {
            this.reviewPagination.buttonRange.from += 1;
            this.reviewPagination.buttonRange.to += 1;
        }
        this.reviewPagination.from = (pageNo - 1) * 4;
        this.reviewPagination.to = Math.min(this.reviewPagination.from + 4, this.reviews.data.length);
        if (this.reviewPagination.from < 0) {
            this.reviewPagination.from = 0;
        }
        if (this.reviewPagination.from >= this.reviews.data.length) {
            this.reviewPagination.from = Math.floor(this.reviews.data.length / 4) * 4;
        }
    }
    fetchMoreAnimeReviews() {
        this.loading = true;
        this.reviewParamPageNo += 1;
        this._animeService.getAnimeReviews(this.id, this.reviewParamPageNo)
            .then((response) => {
            var length = Math.floor(response.data.length / 4);
            if (((response.data.length / 4) % 4) !== 0)
                length += 1;
            this.items = this.items.concat(Array.from({ length: length - 1 }, (_, i) => this.items[this.items.length - 1] + i + 1));
            this.reviews.data = this.reviews.data.concat(response.data);
            this.reviews.pagination = response.pagination;
            this.loading = false;
            this.onReviewPageChange(this.reviewPagination.pageNo);
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
    fetchMoreMangaReviews() {
        this.loading = true;
        this.reviewParamPageNo += 1;
        this._mangaService.getMangaReviews(this.id, this.reviewParamPageNo)
            .then((response) => {
            var length = Math.floor(response.data.length / 4);
            if (((response.data.length / 4) % 4) !== 0)
                length += 1;
            this.items = this.items.concat(Array.from({ length: length - 1 }, (_, i) => this.items[this.items.length - 1] + i + 1));
            this.reviews.data = this.reviews.data.concat(response.data);
            this.reviews.pagination = response.pagination;
            this.loading = false;
            this.onReviewPageChange(this.reviewPagination.pageNo);
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
    trackByReviewId(_, item) {
        return item.mal_id;
    }
    ngOnInit() {
        var _a, _b;
        var length = (Math.floor(((_b = (_a = this.reviews) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) / 4));
        if (this.reviews.data.length % 4 !== 0)
            length += 1;
        this.items = Array.from({ length }, (_, i) => (i));
        if (length > 5)
            this.reviewPagination.buttonRange.to = 5;
        else
            this.reviewPagination.buttonRange.to = length;
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_anime_service__WEBPACK_IMPORTED_MODULE_1__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_2__["MangaService"])); };
ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], viewQuery: function ReviewsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pageBtns = _t);
    } }, inputs: { images: "images", reviews: "reviews", id: "id", type: "type" }, decls: 17, vars: 10, consts: [[1, "mt-2", "py-3", "sm:container-fluid"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-y-6", "md:gap-x-4", "md:gap-y-0"], [1, "w-full", "flex", "justify-center"], [1, "w-full", "max-w-[13rem]", "h-full", "max-h-[20rem]", "overflow-hidden", "rounded-md"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "md:col-span-4"], [1, "tracking-wider", "font-normal", "mb-2"], [1, "grid", "gap-y-8"], ["class", "flex flex-col gap-4", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "justify-center", "mt-12"], [1, "flex", "gap-2", "items-stretch"], [1, "select-none", "text-[13px]", "tracking-[1px]", "bg-[#3e3e3e]", "px-2", 3, "ngClass", "disabled", "click"], ["class", "text-sm font-mulish bg-[#3e3e3e] p-2 py-1 font-bold hover:bg-[#6c6b6b]", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "select-none text-[13px] tracking-[1px] bg-[#3e3e3e] px-2", 3, "disabled", "ngClass", "click", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "w-[35px]", "h-[35px]", "rounded-full", "overflow-hidden"], [1, "mb-0", "tracking-wide", "text-[#aabee4]", "font-mulish", "text-xl", "md:text-2xl"], [1, "mb-0", "tracking-wide", "font-mulish", "font-light", "text-[#ccc]", "text-[12px]"], ["checkOverflow", ""], [1, "blur-bottom", "max-h-[208px]", "overflow-hidden"], [1, "font-mulish", "tracking-wide"], [1, "grid", "gap-y-4", "grid-cols-4", "md:grid-cols-7"], [4, "ngFor", "ngForOf"], [1, "text-center", "gap-2"], [1, "font-mulish", "tracking-wide", "mb-0", "text-lg", "md:text-xl"], [1, "font-mulish", "tracking-wider", "mb-0", "text-[12px]"], [1, "text-sm", "font-mulish", "bg-[#3e3e3e]", "p-2", "py-1", "font-bold", "hover:bg-[#6c6b6b]", 3, "ngClass", "click"], ["pageBtns", ""], [1, "select-none", "text-[13px]", "tracking-[1px]", "bg-[#3e3e3e]", "px-2", 3, "disabled", "ngClass", "click"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReviewsComponent_div_9_Template, 17, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_12_listener() { return ctx.onPrevReviewChange(ctx.reviewPagination.pageNo - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Prev ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReviewsComponent_button_14_Template, 3, 4, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReviewsComponent_button_15_Template, 2, 4, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReviewsComponent_app_loader_16_Template, 1, 0, "app-loader", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx.images == null ? null : ctx.images.webp == null ? null : ctx.images.webp.large_image_url) || (ctx.images == null ? null : ctx.images.jpg == null ? null : ctx.images.jpg.large_image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews.data.slice(ctx.reviewPagination.from, ctx.reviewPagination.to))("ngForTrackBy", ctx.trackByReviewId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.reviewPagination.pageNo > 1 && !ctx.loading))("disabled", ctx.reviewPagination.pageNo < 2 || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items.slice(ctx.reviewPagination.buttonRange.from, ctx.reviewPagination.buttonRange.to));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews.pagination == null ? null : ctx.reviews.pagination.has_next_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _text_overflow_directive__WEBPACK_IMPORTED_MODULE_4__["CheckOverflowDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n.blur-bottom[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), #000 20%);\n}\n\n.material-icons-outlined[_ngcontent-%COMP%] {\n    font-family: 'Material Icons Outlined' !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBRWhCLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uZm9udC1tdWxpc2gge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11bGlzaFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uYmx1ci1ib3R0b20ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDApLCAjMDAwIDIwJSk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgIzAwMCAyMCUpO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviews',
                templateUrl: './reviews.component.html',
                styleUrls: ['./reviews.component.css']
            }]
    }], function () { return [{ type: src_app_Services_anime_service__WEBPACK_IMPORTED_MODULE_1__["AnimeService"] }, { type: src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_2__["MangaService"] }]; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['images']
        }], reviews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['reviews']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }], pageBtns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['pageBtns']
        }] }); })();


/***/ }),

/***/ "JW8G":
/*!***************************************************************!*\
  !*** ./src/app/shared/image-viewer/image-viewer.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ImageViewerComponent {
    constructor() {
        this.imageNumber = 0;
        this.onCloseImageViewer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onImageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.images = [];
    }
}
ImageViewerComponent.ɵfac = function ImageViewerComponent_Factory(t) { return new (t || ImageViewerComponent)(); };
ImageViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageViewerComponent, selectors: [["app-image-viewer"]], inputs: { images: "images", imageNumber: "imageNumber" }, outputs: { onCloseImageViewer: "onCloseImageViewer", onImageChange: "onImageChange" }, decls: 17, vars: 3, consts: [[1, "bg-[rgba(0,0,0,.7)]", "fixed", "top-0", "left-0", "w-screen", "h-screen", 2, "z-index", "7!important"], [1, "flex", "flex-col", "justify-around", "items-center", "gap-2", "w-full", "h-full"], [1, "flex", "flex-col", "items-center", "gap-3", "w-max", "max-w-[95%]", "max-h-[85%]"], [1, "flex", "items-center", "gap-3", "h-full"], [1, "border-2", "rounded-full", "flex", "items-center", 3, "click"], [1, "material-icons-outlined"], [1, "relative", "w-full", "h-full"], ["type", "button", 1, "border-2", "border-white", "absolute", "-top-2", "-right-2", "text-white", "bg-black", "flex", "w-[25px]", "h-[25px]", "rounded-full", "items-center", "justify-center", 3, "click"], [1, "text-3xl"], ["loading", "lazy", 1, "w-full", "h-full", "rounded-sm", "border-8", "border-white", "object-cover", 3, "src"], [1, "font-mulish"]], template: function ImageViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageViewerComponent_Template_button_click_4_listener() { return ctx.onImageChange.emit("prev"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " chevron_left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageViewerComponent_Template_button_click_8_listener() { return ctx.onCloseImageViewer.emit(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageViewerComponent_Template_button_click_12_listener() { return ctx.onImageChange.emit("next"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " chevron_right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx.images[ctx.imageNumber] == null ? null : ctx.images[ctx.imageNumber].webp == null ? null : ctx.images[ctx.imageNumber].webp.large_image_url) || (ctx.images[ctx.imageNumber] == null ? null : ctx.images[ctx.imageNumber].jpg == null ? null : ctx.images[ctx.imageNumber].jpg.large_image_url) || (ctx.images[ctx.imageNumber] == null ? null : ctx.images[ctx.imageNumber].webp == null ? null : ctx.images[ctx.imageNumber].webp.image_url) || (ctx.images[ctx.imageNumber] == null ? null : ctx.images[ctx.imageNumber].jpg == null ? null : ctx.images[ctx.imageNumber].jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.imageNumber + 1, " / ", ctx.images.length, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-viewer',
                templateUrl: './image-viewer.component.html',
                styleUrls: ['./image-viewer.component.css']
            }]
    }], function () { return []; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['images']
        }], imageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['imageNumber']
        }], onCloseImageViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onCloseImageViewer']
        }], onImageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onImageChange']
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-viewer/image-viewer.component */ "JW8G");
/* harmony import */ var _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommendation/recommendation.component */ "qtax");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/characters.component */ "kTcG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews/reviews.component */ "F26y");
/* harmony import */ var _text_overflow_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-overflow.directive */ "g59Y");
/* harmony import */ var _anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./anime-item/anime-item.component */ "mYEO");
/* harmony import */ var _anime_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anime-tooltip.directive */ "p72c");











class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ImageViewerComponent"], _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationComponent"], _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"], _text_overflow_directive__WEBPACK_IMPORTED_MODULE_7__["CheckOverflowDirective"], _anime_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["AnimeTooltipDirective"], _anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_8__["AnimeItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ImageViewerComponent"], _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationComponent"], _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"], _anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_8__["AnimeItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ImageViewerComponent"], _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationComponent"], _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"], _text_overflow_directive__WEBPACK_IMPORTED_MODULE_7__["CheckOverflowDirective"], _anime_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["AnimeTooltipDirective"], _anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_8__["AnimeItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                ],
                exports: [_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ImageViewerComponent"], _recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationComponent"], _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"], _anime_item_anime_item_component__WEBPACK_IMPORTED_MODULE_8__["AnimeItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "VlvX":
/*!*******************************************!*\
  !*** ./src/app/Services/manga.service.ts ***!
  \*******************************************/
/*! exports provided: MangaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaService", function() { return MangaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MangaService {
    constructor(_http) {
        this._http = _http;
        this._JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
    }
    getMangaRecommendations(mangaId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${mangaId}/recommendations`).toPromise();
    }
    getMangaReviews(mangaId, page) {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${mangaId}/reviews`, {
            params: {
                page
            }
        }).toPromise();
    }
    getMangaCharacters(mangaId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${mangaId}/characters`).toPromise();
    }
    getMangaPictures(id) {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${id}/pictures`).toPromise();
    }
    getFullMangaById(id) {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga/${id}/full`).toPromise();
    }
    getMangaGenres() {
        return this._http.get(`${this._JIKAN_BASE_URL}/genres/manga`).toPromise();
    }
    getMangaSearch(filters) {
        return this._http.get(`${this._JIKAN_BASE_URL}/manga`, {
            params: filters
        }).toPromise();
    }
}
MangaService.ɵfac = function MangaService_Factory(t) { return new (t || MangaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MangaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MangaService, factory: MangaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "g59Y":
/*!***************************************************!*\
  !*** ./src/app/shared/text-overflow.directive.ts ***!
  \***************************************************/
/*! exports provided: CheckOverflowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOverflowDirective", function() { return CheckOverflowDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CheckOverflowDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.readMoreButton = null;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const element = this.el.nativeElement.firstChild;
            const hasOverflow = element.scrollHeight > element.clientHeight;
            if (hasOverflow) {
                this.renderer.addClass(element, 'blur-bottom');
                const readMoreBtn = this.renderer.createElement("button");
                const readMoreBtnTxt = this.renderer.createText("Read More");
                this.renderer.setAttribute(readMoreBtn, 'type', 'button');
                this.renderer.addClass(readMoreBtn, 'font-mulish');
                this.renderer.addClass(readMoreBtn, 'text-[#aabee4]');
                this.renderer.appendChild(readMoreBtn, readMoreBtnTxt);
                this.renderer.listen(readMoreBtn, 'click', () => this.toggleReadMore());
                this.renderer.appendChild(this.el.nativeElement, readMoreBtn);
                this.readMoreButton = readMoreBtn;
            }
            else {
                this.renderer.removeClass(element, 'blur-bottom');
            }
        }, 100);
    }
    toggleReadMore() {
        const element = this.el.nativeElement.firstChild;
        if (element.classList.contains('blur-bottom')) {
            this.renderer.removeClass(element, 'blur-bottom');
            this.renderer.removeClass(element, 'max-h-[208px]');
            this.readMoreButton.innerText = 'Read Less';
        }
        else {
            this.renderer.addClass(element, 'blur-bottom');
            this.renderer.addClass(element, 'max-h-[208px]');
            this.readMoreButton.innerText = 'Read More';
        }
    }
}
CheckOverflowDirective.ɵfac = function CheckOverflowDirective_Factory(t) { return new (t || CheckOverflowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CheckOverflowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CheckOverflowDirective, selectors: [["", "checkOverflow", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOverflowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[checkOverflow]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "kTcG":
/*!***********************************************************!*\
  !*** ./src/app/shared/characters/characters.component.ts ***!
  \***********************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function CharactersComponent_div_6_div_4_p_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/people/" + (vc_r8 == null ? null : vc_r8.person == null ? null : vc_r8.person.mal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vc_r8 == null ? null : vc_r8.person == null ? null : vc_r8.person.name, " ");
} }
function CharactersComponent_div_6_div_4_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Voice Actors: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharactersComponent_div_6_div_4_p_8_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", character_r4 == null ? null : character_r4.voice_actors);
} }
const _c0 = function (a0) { return { "border-top": a0 }; };
function CharactersComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharactersComponent_div_6_div_4_p_8_Template, 3, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r4 = ctx.$implicit;
    const i2_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, i2_r5 === 0 ? "1px solid #353330" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (character_r4 == null ? null : character_r4.character == null ? null : character_r4.character.images == null ? null : character_r4.character.images.webp == null ? null : character_r4.character.images.webp.image_url) || (character_r4 == null ? null : character_r4.character == null ? null : character_r4.character.images == null ? null : character_r4.character.images.jpg == null ? null : character_r4.character.images.jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/character/" + character_r4.character.mal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r4 == null ? null : character_r4.character == null ? null : character_r4.character.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Role: ", character_r4 == null ? null : character_r4.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (character_r4 == null ? null : character_r4.voice_actors == null ? null : character_r4.voice_actors.length) > 0);
} }
function CharactersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CharactersComponent_div_6_div_4_Template, 9, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r1.key, " Characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.value);
} }
class CharactersComponent {
    constructor() {
        this.characters = [];
        this.groupedCharacters = {};
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        // console.log("rendering character component...")
        for (var i = 0; i < ((_a = this.characters) === null || _a === void 0 ? void 0 : _a.length); ++i) {
            if (((_b = this.characters[i]) === null || _b === void 0 ? void 0 : _b.role) in this.groupedCharacters) {
                this.groupedCharacters[(_c = this.characters[i]) === null || _c === void 0 ? void 0 : _c.role].push(this.characters[i]);
            }
            else {
                this.groupedCharacters[(_d = this.characters[i]) === null || _d === void 0 ? void 0 : _d.role] = [];
                this.groupedCharacters[(_e = this.characters[i]) === null || _e === void 0 ? void 0 : _e.role].push(this.characters[i]);
            }
        }
    }
}
CharactersComponent.ɵfac = function CharactersComponent_Factory(t) { return new (t || CharactersComponent)(); };
CharactersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharactersComponent, selectors: [["app-characters"]], inputs: { characters: "characters", images: "images" }, decls: 8, vars: 4, consts: [[1, "mt-2", "py-3", "sm:container-fluid"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-y-6", "md:gap-x-4", "md:gap-y-0"], [1, "w-full", "flex", "justify-center"], [1, "w-full", "max-w-[13rem]", "h-full", "max-h-[20rem]", "overflow-hidden", "rounded-md"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "md:col-span-4"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "mb-4"], [1, "tracking-wider", "font-normal", "mb-2"], [1, "grid", "gap-x-3", "gap-y-2", "sm:grid-cols-2"], ["style", "border-bottom: 1px solid #353330", "class", "px-1 py-2 flex justify-between items-start gap-3 bg-[#242424] overflow-hidden", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "px-1", "py-2", "flex", "justify-between", "items-start", "gap-3", "bg-[#242424]", "overflow-hidden", 2, "border-bottom", "1px solid #353330", 3, "ngStyle"], [1, "w-full", "max-w-[60px]", "h-full", "max-h-[100px]", "rounded-sm", "overflow-hidden"], [1, "flex-1"], [1, "tracking-wider", "text-[#aabee4]", "hover:text-[#fff]", 3, "routerLink"], [1, "trackin", "g-wider", "text-[#bebebe]", "font-light", "text-sm", "mt-[2px]", "mb-0"], ["class", "text-[#bebebe] tracking-wider text-sm mt-2 mb-0", 4, "ngIf"], [1, "text-[#bebebe]", "tracking-wider", "text-sm", "mt-2", "mb-0"], [4, "ngFor", "ngForOf"], [1, "text-[#aabee4]", "vc-p", 3, "routerLink"]], template: function CharactersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharactersComponent_div_6_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx.images == null ? null : ctx.images.webp == null ? null : ctx.images.webp.large_image_url) || (ctx.images == null ? null : ctx.images.jpg == null ? null : ctx.images.jpg.large_image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.groupedCharacters));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.material-icons-outlined[_ngcontent-%COMP%] {\n    font-family: 'Material Icons Outlined' !important;\n}\n\n.vc-p[_ngcontent-%COMP%]:hover {\n    color: #fff;\n}\n\n.vc-p[_ngcontent-%COMP%]::after {\n    content: '|';\n}\n\n.vc-p[_ngcontent-%COMP%]:last-child:after {\n    content: '';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJyAhaW1wb3J0YW50O1xufVxuXG4udmMtcDpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi52Yy1wOjphZnRlciB7XG4gICAgY29udGVudDogJ3wnO1xufVxuXG4udmMtcDpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharactersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-characters',
                templateUrl: './characters.component.html',
                styleUrls: ['./characters.component.css']
            }]
    }], function () { return []; }, { characters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['characters']
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['images']
        }] }); })();


/***/ }),

/***/ "mYEO":
/*!***********************************************************!*\
  !*** ./src/app/shared/anime-item/anime-item.component.ts ***!
  \***********************************************************/
/*! exports provided: AnimeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeItemComponent", function() { return AnimeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _anime_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../anime-tooltip.directive */ "p72c");



class AnimeItemComponent {
    constructor() {
        this.anime = [];
    }
    ngOnInit() {
    }
}
AnimeItemComponent.ɵfac = function AnimeItemComponent_Factory(t) { return new (t || AnimeItemComponent)(); };
AnimeItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeItemComponent, selectors: [["app-anime-item"]], inputs: { anime: "anime" }, decls: 10, vars: 5, consts: [[1, "anime-div", "gap-1", "flex", "flex-col", "items-center", "overflow-hidden", "hover:cursor-pointer"], [1, "w-full", "h-[170px]", "overflow-hidden", "rounded-sm", "sm:h-[200px]", 3, "appAnimeTooltip"], ["loading", "lazy", 1, "anime-image", "w-full", "h-full", "object-cover", 3, "src"], [1, "w-full"], [1, "text-[11px]", "tracking-wider", "w-full", "mb-0"], [1, "anime-title", "tracking-wider", "w-full", "text-[13px]", "mb-0", "whitespace-nowrap", "text-ellipsis", "overflow-hidden"], [1, "tracking-wider", "w-full", "text-[gray]", "text-[11px]", "mb-0", "whitespace-nowrap", "text-ellipsis", "overflow-hidden"]], template: function AnimeItemComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appAnimeTooltip", ctx.anime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.anime.images.webp.large_image_url || ctx.anime.images.jpg.large_image_url || ctx.anime.images.webp.image_url || ctx.anime.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.anime.rank || "n/a", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.title_english || ctx.anime.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.title_japanese || ctx.anime.title, "");
    } }, directives: [_anime_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["AnimeTooltipDirective"]], styles: [".anime-image[_ngcontent-%COMP%] {\n    transition: transform .1s ease-in-out, opacity .1s ease-in-out;\n}\n\n.anime-div[_ngcontent-%COMP%]:hover   .anime-image[_ngcontent-%COMP%] {\n    transform: translateY(-3px);\n    opacity: .7;\n}\n\n.anime-div[_ngcontent-%COMP%]:hover   .anime-title[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n    font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FuaW1lLWl0ZW0vYW5pbWUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYW5pbWUtaXRlbS9hbmltZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5pbWUtaW1hZ2Uge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uYW5pbWUtZGl2OmhvdmVyIC5hbmltZS1pbWFnZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIG9wYWNpdHk6IC43O1xufVxuXG4uYW5pbWUtZGl2OmhvdmVyIC5hbmltZS10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-item',
                templateUrl: './anime-item.component.html',
                styleUrls: ['./anime-item.component.css']
            }]
    }], function () { return []; }, { anime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['anime']
        }] }); })();


/***/ }),

/***/ "p72c":
/*!***************************************************!*\
  !*** ./src/app/shared/anime-tooltip.directive.ts ***!
  \***************************************************/
/*! exports provided: AnimeTooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeTooltipDirective", function() { return AnimeTooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AnimeTooltipDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.anime = null;
        this.tooltipElement = null;
    }
    onMouseEnter() {
        var _a, _b, _c, _d;
        if (!this.anime)
            return;
        if (!(window.innerWidth > 768))
            return;
        // Create tooltip element
        this.tooltipElement = this.renderer.createElement('div');
        // ANIME TITLE
        const movieTitleTextH6 = this.renderer.createElement('h6');
        this.addClasses(movieTitleTextH6, ['font-bold', 'break-words', 'tracking-wide', 'text-[15px]', 'font-mulish', 'mb-[5px]']);
        const movieTitleText = this.renderer.createText(this.anime.title_english || this.anime.title);
        this.renderer.appendChild(movieTitleTextH6, movieTitleText);
        this.renderer.appendChild(this.tooltipElement, movieTitleTextH6);
        // ANIME ALT TITLES 
        if (this.anime.title_synonyms.length) {
            const altAnimeTitlesH6 = this.renderer.createElement('h6');
            const span = this.renderer.createElement("span");
            this.addClasses(span, ['font-mulish', 'text-[12px]', 'italic', 'font-normal', 'tracking-wider']);
            this.renderer.appendChild(span, this.renderer.createText('Alt Titles: '));
            this.renderer.appendChild(altAnimeTitlesH6, span);
            this.renderer.appendChild(altAnimeTitlesH6, this.renderer.createText(this.anime.title_synonyms.join(', ')));
            this.addClasses(altAnimeTitlesH6, ['text-[12px]', 'tracking-wider', 'italic', 'font-mulish', 'mb-[5px]']);
            this.renderer.setStyle(altAnimeTitlesH6, 'font-weight', '300');
            this.renderer.appendChild(this.tooltipElement, altAnimeTitlesH6);
        }
        const extraAnimeDetailsDiv = this.renderer.createElement('div');
        this.addClasses(extraAnimeDetailsDiv, ['flex', 'items-center', 'gap-2', 'flex-wrap']);
        // ANIME DURATION
        const chapterTextElement = this.renderer.createElement('p');
        const chapterIconElement = this.renderer.createElement("span");
        this.addClasses(chapterIconElement, ['font-light', 'text-[15px]']);
        this.renderer.addClass(chapterIconElement, 'material-icons-outlined');
        this.renderer.appendChild(chapterIconElement, this.renderer.createText('desktop_windows'));
        this.renderer.appendChild(chapterTextElement, chapterIconElement);
        this.renderer.appendChild(chapterTextElement, this.renderer.createText((((_a = this.anime) === null || _a === void 0 ? void 0 : _a.duration) || 'Duration not available')));
        this.addClasses(chapterTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
        this.renderer.setStyle(chapterTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
        this.renderer.appendChild(extraAnimeDetailsDiv, chapterTextElement);
        // ANIME TYPE
        const movieTypeTextElement = this.renderer.createElement('p');
        this.addClasses(movieTypeTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
        this.renderer.setStyle(movieTypeTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
        this.renderer.appendChild(movieTypeTextElement, this.renderer.createText(this.anime.type || 'MOVIE'));
        this.renderer.appendChild(extraAnimeDetailsDiv, movieTypeTextElement);
        // PUBLISHED FROM-TO
        const publishedTextElement = this.renderer.createElement('p');
        const calenderIconElement = this.renderer.createElement("span");
        this.addClasses(calenderIconElement, ['font-light', 'text-[15px]']);
        this.renderer.addClass(calenderIconElement, 'material-icons-outlined');
        this.renderer.appendChild(calenderIconElement, this.renderer.createText('today'));
        this.renderer.appendChild(publishedTextElement, calenderIconElement);
        this.renderer.appendChild(publishedTextElement, this.renderer.createText(((_c = (_b = this.anime) === null || _b === void 0 ? void 0 : _b.aired) === null || _c === void 0 ? void 0 : _c.string) || '?'));
        this.addClasses(publishedTextElement, ['flex', 'items-center', 'gap-1', 'pr-2', 'mb-0']);
        this.renderer.setStyle(publishedTextElement, 'border-right', '1px solid rgb(73, 72, 72)');
        this.renderer.appendChild(extraAnimeDetailsDiv, publishedTextElement);
        // ANIME RATINGS
        const scoreTextElement = this.renderer.createElement('p');
        const ratingIconElement = this.renderer.createElement("span");
        this.renderer.setStyle(ratingIconElement, 'color', '#ffd600');
        this.addClasses(ratingIconElement, ['font-light', 'text-[15px]']);
        this.renderer.addClass(ratingIconElement, 'material-icons-outlined');
        this.renderer.appendChild(ratingIconElement, this.renderer.createText('star'));
        this.renderer.appendChild(scoreTextElement, ratingIconElement);
        this.renderer.appendChild(scoreTextElement, this.renderer.createText(((_d = this.anime) === null || _d === void 0 ? void 0 : _d.score) || 'n/a'));
        this.addClasses(scoreTextElement, ['flex', 'items-center', 'gap-1', 'mb-0']);
        this.renderer.appendChild(extraAnimeDetailsDiv, scoreTextElement);
        this.renderer.appendChild(this.tooltipElement, extraAnimeDetailsDiv);
        // BACKGROUND OR SYNOPSIS
        const backgroundTextElement = this.renderer.createElement('p');
        const backgroundText = this.anime.background || this.anime.synopsis || 'Description Not Available.';
        this.renderer.appendChild(backgroundTextElement, this.renderer.createText((backgroundText)));
        this.addClasses(backgroundTextElement, ['tracking-wider', 'my-2', 'font-mulish', 'text-[13px]']);
        this.renderer.setStyle(backgroundTextElement, 'font-weight', '300');
        this.renderer.appendChild(this.tooltipElement, backgroundTextElement);
        // ANIME SOURCE
        if (this.anime.source) {
            const movieSourceTextElement = this.renderer.createElement('p');
            const movieSourceText = 'Source: ' + this.anime.source;
            this.renderer.appendChild(movieSourceTextElement, this.renderer.createText((movieSourceText)));
            this.addClasses(movieSourceTextElement, ['italic', 'tracking-wider', 'mb-2', 'font-mulish', 'text-[11px]']);
            this.renderer.appendChild(this.tooltipElement, movieSourceTextElement);
        }
        // THEMES
        if (this.anime.themes.length) {
            const themeDivContainerElement = this.renderer.createElement('div');
            this.addClasses(themeDivContainerElement, ['flex', 'gap-3', 'items-start']);
            const themeTextSpan = this.renderer.createElement('span');
            this.renderer.appendChild(themeTextSpan, this.renderer.createText('Themes'));
            this.addClasses(themeTextSpan, ['font-bold', 'text-[12px]', 'tracking-wider', 'py-1']);
            const themesDivElement = this.renderer.createElement('div');
            this.addClasses(themesDivElement, ['flex', 'flex-wrap', 'gap-2']);
            this.anime.themes.forEach((theme) => {
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
AnimeTooltipDirective.ɵfac = function AnimeTooltipDirective_Factory(t) { return new (t || AnimeTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AnimeTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AnimeTooltipDirective, selectors: [["", "appAnimeTooltip", ""]], hostBindings: function AnimeTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AnimeTooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function AnimeTooltipDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { anime: ["appAnimeTooltip", "anime"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAnimeTooltip]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { anime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appAnimeTooltip']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "qtax":
/*!*******************************************************************!*\
  !*** ./src/app/shared/recommendation/recommendation.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationComponent", function() { return RecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function RecommendationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendationComponent_div_12_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const recommendation_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.redirectToAnimeOrManga(ctx_r3.type, recommendation_r2 == null ? null : recommendation_r2.entry == null ? null : recommendation_r2.entry.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommendation_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (recommendation_r2 == null ? null : recommendation_r2.entry == null ? null : recommendation_r2.entry.images == null ? null : recommendation_r2.entry.images.webp == null ? null : recommendation_r2.entry.images.webp.large_image_url) || (recommendation_r2 == null ? null : recommendation_r2.entry == null ? null : recommendation_r2.entry.images == null ? null : recommendation_r2.entry.images.webp == null ? null : recommendation_r2.entry.images.webp.image_url) || (recommendation_r2 == null ? null : recommendation_r2.entry == null ? null : recommendation_r2.entry.images == null ? null : recommendation_r2.entry.images.jpg == null ? null : recommendation_r2.entry.images.jpg.large_image_url) || (recommendation_r2 == null ? null : recommendation_r2.entry == null ? null : recommendation_r2.entry.images == null ? null : recommendation_r2.entry.images.jpg == null ? null : recommendation_r2.entry.images.jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recommendation_r2.entry.title);
} }
function RecommendationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecommendationComponent_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onTotalRecommendationsChange.emit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View More Recommendations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RecommendationComponent {
    constructor(_router) {
        this._router = _router;
        this.recommendations = [];
        this.onTotalRecommendationsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    redirectToAnimeOrManga(type, id) {
        this._router.navigate([`/${type}/${id}`]);
    }
    trackById(_, item) {
        return item.entry.mal_id;
    }
}
RecommendationComponent.ɵfac = function RecommendationComponent_Factory(t) { return new (t || RecommendationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RecommendationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecommendationComponent, selectors: [["app-recommendations"]], inputs: { images: "images", recommendations: "recommendations", title: "title", totalRecommendations: "totalRecommendations", type: "type" }, outputs: { onTotalRecommendationsChange: "onTotalRecommendationsChange" }, decls: 14, vars: 5, consts: [[1, "mt-2", "py-3", "sm:container-fluid"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-y-6", "md:gap-x-2", "md:gap-y-0"], [1, "w-full", "flex", "justify-center"], [1, "w-full", "max-w-[13rem]", "h-full", "max-h-[20rem]", "overflow-hidden", "rounded-md"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "md:col-span-4"], [1, "tracking-wider", "font-mulish", "mb-8", "text-lg"], [1, "text-[#ffd600]"], [1, "grid", "gap-3", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-3", "lg:grid-cols-4"], ["class", "manga-card flex flex-col items-center gap-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "w-full text-center", 4, "ngIf"], [1, "manga-card", "flex", "flex-col", "items-center", "gap-2"], [1, "w-full", "max-w-[15rem]", "h-[17rem]", "rounded-md", "overflow-hidden", "sm:max-w-[17rem]", "sm:h-[17rem]", "md:max-w-[19rem]", "md:h-[19rem]", "lg:max-w-[23rem]", "lg:h-[21rem]", 3, "click"], [1, "cursor-pointer", "w-full", "h-full", "object-cover", 3, "src"], [1, "cursor-pointer", "tracking-wider", "text-center"], [1, "w-full", "text-center"], [1, "view-more-recom-btn", "mt-3", "bg-[#3e3e3e]", "p-2", "px-3", "mx-auto", "rounded-md", "tracking-wider", "font-mulish", "hover:bg-[#585555]", 3, "click"]], template: function RecommendationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you are looking for manga similar to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", Then you might like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecommendationComponent_div_12_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecommendationComponent_div_13_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx.images == null ? null : ctx.images.webp == null ? null : ctx.images.webp.large_image_url) || (ctx.images == null ? null : ctx.images.jpg == null ? null : ctx.images.jpg.large_image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommendations.slice(0, ctx.totalRecommendations))("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalRecommendations < ctx.recommendations.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n.material-icons-outlined[_ngcontent-%COMP%] {\n    font-family: 'Material Icons Outlined' !important;\n}\n\n.view-more-recom-btn[_ngcontent-%COMP%] {\n    transition: background-color .1s linear;\n}\n\n.manga-card[_ngcontent-%COMP%] {\n    img {\n        opacity: .9;\n        transition: opacity .2s ease-in-out, transform .2s ease-in-out;\n    }\n}\n\n.manga-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    transition: color .1s linear;\n}\n\n.manga-card[_ngcontent-%COMP%]:hover {\n    img {\n        opacity: 1;\n        transform: scale(1.02);\n    }\n\n    p {\n        color: #bd0912;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JlY29tbWVuZGF0aW9uL3JlY29tbWVuZGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLDhEQUE4RDtJQUNsRTtBQUNKOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Ysc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JlY29tbWVuZGF0aW9uL3JlY29tbWVuZGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmZvbnQtbXVsaXNoIHtcbiAgICBmb250LWZhbWlseTogXCJNdWxpc2hcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJyAhaW1wb3J0YW50O1xufVxuXG4udmlldy1tb3JlLXJlY29tLWJ0biB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMgbGluZWFyO1xufVxuXG4ubWFuZ2EtY2FyZCB7XG4gICAgaW1nIHtcbiAgICAgICAgb3BhY2l0eTogLjk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cbn1cblxuLm1hbmdhLWNhcmQgcCB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGxpbmVhcjtcbn1cblxuLm1hbmdhLWNhcmQ6aG92ZXIge1xuICAgIGltZyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjYmQwOTEyO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recommendations',
                templateUrl: './recommendation.component.html',
                styleUrls: ['./recommendation.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['images']
        }], recommendations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['recommendations']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], totalRecommendations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['totalRecommendations']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }], onTotalRecommendationsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onTotalRecommendationsChange']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391.js.map