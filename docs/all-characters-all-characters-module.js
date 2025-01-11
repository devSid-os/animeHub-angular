(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-characters-all-characters-module"],{

/***/ "+gJ/":
/*!*********************************************************!*\
  !*** ./src/app/all-characters/all-characters.module.ts ***!
  \*********************************************************/
/*! exports provided: AllCharactersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCharactersModule", function() { return AllCharactersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _all_characters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-characters.component */ "jzq4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");







const routes = [
    { path: "", component: _all_characters_component__WEBPACK_IMPORTED_MODULE_2__["AllCharactersComponent"] }
];
class AllCharactersModule {
}
AllCharactersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AllCharactersModule });
AllCharactersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AllCharactersModule_Factory(t) { return new (t || AllCharactersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AllCharactersModule, { declarations: [_all_characters_component__WEBPACK_IMPORTED_MODULE_2__["AllCharactersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllCharactersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_all_characters_component__WEBPACK_IMPORTED_MODULE_2__["AllCharactersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_4__["LoaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jzq4":
/*!************************************************************!*\
  !*** ./src/app/all-characters/all-characters.component.ts ***!
  \************************************************************/
/*! exports provided: AllCharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCharactersComponent", function() { return AllCharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");






const _c0 = ["modal"];
function AllCharactersComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCharactersComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clearSearchQuery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllCharactersComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sorry, No Results Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AllCharactersComponent_ng_container_10_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCharactersComponent_ng_container_10_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const character_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.openModal(character_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllCharactersComponent_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllCharactersComponent_ng_container_10_div_1_button_6_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", character_r11.images.webp.image_url || character_r11.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/character/" + character_r11.mal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", character_r11.about);
} }
function AllCharactersComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllCharactersComponent_ng_container_10_div_1_Template, 7, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.characters);
} }
function AllCharactersComponent_ng_container_11_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCharactersComponent_ng_container_11_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const character_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.openModal(character_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllCharactersComponent_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllCharactersComponent_ng_container_11_div_1_button_6_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", character_r17.images.webp.image_url || character_r17.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/character/" + character_r17.mal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r17.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", character_r17.about);
} }
function AllCharactersComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllCharactersComponent_ng_container_11_div_1_Template, 7, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.searchedCharacters);
} }
function AllCharactersComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCharactersComponent_ng_container_13_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.getMoreCharacters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View More Characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllCharactersComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllCharactersComponent_ng_container_13_div_1_Template, 5, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.characterListPagination && ctx_r4.characterListPagination.has_next_page);
} }
function AllCharactersComponent_ng_container_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCharactersComponent_ng_container_14_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.getMoreCharacters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View More Characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllCharactersComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllCharactersComponent_ng_container_14_div_1_Template, 5, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.searchedCharacterListPagination && ctx_r5.searchedCharacterListPagination.has_next_page);
} }
function AllCharactersComponent_div_15_p_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const nickName_r31 = ctx.$implicit;
    const nickNameIndex_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", nickName_r31 + (nickNameIndex_r32 != ctx_r30.modalData.nicknames.length - 1 ? "," : ""), " ");
} }
function AllCharactersComponent_div_15_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Also Known as:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllCharactersComponent_div_15_p_10_ng_container_3_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r29.modalData.nicknames);
} }
function AllCharactersComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCharactersComponent_div_15_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCharactersComponent_div_15_Template_div_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AllCharactersComponent_div_15_p_10_Template, 4, 1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.modalData.images.webp.image_url || ctx_r6.modalData.images.jpg.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.modalData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.modalData.nicknames && ctx_r6.modalData.nicknames.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r6.modalData.about, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AllCharactersComponent_app_loader_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AllCharactersComponent {
    constructor(_animeService, _renderer2) {
        this._animeService = _animeService;
        this._renderer2 = _renderer2;
        this.isModalOpen = false;
        this.loading = false;
        this.characters = [];
        this.characterListPagination = null;
        this.searchedCharacters = [];
        this.searchedCharacterListPagination = null;
        this.searchQuery = '';
        this.searchInterval = null;
        this.modalData = null;
    }
    ngOnInit() {
        this.getCharactersList({ order_by: 'favorites', sort: 'desc', page: 1, limit: 24 }, false, false);
    }
    openModal(data) {
        this.modalData = data;
        this.modalData.about = this.modalData.about.replace(/\n{2,}/g, '<br />');
        this.modalData.about = this.modalData.about.replace(/\n/g, "<br />");
        this.isModalOpen = true;
        setTimeout(() => {
            this._renderer2.setStyle(this.modal.nativeElement, 'transform', 'scale(1)');
        }, 1);
    }
    closeModal() {
        this._renderer2.setStyle(this.modal.nativeElement, 'transform', 'scale(0)');
        setTimeout(() => {
            this.isModalOpen = false;
            this.modalData = null;
        }, 150);
    }
    getMoreCharacters() {
        if (!this.searchQuery.length)
            this.getCharactersList({ order_by: 'favorites', sort: 'desc', page: (this.characterListPagination.current_page + 1), limit: 24 }, false, false);
        else
            this.getCharactersList({ q: this.searchQuery, limit: 24, page: (this.searchedCharacterListPagination.current_page + 1) }, true, true);
    }
    searchCharacters(event) {
        this.searchQuery = event.target.value;
        clearTimeout(this.searchInterval);
        if (this.searchQuery.length > 0) {
            this.searchInterval = setTimeout(() => {
                this.getCharactersList({ q: this.searchQuery, limit: 24 }, true, false);
            }, 500);
        }
        else {
            this.clearSearchQuery();
        }
    }
    clearSearchQuery() {
        this.searchQuery = '';
        this.searchedCharacters = [];
        this.searchedCharacterListPagination = null;
    }
    getCharactersList(filters, isSearched = false, getMoreSearched = false) {
        this.loading = true;
        this._animeService.getAllCharacters(filters)
            .then((response) => {
            if (!isSearched) {
                this.characters = this.characters.concat(response.data);
                this.characterListPagination = response.pagination;
            }
            else {
                if (!getMoreSearched)
                    this.searchedCharacters = response.data;
                else {
                    this.searchedCharacters = this.searchedCharacters.concat(response.data);
                    // console.log("here")
                }
                this.searchedCharacterListPagination = response.pagination;
            }
            this.loading = false;
        })
            .catch((error) => {
            console.log("Error: ", error);
            this.loading = false;
        });
    }
}
AllCharactersComponent.ɵfac = function AllCharactersComponent_Factory(t) { return new (t || AllCharactersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_1__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AllCharactersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllCharactersComponent, selectors: [["app-all-characters"]], viewQuery: function AllCharactersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 17, vars: 11, consts: [[1, "py-3"], [1, "custom-container"], [1, "relative", "search-container", "bg-[#303134]", "p-2", "px-3", "flex", "items-center", "gap-2", "rounded-3xl", "mx-auto", "sm:w-[85%]", "md:w-1/3", 2, "padding-right", "30px!important"], [1, "search-icon", "material-icons-outlined", "text-[#bebebe]", "select-none"], ["type", "text", "spellcheck", "false", "placeholder", "Search Characters", 1, "flex-1", "bg-transparent", "font-mulish", "tracking-wider", "text-sm", "focus:outline-none", "hover:cursor-text", 3, "value", "input"], ["type", "button", "style", "transform: translateY(-50%);", "class", "absolute right-3 top-[50%] text-[1.8rem] text-white hover:text-[red!important]", 3, "click", 4, "ngIf"], [1, "mt-8", "grid", "gap-y-2", "sm:gap-x-4", "sm:grid-cols-2", "md:grid-cols-3"], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "z-10 bg-[rgba(0,0,0,.7)] w-full h-full fixed top-0 left-0", 4, "ngIf"], ["type", "button", 1, "absolute", "right-3", "top-[50%]", "text-[1.8rem]", "text-white", "hover:text-[red!important]", 2, "transform", "translateY(-50%)", 3, "click"], [1, "col-span-8"], [1, "font-mulish", "tracking-wider", "text-md", "text-center", "text-[#bebebe]", "md:text-lg"], ["class", "character-item relative group flex items-center gap-3 pb-1 border-b-[1px] border-[#322f2f] hover:bg-[rgba(0,0,0,.6)]", 4, "ngFor", "ngForOf"], [1, "character-item", "relative", "group", "flex", "items-center", "gap-3", "pb-1", "border-b-[1px]", "border-[#322f2f]", "hover:bg-[rgba(0,0,0,.6)]"], [1, "transition-colors", "duration-100", "w-[20%]", "h-[85px]", "bg-[#202020]", "shadow-md", "rounded-sm", "overflow-hidden", "group-hover:bg-[#fff]"], ["loading", "lazy", 1, "w-full", "h-full", "object-contain", 3, "src"], ["clas", "flex-1"], [1, "font-mulish", "text-lg", "font-[600]", "text-white", "tracking-wider", "w-max", "hover:text-[#aabee4!important]", 3, "routerLink"], ["type", "button", "class", "material-icons-outlined select-none text-[#aabee4] pr-2 absolute top-[50%] -translate-y-[50%] right-0 hover:text-[#c1cad9]", 3, "click", 4, "ngIf"], ["type", "button", 1, "material-icons-outlined", "select-none", "text-[#aabee4]", "pr-2", "absolute", "top-[50%]", "-translate-y-[50%]", "right-0", "hover:text-[#c1cad9]", 3, "click"], ["class", "mt-4 text-center flex items-center gap-3", 4, "ngIf"], [1, "mt-4", "text-center", "flex", "items-center", "gap-3"], [1, "h-[1px]", "flex-1", "bg-[#322f2f]"], [1, "tracking-wider", "bg-[#3e3e3e]", "p-2", "px-3", "rounded-md", "mx-auto", 3, "click"], [1, "z-10", "bg-[rgba(0,0,0,.7)]", "w-full", "h-full", "fixed", "top-0", "left-0"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", 3, "click"], [1, "relative", "character-modal", "border-4", "border-white", "rounded-sm", "bg-[#191919]", 2, "transform", "scale(0)"], ["modal", ""], [1, "hide-scrollbar", "p-3", "flex", "flex-col", "items-center", "gap-6", "overflow-auto", "max-w-[90vw]", "max-h-[80vh]", "sm:max-h-[90vh]", "sm:max-w-[80vw]", "md:max-w-[55vw]", "lg:max-w-[45vw]", 3, "click"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "gap-2"], [1, "w-max", "h-max", "max-h-[400px]", "rounded-sm", "mt-2", 3, "src"], [1, "text-2xl", "tracking-wider"], ["class", "font-mulish tracking-wider", 4, "ngIf"], [1, "mb-0", "font-mulish", "tracking-wider", "text-justify", 2, "line-height", "2rem", 3, "innerHTML"], ["type", "button", 1, "border-2", "border-white", "absolute", "-top-[15px]", "-right-[15px]", "text-white", "bg-black", "flex", "w-[25px]", "h-[25px]", "rounded-full", "items-center", "justify-center", 2, "font-size", "1.8rem"], [1, "-mt-[1px]"], [1, "font-mulish", "tracking-wider"], [1, "font-mulish", "font-bold"], [4, "ngFor", "ngForOf"]], template: function AllCharactersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AllCharactersComponent_Template_input_input_5_listener($event) { return ctx.searchCharacters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllCharactersComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllCharactersComponent_ng_container_8_Template, 4, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AllCharactersComponent_ng_container_10_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AllCharactersComponent_ng_container_11_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AllCharactersComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AllCharactersComponent_ng_container_14_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AllCharactersComponent_div_15_Template, 15, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllCharactersComponent_app_loader_16_Template, 1, 0, "app-loader", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchQuery.length && !ctx.searchedCharacters.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.searchQuery.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.searchQuery.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    cursor: pointer;\n    transition: color .15s linear;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n.material-icons-outlined[_ngcontent-%COMP%] {\n    font-family: 'Material Icons Outlined' !important;\n}\n\n.search-container[_ngcontent-%COMP%]:focus-within   .search-icon[_ngcontent-%COMP%] {\n    color: #fff;\n}\n\n.character-item[_ngcontent-%COMP%] {\n    transition: background-color .1s linear;\n}\n\n.character-modal[_ngcontent-%COMP%] {\n    transition: transform .15s ease-in!important;\n}\n\n.hide-scrollbar[_ngcontent-%COMP%] {\n    overflow: scroll;\n    scrollbar-width: none; \n    -ms-overflow-style: none; \n}\n\n.hide-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none; \n}\n\n@media screen and (min-width: 640px) {\n    .custom-container[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1250px;\n        padding-left: 15px;\n        padding-right: 15px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLWNoYXJhY3RlcnMvYWxsLWNoYXJhY3RlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCLEVBQUUsWUFBWTtJQUNuQyx3QkFBd0IsRUFBRSwwQkFBMEI7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0FBQ3pDOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWxsLWNoYXJhY3RlcnMvYWxsLWNoYXJhY3RlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgbGluZWFyO1xufVxuXG4uZm9udC1tdWxpc2gge1xuICAgIGZvbnQtZmFtaWx5OiBcIk11bGlzaFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyOmZvY3VzLXdpdGhpbiAuc2VhcmNoLWljb24ge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY2hhcmFjdGVyLWl0ZW0ge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzIGxpbmVhcjtcbn1cblxuLmNoYXJhY3Rlci1tb2RhbCB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZS1pbiFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlLXNjcm9sbGJhciB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xufVxuXG4uaGlkZS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xuICAgIC5jdXN0b20tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllCharactersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-characters',
                templateUrl: './all-characters.component.html',
                styleUrls: ['./all-characters.component.css']
            }]
    }], function () { return [{ type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_1__["AnimeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modal']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=all-characters-all-characters-module.js.map