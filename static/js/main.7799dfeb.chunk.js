(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{259:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},r=[];return function(i){i=i.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var r=0;r<e.length;r++){for(var i=Object.values(e[r]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),a={},c=0;c<i.length;c++)a[i[c]]||(n[i[c]]||(n[i[c]]=0),n[i[c]]++,a[i[c]]=0),a[i[c]]+=1/i.length;t.push(a)}var l=Object.keys(n);for(r=0;r<l.length;r++)n[l[r]]?n[l[r]]=Math.log(e.length/n[l[r]]):n[l[r]]=0}(e,r,n),t=1);for(var a=[],c=0;c<e.length;c++)a.push([0,0,c,e[c]]);for(c=0;c<i.length;c++)for(var l=i[c],s=0;s<e.length;s++)r[s][l]&&(a[s][0]-=r[s][l]*n[l],a[s][1]-=r[s][l]);return a=a.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},260:function(e,t,n){"use strict";n.r(t);var r=n(176),i=n(43),a=n.n(i),c=n(79),l=n(39),s=n(9),u=n(80),o=n(19),d=n(35),f=n(0),j=n(18),b=n(164),h=n.n(b),v=n(126),p=n(307),m=n(308),O=n(316),x=n(319),y=n(322),g=n(312),D=n(309),C=n(304),k=n(313),w=n(305),T=n(306),S=n(311),I=n(160),E=n(314),M=n(317),R=n(315),P=n(165),N=n.n(P),L=n.p+"static/media/logo.58ed9303.jpg",U=n.p+"static/media/5sirlogo.a6ac04db.jpg",A=n(23),W=n(67),H=n(107),q=n.n(H),z=n(174),F=n.n(z),B=n(175),V=n.n(B);console.log("0.1.20a");var Y,J,K,X=n(259),G="https://murmuring-ocean-38436.herokuapp.com/",Q=[],Z=1,$=function(e){(Q=Object(d.a)(Q)).push(e),Y(Q)},_=function(e){Q=Object(d.a)(Q).filter((function(t){return t.params[0]!==e})),re[e]=void 0,Y(Q)},ee=function(e){var t=e.childContext,n=e.mykey,r=e.children,i=f.useRef(n);return i.current!==n&&null!==i.current&&(t.current[i.current]=window.scrollY,i.current=null),f.useLayoutEffect((function(){i.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,i]),r},te=function(){var e,t=f.useState([]),n=Object(o.a)(t,2),r=n[0],i=n[1];Y=i,f.useEffect((function(){return(J=h()(G,{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<le)return;le=t,void 0!==ue[t]&&ue[t]()}Pe=Object(d.a)(e).reverse(),nt()})),J.on("sendNotifications",(function(e){Le=Object(d.a)(e).reverse(),lt()})),J.emit("requestIndents",""),J.emit("requestNotifications",""),function(){J.disconnect()}}),[]);var a=f.useState(0),c=Object(o.a)(a,2),l=c[0],j=c[1],b=f.useRef(null),v=f.useRef([]),p=f.useRef(0);f.useEffect((function(){if(b.current){p.current=b.current.offsetHeight;var e,t=Object(u.a)(v.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(b.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[b,null===b||void 0===b||null===(e=b.current)||void 0===e?void 0:e.offsetHeight]);f.useRef({});var m=f.useRef({});return Object(s.jsxs)("div",{children:[Object(s.jsx)(Qe,{childWrapper:ee,childContext:m,selTab:l,setSelTab:j,appbarRef:b,children:[Object(s.jsx)("div",{label:"view indents",mykey:"defaultTab1",children:Object(s.jsx)(xe,{setSelTab:j,heightProvider:[p,v]})},"defaultTab1"),Object(s.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(s.jsx)(me,{id:0})},"defaultTab2"),Object(s.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(s.jsx)(ne,{setSelTab:j})},"defaultTab3")].concat(Object(d.a)(r.map((function(e,t){var n=e.type,r=e.params;return"detail"===n?Object(s.jsx)(ie,{setSelTab:j,mykey:r[0],label:ce(r[1]).name,removable:"true",removeCallback:function(e,t){_(r[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},details:r,heightProvider:[p,v]},r[0]):"newindent"===n?Object(s.jsx)(me,{cloneID:r[1],mykey:r[0],label:"new indent",removable:"true",removeCallback:function(e,t){_(r[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},id:r[0]},r[0]):Object(s.jsx)("div",{})}))))}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("img",{src:U,width:"192px"})]})},ne=function(e){var t=e.setSelTab,n=Ne(),r=f.useState(n),i=Object(o.a)(r,2),a=(i[0],i[1]);f.useEffect((function(){var e=at(a);return function(){return ct(e)}}),[]);for(var c=[],u={},d=0;d<n.length;d++)!0===u[n[d].internalUID]?c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!1})):c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!0})),u[n[d].internalUID]=!0;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Me,{data:c,generator:function(e,n){return Te(e,e.internalUID,""+e.internalUID+n,t)},style:Ce})})]})},re={},ie=function(e){var t=e.setSelTab,n=e.details,r=e.heightProvider,i=Object(o.a)(n,2),a=i[0],c=i[1];void 0===re[a]&&(re[a]=ce(c));var u=f.useState(re[a]),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:Object(s.jsx)(Me,{header:Object(s.jsx)(De,{heightProvider:r,children:He.map((function(e,t){return Object(s.jsx)(p.a,{children:e.friendlyName},t)}))}),data:[j],generator:function(e){return we(e,e.internalUID)},style:Ce})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(m.a,{variant:"outlined",onClick:function(){Ee(j.internalUID),t(1/0)},children:"Copy"}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(O.a,{variant:"outlined",native:!0,value:j.status,onChange:function(e){re[a]=Object(l.a)(Object(l.a)({},re[a]),{},{status:e.target.value}),b(re[a])},children:Ue.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))})}),Object(s.jsx)("div",{style:{display:"inline-block",width:"1px"}}),Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(m.a,{variant:"outlined",onClick:function(){ae(c,re[a])},children:"Save"})})]})]})},ae=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(t,n);case 2:e.sent&&nt();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){var t=Pe.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},le=0,se=0,ue=[],oe=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se++,i=new Promise((function(e){return r=e})),ue[se]=r,J.emit("writeDataStore",[t,n,se]),e.next=6,i;case 6:if(se!==le){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return se++,r=new Promise((function(e){return n=e})),ue[se]=n,J.emit("appendDataStore",[t,se]),e.next=6,r;case 6:if(se!==le){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){return Pe},je=function(e,t){var n=e.system,r=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},i=Math.min(new Date(r(e.startDateTime)));if(i!==i)return["FAILED","Enter a valid start date"];var a=Math.min(new Date(r(e.endDateTime)));if(a!==a)return["FAILED","Enter a valid end date"];if(a<=i)return["FAILED","End date must be after start date"];var c=Math.min(i||1/0,a||1/0)-new Date;if(("Civilian"!==n&&c<14688e5||c<864e6)&&!0!==t)return["AUTHENTICATE","This indent is too late. Please discuss this indent manually with the transport clerk."];for(var l in e)if(!0!==Fe[l].optional&&("string"!==typeof e[l]||""===e[l].trim()))return void 0!==ze[l]?["FAILED",ze[l]+" cannot be empty"]:["FAILED","Field cannot be empty"];return["SUCCESS"]},be=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof n){e.next=4;break}if("SUCCESS"===(i=n(t,r))[0]){e.next=4;break}return e.abrupt("return",i);case 4:return e.next=6,de(t);case 6:if(!e.sent){e.next=10;break}return nt(),e.abrupt("return",["SUCCESS"]);case 10:return e.abrupt("return",["UNKNOWN"]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),he=function(e){var t=e.prefill,n=e.fields,r=e.defaults,i=e.formPersistentStore,l=e.validator,j=[],b=void 0===i?{}:i;void 0===b.data&&(b.data=n.map((function(e){if("object"===typeof t){var n=t[e.name];if(void 0!==n){var r=Be[e.name];return"function"===typeof r?r(n):n}}return e.initialData})));for(var h=f.useState(b.data),v=Object(o.a)(h,2),p=v[0],O=v[1],y=p,g=function(){var e=D,t=n[e];j.push([p[e],function(t){(y=Object(d.a)(y))[e]=t,b.data=y,O(y)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options])},D=0;D<n.length;D++)g();var C=function(){var e=n.map((function(e){return e.initialData}));b.data=e,O(e)},k=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,i,c,s,d,f,b,h,v,p,m,O,x,y,g,D,w,T;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},i=Object(u.a)(r);try{for(i.s();!(c=i.n()).done;)s=c.value,d=s.name,f=s.initialData,n[d]=f}catch(a){i.e(a)}finally{i.f()}b=Object(u.a)(j);try{for(b.s();!(h=b.n()).done;)v=Object(o.a)(h.value,6),p=v[0],v[1],v[2],m=v[3],v[4],O=v[5],x=ve[O],n[m]=x?x(p):p}catch(a){b.e(a)}finally{b.f()}return e.next=7,be(n,l,t);case 7:if(y=e.sent,g=Object(o.a)(y,2),D=g[0],w=g[1],"SUCCESS"!==D){e.next=16;break}alert("Indent submitted successfully!"),C(),e.next=27;break;case 16:if("FAILED"!==D){e.next=20;break}alert(w),e.next=27;break;case 20:if("AUTHENTICATE"!==D){e.next=27;break}if(null!==(T=prompt(w))&&""!==T){e.next=26;break}return e.abrupt("return");case 26:"5sir!"===T?k(!0):alert("Incorrect bypass code.");case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{noValidate:!0,children:[Object(s.jsx)("div",{children:j.map((function(e,t){var n,r=Object(o.a)(e,7),i=r[0],a=r[1],c=(r[2],r[3],r[4]),l=r[5],u=r[6];return Object(s.jsx)("div",{style:pe,children:"datetime"===l?Object(s.jsx)(x.a,{id:"datetime-local",fullWidth:!0,label:c,type:"datetime-local",variant:"outlined",value:i,onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===l?Object(s.jsx)(x.a,{fullWidth:!0,select:!0,label:c,variant:"outlined",value:i,SelectProps:{native:!0},onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:u.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))}):"multi"===l?Object(s.jsx)(x.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:null!==(n=i[0])&&void 0!==n?n:"",onChange:function(e){return a([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(s.jsx)(x.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:i,onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},t)}))}),Object(s.jsx)(m.a,{variant:"outlined",onClick:k,children:"submit"})]})},ve={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},pe={display:"flex",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},me=function(e){var t=e.id,n=e.cloneID;void 0===re[t]&&(re[t]={});var r=f.useMemo((function(){return void 0!==n?ce(n):void 0}),[n,We]);return Object(s.jsxs)("div",{style:Ce,children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(he,{prefill:r,fields:Ae,defaults:We,formPersistentStore:re[t],validator:je})]})},Oe={},xe=function(e){var t,n=e.setSelTab,i=e.heightProvider;!0!==Oe.initialized&&(Oe.initialized=!0,Oe.data="",Oe.sort=null,Oe.up=!0,Oe.view="list",Oe.selDate=(t=new Date,t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t).toISOString().slice(0,10));var a=fe();f.useEffect((function(){var e=et((function(e){m.current=e,x.current=X.makeRanker(e),w(""!==g.current?x.current(g.current):e)}));return function(){return tt(e)}}),[]);var c=f.useState(Oe.data),u=Object(o.a)(c,2),j=u[0],b=u[1],h=f.useRef(null),m=f.useRef(a),O=X.makeRanker(a),x=f.useRef(O),g=f.useRef(Oe.data),D=f.useState(""!==Oe.data?O(Oe.data):a),C=Object(o.a)(D,2),k=C[0],w=C[1],T=function(e){Oe.data=e,b(e),Oe.view="list",J("list"),Oe.sort=null,R(null),Oe.up=!0,H(!0),null!==h.current&&(clearTimeout(h.current),h.current=null),h.current=setTimeout((function(){g.current=e,w(""!==e?x.current(e):m.current),h.current=null}),100)},S=f.useRef(null),I=f.useState(Oe.sort),E=Object(o.a)(I,2),M=E[0],R=E[1],P=f.useState(Oe.up),L=Object(o.a)(P,2),U=L[0],H=L[1],q=f.useMemo((function(){return k.filter((function(e){return"Hidden"!==e.status}))}),[k]),z=f.useMemo((function(){return null===M?q:q.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(o.a)(e,2),r=n[0],i=n[1],a=Object(o.a)(t,2),c=a[0],l=a[1],s="function"===typeof Ve[M]?Ve[M]:function(e){return e},u=s(r[M]),d=s(c[M]);if(typeof u===typeof d&&u!==d){if("string"===typeof u){for(var f=0;f<Math.min(u.length,d.length);f++){var j=u.charCodeAt(f),b=d.charCodeAt(f);if(j!==b)return j-b}return u.length-d.length}if("number"===typeof u)return u-d}return i-l})).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n}))}),[q,M]),F=f.useMemo((function(){return!0===U?z:Object(d.a)(z).reverse()}),[z,U]),B=f.useState(Oe.view),V=Object(o.a)(B,2),Y=V[0],J=V[1],K=f.useState(Oe.selDate),G=Object(o.a)(K,2),Q=G[0],Z=G[1],$=f.useMemo((function(){return function(e){return function(t){var n=t.data,i=t.children,a=Object(r.a)(t,["data","children"]),c=n.system,u="gray";if("Confirmed"===n.status)u="green";else if("Recommended"===n.status)u="rgb(77, 77, 77)";else{var o=Math.min(Math.min(new Date(n.startDate))||1/0,Math.min(new Date(n.endDate))||1/0)-new Date;"Civilian"!==c&&o<14688e5||o<864e6?u="red":("Civilian"!==c&&o<18144e5||o<12096e5)&&(u="rgb(204, 204, 0)")}return Object(s.jsx)(W.a.Appointment,Object(l.a)(Object(l.a)({},a),{},{data:n,onClick:function(t){Ie(void 0,t.data.internalUID),e(1/0)},style:{backgroundColor:u},children:i}))}}(n)}),[n]);return f.useEffect((function(){null!==S.current&&S.current.addEventListener("keyup",(function(e){13!==e.charCode&&"Enter"!==e.key||e.stopPropagation()}),{capture:!0})}),[S]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(s.jsx)("div",{ref:S,children:Object(s.jsx)(N.a,{value:j,onChange:T,onCancelSearch:function(){return T("")},onRequestSearch:function(){"list"===Y?(Oe.view="calendar",J("calendar")):(Oe.view="list",J("list"))},style:{margin:"auto",maxWidth:"1000px"},searchIcon:Object(s.jsx)(ge,{icon:Y})})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(v.a,{square:!0,children:"list"===Y?Object(s.jsx)(Me,{header:Object(s.jsx)(De,{heightProvider:i,children:qe.map((function(e,t){return Object(s.jsx)(p.a,{children:Object(s.jsx)(y.a,{active:M===e.name,direction:M===e.name&&!1===U?"desc":"asc",onClick:function(){return function(e){Oe.data="",b("");var t=e===M?!1===U&&(Oe.sort=null,R(null),!0):(Oe.sort=e,R(e),!0);Oe.up=t,H(t)}(e.name)},children:e.friendlyName})},t)}))}),data:F,generator:function(e){return ke(e,e.internalUID,n)},style:Ce}):Object(s.jsxs)(W.d,{data:q.map((function(e){var t=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)};return{startDate:t(e.startDateTime),endDate:t(e.endDateTime),title:e.name,internalUID:e.internalUID,status:e.status,system:e.system}})),children:[Object(s.jsx)(A.q,{defaultCurrentDate:Q,onCurrentDateChange:function(e){Oe.selDate=e,Z(e)}}),Object(s.jsx)(W.c,{}),Object(s.jsx)(W.a,{appointmentComponent:$}),Object(s.jsx)(W.e,{}),Object(s.jsx)(W.b,{})]})})]})},ye="all ".concat(.075,"s linear"),ge=function(e){var t=e.icon,n=f.useRef(!0),r=f.useRef(t),i=f.useState(t),a=Object(o.a)(i,2),c=a[0],l=a[1],u=f.useRef(null),d=f.useRef(null),j=f.useRef(null);return f.useEffect((function(){j.current=function(e,t){var n=function(){0===e.current.getBoundingClientRect().width&&t()};return e.current.addEventListener("transitionend",n),e.current.addEventListener("transitioncancel",n),function(t){"expand"===t?(e.current.classList.remove("collapsed"),e.current.classList.add("expanded")):"collapse"===t&&(e.current.classList.remove("expanded"),e.current.classList.add("collapsed"),n())}}(u,(function(){if(null!==d.current){var e=d.current;d.current=null,r.current=e,l(e),j.current("expand")}}))}),[u]),f.useEffect((function(){if(!0!==n.current){if(r.current===t)return d.current=null,void j.current("expand");d.current=t,j.current("collapse")}else n.current=!1}),[t]),Object(s.jsx)(g.a,{ref:u,style:{transition:ye},children:"list"===c?Object(s.jsx)(q.a,{}):Object(s.jsx)(F.a,{})})},De=function(e){var t=e.children,n=Object(o.a)(e.heightProvider,2),r=n[0],i=n[1],a=f.useRef(null);f.useEffect((function(){var e=i.current,t=r.current,n=a.current.getBoundingClientRect().top+window.scrollY,c=function(){var e=Math.max(window.scrollY+t-n,0);d(e)};c();var l=e.push((function(e){t=e,c()}))-1;return window.addEventListener("scroll",c),function(){e[l]=function(){},window.removeEventListener("scroll",c)}}),[r,i]);var c=f.useState(0),l=Object(o.a)(c,2),u=l[0],d=l[1];return Object(s.jsx)(D.a,{children:Object(s.jsx)(C.a,{ref:a,style:{transform:"translate(0,"+u+"px)"},children:t})})},Ce={font:"20px Arial, sans-serif"},ke=function(e,t,n){var r="Civilian"===e.system?"Civilian":"Military",i=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},a="white";if("Confirmed"===e.status)a="rgb(230, 255, 230)";else if("Recommended"===e.status)a="rgb(238, 238, 238)";else{var c=Math.min(Math.min(new Date(i(e.startDateTime)))||1/0,Math.min(new Date(i(e.endDateTime)))||1/0)-new Date;"Civilian"!==r&&c<14688e5||c<864e6?a="rgb(255, 230, 230)":("Civilian"!==r&&c<18144e5||c<12096e5)&&(a="rgb(255, 255, 204)")}return Object(s.jsxs)(C.a,{style:{backgroundColor:a},onClick:function(){Ie(e,t),n(1/0)},children:[Object(s.jsx)(p.a,{children:e.name}),Object(s.jsx)(p.a,{children:e.startDateTime}),Object(s.jsx)(p.a,{children:e.endDateTime}),Object(s.jsx)(p.a,{children:e.origin}),Object(s.jsx)(p.a,{children:e.destination}),Object(s.jsx)(p.a,{children:e.POC}),Object(s.jsx)(p.a,{children:e.POCPhone}),Object(s.jsx)(p.a,{children:r}),Object(s.jsx)(p.a,{children:e.vehicles}),Object(s.jsx)(p.a,{children:e.notes}),Object(s.jsx)(p.a,{children:e.status})]},e.internalUID)},we=function(e,t){return Object(s.jsxs)(C.a,{children:[Object(s.jsx)(p.a,{children:e.name}),Object(s.jsx)(p.a,{children:e.startDateTime}),Object(s.jsx)(p.a,{children:e.endDateTime}),Object(s.jsx)(p.a,{children:e.origin}),Object(s.jsx)(p.a,{children:e.destination}),Object(s.jsx)(p.a,{children:e.POC}),Object(s.jsx)(p.a,{children:e.POCPhone}),Object(s.jsx)(p.a,{children:"Civilian"===e.system?"Civilian":"Military"}),Object(s.jsx)(p.a,{children:e.vehicles}),Object(s.jsx)(p.a,{children:e.notes})]},e.internalUID)},Te=function(e,t,n,r){return Object(s.jsx)(C.a,{onClick:function(){Ie(e,t),r(1/0)},children:Object(s.jsx)(p.a,{style:Se(e.latest),align:"center",children:e.title})},n)},Se=function(e){return!1===e?{color:"grey"}:{}},Ie=function(e,t){$({type:"detail",params:[Z,t]}),Z++},Ee=function(e){$({type:"newindent",params:[Z,e]}),Z++},Me=function(e){var t=e.data,n=e.generator,r=(e.style,e.header),i=e.tail;return Object(s.jsx)(k.a,{children:Object(s.jsxs)(w.a,{stickyHeader:!0,children:[r,Object(s.jsx)(T.a,{children:t.map(n)}),i]})})},Re=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,r=Object(u.a)(t);try{for(r.s();!(n=r.n()).done;){(0,n.value)(e())}}catch(i){r.e(i)}finally{r.f()}}]},Pe=[],Ne=function(){return Le},Le=[],Ue=["Pending","Submitted","Recommended","Confirmed","Hidden"],Ae=[{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],We=[{name:"status",initialData:"Pending",friendlyName:"Status"}],He=[].concat(Object(d.a)(Ae.slice(2,-2)),[Ae[1]],Object(d.a)(Ae.slice(-2))),qe=[].concat(Object(d.a)(Ae.slice(2,-2)),[Ae[1]],Object(d.a)(Ae.slice(-2)),We),ze={},Fe={},Be={startDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)},endDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)}},Ve={startDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()},endDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()}},Ye=Object(u.a)(qe);try{for(Ye.s();!(K=Ye.n()).done;){var Je=K.value;ze[Je.name]=Je.friendlyName}}catch(st){Ye.e(st)}finally{Ye.f()}for(var Ke=0,Xe=[].concat(Ae,We);Ke<Xe.length;Ke++){var Ge=Xe[Ke];Fe[Ge.name]={persistent:Ge.persistent,optional:Ge.optional}}var Qe=function(e){var t=e.childWrapper,n=e.childContext,r=e.children,i=e.selTab,a=e.setSelTab,c=e.appbarRef,u=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(s.jsx)("img",{src:L,height:"48px",width:"48px"})})})],o=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)(I.a,{onClick:function(){Ee(),a(1/0)},size:"small",className:"MuiTab-textColorInherit",children:Object(s.jsx)(V.a,{style:{color:"white"}})})})],f=t;return Object(s.jsxs)("div",{children:[Object(s.jsx)(E.a,{position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:c,children:Object(s.jsx)(M.a,{variant:"scrollable",value:Math.min(i,r.length-1)+u.length,children:[].concat(u,Object(d.a)(r.map((function(e,t){var n=Object(l.a)(Object(l.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,r.length)},onClick:function(){a(t)},active:t===Math.min(i,r.length-1),key:e.props.mykey});return Object(s.jsx)(Ze,Object(l.a)({},n))}))),o)})}),Object(s.jsx)("div",{children:Object(s.jsx)(f,{childContext:n,mykey:r[Math.min(i,r.length-1)].props.mykey,children:r[Math.min(i,r.length-1)]})})]})},Ze=function(e){var t=e.label,n=e.onClick,r=e.active,i=e.removable,a=e.removeCallback;return Object(s.jsx)(S.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(s.jsxs)("span",{children:[Object(s.jsx)(S.a,{label:t,onClick:n,selected:!!r||null}),i?Object(s.jsx)(I.a,{size:"small",onClick:a,children:Object(s.jsx)(R.a,{style:{fill:"red"}})}):void 0]})})},$e=Re(fe),_e=Object(o.a)($e,3),et=_e[0],tt=_e[1],nt=_e[2],rt=Re(Ne),it=Object(o.a)(rt,3),at=it[0],ct=it[1],lt=it[2];j.render(Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(te,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.7799dfeb.chunk.js.map