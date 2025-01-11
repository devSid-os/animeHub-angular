(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anime-detail-anime-detail-module"],{

/***/ "A5z7":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
  \***********************************************************************/
/*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_REMOVE, MAT_CHIP_TRAILING_ICON, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return MAT_CHIPS_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_AVATAR", function() { return MAT_CHIP_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_REMOVE", function() { return MAT_CHIP_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_TRAILING_ICON", function() { return MAT_CHIP_TRAILING_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return MatChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return MatChipAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return MatChipInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return MatChipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return MatChipListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return MatChipRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return MatChipSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return MatChipTrailingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return MatChipsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Event object emitted by MatChip when selected or deselected. */






const _c0 = ["*"];
class MatChipSelectionChange {
    constructor(
    /** Reference to the chip that emitted the event. */
    source, 
    /** Whether the chip that emitted the event is selected. */
    selected, 
    /** Whether the selection change was a result of a user interaction. */
    isUserInput = false) {
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
}
/**
 * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
 * alternative token to the actual `MatChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipRemove');
/**
 * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
 * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipAvatar');
/**
 * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
 * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipTrailingIcon');
// Boilerplate for applying mixins to MatChip.
/** @docs-private */
class MatChipBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
/**
 * Dummy directive to add CSS class to chip avatar.
 * @docs-private
 */
class MatChipAvatar {
}
MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) { return new (t || MatChipAvatar)(); };
MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipAvatar, selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]], hostAttrs: [1, "mat-chip-avatar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'mat-chip-avatar, [matChipAvatar]',
                host: { 'class': 'mat-chip-avatar' },
                providers: [{ provide: MAT_CHIP_AVATAR, useExisting: MatChipAvatar }]
            }]
    }], null, null); })();
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * @docs-private
 */
class MatChipTrailingIcon {
}
MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) { return new (t || MatChipTrailingIcon)(); };
MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipTrailingIcon, selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]], hostAttrs: [1, "mat-chip-trailing-icon"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                host: { 'class': 'mat-chip-trailing-icon' },
                providers: [{ provide: MAT_CHIP_TRAILING_ICON, useExisting: MatChipTrailingIcon }]
            }]
    }], null, null); })();
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
class MatChip extends _MatChipMixinBase {
    constructor(_elementRef, _ngZone, platform, globalRippleOptions, 
    // @breaking-change 8.0.0 `animationMode` parameter to become required.
    animationMode, 
    // @breaking-change 9.0.0 `_changeDetectorRef` parameter to become required.
    _changeDetectorRef, tabIndex, 
    // @breaking-change 11.0.0 `_document` parameter to become required.
    _document) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /** Whether the chip has focus. */
        this._hasFocus = false;
        /** Whether the chip list is selectable */
        this.chipListSelectable = true;
        /** Whether the chip list is in multi-selection mode. */
        this._chipListMultiple = false;
        /** Whether the chip list as a whole is disabled. */
        this._chipListDisabled = false;
        this._selected = false;
        this._selectable = true;
        this._disabled = false;
        this._removable = true;
        /** Emits when the chip is focused. */
        this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Emits when the chip is blured. */
        this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Emitted when the chip is selected or deselected. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emitted when the chip is destroyed. */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emitted when a chip is to be removed. */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._addHostClassName();
        // Dynamically create the ripple target, append it within the chip, and use it as the
        // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
        // the proper styles.
        this._chipRippleTarget = (_document || document).createElement('div');
        this._chipRippleTarget.classList.add('mat-chip-ripple');
        this._elementRef.nativeElement.appendChild(this._chipRippleTarget);
        this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](this, _ngZone, this._chipRippleTarget, platform);
        this._chipRipple.setupTriggerEvents(_elementRef);
        this.rippleConfig = globalRippleOptions || {};
        this._animationsDisabled = animationMode === 'NoopAnimations';
        this.tabIndex = tabIndex != null ? (parseInt(tabIndex) || -1) : -1;
    }
    /**
     * Whether ripples are disabled on interaction
     * @docs-private
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
    }
    /** Whether the chip is selected. */
    get selected() { return this._selected; }
    set selected(value) {
        const coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (coercedValue !== this._selected) {
            this._selected = coercedValue;
            this._dispatchSelectionChange();
        }
    }
    /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
    get value() {
        return this._value !== undefined
            ? this._value
            : this._elementRef.nativeElement.textContent;
    }
    set value(value) { this._value = value; }
    /**
     * Whether or not the chip is selectable. When a chip is not selectable,
     * changes to its selected state are always ignored. By default a chip is
     * selectable, and it becomes non-selectable if its parent chip list is
     * not selectable.
     */
    get selectable() { return this._selectable && this.chipListSelectable; }
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /** Whether the chip is disabled. */
    get disabled() { return this._chipListDisabled || this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     */
    get removable() { return this._removable; }
    set removable(value) {
        this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /** The ARIA selected applied to the chip. */
    get ariaSelected() {
        // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
        // it adds noise to NVDA users where "not selected" will be read out for each chip.
        return this.selectable && (this._chipListMultiple || this.selected) ?
            this.selected.toString() : null;
    }
    _addHostClassName() {
        const basicChipAttrName = 'mat-basic-chip';
        const element = this._elementRef.nativeElement;
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    }
    ngOnDestroy() {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    }
    /** Selects the chip. */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    }
    /** Deselects the chip. */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    }
    /** Select this chip and emit selected event */
    selectViaInteraction() {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
            this._markForCheck();
        }
    }
    /** Toggles the current selected state of this chip. */
    toggleSelected(isUserInput = false) {
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        this._markForCheck();
        return this.selected;
    }
    /** Allows for programmatic focusing of the chip. */
    focus() {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    }
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    remove() {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    }
    /** Handles click events on the chip. */
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    }
    /** Handle custom key presses. */
    _handleKeydown(event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    }
    _blur() {
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(() => {
            this._ngZone.run(() => {
                this._hasFocus = false;
                this._onBlur.next({ chip: this });
            });
        });
    }
    _dispatchSelectionChange(isUserInput = false) {
        this.selectionChange.emit({
            source: this,
            isUserInput,
            selected: this._selected
        });
    }
    _markForCheck() {
        // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
    }
}
MatChip.ɵfac = function MatChip_Factory(t) { return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChip, selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]], contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
    } }, hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"], hostVars: 14, hostBindings: function MatChip_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) { return ctx._handleClick($event); })("keydown", function MatChip_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function MatChip_focus_HostBindingHandler() { return ctx.focus(); })("blur", function MatChip_blur_HostBindingHandler() { return ctx._blur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
    } }, inputs: { color: "color", disableRipple: "disableRipple", tabIndex: "tabIndex", selected: "selected", value: "value", selectable: "selectable", disabled: "disabled", removable: "removable" }, outputs: { selectionChange: "selectionChange", destroyed: "destroyed", removed: "removed" }, exportAs: ["matChip"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatChip.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
MatChip.propDecorators = {
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MAT_CHIP_AVATAR,] }],
    trailingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MAT_CHIP_TRAILING_ICON,] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MAT_CHIP_REMOVE,] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]`,
                inputs: ['color', 'disableRipple', 'tabIndex'],
                exportAs: 'matChip',
                host: {
                    'class': 'mat-chip mat-focus-indicator',
                    '[attr.tabindex]': 'disabled ? null : tabIndex',
                    'role': 'option',
                    '[class.mat-chip-selected]': 'selected',
                    '[class.mat-chip-with-avatar]': 'avatar',
                    '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                    '[class.mat-chip-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationsDisabled',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-selected]': 'ariaSelected',
                    '(click)': '_handleClick($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_AVATAR]
        }], trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_TRAILING_ICON]
        }], removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_REMOVE]
        }] }); })();
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
class MatChipRemove {
    constructor(_parentChip, 
    // @breaking-change 11.0.0 `elementRef` parameter to be made required.
    elementRef) {
        this._parentChip = _parentChip;
        // @breaking-change 11.0.0 Remove null check for `elementRef`.
        if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
        }
    }
    /** Calls the parent chip's public `remove()` method if applicable. */
    _handleClick(event) {
        const parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    }
}
MatChipRemove.ɵfac = function MatChipRemove_Factory(t) { return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipRemove, selectors: [["", "matChipRemove", ""]], hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"], hostBindings: function MatChipRemove_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }])] });
MatChipRemove.ctorParameters = () => [
    { type: MatChip },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipRemove, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[matChipRemove]',
                host: {
                    'class': 'mat-chip-remove mat-chip-trailing-icon',
                    '(click)': '_handleClick($event)'
                },
                providers: [{ provide: MAT_CHIP_REMOVE, useExisting: MatChipRemove }]
            }]
    }], function () { return [{ type: MatChip }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for the chips module. */
const MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatChipList.
/** @docs-private */
class MatChipListBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
let nextUniqueId = 0;
/** Change event object that is emitted when the chip list value has changed. */
class MatChipListChange {
    constructor(
    /** Chip list that emitted the event. */
    source, 
    /** Value of the chip list when the event was emitted. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
class MatChipList extends _MatChipListMixinBase {
    constructor(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, 
    /** @docs-private */
    ngControl) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        this._lastDestroyedChipIndex = null;
        /** Subject that emits when the component has been destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Uid of the chip list */
        this._uid = `mat-chip-list-${nextUniqueId++}`;
        /** Tab index for the chip list. */
        this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        this._userTabIndex = null;
        /** Function when touched */
        this._onTouched = () => { };
        /** Function when changed */
        this._onChange = () => { };
        this._multiple = false;
        this._compareWith = (o1, o2) => o1 === o2;
        this._required = false;
        this._disabled = false;
        /** Orientation of the chip list. */
        this.ariaOrientation = 'horizontal';
        this._selectable = true;
        /** Event emitted when the selected chip list value has been changed by the user. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    /** The array of selected chips inside chip list. */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The ARIA role applied to the chip list. */
    get role() { return this.empty ? null : 'listbox'; }
    /** Whether the user should be allowed to select multiple chips. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() { return this._value; }
    set value(value) {
        this.writeValue(value);
        this._value = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() {
        return this._chipInput ? this._chipInput.id : this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() { return this._required; }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get placeholder() {
        return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /** Whether any chips or the matChipInput inside of this chip-list has focus. */
    get focused() {
        return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
        return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() { return !this.empty || this.focused; }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() { return this.ngControl ? !!this.ngControl.disabled : this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._syncChipsState();
    }
    /**
     * Whether or not this chip list is selectable. When a chip list is not selectable,
     * the selected states for all the chips inside the chip list are always ignored.
     */
    get selectable() { return this._selectable; }
    set selectable(value) {
        this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (this.chips) {
            this.chips.forEach(chip => chip.chipListSelectable = this._selectable);
        }
    }
    set tabIndex(value) {
        this._userTabIndex = value;
        this._tabIndex = value;
    }
    /** Combined stream of all of the child chips' selection change events. */
    get chipSelectionChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip.selectionChange));
    }
    /** Combined stream of all of the child chips' focus change events. */
    get chipFocusChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip._onFocus));
    }
    /** Combined stream of all of the child chips' blur change events. */
    get chipBlurChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip._onBlur));
    }
    /** Combined stream of all of the child chips' remove change events. */
    get chipRemoveChanges() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this.chips.map(chip => chip.destroyed));
    }
    ngAfterContentInit() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHomeAndEnd()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed))
                .subscribe(dir => this._keyManager.withHorizontalOrientation(dir));
        }
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(() => {
            this._allowFocusEscape();
        });
        // When the list changes, re-subscribe
        this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(() => {
            if (this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(() => {
                    this._syncChipsState();
                });
            }
            this._resetChips();
            // Reset chips selected/deselected status
            this._initializeSelection();
            // Check to see if we need to update our tab index
            this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            this._updateFocusForDestroyedChips();
            this.stateChanges.next();
        });
    }
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
        this.stateChanges.next();
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
            if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
            }
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    }
    /** Associates an HTML input element with this chip list. */
    registerInput(inputElement) {
        this._chipInput = inputElement;
        // We use this attribute to match the chip list to its input in test harnesses.
        // Set the attribute directly here to avoid "changed after checked" errors.
        this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) { this._ariaDescribedby = ids.join(' '); }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick(event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */
    focus(options) {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
        else {
            this._focusInput(options);
            this.stateChanges.next();
        }
    }
    /** Attempt to focus an input if we have one. */
    _focusInput(options) {
        if (this._chipInput) {
            this._chipInput.focus(options);
        }
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */
    _keydown(event) {
        const target = event.target;
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else if (target && target.classList.contains('mat-chip')) {
            this._keyManager.onKeydown(event);
            this.stateChanges.next();
        }
    }
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     */
    _updateTabIndex() {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    }
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */
    _updateFocusForDestroyedChips() {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                const newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.chips.length;
    }
    _isInputEmpty(element) {
        if (element && element.nodeName.toLowerCase() === 'input') {
            let input = element;
            return !input.value;
        }
        return false;
    }
    _setSelectionByValue(value, isUserInput = true) {
        this._clearSelection();
        this.chips.forEach(chip => chip.deselect());
        if (Array.isArray(value)) {
            value.forEach(currentValue => this._selectValue(currentValue, isUserInput));
            this._sortValues();
        }
        else {
            const correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    }
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    _selectValue(value, isUserInput = true) {
        const correspondingChip = this.chips.find(chip => {
            return chip.value != null && this._compareWith(chip.value, value);
        });
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    }
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            if (this.ngControl || this._value) {
                this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
                this.stateChanges.next();
            }
        });
    }
    /**
     * Deselects every chip in the list.
     * @param skip Chip that should not be deselected.
     */
    _clearSelection(skip) {
        this._selectionModel.clear();
        this.chips.forEach(chip => {
            if (chip !== skip) {
                chip.deselect();
            }
        });
        this.stateChanges.next();
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    _sortValues() {
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach(chip => {
                if (chip.selected) {
                    this._selectionModel.select(chip);
                }
            });
            this.stateChanges.next();
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
        let valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map(chip => chip.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    }
    /** When blurred, mark the field as touched when focus moved outside the chip list. */
    _blur() {
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(() => {
                    if (!this.focused) {
                        this._markAsTouched();
                    }
                });
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    }
    /** Mark the field as touched */
    _markAsTouched() {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    _allowFocusEscape() {
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout(() => {
                this._tabIndex = this._userTabIndex || 0;
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    _resetChips() {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    }
    _dropSubscriptions() {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsSelection() {
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(event => {
            event.source.selected
                ? this._selectionModel.select(event.source)
                : this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!this.multiple) {
                this.chips.forEach(chip => {
                    if (!this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                });
            }
            if (event.isUserInput) {
                this._propagateChanges();
            }
        });
    }
    /** Listens to user-generated selection events on each chip. */
    _listenToChipsFocus() {
        this._chipFocusSubscription = this.chipFocusChanges.subscribe(event => {
            let chipIndex = this.chips.toArray().indexOf(event.chip);
            if (this._isValidIndex(chipIndex)) {
                this._keyManager.updateActiveItem(chipIndex);
            }
            this.stateChanges.next();
        });
        this._chipBlurSubscription = this.chipBlurChanges.subscribe(() => {
            this._blur();
            this.stateChanges.next();
        });
    }
    _listenToChipsRemoved() {
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(event => {
            const chip = event.chip;
            const chipIndex = this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (this._isValidIndex(chipIndex) && chip._hasFocus) {
                this._lastDestroyedChipIndex = chipIndex;
            }
        });
    }
    /** Checks whether an event comes from inside a chip element. */
    _originatesFromChip(event) {
        let currentElement = event.target;
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    /** Checks whether any of the chips is focused. */
    _hasFocusedChip() {
        return this.chips && this.chips.some(chip => chip._hasFocus);
    }
    /** Syncs the list's state with the individual chips. */
    _syncChipsState() {
        if (this.chips) {
            this.chips.forEach(chip => {
                chip._chipListDisabled = this._disabled;
                chip._chipListMultiple = this.multiple;
            });
        }
    }
}
MatChipList.ɵfac = function MatChipList_Factory(t) { return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10)); };
MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatChipList, selectors: [["mat-chip-list"]], contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatChip, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chips = _t);
    } }, hostAttrs: [1, "mat-chip-list"], hostVars: 15, hostBindings: function MatChipList_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() { return ctx.focus(); })("blur", function MatChipList_blur_HostBindingHandler() { return ctx._blur(); })("keydown", function MatChipList_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._uid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
    } }, inputs: { ariaOrientation: ["aria-orientation", "ariaOrientation"], multiple: "multiple", compareWith: "compareWith", value: "value", required: "required", placeholder: "placeholder", disabled: "disabled", selectable: "selectable", tabIndex: "tabIndex", errorStateMatcher: "errorStateMatcher" }, outputs: { change: "change", valueChange: "valueChange" }, exportAs: ["matChipList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], useExisting: MatChipList }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-chip-list-wrapper"]], template: function MatChipList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"], encapsulation: 2, changeDetection: 0 });
MatChipList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
];
MatChipList.propDecorators = {
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-orientation',] }],
    selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-chip-list',
                template: `<div class="mat-chip-list-wrapper"><ng-content></ng-content></div>`,
                exportAs: 'matChipList',
                host: {
                    '[attr.tabindex]': 'disabled ? null : _tabIndex',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-required]': 'role ? required : null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.role]': 'role',
                    '[class.mat-chip-list-disabled]': 'disabled',
                    '[class.mat-chip-list-invalid]': 'errorState',
                    '[class.mat-chip-list-required]': 'required',
                    '[attr.aria-orientation]': 'ariaOrientation',
                    'class': 'mat-chip-list',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                    '(keydown)': '_keydown($event)',
                    '[id]': '_uid'
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], useExisting: MatChipList }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }]; }, { ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-orientation']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatChip, {
                    // We need to use `descendants: true`, because Ivy will no longer match
                    // indirect descendants if it's left as false.
                    descendants: true
                }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids.
let nextUniqueId$1 = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
class MatChipInput {
    constructor(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /** Whether the control is focused. */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /** Emitted when a chip is to be added. */
        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** The input's placeholder text. */
        this.placeholder = '';
        /** Unique id for the input. */
        this.id = `mat-chip-list-input-${nextUniqueId$1++}`;
        this._disabled = false;
        this._inputElement = this._elementRef.nativeElement;
    }
    /** Register input for chip list */
    set chipList(value) {
        if (value) {
            this._chipList = value;
            this._chipList.registerInput(this);
        }
    }
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     */
    get addOnBlur() { return this._addOnBlur; }
    set addOnBlur(value) { this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); }
    /** Whether the input is disabled. */
    get disabled() { return this._disabled || (this._chipList && this._chipList.disabled); }
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); }
    /** Whether the input is empty. */
    get empty() { return !this._inputElement.value; }
    ngOnChanges() {
        this._chipList.stateChanges.next();
    }
    /** Utility method to make host definition/tests more clear. */
    _keydown(event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
        }
        this._emitChipEnd(event);
    }
    /** Checks to see if the blur should emit the (chipEnd) event. */
    _blur() {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    }
    _focus() {
        this.focused = true;
        this._chipList.stateChanges.next();
    }
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    _emitChipEnd(event) {
        if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    }
    _onInput() {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    }
    /** Focuses the input. */
    focus(options) {
        this._inputElement.focus(options);
    }
    /** Checks whether a keycode is one of the configured separators. */
    _isSeparatorKey(event) {
        return !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
    }
}
MatChipInput.ɵfac = function MatChipInput_Factory(t) { return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS)); };
MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatChipInput, selectors: [["input", "matChipInputFor", ""]], hostAttrs: [1, "mat-chip-input", "mat-input-element"], hostVars: 5, hostBindings: function MatChipInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) { return ctx._keydown($event); })("blur", function MatChipInput_blur_HostBindingHandler() { return ctx._blur(); })("focus", function MatChipInput_focus_HostBindingHandler() { return ctx._focus(); })("input", function MatChipInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
    } }, inputs: { separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"], placeholder: "placeholder", id: "id", chipList: ["matChipInputFor", "chipList"], addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"], disabled: "disabled" }, outputs: { chipEnd: "matChipInputTokenEnd" }, exportAs: ["matChipInput", "matChipInputFor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
MatChipInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
];
MatChipInput.propDecorators = {
    chipList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputFor',] }],
    addOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputAddOnBlur',] }],
    separatorKeyCodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matChipInputSeparatorKeyCodes',] }],
    chipEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['matChipInputTokenEnd',] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'input[matChipInputFor]',
                exportAs: 'matChipInput, matChipInputFor',
                host: {
                    'class': 'mat-chip-input mat-input-element',
                    '(keydown)': '_keydown($event)',
                    '(blur)': '_blur()',
                    '(focus)': '_focus()',
                    '(input)': '_onInput()',
                    '[id]': 'id',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.placeholder]': 'placeholder || null',
                    '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                    '[attr.aria-required]': '_chipList && _chipList.required || null'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }] }]; }, { separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputSeparatorKeyCodes']
        }], chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['matChipInputTokenEnd']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputFor']
        }], addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputAddOnBlur']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
const ɵ0 = {
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
};
class MatChipsModule {
}
MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatChipsModule });
MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatChipsModule_Factory(t) { return new (t || MatChipsModule)(); }, providers: [
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"],
        {
            provide: MAT_CHIPS_DEFAULT_OPTIONS,
            useValue: ɵ0
        }
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatChipsModule, { declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon], exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatChipsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: CHIP_DECLARATIONS,
                declarations: CHIP_DECLARATIONS,
                providers: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"],
                    {
                        provide: MAT_CHIPS_DEFAULT_OPTIONS,
                        useValue: ɵ0
                    }
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=chips.js.map

/***/ }),

/***/ "U5OP":
/*!*****************************************************!*\
  !*** ./src/app/anime-detail/anime-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: AnimeDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeDetailModule", function() { return AnimeDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _anime_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anime-detail.component */ "VCE4");
/* harmony import */ var _anime_overview_anime_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anime-overview/anime-overview.component */ "a8cw");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _anime_staff_anime_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./anime-staff/anime-staff.component */ "h0tu");











const routes = [
    { path: '', component: _anime_detail_component__WEBPACK_IMPORTED_MODULE_3__["AnimeDetailComponent"] }
];
class AnimeDetailModule {
}
AnimeDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnimeDetailModule });
AnimeDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnimeDetailModule_Factory(t) { return new (t || AnimeDetailModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _loader_loader_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnimeDetailModule, { declarations: [_anime_detail_component__WEBPACK_IMPORTED_MODULE_3__["AnimeDetailComponent"], _anime_overview_anime_overview_component__WEBPACK_IMPORTED_MODULE_4__["AnimeOverviewComponent"], _anime_staff_anime_staff_component__WEBPACK_IMPORTED_MODULE_8__["AnimeStaffComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _loader_loader_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_anime_detail_component__WEBPACK_IMPORTED_MODULE_3__["AnimeDetailComponent"], _anime_overview_anime_overview_component__WEBPACK_IMPORTED_MODULE_4__["AnimeOverviewComponent"], _anime_staff_anime_staff_component__WEBPACK_IMPORTED_MODULE_8__["AnimeStaffComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "VCE4":
/*!********************************************************!*\
  !*** ./src/app/anime-detail/anime-detail.component.ts ***!
  \********************************************************/
/*! exports provided: AnimeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeDetailComponent", function() { return AnimeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "6ffd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Services_anime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/anime.service */ "b/W4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _anime_overview_anime_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anime-overview/anime-overview.component */ "a8cw");
/* harmony import */ var _shared_characters_characters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/characters/characters.component */ "kTcG");
/* harmony import */ var _shared_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/reviews/reviews.component */ "F26y");
/* harmony import */ var _anime_staff_anime_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./anime-staff/anime-staff.component */ "h0tu");
/* harmony import */ var _shared_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/recommendation/recommendation.component */ "qtax");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");














const _c0 = function (a0) { return { "active-tab": a0 }; };
function AnimeDetailComponent_div_0_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.selectedTab = ctx_r11.tabs.CHARACTERS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CHARACTERS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.selectedTab === ctx_r2.tabs.CHARACTERS));
} }
function AnimeDetailComponent_div_0_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.selectedTab = ctx_r13.tabs.REVIEWS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REVIEWS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.selectedTab === ctx_r3.tabs.REVIEWS));
} }
function AnimeDetailComponent_div_0_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_li_12_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.selectedTab = ctx_r15.tabs.STAFF; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " STAFF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.selectedTab === ctx_r4.tabs.STAFF));
} }
function AnimeDetailComponent_div_0_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.selectedTab = ctx_r17.tabs.RECOMMENDATIONS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RECOMMENDATIONS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.selectedTab === ctx_r5.tabs.RECOMMENDATIONS));
} }
function AnimeDetailComponent_div_0_app_anime_overview_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-anime-overview", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function AnimeDetailComponent_div_0_app_anime_overview_14_Template_app_anime_overview_tabChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.selectedTab = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animeCharacters", ctx_r6.animeCharacters.slice(0, 8))("animeRecommendations", ctx_r6.animeRecommendations)("animeStreamingData", ctx_r6.animeStreamingData)("animePictures", ctx_r6.animePictures)("anime", ctx_r6.anime);
} }
function AnimeDetailComponent_div_0_app_characters_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-characters", 16);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("characters", ctx_r7.animeCharacters)("images", ctx_r7.anime.images);
} }
function AnimeDetailComponent_div_0_app_reviews_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-reviews", 17);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "anime")("images", ctx_r8.anime.images)("reviews", ctx_r8.animeReviews)("id", ctx_r8.animeId);
} }
function AnimeDetailComponent_div_0_app_anime_staff_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-anime-staff", 18);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("staff", ctx_r9.animeStaff)("images", ctx_r9.anime.images);
} }
function AnimeDetailComponent_div_0_app_recommendations_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-recommendations", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTotalRecommendationsChange", function AnimeDetailComponent_div_0_app_recommendations_18_Template_app_recommendations_onTotalRecommendationsChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.totalRecommendations = ctx_r21.totalRecommendations + 12; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "anime")("totalRecommendations", ctx_r10.totalRecommendations)("title", ctx_r10.anime.title_english || ctx_r10.anime.title || ctx_r10.anime.title_japanese)("recommendations", ctx_r10.animeRecommendations)("images", ctx_r10.anime.images);
} }
function AnimeDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.selectedTab = ctx_r23.tabs.OVERVIEW; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " OVERVIEW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnimeDetailComponent_div_0_li_10_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AnimeDetailComponent_div_0_li_11_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AnimeDetailComponent_div_0_li_12_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AnimeDetailComponent_div_0_li_13_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AnimeDetailComponent_div_0_app_anime_overview_14_Template, 1, 5, "app-anime-overview", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AnimeDetailComponent_div_0_app_characters_15_Template, 1, 2, "app-characters", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AnimeDetailComponent_div_0_app_reviews_16_Template, 1, 4, "app-reviews", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AnimeDetailComponent_div_0_app_anime_staff_17_Template, 1, 2, "app-anime-staff", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AnimeDetailComponent_div_0_app_recommendations_18_Template, 1, 5, "app-recommendations", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.anime.title_english || ctx_r0.anime.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.anime.title || ctx_r0.anime.title_japanese, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r0.selectedTab === ctx_r0.tabs.OVERVIEW));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeCharacters.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeReviews.data.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeStaff.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeRecommendations.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === ctx_r0.tabs.OVERVIEW);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeCharacters.length > 0 && ctx_r0.selectedTab === ctx_r0.tabs.CHARACTERS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeReviews.data.length > 0 && ctx_r0.selectedTab === ctx_r0.tabs.REVIEWS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeStaff.length > 0 && ctx_r0.selectedTab === ctx_r0.tabs.STAFF);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.animeRecommendations.length > 0 && ctx_r0.selectedTab === ctx_r0.tabs.RECOMMENDATIONS);
} }
function AnimeDetailComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AnimeDetailComponent {
    constructor(_animeService, _route) {
        this._animeService = _animeService;
        this._route = _route;
        this.tabs = _enums__WEBPACK_IMPORTED_MODULE_1__["TABS"];
        this.loading = false;
        this.anime = null;
        this.animePictures = [];
        this.animeStreamingData = [];
        this.animeCharacters = [];
        this.animeRecommendations = [];
        this.animeStaff = [];
        this.animeReviews = { pagination: {}, data: [] };
        this.animeId = null;
        this.totalRecommendations = 12;
        this.selectedTab = this.tabs.OVERVIEW;
        this.sub1 = null;
        this.sub2 = null;
    }
    ngOnInit() {
        this.sub1 = this._route.paramMap.subscribe(params => {
            this.resetProperties();
            this.animeId = params.get('id');
            this.fetchAnimeData(this.animeId);
        });
    }
    ngOnDestroy() {
        if (this.sub1 instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"])
            this.sub1.unsubscribe();
        if (this.sub2 instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"])
            this.sub2.unsubscribe();
        this.resetProperties();
    }
    resetProperties() {
        this.selectedTab = this.tabs.OVERVIEW;
        this.anime = null;
        this.animePictures = [];
        this.animeStaff = [];
        this.animeStreamingData = [];
        this.animeCharacters = [];
        this.animeRecommendations = [];
        this.animeReviews = { pagination: {}, data: [] };
        this.animeId = null;
        this.totalRecommendations = 12;
    }
    fetchAnimeData(animeId) {
        this.loading = true;
        // Create an array of functions that return promises
        const requests = [
            () => this.getFullAnime(animeId),
            () => this.getAnimeCharacters(animeId),
            () => this.getAnimePictures(animeId),
            () => this.getAnimeStreaming(animeId),
            () => this.getAnimeRecommendations(animeId),
            () => this.getAnimeReviews(animeId, '1'),
            () => this.getAnimeStaff(animeId)
        ];
        this.sub2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((requestFunc) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(requestFunc()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(333), // Add delay for subsequent requests
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                console.log("Error: ", error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); // Handle error by returning null
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loading = false)).subscribe(); // Execute the requests
    }
    getFullAnime(animeId) {
        return this._animeService.getFullAnimeById(animeId)
            .then((response) => {
            this.anime = response.data;
        });
    }
    getAnimeStaff(animeId) {
        return this._animeService.getAnimeStaff(animeId)
            .then((response) => {
            this.animeStaff = response.data;
        });
    }
    getAnimeCharacters(animeId) {
        return this._animeService.getAnimeCharacters(animeId)
            .then((response) => {
            this.animeCharacters = response.data;
        });
    }
    getAnimeRecommendations(animeId) {
        return this._animeService.getAnimeRecommendations(animeId)
            .then((response) => {
            this.animeRecommendations = response.data;
        });
    }
    getAnimeStreaming(animeId) {
        return this._animeService.getAnimeStreaming(animeId)
            .then((response) => {
            this.animeStreamingData = response.data;
        });
    }
    getAnimePictures(animeId) {
        return this._animeService.getAnimePictures(animeId)
            .then((response) => {
            this.animePictures = response.data;
        });
    }
    getAnimeReviews(animeId, pageNo) {
        return this._animeService.getAnimeReviews(animeId, pageNo)
            .then((response) => {
            const concatReviews = this.animeReviews.data.concat(response.data);
            this.animeReviews = { pagination: Object.assign({}, response.pagination), data: concatReviews };
        });
    }
}
AnimeDetailComponent.ɵfac = function AnimeDetailComponent_Factory(t) { return new (t || AnimeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_anime_service__WEBPACK_IMPORTED_MODULE_4__["AnimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
AnimeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeDetailComponent, selectors: [["app-anime-detail"]], decls: 2, vars: 2, consts: [["class", "container-fluid w-full py-3", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "w-full", "py-3"], ["id", "overview-content"], [1, "font-oswald", "tracking-wide", "text-[2rem]", "mb-[4px]"], [1, "font-oswald", "tracking-wider", "text-[#bebebe]", "text-[1rem]"], [1, "mt-4", "rounded-sm"], [1, "flex", "gap-3", "flex-wrap", "py-2", "p-3"], [1, "tracking-wider", "text-[.9rem]", "cursor-pointer", 3, "ngClass", "click"], ["class", "tracking-wider text-[.9rem] cursor-pointer", 3, "ngClass", "click", 4, "ngIf"], [3, "animeCharacters", "animeRecommendations", "animeStreamingData", "animePictures", "anime", "tabChange", 4, "ngIf"], [3, "characters", "images", 4, "ngIf"], [3, "type", "images", "reviews", "id", 4, "ngIf"], [3, "staff", "images", 4, "ngIf"], [3, "type", "totalRecommendations", "title", "recommendations", "images", "onTotalRecommendationsChange", 4, "ngIf"], [3, "animeCharacters", "animeRecommendations", "animeStreamingData", "animePictures", "anime", "tabChange"], [3, "characters", "images"], [3, "type", "images", "reviews", "id"], [3, "staff", "images"], [3, "type", "totalRecommendations", "title", "recommendations", "images", "onTotalRecommendationsChange"]], template: function AnimeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AnimeDetailComponent_div_0_Template, 19, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimeDetailComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _anime_overview_anime_overview_component__WEBPACK_IMPORTED_MODULE_7__["AnimeOverviewComponent"], _shared_characters_characters_component__WEBPACK_IMPORTED_MODULE_8__["CharactersComponent"], _shared_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__["ReviewsComponent"], _anime_staff_anime_staff_component__WEBPACK_IMPORTED_MODULE_10__["AnimeStaffComponent"], _shared_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_11__["RecommendationComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]], styles: [".font-oswald[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: normal;\n    font-style: normal;\n}\n\nnav[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgba(220, 9, 20, .5), rgba(220, 9, 20, 0));\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n}\n\n.active-tab[_ngcontent-%COMP%] {\n    color: var(--color-yellow);\n}\n\n@media screen and (min-width: 768px) {\n    #overview-content[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 1250px;\n        padding-left: 15px;\n        padding-right: 15px;\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtZGV0YWlsL2FuaW1lLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBRUksNkVBQTZFO0FBQ2pGOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYW5pbWUtZGV0YWlsL2FuaW1lLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtb3N3YWxkIHtcbiAgICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5uYXYge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBmcm9tKHJnYmEoMjIwLCA5LCAyMCwgLjUpKSwgdG8ocmdiYSgyMjAsIDksIDIwLCAwKSkpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjAsIDksIDIwLCAuNSksIHJnYmEoMjIwLCA5LCAyMCwgMCkpO1xufVxuXG5uYXYgdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZS10YWIge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICNvdmVydmlldy1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-detail',
                templateUrl: './anime-detail.component.html',
                styleUrls: ['./anime-detail.component.css']
            }]
    }], function () { return [{ type: _Services_anime_service__WEBPACK_IMPORTED_MODULE_4__["AnimeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "a8cw":
/*!*************************************************************************!*\
  !*** ./src/app/anime-detail/anime-overview/anime-overview.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnimeOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeOverviewComponent", function() { return AnimeOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums */ "6ffd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/image-viewer/image-viewer.component */ "JW8G");









function AnimeOverviewComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.isScreenShotsModalOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SCREESHOTS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeOverviewComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r1.anime.episodes, " episodes) ");
} }
function AnimeOverviewComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.isScreenShotsModalOpen = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SCREESHOTS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeOverviewComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.openTrailerModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " WATCH TRAILER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeOverviewComponent_div_41_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_div_41_mat_chip_4_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const genre_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.redirectToAnimeFilterPage(genre_r22.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r22.name, " ");
} }
function AnimeOverviewComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimeOverviewComponent_div_41_mat_chip_4_Template, 2, 1, "mat-chip", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.anime.genres);
} }
const _c0 = function (a0, a1, a2) { return { "bg-[seagreen] airing": a0, "bg-[red] completed": a1, "bg-[#ffd600] upcoming": a2 }; };
function AnimeOverviewComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.anime.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r5.anime.status.toLowerCase() === "currently airing", ctx_r5.anime.status.toLowerCase() === "finished airing", ctx_r5.anime.status.toLowerCase() === "not yet aired"));
} }
const _c1 = function (a0) { return { "text-[#ffd600]": a0 }; };
function AnimeOverviewComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, star_r25 === "f" || star_r25 === "h"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", star_r25 === "f" || star_r25 === "e" ? "star" : "star_half", " ");
} }
function AnimeOverviewComponent_ng_container_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", theme_r27.name, " ");
} }
function AnimeOverviewComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimeOverviewComponent_ng_container_60_div_1_Template, 3, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.anime.themes);
} }
function AnimeOverviewComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No themes are available for this anime. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeOverviewComponent_div_63_div_4_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 58);
} }
function AnimeOverviewComponent_div_63_div_4_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 59);
} }
function AnimeOverviewComponent_div_63_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cast_connected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimeOverviewComponent_div_63_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnimeOverviewComponent_div_63_div_4_img_3_Template, 1, 0, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimeOverviewComponent_div_63_div_4_img_4_Template, 1, 0, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnimeOverviewComponent_div_63_div_4_span_5_Template, 2, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const platform_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", platform_r29.name.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "crunchyroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "netflix");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", platform_r29.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", platform_r29.name, " ");
} }
function AnimeOverviewComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " WATCH IT ON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimeOverviewComponent_div_63_div_4_Template, 8, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.animeStreamingData);
} }
function AnimeOverviewComponent_div_64_div_4_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r34.voice_actors[0].person.name, " ");
} }
function AnimeOverviewComponent_div_64_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnimeOverviewComponent_div_64_div_4_p_7_Template, 2, 1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", character_r34.character.images.webp.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/character/" + character_r34.character.mal_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", character_r34.character.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", character_r34.voice_actors && character_r34.voice_actors.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Role:\u00A0", character_r34.role || "n/a", " ");
} }
function AnimeOverviewComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnimeOverviewComponent_div_64_div_4_Template, 10, 5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_div_64_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.tabChange.emit(ctx_r37.tabs.CHARACTERS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " SEE ALL CHARACTERS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.animeCharacters);
} }
function AnimeOverviewComponent_div_65_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_div_65_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const item_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.redirectToAnimeDetailPage(item_r40.entry.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_div_65_div_5_Template_p_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const item_r40 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.redirectToAnimeDetailPage(item_r40.entry.mal_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r40.entry.images.webp.large_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r40.entry.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r40.entry.title, " ");
} }
function AnimeOverviewComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " If you like this anime, you might like... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnimeOverviewComponent_div_65_div_5_Template, 5, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_div_65_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.tabChange.emit(ctx_r44.tabs.RECOMMENDATIONS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " SEE ALL RECOMMENDATIONS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.animeRecommendations.slice(0, 6));
} }
function AnimeOverviewComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimeOverviewComponent_div_66_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.closeTrailerModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.sanitizer.bypassSecurityTrustResourceUrl(ctx_r13.anime.trailer.embed_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function AnimeOverviewComponent_app_image_viewer_67_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-image-viewer", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseImageViewer", function AnimeOverviewComponent_app_image_viewer_67_Template_app_image_viewer_onCloseImageViewer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.isScreenShotsModalOpen = !$event; })("onImageChange", function AnimeOverviewComponent_app_image_viewer_67_Template_app_image_viewer_onImageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event === "prev" ? ctx_r50.showPrevImage() : ctx_r50.showNextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r14.animePictures)("imageNumber", ctx_r14.imageNumber);
} }
class AnimeOverviewComponent {
    constructor(sanitizer, _router) {
        this.sanitizer = sanitizer;
        this._router = _router;
        this.tabs = src_app_enums__WEBPACK_IMPORTED_MODULE_1__["TABS"];
        this.animePictures = [];
        this.animeStreamingData = [];
        this.animeCharacters = [];
        this.animeRecommendations = [];
        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageNumber = 0;
        this.scoreArray = ["e", "e", "e", "e", "e"];
        this.isScreenShotsModalOpen = false;
        this.isTrailerModalOpen = false;
    }
    ngOnInit() {
        // RATINGS LOGIC
        const stars = Number(this.anime.score) / 2;
        const fullStars = Math.floor(stars);
        const halfStars = stars % 1 >= 0.5 ? 1 : 0;
        var index = 0;
        while (index < fullStars) {
            this.scoreArray[index] = "f";
            ++index;
        }
        if (halfStars > 0)
            this.scoreArray[index] = "h";
        // REMOVE AUTOPLAY PARAMETER FROM TRAILER'S EMBEDDED URL
        if (this.anime.trailer.embed_url) {
            if (this.anime.trailer.embed_url.includes("&autoplay=1")) {
                this.anime.trailer.embed_url = this.anime.trailer.embed_url.replace("&autoplay=1", "");
            }
            else if (this.anime.trailer.embed_url.includes("autoplay=1")) {
                this.anime.trailer.embed_url = this.anime.trailer.embed_url.replace("autoplay=1", "");
            }
        }
    }
    redirectToAnimeFilterPage(genreId) {
        this._router.navigate(['/anime-filters'], {
            queryParams: { genres: genreId }
        });
    }
    openTrailerModal() {
        this.isTrailerModalOpen = true;
        document.body.style.overflow = 'hidden';
    }
    closeTrailerModal() {
        this.isTrailerModalOpen = false;
        document.body.style.overflow = 'auto';
    }
    redirectToAnimeDetailPage(animeId) {
        this._router.navigate(['/anime/', animeId]);
    }
    showNextImage() {
        if (this.imageNumber == this.animePictures.length - 1)
            this.imageNumber = 0;
        else
            this.imageNumber += 1;
    }
    showPrevImage() {
        if (this.imageNumber == 0)
            this.imageNumber = this.animePictures.length - 1;
        else
            this.imageNumber -= 1;
    }
}
AnimeOverviewComponent.ɵfac = function AnimeOverviewComponent_Factory(t) { return new (t || AnimeOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AnimeOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeOverviewComponent, selectors: [["app-anime-overview"]], inputs: { anime: "anime", animePictures: "animePictures", animeStreamingData: "animeStreamingData", animeCharacters: "animeCharacters", animeRecommendations: "animeRecommendations" }, outputs: { tabChange: "tabChange" }, decls: 68, vars: 33, consts: [[1, "container-fluid", "mt-2", "py-3"], [1, "grid-cols-2", "gap-y-8", "grid", "md:grid-cols-5", "md:gap-x-8"], ["id", "anime-img-div-sm", 2, "display", "flex", "flex-direction", "column", "align-items", "center"], [1, "overflow-hidden", "h-full", "md:col-span-1", "md:hidden"], ["loading", "lazy", 1, "rounded-md", "w-full", "h-full", 3, "src", "alt"], ["class", "mt-3 bg-[#3e3e3e] p-2 px-3 text-[12px] rounded-md tracking-[1px] font-bold", 3, "click", 4, "ngIf"], [1, "col-span-1", "flex", "flex-col", "gap-4", "justify-start", "md:items-center", "md:justify-between", "md:flex-row", "md:col-span-5", "md:gap-0"], [1, "detail-header", "gap-1", "md:flex-1"], [1, "material-icons-outlined"], [1, "font-[300]"], ["class", "font-[300]", 4, "ngIf"], [2, "font-weight", "normal!important"], [1, "font-light", 2, "font-weight", "300!important"], ["id", "anime-img-div-lg", 1, "hidden", "col-span-1", "min-h-[20rem]", "md:col-span-1", "md:block", 2, "display", "flex", "flex-direction", "column", "align-items", "center"], [1, "overflow-hidden", "rounded-md", "h-full", "max-w-[15rem]", "max-h-[20rem]"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src", "alt"], ["type", "button", "class", "mt-3 bg-[#3e3e3e] p-2 px-3 text-sm rounded-md tracking-[1px] font-bold", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "items-start", "gap-3", "col-span-2", "md:col-span-3"], [1, "font-mulish", "text-justify", "mb-0"], ["id", "trailer-btn", "class", "flex items-center gap-2 px-[.7rem] bg-black py-1 rounded-[.2rem]", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "flex", "flex-col", "gap-4", "col-span-2", "md:col-span-1"], [1, "flex", "flex-col", "gap-2"], [1, "mb-0", "font-light", "tracking-wider", "md:text-[15px]"], [1, "font-normal"], ["class", "text-[1rem] material-icons-outlined", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "font-[400]", "tracking-wider", "mb-2", "md:text-[15px]"], [4, "ngIf", "ngIfElse"], ["themesPlaceholder", ""], ["class", "mt-12", 4, "ngIf"], ["style", "z-index: 7!important", "class", "bg-[rgba(0,0,0,.7)] fixed top-0 left-0 w-screen h-screen", 4, "ngIf"], [3, "images", "imageNumber", "onCloseImageViewer", "onImageChange", 4, "ngIf"], [1, "mt-3", "bg-[#3e3e3e]", "p-2", "px-3", "text-[12px]", "rounded-md", "tracking-[1px]", "font-bold", 3, "click"], ["type", "button", 1, "mt-3", "bg-[#3e3e3e]", "p-2", "px-3", "text-sm", "rounded-md", "tracking-[1px]", "font-bold", 3, "click"], ["id", "trailer-btn", 1, "flex", "items-center", "gap-2", "px-[.7rem]", "bg-black", "py-1", "rounded-[.2rem]", 3, "click"], [1, "w-full", "max-w-[25px]", "h-full", "max-h-[25px]"], ["loading", "lazy", "src", "assets/youtube.png", 1, "w-full", "h-full"], [1, "whitespace-nowrap", "text-[13px]", "tracking-[.06rem]"], [1, "font-mulish", "font-[600]", "mb-2"], ["class", "custom-chip cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "custom-chip", "cursor-pointer", 3, "click"], [1, "mb-1", "tracking-[1px]", "md:text-[15px]"], [1, "bg-[rgba(0,0,0,.3)]", "rounded-md"], [1, "h-full", "rounded-md", 2, "padding", ".1rem 0", 3, "ngClass"], [1, "text-[1rem]", "material-icons-outlined", 3, "ngClass"], ["class", "theme-item cursor-pointer p-1 px-2 rounded-sm", 4, "ngFor", "ngForOf"], [1, "theme-item", "cursor-pointer", "p-1", "px-2", "rounded-sm"], [1, "mb-0", "tracking-[.07rem]", "text-sm", "select-none"], [1, "font-mulish", "mb-0"], ["id", "streaming-div", 1, "grid", "grid-cols-2", "md:grid-cols-1"], ["class", "flex gap-2 items-center w-full md:translate-x-1", 4, "ngFor", "ngForOf"], [1, "flex", "gap-2", "items-center", "w-full", "md:translate-x-1"], [1, "overflow-hidden", "h-[25px]"], [3, "ngSwitch"], ["loading", "lazy", "class", "w-full h-full", "src", "assets/crunchy.png", 4, "ngSwitchCase"], ["loading", "lazy", "class", "w-full h-full", "src", "assets/netflix.png", 4, "ngSwitchCase"], ["class", "material-icons-outlined", "style", "font-weight: 100!important;", 4, "ngSwitchDefault"], ["target", "_blank", "target", "_blank", 1, "text-decoration-none", "font-light", "tracking-[.05rem]", "text-[15px]", 3, "href"], ["loading", "lazy", "src", "assets/crunchy.png", 1, "w-full", "h-full"], ["loading", "lazy", "src", "assets/netflix.png", 1, "w-full", "h-full"], [1, "material-icons-outlined", 2, "font-weight", "100!important"], [1, "mt-12"], [1, "font-[400]", "tracking-wider"], [1, "mt-3", "grid", "gap-3", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4"], ["class", "flex gap-2 items-stretch bg-[#313131] rounded-[.25rem] overflow-hidden", "style", "box-shadow: -2px 3px 3px rgba(0,0,0,.4);", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-center"], ["type", "button", 1, "mx-auto", "bg-[#3e3e3e]", "p-2", "px-3", "text-sm", "rounded-md", "tracking-[1px]", "font-bold", 3, "click"], [1, "flex", "gap-2", "items-stretch", "bg-[#313131]", "rounded-[.25rem]", "overflow-hidden", 2, "box-shadow", "-2px 3px 3px rgba(0,0,0,.4)"], [1, "w-full", "max-w-[30%]", "h-[131px]"], ["loading", "lazy", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "flex-col", "justify-between", "p-2", "flex-1", "overflow-hidden"], [1, "text-[#aabee4]", "text-[.9rem]", "w-max", "tracking-wide", "font-bold", "mb-0", "cursor-pointer", "overflow-hidden", "text-ellipsis", "whitespace-nowrap", "font-mulish", "hover:text-[#fff]", 3, "routerLink"], ["class", "text-[12px] font-light text-[#bebebe] font-mulish", 4, "ngIf"], [1, "font-[300]", "mb-1", "tracking-wide", "text-sm", "font-mulish"], [1, "text-[12px]", "font-light", "text-[#bebebe]", "font-mulish"], [1, "p-4", "border-1", "border-[#353330]", 2, "margin-top", "1rem"], [1, "grid", "overflow-hidden", "gap-3", "grid-cols-2", "sm:grid-cols-3", "md:grid-cols-4", "lg:grid-cols-6", 2, "margin-top", "1rem"], ["class", "anime-card cursor-pointer overflow-hidden h-max w-full max-w-[210px]", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-2", "md:mt-0"], [1, "anime-card", "cursor-pointer", "overflow-hidden", "h-max", "w-full", "max-w-[210px]", 3, "click"], [1, "relative", "w-full", "h-[15rem]", "rounded-[.2rem]", "overflow-hidden", "sm:h-[17rem]"], ["loading", "lazy", 1, "w-full", "h-full", 3, "src", "alt"], [1, "text-center", "tracking-wider", "mt-1", "overflow-hidden", 3, "click"], [1, "bg-[rgba(0,0,0,.7)]", "fixed", "top-0", "left-0", "w-screen", "h-screen", 2, "z-index", "7!important"], [1, "flex", "items-center", "justify-center", "w-full", "h-full"], [1, "relative", "rounded-sm", "w-[90%]", "h-full", "max-h-[35vh]", "md:max-h-[55vh]", "lg:max-h-[75vh]", "sm:w-3/4"], ["loading", "lazy", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 2, "width", "100%", "height", "100%", 3, "src"], ["type", "button", "id", "close-trailer-btn", 1, "p-0", "absolute", "-bottom-12", "left-[50%]", "text-[2rem]", "bg-[#191919]", "rounded-full", "w-[25px]", "h-[25px]", "flex", "items-center", "justify-center", "border-1", 3, "click"], [1, "-mt-[1px]"], [3, "images", "imageNumber", "onCloseImageViewer", "onImageChange"]], template: function AnimeOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnimeOverviewComponent_button_5_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " desktop_windows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AnimeOverviewComponent_span_12_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " calendar_month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " local_fire_department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Rank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AnimeOverviewComponent_button_36_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AnimeOverviewComponent_button_40_Template, 5, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AnimeOverviewComponent_div_41_Template, 5, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AnimeOverviewComponent_div_43_Template, 5, 6, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Ratings: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AnimeOverviewComponent_span_48_Template, 2, 4, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Source: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Duration: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " THEMES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AnimeOverviewComponent_ng_container_60_Template, 2, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AnimeOverviewComponent_ng_template_61_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AnimeOverviewComponent_div_63_Template, 5, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AnimeOverviewComponent_div_64_Template, 8, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AnimeOverviewComponent_div_65_Template, 9, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AnimeOverviewComponent_div_66_Template, 7, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AnimeOverviewComponent_app_image_viewer_67_Template, 1, 2, "app-image-viewer", 31);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.anime.images.webp.large_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.anime.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animePictures.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anime.episodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.source, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 27, ctx.anime.aired.from, "yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 30, ctx.anime.aired.to, "yyyy") || "?", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.scored_by || "n/a", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", ctx.anime.rank || "n/a", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.anime.images.webp.large_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.anime.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animePictures.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.synopsis || ctx.anime.background || "Synopsis is currently unavailable at this time.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anime.trailer.embed_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anime.genres.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anime.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scoreArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.source || "N/A", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.anime.duration || "N/A", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.anime.themes.length > 0)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animeStreamingData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animeCharacters.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animeRecommendations.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTrailerModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isScreenShotsModalOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__["ImageViewerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n\n#trailer-btn[_ngcontent-%COMP%] {\n    transition: transform .1s ease-out;\n}\n\n#trailer-btn[_ngcontent-%COMP%]:hover {\n    background-color: #bd0912 !important;\n    color: black !important;\n    transform: scale(1.01);\n\n}\n\n#close-trailer-btn[_ngcontent-%COMP%]:hover {\n    transition: background-color .2s ease-in-out;\n}\n\n#close-trailer-btn[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    border: 1px solid #191919;\n}\n\n#close-trailer-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    color: black;\n}\n\n.material-icons-outlined[_ngcontent-%COMP%] {\n    font-family: 'Material Icons Outlined' !important;\n}\n\n.font-mulish[_ngcontent-%COMP%] {\n    font-family: \"Mulish\", sans-serif;\n}\n\n.detail-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n\n.detail-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    letter-spacing: .05em;\n}\n\n.custom-chip[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin: 0 5px 5px 0;\n    padding: 3px 9px;\n    letter-spacing: .07rem;\n    background-color: #2e2e2e;\n    color: #bebebe;\n    border-radius: 6px;\n    font-weight: 400 !important;\n    font-size: .8rem;\n    cursor: pointer!important;\n}\n\n.custom-chip[_ngcontent-%COMP%]:hover {\n    background-color: #272727;\n}\n\n.theme-item[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, rgba(0, 0, 0, .5), rgba(220, 9, 20, 0));\n    margin-top: .5rem;\n    transition: transform .2s ease-in-out;\n}\n\n.theme-item[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n}\n\n.theme-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 300 !important;\n}\n\n.theme-item[_ngcontent-%COMP%]:hover {\n    transform: translateX(-1%);\n    background-color: seagreen;\n}\n\n.airing[_ngcontent-%COMP%] {\n    animation: airingProgress 1s ease-in-out forwards;\n}\n\n.completed[_ngcontent-%COMP%] {\n    animation: completedProgress 1s ease-in-out forwards;\n}\n\n.upcoming[_ngcontent-%COMP%] {\n    animation: upcomingProgress 1s ease-in-out forwards;\n}\n\n.anime-card[_ngcontent-%COMP%] {\n    img {\n        opacity: .9;\n        transition: opacity .2s ease-in-out, transform .2s ease-in-out;\n    }\n}\n\n.anime-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    transition: color .1s linear;\n}\n\n.anime-card[_ngcontent-%COMP%]:hover {\n    img {\n        opacity: 1;\n        transform: scale(1.02);\n    }\n\n    p {\n        color: #bd0912;\n    }\n}\n\n@keyframes airingProgress {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 50%;\n    }\n}\n\n@keyframes completedProgress {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 100%;\n    }\n}\n\n@keyframes upcomingProgress {\n    0% {\n        width: 0px;\n    }\n\n    100% {\n        width: 10%;\n    }\n}\n\n#streaming-div[_ngcontent-%COMP%] {\n    \n    row-gap: .5rem;\n}\n\n@media screen and (max-width: 768px) {\n    #anime-img-div-lg[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n}\n\n@media screen and (min-width: 768px) {\n\n    #anime-img-div-sm[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n\n    .detail-header[_ngcontent-%COMP%] {\n        border-right: 1px solid gray;\n    }\n\n    .detail-header[_ngcontent-%COMP%]:last-child {\n        border-right: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtZGV0YWlsL2FuaW1lLW92ZXJ2aWV3L2FuaW1lLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBRUksMEVBQTBFO0lBQzFFLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLDhEQUE4RDtJQUNsRTtBQUNKOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Ysc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hbmltZS1kZXRhaWwvYW5pbWUtb3ZlcnZpZXcvYW5pbWUtb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiN0cmFpbGVyLWJ0biB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLW91dDtcbn1cblxuI3RyYWlsZXItYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwOTEyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcblxufVxuXG4jY2xvc2UtdHJhaWxlci1idG46aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4jY2xvc2UtdHJhaWxlci1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5MTkxOTtcbn1cblxuI2Nsb3NlLXRyYWlsZXItYnRuOmhvdmVyIHNwYW4ge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LW11bGlzaCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaXNoXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5kZXRhaWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGV0YWlsLWhlYWRlciBzcGFuIHtcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XG59XG5cbi5jdXN0b20tY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwIDVweCA1cHggMDtcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDdyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZTtcbiAgICBjb2xvcjogI2JlYmViZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jaGlwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3O1xufVxuXG4udGhlbWUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20ocmdiYSgwLCAwLCAwLCAuNSkpLCB0byhyZ2JhKDIyMCwgOSwgMjAsIDApKSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgyMjAsIDksIDIwLCAwKSk7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnRoZW1lLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi50aGVtZS1pdGVtIHAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cblxuLnRoZW1lLWl0ZW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMSUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xufVxuXG4uYWlyaW5nIHtcbiAgICBhbmltYXRpb246IGFpcmluZ1Byb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG4uY29tcGxldGVkIHtcbiAgICBhbmltYXRpb246IGNvbXBsZXRlZFByb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG4udXBjb21pbmcge1xuICAgIGFuaW1hdGlvbjogdXBjb21pbmdQcm9ncmVzcyAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cblxuLmFuaW1lLWNhcmQge1xuICAgIGltZyB7XG4gICAgICAgIG9wYWNpdHk6IC45O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG59XG5cbi5hbmltZS1jYXJkIHAge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBsaW5lYXI7XG59XG5cbi5hbmltZS1jYXJkOmhvdmVyIHtcbiAgICBpbWcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBjb2xvcjogI2JkMDkxMjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYWlyaW5nUHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY29tcGxldGVkUHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHVwY29taW5nUHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG59XG5cbiNzdHJlYW1pbmctZGl2IHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIHJvdy1nYXA6IC41cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICNhbmltZS1pbWctZGl2LWxnIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgICNhbmltZS1pbWctZGl2LXNtIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kZXRhaWwtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLWhlYWRlcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-overview',
                templateUrl: './anime-overview.component.html',
                styleUrls: ['./anime-overview.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { anime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['anime']
        }], animePictures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animePictures']
        }], animeStreamingData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animeStreamingData']
        }], animeCharacters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animeCharacters']
        }], animeRecommendations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['animeRecommendations']
        }], tabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "h0tu":
/*!*******************************************************************!*\
  !*** ./src/app/anime-detail/anime-staff/anime-staff.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnimeStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeStaffComponent", function() { return AnimeStaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function AnimeStaffComponent_div_10_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const staff_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.concatStaffPosition(staff_r1.positions), " ");
} }
const _c0 = function (a0) { return { "border-top": a0 }; };
function AnimeStaffComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AnimeStaffComponent_div_10_p_6_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const staff_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.i2 === 0 ? "1px solid #353330" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (staff_r1 == null ? null : staff_r1.person == null ? null : staff_r1.person.images == null ? null : staff_r1.person.images.webp == null ? null : staff_r1.person.images.webp.large_image_url) || (staff_r1 == null ? null : staff_r1.person == null ? null : staff_r1.person.images == null ? null : staff_r1.person.images.jpg == null ? null : staff_r1.person.images.jpg.large_image_url) || (staff_r1 == null ? null : staff_r1.person == null ? null : staff_r1.person.images == null ? null : staff_r1.person.images.webp == null ? null : staff_r1.person.images.webp.image_url) || (staff_r1 == null ? null : staff_r1.person == null ? null : staff_r1.person.images == null ? null : staff_r1.person.images.jpg == null ? null : staff_r1.person.images.jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/people/" + (staff_r1 == null ? null : staff_r1.person == null ? null : staff_r1.person.mal_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", staff_r1 == null ? null : staff_r1.person == null ? null : staff_r1.person.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", staff_r1 == null ? null : staff_r1.positions == null ? null : staff_r1.positions.length);
} }
class AnimeStaffComponent {
    constructor() {
        this.animeStaff = [];
        this.images = null;
    }
    ngOnInit() {
        // console.log(this.images)
    }
    concatStaffPosition(data) {
        return data.join(", ");
    }
}
AnimeStaffComponent.ɵfac = function AnimeStaffComponent_Factory(t) { return new (t || AnimeStaffComponent)(); };
AnimeStaffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeStaffComponent, selectors: [["app-anime-staff"]], inputs: { animeStaff: ["staff", "animeStaff"], images: "images" }, decls: 11, vars: 2, consts: [[1, "mt-2", "py-3", "sm:container-fluid"], [1, "grid", "grid-cols-1", "md:grid-cols-5", "gap-y-6", "md:gap-x-4", "md:gap-y-0"], [1, "w-full", "flex", "justify-center"], [1, "w-full", "max-w-[13rem]", "h-full", "max-h-[20rem]", "overflow-hidden", "rounded-md"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "md:col-span-4"], [1, "mb-4"], [1, "tracking-wider", "font-normal", "mb-2"], [1, "grid", "gap-x-3", "gap-y-2", "sm:grid-cols-2"], ["style", "border-bottom: 1px solid #353330", "class", "p-1 flex justify-between items-start gap-3 bg-[#242424] overflow-hidden", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "p-1", "flex", "justify-between", "items-start", "gap-3", "bg-[#242424]", "overflow-hidden", 2, "border-bottom", "1px solid #353330", 3, "ngStyle"], [1, "w-full", "max-w-[60px]", "h-full", "max-h-[100px]", "rounded-sm", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "flex-1"], [1, "tracking-wider", "text-[#aabee4]", "hover:text-[#fff]", 3, "routerLink"], ["class", "tracking-wider text-[#bebebe] font-light text-sm mt-[2px] mb-0", 4, "ngIf"], [1, "tracking-wider", "text-[#bebebe]", "font-light", "text-sm", "mt-[2px]", "mb-0"]], template: function AnimeStaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Anime Staff ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnimeStaffComponent_div_10_Template, 7, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx.images == null ? null : ctx.images.webp == null ? null : ctx.images.webp.large_image_url) || (ctx.images == null ? null : ctx.images.jpg == null ? null : ctx.images.jpg.large_image_url) || (ctx.images == null ? null : ctx.images.webp == null ? null : ctx.images.webp.image_url) || (ctx.images == null ? null : ctx.images.jpg == null ? null : ctx.images.jpg.image_url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.animeStaff);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n    font-family: \"Oswald\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.material-icons-outlined[_ngcontent-%COMP%] {\n    font-family: 'Material Icons Outlined' !important;\n}\n\n.vc-p[_ngcontent-%COMP%]:hover {\n    color: #fff;\n}\n\n.vc-p[_ngcontent-%COMP%]::after {\n    content: '|';\n}\n\n.vc-p[_ngcontent-%COMP%]:last-child:after {\n    content: '';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtZGV0YWlsL2FuaW1lLXN0YWZmL2FuaW1lLXN0YWZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FuaW1lLWRldGFpbC9hbmltZS1zdGFmZi9hbmltZS1zdGFmZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCcgIWltcG9ydGFudDtcbn1cblxuLnZjLXA6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4udmMtcDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICd8Jztcbn1cblxuLnZjLXA6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeStaffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime-staff',
                templateUrl: './anime-staff.component.html',
                styleUrls: ['./anime-staff.component.css']
            }]
    }], function () { return []; }, { animeStaff: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['staff']
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['images']
        }] }); })();


/***/ }),

/***/ "kmnG":
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
  \****************************************************************************/
/*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function() { return MAT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function() { return MAT_FORM_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function() { return MAT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function() { return MAT_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return MatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return MatFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return MatFormFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return MatFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return MatHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return MatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return MatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return MatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return MatSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function() { return _MAT_HINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return getMatFormFieldDuplicatedHintError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return getMatFormFieldMissingControlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return getMatFormFieldPlaceholderConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return matFormFieldAnimations; });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






const _c0 = ["underline"];
const _c1 = ["connectionContainer"];
const _c2 = ["inputContainer"];
const _c3 = ["label"];
function MatFormField_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function MatFormField_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MatFormField_label_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
} }
function MatFormField_label_9_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
} }
function MatFormField_label_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MatFormField_label_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.updateOutlineGap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
} }
function MatFormField_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MatFormField_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
} }
function MatFormField_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
} }
function MatFormField_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
} }
function MatFormField_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
} }
const _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
const _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
let nextUniqueId = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatError');
/** Single error message to be shown underneath the form field. */
class MatError {
    constructor() {
        this.id = `mat-error-${nextUniqueId++}`;
    }
}
MatError.ɵfac = function MatError_Factory(t) { return new (t || MatError)(); };
MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatError, selectors: [["mat-error"]], hostAttrs: ["role", "alert", 1, "mat-error"], hostVars: 1, hostBindings: function MatError_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
    } }, inputs: { id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: MAT_ERROR, useExisting: MatError }])] });
MatError.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'mat-error',
                host: {
                    'class': 'mat-error',
                    'role': 'alert',
                    '[attr.id]': 'id'
                },
                providers: [{ provide: MAT_ERROR, useExisting: MatError }]
            }]
    }], function () { return []; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the MatFormField.
 * @docs-private
 */
const matFormFieldAnimations = {
    /** Animation that transitions the form field's error and hint messages. */
    transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [
        // TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1, transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
        ]),
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** An interface which allows a control to work inside of a `MatFormField`. */
class MatFormFieldControl {
}
MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) { return new (t || MatFormFieldControl)(); };
MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatFormFieldControl });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
function getMatFormFieldPlaceholderConflictError() {
    return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */
function getMatFormFieldDuplicatedHintError(align) {
    return Error(`A hint was already declared for 'align="${align}"'.`);
}
/** @docs-private */
function getMatFormFieldMissingControlError() {
    return Error('mat-form-field must contain a MatFormFieldControl.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId$1 = 0;
/**
 * Injection token that can be used to reference instances of `MatHint`. It serves as
 * alternative token to the actual `MatHint` class which could cause unnecessary
 * retention of the class and its directive metadata.
 *
 * *Note*: This is not part of the public API as the MDC-based form-field will not
 * need a lightweight token for `MatHint` and we want to reduce breaking changes.
 */
const _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatHint');
/** Hint text to be shown underneath the form field control. */
class MatHint {
    constructor() {
        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
        this.id = `mat-hint-${nextUniqueId$1++}`;
    }
}
MatHint.ɵfac = function MatHint_Factory(t) { return new (t || MatHint)(); };
MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatHint, selectors: [["mat-hint"]], hostAttrs: [1, "mat-hint"], hostVars: 4, hostBindings: function MatHint_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-hint-end", ctx.align === "end");
    } }, inputs: { align: "align", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _MAT_HINT, useExisting: MatHint }])] });
MatHint.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'mat-hint',
                host: {
                    'class': 'mat-hint',
                    '[class.mat-form-field-hint-end]': 'align === "end"',
                    '[attr.id]': 'id',
                    // Remove align attribute to prevent it from interfering with layout.
                    '[attr.align]': 'null'
                },
                providers: [{ provide: _MAT_HINT, useExisting: MatHint }]
            }]
    }], function () { return []; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The floating label for a `mat-form-field`. */
class MatLabel {
}
MatLabel.ɵfac = function MatLabel_Factory(t) { return new (t || MatLabel)(); };
MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatLabel, selectors: [["mat-label"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'mat-label'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * @breaking-change 8.0.0
 */
class MatPlaceholder {
}
MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) { return new (t || MatPlaceholder)(); };
MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatPlaceholder, selectors: [["mat-placeholder"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'mat-placeholder'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatPrefix');
/** Prefix to be placed in front of the form field. */
class MatPrefix {
}
MatPrefix.ɵfac = function MatPrefix_Factory(t) { return new (t || MatPrefix)(); };
MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatPrefix, selectors: [["", "matPrefix", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: MAT_PREFIX, useExisting: MatPrefix }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[matPrefix]',
                providers: [{ provide: MAT_PREFIX, useExisting: MatPrefix }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSuffix');
/** Suffix to be placed at the end of the form field. */
class MatSuffix {
}
MatSuffix.ɵfac = function MatSuffix_Factory(t) { return new (t || MatSuffix)(); };
MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatSuffix, selectors: [["", "matSuffix", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: MAT_SUFFIX, useExisting: MatSuffix }])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[matSuffix]',
                providers: [{ provide: MAT_SUFFIX, useExisting: MatSuffix }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId$2 = 0;
const floatingLabelScale = 0.75;
const outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * @docs-private
 */
class MatFormFieldBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/**
 * Base class to which we're applying the form field mixins.
 * @docs-private
 */
const _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */
const MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */
const MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
/** Container for form controls that applies Material Design styling and behavior. */
class MatFormField extends _MatFormFieldMixinBase {
    constructor(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._defaults = _defaults;
        this._platform = _platform;
        this._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */
        this._outlineGapCalculationNeededImmediately = false;
        /** Whether the outline gap needs to be calculated next time the zone has stabilized. */
        this._outlineGapCalculationNeededOnStable = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Override for the logic that disables the label animation in certain cases. */
        this._showAlwaysAnimate = false;
        /** State of the mat-hint and mat-error animations. */
        this._subscriptAnimationState = '';
        this._hintLabel = '';
        // Unique id for the hint label.
        this._hintLabelId = `mat-hint-${nextUniqueId$2++}`;
        // Unique id for the label element.
        this._labelId = `mat-form-field-label-${nextUniqueId$2++}`;
        this._labelOptions = labelOptions ? labelOptions : {};
        this.floatLabel = this._getDefaultFloatLabelState();
        this._animationsEnabled = _animationMode !== 'NoopAnimations';
        // Set the default through here so we invoke the setter on the first run.
        this.appearance = (_defaults && _defaults.appearance) ? _defaults.appearance : 'legacy';
        this._hideRequiredMarker = (_defaults && _defaults.hideRequiredMarker != null) ?
            _defaults.hideRequiredMarker : false;
    }
    /** The form-field appearance style. */
    get appearance() { return this._appearance; }
    set appearance(value) {
        const oldValue = this._appearance;
        this._appearance = value || (this._defaults && this._defaults.appearance) || 'legacy';
        if (this._appearance === 'outline' && oldValue !== value) {
            this._outlineGapCalculationNeededOnStable = true;
        }
    }
    /** Whether the required marker should be hidden. */
    get hideRequiredMarker() { return this._hideRequiredMarker; }
    set hideRequiredMarker(value) {
        this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** Whether the floating label should always float or not. */
    _shouldAlwaysFloat() {
        return this.floatLabel === 'always' && !this._showAlwaysAnimate;
    }
    /** Whether the label can float or not. */
    _canLabelFloat() { return this.floatLabel !== 'never'; }
    /** Text for the form field hint. */
    get hintLabel() { return this._hintLabel; }
    set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
    }
    /**
     * Whether the label should always float, never float or float as the user types.
     *
     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
     * way to make the floating label emulate the behavior of a standard input placeholder. However
     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
     * appearances the `never` option has been disabled in favor of just using the placeholder.
     */
    get floatLabel() {
        return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
    }
    set floatLabel(value) {
        if (value !== this._floatLabel) {
            this._floatLabel = value || this._getDefaultFloatLabelState();
            this._changeDetectorRef.markForCheck();
        }
    }
    get _control() {
        // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
        //  We should clean this up once Ivy is the default renderer.
        return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
    }
    set _control(value) {
        this._explicitFormFieldControl = value;
    }
    /**
     * Gets the id of the label element. If no label is present, returns `null`.
     */
    getLabelId() {
        return this._hasFloatingLabel() ? this._labelId : null;
    }
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */
    getConnectedOverlayOrigin() {
        return this._connectionContainerRef || this._elementRef;
    }
    ngAfterContentInit() {
        this._validateControlChild();
        const control = this._control;
        if (control.controlType) {
            this._elementRef.nativeElement.classList.add(`mat-form-field-type-${control.controlType}`);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(() => {
            this._validatePlaceholders();
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        });
        // Run change detection if the value changes.
        if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe(() => this._changeDetectorRef.markForCheck());
        }
        // Note that we have to run outside of the `NgZone` explicitly,
        // in order to avoid throwing users into an infinite loop
        // if `zone-patch-rxjs` is included.
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(() => {
                if (this._outlineGapCalculationNeededOnStable) {
                    this.updateOutlineGap();
                }
            });
        });
        // Run change detection and update the outline if the suffix or prefix changes.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
            this._outlineGapCalculationNeededOnStable = true;
            this._changeDetectorRef.markForCheck();
        });
        // Re-validate when the number of hints changes.
        this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(() => {
            this._processHints();
            this._changeDetectorRef.markForCheck();
        });
        // Update the aria-described by when the number of errors changes.
        this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(() => {
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        });
        if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(() => {
                if (typeof requestAnimationFrame === 'function') {
                    this._ngZone.runOutsideAngular(() => {
                        requestAnimationFrame(() => this.updateOutlineGap());
                    });
                }
                else {
                    this.updateOutlineGap();
                }
            });
        }
    }
    ngAfterContentChecked() {
        this._validateControlChild();
        if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
        }
    }
    ngAfterViewInit() {
        // Avoid animations on load.
        this._subscriptAnimationState = 'enter';
        this._changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Determines whether a class from the NgControl should be forwarded to the host element. */
    _shouldForward(prop) {
        const ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
    }
    _hasPlaceholder() {
        return !!(this._control && this._control.placeholder || this._placeholderChild);
    }
    _hasLabel() {
        return !!(this._labelChildNonStatic || this._labelChildStatic);
    }
    _shouldLabelFloat() {
        return this._canLabelFloat() &&
            ((this._control && this._control.shouldLabelFloat) || this._shouldAlwaysFloat());
    }
    _hideControlPlaceholder() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this.appearance === 'legacy' && !this._hasLabel() ||
            this._hasLabel() && !this._shouldLabelFloat();
    }
    _hasFloatingLabel() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    }
    /** Determines whether to display hints or errors. */
    _getDisplayedMessages() {
        return (this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState) ? 'error' : 'hint';
    }
    /** Animates the placeholder up and locks it in position. */
    _animateAndLockLabel() {
        if (this._hasFloatingLabel() && this._canLabelFloat()) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
                    this._showAlwaysAnimate = false;
                });
            }
            this.floatLabel = 'always';
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     */
    _validatePlaceholders() {
        if (this._control.placeholder && this._placeholderChild &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatFormFieldPlaceholderConflictError();
        }
    }
    /** Does any extra processing that is required when handling the hints. */
    _processHints() {
        this._validateHints();
        this._syncDescribedByIds();
    }
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    _validateHints() {
        if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            let startHint;
            let endHint;
            this._hintChildren.forEach((hint) => {
                if (hint.align === 'start') {
                    if (startHint || this.hintLabel) {
                        throw getMatFormFieldDuplicatedHintError('start');
                    }
                    startHint = hint;
                }
                else if (hint.align === 'end') {
                    if (endHint) {
                        throw getMatFormFieldDuplicatedHintError('end');
                    }
                    endHint = hint;
                }
            });
        }
    }
    /** Gets the default float label state. */
    _getDefaultFloatLabelState() {
        return (this._defaults && this._defaults.floatLabel) || this._labelOptions.float || 'auto';
    }
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     */
    _syncDescribedByIds() {
        if (this._control) {
            let ids = [];
            // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.
            if (this._control.userAriaDescribedBy &&
                typeof this._control.userAriaDescribedBy === 'string') {
                ids.push(...this._control.userAriaDescribedBy.split(' '));
            }
            if (this._getDisplayedMessages() === 'hint') {
                const startHint = this._hintChildren ?
                    this._hintChildren.find(hint => hint.align === 'start') : null;
                const endHint = this._hintChildren ?
                    this._hintChildren.find(hint => hint.align === 'end') : null;
                if (startHint) {
                    ids.push(startHint.id);
                }
                else if (this._hintLabel) {
                    ids.push(this._hintLabelId);
                }
                if (endHint) {
                    ids.push(endHint.id);
                }
            }
            else if (this._errorChildren) {
                ids.push(...this._errorChildren.map(error => error.id));
            }
            this._control.setDescribedByIds(ids);
        }
    }
    /** Throws an error if the form field's control is missing. */
    _validateControlChild() {
        if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatFormFieldMissingControlError();
        }
    }
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     */
    updateOutlineGap() {
        const labelEl = this._label ? this._label.nativeElement : null;
        if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length ||
            !labelEl.textContent.trim()) {
            return;
        }
        if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
        }
        // If the element is not present in the DOM, the outline gap will need to be calculated
        // the next time it is checked and in the DOM.
        if (!this._isAttachedToDOM()) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
        }
        let startWidth = 0;
        let gapWidth = 0;
        const container = this._connectionContainerRef.nativeElement;
        const startEls = container.querySelectorAll('.mat-form-field-outline-start');
        const gapEls = container.querySelectorAll('.mat-form-field-outline-gap');
        if (this._label && this._label.nativeElement.children.length) {
            const containerRect = container.getBoundingClientRect();
            // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.
            if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
            }
            const containerStart = this._getStartEnd(containerRect);
            const labelChildren = labelEl.children;
            const labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());
            let labelWidth = 0;
            for (let i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
            }
            startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
        }
        for (let i = 0; i < startEls.length; i++) {
            startEls[i].style.width = `${startWidth}px`;
        }
        for (let i = 0; i < gapEls.length; i++) {
            gapEls[i].style.width = `${gapWidth}px`;
        }
        this._outlineGapCalculationNeededOnStable =
            this._outlineGapCalculationNeededImmediately = false;
    }
    /** Gets the start end of the rect considering the current directionality. */
    _getStartEnd(rect) {
        return (this._dir && this._dir.value === 'rtl') ? rect.right : rect.left;
    }
    /** Checks whether the form field is attached to the DOM. */
    _isAttachedToDOM() {
        const element = this._elementRef.nativeElement;
        if (element.getRootNode) {
            const rootNode = element.getRootNode();
            // If the element is inside the DOM the root node will be either the document
            // or the closest shadow root, otherwise it'll be the element itself.
            return rootNode && rootNode !== element;
        }
        // Otherwise fall back to checking if it's in the document. This doesn't account for
        // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.
        return document.documentElement.contains(element);
    }
}
MatFormField.ɵfac = function MatFormField_Factory(t) { return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8)); };
MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatFormField, selectors: [["mat-form-field"]], contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
    } }, viewQuery: function MatFormField_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
    } }, hostAttrs: [1, "mat-form-field"], hostVars: 44, hostBindings: function MatFormField_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    } }, inputs: { color: "color", floatLabel: "floatLabel", appearance: "appearance", hideRequiredMarker: "hideRequiredMarker", hintLabel: "hintLabel" }, exportAs: ["matFormField"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            { provide: MAT_FORM_FIELD, useExisting: MatFormField },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c5, decls: 15, vars: 8, consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]], template: function MatFormField_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) { return ctx._control.onContainerClick && ctx._control.onContainerClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]], styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"], encapsulation: 2, data: { animation: [matFormFieldAnimations.transitionMessages] }, changeDetection: 0 });
MatFormField.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"],] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"],] }] }
];
MatFormField.propDecorators = {
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hideRequiredMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hintLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    floatLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    underlineRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['underline',] }],
    _connectionContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['connectionContainer', { static: true },] }],
    _inputContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputContainer',] }],
    _label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['label',] }],
    _controlNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MatFormFieldControl,] }],
    _controlStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MatFormFieldControl, { static: true },] }],
    _labelChildNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MatLabel,] }],
    _labelChildStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MatLabel, { static: true },] }],
    _placeholderChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MatPlaceholder,] }],
    _errorChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [MAT_ERROR, { descendants: true },] }],
    _hintChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_MAT_HINT, { descendants: true },] }],
    _prefixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [MAT_PREFIX, { descendants: true },] }],
    _suffixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [MAT_SUFFIX, { descendants: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-form-field',
                exportAs: 'matFormField',
                template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
                animations: [matFormFieldAnimations.transitionMessages],
                host: {
                    'class': 'mat-form-field',
                    '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
                    '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
                    '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
                    '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
                    '[class.mat-form-field-invalid]': '_control.errorState',
                    '[class.mat-form-field-can-float]': '_canLabelFloat()',
                    '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
                    '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
                    '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
                    '[class.mat-form-field-disabled]': '_control.disabled',
                    '[class.mat-form-field-autofilled]': '_control.autofilled',
                    '[class.mat-focused]': '_control.focused',
                    '[class.mat-accent]': 'color == "accent"',
                    '[class.mat-warn]': 'color == "warn"',
                    '[class.ng-untouched]': '_shouldForward("untouched")',
                    '[class.ng-touched]': '_shouldForward("touched")',
                    '[class.ng-pristine]': '_shouldForward("pristine")',
                    '[class.ng-dirty]': '_shouldForward("dirty")',
                    '[class.ng-valid]': '_shouldForward("valid")',
                    '[class.ng-invalid]': '_shouldForward("invalid")',
                    '[class.ng-pending]': '_shouldForward("pending")',
                    '[class._mat-animation-noopable]': '!_animationsEnabled'
                },
                inputs: ['color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    { provide: MAT_FORM_FIELD, useExisting: MatFormField },
                ],
                styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
        }], _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', { static: true }]
        }], _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
        }], _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
        }], _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
        }], _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, { static: true }]
        }], _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
        }], _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, { static: true }]
        }], _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
        }], _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_ERROR, { descendants: true }]
        }], _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_MAT_HINT, { descendants: true }]
        }], _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_PREFIX, { descendants: true }]
        }], _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_SUFFIX, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatFormFieldModule {
}
MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatFormFieldModule });
MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MatFormFieldModule_Factory(t) { return new (t || MatFormFieldModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, { declarations: function () { return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=form-field.js.map

/***/ })

}]);
//# sourceMappingURL=anime-detail-anime-detail-module.js.map