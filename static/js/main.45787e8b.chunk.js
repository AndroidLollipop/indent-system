(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{259:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},a=[];return function(r){r=r.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var a=0;a<e.length;a++){for(var r=Object.values(e[a]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),i={},c=0;c<r.length;c++)i[r[c]]||(n[r[c]]||(n[r[c]]=0),n[r[c]]++,i[r[c]]=0),i[r[c]]+=1/r.length;t.push(i)}var l=Object.keys(n);for(a=0;a<l.length;a++)n[l[a]]?n[l[a]]=Math.log(e.length/n[l[a]]):n[l[a]]=0}(e,a,n),t=1);for(var i=[],c=0;c<e.length;c++)i.push([0,0,c,e[c]]);for(c=0;c<r.length;c++)for(var l=r[c],s=0;s<e.length;s++)a[s][l]&&(i[s][0]-=a[s][l]*n[l],i[s][1]-=a[s][l]);return i=i.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},261:function(e,t,n){"use strict";n.r(t);var a=n(176),r=n(43),i=n.n(r),c=n(79),l=n(39),s=n(9),u=n(80),o=n(19),d=n(35),f=n(0),j=n(18),b=n(164),h=n.n(b),v=n(126),p=n(307),m=n(308),O=n(316),x=n(319),y=n(322),g=n(312),D=n(309),C=n(304),k=n(313),w=n(305),S=n(306),T=n(311),I=n(160),R=n(314),E=n(317),P=n(315),M=n(165),L=n.n(M),N=n.p+"static/media/logo.58ed9303.jpg",U=n.p+"static/media/5sirlogo.a6ac04db.jpg",A=n(23),W=n(67),F=n(107),q=n.n(F),H=n(174),z=n.n(H),B=n(175),V=n.n(B);console.log("0.1.17a");var J,Y,K,G=n(259),Q="https://murmuring-ocean-38436.herokuapp.com/",X=[],Z=1,$=function(e){(X=Object(d.a)(X)).push(e),J(X)},_=function(e){X=Object(d.a)(X).filter((function(t){return t.params[0]!==e})),ne[e]=void 0,J(X)},ee=function(){var e=f.useState([]),t=Object(o.a)(e,2),n=t[0],a=t[1];J=a,f.useEffect((function(){return(Y=h()(Q,{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<ce)return;ce=t,void 0!==se[t]&&se[t]()}Pe=Object(d.a)(e).reverse(),et()})),Y.on("sendNotifications",(function(e){Le=Object(d.a)(e).reverse(),it()})),Y.emit("requestIndents",""),Y.emit("requestNotifications",""),function(){Y.disconnect()}}),[]);var r=f.useState(0),i=Object(o.a)(r,2),c=i[0],l=i[1],j=f.useRef(null),b=f.useRef([]),v=f.useRef(0);f.useEffect((function(){if(j.current){v.current=j.current.offsetHeight;var e,t=Object(u.a)(b.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(j.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[j]);f.useRef({});return Object(s.jsxs)("div",{children:[Object(s.jsx)(Ge,{selTab:c,setSelTab:l,appbarRef:j,children:[Object(s.jsx)("div",{label:"view indents",mykey:"defaultTab1",children:Object(s.jsx)(Oe,{setSelTab:l,heightProvider:[v,b]})},"defaultTab1"),Object(s.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(s.jsx)(pe,{id:0})},"defaultTab2"),Object(s.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(s.jsx)(te,{setSelTab:l})},"defaultTab3")].concat(Object(d.a)(n.map((function(e,t){var n=e.type,a=e.params;return"detail"===n?Object(s.jsx)(ae,{mykey:a[0],label:ie(a[1]).name,removable:"true",removeCallback:function(e,t){_(a[0]);var n=Math.min(c,t-1);n>e&&l(n-1)},details:a,heightProvider:[v,b]},a[0]):"newindent"===n?Object(s.jsx)(pe,{cloneID:a[1],mykey:a[0],label:"new indent",removable:"true",removeCallback:function(e,t){_(a[0]);var n=Math.min(c,t-1);n>e&&l(n-1)},id:a[0]},a[0]):Object(s.jsx)("div",{})}))))}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("img",{src:U,width:"192px"})]})},te=function(e){var t=e.setSelTab,n=Me(),a=f.useState(n),r=Object(o.a)(a,2),i=(r[0],r[1]);f.useEffect((function(){var e=at(i);return function(){return rt(e)}}),[]);for(var c=[],u={},d=0;d<n.length;d++)!0===u[n[d].internalUID]?c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!1})):c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!0})),u[n[d].internalUID]=!0;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Re,{data:c,generator:function(e,n){return we(e,e.internalUID,""+e.internalUID+n,t)},style:De})})]})},ne={},ae=function(e){var t=e.details,n=e.heightProvider,a=Object(o.a)(t,2),r=a[0],i=a[1];void 0===ne[r]&&(ne[r]=ie(i));var c=f.useState(ne[r]),u=Object(o.a)(c,2),d=u[0],j=u[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Re,{header:Object(s.jsx)(ge,{heightProvider:n,children:We.map((function(e,t){return Object(s.jsx)(p.a,{children:e.friendlyName},t)}))}),data:[d],generator:function(e){return ke(e,e.internalUID)},style:De})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(m.a,{variant:"outlined",onClick:function(){Ie(d.internalUID)},children:"Copy"}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(O.a,{variant:"outlined",native:!0,value:d.status,onChange:function(e){ne[r]=Object(l.a)(Object(l.a)({},ne[r]),{},{status:e.target.value}),j(ne[r])},children:Ne.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))})}),Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(m.a,{variant:"outlined",onClick:function(){re(i,ne[r])},children:"Save"})})]})]})},re=function(){var e=Object(c.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(t,n);case 2:e.sent&&et();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ie=function(e){var t=Pe.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},ce=0,le=0,se=[],ue=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le++,r=new Promise((function(e){return a=e})),se[le]=a,Y.emit("writeDataStore",[t,n,le]),e.next=6,r;case 6:if(le!==ce){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le++,a=new Promise((function(e){return n=e})),se[le]=n,Y.emit("appendDataStore",[t,le]),e.next=6,a;case 6:if(le!==ce){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){return Pe},fe=function(e){var t=e.system,n=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},a=Math.min(new Date(n(e.startDateTime)));if(a!==a)return["FAILED","Enter a valid start date"];var r=Math.min(new Date(n(e.endDateTime)));if(r!==r)return["FAILED","Enter a valid end date"];if(r<=a)return["FAILED","End date must be after start date"];var i=Math.min(a||1/0,r||1/0)-new Date;if("Civilian"!==t&&i<14688e5||i<864e6)return["FAILED","This indent is too late. Please discuss this indent manually with the transport clerk."];for(var c in e)if(!0!==He[c].optional&&("string"!==typeof e[c]||""===e[c].trim()))return void 0!==qe[c]?["FAILED",qe[c]+" cannot be empty"]:["FAILED","Field cannot be empty"];return["SUCCESS"]},je=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof n){e.next=4;break}if("FAILED"!==(a=n(t))[0]){e.next=4;break}return e.abrupt("return",a);case 4:return e.next=6,oe(t);case 6:if(!e.sent){e.next=10;break}return et(),e.abrupt("return",["SUCCESS"]);case 10:return e.abrupt("return",["UNKNOWN"]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),be=function(e){var t=e.prefill,n=e.fields,a=e.defaults,r=e.formPersistentStore,l=e.validator,j=[],b=void 0===r?{}:r;void 0===b.data&&(b.data=n.map((function(e){if("object"===typeof t){var n=t[e.name];if(void 0!==n){var a=ze[e.name];return"function"===typeof a?a(n):n}}return e.initialData})));for(var h=f.useState(b.data),v=Object(o.a)(h,2),p=v[0],O=v[1],y=p,g=function(){var e=D,t=n[e];j.push([p[e],function(t){(y=Object(d.a)(y))[e]=t,b.data=y,O(y)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options])},D=0;D<n.length;D++)g();var C=function(){var e=n.map((function(e){return e.initialData}));b.data=e,O(e)},k=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,r,c,s,d,f,b,h,v,p,m,O,x,y,g,D;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},n=Object(u.a)(a);try{for(n.s();!(r=n.n()).done;)c=r.value,s=c.name,d=c.initialData,t[s]=d}catch(i){n.e(i)}finally{n.f()}f=Object(u.a)(j);try{for(f.s();!(b=f.n()).done;)h=Object(o.a)(b.value,6),v=h[0],h[1],h[2],p=h[3],h[4],m=h[5],O=he[m],t[p]=O?O(v):v}catch(i){f.e(i)}finally{f.f()}return e.next=7,je(t,l);case 7:x=e.sent,y=Object(o.a)(x,2),g=y[0],D=y[1],"SUCCESS"===g?(alert("Indent submitted successfully!"),C()):"FAILED"===g&&alert(D);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{noValidate:!0,children:[Object(s.jsx)("div",{children:j.map((function(e,t){var n,a=Object(o.a)(e,7),r=a[0],i=a[1],c=(a[2],a[3],a[4]),l=a[5],u=a[6];return Object(s.jsx)("div",{style:ve,children:"datetime"===l?Object(s.jsx)(x.a,{id:"datetime-local",fullWidth:!0,label:c,type:"datetime-local",variant:"outlined",value:r,onChange:function(e){return i(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===l?Object(s.jsx)(x.a,{fullWidth:!0,select:!0,label:c,variant:"outlined",value:r,SelectProps:{native:!0},onChange:function(e){return i(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:u.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))}):"multi"===l?Object(s.jsx)(x.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:null!==(n=r[0])&&void 0!==n?n:"",onChange:function(e){return i([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(s.jsx)(x.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:r,onChange:function(e){return i(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},t)}))}),Object(s.jsx)(m.a,{variant:"outlined",onClick:k,children:"submit"})]})},he={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},ve={display:"flex",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},pe=function(e){var t=e.id,n=e.cloneID;void 0===ne[t]&&(ne[t]={});var a=f.useMemo((function(){return void 0!==n?ie(n):void 0}),[n,Ae]);return Object(s.jsxs)("div",{style:De,children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(be,{prefill:a,fields:Ue,defaults:Ae,formPersistentStore:ne[t],validator:fe})]})},me={},Oe=function(e){var t=e.setSelTab,n=e.heightProvider;!0!==me.initialized&&(me.initialized=!0,me.data="",me.sort=null,me.up=!0,me.view="list",me.selDate=(new Date).toISOString().slice(0,10));var r=de();f.useEffect((function(){var e=$e((function(e){h.current=e,O.current=G.makeRanker(e),k(""!==x.current?O.current(x.current):e)}));return function(){return _e(e)}}),[]);var i=f.useState(me.data),c=Object(o.a)(i,2),u=c[0],j=c[1],b=f.useRef(null),h=f.useRef(r),m=G.makeRanker(r),O=f.useRef(m),x=f.useRef(me.data),g=f.useState(""!==me.data?m(me.data):r),D=Object(o.a)(g,2),C=D[0],k=D[1],w=function(e){me.data=e,j(e),me.view="list",J("list"),me.sort=null,E(null),me.up=!0,U(!0),null!==b.current&&(clearTimeout(b.current),b.current=null),b.current=setTimeout((function(){x.current=e,k(""!==e?O.current(e):h.current),b.current=null}),100)},S=f.useRef(null),T=f.useState(me.sort),I=Object(o.a)(T,2),R=I[0],E=I[1],P=f.useState(me.up),M=Object(o.a)(P,2),N=M[0],U=M[1],F=f.useMemo((function(){return C.filter((function(e){return"Hidden"!==e.status}))}),[C]),q=f.useMemo((function(){return null===R?F:F.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(o.a)(e,2),a=n[0],r=n[1],i=Object(o.a)(t,2),c=i[0],l=i[1],s=a[R],u=c[R];if(typeof s===typeof u&&s!==u){if("string"===typeof s){for(var d=0;d<Math.min(s.length,u.length);d++){var f=s.charCodeAt(d),j=u.charCodeAt(d);if(f!==j)return f-j}return s.length-u.length}if("number"===typeof s)return s-u}return r-l})).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n}))}),[F,R]),H=f.useMemo((function(){return!0===N?q:Object(d.a)(q).reverse()}),[q,N]),z=f.useState(me.view),B=Object(o.a)(z,2),V=B[0],J=B[1],Y=f.useState(me.selDate),K=Object(o.a)(Y,2),Q=K[0],X=K[1],Z=f.useMemo((function(){return function(e){return function(t){var n=t.data,r=t.children,i=Object(a.a)(t,["data","children"]),c=n.system,u="gray";if("Recommended"===n.status)u="green";else{var o=Math.min(Math.min(new Date(n.startDate))||1/0,Math.min(new Date(n.endDate))||1/0)-new Date;"Civilian"!==c&&o<14688e5||o<864e6?u="red":("Civilian"!==c&&o<18144e5||o<12096e5)&&(u="rgb(204, 204, 0)")}return Object(s.jsx)(W.a.Appointment,Object(l.a)(Object(l.a)({},i),{},{data:n,onClick:function(t){Te(void 0,t.data.internalUID),e(1/0)},style:{backgroundColor:u},children:r}))}}(t)}),[t]);return f.useEffect((function(){null!==S.current&&S.current.addEventListener("keyup",(function(e){13!==e.charCode&&"Enter"!==e.key||e.stopPropagation()}),{capture:!0})}),[S]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(s.jsx)("div",{ref:S,children:Object(s.jsx)(L.a,{value:u,onChange:w,onCancelSearch:function(){return w("")},onRequestSearch:function(){"list"===V?(me.view="calendar",J("calendar")):(me.view="list",J("list"))},style:{margin:"auto",maxWidth:"1000px"},searchIcon:Object(s.jsx)(ye,{icon:V})})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:"list"===V?Object(s.jsx)(Re,{header:Object(s.jsx)(ge,{heightProvider:n,children:Fe.map((function(e,t){return Object(s.jsx)(p.a,{children:Object(s.jsx)(y.a,{active:R===e.name,direction:R===e.name&&!1===N?"desc":"asc",onClick:function(){return function(e){me.data="",j("");var t=e===R?!1===N&&(me.sort=null,E(null),!0):(me.sort=e,E(e),!0);me.up=t,U(t)}(e.name)},children:e.friendlyName})},t)}))}),data:H,generator:function(e){return Ce(e,e.internalUID,t)},style:De}):Object(s.jsxs)(W.d,{data:F.map((function(e){var t=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)};return{startDate:t(e.startDateTime),endDate:t(e.endDateTime),title:e.name,internalUID:e.internalUID,status:e.status}})),children:[Object(s.jsx)(A.q,{defaultCurrentDate:Q,onCurrentDateChange:function(e){me.selDate=e,X(e)}}),Object(s.jsx)(W.c,{}),Object(s.jsx)(W.a,{appointmentComponent:Z}),Object(s.jsx)(W.e,{}),Object(s.jsx)(W.b,{})]})})]})},xe="all ".concat(.075,"s linear"),ye=function(e){var t=e.icon,n=f.useRef(!0),a=f.useRef(t),r=f.useState(t),i=Object(o.a)(r,2),c=i[0],l=i[1],u=f.useRef(null),d=f.useRef(null),j=f.useRef(null);return f.useEffect((function(){j.current=function(e,t){var n=function(){0===e.current.getBoundingClientRect().width&&t()};return e.current.addEventListener("transitionend",n),e.current.addEventListener("transitioncancel",n),function(t){"expand"===t?(e.current.classList.remove("collapsed"),e.current.classList.add("expanded")):"collapse"===t&&(e.current.classList.remove("expanded"),e.current.classList.add("collapsed"),n())}}(u,(function(){if(null!==d.current){var e=d.current;d.current=null,a.current=e,l(e),j.current("expand")}}))}),[u]),f.useEffect((function(){if(!0!==n.current){if(a.current===t)return d.current=null,void j.current("expand");d.current=t,j.current("collapse")}else n.current=!1}),[t]),Object(s.jsx)(g.a,{ref:u,style:{transition:xe},children:"list"===c?Object(s.jsx)(q.a,{}):Object(s.jsx)(z.a,{})})},ge=function(e){var t=e.children,n=Object(o.a)(e.heightProvider,2),a=n[0],r=n[1],i=f.useRef(null);f.useEffect((function(){var e=r.current,t=a.current,n=i.current.getBoundingClientRect().top+window.scrollY,c=function(){var e=Math.max(window.scrollY+t-n,0);d(e)};c();var l=e.push((function(e){t=e,c()}))-1;return window.addEventListener("scroll",c),function(){e[l]=function(){},window.removeEventListener("scroll",c)}}),[a,r]);var c=f.useState(0),l=Object(o.a)(c,2),u=l[0],d=l[1];return Object(s.jsx)(D.a,{children:Object(s.jsx)(C.a,{ref:i,style:{transform:"translate(0,"+u+"px)"},children:t})})},De={font:"20px Arial, sans-serif"},Ce=function(e,t,n){var a="Civilian"===e.system?"Civilian":"Military",r=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},i="white";if("Recommended"===e.status)i="rgb(230, 255, 230)";else{var c=Math.min(Math.min(new Date(r(e.startDateTime)))||1/0,Math.min(new Date(r(e.endDateTime)))||1/0)-new Date;"Civilian"!==a&&c<14688e5||c<864e6?i="rgb(255, 230, 230)":("Civilian"!==a&&c<18144e5||c<12096e5)&&(i="rgb(255, 255, 204)")}return Object(s.jsxs)(C.a,{style:{backgroundColor:i},onClick:function(){Te(e,t),n(1/0)},children:[Object(s.jsx)(p.a,{children:e.name}),Object(s.jsx)(p.a,{children:e.startDateTime}),Object(s.jsx)(p.a,{children:e.endDateTime}),Object(s.jsx)(p.a,{children:e.origin}),Object(s.jsx)(p.a,{children:e.destination}),Object(s.jsx)(p.a,{children:e.POC}),Object(s.jsx)(p.a,{children:e.POCPhone}),Object(s.jsx)(p.a,{children:a}),Object(s.jsx)(p.a,{children:e.vehicles}),Object(s.jsx)(p.a,{children:e.notes}),Object(s.jsx)(p.a,{children:e.status})]},e.internalUID)},ke=function(e,t){return Object(s.jsxs)(C.a,{children:[Object(s.jsx)(p.a,{children:e.name}),Object(s.jsx)(p.a,{children:e.startDateTime}),Object(s.jsx)(p.a,{children:e.endDateTime}),Object(s.jsx)(p.a,{children:e.origin}),Object(s.jsx)(p.a,{children:e.destination}),Object(s.jsx)(p.a,{children:e.POC}),Object(s.jsx)(p.a,{children:e.POCPhone}),Object(s.jsx)(p.a,{children:"Civilian"===e.system?"Civilian":"Military"}),Object(s.jsx)(p.a,{children:e.vehicles}),Object(s.jsx)(p.a,{children:e.notes})]},e.internalUID)},we=function(e,t,n,a){return Object(s.jsx)(C.a,{onClick:function(){Te(e,t),a(1/0)},children:Object(s.jsx)(p.a,{style:Se(e.latest),align:"center",children:e.title})},n)},Se=function(e){return!1===e?{color:"grey"}:{}},Te=function(e,t){$({type:"detail",params:[Z,t]}),Z++},Ie=function(e){$({type:"newindent",params:[Z,e]}),Z++},Re=function(e){var t=e.data,n=e.generator,a=(e.style,e.header),r=e.tail;return Object(s.jsx)(k.a,{children:Object(s.jsxs)(w.a,{stickyHeader:!0,children:[a,Object(s.jsx)(S.a,{children:t.map(n)}),r]})})},Ee=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,a=Object(u.a)(t);try{for(a.s();!(n=a.n()).done;){(0,n.value)(e())}}catch(r){a.e(r)}finally{a.f()}}]},Pe=[],Me=function(){return Le},Le=[],Ne=["Pending","Submitted","Recommended","Hidden"],Ue=[{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],Ae=[{name:"status",initialData:"Pending",friendlyName:"Status"}],We=[].concat(Object(d.a)(Ue.slice(2,-2)),[Ue[1]],Object(d.a)(Ue.slice(-2))),Fe=[].concat(Object(d.a)(Ue.slice(2,-2)),[Ue[1]],Object(d.a)(Ue.slice(-2)),Ae),qe={},He={},ze={startDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).toISOString().substring(0,16)},endDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).toISOString().substring(0,16)}},Be=Object(u.a)(Fe);try{for(Be.s();!(K=Be.n()).done;){var Ve=K.value;qe[Ve.name]=Ve.friendlyName}}catch(ct){Be.e(ct)}finally{Be.f()}for(var Je=0,Ye=[].concat(Ue,Ae);Je<Ye.length;Je++){var Ke=Ye[Je];He[Ke.name]={persistent:Ke.persistent,optional:Ke.optional}}var Ge=function(e){var t=e.children,n=e.selTab,a=e.setSelTab,r=e.appbarRef,i=[Object(s.jsx)(T.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(s.jsx)("img",{src:N,height:"48px",width:"48px"})})})],c=[Object(s.jsx)(T.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)(I.a,{onClick:function(){Ie(),a(1/0)},size:"small",className:"MuiTab-textColorInherit",children:Object(s.jsx)(V.a,{style:{color:"white"}})})})];return Object(s.jsxs)("div",{children:[Object(s.jsx)(R.a,{position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:r,children:Object(s.jsx)(E.a,{variant:"scrollable",value:Math.min(n,t.length-1)+i.length,children:[].concat(i,Object(d.a)(t.map((function(e,r){var i=Object(l.a)(Object(l.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(r,t.length)},onClick:function(){a(r)},active:r===Math.min(n,t.length-1),key:e.props.mykey});return Object(s.jsx)(Qe,Object(l.a)({},i))}))),c)})}),Object(s.jsx)("div",{children:t[Math.min(n,t.length-1)]})]})},Qe=function(e){var t=e.label,n=e.onClick,a=e.active,r=e.removable,i=e.removeCallback;return Object(s.jsx)(T.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(s.jsxs)("span",{children:[Object(s.jsx)(T.a,{label:t,onClick:n,selected:!!a||null}),r?Object(s.jsx)(I.a,{size:"small",onClick:i,children:Object(s.jsx)(P.a,{style:{fill:"red"}})}):void 0]})})},Xe=Ee(de),Ze=Object(o.a)(Xe,3),$e=Ze[0],_e=Ze[1],et=Ze[2],tt=Ee(Me),nt=Object(o.a)(tt,3),at=nt[0],rt=nt[1],it=nt[2];j.render(Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(ee,{})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.45787e8b.chunk.js.map