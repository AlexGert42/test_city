(this.webpackJsonptest_city=this.webpackJsonptest_city||[]).push([[0],{11:function(e,t,a){e.exports={wrapper:"DiscriptionBlock_wrapper__1eF45",conteiner:"DiscriptionBlock_conteiner__3d_0c",dicription:"DiscriptionBlock_dicription__lfV6C",discription__inner:"DiscriptionBlock_discription__inner__3R4C9"}},12:function(e,t,a){e.exports={content:"Content_content__3iLTj",content__inner:"Content_content__inner__2xKs1"}},13:function(e,t,a){e.exports={wrapper:"Footer_wrapper__UyC-d",conteiner:"Footer_conteiner__1alb6",footer:"Footer_footer__35-MZ",footer__inner:"Footer_footer__inner__3U8Y6"}},2:function(e,t,a){e.exports={wrapper:"Table_wrapper__hadWn",conteiner:"Table_conteiner__1lQe0",table:"Table_table__2gDbn",table__h:"Table_table__h__mzfY0",table__h_item:"Table_table__h_item__n1Noo",table__h_item_btn:"Table_table__h_item_btn__pPscJ",table__b:"Table_table__b__XdrYs",table__b_item:"Table_table__b_item__1VV9C",title:"Table_title__1RG9q"}},28:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(22),_=a.n(n),s=(a(28),a(6)),i=a.n(s),l=a(0),o=function(){return Object(l.jsx)("div",{className:i.a.header,children:Object(l.jsx)("div",{className:i.a.header__inner,children:Object(l.jsxs)("h1",{className:i.a.header__logo,children:["City",Object(l.jsx)("span",{className:i.a.header__logo_big,children:"Mobil"})]})})})},b=a(4),d=a(2),j=a.n(d),h=function(e){var t=e.allArray,a=e.sortArray,c=e.focusValue,n=e.filterYear,_=Object(r.useState)(t),s=Object(b.a)(_,2),i=s[0],o=s[1];Object(r.useEffect)((function(){o(a||t)}),[a]);var d=Object(r.useState)(!0),h=Object(b.a)(d,2),m=h[0],u=h[1],O=function(){if(m){var e=i.sort((function(e,t){return e.mark>t.mark?1:e.mark<t.mark?-1:0}));o(e),u(!1)}else{var t=i.sort((function(e,t){return e.mark<t.mark?1:e.mark>t.mark?-1:0}));o(t),u(!0)}};Object(r.useEffect)(O,[i]);return Object(l.jsxs)("table",{className:j.a.table,children:[Object(l.jsx)("thead",{className:j.a.table__h,children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("th",{className:j.a.table__h_item,children:["\u041c\u0430\u0440\u043a\u0430 \u0438 \u043c\u043e\u0434\u0435\u043b\u044c",Object(l.jsx)("button",{className:j.a.table__h_item_btn,onClick:O})]}),Object(l.jsx)("th",{className:j.a.table__h_item,children:"\u042d\u043a\u043e\u043d\u043e\u043c"}),Object(l.jsx)("th",{className:j.a.table__h_item,children:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442"}),Object(l.jsx)("th",{className:j.a.table__h_item,children:"\u041a\u043e\u043c\u0444\u043e\u0440\u0442"}),Object(l.jsx)("th",{className:j.a.table__h_item,children:"\u041a\u043e\u043c\u0444\u043e\u0440\u0442 +"}),Object(l.jsx)("th",{className:j.a.table__h_item,children:"\u041c\u0438\u043d\u0438\u0432\u0435\u043d"}),Object(l.jsx)("th",{className:j.a.table__h_item,children:"\u0411\u0438\u0437\u043d\u0435\u0441"})]})}),Object(l.jsx)("tbody",{className:j.a.table__b,children:i.map((function(e,t){var a=n(e,"\u042d\u043a\u043e\u043d\u043e\u043c","-"),r=n(e,"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442","-"),_=n(e,"\u041a\u043e\u043c\u0444\u043e\u0440\u0442","-"),s=n(e,"\u041a\u043e\u043c\u0444\u043e\u0440\u0442+","-"),i=n(e,"\u041c\u0438\u043d\u0438\u0432\u0435\u043d","-"),o=n(e,"\u0411\u0438\u0437\u043d\u0435\u0441","-");return Object(l.jsxs)("tr",{onClick:function(){c(e)},children:[Object(l.jsx)("td",{className:"".concat(j.a.table__b_item," ").concat(j.a.title),children:"".concat(e.mark," ").concat(e.model)}),Object(l.jsx)("td",{className:j.a.table__b_item,children:a}),Object(l.jsx)("td",{className:j.a.table__b_item,children:r}),Object(l.jsx)("td",{className:j.a.table__b_item,children:_}),Object(l.jsx)("td",{className:j.a.table__b_item,children:s}),Object(l.jsx)("td",{className:j.a.table__b_item,children:i}),Object(l.jsx)("td",{className:j.a.table__b_item,children:o})]},t)}))})]})},m=a(8),u=a.n(m),O=function(e){var t=e.carsArray,a=e.searchValue,c=e.filterYear,n=Object(r.useState)(""),_=Object(b.a)(n,2),s=_[0],i=_[1];return Object(l.jsxs)("form",{className:u.a.form,onSubmit:function(e){e.preventDefault();var r=s.trim().toLowerCase();if(r){var n=t.filter((function(e){return e.mark.toLowerCase()===r||e.model.toLowerCase()===r||c(e,"\u042d\u043a\u043e\u043d\u043e\u043c")===+r||c(e,"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442")===+r||c(e,"\u041a\u043e\u043c\u0444\u043e\u0440\u0442")===+r||c(e,"\u041a\u043e\u043c\u0444\u043e\u0440\u0442+")===+r||c(e,"\u041c\u0438\u043d\u0438\u0432\u0435\u043d")===+r||c(e,"\u0411\u0438\u0437\u043d\u0435\u0441")===+r}));i(""),a(n)}else a(null)},children:[Object(l.jsx)("input",{className:u.a.form__input,type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("button",{className:u.a.form__btn,type:"submit",children:"\u043f\u043e\u0438\u0441\u043a"})]})},p=a(11),f=a.n(p),x=function(e){var t=e.car,a=e.filterYear;return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsx)("div",{className:f.a.dicription,children:Object(l.jsxs)("div",{className:f.a.discription__inner,children:[Object(l.jsx)("span",{children:"\u0412\u044b\u0431\u0440\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c: "}),Object(l.jsxs)("span",{children:[t.mark," "]}),Object(l.jsxs)("span",{children:[t.model," "]}),Object(l.jsxs)("span",{children:[a(t,"\u042d\u043a\u043e\u043d\u043e\u043c")," "]}),Object(l.jsxs)("span",{children:[a(t,"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442")," "]}),Object(l.jsxs)("span",{children:[a(t,"\u041a\u043e\u043c\u0444\u043e\u0440\u0442")," "]}),Object(l.jsxs)("span",{children:[a(t,"\u041a\u043e\u043c\u0444\u043e\u0440\u0442+")," "]}),Object(l.jsxs)("span",{children:[a(t,"\u041c\u0438\u043d\u0438\u0432\u0435\u043d")," "]}),Object(l.jsxs)("span",{children:[a(t,"\u0411\u0438\u0437\u043d\u0435\u0441")," "]}),Object(l.jsx)("span",{children:"\u0433\u043e\u0434\u0430 \u0432\u044b\u043f\u0443\u0441\u043a\u0430"})]})})})},N=a(5),v=function(e){return{type:"LOADER",payload:e}},y={cars:[],loading:!1,sortCars:null,car:null},C=function(e,t){switch(t.type){case"GET_CARS":return Object(N.a)(Object(N.a)({},e),{},{cars:t.payload});case"LOADER":return Object(N.a)(Object(N.a)({},e),{},{loading:t.payload});case"SEARCH":return Object(N.a)(Object(N.a)({},e),{},{sortCars:t.payload});case"FOCUS_CAR":return Object(N.a)(Object(N.a)({},e),{},{car:t.payload});default:return e}},g=a(23),S=a.n(g),k=a(12),w=a.n(k),A=a(9),F=a.n(A),R=a.p+"static/media/spiner.af6585a3.gif",T=function(){return Object(l.jsx)("div",{className:F.a.loader__overlay,children:Object(l.jsx)("div",{className:F.a.loader__icon,children:Object(l.jsx)("img",{className:F.a.loader__img,src:R,alt:" "})})})},L=function(){var e=Object(r.useReducer)(C,y),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){c(v(!0)),S.a.get("https://city-mobil.ru/api/cars").then((function(e){c({type:"GET_CARS",payload:e.data.cars}),c(v(!1))}))}),[]);var n=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.tariffs[t]?e.tariffs[t].year:a};return console.log(a),Object(l.jsx)("div",{className:w.a.content,children:Object(l.jsx)("div",{className:w.a.content__inner,children:a.loading?Object(l.jsx)(T,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{car:a.car,filterYear:n}),Object(l.jsx)(O,{carsArray:a.cars,searchValue:function(e){return c({type:"SEARCH",payload:e})},filterYear:n}),Object(l.jsx)(h,{allArray:a.cars,sortArray:a.sortCars,focusValue:function(e){return c(function(e){return{type:"FOCUS_CAR",payload:e}}(e))},filterYear:n})]})})})},B=a(7),E=a.n(B),H=function(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(l.jsx)("div",{className:"".concat(E.a.sidebar," ").concat(a&&E.a.active),children:Object(l.jsxs)("div",{className:E.a.sidebar__inner,children:["sidebar",Object(l.jsx)("button",{className:E.a.sidebar__btn,onClick:function(){return c(!a)}})]})})},Y=a(13),V=a.n(Y),D=function(){return Object(l.jsx)("div",{className:V.a.footer,children:Object(l.jsx)("div",{className:V.a.footer__inner,children:"Footer"})})},M=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("main",{className:"conteiner",children:[Object(l.jsx)(H,{}),Object(l.jsx)(L,{})]}),Object(l.jsx)(D,{})]})};_.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={wrapper:"Header_wrapper__3CnjJ",conteiner:"Header_conteiner__3kNoN",header:"Header_header__2SIut",header__inner:"Header_header__inner__2aL3I",header__logo:"Header_header__logo__36NvH",header__logo_big:"Header_header__logo_big__2tFXs"}},7:function(e,t,a){e.exports={wrapper:"Sidebar_wrapper__2Prjq",conteiner:"Sidebar_conteiner__33GBJ",sidebar:"Sidebar_sidebar__3RSMQ",sidebar__inner:"Sidebar_sidebar__inner__2qQCL",sidebar__btn:"Sidebar_sidebar__btn__3ZscF",active:"Sidebar_active__2MBiM"}},8:function(e,t,a){e.exports={wrapper:"Search_wrapper__1HjYZ",conteiner:"Search_conteiner__16voF",form:"Search_form__1WdVj",form__input:"Search_form__input__3BeV-",form__btn:"Search_form__btn__2Mj9p",decorBtn:"Search_decorBtn__1iAJr"}},9:function(e,t,a){e.exports={loader__overlay:"Loader_loader__overlay__19lum",loader__icon:"Loader_loader__icon__33iU9",loader__img:"Loader_loader__img__3Ib0U"}}},[[48,1,2]]]);
//# sourceMappingURL=main.88f49529.chunk.js.map