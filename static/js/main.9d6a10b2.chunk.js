(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{259:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},i=[];return function(r){r=r.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var i=0;i<e.length;i++){for(var r=Object.values(e[i]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),a={},c=0;c<r.length;c++)a[r[c]]||(n[r[c]]||(n[r[c]]=0),n[r[c]]++,a[r[c]]=0),a[r[c]]+=1/r.length;t.push(a)}var l=Object.keys(n);for(i=0;i<l.length;i++)n[l[i]]?n[l[i]]=Math.log(e.length/n[l[i]]):n[l[i]]=0}(e,i,n),t=1);for(var a=[],c=0;c<e.length;c++)a.push([0,0,c,e[c]]);for(c=0;c<r.length;c++)for(var l=r[c],s=0;s<e.length;s++)i[s][l]&&(a[s][0]-=i[s][l]*n[l],a[s][1]-=i[s][l]);return a=a.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},260:function(e,t,n){"use strict";n.r(t);var i=n(176),r=n(43),a=n.n(r),c=n(79),l=n(32),s=n(9),u=n(80),o=n(19),d=n(36),f=n(0),j=n(18),b=n(164),h=n.n(b),v=n(126),m=n(307),p=n(308),O=n(319),x=n(316),y=n(322),g=n(312),D=n(309),C=n(304),k=n(313),T=n(305),w=n(306),S=n(311),I=n(160),M=n(314),E=n(317),P=n(315),R=n(165),N=n.n(R),L=n.p+"static/media/logo.58ed9303.jpg",A=n.p+"static/media/5sirlogo.a6ac04db.jpg",U=n(23),W=n(67),H=n(107),q=n.n(H),z=n(174),F=n.n(z),B=n(175),V=n.n(B);console.log("0.1.20a");var Y,J,K,X=n(259),G="https://murmuring-ocean-38436.herokuapp.com/",Q=[],Z=1,$=function(e){(Q=Object(d.a)(Q)).push(e),Y(Q)},_=function(e){Q=Object(d.a)(Q).filter((function(t){return t.params[0]!==e})),ie[e]=void 0,Y(Q)},ee=function(e){var t=e.childContext,n=e.mykey,i=e.children,r=f.useRef(n);return r.current!==n&&null!==r.current&&(t.current[r.current]=window.scrollY,r.current=null),f.useLayoutEffect((function(){r.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,r]),i},te=function(){var e,t=f.useState([]),n=Object(o.a)(t,2),i=n[0],r=n[1];Y=r,f.useEffect((function(){return(J=h()(G,{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<le)return;le=t,void 0!==ue[t]&&ue[t]()}Pe=Object(d.a)(e).reverse(),tt()})),J.on("sendNotifications",(function(e){Ne=Object(d.a)(e).reverse(),ct()})),J.emit("requestIndents",""),J.emit("requestNotifications",""),function(){J.disconnect()}}),[]);var a=f.useState(0),c=Object(o.a)(a,2),l=c[0],j=c[1],b=f.useRef(null),v=f.useRef([]),m=f.useRef(0);f.useEffect((function(){if(b.current){m.current=b.current.offsetHeight;var e,t=Object(u.a)(v.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(b.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[b,null===b||void 0===b||null===(e=b.current)||void 0===e?void 0:e.offsetHeight]);var p=f.useRef({}),O=f.useMemo((function(){return function(e){return"Civilian"!==e.system}}),[]),x=f.useRef({}),y=f.useMemo((function(){return function(e){return"Civilian"===e.system}}),[]),g=f.useRef({});return Object(s.jsxs)("div",{children:[Object(s.jsx)(Ge,{childWrapper:ee,childContext:g,selTab:l,setSelTab:j,appbarRef:b,children:[Object(s.jsx)("div",{label:"military indents",mykey:"defaultTab0",children:Object(s.jsx)(Oe,{setSelTab:j,heightProvider:[m,v],transportPersistentStore:p.current,filter:O})},"defaultTab0"),Object(s.jsx)("div",{label:"civilian indents",mykey:"defaultTab1",children:Object(s.jsx)(Oe,{setSelTab:j,heightProvider:[m,v],transportPersistentStore:x.current,filter:y})},"defaultTab1"),Object(s.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(s.jsx)(pe,{id:0})},"defaultTab2"),Object(s.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(s.jsx)(ne,{setSelTab:j})},"defaultTab3")].concat(Object(d.a)(i.map((function(e,t){var n=e.type,i=e.params;return"detail"===n?Object(s.jsx)(re,{setSelTab:j,mykey:i[0],label:ce(i[1]).name,removable:"true",removeCallback:function(e,t){_(i[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},details:i,heightProvider:[m,v]},i[0]):"newindent"===n?Object(s.jsx)(pe,{cloneID:i[1],mykey:i[0],label:"new indent",removable:"true",removeCallback:function(e,t){_(i[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},id:i[0]},i[0]):Object(s.jsx)("div",{})}))))}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("img",{src:A,width:"192px"})]})},ne=function(e){var t=e.setSelTab,n=Re(),i=f.useState(n),r=Object(o.a)(i,2),a=(r[0],r[1]);f.useEffect((function(){var e=rt(a);return function(){return at(e)}}),[]);for(var c=[],u={},d=0;d<n.length;d++)!0===u[n[d].internalUID]?c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!1})):c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!0})),u[n[d].internalUID]=!0;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Me,{data:c,generator:function(e,n){return Te(e,e.internalUID,""+e.internalUID+n,t)},style:De})})]})},ie={},re=function(e){var t=e.setSelTab,n=e.details,i=e.heightProvider,r=Object(o.a)(n,2),a=r[0],c=r[1];void 0===ie[a]&&(ie[a]=ce(c));var u=f.useState(ie[a]),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Me,{header:Object(s.jsx)(ge,{heightProvider:i,children:We.map((function(e,t){return Object(s.jsx)(m.a,{children:e.friendlyName},t)}))}),data:[j],generator:function(e){return ke(e,e.internalUID)},style:De})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(p.a,{variant:"outlined",onClick:function(){Ie(j.internalUID),t(1/0)},children:"Copy"}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)("div",{style:me,children:Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:"Additional Info",variant:"outlined",value:j.addInfo,onChange:function(e){ie[a]=Object(l.a)(Object(l.a)({},ie[a]),{},{addInfo:e.target.value}),b(ie[a])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(x.a,{variant:"outlined",native:!0,value:j.status,onChange:function(e){ie[a]=Object(l.a)(Object(l.a)({},ie[a]),{},{status:e.target.value}),b(ie[a])},children:Le.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))})}),Object(s.jsx)("div",{style:{display:"inline-block",width:"1px"}}),Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(p.a,{variant:"outlined",onClick:function(){ae(c,ie[a])},children:"Save"})})]})]})},ae=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t,n);case 2:e.sent&&tt();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){var t=Pe.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},le=0,se=0,ue=[],oe=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var i,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se++,r=new Promise((function(e){return i=e})),ue[se]=i,J.emit("writeDataStore",[t,n,se]),e.next=6,r;case 6:if(se!==le){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se++,i=new Promise((function(e){return n=e})),ue[se]=n,J.emit("appendDataStore",[t,se]),e.next=6,i;case 6:if(se!==le){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){return Pe},je=function(e,t){var n=e.system,i=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},r=Math.min(new Date(i(e.startDateTime)));if(r!==r)return["FAILED","Enter a valid start date"];var a=Math.min(new Date(i(e.endDateTime)));if(a!==a)return["FAILED","Enter a valid end date"];if(a<=r)return["FAILED","End date must be after start date"];var c=Math.min(r||1/0,a||1/0)-new Date;if(("Civilian"!==n&&c<14688e5||c<864e6)&&!0!==t)return["AUTHENTICATE","This indent is too late. Please discuss this indent manually with the transport clerk."];for(var l in e)if(!0!==ze[l].optional&&("string"!==typeof e[l]||""===e[l].trim()))return void 0!==qe[l]?["FAILED",qe[l]+" cannot be empty"]:["FAILED","Field cannot be empty"];return["SUCCESS"]},be=function(){var e=Object(c.a)(a.a.mark((function e(t,n,i){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof n){e.next=4;break}if("SUCCESS"===(r=n(t,i))[0]){e.next=4;break}return e.abrupt("return",r);case 4:return e.next=6,de(t);case 6:if(!e.sent){e.next=10;break}return tt(),e.abrupt("return",["SUCCESS"]);case 10:return e.abrupt("return",["UNKNOWN"]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),he=function(e){var t=e.prefill,n=e.fields,i=e.defaults,r=e.formPersistentStore,l=e.validator,j=[],b=void 0===r?{}:r;void 0===b.data&&(b.data=n.map((function(e){if("object"===typeof t){var n=t[e.name];if(void 0!==n){var i=Fe[e.name];return"function"===typeof i?i(n):n}}return e.initialData})));for(var h=f.useState(b.data),v=Object(o.a)(h,2),m=v[0],x=v[1],y=m,g=function(){var e=D,t=n[e];j.push([m[e],function(t){(y=Object(d.a)(y))[e]=t,b.data=y,x(y)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options])},D=0;D<n.length;D++)g();var C=function(){var e=n.map((function(e){return e.initialData}));b.data=e,x(e)},k=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,d,f,b,h,v,m,p,O,x,y,g,D,T,w;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},r=Object(u.a)(i);try{for(r.s();!(c=r.n()).done;)s=c.value,d=s.name,f=s.initialData,n[d]=f}catch(a){r.e(a)}finally{r.f()}b=Object(u.a)(j);try{for(b.s();!(h=b.n()).done;)v=Object(o.a)(h.value,6),m=v[0],v[1],v[2],p=v[3],v[4],O=v[5],x=ve[O],n[p]=x?x(m):m}catch(a){b.e(a)}finally{b.f()}return e.next=7,be(n,l,t);case 7:if(y=e.sent,g=Object(o.a)(y,2),D=g[0],T=g[1],"SUCCESS"!==D){e.next=16;break}alert("Indent submitted successfully!"),C(),e.next=27;break;case 16:if("FAILED"!==D){e.next=20;break}alert(T),e.next=27;break;case 20:if("AUTHENTICATE"!==D){e.next=27;break}if(null!==(w=prompt(T))&&""!==w){e.next=26;break}return e.abrupt("return");case 26:"5sir!"===w?k(!0):alert("Incorrect bypass code.");case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{noValidate:!0,children:[Object(s.jsx)("div",{children:j.map((function(e,t){var n,i=Object(o.a)(e,7),r=i[0],a=i[1],c=(i[2],i[3],i[4]),l=i[5],u=i[6];return Object(s.jsx)("div",{style:me,children:"datetime"===l?Object(s.jsx)(O.a,{id:"datetime-local",fullWidth:!0,label:c,type:"datetime-local",variant:"outlined",value:r,onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===l?Object(s.jsx)(O.a,{fullWidth:!0,select:!0,label:c,variant:"outlined",value:r,SelectProps:{native:!0},onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:u.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))}):"multi"===l?Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:null!==(n=r[0])&&void 0!==n?n:"",onChange:function(e){return a([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:r,onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},t)}))}),Object(s.jsx)(p.a,{variant:"outlined",onClick:k,children:"submit"})]})},ve={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},me={display:"flex",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},pe=function(e){var t=e.id,n=e.cloneID;void 0===ie[t]&&(ie[t]={});var i=f.useMemo((function(){return void 0!==n?ce(n):void 0}),[n,Ue]);return Object(s.jsxs)("div",{style:De,children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(he,{prefill:i,fields:Ae,defaults:Ue,formPersistentStore:ie[t],validator:je})]})},Oe=function(e){var t,n=e.setSelTab,r=e.heightProvider,a=e.transportPersistentStore,c=e.filter;!0!==a.initialized&&(a.initialized=!0,a.data="",a.sort=null,a.up=!0,a.view="list",a.selDate=(t=new Date,t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t).toISOString().slice(0,10));var u=fe();f.useEffect((function(){var e=_e((function(e){x.current=e,D.current=X.makeRanker(e),S(""!==C.current?D.current(C.current):e)}));return function(){return et(e)}}),[]);var j=f.useState(a.data),b=Object(o.a)(j,2),h=b[0],p=b[1],O=f.useRef(null),x=f.useRef(u),g=X.makeRanker(u),D=f.useRef(g),C=f.useRef(a.data),k=f.useState(""!==a.data?g(a.data):u),T=Object(o.a)(k,2),w=T[0],S=T[1],I=function(e){a.data=e,p(e),a.view="list",Q("list"),a.sort=null,L(null),a.up=!0,z(!0),null!==O.current&&(clearTimeout(O.current),O.current=null),O.current=setTimeout((function(){C.current=e,S(""!==e?D.current(e):x.current),O.current=null}),100)},M=f.useRef(null),E=f.useState(a.sort),P=Object(o.a)(E,2),R=P[0],L=P[1],A=f.useState(a.up),H=Object(o.a)(A,2),q=H[0],z=H[1],F=f.useMemo((function(){return w.filter((function(e){return"Hidden"!==e.status}))}),[w]),B=f.useMemo((function(){return F.filter(c)}),[F,c]),V=f.useMemo((function(){return null===R?B:B.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(o.a)(e,2),i=n[0],r=n[1],a=Object(o.a)(t,2),c=a[0],l=a[1],s="function"===typeof Be[R]?Be[R]:function(e){return e},u=s(i[R]),d=s(c[R]);if(typeof u===typeof d&&u!==d){if("string"===typeof u){for(var f=0;f<Math.min(u.length,d.length);f++){var j=u.charCodeAt(f),b=d.charCodeAt(f);if(j!==b)return j-b}return u.length-d.length}if("number"===typeof u)return u-d}return r-l})).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n}))}),[B,R]),Y=f.useMemo((function(){return!0===q?V:Object(d.a)(V).reverse()}),[V,q]),J=f.useState(a.view),K=Object(o.a)(J,2),G=K[0],Q=K[1],Z=f.useState(a.selDate),$=Object(o.a)(Z,2),_=$[0],ee=$[1],te=f.useMemo((function(){return function(e){return function(t){var n=t.data,r=t.children,a=Object(i.a)(t,["data","children"]),c=n.system,u="gray";if("Confirmed"===n.status)u="green";else if("Recommended"===n.status)u="rgb(77, 77, 77)";else{var o=Math.min(Math.min(new Date(n.startDate))||1/0,Math.min(new Date(n.endDate))||1/0)-new Date;"Civilian"!==c&&o<14688e5||o<864e6?u="red":("Civilian"!==c&&o<18144e5||o<12096e5)&&(u="rgb(204, 204, 0)")}return Object(s.jsx)(W.a.Appointment,Object(l.a)(Object(l.a)({},a),{},{data:n,onClick:function(t){Se(void 0,t.data.internalUID),e(1/0)},style:{backgroundColor:u},children:r}))}}(n)}),[n]);return f.useEffect((function(){null!==M.current&&M.current.addEventListener("keyup",(function(e){13!==e.charCode&&"Enter"!==e.key||e.stopPropagation()}),{capture:!0})}),[M]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(s.jsx)("div",{ref:M,children:Object(s.jsx)(N.a,{value:h,onChange:I,onCancelSearch:function(){return I("")},onRequestSearch:function(){"list"===G?(a.view="calendar",Q("calendar")):(a.view="list",Q("list"))},style:{margin:"auto",maxWidth:"1000px"},searchIcon:Object(s.jsx)(ye,{icon:G})})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:"list"===G?Object(s.jsx)(Me,{header:Object(s.jsx)(ge,{heightProvider:r,children:He.map((function(e,t){return Object(s.jsx)(m.a,{children:Object(s.jsx)(y.a,{active:R===e.name,direction:R===e.name&&!1===q?"desc":"asc",onClick:function(){return function(e){a.data="",p("");var t=e===R?!1===q&&(a.sort=null,L(null),!0):(a.sort=e,L(e),!0);a.up=t,z(t)}(e.name)},children:e.friendlyName})},t)}))}),data:Y,generator:function(e){return Ce(e,e.internalUID,n)},style:De}):Object(s.jsxs)(W.d,{data:B.map((function(e){var t=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)};return{startDate:t(e.startDateTime),endDate:t(e.endDateTime),title:e.name,internalUID:e.internalUID,status:e.status,system:e.system}})),children:[Object(s.jsx)(U.q,{defaultCurrentDate:_,onCurrentDateChange:function(e){a.selDate=e,ee(e)}}),Object(s.jsx)(W.c,{}),Object(s.jsx)(W.a,{appointmentComponent:te}),Object(s.jsx)(W.e,{}),Object(s.jsx)(W.b,{})]})})]})},xe="all ".concat(.075,"s linear"),ye=function(e){var t=e.icon,n=f.useRef(!0),i=f.useRef(t),r=f.useState(t),a=Object(o.a)(r,2),c=a[0],l=a[1],u=f.useRef(null),d=f.useRef(null),j=f.useRef(null);return f.useEffect((function(){j.current=function(e,t){var n=function(){0===e.current.getBoundingClientRect().width&&t()};return e.current.addEventListener("transitionend",n),e.current.addEventListener("transitioncancel",n),function(t){"expand"===t?(e.current.classList.remove("collapsed"),e.current.classList.add("expanded")):"collapse"===t&&(e.current.classList.remove("expanded"),e.current.classList.add("collapsed"),n())}}(u,(function(){if(null!==d.current){var e=d.current;d.current=null,i.current=e,l(e),j.current("expand")}}))}),[u]),f.useEffect((function(){if(!0!==n.current){if(i.current===t)return d.current=null,void j.current("expand");d.current=t,j.current("collapse")}else n.current=!1}),[t]),Object(s.jsx)(g.a,{ref:u,style:{transition:xe},children:"list"===c?Object(s.jsx)(q.a,{}):Object(s.jsx)(F.a,{})})},ge=function(e){var t=e.children,n=Object(o.a)(e.heightProvider,2),i=n[0],r=n[1],a=f.useRef(null);f.useEffect((function(){var e=r.current,t=i.current,n=a.current.getBoundingClientRect().top+window.scrollY,c=function(){var e=Math.max(window.scrollY+t-n,0);d(e)};c();var l=e.push((function(e){t=e,c()}))-1;return window.addEventListener("scroll",c),function(){e[l]=function(){},window.removeEventListener("scroll",c)}}),[i,r]);var c=f.useState(0),l=Object(o.a)(c,2),u=l[0],d=l[1];return Object(s.jsx)(D.a,{children:Object(s.jsx)(C.a,{ref:a,style:{transform:"translate(0,"+u+"px)"},children:t})})},De={font:"20px Arial, sans-serif"},Ce=function(e,t,n){var i="Civilian"===e.system?"Civilian":"Military",r=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},a="white";if("Confirmed"===e.status)a="rgb(230, 255, 230)";else if("Recommended"===e.status)a="rgb(238, 238, 238)";else{var c=Math.min(Math.min(new Date(r(e.startDateTime)))||1/0,Math.min(new Date(r(e.endDateTime)))||1/0)-new Date;"Civilian"!==i&&c<14688e5||c<864e6?a="rgb(255, 230, 230)":("Civilian"!==i&&c<18144e5||c<12096e5)&&(a="rgb(255, 255, 204)")}return Object(s.jsxs)(C.a,{style:{backgroundColor:a},onClick:function(){Se(e,t),n(1/0)},children:[Object(s.jsx)(m.a,{children:e.name}),Object(s.jsx)(m.a,{children:e.startDateTime}),Object(s.jsx)(m.a,{children:e.endDateTime}),Object(s.jsx)(m.a,{children:e.origin}),Object(s.jsx)(m.a,{children:e.destination}),Object(s.jsx)(m.a,{children:e.POC}),Object(s.jsx)(m.a,{children:e.POCPhone}),Object(s.jsx)(m.a,{children:i}),Object(s.jsx)(m.a,{children:e.vehicles}),Object(s.jsx)(m.a,{children:e.notes}),Object(s.jsx)(m.a,{children:e.addInfo}),Object(s.jsx)(m.a,{children:e.status})]},e.internalUID)},ke=function(e,t){return Object(s.jsxs)(C.a,{children:[Object(s.jsx)(m.a,{children:e.name}),Object(s.jsx)(m.a,{children:e.startDateTime}),Object(s.jsx)(m.a,{children:e.endDateTime}),Object(s.jsx)(m.a,{children:e.origin}),Object(s.jsx)(m.a,{children:e.destination}),Object(s.jsx)(m.a,{children:e.POC}),Object(s.jsx)(m.a,{children:e.POCPhone}),Object(s.jsx)(m.a,{children:"Civilian"===e.system?"Civilian":"Military"}),Object(s.jsx)(m.a,{children:e.vehicles}),Object(s.jsx)(m.a,{children:e.notes})]},e.internalUID)},Te=function(e,t,n,i){return Object(s.jsx)(C.a,{onClick:function(){Se(e,t),i(1/0)},children:Object(s.jsx)(m.a,{style:we(e.latest),align:"center",children:e.title})},n)},we=function(e){return!1===e?{color:"grey"}:{}},Se=function(e,t){$({type:"detail",params:[Z,t]}),Z++},Ie=function(e){$({type:"newindent",params:[Z,e]}),Z++},Me=function(e){var t=e.data,n=e.generator,i=(e.style,e.header),r=e.tail;return Object(s.jsx)(k.a,{children:Object(s.jsxs)(T.a,{stickyHeader:!0,children:[i,Object(s.jsx)(w.a,{children:t.map(n)}),r]})})},Ee=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,i=Object(u.a)(t);try{for(i.s();!(n=i.n()).done;){(0,n.value)(e())}}catch(r){i.e(r)}finally{i.f()}}]},Pe=[],Re=function(){return Ne},Ne=[],Le=["Pending","Submitted","Recommended","Confirmed","Hidden"],Ae=[{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],Ue=[{name:"addInfo",initialData:"",friendlyName:"Additional Info",optional:!0},{name:"status",initialData:"Pending",friendlyName:"Status"}],We=[].concat(Object(d.a)(Ae.slice(2,-2)),[Ae[1]],Object(d.a)(Ae.slice(-2))),He=[].concat(Object(d.a)(Ae.slice(2,-2)),[Ae[1]],Object(d.a)(Ae.slice(-2)),Ue),qe={},ze={},Fe={startDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)},endDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)}},Be={startDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()},endDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()}},Ve=Object(u.a)(He);try{for(Ve.s();!(K=Ve.n()).done;){var Ye=K.value;qe[Ye.name]=Ye.friendlyName}}catch(lt){Ve.e(lt)}finally{Ve.f()}for(var Je=0,Ke=[].concat(Ae,Ue);Je<Ke.length;Je++){var Xe=Ke[Je];ze[Xe.name]={persistent:Xe.persistent,optional:Xe.optional}}var Ge=function(e){var t=e.childWrapper,n=e.childContext,i=e.children,r=e.selTab,a=e.setSelTab,c=e.appbarRef,u=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(s.jsx)("img",{src:L,height:"48px",width:"48px"})})})],o=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)(I.a,{onClick:function(){Ie(),a(1/0)},size:"small",className:"MuiTab-textColorInherit",children:Object(s.jsx)(V.a,{style:{color:"white"}})})})],f=t;return Object(s.jsxs)("div",{children:[Object(s.jsx)(M.a,{position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:c,children:Object(s.jsx)(E.a,{variant:"scrollable",value:Math.min(r,i.length-1)+u.length,children:[].concat(u,Object(d.a)(i.map((function(e,t){var n=Object(l.a)(Object(l.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,i.length)},onClick:function(){a(t)},active:t===Math.min(r,i.length-1),key:e.props.mykey});return Object(s.jsx)(Qe,Object(l.a)({},n))}))),o)})}),Object(s.jsx)("div",{children:Object(s.jsx)(f,{childContext:n,mykey:i[Math.min(r,i.length-1)].props.mykey,children:i[Math.min(r,i.length-1)]})})]})},Qe=function(e){var t=e.label,n=e.onClick,i=e.active,r=e.removable,a=e.removeCallback;return Object(s.jsx)(S.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(s.jsxs)("span",{children:[Object(s.jsx)(S.a,{label:t,onClick:n,selected:!!i||null}),r?Object(s.jsx)(I.a,{size:"small",onClick:a,children:Object(s.jsx)(P.a,{style:{fill:"red"}})}):void 0]})})},Ze=Ee(fe),$e=Object(o.a)(Ze,3),_e=$e[0],et=$e[1],tt=$e[2],nt=Ee(Re),it=Object(o.a)(nt,3),rt=it[0],at=it[1],ct=it[2];j.render(Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(te,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.9d6a10b2.chunk.js.map