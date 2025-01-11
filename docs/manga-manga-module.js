(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manga-manga-module"],{

/***/ "LVJ5":
/*!****************************************************************!*\
  !*** ./src/app/manga/manga-section/manga-section.component.ts ***!
  \****************************************************************/
/*! exports provided: MangaSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaSectionComponent", function() { return MangaSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");





function MangaSectionComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaSectionComponent_div_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const manga_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.redirectToMangaDetailPage(manga_r2.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " star ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const manga_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", manga_r2.images.webp.large_image_url || manga_r2.images.webp.large_image_url || manga_r2.images.webp.image_url || manga_r2.images.webp.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", manga_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", manga_r2.title_english || manga_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", manga_r2.title_english || manga_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", manga_r2.title_japanese || manga_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", manga_r2.rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", manga_r2.chapters || "0", " Chapter ", manga_r2.chapters > 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manga_r2.score || "n/a");
} }
function MangaSectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaSectionComponent_div_8_div_1_Template, 21, 9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mangaData);
} }
class MangaSectionComponent {
    constructor(_router) {
        this._router = _router;
        this.mangaData = [];
    }
    ngOnInit() {
        // console.log(this.mangaData)
    }
    redirectToMangaDetailPage(id) {
        this._router.navigate(['/manga/' + id]);
    }
    redirectToMangaFilters() {
        this._router.navigate(['/manga-filters'], {
            queryParams: {
                status: 'publishing'
            }
        });
    }
}
MangaSectionComponent.ɵfac = function MangaSectionComponent_Factory(t) { return new (t || MangaSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MangaSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MangaSectionComponent, selectors: [["app-manga-section"]], inputs: { mangaData: "mangaData" }, decls: 9, vars: 1, consts: [[1, "max-auto", "linear-gradient-bg", "w-full", "rounded-sm"], [1, "flex", "justify-between", "items-center"], [1, "text-base", "text-[#ffc119]", "p-3"], [1, "filter-manga-btn", "flex", "items-center", "bg-[#ffd600]", "text-black", "p-2", "py-1", "rounded-tl-[6px]", "rounded-bl-[6px]", 2, "letter-spacing", "0", 3, "click"], [1, "material-icons-outlined", "text-black", "text-[16px]"], ["class", "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-2 p-3 py-2", "style", "row-gap: 1.5rem!important;", 4, "ngIf"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "md:grid-cols-3", "lg:grid-cols-5", "gap-2", "p-3", "py-2", 2, "row-gap", "1.5rem!important"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "h-[17rem]"], [1, "manga-card", "relative", "cursor-pointer", "w-full", "h-full", "rounded-[1px]", "overflow-hidden"], [1, "w-full", "h-full"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "manga-text-div", "absolute", "bottom-0", "left-0", "w-full", "flex", "flex-col", "justify-end", "h-[70px]", "p-2"], [1, "text-sm", "mb-1", "font-bold", 3, "matTooltip"], [1, "text-[#bebebe]", "text-[12px]", "font-bold"], [1, "manga-extra-info", "w-full", "p-2", "flex", "justify-between", "items-start", "rounded-bl-lg", "rounded-br-lg", "cursor-pointer"], [1, "max-w-[60%]", "flex", "flex-col"], [1, "text-[12px]", "font-bold"], [1, "text-[11px]", "text-[gray]", "font-bold"], [1, "flex-1", "flex", "justify-end", "items-center"], [1, "material-icons-outlined", "text-[#ffc119]", "text-[12px]"], [1, "text-[10px]", "mt-[1px]"]], template: function MangaSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " TOP MANGAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaSectionComponent_Template_button_click_4_listener() { return ctx.redirectToMangaFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Filter Mangas\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MangaSectionComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangaData.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"]], styles: ["*[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n}\n\np[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.linear-gradient-bg[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .15) 90%, transparent);\n}\n\n.manga-text-div[_ngcontent-%COMP%] {\n    background: linear-gradient(0deg, #000 30%, transparent);\n    transition: height .3s ease-in-out;\n}\n\n.manga-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: 1px !important;\n    transition: color .3s ease-in-out, transform .3s ease-in-out;\n}\n\n.manga-card[_ngcontent-%COMP%]:hover   .manga-text-div[_ngcontent-%COMP%] {\n    height: 100px;\n}\n\n.manga-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: 0 !important;\n}\n\n.manga-card[_ngcontent-%COMP%]:hover   .manga-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    transform: translateY(-0.7rem);\n}\n\n.manga-card[_ngcontent-%COMP%]:hover   .manga-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    color: var(--color-yellow);\n}\n\n.manga-extra-info[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, #000, transparent);\n    border-top: 1px solid gray;\n}\n\n.manga-extra-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .manga-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis !important;\n}\n\n.manga-extra-info[_ngcontent-%COMP%]:hover {\n    background-color: #5d0914;\n    border-top: 1px solid #5d0914;\n}\n\n.filter-manga-btn[_ngcontent-%COMP%] {\n    padding-left: 1rem!important;\n    transition: all .3s ease-in-out;\n}\n\n.filter-manga-btn[_ngcontent-%COMP%]:hover {\n    padding-right: .8rem!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZ2EvbWFuZ2Etc2VjdGlvbi9tYW5nYS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkZBQTJGO0FBQy9GOztBQUVBO0lBQ0ksd0RBQXdEO0lBQ3hELGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbWFuZ2EvbWFuZ2Etc2VjdGlvbi9tYW5nYS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5wLFxuaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmxpbmVhci1ncmFkaWVudC1iZyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAuNSksIHJnYmEoMCwgMCwgMCwgLjE1KSA5MCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLm1hbmdhLXRleHQtZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMCAzMCUsIHRyYW5zcGFyZW50KTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFuZ2EtdGV4dC1kaXYgcCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1hbmdhLWNhcmQ6aG92ZXIgLm1hbmdhLXRleHQtZGl2IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubWFuZ2EtY2FyZCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubWFuZ2EtY2FyZDpob3ZlciAubWFuZ2EtdGV4dC1kaXYgcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjdyZW0pO1xufVxuXG4ubWFuZ2EtY2FyZDpob3ZlciAubWFuZ2EtdGV4dC1kaXYgcDpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG59XG5cbi5tYW5nYS1leHRyYS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAwLCB0cmFuc3BhcmVudCk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5tYW5nYS1leHRyYS1pbmZvIHAsXG4ubWFuZ2EtdGV4dC1kaXYgcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG59XG5cbi5tYW5nYS1leHRyYS1pbmZvOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQwOTE0O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNWQwOTE0O1xufVxuXG4uZmlsdGVyLW1hbmdhLWJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmlsdGVyLW1hbmdhLWJ0bjpob3ZlciB7XG4gICAgcGFkZGluZy1yaWdodDogLjhyZW0haW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manga-section',
                templateUrl: './manga-section.component.html',
                styleUrls: ['./manga-section.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { mangaData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mangaData']
        }] }); })();


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

/***/ "ZLU9":
/*!************************************************************!*\
  !*** ./src/app/manga/manga-aside/manga-aside.component.ts ***!
  \************************************************************/
/*! exports provided: MangaAsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaAsideComponent", function() { return MangaAsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MangaAsideComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaAsideComponent_div_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const manga_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.redirectToMangaDetailPage(manga_r2.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " local_fire_department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const manga_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", manga_r2.images.webp.image_url || manga_r2.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", manga_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", manga_r2.title_english || manga_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manga_r2.title_japanese || manga_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manga_r2.scored_by);
} }
function MangaAsideComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaAsideComponent_div_6_div_1_Template, 12, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mangaAsideData);
} }
class MangaAsideComponent {
    constructor(_router) {
        this._router = _router;
        this.mangaAsideData = [];
    }
    redirectToMangaDetailPage(id) {
        this._router.navigate(['/manga/' + id]);
    }
    ngOnInit() {
    }
}
MangaAsideComponent.ɵfac = function MangaAsideComponent_Factory(t) { return new (t || MangaAsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MangaAsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MangaAsideComponent, selectors: [["app-manga-aside"]], inputs: { mangaAsideData: "mangaAsideData" }, decls: 7, vars: 1, consts: [[1, "w-full"], [1, "p-3", "text-lg", "tracking-wider", "flex", "items-center"], [1, "material-icons-outlined"], ["class", "w-full flex flex-col gap-3 py-3", 4, "ngIf"], [1, "w-full", "flex", "flex-col", "gap-3", "py-3"], ["class", "popular-manga-div p-2 w-full flex justify-between items-center gap-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "popular-manga-div", "p-2", "w-full", "flex", "justify-between", "items-center", "gap-3", 3, "click"], [1, "popular-manga-img", "select-none", "min-w-[90px]", "h-[130px]", "w-[90px]", "rounded-sm", 2, "opacity", ".9", 3, "src", "alt"], [1, "flex-1"], [1, "popular-manga-title", "text-sm", "tracking-wider", "font-[600]"], [1, "text-[12px]", "text-[#bebebe]", "mt-1"], [1, "flex", "items-center", "gap-1", "mt-2"], [1, "material-icons-outlined", "font-light", "text-[1rem]", "-ml-1"], [1, "text-[.8rem]", "font-light", "tracking-wider", "mt-[2px]"]], template: function MangaAsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " local_fire_department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Popular Mangas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MangaAsideComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangaAsideData.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h3[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\np[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.popular-manga-div[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background: transparent;\n}\n\n.popular-manga-div[_ngcontent-%COMP%]:hover   .popular-manga-img[_ngcontent-%COMP%] {\n    transition: opacity .2s ease-in-out;\n}\n\n.popular-manga-title[_ngcontent-%COMP%] {\n    transition: color .1s ease-in-out;\n}\n\n.popular-manga-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    \n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.popular-manga-div[_ngcontent-%COMP%]:hover {\n    background: linear-gradient(90deg, rgba(0, 0, 0, .2), transparent);\n}\n\n.popular-manga-div[_ngcontent-%COMP%]:hover   .popular-manga-img[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n}\n\n.popular-manga-div[_ngcontent-%COMP%]:hover   .popular-manga-title[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZ2EvbWFuZ2EtYXNpZGUvbWFuZ2EtYXNpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLDZFQUE2RTtBQUNqRjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtFQUFrRTtBQUN0RTs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL21hbmdhL21hbmdhLWFzaWRlL21hbmdhLWFzaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSgyMjAsIDksIDIwLCAuNSkpLCB0byhyZ2JhKDIyMCwgOSwgMjAsIDApKSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyMCwgOSwgMjAsIC41KSwgcmdiYSgyMjAsIDksIDIwLCAwKSk7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnBvcHVsYXItbWFuZ2EtZGl2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wb3B1bGFyLW1hbmdhLWRpdjpob3ZlciAucG9wdWxhci1tYW5nYS1pbWcge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdWxhci1tYW5nYS10aXRsZSB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdWxhci1tYW5nYS1kaXYgcCB7XG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucG9wdWxhci1tYW5nYS1kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLCAwLCAwLCAuMiksIHRyYW5zcGFyZW50KTtcbn1cblxuLnBvcHVsYXItbWFuZ2EtZGl2OmhvdmVyIC5wb3B1bGFyLW1hbmdhLWltZyB7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4ucG9wdWxhci1tYW5nYS1kaXY6aG92ZXIgLnBvcHVsYXItbWFuZ2EtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaAsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manga-aside',
                templateUrl: './manga-aside.component.html',
                styleUrls: ['./manga-aside.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { mangaAsideData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mangaAsideData']
        }] }); })();


/***/ }),

/***/ "c31o":
/*!******************************************!*\
  !*** ./src/app/manga/manga.component.ts ***!
  \******************************************/
/*! exports provided: MangaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaComponent", function() { return MangaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_manga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/manga.service */ "VlvX");
/* harmony import */ var _manga_section_manga_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manga-section/manga-section.component */ "LVJ5");
/* harmony import */ var _manga_aside_manga_aside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manga-aside/manga-aside.component */ "ZLU9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");







function MangaComponent_app_loader_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class MangaComponent {
    constructor(__mangaService) {
        this.__mangaService = __mangaService;
        this.loading = false;
        this.mangaData = [];
        this.mangaAsideData = [];
        this.pageIndex = 1;
    }
    ngOnInit() {
        this.getMangaSearch({ sort: "desc", order_by: "score", sfw: true, page: this.pageIndex, status: "complete" });
    }
    getMangaSearch(filters) {
        this.loading = true;
        this.__mangaService.getMangaSearch(filters)
            .then((response) => {
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
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
    getPopularMangas(filters) {
        this.loading = true;
        this.__mangaService.getMangaSearch(filters)
            .then((response) => {
            this.mangaAsideData = this.mangaAsideData.concat(response.data);
            this.loading = false;
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
}
MangaComponent.ɵfac = function MangaComponent_Factory(t) { return new (t || MangaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_manga_service__WEBPACK_IMPORTED_MODULE_1__["MangaService"])); };
MangaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MangaComponent, selectors: [["app-manga"]], decls: 7, vars: 3, consts: [[1, "w-full", "py-2"], ["id", "anime-content", 1, "w-full", "flex", "flex-col", "justify-between", "items-center", "md:flex-row", "md:items-start"], [1, "w-full", "md:w-[75%]"], [3, "mangaData"], [1, "w-full", "ml-[1rem]", "rounded-tl-2xl", "overflow-hidden", "md:w-[25%]"], [3, "mangaAsideData"], [4, "ngIf"]], template: function MangaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-manga-section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aside", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-manga-aside", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MangaComponent_app_loader_6_Template, 1, 0, "app-loader", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mangaData", ctx.mangaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mangaAsideData", ctx.mangaAsideData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_manga_section_manga_section_component__WEBPACK_IMPORTED_MODULE_2__["MangaSectionComponent"], _manga_aside_manga_aside_component__WEBPACK_IMPORTED_MODULE_3__["MangaAsideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], styles: ["aside[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\n@media screen and (max-width: 768px) {\n    #anime-content[_ngcontent-%COMP%] {\n        gap: 1.5rem !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZ2EvbWFuZ2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLDhFQUE4RTtBQUNsRjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYW5nYS9tYW5nYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXNpZGUge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgyMjAsIDksIDIwLCAuNSkpLCB0byhyZ2JhKDIyMCwgOSwgMjAsIDApKSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMjAsIDksIDIwLCAuNSksIHJnYmEoMjIwLCA5LCAyMCwgMCkpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICNhbmltZS1jb250ZW50IHtcbiAgICAgICAgZ2FwOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manga',
                templateUrl: './manga.component.html',
                styleUrls: ['./manga.component.css']
            }]
    }], function () { return [{ type: _Services_manga_service__WEBPACK_IMPORTED_MODULE_1__["MangaService"] }]; }, null); })();


/***/ }),

/***/ "xX+e":
/*!***************************************!*\
  !*** ./src/app/manga/manga.module.ts ***!
  \***************************************/
/*! exports provided: MangaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaModule", function() { return MangaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _manga_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manga.component */ "c31o");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _manga_section_manga_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manga-section/manga-section.component */ "LVJ5");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _manga_aside_manga_aside_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manga-aside/manga-aside.component */ "ZLU9");










const routes = [
    { path: "", component: _manga_component__WEBPACK_IMPORTED_MODULE_2__["MangaComponent"] }
];
class MangaModule {
}
MangaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MangaModule });
MangaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MangaModule_Factory(t) { return new (t || MangaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MangaModule, { declarations: [_manga_component__WEBPACK_IMPORTED_MODULE_2__["MangaComponent"], _manga_section_manga_section_component__WEBPACK_IMPORTED_MODULE_5__["MangaSectionComponent"], _manga_aside_manga_aside_component__WEBPACK_IMPORTED_MODULE_7__["MangaAsideComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_manga_component__WEBPACK_IMPORTED_MODULE_2__["MangaComponent"], _manga_section_manga_section_component__WEBPACK_IMPORTED_MODULE_5__["MangaSectionComponent"], _manga_aside_manga_aside_component__WEBPACK_IMPORTED_MODULE_7__["MangaAsideComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=manga-manga-module.js.map