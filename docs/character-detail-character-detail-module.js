(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-detail-character-detail-module"],{

/***/ "0lgV":
/*!*************************************************************!*\
  !*** ./src/app/character-detail/character-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: CharacterDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailModule", function() { return CharacterDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-detail.component */ "VTij");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _anime_roles_anime_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anime-roles/anime-roles.component */ "I8Kf");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _character_overview_character_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-overview/character-overview.component */ "J74V");
/* harmony import */ var _characters_voice_actors_characters_voice_actors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters-voice-actors/characters-voice-actors.component */ "ysE3");
/* harmony import */ var _text_overflow_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text-overflow.directive */ "n9FY");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _manga_roles_manga_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manga-roles/manga-roles.component */ "rnki");













const routes = [
    { path: '', component: _character_detail_component__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailComponent"] }
];
class CharacterDetailModule {
}
CharacterDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CharacterDetailModule });
CharacterDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CharacterDetailModule_Factory(t) { return new (t || CharacterDetailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CharacterDetailModule, { declarations: [_character_detail_component__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailComponent"], _anime_roles_anime_roles_component__WEBPACK_IMPORTED_MODULE_4__["AnimeRolesComponent"], _character_overview_character_overview_component__WEBPACK_IMPORTED_MODULE_6__["CharacterOverviewComponent"], _characters_voice_actors_characters_voice_actors_component__WEBPACK_IMPORTED_MODULE_7__["CharactersVoiceActorsComponent"], _text_overflow_directive__WEBPACK_IMPORTED_MODULE_8__["CheckOverflowDirective2"], _manga_roles_manga_roles_component__WEBPACK_IMPORTED_MODULE_10__["MangaRolesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_character_detail_component__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailComponent"], _anime_roles_anime_roles_component__WEBPACK_IMPORTED_MODULE_4__["AnimeRolesComponent"], _character_overview_character_overview_component__WEBPACK_IMPORTED_MODULE_6__["CharacterOverviewComponent"], _characters_voice_actors_characters_voice_actors_component__WEBPACK_IMPORTED_MODULE_7__["CharactersVoiceActorsComponent"], _text_overflow_directive__WEBPACK_IMPORTED_MODULE_8__["CheckOverflowDirective2"], _manga_roles_manga_roles_component__WEBPACK_IMPORTED_MODULE_10__["MangaRolesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_9__["LoaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "I8Kf":
/*!***********************************************************************!*\
  !*** ./src/app/character-detail/anime-roles/anime-roles.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnimeRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeRolesComponent", function() { return AnimeRolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function AnimeRolesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anime_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", anime_r1.anime.images.webp.large_image_url || anime_r1.anime.images.webp.image_url || anime_r1.anime.images.jpg.image_url || anime_r1.anime.images.jpg.large_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/anime/" + anime_r1.anime.mal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", anime_r1.anime.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Role: ", anime_r1.role || "n/a", "");
} }
class AnimeRolesComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnimeRolesComponent.ɵfac = function AnimeRolesComponent_Factory(t) { return new (t || AnimeRolesComponent)(); };
AnimeRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeRolesComponent, selectors: [["app-anime-roles"]], inputs: { animeRoles: "animeRoles" }, decls: 5, vars: 1, consts: [[1, "mt-2"], [1, "tracking-[1px]", "text-2xl"], [1, "grid", "gap-x-4", "md:grid-cols-2", "lg:grid-cols-3"], ["class", "anime-role-row flex gap-3 items-start h-full overflow-hidden py-[5px] hover:bg-[#202020!important]", 4, "ngFor", "ngForOf"], [1, "anime-role-row", "flex", "gap-3", "items-start", "h-full", "overflow-hidden", "py-[5px]", "hover:bg-[#202020!important]"], [1, "w-full", "max-w-[80px]", "h-[110px]", "rounded-sm", "overflow-hidden"], [1, "anime-img", "w-full", "h-full", 3, "src"], [1, "flex", "flex-col", "gap-1", "overflow-hidden"], [1, "font-mulish", "text-[#aabee4]", "tracking-wider", "mb-0", "cursor-pointer", "hover:text-[#fff]", 2, "font-weight", "600", 3, "routerLink"], [1, "text-sm", "tracking-wider", "text-[#bebebe]", "font-mulish", 2, "font-weight", "600"]], template: function AnimeRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anime Appearances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimeRolesComponent_div_4_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.animeRoles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\np[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n    letter-spacing: .025rem;\n}\n\n.anime-role-row[_ngcontent-%COMP%]:first-child, .anime-role-row[_ngcontent-%COMP%]:nth-child(2), .anime-role-row[_ngcontent-%COMP%]:nth-child(3) {\n    border-top: 1px solid #bebeeb;\n}\n\n.anime-role-row[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #bebeeb;\n}\n\n.anime-role-row[_ngcontent-%COMP%]   .anime-img[_ngcontent-%COMP%] {\n    opacity: .9;\n    transition: opacity .1s linear;\n}\n\n.anime-role-row[_ngcontent-%COMP%]:hover   .anime-img[_ngcontent-%COMP%] {\n    opacity: 1 !important;\n}\n\n@media screen and (min-width: 1024px) {\n    .anime-role-row[_ngcontent-%COMP%]:nth-child(6n + 3), .anime-role-row[_ngcontent-%COMP%]:nth-child(6n + 2), .anime-role-row[_ngcontent-%COMP%]:nth-child(6n + 1) {\n        background-color: #202020 !important;\n    }\n    \n    .anime-role-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:nth-child(6n)):not(:nth-child(6n + 1)):not(:nth-child(6n + 3)) {\n        background-color: transparent !important;\n    }\n}\n\n@media screen and (max-width: 1024px) {\n\n    .anime-role-row[_ngcontent-%COMP%]:nth-child(4n + 2), .anime-role-row[_ngcontent-%COMP%]:nth-child(4n + 1) {\n        background-color: #202020 !important;\n    }\n\n    .anime-role-row[_ngcontent-%COMP%]:nth-child(3) {\n        border-top: 0;\n    }\n\n    .anime-role-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:nth-child(4n)):not(:nth-child(4n + 1)) {\n        background-color: transparent !important;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .anime-role-row[_ngcontent-%COMP%]:nth-child(even) {\n        background-color: transparent !important;\n    }\n\n    .anime-role-row[_ngcontent-%COMP%]:nth-child(even):hover {\n        background-color: #202020 !important;\n    }\n\n    .anime-role-row[_ngcontent-%COMP%]:nth-child(odd) {\n        background-color: #202020 !important;\n    }\n\n    .anime-role-row[_ngcontent-%COMP%]:nth-child(2), .anime-role-row[_ngcontent-%COMP%]:nth-child(3) {\n        border-top: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9hbmltZS1yb2xlcy9hbmltZS1yb2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHVCQUF1QjtBQUMzQjs7QUFFQTs7O0lBR0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFHQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJOzs7UUFHSSxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSx3Q0FBd0M7SUFDNUM7QUFDSjs7QUFHQTs7SUFFSTs7UUFFSSxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksd0NBQXdDO0lBQzVDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdDQUF3QztJQUM1Qzs7SUFFQTtRQUNJLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLG9DQUFvQztJQUN4Qzs7SUFFQTs7UUFFSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXItZGV0YWlsL2FuaW1lLXJvbGVzL2FuaW1lLXJvbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb250LW11bGlzaCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsIHNhbnMtc2VyaWY7XG59XG5cbnAgYiB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMjVyZW07XG59XG5cbi5hbmltZS1yb2xlLXJvdzpmaXJzdC1jaGlsZCxcbi5hbmltZS1yb2xlLXJvdzpudGgtY2hpbGQoMiksXG4uYW5pbWUtcm9sZS1yb3c6bnRoLWNoaWxkKDMpIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2JlYmVlYjtcbn1cblxuLmFuaW1lLXJvbGUtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JlYmVlYjtcbn1cblxuLmFuaW1lLXJvbGUtcm93IC5hbmltZS1pbWcge1xuICAgIG9wYWNpdHk6IC45O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGxpbmVhcjtcbn1cblxuXG4uYW5pbWUtcm9sZS1yb3c6aG92ZXIgLmFuaW1lLWltZyB7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuYW5pbWUtcm9sZS1yb3c6bnRoLWNoaWxkKDZuICsgMyksXG4gICAgLmFuaW1lLXJvbGUtcm93Om50aC1jaGlsZCg2biArIDIpLFxuICAgIC5hbmltZS1yb2xlLXJvdzpudGgtY2hpbGQoNm4gKyAxKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmFuaW1lLXJvbGUtcm93IDpub3QoOm50aC1jaGlsZCg2bikpOm5vdCg6bnRoLWNoaWxkKDZuICsgMSkpOm5vdCg6bnRoLWNoaWxkKDZuICsgMykpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuYW5pbWUtcm9sZS1yb3c6bnRoLWNoaWxkKDRuICsgMiksXG4gICAgLmFuaW1lLXJvbGUtcm93Om50aC1jaGlsZCg0biArIDEpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hbmltZS1yb2xlLXJvdzpudGgtY2hpbGQoMykge1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgIH1cblxuICAgIC5hbmltZS1yb2xlLXJvdyA6bm90KDpudGgtY2hpbGQoNG4pKTpub3QoOm50aC1jaGlsZCg0biArIDEpKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5hbmltZS1yb2xlLXJvdzpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hbmltZS1yb2xlLXJvdzpudGgtY2hpbGQoZXZlbik6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFuaW1lLXJvbGUtcm93Om50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hbmltZS1yb2xlLXJvdzpudGgtY2hpbGQoMiksXG4gICAgLmFuaW1lLXJvbGUtcm93Om50aC1jaGlsZCgzKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-roles',
                templateUrl: './anime-roles.component.html',
                styleUrls: ['./anime-roles.component.css']
            }]
    }], function () { return []; }, { animeRoles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animeRoles']
        }] }); })();


/***/ }),

/***/ "J74V":
/*!*************************************************************************************!*\
  !*** ./src/app/character-detail/character-overview/character-overview.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CharacterOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterOverviewComponent", function() { return CharacterOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _text_overflow_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text-overflow.directive */ "n9FY");
/* harmony import */ var _anime_roles_anime_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../anime-roles/anime-roles.component */ "I8Kf");





function CharacterOverviewComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterOverviewComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onOpenScreenshotModal.emit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SCREESHOTS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterOverviewComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.characterData.about, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CharacterOverviewComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Currently, There is no Information available about ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.characterData == null ? null : ctx_r3.characterData.name);
} }
function CharacterOverviewComponent_app_anime_roles_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-anime-roles", 16);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animeRoles", ctx_r4.characterData.anime);
} }
class CharacterOverviewComponent {
    constructor() {
        this.onOpenScreenshotModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
CharacterOverviewComponent.ɵfac = function CharacterOverviewComponent_Factory(t) { return new (t || CharacterOverviewComponent)(); };
CharacterOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterOverviewComponent, selectors: [["app-character-overview"]], inputs: { characterData: "characterData", characterPicturesLength: "characterPicturesLength" }, outputs: { onOpenScreenshotModal: "onOpenScreenshotModal" }, decls: 13, vars: 6, consts: [[1, "mt-2", "py-3", "content-container"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-y-6", "md:gap-x-8", "md:gap-y-0"], [1, "w-full", "flex", "flex-col", "items-center"], [1, "w-full", "max-w-[13rem]", "h-[18rem]", "overflow-hidden", "rounded-[5px]"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], ["type", "button", "class", "mt-3 bg-[#3e3e3e] p-2 px-3 text-sm rounded-md tracking-[1px] font-bold", 3, "click", 4, "ngIf"], ["checkOverflow", "", 1, "md:col-span-4"], [1, "blur-bottom", "max-h-[500px]"], ["class", "leading-8 tracking-wide font-mulish", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["noDesc", ""], [1, "md:content-container"], [3, "animeRoles", 4, "ngIf"], ["type", "button", 1, "mt-3", "bg-[#3e3e3e]", "p-2", "px-3", "text-sm", "rounded-md", "tracking-[1px]", "font-bold", 3, "click"], [1, "leading-8", "tracking-wide", "font-mulish", 3, "innerHTML"], [1, "leading-8", "tracking-wide", "font-mulish"], [1, "font-mulish", 2, "font-weight", "700"], [3, "animeRoles"]], template: function CharacterOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterOverviewComponent_button_5_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CharacterOverviewComponent_p_8_Template, 1, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterOverviewComponent_ng_template_9_Template, 5, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterOverviewComponent_app_anime_roles_12_Template, 1, 1, "app-anime-roles", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.characterData.images.webp.image_url || ctx.characterData.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.characterData.name + " Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.characterPicturesLength > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.characterData.about == null ? null : ctx.characterData.about.length)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.characterData.anime && ctx.characterData.anime.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _text_overflow_directive__WEBPACK_IMPORTED_MODULE_2__["CheckOverflowDirective2"], _anime_roles_anime_roles_component__WEBPACK_IMPORTED_MODULE_3__["AnimeRolesComponent"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n@media screen and (min-width: 768px) {\n    .content-container[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1250px;\n        padding-left: 15px;\n        padding-right: 15px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n\n.blur-bottom[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), #000 20%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9jaGFyYWN0ZXItb3ZlcnZpZXcvY2hhcmFjdGVyLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBRWhCLCtEQUErRDtBQUNuRSIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3Rlci1kZXRhaWwvY2hhcmFjdGVyLW92ZXJ2aWV3L2NoYXJhY3Rlci1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmZvbnQtbXVsaXNoIHtcbiAgICBmb250LWZhbWlseTogXCJNdWxpc2hcIiwgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG59XG5cbi5ibHVyLWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksICMwMDAgMjAlKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDApLCAjMDAwIDIwJSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character-overview',
                templateUrl: './character-overview.component.html',
                styleUrls: ['./character-overview.component.css']
            }]
    }], function () { return []; }, { characterData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['characterData']
        }], characterPicturesLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['characterPicturesLength']
        }], onOpenScreenshotModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onOpenScreenshotModal']
        }] }); })();


/***/ }),

/***/ "VTij":
/*!****************************************************************!*\
  !*** ./src/app/character-detail/character-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "6ffd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _character_overview_character_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./character-overview/character-overview.component */ "J74V");
/* harmony import */ var _characters_voice_actors_characters_voice_actors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters-voice-actors/characters-voice-actors.component */ "ysE3");
/* harmony import */ var _manga_roles_manga_roles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manga-roles/manga-roles.component */ "rnki");
/* harmony import */ var _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/image-viewer/image-viewer.component */ "JW8G");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");













function CharacterDetailComponent_div_0_h6_4_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", name_r13, "", i_r14 != ctx_r12.characterData.nicknames.length - 1 ? "," : "", " ");
} }
function CharacterDetailComponent_div_0_h6_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Aka: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailComponent_div_0_h6_4_ng_container_1_span_2_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.characterData.nicknames);
} }
function CharacterDetailComponent_div_0_h6_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.characterData.name_kanji, " ");
} }
function CharacterDetailComponent_div_0_h6_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterDetailComponent_div_0_h6_4_ng_container_1_Template, 3, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailComponent_div_0_h6_4_ng_template_2_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.characterData.nicknames.length)("ngIfElse", _r10);
} }
const _c0 = function (a0) { return { "active-tab": a0 }; };
function CharacterDetailComponent_div_0_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterDetailComponent_div_0_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.selectedTab = ctx_r15.tabs.MANGA_ROLES; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MANGA ROLES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.tabs.MANGA_ROLES === ctx_r4.selectedTab));
} }
function CharacterDetailComponent_div_0_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterDetailComponent_div_0_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.selectedTab = ctx_r17.tabs.VOICE_ACTORS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " VOICE ACTORS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.tabs.VOICE_ACTORS === ctx_r5.selectedTab));
} }
function CharacterDetailComponent_div_0_app_character_overview_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-character-overview", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onOpenScreenshotModal", function CharacterDetailComponent_div_0_app_character_overview_11_Template_app_character_overview_onOpenScreenshotModal_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.isScreenshotModalOpen = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characterData", ctx_r6.characterData)("characterPicturesLength", ctx_r6.characterPictures.length);
} }
function CharacterDetailComponent_div_0_app_characters_voice_actors_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-characters-voice-actors", 20);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characterImage", ctx_r7.characterData.images)("characterName", ctx_r7.characterData.name)("voices", ctx_r7.characterData.voices);
} }
function CharacterDetailComponent_div_0_app_manga_roles_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-manga-roles", 21);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characterImage", ctx_r8.characterData.images)("characterName", ctx_r8.characterData.name)("mangaRoles", ctx_r8.characterData.manga);
} }
function CharacterDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CharacterDetailComponent_div_0_h6_4_Template, 4, 2, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterDetailComponent_div_0_Template_li_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.selectedTab = ctx_r21.tabs.OVERVIEW; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " OVERVIEW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CharacterDetailComponent_div_0_li_9_Template, 2, 3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CharacterDetailComponent_div_0_li_10_Template, 2, 3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CharacterDetailComponent_div_0_app_character_overview_11_Template, 1, 2, "app-character-overview", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharacterDetailComponent_div_0_app_characters_voice_actors_12_Template, 1, 3, "app-characters-voice-actors", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CharacterDetailComponent_div_0_app_manga_roles_13_Template, 1, 3, "app-manga-roles", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.characterData == null ? null : ctx_r0.characterData.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.characterData.nicknames.length || ctx_r0.characterData.name_kanji);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.tabs.OVERVIEW === ctx_r0.selectedTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.characterData == null ? null : ctx_r0.characterData.manga == null ? null : ctx_r0.characterData.manga.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.characterData == null ? null : ctx_r0.characterData.voices == null ? null : ctx_r0.characterData.voices.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === ctx_r0.tabs.OVERVIEW && ctx_r0.characterData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === ctx_r0.tabs.VOICE_ACTORS && ctx_r0.characterData.voices.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === ctx_r0.tabs.MANGA_ROLES && ctx_r0.characterData.manga.length);
} }
function CharacterDetailComponent_app_image_viewer_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-image-viewer", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseImageViewer", function CharacterDetailComponent_app_image_viewer_1_Template_app_image_viewer_onCloseImageViewer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.isScreenshotModalOpen = !$event; })("onImageChange", function CharacterDetailComponent_app_image_viewer_1_Template_app_image_viewer_onImageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event === "prev" ? ctx_r25.showPrevImage() : ctx_r25.showNextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r1.characterPictures)("imageNumber", ctx_r1.imageNumber);
} }
function CharacterDetailComponent_app_loader_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class CharacterDetailComponent {
    constructor(_route, _animeService) {
        this._route = _route;
        this._animeService = _animeService;
        this.tabs = _enums__WEBPACK_IMPORTED_MODULE_2__["TABS"];
        this.characterId = null;
        this.sub1 = null;
        this.characterData = null;
        this.characterPictures = [];
        this.imageNumber = 0;
        this.isScreenshotModalOpen = false;
        this.loading = false;
        this.selectedTab = this.tabs.OVERVIEW;
    }
    ngOnInit() {
        this.sub1 = this._route.paramMap.subscribe((param) => {
            this.characterId = param.get("id");
            this.executeApis();
        });
    }
    executeApis() {
        this.loading = true;
        // Create an array of functions that return promises
        const requests = [
            () => this.getCharacterPictures(this.characterId),
            () => this.getFullCharacterDetailsById(this.characterId)
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((requestFunc) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(requestFunc()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(333), // Add delay for subsequent requests
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                console.log("Error: ", error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); // Handle error by returning null
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loading = false)).subscribe(); // Execute the requests
    }
    ngOnDestroy() {
        if (this.sub1 instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"])
            this.sub1.unsubscribe();
        this.characterId = null;
        this.characterData = null;
    }
    getCharacterPictures(id) {
        return this._animeService.getCharacterPictures(id)
            .then((response) => {
            this.characterPictures = response.data;
        })
            .catch((error) => {
            console.log("Error: ", error);
        });
    }
    getFullCharacterDetailsById(id) {
        return this._animeService.getCharacterFullById(id)
            .then((response) => {
            this.characterData = response.data;
            if (this.characterData.about) {
                this.characterData.about = this.characterData.about.replace(/(.*?):/g, '<b>$1:</b>');
                this.characterData.about = this.characterData.about.replace(/\n{3,}/g, '<br>');
                this.characterData.about = this.characterData.about.replace(/\n/g, "<br>");
            }
        })
            .catch((error) => {
            console.log("Error: ", error);
        });
    }
    showNextImage() {
        if (this.imageNumber == this.characterPictures.length - 1)
            this.imageNumber = 0;
        else
            this.imageNumber += 1;
    }
    showPrevImage() {
        if (this.imageNumber == 0)
            this.imageNumber = this.characterPictures.length - 1;
        else
            this.imageNumber -= 1;
    }
}
CharacterDetailComponent.ɵfac = function CharacterDetailComponent_Factory(t) { return new (t || CharacterDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_5__["AnimeService"])); };
CharacterDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterDetailComponent, selectors: [["app-character-detail"]], decls: 3, vars: 3, consts: [["class", "container-fluid w-full py-3", 4, "ngIf"], [3, "images", "imageNumber", "onCloseImageViewer", "onImageChange", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "w-full", "py-3"], ["id", "overview-content"], [1, "tracking-wide", "text-[2rem]", "mb-[4px]"], ["class", "tracking-wider text-[#bebebe] text-[1rem]", 4, "ngIf"], [1, "mt-4", "rounded-sm"], [1, "flex", "gap-3", "flex-wrap", "py-2", "p-3"], [1, "tracking-wider", "text-[.9rem]", "cursor-pointer", 3, "ngClass", "click"], ["class", "tracking-wider text-[.9rem] cursor-pointer", 3, "ngClass", "click", 4, "ngIf"], [3, "characterData", "characterPicturesLength", "onOpenScreenshotModal", 4, "ngIf"], [3, "characterImage", "characterName", "voices", 4, "ngIf"], [3, "characterImage", "characterName", "mangaRoles", 4, "ngIf"], [1, "tracking-wider", "text-[#bebebe]", "text-[1rem]"], [4, "ngIf", "ngIfElse"], ["name_kanji", ""], ["class", "text-[#bebebe] tracking-wider", 4, "ngFor", "ngForOf"], [1, "text-[#bebebe]", "tracking-wider"], [3, "characterData", "characterPicturesLength", "onOpenScreenshotModal"], [3, "characterImage", "characterName", "voices"], [3, "characterImage", "characterName", "mangaRoles"], [3, "images", "imageNumber", "onCloseImageViewer", "onImageChange"]], template: function CharacterDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CharacterDetailComponent_div_0_Template, 14, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterDetailComponent_app_image_viewer_1_Template, 1, 2, "app-image-viewer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterDetailComponent_app_loader_2_Template, 1, 0, "app-loader", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.characterData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isScreenshotModalOpen && ctx.selectedTab === ctx.tabs.OVERVIEW);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _character_overview_character_overview_component__WEBPACK_IMPORTED_MODULE_7__["CharacterOverviewComponent"], _characters_voice_actors_characters_voice_actors_component__WEBPACK_IMPORTED_MODULE_8__["CharactersVoiceActorsComponent"], _manga_roles_manga_roles_component__WEBPACK_IMPORTED_MODULE_9__["MangaRolesComponent"], _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__["ImageViewerComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n\nnav[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.active-tab[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n@media screen and (min-width: 768px) {\n    #overview-content[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1250px;\n        padding-left: 15px;\n        padding-right: 15px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9jaGFyYWN0ZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFFSSw2RUFBNkU7QUFDakY7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXItZGV0YWlsL2NoYXJhY3Rlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbm5hdiB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSgyMjAsIDksIDIwLCAuNSkpLCB0byhyZ2JhKDIyMCwgOSwgMjAsIDApKSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyMCwgOSwgMjAsIC41KSwgcmdiYSgyMjAsIDksIDIwLCAwKSk7XG59XG5cbm5hdiB1bCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlLXRhYiB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG59XG5cbi5mb250LW11bGlzaCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI292ZXJ2aWV3LWNvbnRlbnQsIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character-detail',
                templateUrl: './character-detail.component.html',
                styleUrls: ['./character-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_5__["AnimeService"] }]; }, null); })();


/***/ }),

/***/ "n9FY":
/*!*************************************************************!*\
  !*** ./src/app/character-detail/text-overflow.directive.ts ***!
  \*************************************************************/
/*! exports provided: CheckOverflowDirective2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOverflowDirective2", function() { return CheckOverflowDirective2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CheckOverflowDirective2 {
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
            this.renderer.removeClass(element, 'max-h-[500px]');
            this.readMoreButton.innerText = 'Read Less';
        }
        else {
            this.renderer.addClass(element, 'blur-bottom');
            this.renderer.addClass(element, 'max-h-[500px]');
            this.readMoreButton.innerText = 'Read More';
        }
    }
}
CheckOverflowDirective2.ɵfac = function CheckOverflowDirective2_Factory(t) { return new (t || CheckOverflowDirective2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CheckOverflowDirective2.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CheckOverflowDirective2, selectors: [["", "checkOverflow", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOverflowDirective2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[checkOverflow]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "rnki":
/*!***********************************************************************!*\
  !*** ./src/app/character-detail/manga-roles/manga-roles.component.ts ***!
  \***********************************************************************/
/*! exports provided: MangaRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaRolesComponent", function() { return MangaRolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MangaRolesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const manga_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (manga_r1.manga.images == null ? null : manga_r1.manga.images.webp == null ? null : manga_r1.manga.images.webp.large_image_url) || (manga_r1.manga.images == null ? null : manga_r1.manga.images.jpg == null ? null : manga_r1.manga.images.jpg.large_image_url) || (manga_r1.manga.images == null ? null : manga_r1.manga.images.webp == null ? null : manga_r1.manga.images.webp.image_url) || (manga_r1.manga.images == null ? null : manga_r1.manga.images.jpg == null ? null : manga_r1.manga.images.jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/manga/" + (manga_r1 == null ? null : manga_r1.manga == null ? null : manga_r1.manga.mal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", manga_r1.manga.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Role:\u00A0", manga_r1.role || "n/a", " ");
} }
class MangaRolesComponent {
    constructor() {
        this.mangaRoles = null;
        this.characterImage = null;
        this.characterName = null;
    }
    ngOnInit() {
        console.log(this.mangaRoles);
    }
}
MangaRolesComponent.ɵfac = function MangaRolesComponent_Factory(t) { return new (t || MangaRolesComponent)(); };
MangaRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MangaRolesComponent, selectors: [["app-manga-roles"]], inputs: { mangaRoles: "mangaRoles", characterImage: "characterImage", characterName: "characterName" }, decls: 13, vars: 3, consts: [[1, "mt-2", "py-3", "content-container"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-y-6", "md:gap-x-8", "md:gap-y-0"], [1, "w-full", "flex", "flex-col", "items-center"], [1, "w-full", "max-w-[12rem]", "h-full", "max-h-[17rem]", "overflow-hidden", "rounded-[5px]"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "md:col-span-4"], [1, "tracking-wider"], [1, "text-[#ffd600]"], [1, "mt-3", "grid", "gap-3", "sm:grid-cols-2", "md:grid-cols-3"], ["class", "flex gap-2 items-stretch bg-[#313131] rounded-[.25rem] overflow-hidden", "style", "box-shadow: -2px 3px 3px rgba(0,0,0,.4);", 4, "ngFor", "ngForOf"], [1, "flex", "gap-2", "items-stretch", "bg-[#313131]", "rounded-[.25rem]", "overflow-hidden", 2, "box-shadow", "-2px 3px 3px rgba(0,0,0,.4)"], [1, "w-full", "max-w-[30%]", "h-[131px]"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "flex-col", "p-1", "flex-1", "overflow-hidden"], [1, "text-[#aabee4]", "w-max", "tracking-wider", "mb-0", "font-mulish", "hover:text-[#fff]", 2, "font-weight", "600", "cursor", "pointer!important", 3, "routerLink"], [1, "font-bold", "mb-1", "tracking-wider", "text-[13px]", "font-mulish"]], template: function MangaRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dive into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Manga Journey! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MangaRolesComponent_div_12_Template, 8, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.characterImage.webp.image_url || ctx.characterImage.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.characterName + "'s" || false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mangaRoles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n@media screen and (min-width: 768px) {\n    .content-container[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1250px;\n        padding-left: 15px;\n        padding-right: 15px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9tYW5nYS1yb2xlcy9tYW5nYS1yb2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9tYW5nYS1yb2xlcy9tYW5nYS1yb2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9udC1tdWxpc2gge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11bGlzaFwiLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MangaRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manga-roles',
                templateUrl: './manga-roles.component.html',
                styleUrls: ['./manga-roles.component.css']
            }]
    }], function () { return []; }, { mangaRoles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mangaRoles']
        }], characterImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['characterImage']
        }], characterName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['characterName']
        }] }); })();


/***/ }),

/***/ "ysE3":
/*!***********************************************************************************************!*\
  !*** ./src/app/character-detail/characters-voice-actors/characters-voice-actors.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CharactersVoiceActorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersVoiceActorsComponent", function() { return CharactersVoiceActorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function CharactersVoiceActorsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (actor_r1.person.images == null ? null : actor_r1.person.images.webp == null ? null : actor_r1.person.images.webp.image_url) || (actor_r1.person.images == null ? null : actor_r1.person.images.jpg == null ? null : actor_r1.person.images.jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/people/" + actor_r1.person.mal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", actor_r1.person.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Language:\u00A0", actor_r1.language || "n/a", " ");
} }
class CharactersVoiceActorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CharactersVoiceActorsComponent.ɵfac = function CharactersVoiceActorsComponent_Factory(t) { return new (t || CharactersVoiceActorsComponent)(); };
CharactersVoiceActorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharactersVoiceActorsComponent, selectors: [["app-characters-voice-actors"]], inputs: { characterImage: "characterImage", characterName: "characterName", voices: "voices" }, decls: 13, vars: 3, consts: [[1, "mt-2", "py-3", "content-container"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-y-6", "md:gap-x-8", "md:gap-y-0"], [1, "w-full", "flex", "flex-col", "items-center"], [1, "w-full", "max-w-[12rem]", "h-full", "max-h-[17rem]", "overflow-hidden", "rounded-[5px]"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "md:col-span-4"], [1, "tracking-wider"], [1, "text-[#ffd600]"], [1, "mt-3", "grid", "gap-3", "sm:grid-cols-2", "md:grid-cols-3"], ["class", "flex gap-2 items-stretch bg-[#313131] rounded-[.25rem] overflow-hidden", "style", "box-shadow: -2px 3px 3px rgba(0,0,0,.4);", 4, "ngFor", "ngForOf"], [1, "flex", "gap-2", "items-stretch", "bg-[#313131]", "rounded-[.25rem]", "overflow-hidden", 2, "box-shadow", "-2px 3px 3px rgba(0,0,0,.4)"], [1, "w-full", "max-w-[30%]", "h-[131px]"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "flex-col", "p-1", "flex-1", "overflow-hidden"], [1, "text-[#aabee4]", "w-max", "tracking-wider", "mb-0", "font-mulish", "hover:text-[#fff]", 2, "font-weight", "600", "cursor", "pointer!important", 3, "routerLink"], [1, "font-bold", "mb-1", "tracking-wider", "text-[13px]", "font-mulish"]], template: function CharactersVoiceActorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Who Brings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " to Life? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CharactersVoiceActorsComponent_div_12_Template, 8, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.characterImage.webp.image_url || ctx.characterImage.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.characterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.voices);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n@media screen and (min-width: 768px) {\n    .content-container[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1250px;\n        padding-left: 15px;\n        padding-right: 15px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9jaGFyYWN0ZXJzLXZvaWNlLWFjdG9ycy9jaGFyYWN0ZXJzLXZvaWNlLWFjdG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVyLWRldGFpbC9jaGFyYWN0ZXJzLXZvaWNlLWFjdG9ycy9jaGFyYWN0ZXJzLXZvaWNlLWFjdG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9udC1tdWxpc2gge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11bGlzaFwiLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharactersVoiceActorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-characters-voice-actors',
                templateUrl: './characters-voice-actors.component.html',
                styleUrls: ['./characters-voice-actors.component.css']
            }]
    }], function () { return []; }, { characterImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['characterImage']
        }], characterName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['characterName']
        }], voices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['voices']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=character-detail-character-detail-module.js.map