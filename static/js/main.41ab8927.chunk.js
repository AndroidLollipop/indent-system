(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{259:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},i=[];return function(a){a=a.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var i=0;i<e.length;i++){for(var a=Object.values(e[i]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),r={},c=0;c<a.length;c++)r[a[c]]||(n[a[c]]||(n[a[c]]=0),n[a[c]]++,r[a[c]]=0),r[a[c]]+=1/a.length;t.push(r)}var l=Object.keys(n);for(i=0;i<l.length;i++)n[l[i]]?n[l[i]]=Math.log(e.length/n[l[i]]):n[l[i]]=0}(e,i,n),t=1);for(var r=[],c=0;c<e.length;c++)r.push([0,0,c,e[c]]);for(c=0;c<a.length;c++)for(var l=a[c],s=0;s<e.length;s++)i[s][l]&&(r[s][0]-=i[s][l]*n[l],r[s][1]-=i[s][l]);return r=r.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},260:function(e,t,n){"use strict";n.r(t);var i=n(176),a=n(43),r=n.n(a),c=n(79),l=n(32),s=n(9),u=n(80),o=n(19),d=n(36),f=n(0),j=n(18),b=n(164),h=n.n(b),v=n(126),p=n(307),m=n(308),O=n(319),x=n(316),y=n(322),g=n(312),D=n(309),C=n(304),k=n(313),w=n(305),T=n(306),S=n(311),I=n(160),E=n(314),M=n(317),R=n(315),P=n(165),N=n.n(P),L=n.p+"static/media/logo.58ed9303.jpg",A=n.p+"static/media/5sirlogo.a6ac04db.jpg",U=n(23),W=n(67),H=n(107),q=n.n(H),z=n(174),F=n.n(z),B=n(175),V=n.n(B);console.log("0.1.20a");var Y,J,K,X=n(259),G="https://murmuring-ocean-38436.herokuapp.com/",Q=[],Z=1,$=function(e){(Q=Object(d.a)(Q)).push(e),Y(Q)},_=function(e){Q=Object(d.a)(Q).filter((function(t){return t.params[0]!==e})),ie[e]=void 0,Y(Q)},ee=function(e){var t=e.childContext,n=e.mykey,i=e.children,a=f.useRef(n);return a.current!==n&&null!==a.current&&(t.current[a.current]=window.scrollY,a.current=null),f.useLayoutEffect((function(){a.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,a]),i},te=function(){var e,t=f.useState([]),n=Object(o.a)(t,2),i=n[0],a=n[1];Y=a,f.useEffect((function(){return(J=h()(G,{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<le)return;le=t,void 0!==ue[t]&&ue[t]()}Pe=Object(d.a)(e).reverse(),nt()})),J.on("sendNotifications",(function(e){Le=Object(d.a)(e).reverse(),lt()})),J.emit("requestIndents",""),J.emit("requestNotifications",""),function(){J.disconnect()}}),[]);var r=f.useState(0),c=Object(o.a)(r,2),l=c[0],j=c[1],b=f.useRef(null),v=f.useRef([]),p=f.useRef(0);f.useEffect((function(){if(b.current){p.current=b.current.offsetHeight;var e,t=Object(u.a)(v.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(b.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[b,null===b||void 0===b||null===(e=b.current)||void 0===e?void 0:e.offsetHeight]);f.useRef({});var m=f.useRef({});return Object(s.jsxs)("div",{children:[Object(s.jsx)(Qe,{childWrapper:ee,childContext:m,selTab:l,setSelTab:j,appbarRef:b,children:[Object(s.jsx)("div",{label:"view indents",mykey:"defaultTab1",children:Object(s.jsx)(xe,{setSelTab:j,heightProvider:[p,v]})},"defaultTab1"),Object(s.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(s.jsx)(me,{id:0})},"defaultTab2"),Object(s.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(s.jsx)(ne,{setSelTab:j})},"defaultTab3")].concat(Object(d.a)(i.map((function(e,t){var n=e.type,i=e.params;return"detail"===n?Object(s.jsx)(ae,{setSelTab:j,mykey:i[0],label:ce(i[1]).name,removable:"true",removeCallback:function(e,t){_(i[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},details:i,heightProvider:[p,v]},i[0]):"newindent"===n?Object(s.jsx)(me,{cloneID:i[1],mykey:i[0],label:"new indent",removable:"true",removeCallback:function(e,t){_(i[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},id:i[0]},i[0]):Object(s.jsx)("div",{})}))))}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("img",{src:A,width:"192px"})]})},ne=function(e){var t=e.setSelTab,n=Ne(),i=f.useState(n),a=Object(o.a)(i,2),r=(a[0],a[1]);f.useEffect((function(){var e=rt(r);return function(){return ct(e)}}),[]);for(var c=[],u={},d=0;d<n.length;d++)!0===u[n[d].internalUID]?c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!1})):c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!0})),u[n[d].internalUID]=!0;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Me,{data:c,generator:function(e,n){return Te(e,e.internalUID,""+e.internalUID+n,t)},style:Ce})})]})},ie={},ae=function(e){var t=e.setSelTab,n=e.details,i=e.heightProvider,a=Object(o.a)(n,2),r=a[0],c=a[1];void 0===ie[r]&&(ie[r]=ce(c));var u=f.useState(ie[r]),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Me,{header:Object(s.jsx)(De,{heightProvider:i,children:He.map((function(e,t){return Object(s.jsx)(p.a,{children:e.friendlyName},t)}))}),data:[j],generator:function(e){return we(e,e.internalUID)},style:Ce})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(m.a,{variant:"outlined",onClick:function(){Ee(j.internalUID),t(1/0)},children:"Copy"}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:"Additional Info",variant:"outlined",value:j.addInfo,onChange:function(e){ie[r]=Object(l.a)(Object(l.a)({},ie[r]),{},{addInfo:e.target.value}),b(ie[r])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(x.a,{variant:"outlined",native:!0,value:j.status,onChange:function(e){ie[r]=Object(l.a)(Object(l.a)({},ie[r]),{},{status:e.target.value}),b(ie[r])},children:Ae.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))})}),Object(s.jsx)("div",{style:{display:"inline-block",width:"1px"}}),Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(m.a,{variant:"outlined",onClick:function(){re(c,ie[r])},children:"Save"})})]})]})},re=function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t,n);case 2:e.sent&&nt();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){var t=Pe.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},le=0,se=0,ue=[],oe=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se++,a=new Promise((function(e){return i=e})),ue[se]=i,J.emit("writeDataStore",[t,n,se]),e.next=6,a;case 6:if(se!==le){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se++,i=new Promise((function(e){return n=e})),ue[se]=n,J.emit("appendDataStore",[t,se]),e.next=6,i;case 6:if(se!==le){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){return Pe},je=function(e,t){var n=e.system,i=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},a=Math.min(new Date(i(e.startDateTime)));if(a!==a)return["FAILED","Enter a valid start date"];var r=Math.min(new Date(i(e.endDateTime)));if(r!==r)return["FAILED","Enter a valid end date"];if(r<=a)return["FAILED","End date must be after start date"];var c=Math.min(a||1/0,r||1/0)-new Date;if(("Civilian"!==n&&c<14688e5||c<864e6)&&!0!==t)return["AUTHENTICATE","This indent is too late. Please discuss this indent manually with the transport clerk."];for(var l in e)if(!0!==Fe[l].optional&&("string"!==typeof e[l]||""===e[l].trim()))return void 0!==ze[l]?["FAILED",ze[l]+" cannot be empty"]:["FAILED","Field cannot be empty"];return["SUCCESS"]},be=function(){var e=Object(c.a)(r.a.mark((function e(t,n,i){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof n){e.next=4;break}if("SUCCESS"===(a=n(t,i))[0]){e.next=4;break}return e.abrupt("return",a);case 4:return e.next=6,de(t);case 6:if(!e.sent){e.next=10;break}return nt(),e.abrupt("return",["SUCCESS"]);case 10:return e.abrupt("return",["UNKNOWN"]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),he=function(e){var t=e.prefill,n=e.fields,i=e.defaults,a=e.formPersistentStore,l=e.validator,j=[],b=void 0===a?{}:a;void 0===b.data&&(b.data=n.map((function(e){if("object"===typeof t){var n=t[e.name];if(void 0!==n){var i=Be[e.name];return"function"===typeof i?i(n):n}}return e.initialData})));for(var h=f.useState(b.data),v=Object(o.a)(h,2),p=v[0],x=v[1],y=p,g=function(){var e=D,t=n[e];j.push([p[e],function(t){(y=Object(d.a)(y))[e]=t,b.data=y,x(y)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options])},D=0;D<n.length;D++)g();var C=function(){var e=n.map((function(e){return e.initialData}));b.data=e,x(e)},k=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,s,d,f,b,h,v,p,m,O,x,y,g,D,w,T;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},a=Object(u.a)(i);try{for(a.s();!(c=a.n()).done;)s=c.value,d=s.name,f=s.initialData,n[d]=f}catch(r){a.e(r)}finally{a.f()}b=Object(u.a)(j);try{for(b.s();!(h=b.n()).done;)v=Object(o.a)(h.value,6),p=v[0],v[1],v[2],m=v[3],v[4],O=v[5],x=ve[O],n[m]=x?x(p):p}catch(r){b.e(r)}finally{b.f()}return e.next=7,be(n,l,t);case 7:if(y=e.sent,g=Object(o.a)(y,2),D=g[0],w=g[1],"SUCCESS"!==D){e.next=16;break}alert("Indent submitted successfully!"),C(),e.next=27;break;case 16:if("FAILED"!==D){e.next=20;break}alert(w),e.next=27;break;case 20:if("AUTHENTICATE"!==D){e.next=27;break}if(null!==(T=prompt(w))&&""!==T){e.next=26;break}return e.abrupt("return");case 26:"5sir!"===T?k(!0):alert("Incorrect bypass code.");case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{noValidate:!0,children:[Object(s.jsx)("div",{children:j.map((function(e,t){var n,i=Object(o.a)(e,7),a=i[0],r=i[1],c=(i[2],i[3],i[4]),l=i[5],u=i[6];return Object(s.jsx)("div",{style:pe,children:"datetime"===l?Object(s.jsx)(O.a,{id:"datetime-local",fullWidth:!0,label:c,type:"datetime-local",variant:"outlined",value:a,onChange:function(e){return r(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===l?Object(s.jsx)(O.a,{fullWidth:!0,select:!0,label:c,variant:"outlined",value:a,SelectProps:{native:!0},onChange:function(e){return r(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:u.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))}):"multi"===l?Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:null!==(n=a[0])&&void 0!==n?n:"",onChange:function(e){return r([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:a,onChange:function(e){return r(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},t)}))}),Object(s.jsx)(m.a,{variant:"outlined",onClick:k,children:"submit"})]})},ve={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},pe={display:"flex",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},me=function(e){var t=e.id,n=e.cloneID;void 0===ie[t]&&(ie[t]={});var i=f.useMemo((function(){return void 0!==n?ce(n):void 0}),[n,We]);return Object(s.jsxs)("div",{style:Ce,children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(he,{prefill:i,fields:Ue,defaults:We,formPersistentStore:ie[t],validator:je})]})},Oe={},xe=function(e){var t,n=e.setSelTab,a=e.heightProvider;!0!==Oe.initialized&&(Oe.initialized=!0,Oe.data="",Oe.sort=null,Oe.up=!0,Oe.view="list",Oe.selDate=(t=new Date,t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t).toISOString().slice(0,10));var r=fe();f.useEffect((function(){var e=et((function(e){m.current=e,x.current=X.makeRanker(e),w(""!==g.current?x.current(g.current):e)}));return function(){return tt(e)}}),[]);var c=f.useState(Oe.data),u=Object(o.a)(c,2),j=u[0],b=u[1],h=f.useRef(null),m=f.useRef(r),O=X.makeRanker(r),x=f.useRef(O),g=f.useRef(Oe.data),D=f.useState(""!==Oe.data?O(Oe.data):r),C=Object(o.a)(D,2),k=C[0],w=C[1],T=function(e){Oe.data=e,b(e),Oe.view="list",J("list"),Oe.sort=null,R(null),Oe.up=!0,H(!0),null!==h.current&&(clearTimeout(h.current),h.current=null),h.current=setTimeout((function(){g.current=e,w(""!==e?x.current(e):m.current),h.current=null}),100)},S=f.useRef(null),I=f.useState(Oe.sort),E=Object(o.a)(I,2),M=E[0],R=E[1],P=f.useState(Oe.up),L=Object(o.a)(P,2),A=L[0],H=L[1],q=f.useMemo((function(){return k.filter((function(e){return"Hidden"!==e.status}))}),[k]),z=f.useMemo((function(){return null===M?q:q.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(o.a)(e,2),i=n[0],a=n[1],r=Object(o.a)(t,2),c=r[0],l=r[1],s="function"===typeof Ve[M]?Ve[M]:function(e){return e},u=s(i[M]),d=s(c[M]);if(typeof u===typeof d&&u!==d){if("string"===typeof u){for(var f=0;f<Math.min(u.length,d.length);f++){var j=u.charCodeAt(f),b=d.charCodeAt(f);if(j!==b)return j-b}return u.length-d.length}if("number"===typeof u)return u-d}return a-l})).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n}))}),[q,M]),F=f.useMemo((function(){return!0===A?z:Object(d.a)(z).reverse()}),[z,A]),B=f.useState(Oe.view),V=Object(o.a)(B,2),Y=V[0],J=V[1],K=f.useState(Oe.selDate),G=Object(o.a)(K,2),Q=G[0],Z=G[1],$=f.useMemo((function(){return function(e){return function(t){var n=t.data,a=t.children,r=Object(i.a)(t,["data","children"]),c=n.system,u="gray";if("Confirmed"===n.status)u="green";else if("Recommended"===n.status)u="rgb(77, 77, 77)";else{var o=Math.min(Math.min(new Date(n.startDate))||1/0,Math.min(new Date(n.endDate))||1/0)-new Date;"Civilian"!==c&&o<14688e5||o<864e6?u="red":("Civilian"!==c&&o<18144e5||o<12096e5)&&(u="rgb(204, 204, 0)")}return Object(s.jsx)(W.a.Appointment,Object(l.a)(Object(l.a)({},r),{},{data:n,onClick:function(t){Ie(void 0,t.data.internalUID),e(1/0)},style:{backgroundColor:u},children:a}))}}(n)}),[n]);return f.useEffect((function(){null!==S.current&&S.current.addEventListener("keyup",(function(e){13!==e.charCode&&"Enter"!==e.key||e.stopPropagation()}),{capture:!0})}),[S]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(s.jsx)("div",{ref:S,children:Object(s.jsx)(N.a,{value:j,onChange:T,onCancelSearch:function(){return T("")},onRequestSearch:function(){"list"===Y?(Oe.view="calendar",J("calendar")):(Oe.view="list",J("list"))},style:{margin:"auto",maxWidth:"1000px"},searchIcon:Object(s.jsx)(ge,{icon:Y})})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:"list"===Y?Object(s.jsx)(Me,{header:Object(s.jsx)(De,{heightProvider:a,children:qe.map((function(e,t){return Object(s.jsx)(p.a,{children:Object(s.jsx)(y.a,{active:M===e.name,direction:M===e.name&&!1===A?"desc":"asc",onClick:function(){return function(e){Oe.data="",b("");var t=e===M?!1===A&&(Oe.sort=null,R(null),!0):(Oe.sort=e,R(e),!0);Oe.up=t,H(t)}(e.name)},children:e.friendlyName})},t)}))}),data:F,generator:function(e){return ke(e,e.internalUID,n)},style:Ce}):Object(s.jsxs)(W.d,{data:q.map((function(e){var t=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)};return{startDate:t(e.startDateTime),endDate:t(e.endDateTime),title:e.name,internalUID:e.internalUID,status:e.status,system:e.system}})),children:[Object(s.jsx)(U.q,{defaultCurrentDate:Q,onCurrentDateChange:function(e){Oe.selDate=e,Z(e)}}),Object(s.jsx)(W.c,{}),Object(s.jsx)(W.a,{appointmentComponent:$}),Object(s.jsx)(W.e,{}),Object(s.jsx)(W.b,{})]})})]})},ye="all ".concat(.075,"s linear"),ge=function(e){var t=e.icon,n=f.useRef(!0),i=f.useRef(t),a=f.useState(t),r=Object(o.a)(a,2),c=r[0],l=r[1],u=f.useRef(null),d=f.useRef(null),j=f.useRef(null);return f.useEffect((function(){j.current=function(e,t){var n=function(){0===e.current.getBoundingClientRect().width&&t()};return e.current.addEventListener("transitionend",n),e.current.addEventListener("transitioncancel",n),function(t){"expand"===t?(e.current.classList.remove("collapsed"),e.current.classList.add("expanded")):"collapse"===t&&(e.current.classList.remove("expanded"),e.current.classList.add("collapsed"),n())}}(u,(function(){if(null!==d.current){var e=d.current;d.current=null,i.current=e,l(e),j.current("expand")}}))}),[u]),f.useEffect((function(){if(!0!==n.current){if(i.current===t)return d.current=null,void j.current("expand");d.current=t,j.current("collapse")}else n.current=!1}),[t]),Object(s.jsx)(g.a,{ref:u,style:{transition:ye},children:"list"===c?Object(s.jsx)(q.a,{}):Object(s.jsx)(F.a,{})})},De=function(e){var t=e.children,n=Object(o.a)(e.heightProvider,2),i=n[0],a=n[1],r=f.useRef(null);f.useEffect((function(){var e=a.current,t=i.current,n=r.current.getBoundingClientRect().top+window.scrollY,c=function(){var e=Math.max(window.scrollY+t-n,0);d(e)};c();var l=e.push((function(e){t=e,c()}))-1;return window.addEventListener("scroll",c),function(){e[l]=function(){},window.removeEventListener("scroll",c)}}),[i,a]);var c=f.useState(0),l=Object(o.a)(c,2),u=l[0],d=l[1];return Object(s.jsx)(D.a,{children:Object(s.jsx)(C.a,{ref:r,style:{transform:"translate(0,"+u+"px)"},children:t})})},Ce={font:"20px Arial, sans-serif"},ke=function(e,t,n){var i="Civilian"===e.system?"Civilian":"Military",a=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},r="white";if("Confirmed"===e.status)r="rgb(230, 255, 230)";else if("Recommended"===e.status)r="rgb(238, 238, 238)";else{var c=Math.min(Math.min(new Date(a(e.startDateTime)))||1/0,Math.min(new Date(a(e.endDateTime)))||1/0)-new Date;"Civilian"!==i&&c<14688e5||c<864e6?r="rgb(255, 230, 230)":("Civilian"!==i&&c<18144e5||c<12096e5)&&(r="rgb(255, 255, 204)")}return Object(s.jsxs)(C.a,{style:{backgroundColor:r},onClick:function(){Ie(e,t),n(1/0)},children:[Object(s.jsx)(p.a,{children:e.name}),Object(s.jsx)(p.a,{children:e.startDateTime}),Object(s.jsx)(p.a,{children:e.endDateTime}),Object(s.jsx)(p.a,{children:e.origin}),Object(s.jsx)(p.a,{children:e.destination}),Object(s.jsx)(p.a,{children:e.POC}),Object(s.jsx)(p.a,{children:e.POCPhone}),Object(s.jsx)(p.a,{children:i}),Object(s.jsx)(p.a,{children:e.vehicles}),Object(s.jsx)(p.a,{children:e.notes}),Object(s.jsx)(p.a,{children:e.addInfo}),Object(s.jsx)(p.a,{children:e.status})]},e.internalUID)},we=function(e,t){return Object(s.jsxs)(C.a,{children:[Object(s.jsx)(p.a,{children:e.name}),Object(s.jsx)(p.a,{children:e.startDateTime}),Object(s.jsx)(p.a,{children:e.endDateTime}),Object(s.jsx)(p.a,{children:e.origin}),Object(s.jsx)(p.a,{children:e.destination}),Object(s.jsx)(p.a,{children:e.POC}),Object(s.jsx)(p.a,{children:e.POCPhone}),Object(s.jsx)(p.a,{children:"Civilian"===e.system?"Civilian":"Military"}),Object(s.jsx)(p.a,{children:e.vehicles}),Object(s.jsx)(p.a,{children:e.notes})]},e.internalUID)},Te=function(e,t,n,i){return Object(s.jsx)(C.a,{onClick:function(){Ie(e,t),i(1/0)},children:Object(s.jsx)(p.a,{style:Se(e.latest),align:"center",children:e.title})},n)},Se=function(e){return!1===e?{color:"grey"}:{}},Ie=function(e,t){$({type:"detail",params:[Z,t]}),Z++},Ee=function(e){$({type:"newindent",params:[Z,e]}),Z++},Me=function(e){var t=e.data,n=e.generator,i=(e.style,e.header),a=e.tail;return Object(s.jsx)(k.a,{children:Object(s.jsxs)(w.a,{stickyHeader:!0,children:[i,Object(s.jsx)(T.a,{children:t.map(n)}),a]})})},Re=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,i=Object(u.a)(t);try{for(i.s();!(n=i.n()).done;){(0,n.value)(e())}}catch(a){i.e(a)}finally{i.f()}}]},Pe=[],Ne=function(){return Le},Le=[],Ae=["Pending","Submitted","Recommended","Confirmed","Hidden"],Ue=[{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],We=[{name:"addInfo",initialData:"",friendlyName:"Additional Info"},{name:"status",initialData:"Pending",friendlyName:"Status"}],He=[].concat(Object(d.a)(Ue.slice(2,-2)),[Ue[1]],Object(d.a)(Ue.slice(-2))),qe=[].concat(Object(d.a)(Ue.slice(2,-2)),[Ue[1]],Object(d.a)(Ue.slice(-2)),We),ze={},Fe={},Be={startDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)},endDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)}},Ve={startDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()},endDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()}},Ye=Object(u.a)(qe);try{for(Ye.s();!(K=Ye.n()).done;){var Je=K.value;ze[Je.name]=Je.friendlyName}}catch(st){Ye.e(st)}finally{Ye.f()}for(var Ke=0,Xe=[].concat(Ue,We);Ke<Xe.length;Ke++){var Ge=Xe[Ke];Fe[Ge.name]={persistent:Ge.persistent,optional:Ge.optional}}var Qe=function(e){var t=e.childWrapper,n=e.childContext,i=e.children,a=e.selTab,r=e.setSelTab,c=e.appbarRef,u=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(s.jsx)("img",{src:L,height:"48px",width:"48px"})})})],o=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)(I.a,{onClick:function(){Ee(),r(1/0)},size:"small",className:"MuiTab-textColorInherit",children:Object(s.jsx)(V.a,{style:{color:"white"}})})})],f=t;return Object(s.jsxs)("div",{children:[Object(s.jsx)(E.a,{position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:c,children:Object(s.jsx)(M.a,{variant:"scrollable",value:Math.min(a,i.length-1)+u.length,children:[].concat(u,Object(d.a)(i.map((function(e,t){var n=Object(l.a)(Object(l.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,i.length)},onClick:function(){r(t)},active:t===Math.min(a,i.length-1),key:e.props.mykey});return Object(s.jsx)(Ze,Object(l.a)({},n))}))),o)})}),Object(s.jsx)("div",{children:Object(s.jsx)(f,{childContext:n,mykey:i[Math.min(a,i.length-1)].props.mykey,children:i[Math.min(a,i.length-1)]})})]})},Ze=function(e){var t=e.label,n=e.onClick,i=e.active,a=e.removable,r=e.removeCallback;return Object(s.jsx)(S.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(s.jsxs)("span",{children:[Object(s.jsx)(S.a,{label:t,onClick:n,selected:!!i||null}),a?Object(s.jsx)(I.a,{size:"small",onClick:r,children:Object(s.jsx)(R.a,{style:{fill:"red"}})}):void 0]})})},$e=Re(fe),_e=Object(o.a)($e,3),et=_e[0],tt=_e[1],nt=_e[2],it=Re(Ne),at=Object(o.a)(it,3),rt=at[0],ct=at[1],lt=at[2];j.render(Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(te,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.41ab8927.chunk.js.map