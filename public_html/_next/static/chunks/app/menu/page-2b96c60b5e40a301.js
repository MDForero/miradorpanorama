(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{9196:function(e,t,r){Promise.resolve().then(r.bind(r,9560))},9560:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return J}});var n,s=r(5029),l=r(8965),a=r(4670),i=r(1801),c=r(7437),o=r(2265),d=r(4440),u=r.n(d),h=r(8949),x=r(7127);let f=o.forwardRef(({as:e,bsPrefix:t,variant:r,size:n,active:s,className:l,...a},i)=>{let o=(0,x.vE)(t,"btn"),[d,{tagName:f}]=(0,h.FT)({tagName:e,...a});return(0,c.jsx)(f,{...d,...a,ref:i,className:u()(l,o,s&&"active",r&&`${o}-${r}`,n&&`${o}-${n}`,a.href&&a.disabled&&"disabled")})});f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var p=r(6537),m=r(6857),j=r(3931),v=r(4937);function g(e){if((!n&&0!==n||e)&&m.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n}var b=r(2375),w=r(5113),y=r(1271),N=r(8203),C=r(9469),k=r(6810),$=r(7904),_=r(2525),Z=r(2510),M=(0,Z.Z)("modal-body"),R=r(6253);let E=o.forwardRef(({bsPrefix:e,className:t,contentClassName:r,centered:n,size:s,fullscreen:l,children:a,scrollable:i,...o},d)=>{e=(0,x.vE)(e,"modal");let h=`${e}-dialog`,f="string"==typeof l?`${e}-fullscreen-${l}`:`${e}-fullscreen`;return(0,c.jsx)("div",{...o,ref:d,className:u()(h,t,s&&`${e}-${s}`,n&&`${h}-centered`,i&&`${h}-scrollable`,l&&f),children:(0,c.jsx)("div",{className:u()(`${e}-content`,r),children:a})})});E.displayName="ModalDialog";var H=(0,Z.Z)("modal-footer"),S=r(7786);let F=o.forwardRef(({bsPrefix:e,className:t,...r},n)=>(e=(0,x.vE)(e,"modal-header"),(0,c.jsx)(S.Z,{ref:n,...r,className:u()(t,e)})));F.displayName="ModalHeader",F.defaultProps={closeLabel:"Close",closeButton:!1};var z=r(4617);let T=(0,z.Z)("h4");var V=(0,Z.Z)("modal-title",{Component:T});function B(e){return(0,c.jsx)(_.Z,{...e,timeout:null})}function D(e){return(0,c.jsx)(_.Z,{...e,timeout:null})}let I=o.forwardRef(({bsPrefix:e,className:t,style:r,dialogClassName:n,contentClassName:s,children:l,dialogAs:a,"aria-labelledby":i,"aria-describedby":d,"aria-label":h,show:f,animation:_,backdrop:Z,keyboard:M,onEscapeKeyDown:E,onShow:H,onHide:S,container:F,autoFocus:z,enforceFocus:T,restoreFocus:V,restoreFocusOptions:I,onEntered:O,onExit:A,onExiting:P,onEnter:G,onEntering:L,onExited:U,backdropClassName:W,manager:K,...q},J)=>{let[Q,X]=(0,o.useState)({}),[Y,ee]=(0,o.useState)(!1),et=(0,o.useRef)(!1),er=(0,o.useRef)(!1),en=(0,o.useRef)(null),[es,el]=(0,b.Z)(),ea=(0,y.Z)(J,el),ei=(0,w.Z)(S),ec=(0,x.SC)();e=(0,x.vE)(e,"modal");let eo=(0,o.useMemo)(()=>({onHide:ei}),[ei]);function ed(){return K||(0,$.t)({isRTL:ec})}function eu(e){if(!m.Z)return;let t=ed().getScrollbarWidth()>0,r=e.scrollHeight>(0,j.Z)(e).documentElement.clientHeight;X({paddingRight:t&&!r?g():void 0,paddingLeft:!t&&r?g():void 0})}let eh=(0,w.Z)(()=>{es&&eu(es.dialog)});(0,N.Z)(()=>{(0,v.Z)(window,"resize",eh),null==en.current||en.current()});let ex=()=>{et.current=!0},ef=e=>{et.current&&es&&e.target===es.dialog&&(er.current=!0),et.current=!1},ep=()=>{ee(!0),en.current=(0,C.Z)(es.dialog,()=>{ee(!1)})},em=e=>{e.target===e.currentTarget&&ep()},ej=e=>{if("static"===Z){em(e);return}if(er.current||e.target!==e.currentTarget){er.current=!1;return}null==S||S()},ev=(0,o.useCallback)(t=>(0,c.jsx)("div",{...t,className:u()(`${e}-backdrop`,W,!_&&"show")}),[_,W,e]),eg={...r,...Q};return eg.display="block",(0,c.jsx)(R.Z.Provider,{value:eo,children:(0,c.jsx)(k.Z,{show:f,ref:ea,backdrop:Z,container:F,keyboard:!0,autoFocus:z,enforceFocus:T,restoreFocus:V,restoreFocusOptions:I,onEscapeKeyDown:e=>{M||"static"!==Z?M&&E&&E(e):(e.preventDefault(),ep())},onShow:H,onHide:S,onEnter:(e,t)=>{e&&eu(e),null==G||G(e,t)},onEntering:(e,t)=>{null==L||L(e,t),(0,p.ZP)(window,"resize",eh)},onEntered:O,onExit:e=>{null==en.current||en.current(),null==A||A(e)},onExiting:P,onExited:e=>{e&&(e.style.display=""),null==U||U(e),(0,v.Z)(window,"resize",eh)},manager:ed(),transition:_?B:void 0,backdropTransition:_?D:void 0,renderBackdrop:ev,renderDialog:r=>(0,c.jsx)("div",{role:"dialog",...r,style:eg,className:u()(t,e,Y&&`${e}-static`,!_&&"show"),onClick:Z?ej:void 0,onMouseUp:ef,"aria-label":h,"aria-labelledby":i,"aria-describedby":d,children:(0,c.jsx)(a,{...q,onMouseDown:ex,className:n,contentClassName:s,children:l})})})})});I.displayName="Modal",I.defaultProps={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:E};var O=Object.assign(I,{Body:M,Header:F,Title:V,Footer:H,Dialog:E,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),A=r(1387),P=r(3718),G=r(6691),L=r.n(G),U=function(e){var t=e.data,r=e.add,n=t.nombre,s=t.descripcion,l=t.valor,i=t.img,d=t.id,u=(0,a._)((0,o.useState)(1),2),h=u[0],x=u[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("article",{className:"relative rounded-md overflow-hidden border p-1 w-72 flex flex-wrap justify-center items-center",children:[(0,c.jsx)("h2",{className:"text-2xl text-center",children:n}),(0,c.jsxs)("figure",{className:"relative w-full",children:[(0,c.jsx)(L(),{loading:"lazy",src:i,alt:n,width:0,height:0,className:"w-64 h-96 object-cover rounded-md"}),(0,c.jsx)("figcaption",{className:"absolute bottom-0 right-0 left-0 bg-gray-100/50 line-clamp-2",children:(0,c.jsx)("p",{className:"text-lg font-bold first-letter:uppercase",children:s})})]}),(0,c.jsxs)("div",{className:"flex justify-center items-center gap-2 w-1/2 text-2xl",children:[(0,c.jsx)("button",{className:"font-bold text-5xl w-fit h-fit",onClick:function(){return h>1?x(h-1):null},children:"-"}),(0,c.jsx)("p",{className:"m-0 pt-2",children:h}),(0,c.jsx)("button",{className:"font-bold text-5xl w-fit h-fit",onClick:function(){return x(h+1)},children:"+"})]}),(0,c.jsx)("button",{className:"btn btn-success",style:{justifySelf:"center"},onClick:function(){return r({data:{id:d,opcion:{descripcion:"sencillo",valor:l,amount:h,id:t.opcionId}}})},children:l*h})]})})},W=r(7385),K=r(1396),q=r.n(K),J=function(){var e=(0,o.useContext)(P.y),t=e.state,r=e.dispatch,n=(0,a._)((0,o.useState)(!1),2),d=n[0],u=n[1],h=t.products,x=t.cart,p=new Set(h.map(function(e){return e.categoria}));console.log((0,i._)(p)),console.log(x);var m=function(e){r({type:"add_to_cart",payload:e})},j=function(e){return r({type:"delete_one",payload:e})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(c.Fragment,{children:[x.length?(0,c.jsxs)(f,{variant:"primary",onClick:function(){return u(!0)},className:"cart",children:[(0,c.jsxs)("svg",{viewBox:"0 0 24 24",className:"w-12 h-12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,c.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,c.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,c.jsx)("path",{d:"M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]}),(0,c.jsx)("div",{children:x.length})]}):(0,c.jsx)(c.Fragment,{}),(0,c.jsxs)(O,{show:d,onHide:function(){return u(!1)},animation:!1,centered:!0,children:[(0,c.jsx)(O.Header,{closeButton:!0,children:(0,c.jsx)(O.Title,{children:"Modal heading"})}),(0,c.jsx)(O.Body,{children:(0,c.jsxs)(A.Z,{style:{textAlign:"center"},children:[(0,c.jsxs)("thead",{children:[(0,c.jsx)("th",{}),(0,c.jsx)("th",{children:"#"}),(0,c.jsx)("th",{children:"descripci\xf3n"}),(0,c.jsx)("th",{children:"opcion"}),(0,c.jsx)("th",{children:"cantidad"}),(0,c.jsx)("th",{children:"vr. unitario"}),(0,c.jsx)("th",{children:"vr. total"})]}),x.map(function(e,t){return(0,c.jsx)(W.Z,{data:e,eliminar:j},t)})]})}),(0,c.jsx)(O.Footer,{children:(0,c.jsx)(q(),{href:"/checkout",className:"btn btn-success",children:"Pagar"})})]})]}),(0,c.jsxs)("div",{className:" space-y-24",children:[(0,c.jsx)("main",{className:"category",children:(0,c.jsx)("div",{style:{display:"inline-block"}})}),(0,c.jsx)("div",{className:"text-center",children:(0,c.jsx)("a",{href:"/public/menu.pdf",className:"btn btn-danger",download:!0,children:(0,c.jsxs)("span",{className:"flex font-bold text-4xl lg:text-7xl items-center",children:["Men\xfa ",(0,c.jsxs)("svg",{className:"w-16 h-16 lg:w-24 lg:h-24",version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512",space:"preserve",fill:"#ffffff",children:[(0,c.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,c.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,c.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,c.jsx)("style",{type:"text/css"})," ",(0,c.jsxs)("g",{children:[" ",(0,c.jsx)("path",{class:"st0",d:"M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514 c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716 c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z"})," ",(0,c.jsx)("path",{class:"st0",d:"M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599 c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612 C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23 c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z"})," ",(0,c.jsx)("path",{class:"st0",d:"M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868 c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856 C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23 c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46 c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z"})," ",(0,c.jsx)("path",{class:"st0",d:"M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599 c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56 c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733 c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z"})," "]})," "]})]})]})})}),(0,c.jsx)("section",{className:"space-y-24",children:(0,i._)(p).map(function(e,t){return(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("h1",{className:"capitalize lg:text-7xl text-4xl",children:e},t),(0,c.jsx)("div",{className:"w-screen p-4 md:pl-2 overflow-x-scroll p",children:(0,c.jsx)("div",{className:"flex gap-4 w-max ",children:h.map(function(t,r){return t.categoria!==e?null:"object"==typeof t.valor?t.valor.map(function(e,r){return(0,c.jsx)(U,{data:(0,l._)((0,s._)({},t),{valor:t.valor[r].value,opcionId:r}),add:m},r)}):(0,c.jsx)(U,{data:(0,l._)((0,s._)({},t),{opcionId:0}),add:m},r)})})})]},t)})})]})]})}},1387:function(e,t,r){"use strict";var n=r(4440),s=r.n(n),l=r(2265),a=r(7127),i=r(7437);let c=l.forwardRef(({bsPrefix:e,className:t,striped:r,bordered:n,borderless:l,hover:c,size:o,variant:d,responsive:u,...h},x)=>{let f=(0,a.vE)(e,"table"),p=s()(t,f,d&&`${f}-${d}`,o&&`${f}-${o}`,r&&`${f}-${"string"==typeof r?`striped-${r}`:"striped"}`,n&&`${f}-bordered`,l&&`${f}-borderless`,c&&`${f}-hover`),m=(0,i.jsx)("table",{...h,className:p,ref:x});if(u){let e=`${f}-responsive`;return"string"==typeof u&&(e=`${e}-${u}`),(0,i.jsx)("div",{className:e,children:m})}return m});t.Z=c}},function(e){e.O(0,[676,413,709,881,906,10,971,472,744],function(){return e(e.s=9196)}),_N_E=e.O()}]);