(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2NrME",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__29T6i"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3jNtN"}},16:function(e,t,a){e.exports={Button:"Button_Button__1L9ph"}},20:function(e,t,a){e.exports={Spiner:"Loader_Spiner__2Qctz"}},28:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1WiLu",SearchForm:"Searchbar_SearchForm__yUrNN",SearchFormButton:"Searchbar_SearchFormButton__qm3hw",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1JDoF",SearchFormInput:"Searchbar_SearchFormInput__1kZIy"}},52:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),o=a(3),s=a.n(o),u=(a(28),a(13)),l=a(4),i=a(8),m=a(11),b=a.n(m),j=a(14),h="https://pixabay.com/api",f="18966103-245a37f9e820c36a1856c1db9";function g(){return(g=Object(j.a)(b.a.mark((function e(t){var a,r,n,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.imageName,r=t.currentPage,n="?q=".concat(a,"&page=").concat(r,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"),e.prev=2,e.next=5,fetch("".concat(h,"/").concat(n));case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",o.hits);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",e.t0("Some error in fetch"));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}a(30);var p=a(5),O=a.n(p);var d=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],s=c[1];return Object(r.jsx)("header",{className:O.a.Searchbar,children:Object(r.jsxs)("form",{className:O.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):Object(i.b)("Please enter search query")},children:[Object(r.jsx)("button",{type:"submit",className:O.a.SearchFormButton,children:Object(r.jsx)("span",{className:O.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{value:o,onChange:function(e){s(e.currentTarget.value.toLowerCase())},className:O.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},_=a(12),I=a.n(_),S=a(9),v=a.n(S),y=document.querySelector("#modal-root");var x=function(e){var t=e.onClose,a=e.src,c=e.alt,s=Object(n.useRef)(!0);Object(n.useEffect)((function(){return s.current?(window.addEventListener("keydown",u),void(s.current=!1)):function(){window.removeEventListener("keydown",u)}}));var u=function(e){"Escape"===e.code&&t()};return Object(o.createPortal)(Object(r.jsx)("div",{className:v.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(r.jsx)("div",{className:v.a.Modal,children:Object(r.jsx)("img",{src:a,alt:c,className:v.a.ImageGalleryItemImage})})}),y)};function w(e){var t=e.src,a=e.alt,c=e.largeImageUrl,o=Object(n.useState)(!1),s=Object(l.a)(o,2),u=s[0],i=s[1],m=function(){i(!u)};return Object(r.jsxs)("li",{className:I.a.ImageGalleryItem,children:[Object(r.jsx)("img",{onClick:m,src:t,alt:a,className:I.a.ImageGalleryItemImage}),u&&Object(r.jsx)(x,{onClose:m,src:c,alt:a})]})}var N=a(15),F=a.n(N);function k(e){var t=e.images;return Object(r.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,c=e.tags;return Object(r.jsx)(w,{src:a,largeImageUrl:n,alt:c},t)}))})}var G=a(16),B=a.n(G);function C(e){var t=e.onClick;return Object(r.jsx)("button",{onClick:t,className:B.a.Button,children:"Load more"})}var L=a(17),E=a(18),M=a(22),T=a(21),U=a(19),q=a.n(U),P=a(20),J=a.n(P),R=function(e){Object(M.a)(a,e);var t=Object(T.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(r.jsx)(q.a,{className:J.a.Spiner,type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component);var z=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(l.a)(o,2),m=s[0],b=s[1],j=Object(n.useState)(1),h=Object(l.a)(j,2),f=h[0],p=h[1],O=Object(n.useState)(!1),_=Object(l.a)(O,2),I=_[0],S=_[1],v=Object(n.useState)(null),y=Object(l.a)(v,2),x=y[0],w=y[1];Object(n.useEffect)((function(){!function(){if(""===a)return;S(!0),function(e){return g.apply(this,arguments)}({imageName:a,currentPage:f}).then((function(e){b((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))})),N()})).catch((function(e){return w(e)})).finally((function(){return S(!1)}))}()}),[a,f]);var N=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(r.jsxs)(r.Fragment,{children:[x&&Object(r.jsxs)("p",{children:["Whoops, something went wrong: ",x.message]}),Object(r.jsx)(d,{onSubmit:function(e){c(e),p(1),b([]),w(null)}}),Object(r.jsx)(k,{images:m}),I&&Object(r.jsx)(R,{}),!I&&m.length>=12&&!x&&Object(r.jsx)(C,{onClick:function(){p((function(e){return e+1})),N()}}),Object(r.jsx)(i.a,{autoClose:3e3})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1XkEG",Modal:"Modal_Modal__20f1_",ImageGalleryItemImage:"Modal_ImageGalleryItemImage__QT1a0"}}},[[52,1,2]]]);
//# sourceMappingURL=main.84f9cfd2.chunk.js.map