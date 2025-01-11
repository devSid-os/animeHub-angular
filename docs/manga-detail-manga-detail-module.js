(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manga-detail-manga-detail-module"],{

/***/ "QO/R":
/*!*************************************************************************!*\
  !*** ./src/app/manga-detail/manga-overview/manga-overview.component.ts ***!
  \*************************************************************************/
/*! exports provided: MangaOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaOverviewComponent", function() { return MangaOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums */ "6ffd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/manga.service */ "VlvX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/image-viewer/image-viewer.component */ "JW8G");







function MangaOverviewComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaOverviewComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.isScreenShotsModalOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SCREESHOTS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MangaOverviewComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r1.manga.episodes, " episodes) ");
} }
function MangaOverviewComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaOverviewComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.isScreenShotsModalOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SCREESHOTS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MangaOverviewComponent_div_39_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r17.name, " ");
} }
function MangaOverviewComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MangaOverviewComponent_div_39_mat_chip_4_Template, 2, 1, "mat-chip", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.manga.genres);
} }
const _c0 = function (a0, a1, a2) { return { "bg-[seagreen] airing": a0, "bg-[red] completed": a1, "bg-[#ffd600] upcoming": a2 }; };
function MangaOverviewComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.manga.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r4.manga.status.toLowerCase() === "publishing", ctx_r4.manga.status.toLowerCase() === "finished", ctx_r4.manga.status.toLowerCase() === "discontinued"));
} }
const _c1 = function (a0) { return { "text-[#ffd600]": a0 }; };
function MangaOverviewComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, star_r18 === "f" || star_r18 === "h"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", star_r18 === "f" || star_r18 === "e" ? "star" : "star_half", " ");
} }
function MangaOverviewComponent_ng_container_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", theme_r20.name, " ");
} }
function MangaOverviewComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaOverviewComponent_ng_container_50_div_1_Template, 3, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.manga.themes);
} }
function MangaOverviewComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No themes are available for this manga. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MangaOverviewComponent_div_53_div_4_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r22.voice_actors[0].person.name, " ");
} }
function MangaOverviewComponent_div_53_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MangaOverviewComponent_div_53_div_4_p_7_Template, 2, 1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", character_r22.character.images.webp.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/character/" + character_r22.character.mal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r22.character.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", character_r22.voice_actors && character_r22.voice_actors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Role:\u00A0", character_r22.role || "n/a", " ");
} }
function MangaOverviewComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MangaOverviewComponent_div_53_div_4_Template, 10, 5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaOverviewComponent_div_53_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.tabChange.emit(ctx_r25.tabs.CHARACTERS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " SEE ALL CHARACTERS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.mangaCharacters);
} }
function MangaOverviewComponent_div_54_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaOverviewComponent_div_54_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.redirectToMangaDetailPage(item_r28.entry.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaOverviewComponent_div_54_div_5_Template_p_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r28 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.redirectToMangaDetailPage(item_r28.entry.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r28.entry.images.webp.large_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r28.entry.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r28.entry.title, " ");
} }
function MangaOverviewComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " If you like this manga, you might like... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MangaOverviewComponent_div_54_div_5_Template, 5, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaOverviewComponent_div_54_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.tabChange.emit(ctx_r32.tabs.RECOMMENDATIONS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " SEE ALL RECOMMENDATIONS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.mangaRecommendations.slice(0, 6));
} }
function MangaOverviewComponent_app_image_viewer_55_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-image-viewer", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseImageViewer", function MangaOverviewComponent_app_image_viewer_55_Template_app_image_viewer_onCloseImageViewer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.isScreenShotsModalOpen = !$event; })("onImageChange", function MangaOverviewComponent_app_image_viewer_55_Template_app_image_viewer_onImageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event === "prev" ? ctx_r36.showPrevImage() : ctx_r36.showNextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r11.mangaPictures)("imageNumber", ctx_r11.imageNumber);
} }
class MangaOverviewComponent {
    constructor(_router, _mangaService) {
        this._router = _router;
        this._mangaService = _mangaService;
        this.tabs = src_app_enums__WEBPACK_IMPORTED_MODULE_1__["TABS"];
        this.mangaPictures = [];
        this.mangaStreamingData = [];
        this.mangaCharacters = [];
        this.mangaRecommendations = [];
        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageNumber = 0;
        this.scoreArray = ["e", "e", "e", "e", "e"];
        this.isScreenShotsModalOpen = false;
        this.isTrailerModalOpen = false;
    }
    ngOnInit() {
        // RATINGS LOGIC
        const stars = Number(this.manga.score) / 2;
        const fullStars = Math.floor(stars);
        const halfStars = stars % 1 >= 0.5 ? 1 : 0;
        var index = 0;
        while (index < fullStars) {
            this.scoreArray[index] = "f";
            ++index;
        }
        if (halfStars > 0)
            this.scoreArray[index] = "h";
    }
    redirectToMangaDetailPage(mangaId) {
        this._router.navigate(['/manga/', mangaId]);
    }
    showNextImage() {
        if (this.imageNumber == this.mangaPictures.length - 1)
            this.imageNumber = 0;
        else
            this.imageNumber += 1;
    }
    showPrevImage() {
        if (this.imageNumber == 0)
            this.imageNumber = this.mangaPictures.length - 1;
        else
            this.imageNumber -= 1;
    }
}
MangaOverviewComponent.ɵfac = function MangaOverviewComponent_Factory(t) { return new (t || MangaOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_3__["MangaService"])); };
MangaOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MangaOverviewComponent, selectors: [["app-manga-overview"]], inputs: { manga: "manga", mangaPictures: "mangaPictures", mangaStreamingData: "mangaStreamingData", mangaCharacters: "mangaCharacters", mangaRecommendations: "mangaRecommendations" }, outputs: { tabChange: "tabChange" }, decls: 56, vars: 23, consts: [[1, "container-fluid", "mt-2", "py-3"], [1, "grid-cols-2", "gap-y-8", "grid", "gap-x-4", "md:grid-cols-5", "md:gap-x-8"], ["id", "manga-img-div-sm", 2, "display", "flex", "flex-direction", "column", "align-items", "center"], [1, "overflow-hidden", "h-full", "md:col-span-1", "md:hidden"], ["loading", "lazy", 1, "rounded-md", "w-full", "h-full", 3, "src", "alt"], ["class", "mt-3 bg-[#3e3e3e] p-2 px-3 text-[12px] rounded-md tracking-[1px] font-bold", 3, "click", 4, "ngIf"], [1, "col-span-1", "grid", "md:grid-cols-5", "md:col-span-5"], [1, "detail-header", "gap-1", "md:flex-1"], [1, "material-icons-outlined"], [1, "font-[300]"], ["class", "font-[300]", 4, "ngIf"], [2, "font-weight", "normal!important"], [1, "font-light", 2, "font-weight", "300!important"], ["id", "manga-img-div-lg", 1, "hidden", "col-span-1", "min-h-[20rem]", "md:col-span-1", "md:block", 2, "display", "flex", "flex-direction", "column", "align-items", "center"], [1, "overflow-hidden", "rounded-md", "h-full", "max-w-[15rem]", "max-h-[20rem]"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], ["type", "button", "class", "mt-3 bg-[#3e3e3e] p-2 px-3 text-sm rounded-md tracking-[1px] font-bold", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "items-start", "gap-3", "col-span-2", "md:col-span-3"], [1, "font-mulish", "text-justify", "mb-0"], [4, "ngIf"], [1, "flex", "flex-col", "gap-4", "col-span-2", "md:col-span-1"], [1, "flex", "flex-col", "gap-2"], [1, "mb-0", "font-light", "tracking-wider", "md:text-[15px]"], [1, "font-normal"], ["class", "text-[1rem] material-icons-outlined", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "font-[400]", "tracking-wider", "mb-2", "md:text-[15px]"], [4, "ngIf", "ngIfElse"], ["themesPlaceholder", ""], ["class", "mt-12", 4, "ngIf"], [3, "images", "imageNumber", "onCloseImageViewer", "onImageChange", 4, "ngIf"], [1, "mt-3", "bg-[#3e3e3e]", "p-2", "px-3", "text-[12px]", "rounded-md", "tracking-[1px]", "font-bold", 3, "click"], ["type", "button", 1, "mt-3", "bg-[#3e3e3e]", "p-2", "px-3", "text-sm", "rounded-md", "tracking-[1px]", "font-bold", 3, "click"], [1, "font-mulish", "font-[600]", "mb-2"], ["class", "custom-chip", 4, "ngFor", "ngForOf"], [1, "custom-chip"], [1, "mb-1", "tracking-[1px]", "md:text-[15px]"], [1, "bg-[rgba(0,0,0,.3)]", "rounded-md"], [1, "h-full", "rounded-md", 2, "padding", ".1rem 0", 3, "ngClass"], [1, "text-[1rem]", "material-icons-outlined", 3, "ngClass"], ["class", "theme-item cursor-pointer p-1 px-2 rounded-sm", 4, "ngFor", "ngForOf"], [1, "theme-item", "cursor-pointer", "p-1", "px-2", "rounded-sm"], [1, "mb-0", "tracking-[.07rem]", "text-sm", "select-none"], [1, "font-mulish", "mb-0"], [1, "mt-12"], [1, "font-[400]", "tracking-wider"], [1, "mt-3", "grid", "gap-3", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4"], ["class", "flex gap-2 items-stretch bg-[#313131] rounded-[.25rem] overflow-hidden", "style", "box-shadow: -2px 3px 3px rgba(0,0,0,.4);", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-center"], ["type", "button", 1, "mx-auto", "bg-[#3e3e3e]", "p-2", "px-3", "text-sm", "rounded-md", "tracking-[1px]", "font-bold", 3, "click"], [1, "flex", "gap-2", "items-stretch", "bg-[#313131]", "rounded-[.25rem]", "overflow-hidden", 2, "box-shadow", "-2px 3px 3px rgba(0,0,0,.4)"], [1, "w-full", "max-w-[30%]", "h-[131px]"], ["loading", "lazy", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "flex-col", "justify-between", "p-2", "flex-1", "overflow-hidden"], [1, "text-[#aabee4]", "text-[.9rem]", "w-max", "tracking-wide", "font-bold", "mb-0", "cursor-pointer", "overflow-hidden", "text-ellipsis", "whitespace-nowrap", "font-mulish", "hover:text-[#fff]", 3, "routerLink"], ["class", "text-[12px] font-light text-[#bebebe] font-mulish", 4, "ngIf"], [1, "font-[300]", "mb-1", "tracking-wide", "text-sm", "font-mulish"], [1, "text-[12px]", "font-light", "text-[#bebebe]", "font-mulish"], [1, "p-4", "border-1", "border-[#353330]", 2, "margin-top", "1rem"], [1, "grid", "overflow-hidden", "gap-3", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4", "lg:grid-cols-6", 2, "margin-top", "1rem"], ["class", "manga-card cursor-pointer overflow-hidden h-max w-full max-w-[210px]", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-2", "md:mt-0"], [1, "manga-card", "cursor-pointer", "overflow-hidden", "h-max", "w-full", "max-w-[210px]", 3, "click"], [1, "relative", "w-full", "h-[15rem]", "rounded-[.2rem]", "overflow-hidden", "sm:h-[17rem]"], ["loading", "lazy", 1, "w-full", "h-full", 3, "src", "alt"], [1, "text-center", "tracking-wider", "mt-1", "overflow-hidden", 3, "click"], [3, "images", "imageNumber", "onCloseImageViewer", "onImageChange"]], template: function MangaOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MangaOverviewComponent_button_5_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " import_contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MangaOverviewComponent_span_12_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " calendar_month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " local_fire_department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Rank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MangaOverviewComponent_button_35_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MangaOverviewComponent_div_39_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MangaOverviewComponent_div_41_Template, 5, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Ratings: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MangaOverviewComponent_span_46_Template, 2, 4, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " THEMES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MangaOverviewComponent_ng_container_50_Template, 2, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MangaOverviewComponent_ng_template_51_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, MangaOverviewComponent_div_53_Template, 8, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MangaOverviewComponent_div_54_Template, 9, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MangaOverviewComponent_app_image_viewer_55_Template, 1, 2, "app-image-viewer", 29);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.manga.images.webp.large_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.manga.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangaPictures.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Vol: " + (ctx.manga.volumes || "0") + "+; Ch: " + (ctx.manga.chapters || "0") + "+", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manga.episodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 21, ctx.manga.type) || "MANGA", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.manga == null ? null : ctx.manga.published == null ? null : ctx.manga.published.string) || "?", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.manga.scored_by || "n/a", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", ctx.manga.rank || "n/a", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.manga.images.webp.large_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.manga.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangaPictures.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.manga.synopsis || ctx.manga.background || "Synopsis is currently unavailable at this time.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manga.genres.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manga.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scoreArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manga.themes.length > 0)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangaCharacters.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangaRecommendations.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isScreenShotsModalOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n#trailer-btn[_ngcontent-%COMP%] {\n    transition: transform .1s ease-out;\n}\n\n#trailer-btn[_ngcontent-%COMP%]:hover {\n    background-color: #bd0912 !important;\n    color: black !important;\n    transform: scale(1.01);\n\n}\n\n#close-trailer-btn[_ngcontent-%COMP%]:hover {\n    transition: background-color .2s ease-in-out;\n}\n\n#close-trailer-btn[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    border: 1px solid #191919;\n}\n\n#close-trailer-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    color: black;\n}\n\n.material-icons-outlined[_ngcontent-%COMP%] {\n    font-family: 'Material Icons Outlined' !important;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n.detail-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.detail-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    letter-spacing: .05em;\n}\n\n.custom-chip[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin: 0 5px 5px 0;\n    padding: 3px 9px;\n    letter-spacing: .07rem;\n    background-color: #2e2e2e;\n    color: #bebebe;\n    border-radius: 6px;\n    font-weight: 400 !important;\n    font-size: .8rem;\n}\n\n.custom-chip[_ngcontent-%COMP%]:hover {\n    background-color: #272727;\n}\n\n.theme-item[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgba(0, 0, 0, .5), rgba(220, 9, 20, 0));\n    margin-top: .5rem;\n    transition: transform .2s ease-in-out;\n}\n\n.theme-item[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n}\n\n.theme-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 300 !important;\n}\n\n.theme-item[_ngcontent-%COMP%]:hover {\n    transform: translateX(-1%);\n    background-color: seagreen;\n}\n\n.airing[_ngcontent-%COMP%] {\n    animation: airingProgress 1s ease-in-out forwards;\n}\n\n.completed[_ngcontent-%COMP%] {\n    animation: completedProgress 1s ease-in-out forwards;\n}\n\n.upcoming[_ngcontent-%COMP%] {\n    animation: upcomingProgress 1s ease-in-out forwards;\n}\n\n.manga-card[_ngcontent-%COMP%] {\n    img {\n        opacity: .9;\n        transition: opacity .2s ease-in-out, transform .2s ease-in-out;\n    }\n}\n\n.manga-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    transition: color .1s linear;\n}\n\n.manga-card[_ngcontent-%COMP%]:hover {\n    img {\n        opacity: 1;\n        transform: scale(1.02);\n    }\n\n    p {\n        color: #bd0912;\n    }\n}\n\n@keyframes airingProgress {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 50%;\n    }\n}\n\n@keyframes completedProgress {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 100%;\n    }\n}\n\n@keyframes upcomingProgress {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 75%;\n    }\n}\n\n#streaming-div[_ngcontent-%COMP%] {\n    \n    row-gap: .5rem;\n}\n\n@media screen and (max-width: 768px) {\n    #manga-img-div-lg[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n}\n\n@media screen and (min-width: 768px) {\n\n    #manga-img-div-sm[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n\n    .detail-header[_ngcontent-%COMP%] {\n        border-right: 1px solid gray;\n    }\n\n    .detail-header[_ngcontent-%COMP%]:last-child {\n        border-right: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZ2EtZGV0YWlsL21hbmdhLW92ZXJ2aWV3L21hbmdhLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFFSSwwRUFBMEU7SUFDMUUsaUJBQWlCO0lBQ2pCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsOERBQThEO0lBQ2xFO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21hbmdhLWRldGFpbC9tYW5nYS1vdmVydmlldy9tYW5nYS1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI3RyYWlsZXItYnRuIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2Utb3V0O1xufVxuXG4jdHJhaWxlci1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDA5MTIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuXG59XG5cbiNjbG9zZS10cmFpbGVyLWJ0bjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbiNjbG9zZS10cmFpbGVyLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTkxOTE5O1xufVxuXG4jY2xvc2UtdHJhaWxlci1idG46aG92ZXIgc3BhbiB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5cbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCcgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtbXVsaXNoIHtcbiAgICBmb250LWZhbWlseTogXCJNdWxpc2hcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmRldGFpbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXRhaWwtaGVhZGVyIHNwYW4ge1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcbn1cblxuLmN1c3RvbS1jaGlwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW46IDAgNXB4IDVweCAwO1xuICAgIHBhZGRpbmc6IDNweCA5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wN3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlO1xuICAgIGNvbG9yOiAjYmViZWJlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbn1cblxuLmN1c3RvbS1jaGlwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xufVxuXG4udGhlbWUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSgwLCAwLCAwLCAuNSkpLCB0byhyZ2JhKDIyMCwgOSwgMjAsIDApKSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgyMjAsIDksIDIwLCAwKSk7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnRoZW1lLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi50aGVtZS1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cblxuLnRoZW1lLWl0ZW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMSUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xufVxuXG4uYWlyaW5nIHtcbiAgICBhbmltYXRpb246IGFpcmluZ1Byb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG4uY29tcGxldGVkIHtcbiAgICBhbmltYXRpb246IGNvbXBsZXRlZFByb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG4udXBjb21pbmcge1xuICAgIGFuaW1hdGlvbjogdXBjb21pbmdQcm9ncmVzcyAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cblxuLm1hbmdhLWNhcmQge1xuICAgIGltZyB7XG4gICAgICAgIG9wYWNpdHk6IC45O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG59XG5cbi5tYW5nYS1jYXJkIHAge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBsaW5lYXI7XG59XG5cbi5tYW5nYS1jYXJkOmhvdmVyIHtcbiAgICBpbWcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBjb2xvcjogI2JkMDkxMjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYWlyaW5nUHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY29tcGxldGVkUHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHVwY29taW5nUHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59XG5cbiNzdHJlYW1pbmctZGl2IHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIHJvdy1nYXA6IC41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICNtYW5nYS1pbWctZGl2LWxnIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgICNtYW5nYS1pbWctZGl2LXNtIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kZXRhaWwtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLWhlYWRlcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manga-overview',
                templateUrl: './manga-overview.component.html',
                styleUrls: ['./manga-overview.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_3__["MangaService"] }]; }, { manga: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['manga']
        }], mangaPictures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mangaPictures']
        }], mangaStreamingData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mangaStreamingData']
        }], mangaCharacters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mangaCharacters']
        }], mangaRecommendations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mangaRecommendations']
        }], tabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "WsYK":
/*!*****************************************************!*\
  !*** ./src/app/manga-detail/manga-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: MangaDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaDetailModule", function() { return MangaDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _manga_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manga-detail.component */ "tKln");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _manga_overview_manga_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manga-overview/manga-overview.component */ "QO/R");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");









const routes = [
    { path: '', component: _manga_detail_component__WEBPACK_IMPORTED_MODULE_2__["MangaDetailComponent"] }
];
class MangaDetailModule {
}
MangaDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MangaDetailModule });
MangaDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MangaDetailModule_Factory(t) { return new (t || MangaDetailModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MangaDetailModule, { declarations: [_manga_detail_component__WEBPACK_IMPORTED_MODULE_2__["MangaDetailComponent"], _manga_overview_manga_overview_component__WEBPACK_IMPORTED_MODULE_4__["MangaOverviewComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_manga_detail_component__WEBPACK_IMPORTED_MODULE_2__["MangaDetailComponent"], _manga_overview_manga_overview_component__WEBPACK_IMPORTED_MODULE_4__["MangaOverviewComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tKln":
/*!********************************************************!*\
  !*** ./src/app/manga-detail/manga-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MangaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaDetailComponent", function() { return MangaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "6ffd");
/* harmony import */ var _Services_manga_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/manga.service */ "VlvX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _manga_overview_manga_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manga-overview/manga-overview.component */ "QO/R");
/* harmony import */ var _shared_characters_characters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/characters/characters.component */ "kTcG");
/* harmony import */ var _shared_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/reviews/reviews.component */ "F26y");
/* harmony import */ var _shared_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/recommendation/recommendation.component */ "qtax");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");













const _c0 = function (a0) { return { "active-tab": a0 }; };
function MangaDetailComponent_div_0_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaDetailComponent_div_0_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.selectedTab = ctx_r9.tabs.CHARACTERS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CHARACTERS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.selectedTab === ctx_r2.tabs.CHARACTERS));
} }
function MangaDetailComponent_div_0_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaDetailComponent_div_0_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.selectedTab = ctx_r11.tabs.REVIEWS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REVIEWS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.selectedTab === ctx_r3.tabs.REVIEWS));
} }
function MangaDetailComponent_div_0_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaDetailComponent_div_0_li_12_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.selectedTab = ctx_r13.tabs.RECOMMENDATIONS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RECOMMENDATIONS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.selectedTab === ctx_r4.tabs.RECOMMENDATIONS));
} }
function MangaDetailComponent_div_0_app_manga_overview_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-manga-overview", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function MangaDetailComponent_div_0_app_manga_overview_13_Template_app_manga_overview_tabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.selectedTab = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mangaCharacters", ctx_r5.mangaCharacters.slice(0, 8))("mangaPictures", ctx_r5.mangaPictures)("manga", ctx_r5.manga)("mangaRecommendations", ctx_r5.mangaRecommendations);
} }
function MangaDetailComponent_div_0_app_characters_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-characters", 15);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characters", ctx_r6.mangaCharacters)("images", ctx_r6.manga.images);
} }
function MangaDetailComponent_div_0_app_reviews_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-reviews", 16);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "manga")("images", ctx_r7.manga.images)("reviews", ctx_r7.mangaReviews)("id", ctx_r7.mangaId);
} }
function MangaDetailComponent_div_0_app_recommendations_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-recommendations", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTotalRecommendationsChange", function MangaDetailComponent_div_0_app_recommendations_16_Template_app_recommendations_onTotalRecommendationsChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.totalRecommendations = ctx_r17.totalRecommendations + 12; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "manga")("totalRecommendations", ctx_r8.totalRecommendations)("title", ctx_r8.manga.title_english || ctx_r8.manga.title || ctx_r8.manga.title_japanese)("recommendations", ctx_r8.mangaRecommendations)("images", ctx_r8.manga.images);
} }
function MangaDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaDetailComponent_div_0_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.selectedTab = ctx_r19.tabs.OVERVIEW; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " OVERVIEW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MangaDetailComponent_div_0_li_10_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MangaDetailComponent_div_0_li_11_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MangaDetailComponent_div_0_li_12_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MangaDetailComponent_div_0_app_manga_overview_13_Template, 1, 4, "app-manga-overview", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MangaDetailComponent_div_0_app_characters_14_Template, 1, 2, "app-characters", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MangaDetailComponent_div_0_app_reviews_15_Template, 1, 4, "app-reviews", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MangaDetailComponent_div_0_app_recommendations_16_Template, 1, 5, "app-recommendations", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.manga.title_english || ctx_r0.manga.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.manga.title || ctx_r0.manga.title_japanese, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.selectedTab === ctx_r0.tabs.OVERVIEW));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mangaCharacters.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mangaReviews.data.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mangaRecommendations.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === ctx_r0.tabs.OVERVIEW);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mangaCharacters.length > 0 && ctx_r0.selectedTab === ctx_r0.tabs.CHARACTERS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mangaReviews.data.length > 0 && ctx_r0.selectedTab === ctx_r0.tabs.REVIEWS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mangaRecommendations.length > 0 && ctx_r0.selectedTab === ctx_r0.tabs.RECOMMENDATIONS);
} }
function MangaDetailComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class MangaDetailComponent {
    constructor(mangaService, _route) {
        this.mangaService = mangaService;
        this._route = _route;
        this.tabs = _enums__WEBPACK_IMPORTED_MODULE_3__["TABS"];
        this.loading = false;
        this.manga = null;
        this.mangaPictures = [];
        this.mangaCharacters = [];
        this.mangaRecommendations = [];
        this.mangaReviews = { pagination: {}, data: [] };
        this.mangaId = null;
        this.totalRecommendations = 12;
        this.selectedTab = this.tabs.OVERVIEW;
        this.sub1 = null;
        this.sub2 = null;
    }
    ngOnInit() {
        this.sub1 = this._route.paramMap.subscribe(params => {
            this.resetProperties();
            this.mangaId = params.get('id');
            this.fetchMangaData(this.mangaId);
        });
    }
    ngOnDestroy() {
        if (this.sub1 instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"])
            this.sub1.unsubscribe();
        if (this.sub2 instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"])
            this.sub1.unsubscribe();
        this.resetProperties();
    }
    resetProperties() {
        this.selectedTab = this.tabs.OVERVIEW;
        this.manga = null;
        this.mangaPictures = [];
        this.mangaCharacters = [];
        this.mangaRecommendations = [];
        this.mangaReviews = { pagination: {}, data: [] };
        this.mangaId = null;
        this.totalRecommendations = 12;
    }
    fetchMangaData(mangaId) {
        this.loading = true;
        // Create an array of functions that return promises
        const requests = [
            () => this.getFullManga(mangaId),
            () => this.getMangaCharacters(mangaId),
            () => this.getMangaPictures(mangaId),
            () => this.getMangaReviews(mangaId, '1'),
            () => this.getMangaRecommendations(mangaId)
        ];
        this.sub2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((requestFunc) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(requestFunc()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(333), // Add delay for subsequent requests
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                console.log("Error: ", error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); // Handle error by returning null
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.loading = false)).subscribe(); // Execute the requests
    }
    getFullManga(mangaId) {
        return this.mangaService.getFullMangaById(mangaId)
            .then((response) => {
            this.manga = response.data;
        });
    }
    getMangaCharacters(mangaId) {
        return this.mangaService.getMangaCharacters(mangaId)
            .then((response) => {
            this.mangaCharacters = response.data;
        });
    }
    getMangaRecommendations(mangaId) {
        return this.mangaService.getMangaRecommendations(mangaId)
            .then((response) => {
            this.mangaRecommendations = response.data;
        });
    }
    getMangaPictures(mangaId) {
        return this.mangaService.getMangaPictures(mangaId)
            .then((response) => {
            this.mangaPictures = response.data;
        });
    }
    getMangaReviews(mangaId, pageNo) {
        return this.mangaService.getMangaReviews(mangaId, pageNo)
            .then((response) => {
            const concatReviews = this.mangaReviews.data.concat(response.data);
            this.mangaReviews = { pagination: Object.assign({}, response.pagination), data: concatReviews };
        });
    }
}
MangaDetailComponent.ɵfac = function MangaDetailComponent_Factory(t) { return new (t || MangaDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_manga_service__WEBPACK_IMPORTED_MODULE_4__["MangaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
MangaDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MangaDetailComponent, selectors: [["app-manga-detail"]], decls: 2, vars: 2, consts: [["class", "container-fluid w-full py-3", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "w-full", "py-3"], ["id", "overview-content"], [1, "font-oswald", "tracking-wide", "text-[2rem]", "mb-[4px]"], [1, "font-oswald", "tracking-wider", "text-[#bebebe]", "text-[1rem]"], [1, "mt-4", "rounded-sm"], [1, "flex", "gap-3", "flex-wrap", "py-2", "p-3"], [1, "tracking-wider", "text-[.9rem]", "cursor-pointer", 3, "ngClass", "click"], ["class", "tracking-wider text-[.9rem] cursor-pointer", 3, "ngClass", "click", 4, "ngIf"], [3, "mangaCharacters", "mangaPictures", "manga", "mangaRecommendations", "tabChange", 4, "ngIf"], [3, "characters", "images", 4, "ngIf"], [3, "type", "images", "reviews", "id", 4, "ngIf"], [3, "type", "totalRecommendations", "title", "recommendations", "images", "onTotalRecommendationsChange", 4, "ngIf"], [3, "mangaCharacters", "mangaPictures", "manga", "mangaRecommendations", "tabChange"], [3, "characters", "images"], [3, "type", "images", "reviews", "id"], [3, "type", "totalRecommendations", "title", "recommendations", "images", "onTotalRecommendationsChange"]], template: function MangaDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MangaDetailComponent_div_0_Template, 17, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaDetailComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manga);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _manga_overview_manga_overview_component__WEBPACK_IMPORTED_MODULE_7__["MangaOverviewComponent"], _shared_characters_characters_component__WEBPACK_IMPORTED_MODULE_8__["CharactersComponent"], _shared_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__["ReviewsComponent"], _shared_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_10__["RecommendationComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]], styles: [".font-oswald[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n\nnav[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.active-tab[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n}\n\n@media screen and (min-width: 768px) {\n    #overview-content[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1250px;\n        padding-left: 15px;\n        padding-right: 15px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZ2EtZGV0YWlsL21hbmdhLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBRUksNkVBQTZFO0FBQ2pGOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFuZ2EtZGV0YWlsL21hbmdhLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtb3N3YWxkIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5uYXYge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBmcm9tKHJnYmEoMjIwLCA5LCAyMCwgLjUpKSwgdG8ocmdiYSgyMjAsIDksIDIwLCAwKSkpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjAsIDksIDIwLCAuNSksIHJnYmEoMjIwLCA5LCAyMCwgMCkpO1xufVxuXG5uYXYgdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZS10YWIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICNvdmVydmlldy1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manga-detail',
                templateUrl: './manga-detail.component.html',
                styleUrls: ['./manga-detail.component.css']
            }]
    }], function () { return [{ type: _Services_manga_service__WEBPACK_IMPORTED_MODULE_4__["MangaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=manga-detail-manga-detail-module.js.map