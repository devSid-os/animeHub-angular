(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/siddharth/myworkSpace/projects/animehub/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'animehub';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "w-full"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@media screen and (max-width: 576px) {\n    main[_ngcontent-%COMP%] {\n        width: 100%;\n        \n        padding-right: var(--bs-gutter-x, 0.75rem);\n        \n        padding-left: var(--bs-gutter-x, 0.75rem);\n        \n        margin-right: auto;\n        \n        margin-left: auto;\n        \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsMENBQTBDO1FBQzFDLHVCQUF1QjtRQUN2Qix5Q0FBeUM7UUFDekMsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1haW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogRnVsbCB3aWR0aCAqL1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1icy1ndXR0ZXIteCwgMC43NXJlbSk7XG4gICAgICAgIC8qIEhvcml6b250YWwgcGFkZGluZyAqL1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWJzLWd1dHRlci14LCAwLjc1cmVtKTtcbiAgICAgICAgLyogSG9yaXpvbnRhbCBwYWRkaW5nICovXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgLyogQ2VudGVyIGFsaWdubWVudCAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgLyogQ2VudGVyIGFsaWdubWVudCAqL1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "VtgE":
/*!*************************************************************************!*\
  !*** ./src/app/home-component/anime-section/anime-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnimeSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeSectionComponent", function() { return AnimeSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");





function AnimeSectionComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSectionComponent_div_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const anime_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.selectAnime(anime_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " star ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", anime_r3.images.webp.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", anime_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", anime_r3.title_english || anime_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", anime_r3.title_english || anime_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", anime_r3.title_japanese || anime_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", anime_r3.rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", anime_r3.duration !== "Unknown" ? anime_r3.duration : anime_r3.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](anime_r3.score || "n/a");
} }
function AnimeSectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimeSectionComponent_div_8_div_1_Template, 21, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.animeData);
} }
function AnimeSectionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Something went wrong!! Please Try Re-loading the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AnimeSectionComponent {
    constructor(_router) {
        this._router = _router;
        this.animePage = 1;
        this.animeData = [];
        this.isError = false;
    }
    ngOnInit() { }
    selectAnime(anime) {
        this._router.navigate(["/anime", anime.mal_id]);
    }
    redirectToAnimeFilterPage() {
        this._router.navigate(['/anime-filters'], {
            queryParams: {
                status: 'airing'
            }
        });
    }
}
AnimeSectionComponent.ɵfac = function AnimeSectionComponent_Factory(t) { return new (t || AnimeSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AnimeSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeSectionComponent, selectors: [["app-anime-section"]], inputs: { animeData: "animeData", isError: "isError" }, decls: 10, vars: 2, consts: [[1, "max-auto", "linear-gradient-bg", "w-full", "rounded-sm"], [1, "flex", "justify-between", "items-center"], [1, "text-base", "text-[#ffc119]", "p-3"], ["type", "button", 1, "filter-anime-btn", "flex", "items-center", "bg-[#ffd600]", "text-black", "p-2", "py-1", "rounded-tl-[6px]", "rounded-bl-[6px]", 2, "letter-spacing", "0", 3, "click"], [1, "material-icons-outlined", "text-black", "text-[16px]"], ["class", "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-2 p-3 py-2", "style", "row-gap: 1.5rem!important;", 4, "ngIf"], ["class", "flex flex-col items-center gap-4 mt-12", 4, "ngIf"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "md:grid-cols-3", "lg:grid-cols-5", "gap-2", "p-3", "py-2", 2, "row-gap", "1.5rem!important"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "h-[17rem]"], [1, "anime-card", "relative", "cursor-pointer", "w-full", "h-full", "rounded-[1px]", "overflow-hidden"], [1, "w-full", "h-full"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "anime-text-div", "absolute", "bottom-0", "left-0", "w-full", "flex", "flex-col", "justify-end", "h-[70px]", "p-2"], [1, "text-sm", "mb-1", "font-bold", 3, "matTooltip"], [1, "text-[#bebebe]", "text-[12px]", "font-bold"], [1, "anime-extra-info", "w-full", "p-2", "flex", "justify-between", "items-start", "rounded-bl-lg", "rounded-br-lg", "cursor-pointer"], [1, "max-w-[60%]", "flex", "flex-col"], [1, "text-[12px]", "font-bold"], [1, "text-[10px]", "text-[gray]"], [1, "flex-1", "flex", "justify-end", "items-center"], [1, "material-icons-outlined", "text-[#ffc119]", "text-[12px]"], [1, "text-[10px]", "mt-[1px]"], [1, "flex", "flex-col", "items-center", "gap-4", "mt-12"], ["src", "assets/errorPlaceholder1.gif", 1, "w-[20%]"]], template: function AnimeSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " RECENT RELEASE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeSectionComponent_Template_button_click_4_listener() { return ctx.redirectToAnimeFilterPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Filter Animes\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AnimeSectionComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AnimeSectionComponent_div_9_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animeData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"]], styles: ["*[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n}\n\np[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.linear-gradient-bg[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .15) 90%, transparent);\n}\n\n.anime-text-div[_ngcontent-%COMP%] {\n    background: linear-gradient(0deg, #000 30%, transparent);\n    transition: height .3s ease-in-out;\n}\n\n.anime-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: 1px !important;\n    transition: color .3s ease-in-out, transform .3s ease-in-out;\n}\n\n.anime-card[_ngcontent-%COMP%]:hover   .anime-text-div[_ngcontent-%COMP%] {\n    height: 100px;\n}\n\n.anime-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    letter-spacing: 0 !important;\n}\n\n.anime-card[_ngcontent-%COMP%]:hover   .anime-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    transform: translateY(-0.7rem);\n}\n\n.anime-card[_ngcontent-%COMP%]:hover   .anime-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    color: var(--color-yellow);\n}\n\n.anime-extra-info[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, #000, transparent);\n    border-top: 1px solid gray;\n}\n\n.anime-extra-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .anime-text-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis !important;\n}\n\n.anime-extra-info[_ngcontent-%COMP%]:hover {\n    background-color: #5d0914;\n    border-top: 1px solid #5d0914;\n}\n\n.filter-anime-btn[_ngcontent-%COMP%] {\n    padding-left: 1rem !important;\n    transition: all .3s ease-in-out;\n}\n\n.filter-anime-btn[_ngcontent-%COMP%]:hover {\n    padding-right: .8rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jb21wb25lbnQvYW5pbWUtc2VjdGlvbi9hbmltZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkZBQTJGO0FBQy9GOztBQUVBO0lBQ0ksd0RBQXdEO0lBQ3hELGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1jb21wb25lbnQvYW5pbWUtc2VjdGlvbi9hbmltZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5wLFxuaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmxpbmVhci1ncmFkaWVudC1iZyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAuNSksIHJnYmEoMCwgMCwgMCwgLjE1KSA5MCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmFuaW1lLXRleHQtZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMCAzMCUsIHRyYW5zcGFyZW50KTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYW5pbWUtdGV4dC1kaXYgcCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmFuaW1lLWNhcmQ6aG92ZXIgLmFuaW1lLXRleHQtZGl2IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYW5pbWUtY2FyZCBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYW5pbWUtY2FyZDpob3ZlciAuYW5pbWUtdGV4dC1kaXYgcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjdyZW0pO1xufVxuXG4uYW5pbWUtY2FyZDpob3ZlciAuYW5pbWUtdGV4dC1kaXYgcDpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG59XG5cbi5hbmltZS1leHRyYS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAwLCB0cmFuc3BhcmVudCk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5hbmltZS1leHRyYS1pbmZvIHAsXG4uYW5pbWUtdGV4dC1kaXYgcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG59XG5cbi5hbmltZS1leHRyYS1pbmZvOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQwOTE0O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNWQwOTE0O1xufVxuXG4uZmlsdGVyLWFuaW1lLWJ0biB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmZpbHRlci1hbmltZS1idG46aG92ZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IC44cmVtICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-section',
                templateUrl: './anime-section.component.html',
                styleUrls: ['./anime-section.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { animeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animeData']
        }], isError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isError']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-component/home.component */ "kw8v");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component_anime_section_anime_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-component/anime-section/anime-section.component */ "VtgE");
/* harmony import */ var _home_component_anime_aside_anime_aside_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-component/anime-aside/anime-aside.component */ "ra82");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loader/loader.module */ "eNvI");
/* harmony import */ var _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-carousel/home-carousel.component */ "cO3E");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_12__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _home_component_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _home_component_anime_section_anime_section_component__WEBPACK_IMPORTED_MODULE_8__["AnimeSectionComponent"],
        _home_component_anime_aside_anime_aside_component__WEBPACK_IMPORTED_MODULE_9__["AnimeAsideComponent"],
        _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_13__["HomeCarouselComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _loader_loader_module__WEBPACK_IMPORTED_MODULE_12__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _home_component_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _home_component_anime_section_anime_section_component__WEBPACK_IMPORTED_MODULE_8__["AnimeSectionComponent"],
                    _home_component_anime_aside_anime_aside_component__WEBPACK_IMPORTED_MODULE_9__["AnimeAsideComponent"],
                    _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_13__["HomeCarouselComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_12__["LoaderModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b/W4":
/*!*******************************************!*\
  !*** ./src/app/Services/anime.service.ts ***!
  \*******************************************/
/*! exports provided: AnimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeService", function() { return AnimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AnimeService {
    constructor(_http) {
        this._http = _http;
        this._JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
        this.showAnimeSearch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    getAnimeGenres() {
        return this._http.get(`${this._JIKAN_BASE_URL}/genres/anime`).toPromise();
    }
    getAnimeMovies(filters) {
        filters['type'] = 'movie';
        return this._http.get(`${this._JIKAN_BASE_URL}/top/anime`, {
            params: filters
        }).toPromise();
    }
    getPersonPictures(personId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/people/${personId}/pictures`).toPromise();
    }
    getPersonFullById(personId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/people/${personId}/full`).toPromise();
    }
    getAllCharacters(filters) {
        return this._http.get(`${this._JIKAN_BASE_URL}/characters`, {
            params: filters
        }).toPromise();
    }
    getCharacterPictures(characterId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/characters/${characterId}/pictures`).toPromise();
    }
    getCharacterFullById(characterId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/characters/${characterId}/full`).toPromise();
    }
    getAnimeReviews(animeId, page) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/reviews`, {
            params: {
                page
            }
        }).toPromise();
    }
    getAnimeStaff(animeId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/staff`).toPromise();
    }
    getAnimeCharacters(animeId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/characters`).toPromise();
    }
    getAnimeRecommendations(animeId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/recommendations`).toPromise();
    }
    getAnimeStreaming(animeId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/streaming`).toPromise();
    }
    getAnimePictures(animeId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/pictures`).toPromise();
    }
    getFullAnimeById(animeId) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime/${animeId}/full`).toPromise();
    }
    getAnimeSearch(filters) {
        return this._http.get(`${this._JIKAN_BASE_URL}/anime`, {
            params: filters
        }).toPromise();
    }
    getPopularAnimes(filters) {
        return this._http.get(`${this._JIKAN_BASE_URL}/top/anime`, {
            params: filters
        }).toPromise();
    }
}
AnimeService.ɵfac = function AnimeService_Factory(t) { return new (t || AnimeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AnimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnimeService, factory: AnimeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cO3E":
/*!**********************************************************!*\
  !*** ./src/app/home-carousel/home-carousel.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCarouselComponent", function() { return HomeCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["carousel"];
const _c1 = function (a0) { return { "pr-4": a0 }; };
function HomeCarouselComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCarouselComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const image_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.redirectToPage(i_r5, image_r4.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, !ctx_r1.isSmallScreen && i_r5 % 2 == 0 && i_r5 !== ctx_r1.images.length - 1))("id", "carousel-item-" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r4.alt);
} }
const _c2 = function (a0) { return { "bg-[#ffd600]": a0 }; };
function HomeCarouselComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCarouselComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onNavigationClick(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r2.isSmallScreen && ctx_r2.currentIndex === 2));
} }
function HomeCarouselComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCarouselComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onNavigationClick(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r3.isSmallScreen && ctx_r3.currentIndex === 3));
} }
class HomeCarouselComponent {
    constructor(renderer, _router) {
        this.renderer = renderer;
        this._router = _router;
        this.images = [
            { src: 'assets/carousel_img1.jpg', alt: 'Image 1', url: '/manga/156308' },
            { src: 'assets/carousel_img2.jpg', alt: 'Image 2' },
            { src: 'assets/carousel_img3.jpg', alt: 'Image 3', url: '/manga/13' },
            { src: 'assets/carousel_img4.jpg', alt: 'Image 4', url: 'https://en.dragon-ball-official.com/specials/dragonball40th/?utm_source=dbos&utm_medium=di[%E2%80%A6]ampaign=dragonball40th_open&utm_content=banner_20241120' }
        ];
        this.currentIndex = 0;
        this.autoScrollDelay = 4000;
        this.isSmallScreen = false;
    }
    onResize() {
        this.isSmallScreen = window.innerWidth <= 768;
        this.currentIndex = 0;
        this.scrollToIndex(0);
    }
    ngOnInit() {
        this.currentIndex = 0;
        setTimeout(() => {
            this.isSmallScreen = window.innerWidth <= 768;
            this.startAutoSlide();
            this.renderer.listen('window', 'resize', this.onResize.bind(this));
        }, 1000);
    }
    ngOnDestroy() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
        }
        // Remove the HostListener events manually
        this.renderer.listen('window', 'resize', () => { }); // This removes the event listener
        this.removeEventListeners();
    }
    redirectToPage(index, url) {
        switch (index) {
            case 0:
                this._router.navigate([url]);
                break;
            case 2:
                this._router.navigate([url]);
                break;
            default:
                window.open(url, '_blank');
        }
    }
    removeEventListeners() {
        const carouselElement = this.carousel.nativeElement;
        this.renderer.listen(carouselElement, 'scroll', null); // Replace 'scroll' with the event you're using
    }
    onNavigationClick(btnNo) {
        if (btnNo === this.currentIndex)
            return;
        if (!this.isSmallScreen) {
            if (btnNo === 0) {
                this.currentIndex = 0;
            }
            else
                this.currentIndex = 2;
        }
        else
            this.currentIndex = btnNo;
        clearInterval(this.autoScrollInterval);
        this.startAutoSlide();
        this.scrollToIndex(this.currentIndex);
    }
    scrollToIndex(index) {
        if (index < 0 || index >= this.images.length) {
            return;
        }
        this.currentIndex = index;
        const carouselElement = this.carousel.nativeElement;
        const targetItem = carouselElement.querySelector(`#carousel-item-${index}`);
        if (targetItem) {
            const scrollPosition = targetItem.offsetLeft;
            carouselElement.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
    startAutoSlide() {
        this.autoScrollInterval = setInterval(() => {
            this.autoSlide();
        }, this.autoScrollDelay);
    }
    stopAutoSlide() {
        clearInterval(this.autoScrollInterval);
    }
    autoSlide() {
        let nextIndex = 0;
        if (this.isSmallScreen)
            nextIndex = this.currentIndex + 1;
        else
            nextIndex = this.currentIndex + 2;
        if (nextIndex >= this.images.length) {
            nextIndex = 0;
        }
        this.scrollToIndex(nextIndex);
    }
}
HomeCarouselComponent.ɵfac = function HomeCarouselComponent_Factory(t) { return new (t || HomeCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeCarouselComponent, selectors: [["app-home-carousel"]], viewQuery: function HomeCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 10, vars: 9, consts: [[1, "px-2", "mb-2", "overflow-hidden"], [1, "carousel", "flex", "items-stretch", "overflow-hidden", "touch-none", "rounded-lg", "py-3", 3, "mouseenter", "mouseleave"], ["carousel", ""], ["class", "min-w-[100%] max-h-[650px] cursor-pointer rounded-lg transition-all md:min-w-[50%] hover:scale-[1.02]", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], [1, "mb-2"], [1, "navigation-btns-div", "w-max", "flex", "justify-center", "gap-3", "p-2", "rounded-lg", "bg-black", "md:justify-end"], ["type", "button", 1, "w-[11px]", "h-[11px]", "rounded-full", "bg-[#6e6e6e]", 3, "ngClass", "click"], ["type", "button", "class", "w-[11px] h-[11px] rounded-full bg-[#6e6e6e]", 3, "ngClass", "click", 4, "ngIf"], [1, "min-w-[100%]", "max-h-[650px]", "cursor-pointer", "rounded-lg", "transition-all", "md:min-w-[50%]", "hover:scale-[1.02]", 3, "ngClass", "id", "click"], [1, "w-full", "h-full", "rounded-lg", "overflow-hidden", 3, "src", "alt"]], template: function HomeCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HomeCarouselComponent_Template_div_mouseenter_1_listener() { return ctx.stopAutoSlide(); })("mouseleave", function HomeCarouselComponent_Template_div_mouseleave_1_listener() { return ctx.startAutoSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeCarouselComponent_div_3_Template, 2, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCarouselComponent_Template_button_click_6_listener() { return ctx.onNavigationClick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCarouselComponent_Template_button_click_7_listener() { return ctx.onNavigationClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeCarouselComponent_button_8_Template, 1, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeCarouselComponent_button_9_Template, 1, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, !ctx.isSmallScreen && ctx.currentIndex < 2 || ctx.isSmallScreen && ctx.currentIndex === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, !ctx.isSmallScreen && ctx.currentIndex > 1 || ctx.isSmallScreen && ctx.currentIndex === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSmallScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSmallScreen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".carousel[_ngcontent-%COMP%] {\n    scroll-behavior: smooth;\n}\n\n.navigation-btns-div[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n@media screen and (max-width: 768px) {\n    .navigation-btns-div[_ngcontent-%COMP%] {\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jYXJvdXNlbC9ob21lLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY2Fyb3VzZWwvaG9tZS1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsIHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLm5hdmlnYXRpb24tYnRucy1kaXYge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5uYXZpZ2F0aW9uLWJ0bnMtZGl2IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-carousel',
                templateUrl: './home-carousel.component.html',
                styleUrls: ['./home-carousel.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel']
        }] }); })();


/***/ }),

/***/ "eNvI":
/*!*****************************************!*\
  !*** ./src/app/loader/loader.module.ts ***!
  \*****************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component */ "kQyY");
/* harmony import */ var _loader_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.directive */ "wOW0");





class LoaderModule {
}
LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoaderModule });
LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _loader_directive__WEBPACK_IMPORTED_MODULE_3__["loaderAnimation"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _loader_directive__WEBPACK_IMPORTED_MODULE_3__["loaderAnimation"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _loader_directive__WEBPACK_IMPORTED_MODULE_3__["loaderAnimation"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], _loader_directive__WEBPACK_IMPORTED_MODULE_3__["loaderAnimation"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.redirectToSearchPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.isMobileMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menuItem_r6.urlRoute)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r6.name.toUpperCase(), " ");
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.redirectToSearchPage(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_11_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.isMobileMenuOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menuItem_r13.urlRoute)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menuItem_r13.name.toUpperCase(), " ");
} }
function HeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_11_li_3_Template, 3, 4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.headerMenuItems);
} }
const _c1 = function (a0, a1, a2) { return { "close-hamburger-icon": a0, "fixed": a1, "absolute": a2 }; };
class HeaderComponent {
    constructor(_animeService, _router) {
        this._animeService = _animeService;
        this._router = _router;
        this.showAnimeSearch = false;
        this.isMobileMenuOpen = false;
        this.isSmallScreen = false;
        this.headerMenuItems = [
            {
                name: 'home',
                urlRoute: '/',
            },
            {
                name: 'characters',
                urlRoute: '/all-characters',
            },
            {
                name: 'manga',
                urlRoute: '/manga',
            },
            {
                name: 'movies',
                urlRoute: '/movies',
            }
        ];
        this.sub1$ = null;
    }
    onResize(event) {
        const screenWidth = window.innerWidth;
        this.isSmallScreen = screenWidth < 640; // For example, use 768px as the breakpoint
        // Automatically show background if screen is large
        if (!this.isSmallScreen) {
            this.isMobileMenuOpen = false;
        }
    }
    ngOnInit() {
        this.sub1$ = this._animeService.showAnimeSearch
            .subscribe({
            next: (value) => {
                this.showAnimeSearch = value;
            },
            error: (error) => {
                console.log("Error: ", error);
            }
        });
    }
    ngOnDestroy() {
        if (this.sub1$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"])
            this.sub1$.unsubscribe();
    }
    redirectToSearchPage(searchVal = '') {
        this._router.navigate(["/anime-search"], {
            queryParams: { query: searchVal }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_2__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 12, vars: 10, consts: [[1, "container-fluid", "relative", "flex", "justify-center", "align-center", "py-3", "sm:justify-between", "sm:py-4", 2, "z-index", "4!important", "background", "rgba(0,0,0,0.2)"], [1, "logo", "text-2xl", "select-none", "text-white", "mb-0", "sm:text-2xl", "md:text-3xl"], ["type", "button", 1, "z-10", "left-2", "text-2xl", "text-white", "material-icons-outlined", "sm:hidden", 3, "ngClass", "click"], ["type", "button", "class", "absolute right-4", "style", "transform: translateY(-40%);top:50%;", 3, "click", 4, "ngIf"], [1, "flex"], [1, "hidden", "gap-4", "align-center", "my-auto", "text-white", "sm:flex"], ["class", "text-sm select-none hover:-translate-y-px sm:mt-1", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "z-4 top-0 bg-[rgba(0,0,0,0.9)] fixed w-full h-screen sm:hidden", 4, "ngIf"], ["type", "button", 1, "absolute", "right-4", 2, "transform", "translateY(-40%)", "top", "50%", 3, "click"], [1, "material-icons-outlined", "hover:text-[#ffd600]", "sm:hidden"], [1, "text-sm", "select-none", "hover:-translate-y-px", "sm:mt-1"], ["routerLinkActive", "active-link", 1, "text-[#bebebe]", "hover:text-white", 3, "routerLink", "routerLinkActiveOptions", "click"], [1, "flex", "searchAnimeInputDiv", "items-center", "rounded-sm", 2, "background-color", "rgba(0, 0, 0, .5)"], ["spellcheck", "false", "placeholder", "Search anime by title", "type", "text", 1, "w-[190px]", "p-2", "py-1", "text-[13px]", "bg-transparent", "focus:outline-none"], ["searchInput", ""], ["type", "button", 1, "bg-transparent", "pt-1", 3, "click"], [1, "material-icons-outlined", "text-[18px]", "hover:text-[#ffd600]"], [1, "z-4", "top-0", "bg-[rgba(0,0,0,0.9)]", "fixed", "w-full", "h-screen", "sm:hidden"], [1, "h-screen", 2, "background", "linear-gradient(270deg, #5d0914 20%, rgba(93, 9, 20, 0))!important"], [1, "h-screen", "flex", "flex-col", "gap-8", "items-end", "p-4"], ["class", "select-none text-[#bebebe] text-xl hover:text-white hover:-translate-y-px", 4, "ngFor", "ngForOf"], [1, "select-none", "text-[#bebebe]", "text-xl", "hover:text-white", "hover:-translate-y-px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Anime Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() { return ctx.isMobileMenuOpen = !ctx.isMobileMenuOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_button_6_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 7, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c1, ctx.isMobileMenuOpen, ctx.isMobileMenuOpen, !ctx.isMobileMenuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isMobileMenuOpen ? "close" : "menu", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAnimeSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headerMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAnimeSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenuOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n*[_ngcontent-%COMP%] {\n    letter-spacing: 2px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif;\n    font-style: normal;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    transition: transform ease-out .1s;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition: color ease-in-out .1s;\n}\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.active-link[_ngcontent-%COMP%] {\n    color: white;\n    transform: translateY(-1px);\n}\n.logo[_ngcontent-%COMP%] {\n    font-family: \"Bruno Ace\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n.close-hamburger-icon[_ngcontent-%COMP%] {\n    color: red !important;\n}\n.searchAnimeInputDiv[_ngcontent-%COMP%]:focus-within {\n    border-bottom: 1px solid #bd0912;\n    \n}\n.searchAnimeInputDiv[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #bebebe;\n    transition: border-bottom .2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RSw2SkFBNko7QUFFN0o7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLGlDQUFpQztBQUNyQztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxnQ0FBZ0M7O0FBRXBDO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMseUNBQXlDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnJ1bm8rQWNlJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxubmF2IHVsIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbm5hdiB1bCBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLW91dCAuMXM7XG59XG5cbm5hdiB1bCBsaSBhIHtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLWluLW91dCAuMXM7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4ubG9nbyB7XG4gICAgZm9udC1mYW1pbHk6IFwiQnJ1bm8gQWNlXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jbG9zZS1oYW1idXJnZXItaWNvbiB7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoQW5pbWVJbnB1dERpdjpmb2N1cy13aXRoaW4ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmQwOTEyO1xuICAgIFxufVxuXG4uc2VhcmNoQW5pbWVJbnB1dERpdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZWJlYmU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAuMnMgZWFzZS1pbi1vdXQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_2__["AnimeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["jikanImg"];
function FooterComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
        this.copyRightText = this.currentYear.toString() + ` All rights reserved. | 🎨 Designed & 💻 Developed by Siddharth | 🔗`;
        this.navLinks = [
            { name: 'Home', url: '/' },
            { name: 'Characters', url: '/all-characters' },
            { name: 'Manga', url: '/manga' },
            { name: 'Movies', url: '/movies' },
            { name: 'Search Anime', url: '/anime-search' },
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.jikanImg.nativeElement, 'click')
            .subscribe((obs) => {
            window.open('https://jikan.moe/', '_blank');
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], viewQuery: function FooterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.jikanImg = _t.first);
    } }, decls: 20, vars: 2, consts: [[1, "px-3"], [1, "w-full", "justify-center", "flex", "py-2"], [1, "flex-wrap", "justify-center", "flex", "gap-2"], ["class", "tracking-wider font-light select-none", 4, "ngFor", "ngForOf"], [1, "flex", "justify-center", "items-center", "jikan-credits-div"], ["width", "90", "src", "assets/jikan_logo.png", 1, "h-max", "cursor-pointer"], ["jikanImg", ""], [1, "tracking-wide", "mb-0", "text-[#bebebe]", "text-[10px]", "md:text-[12px]"], ["href", "https://jikan.moe/", "target", "_blank", "rel", "noopener noreferrer", 1, "italic", 2, "text-decoration", "none"], [1, "copy-right-para", "text-center", "text-[#bebebe]", "pb-2", "mb-0", "font-[600]", "text-[10px]", "md:text-[12px]"], ["href", "https://www.linkedin.com/in/siddharth-jain-3ab1ab294/", "target", "_blank"], [1, "tracking-wider", "font-light", "select-none"], [1, "text-white", "p-1", "px-2", "rounded-md", "nav-links", "text-sm", "sm:text-base", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_li_4_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The content displayed on this website, including anime details, images, and related data, is sourced from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Jikan API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " We greatly appreciate the efforts of the Jikan API team for providing such a comprehensive and accessible resource for anime enthusiasts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.copyRightText, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\n    background: linear-gradient(0deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\nhr[_ngcontent-%COMP%] {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\n.copy-right-para[_ngcontent-%COMP%] {\n    padding-top: 0;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.nav-links[_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 0, 0, .3);\n    color: #fff;\n}\n\n@media screen and (max-width: 576px) {\n    .copy-right-para[_ngcontent-%COMP%] {\n        padding-top: .5rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRUksNEVBQTRFO0FBQ2hGOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbShyZ2JhKDIyMCwgOSwgMjAsIC41KSksIHRvKHJnYmEoMjIwLCA5LCAyMCwgMCkpKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMjAsIDksIDIwLCAuNSksIHJnYmEoMjIwLCA5LCAyMCwgMCkpO1xufVxuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNvcHktcmlnaHQtcGFyYSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5uYXYtbGlua3Mge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtbGlua3M6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC5jb3B5LXJpZ2h0LXBhcmEge1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, { jikanImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['jikanImg']
        }] }); })();


/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loader_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.directive */ "wOW0");



class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 6, vars: 0, consts: [[1, "loading"], [1, "loading-container"], ["src", "assets/errorPlaceholder2.gif", 1, "select-none"], ["loaderDots", ""]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_loader_directive__WEBPACK_IMPORTED_MODULE_1__["loaderAnimation"]], styles: [".loading[_ngcontent-%COMP%] {   \n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .7);\n}\n\n.loading[_ngcontent-%COMP%]    > .loading-container[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.loading[_ngcontent-%COMP%]    > .loading-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 8%;\n}\n\n.loading[_ngcontent-%COMP%]    > .loading-container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n    letter-spacing: 1px;\n    font-size: 1.3rem;\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n.loading[_ngcontent-%COMP%]    > .loading-container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    -webkit-user-select: none;\n            user-select: none;\n    color: var(--color-yellow);\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHsgICBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4ubG9hZGluZyA+IC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmxvYWRpbmcgPiAubG9hZGluZy1jb250YWluZXIgPiBpbWcge1xuICAgIHdpZHRoOiA4JTtcbn1cblxuLmxvYWRpbmcgPiAubG9hZGluZy1jb250YWluZXIgPiBwIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5sb2FkaW5nID4gLmxvYWRpbmctY29udGFpbmVyID4gcCA+IHNwYW4ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kw8v":
/*!**************************************************!*\
  !*** ./src/app/home-component/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-carousel/home-carousel.component */ "cO3E");
/* harmony import */ var _anime_section_anime_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anime-section/anime-section.component */ "VtgE");
/* harmony import */ var _anime_aside_anime_aside_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anime-aside/anime-aside.component */ "ra82");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");










function HomeComponent_app_loader_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class HomeComponent {
    constructor(_animeService) {
        this._animeService = _animeService;
        this.animePage = 1;
        this.animeData = [];
        this.isError = false;
        this.animeAsideData = [];
        this.isErrorAside = false;
        this.loading = false;
        this.sub = null;
    }
    ngOnInit() {
        this.executeApis();
    }
    ngOnDestroy() {
        if (this.sub instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"])
            this.sub.unsubscribe();
    }
    executeApis() {
        this.loading = true;
        // Create an array of functions that return promises
        const requests = [
            () => this.getAnimeSearch({ order_by: 'start_date', sort: "desc", status: "airing", type: "tv", page: 1 }),
            () => this.getAnimeSearch({ order_by: 'start_date', sort: "desc", status: "airing", type: "tv", page: 2 }),
            () => this.getPopularAnimes({ limit: "20", filter: "bypopularity" })
        ];
        this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((requestFunc) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(requestFunc()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(333), // Add delay for subsequent requests
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                console.log("Error: ", error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); // Handle error by returning null
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loading = false)).subscribe(); // Execute the requests
    }
    getAnimeSearch(filters) {
        return this._animeService.getAnimeSearch(filters)
            .then((response) => {
            this.isError = false;
            this.animeData = this.animeData.concat(response.data);
            // console.log("getAnimeSearch() from home component(Anime Section)", response.pagination);
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.isError = true;
        });
    }
    getPopularAnimes(filters) {
        return this._animeService.getPopularAnimes(filters)
            .then((response) => {
            this.animeAsideData = response.data;
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.isErrorAside = true;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_3__["AnimeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home-component"]], decls: 8, vars: 5, consts: [[1, "w-full", "py-2"], ["id", "anime-content", 1, "w-full", "flex", "flex-col", "justify-between", "items-center", "md:flex-row", "md:items-start"], [1, "w-full", "md:w-[75%]"], [3, "animeData", "isError"], [1, "w-full", "ml-[1rem]", "rounded-tl-2xl", "overflow-hidden", "md:w-[25%]"], [3, "animeAsideData", "isErrorAside"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-anime-section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aside", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-anime-aside", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_app_loader_7_Template, 1, 0, "app-loader", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animeData", ctx.animeData)("isError", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animeAsideData", ctx.animeAsideData)("isErrorAside", ctx.isErrorAside);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_4__["HomeCarouselComponent"], _anime_section_anime_section_component__WEBPACK_IMPORTED_MODULE_5__["AnimeSectionComponent"], _anime_aside_anime_aside_component__WEBPACK_IMPORTED_MODULE_6__["AnimeAsideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]], styles: ["aside[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\n@media screen and (max-width: 768px) {\n    #anime-content[_ngcontent-%COMP%] {\n        gap: 1.5rem!important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jb21wb25lbnQvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRUksOEVBQThFO0FBQ2xGOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29tcG9uZW50L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFzaWRlIHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjIwLCA5LCAyMCwgLjUpKSwgdG8ocmdiYSgyMjAsIDksIDIwLCAwKSkpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjIwLCA5LCAyMCwgLjUpLCByZ2JhKDIyMCwgOSwgMjAsIDApKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAjYW5pbWUtY29udGVudCB7XG4gICAgICAgIGdhcDogMS41cmVtIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-component',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_3__["AnimeService"] }]; }, null); })();


/***/ }),

/***/ "ra82":
/*!*********************************************************************!*\
  !*** ./src/app/home-component/anime-aside/anime-aside.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnimeAsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeAsideComponent", function() { return AnimeAsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AnimeAsideComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeAsideComponent_div_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const anime_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.selectAnime(anime_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " local_fire_department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", anime_r3.images.webp.image_url || anime_r3.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", anime_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", anime_r3.title_english || anime_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](anime_r3.title_japanese || anime_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](anime_r3.scored_by);
} }
function AnimeAsideComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimeAsideComponent_div_6_div_1_Template, 12, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.animeAsideData);
} }
function AnimeAsideComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Something went wrong!! Please Try Re-loading the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AnimeAsideComponent {
    constructor(_router) {
        this._router = _router;
        this.animeAsideData = [];
        this.isErrorAside = false;
    }
    ngOnInit() { }
    selectAnime(anime) {
        this._router.navigate(["/anime", anime.mal_id]);
    }
}
AnimeAsideComponent.ɵfac = function AnimeAsideComponent_Factory(t) { return new (t || AnimeAsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AnimeAsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeAsideComponent, selectors: [["app-anime-aside"]], inputs: { animeAsideData: "animeAsideData", isErrorAside: "isErrorAside" }, decls: 8, vars: 2, consts: [[1, "w-full"], [1, "p-3", "text-lg", "tracking-wider", "flex", "items-center"], [1, "material-icons-outlined"], ["class", "w-full flex flex-col gap-3 py-3", 4, "ngIf"], ["class", "flex flex-col items-center gap-4 mt-12 px-2", 4, "ngIf"], [1, "w-full", "flex", "flex-col", "gap-3", "py-3"], ["class", "popular-anime-div p-2 w-full flex justify-between items-center gap-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "popular-anime-div", "p-2", "w-full", "flex", "justify-between", "items-center", "gap-3", 3, "click"], [1, "popular-anime-img", "select-none", "min-w-[90px]", "w-[90px]", "h-[130px]", "rounded-sm", 2, "opacity", ".9", 3, "src", "alt"], [1, "flex-1"], [1, "popular-anime-title", "text-sm", "tracking-wider", "font-[600]"], [1, "text-[12px]", "text-[#bebebe]", "mt-1"], [1, "flex", "items-center", "gap-1", "mt-2"], [1, "material-icons-outlined", "font-light", "text-[1rem]", "-ml-1"], [1, "text-[.8rem]", "font-light", "tracking-wider", "mt-[2px]"], [1, "flex", "flex-col", "items-center", "gap-4", "mt-12", "px-2"], ["src", "assets/errorPlaceholder2.gif", 1, "w-[20%]"], [1, "text-center", "text-sm", "tracking-[2px]"]], template: function AnimeAsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " local_fire_department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Popular Animes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AnimeAsideComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnimeAsideComponent_div_7_Template, 4, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animeAsideData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isErrorAside);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h3[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\np[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.popular-anime-div[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background: transparent;\n}\n\n.popular-anime-div[_ngcontent-%COMP%]:hover   .popular-anime-img[_ngcontent-%COMP%] {\n    transition: opacity .2s ease-in-out;\n}\n\n.popular-anime-title[_ngcontent-%COMP%] {\n    transition: color .1s ease-in-out;\n}\n\n.popular-anime-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    \n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.popular-anime-div[_ngcontent-%COMP%]:hover {\n    background: linear-gradient(90deg, rgba(0, 0, 0, .2), transparent);\n}\n\n.popular-anime-div[_ngcontent-%COMP%]:hover   .popular-anime-img[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n}\n\n.popular-anime-div[_ngcontent-%COMP%]:hover   .popular-anime-title[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jb21wb25lbnQvYW5pbWUtYXNpZGUvYW5pbWUtYXNpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLDZFQUE2RTtBQUNqRjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtFQUFrRTtBQUN0RTs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29tcG9uZW50L2FuaW1lLWFzaWRlL2FuaW1lLWFzaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20ocmdiYSgyMjAsIDksIDIwLCAuNSkpLCB0byhyZ2JhKDIyMCwgOSwgMjAsIDApKSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyMCwgOSwgMjAsIC41KSwgcmdiYSgyMjAsIDksIDIwLCAwKSk7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnBvcHVsYXItYW5pbWUtZGl2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5wb3B1bGFyLWFuaW1lLWRpdjpob3ZlciAucG9wdWxhci1hbmltZS1pbWcge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdWxhci1hbmltZS10aXRsZSB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ucG9wdWxhci1hbmltZS1kaXYgcCB7XG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucG9wdWxhci1hbmltZS1kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLCAwLCAwLCAuMiksIHRyYW5zcGFyZW50KTtcbn1cblxuLnBvcHVsYXItYW5pbWUtZGl2OmhvdmVyIC5wb3B1bGFyLWFuaW1lLWltZyB7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4ucG9wdWxhci1hbmltZS1kaXY6aG92ZXIgLnBvcHVsYXItYW5pbWUtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeAsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-aside',
                templateUrl: './anime-aside.component.html',
                styleUrls: ['./anime-aside.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { animeAsideData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animeAsideData']
        }], isErrorAside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isErrorAside']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-component/home.component */ "kw8v");





const routes = [
    { path: "", component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "anime/:id", loadChildren: () => Promise.all(/*! import() | anime-detail-anime-detail-module */[__webpack_require__.e("default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391"), __webpack_require__.e("default~anime-detail-anime-detail-module~anime-search-anime-search-module~manga-filters-manga-filters-module"), __webpack_require__.e("common"), __webpack_require__.e("anime-detail-anime-detail-module")]).then(__webpack_require__.bind(null, /*! ./anime-detail/anime-detail.module */ "U5OP")).then(mod => mod.AnimeDetailModule) },
    { path: "anime-filters", loadChildren: () => Promise.all(/*! import() | anime-filters-anime-filters-module */[__webpack_require__.e("default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391"), __webpack_require__.e("anime-filters-anime-filters-module")]).then(__webpack_require__.bind(null, /*! ./anime-filters/anime-filters.module */ "kttf")).then(mod => mod.AnimeFiltersModule) },
    { path: "anime-search", loadChildren: () => Promise.all(/*! import() | anime-search-anime-search-module */[__webpack_require__.e("default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391"), __webpack_require__.e("default~anime-detail-anime-detail-module~anime-search-anime-search-module~manga-filters-manga-filters-module"), __webpack_require__.e("anime-search-anime-search-module")]).then(__webpack_require__.bind(null, /*! ./anime-search/anime-search.module */ "HLRl")).then(mod => mod.AnimeSearchModule) },
    { path: "character/:id", loadChildren: () => Promise.all(/*! import() | character-detail-character-detail-module */[__webpack_require__.e("default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391"), __webpack_require__.e("common"), __webpack_require__.e("character-detail-character-detail-module")]).then(__webpack_require__.bind(null, /*! ./character-detail/character-detail.module */ "0lgV")).then(mod => mod.CharacterDetailModule) },
    { path: "people/:id", loadChildren: () => Promise.all(/*! import() | people-details-people-details-module */[__webpack_require__.e("default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391"), __webpack_require__.e("common"), __webpack_require__.e("people-details-people-details-module")]).then(__webpack_require__.bind(null, /*! ./people-details/people-details.module */ "xii9")).then(mod => mod.PeopleDetailsModule) },
    { path: "all-characters", loadChildren: () => __webpack_require__.e(/*! import() | all-characters-all-characters-module */ "all-characters-all-characters-module").then(__webpack_require__.bind(null, /*! ./all-characters/all-characters.module */ "+gJ/")).then(mod => mod.AllCharactersModule) },
    { path: "manga", loadChildren: () => __webpack_require__.e(/*! import() | manga-manga-module */ "manga-manga-module").then(__webpack_require__.bind(null, /*! ./manga/manga.module */ "xX+e")).then(mod => mod.MangaModule) },
    { path: "manga-filters", loadChildren: () => Promise.all(/*! import() | manga-filters-manga-filters-module */[__webpack_require__.e("default~anime-detail-anime-detail-module~anime-search-anime-search-module~manga-filters-manga-filters-module"), __webpack_require__.e("manga-filters-manga-filters-module")]).then(__webpack_require__.bind(null, /*! ./manga-filters/manga-filters.module */ "ot98")).then(mod => mod.MangaFiltersModule) },
    { path: "manga/:id", loadChildren: () => Promise.all(/*! import() | manga-detail-manga-detail-module */[__webpack_require__.e("default~anime-detail-anime-detail-module~anime-filters-anime-filters-module~anime-search-anime-searc~d0e04391"), __webpack_require__.e("common"), __webpack_require__.e("manga-detail-manga-detail-module")]).then(__webpack_require__.bind(null, /*! ./manga-detail/manga-detail.module */ "WsYK")).then(mod => mod.MangaDetailModule) },
    { path: "movies", loadChildren: () => __webpack_require__.e(/*! import() | movies-movies-module */ "movies-movies-module").then(__webpack_require__.bind(null, /*! ./movies/movies.module */ "EA54")).then(mod => mod.MoviesModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wOW0":
/*!********************************************!*\
  !*** ./src/app/loader/loader.directive.ts ***!
  \********************************************/
/*! exports provided: loaderAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderAnimation", function() { return loaderAnimation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class loaderAnimation {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.interval = null;
    }
    ngAfterViewInit() {
        this.interval = setInterval(() => {
            if (this.el.nativeElement.textContent.length < 3) {
                this.renderer.appendChild(this.el.nativeElement, this.renderer.createText('.'));
            }
            else
                this.renderer.setProperty(this.el.nativeElement, 'textContent', '');
        }, 500);
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
loaderAnimation.ɵfac = function loaderAnimation_Factory(t) { return new (t || loaderAnimation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
loaderAnimation.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: loaderAnimation, selectors: [["", "loaderDots", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](loaderAnimation, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[loaderDots]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map