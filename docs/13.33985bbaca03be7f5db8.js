(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ot98:function(e,t,i){"use strict";i.r(t),i.d(t,"MangaFiltersModule",(function(){return oe}));var n=i("ofXK"),a=i("quSY"),r=i("fXoL"),o=i("tyNb"),s=i("VlvX");let l=(()=>{class e{constructor(e,t){this.el=e,this.renderer=t,this.tooltipElement=null}onMouseEnter(){var e,t,i;if(!this.manga)return;if(!(window.innerWidth>768))return;this.tooltipElement=this.renderer.createElement("div");const n=this.renderer.createElement("h6");this.addClasses(n,["font-bold","break-words","tracking-wide","text-[15px]","font-mulish","mb-[5px]"]);const a=this.renderer.createText(this.manga.title_english||this.manga.title);if(this.renderer.appendChild(n,a),this.renderer.appendChild(this.tooltipElement,n),this.manga.title_synonyms.length){const e=this.renderer.createElement("h6"),t=this.renderer.createElement("span");this.addClasses(t,["font-mulish","text-[12px]","italic","font-normal","tracking-wider"]),this.renderer.appendChild(t,this.renderer.createText("Alt Titles: ")),this.renderer.appendChild(e,t),this.renderer.appendChild(e,this.renderer.createText(this.manga.title_synonyms.join(", "))),this.addClasses(e,["text-[12px]","tracking-wider","italic","font-mulish","mb-[5px]"]),this.renderer.setStyle(e,"font-weight","300"),this.renderer.appendChild(this.tooltipElement,e)}const r=this.renderer.createElement("div");this.addClasses(r,["flex","items-center","gap-2","flex-wrap"]);const o=this.renderer.createElement("p"),s=this.renderer.createElement("span");this.addClasses(s,["font-light","text-[15px]"]),this.renderer.addClass(s,"material-icons-outlined"),this.renderer.appendChild(s,this.renderer.createText("book")),this.renderer.appendChild(o,s),this.manga.volumes&&this.renderer.appendChild(o,this.renderer.createText("Vol: "+(this.manga.volumes||"0")+"+; ")),this.renderer.appendChild(o,this.renderer.createText("Ch: "+(this.manga.chapters||"0")+"+")),this.addClasses(o,["flex","items-center","gap-1","pr-2","mb-0"]),this.renderer.setStyle(o,"border-right","1px solid rgb(73, 72, 72)"),this.renderer.appendChild(r,o);const l=this.renderer.createElement("p");this.addClasses(l,["flex","items-center","gap-1","pr-2","mb-0"]),this.renderer.setStyle(l,"border-right","1px solid rgb(73, 72, 72)"),this.renderer.appendChild(l,this.renderer.createText(this.manga.type||"Manga")),this.renderer.appendChild(r,l);const d=this.renderer.createElement("p"),c=this.renderer.createElement("span");this.addClasses(c,["font-light","text-[15px]"]),this.renderer.addClass(c,"material-icons-outlined"),this.renderer.appendChild(c,this.renderer.createText("today")),this.renderer.appendChild(d,c),this.renderer.appendChild(d,this.renderer.createText((null===(t=null===(e=this.manga)||void 0===e?void 0:e.published)||void 0===t?void 0:t.string)||"?")),this.addClasses(d,["flex","items-center","gap-1","pr-2","mb-0"]),this.renderer.setStyle(d,"border-right","1px solid rgb(73, 72, 72)"),this.renderer.appendChild(r,d);const h=this.renderer.createElement("p"),p=this.renderer.createElement("span");this.renderer.setStyle(p,"color","#ffd600"),this.addClasses(p,["font-light","text-[15px]"]),this.renderer.addClass(p,"material-icons-outlined"),this.renderer.appendChild(p,this.renderer.createText("star")),this.renderer.appendChild(h,p),this.renderer.appendChild(h,this.renderer.createText((null===(i=this.manga)||void 0===i?void 0:i.score)||"n/a")),this.addClasses(h,["flex","items-center","gap-1","mb-0"]),this.renderer.appendChild(r,h),this.renderer.appendChild(this.tooltipElement,r);const u=this.renderer.createElement("p");if(this.renderer.appendChild(u,this.renderer.createText(this.manga.background||this.manga.synopsis||"Description Not Available.")),this.addClasses(u,["tracking-wider","my-2","font-mulish","text-[13px]"]),this.renderer.setStyle(u,"font-weight","300"),this.renderer.appendChild(this.tooltipElement,u),this.manga.themes.length){const e=this.renderer.createElement("div");this.addClasses(e,["flex","gap-3","items-start"]);const t=this.renderer.createElement("span");this.renderer.appendChild(t,this.renderer.createText("Themes")),this.addClasses(t,["font-bold","text-[12px]","tracking-wider","py-1"]);const i=this.renderer.createElement("div");this.addClasses(i,["flex","flex-wrap","gap-2"]),this.manga.themes.forEach(e=>{const t=this.renderer.createElement("div");this.addClasses(t,["bg-[#2e2e2e]","font-normal","text-[12px]","tracking-wider","p-1","rounded-sm","px-2"]),this.renderer.appendChild(t,this.renderer.createText(e.name)),this.renderer.appendChild(i,t)}),this.renderer.appendChild(e,t),this.renderer.appendChild(e,i),this.renderer.appendChild(this.tooltipElement,e)}this.renderer.setStyle(this.tooltipElement,"position","absolute"),this.renderer.setStyle(this.tooltipElement,"top","50%"),this.renderer.setStyle(this.tooltipElement,"transform","translateY(-50%)"),this.renderer.setStyle(this.tooltipElement,"left","105%"),this.renderer.setStyle(this.tooltipElement,"background","#1f1f1f"),this.renderer.setStyle(this.tooltipElement,"color","#fff"),this.renderer.setStyle(this.tooltipElement,"padding","10px"),this.renderer.setStyle(this.tooltipElement,"border-radius","4px"),this.renderer.setStyle(this.tooltipElement,"font-size","12px"),this.renderer.setStyle(this.tooltipElement,"z-index","1000"),this.renderer.setStyle(this.tooltipElement,"pointer-events","none"),this.renderer.setStyle(this.tooltipElement,"transition","opacity 0.2s"),this.renderer.setStyle(this.tooltipElement,"opacity","0"),this.renderer.setStyle(this.tooltipElement,"min-width","400px"),this.renderer.setStyle(this.tooltipElement,"width","max-content"),this.renderer.setStyle(this.tooltipElement,"max-width","440px"),this.renderer.setStyle(this.tooltipElement,"overflow","hidden"),this.renderer.setStyle(this.tooltipElement,"opacity","1"),this.renderer.appendChild(this.el.nativeElement,this.tooltipElement),document.body.scrollWidth>document.body.clientWidth&&(this.renderer.removeChild(this.el,this.tooltipElement),this.renderer.setStyle(this.tooltipElement,"left","-324%"),this.renderer.appendChild(this.el.nativeElement,this.tooltipElement))}addClasses(e,t){t.forEach(t=>{this.renderer.addClass(e,t)})}onMouseLeave(){this.tooltipElement&&(this.renderer.removeChild(this.el,this.tooltipElement),this.tooltipElement=null)}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.l),r.Jb(r.E))},e.\u0275dir=r.Eb({type:e,selectors:[["","appMangaTooltip",""]],hostBindings:function(e,t){1&e&&r.Vb("mouseenter",(function(){return t.onMouseEnter()}))("mouseleave",(function(){return t.onMouseLeave()}))},inputs:{manga:["appMangaTooltip","manga"]}}),e})();var d=i("Qu3c");let c=(()=>{class e{constructor(){this.manga=[]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-manga-item"]],inputs:{manga:"manga"},decls:10,vars:6,consts:[[1,"manga-div","gap-1","flex","flex-col","items-center","overflow-hidden","hover:cursor-pointer"],[1,"w-full","h-[170px]","overflow-hidden","rounded-sm","sm:h-[200px]",3,"appMangaTooltip"],["loading","lazy",1,"manga-image","w-full","h-full","object-cover",3,"src"],[1,"w-full"],[1,"text-[11px]","tracking-wider","w-full","mb-0"],[1,"manga-title","tracking-wider","w-full","text-[13px]","mb-0","whitespace-nowrap","text-ellipsis","overflow-hidden",3,"matTooltip"],[1,"tracking-wider","w-full","text-[gray]","text-[11px]","mb-0","whitespace-nowrap","text-ellipsis","overflow-hidden"]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Kb(2,"img",2),r.Nb(),r.Ob(3,"div",3),r.Ob(4,"p",4),r.wc(5),r.Nb(),r.Ob(6,"p",5),r.wc(7),r.Nb(),r.Ob(8,"p",6),r.wc(9),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.zb(1),r.dc("appMangaTooltip",t.manga),r.zb(1),r.dc("src",t.manga.images.webp.large_image_url||t.manga.images.jpg.large_image_url||t.manga.images.webp.image_url||t.manga.images.jpg.image_url,r.pc),r.zb(3),r.yc("#",t.manga.rank||"n/a",""),r.zb(1),r.dc("matTooltip",t.manga.title_english||t.manga.title),r.zb(1),r.yc(" ",t.manga.title_english||t.manga.title,""),r.zb(2),r.yc(" ",t.manga.title_japanese||t.manga.title,""))},directives:[l,d.a],styles:[".manga-image[_ngcontent-%COMP%]{transition:transform .1s ease-in-out,opacity .1s ease-in-out}.manga-div[_ngcontent-%COMP%]:hover   .manga-image[_ngcontent-%COMP%]{transform:translateY(-3px);opacity:.7}.manga-div[_ngcontent-%COMP%]:hover   .manga-title[_ngcontent-%COMP%]{color:var(--color-yellow);font-weight:600}"]}),e})();var h=i("FKr1"),p=i("8LU1"),u=i("3Pt+"),b=i("R1ws"),g=i("u47x"),m=i("0EQZ");const f=["input"],x=function(){return{enterDuration:150}},v=["*"],_=new r.q("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let w=0;const y={provide:u.b,useExisting:Object(r.T)(()=>P),multi:!0};class k{constructor(e,t){this.source=e,this.value=t}}const C=new r.q("MatRadioGroup");let O=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+w++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new r.n}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(p.b)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=Object(p.b)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new k(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.h))},e.\u0275dir=r.Eb({type:e,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),e})(),P=(()=>{class e extends O{}return e.\u0275fac=function(t){return E(t||e)},e.\u0275dir=r.Eb({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){var n;1&e&&r.Cb(i,R,!0),2&e&&r.ic(n=r.Wb())&&(t._radios=n)},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[r.yb([y,{provide:C,useExisting:e}]),r.wb]}),e})();const E=r.Qb(P);class M{constructor(e){this._elementRef=e}}const S=Object(h.i)(Object(h.k)(M));let N=(()=>{class e extends S{constructor(e,t,i,n,a,o,s,l){super(t),this._changeDetector=i,this._focusMonitor=n,this._radioDispatcher=a,this._animationMode=o,this._providerOverride=s,this._uniqueId="mat-radio-"+ ++w,this.id=this._uniqueId,this.change=new r.n,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,l&&(this.tabIndex=Object(p.e)(l,0)),this._removeUniqueSelectionListener=a.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=Object(p.b)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled(Object(p.b)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=Object(p.b)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return(this.id||this._uniqueId)+"-input"}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new k(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(O),r.Jb(r.l),r.Jb(r.h),r.Jb(g.d),r.Jb(m.c),r.Jb(String),r.Jb(void 0),r.Jb(String))},e.\u0275dir=r.Eb({type:e,viewQuery:function(e,t){var i;1&e&&r.Ac(f,!0),2&e&&r.ic(i=r.Wb())&&(t._inputElement=i.first)},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[r.wb]}),e})(),R=(()=>{class e extends N{constructor(e,t,i,n,a,r,o,s){super(e,t,i,n,a,r,o,s)}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(C,8),r.Jb(r.l),r.Jb(r.h),r.Jb(g.d),r.Jb(m.c),r.Jb(b.a,8),r.Jb(_,8),r.Tb("tabindex"))},e.\u0275cmp=r.Db({type:e,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&r.Vb("focus",(function(){return t._inputElement.nativeElement.focus()})),2&e&&(r.Ab("tabindex",-1)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),r.Bb("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[r.wb],ngContentSelectors:v,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(r.cc(),r.Ob(0,"label",0,1),r.Ob(2,"div",2),r.Kb(3,"div",3),r.Kb(4,"div",4),r.Ob(5,"input",5,6),r.Vb("change",(function(e){return t._onInputChange(e)}))("click",(function(e){return t._onInputClick(e)})),r.Nb(),r.Ob(7,"div",7),r.Kb(8,"div",8),r.Nb(),r.Nb(),r.Ob(9,"div",9),r.Ob(10,"span",10),r.wc(11,"\xa0"),r.Nb(),r.bc(12),r.Nb(),r.Nb()),2&e){const e=r.jc(1);r.Ab("for",t.inputId),r.zb(5),r.dc("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),r.Ab("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),r.zb(2),r.dc("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",r.ec(18,x)),r.zb(2),r.Bb("mat-radio-label-before","before"==t.labelPosition)}},directives:[h.e],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),G=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[h.f,h.d],h.d]}),e})();var F=i("kQyY");function z(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",17),r.Vb("click",(function(){r.mc(e);const i=t.$implicit;return r.Xb(2).redirectToMangaDetailPage(i.mal_id)})),r.Kb(1,"app-manga-item",18),r.Nb()}if(2&e){const e=t.$implicit;r.zb(1),r.dc("manga",e)}}function D(e,t){if(1&e&&(r.Mb(0),r.uc(1,z,2,1,"div",16),r.Lb()),2&e){const e=r.Xb();r.zb(1),r.dc("ngForOf",e.mangaData.data)("ngForTrackBy",e.trackById)}}function I(e,t){1&e&&(r.Ob(0,"p",19),r.wc(1," Sorry, No Results Found "),r.Nb())}function A(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",29),r.Vb("click",(function(){return r.mc(e),r.Xb(2).onFirstPageClick()})),r.wc(1," 1 "),r.Nb()}}function T(e,t){1&e&&(r.Ob(0,"button",30),r.wc(1," ... "),r.Nb())}const V=function(e){return{"bg-[seagreen]":e}};function j(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",31),r.Vb("click",(function(){r.mc(e);const i=t.$implicit;return r.Xb(2).onPaginationButtonClick(i)})),r.wc(1),r.Nb()}if(2&e){const e=t.$implicit,i=r.Xb(2);r.dc("ngClass",r.fc(2,V,i.mangaData.pagination.current_page===e)),r.zb(1),r.xc(e)}}function q(e,t){1&e&&(r.Ob(0,"button",32),r.wc(1," ... "),r.Nb())}function B(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",33),r.Vb("click",(function(){r.mc(e);const t=r.Xb(2);return t.onLastPageClick(t.customPagination.buttonRange.last)})),r.wc(1),r.Nb()}if(2&e){const e=r.Xb(2);r.zb(1),r.yc(" ",e.customPagination.buttonRange.last," ")}}function X(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",20),r.Ob(1,"button",21),r.Vb("click",(function(){r.mc(e);const t=r.Xb();return t.onPaginationButtonClick(t.mangaData.pagination.current_page-1)})),r.Ob(2,"span",22),r.wc(3,"keyboard_double_arrow_left"),r.Nb(),r.Nb(),r.uc(4,A,2,0,"button",23),r.uc(5,T,2,0,"button",24),r.uc(6,j,2,4,"button",25),r.uc(7,q,2,0,"button",26),r.uc(8,B,2,1,"button",27),r.Ob(9,"button",28),r.Vb("click",(function(){r.mc(e);const t=r.Xb();return t.onPaginationButtonClick(t.mangaData.pagination.current_page+1)})),r.Ob(10,"span",22),r.wc(11,"keyboard_double_arrow_right"),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=r.Xb();r.zb(1),r.dc("disabled",1===e.mangaData.pagination.current_page),r.zb(3),r.dc("ngIf",1!==e.customPagination.buttonRange.from),r.zb(1),r.dc("ngIf",e.customPagination.buttonRange.from>2),r.zb(1),r.dc("ngForOf",e.getRange().splice(0,5)),r.zb(1),r.dc("ngIf",e.customPagination.buttonRange.last-e.customPagination.buttonRange.from>5),r.zb(1),r.dc("ngIf",e.customPagination.buttonRange.last-e.customPagination.buttonRange.from>4),r.zb(1),r.dc("disabled",!e.mangaData.pagination.has_next_page)}}function J(e,t){if(1&e&&(r.Mb(0),r.wc(1," \xa0"),r.Ob(2,"span",46),r.wc(3),r.Nb(),r.Lb()),2&e){const e=r.Xb(3);r.zb(3),r.yc("(",e.genresSelected.length," Genres Selected)")}}const L=function(e){return{"chip-hover":e}};function Q(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",47),r.Vb("click",(function(){r.mc(e);const i=t.$implicit;return r.Xb(3).onGenreSelect(i.mal_id)})),r.wc(1),r.Nb()}if(2&e){const e=t.$implicit,i=r.Xb(3);r.dc("ngClass",r.fc(2,L,i.genresSelectedMap[e.mal_id])),r.zb(1),r.yc(" ",e.name," ")}}function K(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",48),r.Vb("click",(function(){return r.mc(e),r.Xb(3).clearAllGenres()})),r.wc(1,"Clear Filters"),r.Nb()}}function Y(e,t){if(1&e){const e=r.Pb();r.Ob(0,"button",49),r.Vb("click",(function(){return r.mc(e),r.Xb(3).applyFilters(!0)})),r.wc(1,"Apply Filters"),r.Nb()}}function $(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",39),r.Vb("click",(function(t){return r.mc(e),t.stopPropagation()})),r.Ob(1,"h6",40),r.wc(2," FILTER MANGA BY GENRES "),r.uc(3,J,4,1,"ng-container",15),r.Nb(),r.Ob(4,"div",41),r.uc(5,Q,2,4,"button",42),r.Nb(),r.Ob(6,"div",43),r.uc(7,K,2,0,"button",44),r.uc(8,Y,2,0,"button",45),r.Nb(),r.Nb()}if(2&e){const e=r.Xb(2);r.zb(3),r.dc("ngIf",e.genresSelected.length),r.zb(2),r.dc("ngForOf",e.mangaGenres),r.zb(2),r.dc("ngIf",e.genresSelected.length),r.zb(1),r.dc("ngIf",e.genresSelected.length)}}function W(e,t){if(1&e&&(r.Ob(0,"mat-radio-button",56),r.wc(1),r.Nb()),2&e){const e=t.$implicit;r.dc("value",e.value),r.zb(1),r.yc(" ",e.text," ")}}function Z(e,t){if(1&e&&(r.Ob(0,"mat-radio-button",56),r.wc(1),r.Yb(2,"uppercase"),r.Nb()),2&e){const e=t.$implicit;r.dc("value",e.value),r.zb(1),r.yc(" ",r.Zb(2,2,e.text)," ")}}function U(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",50),r.Vb("click",(function(t){return r.mc(e),t.stopPropagation()})),r.Ob(1,"div"),r.Ob(2,"h6",51),r.wc(3,"SORT"),r.Nb(),r.Ob(4,"div",52),r.Ob(5,"mat-radio-group",53),r.Vb("change",(function(t){return r.mc(e),r.Xb(2).onRadioChange(t,"sort")})),r.uc(6,W,2,2,"mat-radio-button",54),r.Nb(),r.Nb(),r.Nb(),r.Ob(7,"div",55),r.Ob(8,"h6",51),r.wc(9,"ORDEY BY"),r.Nb(),r.Ob(10,"div",52),r.Ob(11,"mat-radio-group",53),r.Vb("change",(function(t){return r.mc(e),r.Xb(2).onRadioChange(t,"order")})),r.uc(12,Z,3,4,"mat-radio-button",54),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&e){const e=r.Xb(2);r.zb(6),r.dc("ngForOf",e.sortOptions),r.zb(6),r.dc("ngForOf",e.orderByOptions)}}function H(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",34),r.Vb("click",(function(){return r.mc(e),r.Xb().closeGenreModal()})),r.Ob(1,"div",35),r.Mb(2,36),r.uc(3,$,9,4,"div",37),r.uc(4,U,13,2,"div",38),r.Lb(),r.Nb(),r.Nb()}if(2&e){const e=r.Xb();r.zb(2),r.dc("ngSwitch",e.showGenreFilterModal),r.zb(1),r.dc("ngSwitchCase",!0),r.zb(1),r.dc("ngSwitchCase",!1)}}function ee(e,t){1&e&&r.Kb(0,"app-loader")}const te=function(e){return{"text-yellow":e}},ie=function(e){return{"text-black":e}};let ne=(()=>{class e{constructor(e,t,i){this._route=e,this._router=t,this._mangaService=i,this.loading=!1,this.showGenreFilterModal=!1,this.showSortingFilterModal=!1,this.genreFilterApplied=!1,this.sub1=null,this.sortOptions=[{value:"asc",text:"A to Z"},{value:"desc",text:"Z to A"}],this.orderByOptions=[{value:"title",text:"Title"},{value:"rank",text:"RANK"},{value:"popularity",text:"Popularity"}],this.filtersApplied={limit:24,status:"publishing",genres:"",sort:"",order_by:""},this.mangaData={pagination:null,data:[]},this.customPagination={buttonRange:{from:1,last:0},data:{}},this.mangaGenres=[],this.genresSelected=[],this.genresSelectedMap={}}ngOnInit(){this.sub1=this._route.queryParamMap.subscribe(e=>{this.filtersApplied.status=e.get("status"),this.mangaData.data=[],this.applyFilters(this.genreFilterApplied)})}trackById(e,t){return t.mal_id}onRadioChange(e,t){switch(t){case"sort":this.filtersApplied.sort=e.value;break;case"order":this.filtersApplied.order_by=e.value}}getRange(){const e=[];for(var t=this.customPagination.buttonRange.from;t<this.customPagination.buttonRange.from+this.customPagination.buttonRange.last;++t)e.push(t);return e}updatePaginationSlice(e){this.customPagination.data[e]={data:this.mangaData.data,pagination:this.mangaData.pagination},1!==e&&(e<=this.customPagination.buttonRange.from?this.customPagination.buttonRange.from-=1:this.mangaData.pagination.has_next_page&&e>=this.customPagination.buttonRange.from+4&&(this.customPagination.buttonRange.from+=1))}onLastPageClick(e){this.customPagination.buttonRange.from=e-4,this.onPaginationButtonClick(e)}onFirstPageClick(){this.customPagination.buttonRange.from=1,this.onPaginationButtonClick(1)}onPaginationButtonClick(e){e in this.customPagination.data?(this.mangaData.data=this.customPagination.data[e].data,this.mangaData.pagination=this.customPagination.data[e].pagination,this.updatePaginationSlice(e)):this.getMangaSearch(Object.assign(Object.assign({},this.filtersApplied),{page:e}))}onGenreSelect(e){const t=this.genresSelected.indexOf(e);t>-1?(this.genresSelected.splice(t,1),this.genresSelectedMap[e]=!1):(this.genresSelected.push(e),this.genresSelectedMap[e]=!0)}filterByGenres(){this.mangaGenres.length<1?this.getMangaGenres():this.showGenreFilterModal=!0}closeGenreModal(){this.showGenreFilterModal=!1,this.showSortingFilterModal=!1}applyFilters(e){this.mangaData.data=[],this.customPagination.buttonRange.from=1,this.genreFilterApplied=e,this.customPagination.data={};const t=this.genresSelected.join(",");t&&(this.filtersApplied.genres=t),this.getMangaSearch(this.filtersApplied),this.showGenreFilterModal=!1}clearAllGenres(){this.genreFilterApplied=!1,this.filtersApplied.genres="",this.genresSelected=[],this.mangaData.data=[],this.customPagination.buttonRange.from=1,Object.keys(this.genresSelectedMap).forEach(e=>{this.genresSelectedMap[e]=!1}),this.customPagination.data={},this.getMangaSearch(this.filtersApplied),this.showGenreFilterModal=!1}updateQueryParam(e){this._router.navigate([],{relativeTo:this._route,queryParamsHandling:"merge",queryParams:{status:e}})}getMangaSearch(e){this.loading=!0,this._mangaService.getMangaSearch(e).then(e=>{this.mangaData.data=e.data,this.mangaData.pagination=e.pagination,this.loading=!1;const t=Number(e.pagination.current_page),i=Number(e.pagination.last_visible_page);this.customPagination.buttonRange.last=i,this.updatePaginationSlice(t)}).catch(e=>{this.loading=!1,console.log(e)})}getMangaGenres(){this.loading=!0,this._mangaService.getMangaGenres().then(e=>{this.mangaGenres=e.data,this.mangaGenres=this.mangaGenres.reduce((e,t)=>(e.some(e=>e.mal_id===t.mal_id)||e.push(t),e),[]),this.filterByGenres(),this.loading=!1}).catch(e=>{this.loading=!1,console.log("Error: ",e)})}redirectToMangaDetailPage(e){this._router.navigate(["/manga/"+e])}ngOnDestroy(){this.sub1 instanceof a.a&&this.sub1.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(o.a),r.Jb(o.b),r.Jb(s.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-manga-filters"]],decls:28,vars:20,consts:[[1,"flex","flex-col","justify-between","md:items-center","md:flex-row"],[1,"flex-1","p-4","py-3"],[1,"m-0","p-2"],[1,"tracking-wide","opacity-70","cursor-pointer","text-lg","hover:opacity-100","md:text-xl",3,"ngClass","click"],[1,"custom-container",2,"margin-top",".8rem"],[1,"mb-3","flex","justify-end","gap-2"],["type","button",1,"group","flex","items-center","border-1","p-1","px-3","rounded-[16px]","hover:bg-[#ffd600]","hover:text-black",3,"click"],[1,"material-icons-outlined","text-[16px]","group-hover:text-black"],["type","button",1,"group","flex","items-center","border-1","p-1","px-3","rounded-[16px]","hover:bg-[#ffd600]","hover:text-black",3,"ngClass","click"],[1,"material-icons-outlined","text-[16px]","group-hover:text-black",3,"ngClass"],[1,"grid","grid-cols-3","sm:grid-cols-4","md:grid-cols-5","lg:grid-cols-8",2,"row-gap","1.2rem!important","column-gap","1rem!important"],[4,"ngIf","ngIfElse"],["noDataDiv",""],["class","my-4 flex flex-wrap justify-center items-center gap-2",4,"ngIf"],["class","fixed top-0 left-0 h-screen w-screen overlay",3,"click",4,"ngIf"],[4,"ngIf"],["class","relative w-full",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"relative","w-full",3,"click"],[3,"manga"],[1,"col-span-8","text-center","tracking-wider","text-[#bebebe]","text-md","md:text-lg"],[1,"my-4","flex","flex-wrap","justify-center","items-center","gap-2"],[1,"text-sm","font-mulish","bg-[#3e3e3e]","p-2","py-1","font-bold","hover:bg-[#6c6b6b]",3,"disabled","click"],[1,"material-icons-outlined","text-sm"],["class","font-mulish bg-[#3e3e3e] p-2 py-1 font-bold hover:bg-[#6c6b6b] text-[12px] sm:text-sm",3,"click",4,"ngIf"],["class","font-mulish py-1 font-bold text-[12px] sm:text-sm","style","cursor: default!important;",4,"ngIf"],["class","font-mulish bg-[#3e3e3e] p-2 py-1 font-bold text-[12px] hover:bg-[#6c6b6b] sm:text-sm",3,"ngClass","click",4,"ngFor","ngForOf"],["class","text-sm font-mulish py-1 font-bold","style","cursor: default!important;",4,"ngIf"],["class","font-mulish bg-[#3e3e3e] p-2 py-1 font-bold text-[12px] hover:bg-[#6c6b6b] sm:text-sm",3,"click",4,"ngIf"],[1,"font-mulish","bg-[#3e3e3e]","p-2","py-1","font-bold","text-[12px]","hover:bg-[#6c6b6b]","sm:text-sm",3,"disabled","click"],[1,"font-mulish","bg-[#3e3e3e]","p-2","py-1","font-bold","hover:bg-[#6c6b6b]","text-[12px]","sm:text-sm",3,"click"],[1,"font-mulish","py-1","font-bold","text-[12px]","sm:text-sm",2,"cursor","default!important"],[1,"font-mulish","bg-[#3e3e3e]","p-2","py-1","font-bold","text-[12px]","hover:bg-[#6c6b6b]","sm:text-sm",3,"ngClass","click"],[1,"text-sm","font-mulish","py-1","font-bold",2,"cursor","default!important"],[1,"font-mulish","bg-[#3e3e3e]","p-2","py-1","font-bold","text-[12px]","hover:bg-[#6c6b6b]","sm:text-sm",3,"click"],[1,"fixed","top-0","left-0","h-screen","w-screen","overlay",3,"click"],[1,"w-full","h-full","flex","justify-center","items-center"],[3,"ngSwitch"],["style","padding-right: .5rem!important;","class","relative bg-[#191919] w-[90%] max-h-[75%] p-3 pb-0 overflow-auto rounded-md md:w-[50%] md:max-h-[75%]",3,"click",4,"ngSwitchCase"],["class","bg-[#191919] max-w-[90%] w-[90%] max-h-[75%] h-max p-3 overflow-auto rounded-lg md:max-w-[50%] md:w-[50%] lg:max-w-[35%] lg:w-[35%]",3,"click",4,"ngSwitchCase"],[1,"relative","bg-[#191919]","w-[90%]","max-h-[75%]","p-3","pb-0","overflow-auto","rounded-md","md:w-[50%]","md:max-h-[75%]",2,"padding-right",".5rem!important",3,"click"],[1,"mb-4"],[1,"flex","flex-wrap","gap-[.7rem]"],["class","border-1 color-[#bebebe] px-[10px] py-1 text-[13px] tracking-wider rounded-[16px] hover:bg-[gray] hover:text-white","type","button",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"sticky","bottom-0","left-0","w-full","bg-[#191919]","flex","justify-end","gap-2","py-[7px]"],["class","text-[11px] tracking-wider rounded-sm bg-[seagreen] text-white p-2 py-1 hover:bg-[red] md:text-[13px]",3,"click",4,"ngIf"],["class","text-[11px] tracking-wider rounded-sm bg-[#ffd600] text-black p-2 py-1 hover:bg-[#e1be08] md:text-[13px]",3,"click",4,"ngIf"],[1,"text-[gray]","font-light"],["type","button",1,"border-1","color-[#bebebe]","px-[10px]","py-1","text-[13px]","tracking-wider","rounded-[16px]","hover:bg-[gray]","hover:text-white",3,"ngClass","click"],[1,"text-[11px]","tracking-wider","rounded-sm","bg-[seagreen]","text-white","p-2","py-1","hover:bg-[red]","md:text-[13px]",3,"click"],[1,"text-[11px]","tracking-wider","rounded-sm","bg-[#ffd600]","text-black","p-2","py-1","hover:bg-[#e1be08]","md:text-[13px]",3,"click"],[1,"bg-[#191919]","max-w-[90%]","w-[90%]","max-h-[75%]","h-max","p-3","overflow-auto","rounded-lg","md:max-w-[50%]","md:w-[50%]","lg:max-w-[35%]","lg:w-[35%]",3,"click"],[1,"mb-3","tracking-wider"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-col","gap-3",3,"change"],["class","text-white tracking-wider",3,"value",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"text-white","tracking-wider",3,"value"]],template:function(e,t){if(1&e&&(r.Ob(0,"div",0),r.Ob(1,"h4",1),r.wc(2,"Manga List"),r.Nb(),r.Ob(3,"nav"),r.Ob(4,"ul",2),r.Ob(5,"li",3),r.Vb("click",(function(){return t.updateQueryParam("publishing")})),r.wc(6," Ongoing"),r.Nb(),r.Ob(7,"li",3),r.Vb("click",(function(){return t.updateQueryParam("complete")})),r.wc(8," Completed"),r.Nb(),r.Ob(9,"li",3),r.Vb("click",(function(){return t.updateQueryParam("discontinued")})),r.wc(10," Discontinued"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(11,"div",4),r.Ob(12,"div",5),r.Ob(13,"button",6),r.Vb("click",(function(){return t.showSortingFilterModal=!0})),r.Ob(14,"span",7),r.wc(15,"swap_vert"),r.Nb(),r.wc(16,"\xa0A to Z "),r.Nb(),r.Ob(17,"button",8),r.Vb("click",(function(){return t.filterByGenres()})),r.Ob(18,"span",9),r.wc(19,"tune"),r.Nb(),r.wc(20,"\xa0Genres "),r.Nb(),r.Nb(),r.Ob(21,"div",10),r.uc(22,D,2,2,"ng-container",11),r.uc(23,I,2,0,"ng-template",null,12,r.vc),r.Nb(),r.uc(25,X,12,7,"div",13),r.Nb(),r.uc(26,H,5,3,"div",14),r.uc(27,ee,1,0,"app-loader",15)),2&e){const e=r.jc(24);r.zb(5),r.dc("ngClass",r.fc(10,te,"publishing"===t.filtersApplied.status)),r.zb(2),r.dc("ngClass",r.fc(12,te,"complete"===t.filtersApplied.status)),r.zb(2),r.dc("ngClass",r.fc(14,te,"discontinued"===t.filtersApplied.status)),r.zb(8),r.dc("ngClass",r.fc(16,L,t.genreFilterApplied)),r.zb(1),r.dc("ngClass",r.fc(18,ie,t.genreFilterApplied)),r.zb(4),r.dc("ngIf",t.mangaData.data.length)("ngIfElse",e),r.zb(3),r.dc("ngIf",t.mangaData.pagination&&t.mangaData.pagination.current_page),r.zb(1),r.dc("ngIf",t.showGenreFilterModal||t.showSortingFilterModal),r.zb(1),r.dc("ngIf",t.loading)}},directives:[n.k,n.m,n.l,c,n.o,n.p,P,R,F.a],pipes:[n.t],styles:[".mat-radio-button  .mat-radio-outer-circle{border-color:#fff!important} .mat-radio-button.mat-accent  .mat-radio-checked .mat-radio-inner-circle{background-color:#fff!important} .mat-radio-button  .mat-radio-outer-circle:hover{border-color:#fff!important} .mat-radio-inner-circle,  .mat-radio-ripple .mat-ripple-element{background-color:#ffd600!important}h4[_ngcontent-%COMP%]{text-align:center}nav[_ngcontent-%COMP%]{background:linear-gradient(270deg,#191919,#671b1b 50%,#191919)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid hsla(0,0%,100%,.2)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:center}.text-yellow[_ngcontent-%COMP%]{color:var(--color-yellow);opacity:1}.custom-container[_ngcontent-%COMP%]{width:100%;max-width:1250px;padding-left:7px;padding-right:7px;margin-left:auto;margin-right:auto}.manga-image-overlay[_ngcontent-%COMP%]{display:none}.overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.7)}.chip-hover[_ngcontent-%COMP%]{background-color:#ffd600;color:#000}@media screen and (min-width:768px){nav[_ngcontent-%COMP%]{background:linear-gradient(90deg,#191919,#831518)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1.6rem;padding-right:1rem!important}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){padding-right:1rem}h4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#000,transparent);text-align:left}.custom-container[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}}"]}),e})();var ae=i("eNvI");const re=[{path:"",component:ne}];let oe=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[n.c,ae.a,d.b,G,o.e.forChild(re)]]}),e})()}}]);