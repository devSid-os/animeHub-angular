(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+gJ/":function(t,e,a){"use strict";a.r(e),a.d(e,"AllCharactersModule",(function(){return _}));var n=a("ofXK"),r=a("fXoL"),i=a("b/W4"),c=a("tyNb"),o=a("kQyY");const s=["modal"];function l(t,e){if(1&t){const t=r.Pb();r.Ob(0,"button",11),r.Vb("click",(function(){return r.mc(t),r.Xb().clearSearchQuery()})),r.wc(1," \xd7 "),r.Nb()}}function b(t,e){1&t&&(r.Mb(0),r.Ob(1,"div",12),r.Ob(2,"p",13),r.wc(3," Sorry, No Results Found "),r.Nb(),r.Nb(),r.Lb())}function h(t,e){if(1&t){const t=r.Pb();r.Ob(0,"button",21),r.Vb("click",(function(){r.mc(t);const e=r.Xb().$implicit;return r.Xb(2).openModal(e)})),r.wc(1," info "),r.Nb()}}function d(t,e){if(1&t&&(r.Ob(0,"div",15),r.Ob(1,"div",16),r.Kb(2,"img",17),r.Nb(),r.Ob(3,"div",18),r.Ob(4,"a",19),r.wc(5),r.Nb(),r.Nb(),r.uc(6,h,2,0,"button",20),r.Nb()),2&t){const t=e.$implicit;r.zb(2),r.dc("src",t.images.webp.image_url||t.images.jpg.image_url,r.pc),r.zb(2),r.dc("routerLink","/character/"+t.mal_id),r.zb(1),r.yc(" ",t.name," "),r.zb(1),r.dc("ngIf",t.about)}}function u(t,e){if(1&t&&(r.Mb(0),r.uc(1,d,7,4,"div",14),r.Lb()),2&t){const t=r.Xb();r.zb(1),r.dc("ngForOf",t.characters)}}function g(t,e){if(1&t){const t=r.Pb();r.Ob(0,"button",21),r.Vb("click",(function(){r.mc(t);const e=r.Xb().$implicit;return r.Xb(2).openModal(e)})),r.wc(1," info "),r.Nb()}}function m(t,e){if(1&t&&(r.Ob(0,"div",15),r.Ob(1,"div",16),r.Kb(2,"img",17),r.Nb(),r.Ob(3,"div",18),r.Ob(4,"a",19),r.wc(5),r.Nb(),r.Nb(),r.uc(6,g,2,0,"button",20),r.Nb()),2&t){const t=e.$implicit;r.zb(2),r.dc("src",t.images.webp.image_url||t.images.jpg.image_url,r.pc),r.zb(2),r.dc("routerLink","/character/"+t.mal_id),r.zb(1),r.yc(" ",t.name," "),r.zb(1),r.dc("ngIf",t.about)}}function f(t,e){if(1&t&&(r.Mb(0),r.uc(1,m,7,4,"div",14),r.Lb()),2&t){const t=r.Xb();r.zb(1),r.dc("ngForOf",t.searchedCharacters)}}function p(t,e){if(1&t){const t=r.Pb();r.Ob(0,"div",23),r.Kb(1,"span",24),r.Ob(2,"button",25),r.Vb("click",(function(){return r.mc(t),r.Xb(2).getMoreCharacters()})),r.wc(3,"View More Characters"),r.Nb(),r.Kb(4,"span",24),r.Nb()}}function w(t,e){if(1&t&&(r.Mb(0),r.uc(1,p,5,0,"div",22),r.Lb()),2&t){const t=r.Xb();r.zb(1),r.dc("ngIf",t.characterListPagination&&t.characterListPagination.has_next_page)}}function x(t,e){if(1&t){const t=r.Pb();r.Ob(0,"div",23),r.Kb(1,"span",24),r.Ob(2,"button",25),r.Vb("click",(function(){return r.mc(t),r.Xb(2).getMoreCharacters()})),r.wc(3,"View More Characters"),r.Nb(),r.Kb(4,"span",24),r.Nb()}}function v(t,e){if(1&t&&(r.Mb(0),r.uc(1,x,5,0,"div",22),r.Lb()),2&t){const t=r.Xb();r.zb(1),r.dc("ngIf",t.searchedCharacterListPagination&&t.searchedCharacterListPagination.has_next_page)}}function O(t,e){if(1&t&&(r.Mb(0),r.wc(1),r.Lb()),2&t){const t=e.$implicit,a=e.index,n=r.Xb(3);r.zb(1),r.yc(" ",t+(a!=n.modalData.nicknames.length-1?",":"")," ")}}function y(t,e){if(1&t&&(r.Ob(0,"p",38),r.Ob(1,"span",39),r.wc(2,"Also Known as:"),r.Nb(),r.uc(3,O,2,1,"ng-container",40),r.Nb()),2&t){const t=r.Xb(2);r.zb(3),r.dc("ngForOf",t.modalData.nicknames)}}function C(t,e){if(1&t){const t=r.Pb();r.Ob(0,"div",26),r.Ob(1,"div",27),r.Vb("click",(function(){return r.mc(t),r.Xb().closeModal()})),r.Ob(2,"div",28,29),r.Ob(4,"div",30),r.Vb("click",(function(e){return r.mc(t),e.stopPropagation()})),r.Ob(5,"div",31),r.Kb(6,"img",32),r.Ob(7,"h6",33),r.wc(8),r.Nb(),r.Nb(),r.Ob(9,"div"),r.uc(10,y,4,1,"p",34),r.Kb(11,"p",35),r.Nb(),r.Nb(),r.Ob(12,"button",36),r.Ob(13,"span",37),r.wc(14,"\xd7"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()}if(2&t){const t=r.Xb();r.zb(6),r.dc("src",t.modalData.images.webp.image_url||t.modalData.images.jpg.image_url,r.pc),r.zb(2),r.xc(t.modalData.name),r.zb(2),r.dc("ngIf",t.modalData.nicknames&&t.modalData.nicknames.length>0),r.zb(1),r.dc("innerHTML",t.modalData.about,r.nc)}}function M(t,e){1&t&&r.Kb(0,"app-loader")}let N=(()=>{class t{constructor(t,e){this._animeService=t,this._renderer2=e,this.isModalOpen=!1,this.loading=!1,this.characters=[],this.characterListPagination=null,this.searchedCharacters=[],this.searchedCharacterListPagination=null,this.searchQuery="",this.searchInterval=null,this.modalData=null}ngOnInit(){this.getCharactersList({order_by:"favorites",sort:"desc",page:1,limit:24},!1,!1)}openModal(t){this.modalData=t,this.modalData.about=this.modalData.about.replace(/\n{2,}/g,"<br />"),this.modalData.about=this.modalData.about.replace(/\n/g,"<br />"),this.isModalOpen=!0,setTimeout(()=>{this._renderer2.setStyle(this.modal.nativeElement,"transform","scale(1)")},1)}closeModal(){this._renderer2.setStyle(this.modal.nativeElement,"transform","scale(0)"),setTimeout(()=>{this.isModalOpen=!1,this.modalData=null},150)}getMoreCharacters(){this.searchQuery.length?this.getCharactersList({q:this.searchQuery,limit:24,page:this.searchedCharacterListPagination.current_page+1},!0,!0):this.getCharactersList({order_by:"favorites",sort:"desc",page:this.characterListPagination.current_page+1,limit:24},!1,!1)}searchCharacters(t){this.searchQuery=t.target.value,clearTimeout(this.searchInterval),this.searchQuery.length>0?this.searchInterval=setTimeout(()=>{this.getCharactersList({q:this.searchQuery,limit:24},!0,!1)},500):this.clearSearchQuery()}clearSearchQuery(){this.searchQuery="",this.searchedCharacters=[],this.searchedCharacterListPagination=null}getCharactersList(t,e=!1,a=!1){this.loading=!0,this._animeService.getAllCharacters(t).then(t=>{e?(this.searchedCharacters=a?this.searchedCharacters.concat(t.data):t.data,this.searchedCharacterListPagination=t.pagination):(this.characters=this.characters.concat(t.data),this.characterListPagination=t.pagination),this.loading=!1}).catch(t=>{console.log("Error: ",t),this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(i.a),r.Jb(r.E))},t.\u0275cmp=r.Db({type:t,selectors:[["app-all-characters"]],viewQuery:function(t,e){var a;1&t&&r.Ac(s,!0),2&t&&r.ic(a=r.Wb())&&(e.modal=a.first)},decls:17,vars:11,consts:[[1,"py-3"],[1,"custom-container"],[1,"relative","search-container","bg-[#303134]","p-2","px-3","flex","items-center","gap-2","rounded-3xl","mx-auto","sm:w-[85%]","md:w-1/3",2,"padding-right","30px!important"],[1,"search-icon","material-icons-outlined","text-[#bebebe]","select-none"],["type","text","spellcheck","false","placeholder","Search Characters",1,"flex-1","bg-transparent","font-mulish","tracking-wider","text-sm","focus:outline-none","hover:cursor-text",3,"value","input"],["type","button","style","transform: translateY(-50%);","class","absolute right-3 top-[50%] text-[1.8rem] text-white hover:text-[red!important]",3,"click",4,"ngIf"],[1,"mt-8","grid","gap-y-2","sm:gap-x-4","sm:grid-cols-2","md:grid-cols-3"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","z-10 bg-[rgba(0,0,0,.7)] w-full h-full fixed top-0 left-0",4,"ngIf"],["type","button",1,"absolute","right-3","top-[50%]","text-[1.8rem]","text-white","hover:text-[red!important]",2,"transform","translateY(-50%)",3,"click"],[1,"col-span-8"],[1,"font-mulish","tracking-wider","text-md","text-center","text-[#bebebe]","md:text-lg"],["class","character-item relative group flex items-center gap-3 pb-1 border-b-[1px] border-[#322f2f] hover:bg-[rgba(0,0,0,.6)]",4,"ngFor","ngForOf"],[1,"character-item","relative","group","flex","items-center","gap-3","pb-1","border-b-[1px]","border-[#322f2f]","hover:bg-[rgba(0,0,0,.6)]"],[1,"transition-colors","duration-100","w-[20%]","h-[85px]","bg-[#202020]","shadow-md","rounded-sm","overflow-hidden","group-hover:bg-[#fff]"],["loading","lazy",1,"w-full","h-full","object-contain",3,"src"],["clas","flex-1"],[1,"font-mulish","text-lg","font-[600]","text-white","tracking-wider","w-max","hover:text-[#aabee4!important]",3,"routerLink"],["type","button","class","material-icons-outlined select-none text-[#aabee4] pr-2 absolute top-[50%] -translate-y-[50%] right-0 hover:text-[#c1cad9]",3,"click",4,"ngIf"],["type","button",1,"material-icons-outlined","select-none","text-[#aabee4]","pr-2","absolute","top-[50%]","-translate-y-[50%]","right-0","hover:text-[#c1cad9]",3,"click"],["class","mt-4 text-center flex items-center gap-3",4,"ngIf"],[1,"mt-4","text-center","flex","items-center","gap-3"],[1,"h-[1px]","flex-1","bg-[#322f2f]"],[1,"tracking-wider","bg-[#3e3e3e]","p-2","px-3","rounded-md","mx-auto",3,"click"],[1,"z-10","bg-[rgba(0,0,0,.7)]","w-full","h-full","fixed","top-0","left-0"],[1,"w-full","h-full","flex","items-center","justify-center",3,"click"],[1,"relative","character-modal","border-4","border-white","rounded-sm","bg-[#191919]",2,"transform","scale(0)"],["modal",""],[1,"hide-scrollbar","p-3","flex","flex-col","items-center","gap-6","overflow-auto","max-w-[90vw]","max-h-[80vh]","sm:max-h-[90vh]","sm:max-w-[80vw]","md:max-w-[55vw]","lg:max-w-[45vw]",3,"click"],[1,"w-full","h-full","flex","flex-col","items-center","gap-2"],[1,"w-max","h-max","max-h-[400px]","rounded-sm","mt-2",3,"src"],[1,"text-2xl","tracking-wider"],["class","font-mulish tracking-wider",4,"ngIf"],[1,"mb-0","font-mulish","tracking-wider","text-justify",2,"line-height","2rem",3,"innerHTML"],["type","button",1,"border-2","border-white","absolute","-top-[15px]","-right-[15px]","text-white","bg-black","flex","w-[25px]","h-[25px]","rounded-full","items-center","justify-center",2,"font-size","1.8rem"],[1,"-mt-[1px]"],[1,"font-mulish","tracking-wider"],[1,"font-mulish","font-bold"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(r.Ob(0,"div",0),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Ob(3,"span",3),r.wc(4," search "),r.Nb(),r.Ob(5,"input",4),r.Vb("input",(function(t){return e.searchCharacters(t)})),r.Nb(),r.uc(6,l,2,0,"button",5),r.Nb(),r.Ob(7,"div",6),r.uc(8,b,4,0,"ng-container",7),r.Mb(9,8),r.uc(10,u,2,1,"ng-container",9),r.uc(11,f,2,1,"ng-container",9),r.Lb(),r.Nb(),r.Mb(12,8),r.uc(13,w,2,1,"ng-container",9),r.uc(14,v,2,1,"ng-container",9),r.Lb(),r.Nb(),r.Nb(),r.uc(15,C,15,4,"div",10),r.uc(16,M,1,0,"app-loader",7)),2&t&&(r.zb(5),r.dc("value",e.searchQuery),r.zb(1),r.dc("ngIf",e.searchQuery),r.zb(2),r.dc("ngIf",e.searchQuery.length&&!e.searchedCharacters.length),r.zb(1),r.dc("ngSwitch",e.searchQuery.length>0),r.zb(1),r.dc("ngSwitchCase",!1),r.zb(1),r.dc("ngSwitchCase",!0),r.zb(1),r.dc("ngSwitch",e.searchQuery.length>0),r.zb(1),r.dc("ngSwitchCase",!1),r.zb(1),r.dc("ngSwitchCase",!0),r.zb(1),r.dc("ngIf",e.isModalOpen),r.zb(1),r.dc("ngIf",e.loading))},directives:[n.m,n.o,n.p,n.l,c.d,o.a],styles:["*[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;font-optical-sizing:auto;font-style:normal}a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;transition:color .15s linear}.font-mulish[_ngcontent-%COMP%]{font-family:Mulish,sans-serif}.material-icons-outlined[_ngcontent-%COMP%]{font-family:Material Icons Outlined!important}.search-container[_ngcontent-%COMP%]:focus-within   .search-icon[_ngcontent-%COMP%]{color:#fff}.character-item[_ngcontent-%COMP%]{transition:background-color .1s linear}.character-modal[_ngcontent-%COMP%]{transition:transform .15s ease-in!important}.hide-scrollbar[_ngcontent-%COMP%]{overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.hide-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}@media screen and (min-width:640px){.custom-container[_ngcontent-%COMP%]{width:100%;max-width:1250px;padding-left:15px;padding-right:15px;margin-left:auto;margin-right:auto}}"]}),t})();var k=a("eNvI");const z=[{path:"",component:N}];let _=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[n.c,c.e.forChild(z),k.a]]}),t})()}}]);