(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kttf:function(e,t,n){"use strict";n.r(t),n.d(t,"AnimeFiltersModule",(function(){return z}));var i=n("ofXK"),r=n("quSY"),a=n("fXoL"),s=n("b/W4"),o=n("tyNb");let l=(()=>{class e{constructor(e,t){this.renderer=e,this.el=t,this.anime=null,this.tooltipElement=null}onMouseEnter(){var e,t,n,i;if(!this.anime)return;if(!(window.innerWidth>768))return;this.tooltipElement=this.renderer.createElement("div");const r=this.renderer.createElement("h6");this.addClasses(r,["font-bold","break-words","tracking-wide","text-[15px]","font-mulish","mb-[5px]"]);const a=this.renderer.createText(this.anime.title_english||this.anime.title);if(this.renderer.appendChild(r,a),this.renderer.appendChild(this.tooltipElement,r),this.anime.title_synonyms.length){const e=this.renderer.createElement("h6"),t=this.renderer.createElement("span");this.addClasses(t,["font-mulish","text-[12px]","italic","font-normal","tracking-wider","mb-[5px]"]),this.renderer.appendChild(t,this.renderer.createText("Alt Titles: ")),this.renderer.appendChild(e,t),this.renderer.appendChild(e,this.renderer.createText(this.anime.title_synonyms.join(", "))),this.addClasses(e,["text-[12px]","tracking-wider","italic","font-mulish"]),this.renderer.setStyle(e,"font-weight","300"),this.renderer.appendChild(this.tooltipElement,e)}const s=this.renderer.createElement("div");this.addClasses(s,["flex","items-center","gap-2","flex-wrap"]);const o=this.renderer.createElement("p"),l=this.renderer.createElement("span");this.addClasses(l,["font-light","text-[15px]"]),this.renderer.addClass(l,"material-icons-outlined"),this.renderer.appendChild(l,this.renderer.createText("desktop_windows")),this.renderer.appendChild(o,l),this.renderer.appendChild(o,this.renderer.createText((null===(e=this.anime)||void 0===e?void 0:e.duration)||"Duration not available")),this.addClasses(o,["flex","items-center","gap-1","pr-2","mb-0"]),this.renderer.setStyle(o,"border-right","1px solid rgb(73, 72, 72)"),this.renderer.appendChild(s,o);const c=this.renderer.createElement("p");this.addClasses(c,["flex","items-center","gap-1","pr-2","mb-0"]),this.renderer.setStyle(c,"border-right","1px solid rgb(73, 72, 72)"),this.renderer.appendChild(c,this.renderer.createText(this.anime.type||"MOVIE")),this.renderer.appendChild(s,c);const d=this.renderer.createElement("p"),p=this.renderer.createElement("span");this.addClasses(p,["font-light","text-[15px]"]),this.renderer.addClass(p,"material-icons-outlined"),this.renderer.appendChild(p,this.renderer.createText("today")),this.renderer.appendChild(d,p),this.renderer.appendChild(d,this.renderer.createText((null===(n=null===(t=this.anime)||void 0===t?void 0:t.aired)||void 0===n?void 0:n.string)||"?")),this.addClasses(d,["flex","items-center","gap-1","pr-2","mb-0"]),this.renderer.setStyle(d,"border-right","1px solid rgb(73, 72, 72)"),this.renderer.appendChild(s,d);const h=this.renderer.createElement("p"),g=this.renderer.createElement("span");this.renderer.setStyle(g,"color","#ffd600"),this.addClasses(g,["font-light","text-[15px]"]),this.renderer.addClass(g,"material-icons-outlined"),this.renderer.appendChild(g,this.renderer.createText("star")),this.renderer.appendChild(h,g),this.renderer.appendChild(h,this.renderer.createText((null===(i=this.anime)||void 0===i?void 0:i.score)||"n/a")),this.addClasses(h,["flex","items-center","gap-1","mb-0"]),this.renderer.appendChild(s,h),this.renderer.appendChild(this.tooltipElement,s);const m=this.renderer.createElement("p");if(this.renderer.appendChild(m,this.renderer.createText(this.anime.background||this.anime.synopsis||"Description Not Available.")),this.addClasses(m,["tracking-wider","my-2","font-mulish","text-[13px]"]),this.renderer.setStyle(m,"font-weight","300"),this.renderer.appendChild(this.tooltipElement,m),this.anime.source){const e=this.renderer.createElement("p");this.renderer.appendChild(e,this.renderer.createText("Source: "+this.anime.source)),this.addClasses(e,["italic","tracking-wider","mb-2","font-mulish","text-[11px]"]),this.renderer.appendChild(this.tooltipElement,e)}if(this.anime.themes.length){const e=this.renderer.createElement("div");this.addClasses(e,["flex","gap-3","items-start"]);const t=this.renderer.createElement("span");this.renderer.appendChild(t,this.renderer.createText("Themes")),this.addClasses(t,["font-bold","text-[12px]","tracking-wider","py-1"]);const n=this.renderer.createElement("div");this.addClasses(n,["flex","flex-wrap","gap-2"]),this.anime.themes.forEach(e=>{const t=this.renderer.createElement("div");this.addClasses(t,["bg-[#2e2e2e]","font-normal","text-[12px]","tracking-wider","p-1","rounded-sm","px-2"]),this.renderer.appendChild(t,this.renderer.createText(e.name)),this.renderer.appendChild(n,t)}),this.renderer.appendChild(e,t),this.renderer.appendChild(e,n),this.renderer.appendChild(this.tooltipElement,e)}this.renderer.setStyle(this.tooltipElement,"position","absolute"),this.renderer.setStyle(this.tooltipElement,"top","50%"),this.renderer.setStyle(this.tooltipElement,"transform","translateY(-50%)"),this.renderer.setStyle(this.tooltipElement,"left","105%"),this.renderer.setStyle(this.tooltipElement,"background","#1f1f1f"),this.renderer.setStyle(this.tooltipElement,"color","#fff"),this.renderer.setStyle(this.tooltipElement,"padding","10px"),this.renderer.setStyle(this.tooltipElement,"border-radius","4px"),this.renderer.setStyle(this.tooltipElement,"font-size","12px"),this.renderer.setStyle(this.tooltipElement,"z-index","1000"),this.renderer.setStyle(this.tooltipElement,"pointer-events","none"),this.renderer.setStyle(this.tooltipElement,"transition","opacity 0.2s"),this.renderer.setStyle(this.tooltipElement,"opacity","0"),this.renderer.setStyle(this.tooltipElement,"min-width","400px"),this.renderer.setStyle(this.tooltipElement,"width","max-content"),this.renderer.setStyle(this.tooltipElement,"max-width","440px"),this.renderer.setStyle(this.tooltipElement,"overflow","hidden"),this.renderer.setStyle(this.tooltipElement,"opacity","1"),this.renderer.appendChild(this.el.nativeElement,this.tooltipElement),document.body.scrollWidth>document.body.clientWidth&&(this.renderer.removeChild(this.el,this.tooltipElement),this.renderer.setStyle(this.tooltipElement,"left","-324%"),this.renderer.appendChild(this.el.nativeElement,this.tooltipElement))}addClasses(e,t){t.forEach(t=>{this.renderer.addClass(e,t)})}onMouseLeave(){this.tooltipElement&&(this.renderer.removeChild(this.el,this.tooltipElement),this.tooltipElement=null)}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(a.E),a.Jb(a.l))},e.\u0275dir=a.Eb({type:e,selectors:[["","appAnimeTooltip",""]],hostBindings:function(e,t){1&e&&a.Vb("mouseenter",(function(){return t.onMouseEnter()}))("mouseleave",(function(){return t.onMouseLeave()}))},inputs:{anime:["appAnimeTooltip","anime"]}}),e})(),c=(()=>{class e{constructor(){this.anime=[]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Db({type:e,selectors:[["app-anime-item"]],inputs:{anime:"anime"},decls:10,vars:5,consts:[[1,"anime-div","gap-1","flex","flex-col","items-center","overflow-hidden","hover:cursor-pointer"],[1,"w-full","h-[170px]","overflow-hidden","rounded-sm","sm:h-[200px]",3,"appAnimeTooltip"],["loading","lazy",1,"anime-image","w-full","h-full","object-cover",3,"src"],[1,"w-full"],[1,"text-[11px]","tracking-wider","w-full","mb-0"],[1,"anime-title","tracking-wider","w-full","text-[13px]","mb-0","whitespace-nowrap","text-ellipsis","overflow-hidden"],[1,"tracking-wider","w-full","text-[gray]","text-[11px]","mb-0","whitespace-nowrap","text-ellipsis","overflow-hidden"]],template:function(e,t){1&e&&(a.Ob(0,"div",0),a.Ob(1,"div",1),a.Kb(2,"img",2),a.Nb(),a.Ob(3,"div",3),a.Ob(4,"p",4),a.wc(5),a.Nb(),a.Ob(6,"p",5),a.wc(7),a.Nb(),a.Ob(8,"p",6),a.wc(9),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.zb(1),a.dc("appAnimeTooltip",t.anime),a.zb(1),a.dc("src",t.anime.images.webp.large_image_url||t.anime.images.jpg.large_image_url||t.anime.images.webp.image_url||t.anime.images.jpg.image_url,a.pc),a.zb(3),a.yc("#",t.anime.rank||"n/a",""),a.zb(2),a.yc(" ",t.anime.title_english||t.anime.title,""),a.zb(2),a.yc(" ",t.anime.title_japanese||t.anime.title,""))},directives:[l],styles:[".anime-image[_ngcontent-%COMP%]{transition:transform .1s ease-in-out,opacity .1s ease-in-out}.anime-div[_ngcontent-%COMP%]:hover   .anime-image[_ngcontent-%COMP%]{transform:translateY(-3px);opacity:.7}.anime-div[_ngcontent-%COMP%]:hover   .anime-title[_ngcontent-%COMP%]{color:var(--color-yellow);font-weight:600}"]}),e})();var d=n("kQyY");function p(e,t){if(1&e){const e=a.Pb();a.Ob(0,"div",22),a.Vb("click",(function(){a.mc(e);const n=t.$implicit;return a.Xb(2).redirectToAnimePage(n.mal_id)})),a.Kb(1,"app-anime-item",23),a.Nb()}if(2&e){const e=t.$implicit;a.zb(1),a.dc("anime",e)}}function h(e,t){if(1&e&&(a.Mb(0),a.uc(1,p,2,1,"div",21),a.Lb()),2&e){const e=a.Xb();a.zb(1),a.dc("ngForOf",e.animeData)}}function g(e,t){1&e&&(a.Ob(0,"p",24),a.wc(1," Sorry, No Results Found "),a.Nb())}function m(e,t){if(1&e){const e=a.Pb();a.Ob(0,"button",25),a.Vb("click",(function(){return a.mc(e),a.Xb().onFirstPageClick()})),a.wc(1," 1 "),a.Nb()}}function u(e,t){1&e&&(a.Ob(0,"button",26),a.wc(1," ... "),a.Nb())}const b=function(e){return{"active-page-btn":e}};function f(e,t){if(1&e){const e=a.Pb();a.Ob(0,"button",27),a.Vb("click",(function(){a.mc(e);const n=t.$implicit;return a.Xb().onPageChange(n)})),a.wc(1),a.Nb()}if(2&e){const e=t.$implicit,n=a.Xb();a.dc("ngClass",a.fc(2,b,n.customPagination.current_page===e)),a.zb(1),a.yc(" ",e," ")}}function x(e,t){1&e&&(a.Ob(0,"button",26),a.wc(1," ... "),a.Nb())}function y(e,t){if(1&e){const e=a.Pb();a.Ob(0,"button",25),a.Vb("click",(function(){return a.mc(e),a.Xb().onLastPageClick()})),a.wc(1),a.Nb()}if(2&e){const e=a.Xb();a.zb(1),a.yc(" ",e.customPagination.last_page," ")}}function v(e,t){if(1&e&&(a.Mb(0),a.wc(1," \xa0"),a.Ob(2,"span",37),a.wc(3),a.Nb(),a.Lb()),2&e){const e=a.Xb(2);a.zb(3),a.yc("(",e.getSelectedGenresLength()," Genres Selected)")}}const w=function(e){return{"chip-hover":e}};function C(e,t){if(1&e){const e=a.Pb();a.Ob(0,"button",38),a.Vb("click",(function(){a.mc(e);const n=t.$implicit;return a.Xb(2).onGenreSelect(n.mal_id)})),a.wc(1),a.Nb()}if(2&e){const e=t.$implicit,n=a.Xb(2);a.dc("ngClass",a.fc(2,w,n.genresSelectedMap[e.mal_id])),a.zb(1),a.yc(" ",e.name," ")}}function P(e,t){if(1&e){const e=a.Pb();a.Ob(0,"button",39),a.Vb("click",(function(){return a.mc(e),a.Xb(2).clearAllGenres()})),a.wc(1,"Clear Filters"),a.Nb()}}function k(e,t){if(1&e){const e=a.Pb();a.Ob(0,"button",40),a.Vb("click",(function(){return a.mc(e),a.Xb(2).applyGenreFilter()})),a.wc(1,"Apply Filters"),a.Nb()}}function O(e,t){if(1&e){const e=a.Pb();a.Ob(0,"div",28),a.Vb("click",(function(){return a.mc(e),a.Xb().closeModal()})),a.Ob(1,"div",29),a.Ob(2,"div",30),a.Vb("click",(function(t){return a.mc(e),t.stopPropagation()})),a.Ob(3,"h6",31),a.wc(4," FILTER ANIME BY GENRES "),a.uc(5,v,4,1,"ng-container",20),a.Nb(),a.Ob(6,"div",32),a.uc(7,C,2,4,"button",33),a.Nb(),a.Ob(8,"div",34),a.uc(9,P,2,0,"button",35),a.uc(10,k,2,0,"button",36),a.Nb(),a.Nb(),a.Nb(),a.Nb()}if(2&e){const e=a.Xb();a.zb(5),a.dc("ngIf",e.getSelectedGenresLength()),a.zb(2),a.dc("ngForOf",e.animeGenres),a.zb(2),a.dc("ngIf",e.getSelectedGenresLength()||e.genreFilterApplied),a.zb(1),a.dc("ngIf",e.getSelectedGenresLength())}}function _(e,t){1&e&&a.Kb(0,"app-loader")}const S=function(e){return{"text-yellow":e}},E=function(e,t){return{"bg-[#ffd600]":e,"text-black":t}},M=function(e){return{"text-black":e}};let N=(()=>{class e{constructor(e,t,n){this._animeService=e,this._route=t,this._router=n,this.loading=!1,this.showGenreFilterModal=!1,this.genreFilterApplied=!1,this.animeData=[],this.genresSelectedMap={},this.sub=null,this.customPagination={limit:24,data:{},current_page:1,buttonStart:1,last_page:1,range:10},this.filtersApplied={status:"",genres:"",sfw:!0},this.animeGenres=[]}ngOnInit(){this.sub=this._route.queryParamMap.subscribe(e=>{this.customPagination.buttonStart=1,this.customPagination.current_page=1,this.customPagination.last_page=1,this.customPagination.data={},this.filtersApplied.status=e.get("status")||"",this.filtersApplied.genres=e.get("genres")||"",this.filtersApplied.genres&&(this.genreFilterApplied=!0,this.filtersApplied.genres.split(",").forEach(e=>{e=Number(e),this.genresSelectedMap[e]=!0})),this.getAnimeSearch(Object.assign({},this.filtersApplied),this.customPagination.current_page)})}ngOnDestroy(){this.sub instanceof r.a&&this.sub.unsubscribe()}updatePagination(e){e=Number(e),this.customPagination.current_page=e;const t=Number(this.customPagination.current_page),n=this.customPagination.buttonStart;1!==t&&t!==this.customPagination.last_page&&(t>=this.customPagination.buttonStart+(this.customPagination.range-1)?this.customPagination.buttonStart+=1:t<=n&&(this.customPagination.buttonStart-=1))}onLastPageClick(){this.customPagination.buttonStart=this.customPagination.last_page-(this.customPagination.range-1),this.onPageChange(this.customPagination.last_page)}onFirstPageClick(){this.customPagination.buttonStart=1,this.onPageChange(1)}onPageChange(e){(e=Number(e))in this.customPagination.data?(this.animeData=this.customPagination.data[e],this.updatePagination(e)):this.getAnimeSearch(Object.assign({},this.filtersApplied),e)}getSelectedGenresLength(){var e=0;return Object.keys(this.genresSelectedMap).forEach(t=>{!0===this.genresSelectedMap[t]&&(e+=1)}),e}onGenreSelect(e){this.genresSelectedMap[e]=!(e in this.genresSelectedMap)||!0!==this.genresSelectedMap[e]}redirectToAnimePage(e){this._router.navigate(["/anime/"+e])}applyGenreFilter(){const e=[];Object.keys(this.genresSelectedMap).forEach(t=>{!0===this.genresSelectedMap[t]&&e.push(t)});const t=e.join(",");this._router.navigate([],{relativeTo:this._route,queryParamsHandling:"merge",queryParams:{status:this.filtersApplied.status,genres:t}}),this.genreFilterApplied=!0,this.showGenreFilterModal=!1}clearAllGenres(){this.filtersApplied.genres="",Object.keys(this.genresSelectedMap).forEach(e=>{this.genresSelectedMap[e]=!1}),this.genreFilterApplied&&(this.genreFilterApplied=!1,this.customPagination.buttonStart=1,this.customPagination.data={},this.animeData=[],this._router.navigate([],{relativeTo:this._route,queryParamsHandling:"merge",queryParams:{status:this.filtersApplied.status,genres:null}}),this.showGenreFilterModal=!1)}showGenresModal(){this.animeGenres.length?this.showGenreFilterModal=!0:this.getAnimeGenres()}closeModal(){this.showGenreFilterModal=!1}rangePaginationButtons(e,t){const n=Number(e),i=Number(t);return n>i?[]:Array.from({length:i-n+1},(e,t)=>n+t)}updateStatusQueryParam(e){this._router.navigate([],{relativeTo:this._route,queryParamsHandling:"merge",queryParams:{status:e}})}getAnimeGenres(){this.loading=!0,this._animeService.getAnimeGenres().then(e=>{this.animeGenres=e.data,this.showGenreFilterModal=!0,this.loading=!1}).catch(e=>{console.log("Error: ",e),this.loading=!1})}getAnimeSearch(e,t){this.loading=!0,e.page=t,e.limit=this.customPagination.limit,this._animeService.getAnimeSearch(e).then(e=>{this.animeData=e.data,this.customPagination.last_page=e.pagination.last_visible_page,this.customPagination.data[e.pagination.current_page]=e.data,this.updatePagination(e.pagination.current_page),this.loading=!1}).catch(e=>{console.log("Error: ",e),this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(s.a),a.Jb(o.a),a.Jb(o.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-anime-filters"]],decls:37,vars:27,consts:[[1,"flex","flex-col","justify-between","md:items-center","md:flex-row"],[1,"flex-1","p-4","py-3"],[1,"m-0","p-2"],[1,"tracking-wide","opacity-70","cursor-pointer","text-lg","hover:opacity-100","md:text-xl",3,"ngClass","click"],[1,"custom-container",2,"margin-top",".8rem"],[1,"mb-3","flex","justify-end","gap-2"],["type","button",1,"group","flex","items-center","border-1","p-1","px-3","rounded-[16px]","hover:bg-[#ffd600]","hover:text-black"],[1,"material-icons-outlined","text-[16px]","group-hover:text-black"],["type","button",1,"group","flex","items-center","border-1","p-1","px-3","rounded-[16px]","hover:bg-[#ffd600]","hover:text-black",3,"ngClass","click"],[1,"material-icons-outlined","text-[16px]","group-hover:text-black",3,"ngClass"],[1,"grid","grid-cols-3","sm:grid-cols-4","md:grid-cols-5","lg:grid-cols-8",2,"row-gap","1.2rem!important","column-gap","1rem!important"],[4,"ngIf","ngIfElse"],["noDataDiv",""],[1,"my-8","flex-wrap","flex","justify-center","items-center","gap-2"],["type","button",1,"bg-[#3e3e3e]","text-[12px]","px-2","py-1","rounded-md","border-1","border-[gray]","tracking-wider","hover:bg-[#ffd600]","hover:text-black","md:text-sm",3,"disabled","click"],["type","button","class","bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm",3,"click",4,"ngIf"],["type","button","class","text-[12px] px-2 py-1 rounded-md border-1 border-[gray] md:text-sm",4,"ngIf"],["type","button","class","bg-[#3e3e3e] text-[12px] px-2 py-1 rounded-md border-1 border-[gray] hover:bg-[#ffd600] hover:text-black md:text-sm",3,"ngClass","click",4,"ngFor","ngForOf"],["type","button",1,"bg-[#3e3e3e]","text-[12px]","px-2","py-1","text-sm","rounded-md","border-1","border-[gray]","tracking-wider","hover:bg-[#ffd600]","hover:text-black","md:text-sm",3,"disabled","click"],["class","fixed top-0 left-0 h-screen w-screen overlay",3,"click",4,"ngIf"],[4,"ngIf"],["class","relative w-full",3,"click",4,"ngFor","ngForOf"],[1,"relative","w-full",3,"click"],[3,"anime"],[1,"col-span-8","text-center","tracking-wider","text-[#bebebe]","text-md","md:text-lg"],["type","button",1,"bg-[#3e3e3e]","text-[12px]","px-2","py-1","rounded-md","border-1","border-[gray]","hover:bg-[#ffd600]","hover:text-black","md:text-sm",3,"click"],["type","button",1,"text-[12px]","px-2","py-1","rounded-md","border-1","border-[gray]","md:text-sm"],["type","button",1,"bg-[#3e3e3e]","text-[12px]","px-2","py-1","rounded-md","border-1","border-[gray]","hover:bg-[#ffd600]","hover:text-black","md:text-sm",3,"ngClass","click"],[1,"fixed","top-0","left-0","h-screen","w-screen","overlay",3,"click"],[1,"w-full","h-full","flex","justify-center","items-center"],[1,"relative","bg-[#191919]","w-[90%]","max-h-[75%]","p-3","pb-0","overflow-auto","rounded-md","md:w-[50%]","md:max-h-[75%]",2,"padding-right",".5rem!important",3,"click"],[1,"mb-4"],[1,"flex","flex-wrap","gap-[.7rem]"],["class","border-1 cursor-pointer color-[#bebebe] px-[10px] py-1 text-[13px] tracking-wider rounded-[16px] hover:bg-[gray] hover:text-white","type","button",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"sticky","bottom-0","left-0","w-full","bg-[#191919]","flex","justify-end","gap-2","py-[7px]"],["class","text-[11px] tracking-wider rounded-sm bg-[seagreen] text-white p-2 py-1 hover:bg-[red] md:text-[13px]",3,"click",4,"ngIf"],["class","text-[11px] tracking-wider rounded-sm bg-[#ffd600] text-black p-2 py-1 hover:bg-[#e1be08] md:text-[13px]",3,"click",4,"ngIf"],[1,"text-[gray]","font-light"],["type","button",1,"border-1","cursor-pointer","color-[#bebebe]","px-[10px]","py-1","text-[13px]","tracking-wider","rounded-[16px]","hover:bg-[gray]","hover:text-white",3,"ngClass","click"],[1,"text-[11px]","tracking-wider","rounded-sm","bg-[seagreen]","text-white","p-2","py-1","hover:bg-[red]","md:text-[13px]",3,"click"],[1,"text-[11px]","tracking-wider","rounded-sm","bg-[#ffd600]","text-black","p-2","py-1","hover:bg-[#e1be08]","md:text-[13px]",3,"click"]],template:function(e,t){if(1&e&&(a.Ob(0,"div",0),a.Ob(1,"h4",1),a.wc(2,"Anime List"),a.Nb(),a.Ob(3,"nav"),a.Ob(4,"ul",2),a.Ob(5,"li",3),a.Vb("click",(function(){return t.updateStatusQueryParam("airing")})),a.wc(6," Ongoing"),a.Nb(),a.Ob(7,"li",3),a.Vb("click",(function(){return t.updateStatusQueryParam("complete")})),a.wc(8," Completed"),a.Nb(),a.Ob(9,"li",3),a.Vb("click",(function(){return t.updateStatusQueryParam("upcoming")})),a.wc(10," Upcoming"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(11,"div",4),a.Ob(12,"div",5),a.Ob(13,"button",6),a.Ob(14,"span",7),a.wc(15,"swap_vert"),a.Nb(),a.wc(16,"\xa0A to Z "),a.Nb(),a.Ob(17,"button",8),a.Vb("click",(function(){return t.showGenresModal()})),a.Ob(18,"span",9),a.wc(19,"tune"),a.Nb(),a.wc(20,"\xa0Genres "),a.Nb(),a.Nb(),a.Ob(21,"div",10),a.uc(22,h,2,1,"ng-container",11),a.uc(23,g,2,0,"ng-template",null,12,a.vc),a.Nb(),a.Ob(25,"div",13),a.Ob(26,"button",14),a.Vb("click",(function(){return t.onPageChange(t.customPagination.current_page-1)})),a.wc(27," PREV "),a.Nb(),a.uc(28,m,2,0,"button",15),a.uc(29,u,2,0,"button",16),a.uc(30,f,2,4,"button",17),a.uc(31,x,2,0,"button",16),a.uc(32,y,2,1,"button",15),a.Ob(33,"button",18),a.Vb("click",(function(){return t.onPageChange(t.customPagination.current_page+1)})),a.wc(34," NEXT "),a.Nb(),a.Nb(),a.Nb(),a.uc(35,O,11,4,"div",19),a.uc(36,_,1,0,"app-loader",20)),2&e){const e=a.jc(24);a.zb(5),a.dc("ngClass",a.fc(16,S,"airing"===t.filtersApplied.status)),a.zb(2),a.dc("ngClass",a.fc(18,S,"complete"===t.filtersApplied.status)),a.zb(2),a.dc("ngClass",a.fc(20,S,"upcoming"===t.filtersApplied.status)),a.zb(8),a.dc("ngClass",a.gc(22,E,t.genreFilterApplied,t.genreFilterApplied)),a.zb(1),a.dc("ngClass",a.fc(25,M,t.genreFilterApplied)),a.zb(4),a.dc("ngIf",t.animeData.length)("ngIfElse",e),a.zb(4),a.dc("disabled",1===t.customPagination.current_page),a.zb(2),a.dc("ngIf",t.customPagination.buttonStart>=2),a.zb(1),a.dc("ngIf",t.customPagination.buttonStart>=3),a.zb(1),a.dc("ngForOf",t.rangePaginationButtons(0,t.customPagination.last_page).slice(t.customPagination.buttonStart,t.customPagination.buttonStart+t.customPagination.range)),a.zb(1),a.dc("ngIf",t.customPagination.last_page-t.customPagination.buttonStart>10),a.zb(1),a.dc("ngIf",t.customPagination.last_page-t.customPagination.buttonStart>=10),a.zb(1),a.dc("disabled",t.customPagination.last_page===t.customPagination.current_page),a.zb(2),a.dc("ngIf",t.showGenreFilterModal),a.zb(1),a.dc("ngIf",t.loading)}},directives:[i.k,i.m,i.l,c,d.a],styles:[".mat-radio-button  .mat-radio-outer-circle{border-color:#fff!important} .mat-radio-button.mat-accent  .mat-radio-checked .mat-radio-inner-circle{background-color:#fff!important} .mat-radio-button  .mat-radio-outer-circle:hover{border-color:#fff!important} .mat-radio-inner-circle,  .mat-radio-ripple .mat-ripple-element{background-color:#ffd600!important}h4[_ngcontent-%COMP%]{text-align:center}nav[_ngcontent-%COMP%]{background:linear-gradient(270deg,#191919,#671b1b 50%,#191919)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid hsla(0,0%,100%,.2)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:center}.text-yellow[_ngcontent-%COMP%]{color:var(--color-yellow);opacity:1}.custom-container[_ngcontent-%COMP%]{width:100%;max-width:1250px;padding-left:7px;padding-right:7px;margin-left:auto;margin-right:auto}.manga-image-overlay[_ngcontent-%COMP%]{display:none}.overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.7)}.chip-hover[_ngcontent-%COMP%]{background-color:#ffd600;color:#000}.active-page-btn[_ngcontent-%COMP%]{color:#000;background-color:var(--color-yellow)}@media screen and (min-width:768px){nav[_ngcontent-%COMP%]{background:linear-gradient(90deg,#191919,#831518)}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1.6rem;padding-right:1rem!important}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){padding-right:1rem}h4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#000,transparent);text-align:left}.custom-container[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}}"]}),e})();var A=n("eNvI");const F=[{path:"",component:N}];let z=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[i.c,o.e.forChild(F),A.a]]}),e})()}}]);