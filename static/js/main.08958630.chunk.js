(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{92:function(e,t,n){"use strict";n.r(t);var a,r,i=n(58),c=n(26),u=n.n(c),s=n(50),l=n(19),o=n(4),j=n(16),d=n(37),f=n(0),b=n(9),O=n(83),h=n.n(O),v=n(88),m=n(51),x=n(12),p=n(146),y=n(90),D=n(148),g=n(139),k=n(140),C=n(141),I=n(142),P=n(147),T=n(143),w=n(144),S=n(145),N="https://murmuring-ocean-38436.herokuapp.com:4001",U=[],A=0,E=function(){var e=f.useState([]),t=Object(j.a)(e,2),n=t[0],i=t[1];return a=i,f.useEffect((function(){return(r=h()(N)).on("sendIndents",(function(e,t){if(void 0!==t){if(t<B)return;B=t,void 0!==H[t]&&H[t]()}ce=Object(d.a)(e),xe()})),r.on("sendNotifications",(function(e){se=Object(d.a)(e),ke()})),r.emit("requestIndents",""),r.emit("requestNotifications",""),function(){r.disconnect()}}),[]),Object(o.jsx)(fe,{children:[Object(o.jsx)("div",{label:"view indents",mykey:"defaultTab1",children:Object(o.jsx)(Z,{})},"defaultTab1"),Object(o.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(o.jsx)(Y,{})},"defaultTab2"),Object(o.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(o.jsx)(q,{})},"defaultTab3"),Object(o.jsx)("div",{label:"dev",mykey:"defaultTab4",children:Object(o.jsx)(M,{})},"defaultTab4")].concat(Object(d.a)(n.map((function(e){return Object(o.jsx)(J,{mykey:e[0],label:z(e[1]).name,removable:"true",removeCallback:function(){return t=e[0],U=Object(d.a)(U).filter((function(e){return e[0]!==t})),F[t]=void 0,void a(U);var t},details:e},e[0])}))))})},M=function(){var e=f.useState(N),t=Object(j.a)(e,2),n=t[0],a=t[1],i=f.useState(""),c=Object(j.a)(i,2),u=c[0],s=c[1],l=function(e){s(e)};return f.useEffect((function(){return r.on("FromAPI",l),r.emit("ToAPI","Hello!"),function(){r.emit("ToAPI","Goodbye!"),r.off("FromAPI",l)}}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"Server URL"}),Object(o.jsx)("textarea",{value:n,onChange:function(e){N=e.target.value,a(N)}}),Object(o.jsxs)("div",{children:["It's ",u]})]})},q=function(){var e=ue(),t=f.useState(e),n=Object(j.a)(t,2),a=(n[0],n[1]);f.useEffect((function(){var e=De(a);return function(){return ge(e)}}),[]);for(var r=[],i={},c=e.length-1;c>-1;c--)!0===i[e[c].internalUID]?r.unshift(Object(l.a)(Object(l.a)({},e[c]),{},{latest:!1})):r.unshift(Object(l.a)(Object(l.a)({},e[c]),{},{latest:!0})),i[e[c].internalUID]=!0;return Object(o.jsx)(re,{data:r,generator:function(e,t){return te(e,e.internalUID,""+e.internalUID+t)},style:$})},F={},J=function(e){var t=e.details,n=Object(j.a)(t,2),a=n[0],r=n[1];void 0===F[a]&&(F[a]=z(r));var i=f.useState(F[a]),c=Object(j.a)(i,2),u=c[0],s=c[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(re,{header:Object(o.jsx)(v.a,{children:Object(o.jsx)(m.a,{children:oe.map((function(e,t){return Object(o.jsx)(x.a,{children:e.friendlyName},t)}))})}),data:[u],generator:function(e){return ee(e,e.internalUID)},style:$}),Object(o.jsx)(p.a,{variant:"outlined",native:!0,value:u.status,onChange:function(e){F[a]=Object(l.a)(Object(l.a)({},F[a]),{},{status:e.target.value}),s(F[a])},children:le.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t)}))}),Object(o.jsx)(y.a,{variant:"outlined",onClick:function(){R(r,F[a])},children:"Save"})]})},R=function(){var e=Object(s.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,n);case 2:e.sent&&xe();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(e){var t=ce.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},B=0,G=0,H=[],L=function(){var e=Object(s.a)(u.a.mark((function e(t,n){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G++,i=new Promise((function(e){return a=e})),H[G]=a,r.emit("writeDataStore",[t,n,G]),e.next=6,i;case 6:if(G!==B){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G++,a=new Promise((function(e){return n=e})),H[G]=n,r.emit("appendDataStore",[t,G]),e.next=6,a;case 6:if(G!==B){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){return ce},Q=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:e.sent&&xe();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){for(var t=e.fields,n=e.defaults,a=[],r=f.useState(t.map((function(e){return e.initialData}))),c=Object(j.a)(r,2),u=c[0],s=c[1],l=u,b=function(){var e=O,n=t[e];a.push([u[e],function(t){(l=Object(d.a)(l))[e]=t,s(l)},n.initialData,n.name,n.friendlyName])},O=0;O<t.length;O++)b();return Object(o.jsxs)("form",{noValidate:!0,children:[Object(o.jsx)("div",{children:a.map((function(e,t){var n=Object(j.a)(e,5),a=n[0],r=n[1],i=(n[2],n[3],n[4]);return Object(o.jsx)("div",{style:X,children:Object(o.jsx)(D.a,{multiline:!0,label:i,variant:"outlined",value:a,onChange:function(e){return r(e.target.value)}})},t)}))}),Object(o.jsx)(y.a,{variant:"outlined",onClick:function(){var e,r={},c=Object(i.a)(n);try{for(c.s();!(e=c.n()).done;){var u=e.value,l=u.name,o=u.initialData;r[l]=o}}catch(h){c.e(h)}finally{c.f()}var d,f=Object(i.a)(a);try{for(f.s();!(d=f.n()).done;){var b=Object(j.a)(d.value,4),O=b[0];b[1],b[2];r[b[3]]=O}}catch(h){f.e(h)}finally{f.f()}Q(r),s(t.map((function(e){return e.initialData})))},children:"submit"})]})},X={display:"flex",justifyContent:"center",padding:"5px"},Y=function(){return Object(o.jsx)("div",{style:$,children:Object(o.jsx)(W,{fields:oe,defaults:je})})},Z=function(){var e=f.useState(K()),t=Object(j.a)(e,2),n=t[0],a=t[1];return f.useEffect((function(){var e=ve(a);return function(){return me(e)}}),[]),Object(o.jsx)(re,{header:Object(o.jsx)(v.a,{children:Object(o.jsx)(m.a,{children:de.map((function(e,t){return Object(o.jsx)(x.a,{children:e.friendlyName},t)}))})}),data:n,generator:function(e){return _(e,e.internalUID)},style:$})},$={font:"20px Arial, sans-serif"},_=function(e,t){return Object(o.jsxs)(m.a,{onClick:function(){return ae(e,t)},children:[Object(o.jsx)(x.a,{children:e.name}),Object(o.jsx)(x.a,{children:e.startDateTime}),Object(o.jsx)(x.a,{children:e.endDateTime}),Object(o.jsx)(x.a,{children:e.origin}),Object(o.jsx)(x.a,{children:e.destination}),Object(o.jsx)(x.a,{children:e.POC}),Object(o.jsx)(x.a,{children:e.POCPhone}),Object(o.jsx)(x.a,{children:e.status})]},e.internalUID)},ee=function(e,t){return Object(o.jsxs)(m.a,{children:[Object(o.jsx)(x.a,{children:e.name}),Object(o.jsx)(x.a,{children:e.startDateTime}),Object(o.jsx)(x.a,{children:e.endDateTime}),Object(o.jsx)(x.a,{children:e.origin}),Object(o.jsx)(x.a,{children:e.destination}),Object(o.jsx)(x.a,{children:e.POC}),Object(o.jsx)(x.a,{children:e.POCPhone})]},e.internalUID)},te=function(e,t,n){return Object(o.jsx)(m.a,{onClick:function(){return ae(e,t)},children:Object(o.jsx)(x.a,{style:ne(e.latest),align:"center",children:e.title})},n)},ne=function(e){return!1===e?{color:"grey"}:{}},ae=function(e,t){var n;n=[A,t],(U=Object(d.a)(U)).push(n),a(U),A++},re=function(e){var t=e.data,n=e.generator,a=(e.style,e.header),r=e.tail;return Object(o.jsx)(g.a,{children:Object(o.jsxs)(k.a,{children:[a,Object(o.jsx)(C.a,{children:t.map(n)}),r]})})},ie=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,a=Object(i.a)(t);try{for(a.s();!(n=a.n()).done;){(0,n.value)(e())}}catch(r){a.e(r)}finally{a.f()}}]},ce=[],ue=function(){return se},se=[],le=["Pending","Submitted","Recommended"],oe=[{name:"name",initialData:"",friendlyName:"Indent title"},{name:"startDateTime",initialData:"",friendlyName:"Start time"},{name:"endDateTime",initialData:"",friendlyName:"End time"},{name:"origin",initialData:"",friendlyName:"Origin"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"}],je=[{name:"status",initialData:"Pending",friendlyName:"Status"}],de=[].concat(oe,je),fe=function(e){var t=e.children,n=f.useState(0),a=Object(j.a)(n,2),r=a[0],i=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(I.a,{position:"static",children:Object(o.jsx)(P.a,{variant:"scrollable",value:Math.min(r,t.length-1),children:t.map((function(e,n){var a=Object(l.a)(Object(l.a)({},e.props),{},{onClick:function(){i(n)},active:n===Math.min(r,t.length-1),key:e.props.mykey});return Object(o.jsx)(be,Object(l.a)({},a))}))})}),Object(o.jsx)("div",{children:t[Math.min(r,t.length-1)]})]})},be=function(e){var t=e.label,n=e.onClick,a=(e.active,e.removable),r=e.removeCallback;return Object(o.jsx)("div",{children:Object(o.jsx)(T.a,{label:Object(o.jsxs)("span",{children:[" "+t+" "," ",a?Object(o.jsx)(w.a,{size:"small",onClick:r,children:Object(o.jsx)(S.a,{})}):void 0]}),onClick:n})})},Oe=ie(K),he=Object(j.a)(Oe,3),ve=he[0],me=he[1],xe=he[2],pe=ie(ue),ye=Object(j.a)(pe,3),De=ye[0],ge=ye[1],ke=ye[2];b.render(Object(o.jsx)("div",{style:{textAlign:"center"},children:Object(o.jsx)(E,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.08958630.chunk.js.map