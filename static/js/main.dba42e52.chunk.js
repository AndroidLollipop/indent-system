(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{259:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},a=[];return function(r){r=r.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var a=0;a<e.length;a++){for(var r=Object.values(e[a]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),i={},c=0;c<r.length;c++)i[r[c]]||(n[r[c]]||(n[r[c]]=0),n[r[c]]++,i[r[c]]=0),i[r[c]]+=1/r.length;t.push(i)}var s=Object.keys(n);for(a=0;a<s.length;a++)n[s[a]]?n[s[a]]=Math.log(e.length/n[s[a]]):n[s[a]]=0}(e,a,n),t=1);for(var i=[],c=0;c<e.length;c++)i.push([0,0,c,e[c]]);for(c=0;c<r.length;c++)for(var s=r[c],l=0;l<e.length;l++)a[l][s]&&(i[l][0]-=a[l][s]*n[s],i[l][1]-=a[l][s]);return i=i.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},261:function(e,t,n){"use strict";n.r(t);var a=n(176),r=n(55),i=n.n(r),c=n(87),s=n(38),l=n(10),u=n(88),o=n(19),d=n(56),j=n(0),f=n(18),b=n(163),h=n.n(b),O=n(125),v=n(307),p=n(315),m=n(308),x=n(318),g=n(321),y=n(309),D=n(304),k=n(312),C=n(305),w=n(306),S=n(311),T=n(313),P=n(316),R=n(159),I=n(314),N=n(164),U=n.n(N),M=n.p+"static/media/logo.58ed9303.jpg",E=n.p+"static/media/5sirlogo.a6ac04db.jpg",L=n(23),q=n(67),H=n(174),W=n.n(H),A=n(175),z=n.n(A);console.log("0.1.2a");var B,J,V=n(259),Y="https://murmuring-ocean-38436.herokuapp.com/",F=[],G=0,K=function(){var e=j.useState([]),t=Object(o.a)(e,2),n=t[0],a=t[1];B=a,j.useEffect((function(){return(J=h()(Y,{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<ee)return;ee=t,void 0!==ne[t]&&ne[t]()}De=Object(d.a)(e).reverse(),Le()})),J.on("sendNotifications",(function(e){Ce=Object(d.a)(e).reverse(),ze()})),J.emit("requestIndents",""),J.emit("requestNotifications",""),function(){J.disconnect()}}),[]);var r=j.useState(0),i=Object(o.a)(r,2),c=i[0],s=i[1],f=j.useRef(null),b=j.useRef([]),O=j.useRef(0);return j.useEffect((function(){if(f.current){O.current=f.current.offsetHeight;var e,t=Object(u.a)(b.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(f.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[f]),Object(l.jsxs)("div",{children:[Object(l.jsx)(Re,{selTab:c,setSelTab:s,appbarRef:f,children:[Object(l.jsx)("div",{label:"view indents",mykey:"defaultTab1",children:Object(l.jsx)(fe,{setSelTab:s,heightProvider:[O,b]})},"defaultTab1"),Object(l.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(l.jsx)(de,{})},"defaultTab2"),Object(l.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(l.jsx)(Q,{setSelTab:s})},"defaultTab3")].concat(Object(d.a)(n.map((function(e,t){return Object(l.jsx)(Z,{mykey:e[0],label:_(e[1]).name,removable:"true",removeCallback:function(t,n){var a;a=e[0],F=Object(d.a)(F).filter((function(e){return e[0]!==a})),X[a]=void 0,B(F);var r=Math.min(c,n-1);r>t&&s(r-1)},details:e,heightProvider:[O,b]},e[0])}))))}),Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)("img",{src:E,width:"192px"})]})},Q=function(e){var t=e.setSelTab,n=ke(),a=j.useState(n),r=Object(o.a)(a,2),i=(r[0],r[1]);j.useEffect((function(){var e=We(i);return function(){return Ae(e)}}),[]);for(var c=[],u={},d=0;d<n.length;d++)!0===u[n[d].internalUID]?c.push(Object(s.a)(Object(s.a)({},n[d]),{},{latest:!1})):c.push(Object(s.a)(Object(s.a)({},n[d]),{},{latest:!0})),u[n[d].internalUID]=!0;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(O.a,{square:!0,children:Object(l.jsx)(ge,{data:c,generator:function(e,n){return pe(e,e.internalUID,""+e.internalUID+n,t)},style:he})})]})},X={},Z=function(e){var t=e.details,n=e.heightProvider,a=Object(o.a)(t,2),r=a[0],i=a[1];void 0===X[r]&&(X[r]=_(i));var c=j.useState(X[r]),u=Object(o.a)(c,2),d=u[0],f=u[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(O.a,{square:!0,children:Object(l.jsx)(ge,{header:Object(l.jsx)(be,{heightProvider:n,children:Se.map((function(e,t){return Object(l.jsx)(v.a,{children:e.friendlyName},t)}))}),data:[d],generator:function(e){return ve(e,e.internalUID)},style:he})}),Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(p.a,{variant:"outlined",native:!0,value:d.status,onChange:function(e){X[r]=Object(s.a)(Object(s.a)({},X[r]),{},{status:e.target.value}),f(X[r])},children:we.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))}),Object(l.jsx)(m.a,{variant:"outlined",onClick:function(){$(i,X[r])},children:"Save"})]})},$=function(){var e=Object(c.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(t,n);case 2:e.sent&&Le();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(e){var t=De.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},ee=0,te=0,ne=[],ae=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te++,r=new Promise((function(e){return a=e})),ne[te]=a,J.emit("writeDataStore",[t,n,te]),e.next=6,r;case 6:if(te!==ee){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(c.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te++,a=new Promise((function(e){return n=e})),ne[te]=n,J.emit("appendDataStore",[t,te]),e.next=6,a;case 6:if(te!==ee){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){return De},ce=function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:e.sent&&Le();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(e){var t=e.fields,n=e.defaults,a=e.formPersistentStore,r=[],i=void 0===a?{}:a;void 0===i.data&&(i.data=t.map((function(e){return e.initialData})));for(var c=j.useState(i.data),s=Object(o.a)(c,2),f=s[0],b=s[1],h=f,O=function(){var e=v,n=t[e];r.push([f[e],function(t){(h=Object(d.a)(h))[e]=t,i.data=h,b(h)},n.initialData,n.name,n.friendlyName,n.fieldType])},v=0;v<t.length;v++)O();return Object(l.jsxs)("form",{noValidate:!0,children:[Object(l.jsx)("div",{children:r.map((function(e,t){var n=Object(o.a)(e,6),a=n[0],r=n[1],i=(n[2],n[3],n[4]),c=n[5];return Object(l.jsx)("div",{style:ue,children:"datetime"===c?Object(l.jsx)(x.a,{id:"datetime-local",fullWidth:!0,label:i,type:"datetime-local",variant:"outlined",onChange:function(e){return r(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(l.jsx)(x.a,{fullWidth:!0,multiline:!0,label:i,variant:"outlined",value:a,onChange:function(e){return r(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},t)}))}),Object(l.jsx)(m.a,{variant:"outlined",onClick:function(){var e,a={},c=Object(u.a)(n);try{for(c.s();!(e=c.n()).done;){var s=e.value,l=s.name,d=s.initialData;a[l]=d}}catch(x){c.e(x)}finally{c.f()}var j,f=Object(u.a)(r);try{for(f.s();!(j=f.n()).done;){var h=Object(o.a)(j.value,6),O=h[0],v=(h[1],h[2],h[3]),p=(h[4],h[5]),m=le[p];a[v]=m?m(O):O}}catch(x){f.e(x)}finally{f.f()}ce(a),function(){var e=t.map((function(e){return e.initialData}));i.data=e,b(e)}()},children:"submit"})]})},le={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},ue={display:"flex",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},oe={},de=function(){return Object(l.jsxs)("div",{style:he,children:[Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(se,{fields:Se,defaults:Te,formPersistentStore:oe})]})},je={},fe=function(e){var t=e.setSelTab,n=e.heightProvider;!0!==je.initialized&&(je.initialized=!0,je.data="",je.sort=null,je.up=!0,je.view="list",je.selDate=(new Date).toISOString().slice(0,10));var r=ie();j.useEffect((function(){var e=Me((function(e){h.current=e,m.current=V.makeRanker(e),C(""!==x.current?m.current(x.current):e)}));return function(){return Ee(e)}}),[]);var i=j.useState(je.data),c=Object(o.a)(i,2),u=c[0],f=c[1],b=j.useRef(null),h=j.useRef(r),p=V.makeRanker(r),m=j.useRef(p),x=j.useRef(je.data),y=j.useState(""!==je.data?p(je.data):r),D=Object(o.a)(y,2),k=D[0],C=D[1],w=function(e){je.data=e,f(e),je.view="list",K("list"),je.sort=null,I(null),je.up=!0,H(!0),null!==b.current&&(clearTimeout(b.current),b.current=null),b.current=setTimeout((function(){x.current=e,C(""!==e?m.current(e):h.current),b.current=null}),100)},S=j.useRef(null),T=j.useState(je.sort),P=Object(o.a)(T,2),R=P[0],I=P[1],N=j.useState(je.up),M=Object(o.a)(N,2),E=M[0],H=M[1],A=j.useMemo((function(){return k.filter((function(e){return"Hidden"!==e.status}))}),[k]),B=j.useMemo((function(){return null===R?A:A.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(o.a)(e,2),a=n[0],r=n[1],i=Object(o.a)(t,2),c=i[0],s=i[1],l=a[R],u=c[R];if(typeof l===typeof u&&l!==u){if("string"===typeof l){for(var d=0;d<Math.min(l.length,u.length);d++){var j=l.charCodeAt(d),f=u.charCodeAt(d);if(j!==f)return j-f}return l.length-u.length}if("number"===typeof l)return l-u}return r-s})).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n}))}),[A,R]),J=j.useMemo((function(){return!0===E?B:Object(d.a)(B).reverse()}),[B,E]),Y=j.useState(je.view),F=Object(o.a)(Y,2),G=F[0],K=F[1],Q=j.useState(je.selDate),X=Object(o.a)(Q,2),Z=X[0],$=X[1],_=j.useMemo((function(){return function(e){return function(t){var n=t.children,r=Object(a.a)(t,["children"]);return Object(l.jsx)(q.a.Appointment,Object(s.a)(Object(s.a)({},r),{},{onClick:function(t){xe(void 0,t.data.internalUID),e(1/0)},children:n}))}}(t)}),[t]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(l.jsx)(U.a,{ref:S,value:u,onChange:w,onCancelSearch:function(){return w("")},onRequestSearch:function(){"list"===G?(je.view="calendar",K("calendar")):(je.view="list",K("list"))},style:{margin:"auto",maxWidth:"1000px"},searchIcon:"list"===G?Object(l.jsx)(W.a,{}):Object(l.jsx)(z.a,{})})}),Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(O.a,{square:!0,children:"list"===G?Object(l.jsx)(ge,{header:Object(l.jsx)(be,{heightProvider:n,children:Pe.map((function(e,t){return Object(l.jsx)(v.a,{children:Object(l.jsx)(g.a,{active:R===e.name,direction:R===e.name&&!1===E?"desc":"asc",onClick:function(){return function(e){je.data="",f("");var t=e===R?!1===E&&(je.sort=null,I(null),!0):(je.sort=e,I(e),!0);je.up=t,H(t)}(e.name)},children:e.friendlyName})},t)}))}),data:J,generator:function(e){return Oe(e,e.internalUID,t)},style:he}):Object(l.jsxs)(q.d,{data:A.map((function(e){var t=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)};return{startDate:t(e.startDateTime),endDate:t(e.endDateTime),title:e.name,internalUID:e.internalUID}})),children:[Object(l.jsx)(L.q,{defaultCurrentDate:Z,onCurrentDateChange:function(e){je.selDate=e,$(e)}}),Object(l.jsx)(q.c,{}),Object(l.jsx)(q.a,{appointmentComponent:_}),Object(l.jsx)(q.e,{}),Object(l.jsx)(q.b,{})]})})]})},be=function(e){var t=e.children,n=Object(o.a)(e.heightProvider,2),a=n[0],r=n[1],i=j.useRef(null);j.useEffect((function(){var e=r.current,t=a.current,n=i.current.getBoundingClientRect().top+window.scrollY,c=function(){var e=Math.max(window.scrollY+t-n,0);d(e)};c();var s=e.push((function(e){t=e,c()}))-1;return window.addEventListener("scroll",c),function(){e[s]=function(){},window.removeEventListener("scroll",c)}}),[a,r]);var c=j.useState(0),s=Object(o.a)(c,2),u=s[0],d=s[1];return Object(l.jsx)(y.a,{children:Object(l.jsx)(D.a,{ref:i,style:{transform:"translate(0,"+u+"px)"},children:t})})},he={font:"20px Arial, sans-serif"},Oe=function(e,t,n){return Object(l.jsxs)(D.a,{onClick:function(){xe(e,t),n(1/0)},children:[Object(l.jsx)(v.a,{children:e.name}),Object(l.jsx)(v.a,{children:e.startDateTime}),Object(l.jsx)(v.a,{children:e.endDateTime}),Object(l.jsx)(v.a,{children:e.origin}),Object(l.jsx)(v.a,{children:e.destination}),Object(l.jsx)(v.a,{children:e.POC}),Object(l.jsx)(v.a,{children:e.POCPhone}),Object(l.jsx)(v.a,{children:e.vehicles}),Object(l.jsx)(v.a,{children:e.notes}),Object(l.jsx)(v.a,{children:e.status})]},e.internalUID)},ve=function(e,t){return Object(l.jsxs)(D.a,{children:[Object(l.jsx)(v.a,{children:e.name}),Object(l.jsx)(v.a,{children:e.startDateTime}),Object(l.jsx)(v.a,{children:e.endDateTime}),Object(l.jsx)(v.a,{children:e.origin}),Object(l.jsx)(v.a,{children:e.destination}),Object(l.jsx)(v.a,{children:e.POC}),Object(l.jsx)(v.a,{children:e.POCPhone}),Object(l.jsx)(v.a,{children:e.vehicles}),Object(l.jsx)(v.a,{children:e.notes})]},e.internalUID)},pe=function(e,t,n,a){return Object(l.jsx)(D.a,{onClick:function(){xe(e,t),a(1/0)},children:Object(l.jsx)(v.a,{style:me(e.latest),align:"center",children:e.title})},n)},me=function(e){return!1===e?{color:"grey"}:{}},xe=function(e,t){var n;n=[G,t],(F=Object(d.a)(F)).push(n),B(F),G++},ge=function(e){var t=e.data,n=e.generator,a=(e.style,e.header),r=e.tail;return Object(l.jsx)(k.a,{children:Object(l.jsxs)(C.a,{stickyHeader:!0,children:[a,Object(l.jsx)(w.a,{children:t.map(n)}),r]})})},ye=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,a=Object(u.a)(t);try{for(a.s();!(n=a.n()).done;){(0,n.value)(e())}}catch(r){a.e(r)}finally{a.f()}}]},De=[],ke=function(){return Ce},Ce=[],we=["Pending","Submitted","Recommended","Hidden"],Se=[{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes"}],Te=[{name:"status",initialData:"Pending",friendlyName:"Status"}],Pe=[].concat(Se,Te),Re=function(e){var t=e.children,n=e.selTab,a=e.setSelTab,r=e.appbarRef,i=[Object(l.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(l.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(l.jsx)("img",{src:M,height:"48px",width:"48px"})})})];return Object(l.jsxs)("div",{children:[Object(l.jsx)(T.a,{position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:r,children:Object(l.jsx)(P.a,{variant:"scrollable",value:Math.min(n,t.length-1)+i.length,children:[].concat(i,Object(d.a)(t.map((function(e,r){var i=Object(s.a)(Object(s.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(r,t.length)},onClick:function(){a(r)},active:r===Math.min(n,t.length-1),key:e.props.mykey});return Object(l.jsx)(Ie,Object(s.a)({},i))}))))})}),Object(l.jsx)("div",{children:t[Math.min(n,t.length-1)]})]})},Ie=function(e){var t=e.label,n=e.onClick,a=e.active,r=e.removable,i=e.removeCallback;return Object(l.jsx)(S.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(l.jsxs)("span",{children:[Object(l.jsx)(S.a,{label:t,onClick:n,selected:!!a||null}),r?Object(l.jsx)(R.a,{size:"small",onClick:i,children:Object(l.jsx)(I.a,{style:{fill:"red"}})}):void 0]})})},Ne=ye(ie),Ue=Object(o.a)(Ne,3),Me=Ue[0],Ee=Ue[1],Le=Ue[2],qe=ye(ke),He=Object(o.a)(qe,3),We=He[0],Ae=He[1],ze=He[2];f.render(Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)(K,{})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.dba42e52.chunk.js.map