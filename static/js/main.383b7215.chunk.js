(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a,r,i=n(56),c=n(25),s=n.n(c),l=n(49),u=n(18),j=n(4),o=n(15),d=n(31),b=n(0),f=n(9),O=n(81),h=n.n(O),x=n(134),m=n(168),v=n(169),p=n(170),y=n(181),g=n(173),D=n(183),k=n(174),C=n(175),T=n(176),w=n(177),S=n(182),P=n(178),N=n(179),I=n(180),U=n.p+"static/media/logo.58ed9303.jpg",E=n.p+"static/media/5sirlogo.a6ac04db.jpg",M="https://murmuring-ocean-38436.herokuapp.com/",R=[],q=0,A=function(){var e=b.useState([]),t=Object(o.a)(e,2),n=t[0],i=t[1];a=i,b.useEffect((function(){return(r=h()(M,{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<G)return;G=t,void 0!==K[t]&&K[t]()}le=Object(d.a)(e),ye()})),r.on("sendNotifications",(function(e){je=Object(d.a)(e),Te()})),r.emit("requestIndents",""),r.emit("requestNotifications",""),function(){r.disconnect()}}),[]);var c=b.useState(0),s=Object(o.a)(c,2),l=s[0],u=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(Oe,{selTab:l,setSelTab:u,children:[Object(j.jsx)("div",{label:"view indents",mykey:"defaultTab1",children:Object(j.jsx)(_,{setSelTab:u})},"defaultTab1"),Object(j.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(j.jsx)($,{})},"defaultTab2"),Object(j.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(j.jsx)(J,{setSelTab:u})},"defaultTab3")].concat(Object(d.a)(n.map((function(e,t){return Object(j.jsx)(B,{mykey:e[0],label:F(e[1]).name,removable:"true",removeCallback:function(t,n){var r;r=e[0],R=Object(d.a)(R).filter((function(e){return e[0]!==r})),z[r]=void 0,a(R);var i=Math.min(l,n-1);i>t&&u(i-1)},details:e},e[0])}))))}),Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)("img",{src:E,width:"192px"})]})},J=function(e){var t=e.setSelTab,n=ue(),a=b.useState(n),r=Object(o.a)(a,2),i=(r[0],r[1]);b.useEffect((function(){var e=ke(i);return function(){return Ce(e)}}),[]);for(var c=[],s={},l=n.length-1;l>-1;l--)!0===s[n[l].internalUID]?c.push(Object(u.a)(Object(u.a)({},n[l]),{},{latest:!1})):c.push(Object(u.a)(Object(u.a)({},n[l]),{},{latest:!0})),s[n[l].internalUID]=!0;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(x.a,{children:Object(j.jsx)(ce,{data:c,generator:function(e,n){return ae(e,e.internalUID,""+e.internalUID+n,t)},style:ee})})]})},z={},B=function(e){var t=e.details,n=Object(o.a)(t,2),a=n[0],r=n[1];void 0===z[a]&&(z[a]=F(r));var i=b.useState(z[a]),c=Object(o.a)(i,2),s=c[0],l=c[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(x.a,{children:Object(j.jsx)(ce,{header:Object(j.jsx)(m.a,{children:Object(j.jsx)(v.a,{children:de.map((function(e,t){return Object(j.jsx)(p.a,{children:e.friendlyName},t)}))})}),data:[s],generator:function(e){return ne(e,e.internalUID)},style:ee})}),Object(j.jsx)(y.a,{variant:"outlined",native:!0,value:s.status,onChange:function(e){z[a]=Object(u.a)(Object(u.a)({},z[a]),{},{status:e.target.value}),l(z[a])},children:oe.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))}),Object(j.jsx)(g.a,{variant:"outlined",onClick:function(){V(r,z[a])},children:"Save"})]})},V=function(){var e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,n);case 2:e.sent&&ye();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(e){var t=le.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},G=0,H=0,K=[],L=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H++,i=new Promise((function(e){return a=e})),K[H]=a,r.emit("writeDataStore",[t,n,H]),e.next=6,i;case 6:if(H!==G){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H++,a=new Promise((function(e){return n=e})),K[H]=n,r.emit("appendDataStore",[t,H]),e.next=6,a;case 6:if(H!==G){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){return le},X=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:e.sent&&ye();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){for(var t=e.fields,n=e.defaults,a=[],r=b.useState(t.map((function(e){return e.initialData}))),c=Object(o.a)(r,2),s=c[0],l=c[1],u=s,f=function(){var e=O,n=t[e];a.push([s[e],function(t){(u=Object(d.a)(u))[e]=t,l(u)},n.initialData,n.name,n.friendlyName])},O=0;O<t.length;O++)f();return Object(j.jsxs)("form",{noValidate:!0,children:[Object(j.jsx)("div",{children:a.map((function(e,t){var n=Object(o.a)(e,5),a=n[0],r=n[1],i=(n[2],n[3],n[4]);return Object(j.jsx)("div",{style:Z,children:Object(j.jsx)(D.a,{multiline:!0,label:i,variant:"outlined",value:a,onChange:function(e){return r(e.target.value)}})},t)}))}),Object(j.jsx)(g.a,{variant:"outlined",onClick:function(){var e,r={},c=Object(i.a)(n);try{for(c.s();!(e=c.n()).done;){var s=e.value,u=s.name,j=s.initialData;r[u]=j}}catch(h){c.e(h)}finally{c.f()}var d,b=Object(i.a)(a);try{for(b.s();!(d=b.n()).done;){var f=Object(o.a)(d.value,4),O=f[0];f[1],f[2];r[f[3]]=O}}catch(h){b.e(h)}finally{b.f()}X(r),l(t.map((function(e){return e.initialData})))},children:"submit"})]})},Z={display:"flex",justifyContent:"center",padding:"5px"},$=function(){return Object(j.jsx)("div",{style:ee,children:Object(j.jsx)(Y,{fields:de,defaults:be})})},_=function(e){var t=e.setSelTab,n=b.useState(W()),a=Object(o.a)(n,2),r=a[0],i=a[1];return b.useEffect((function(){var e=ve(i);return function(){return pe(e)}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(x.a,{children:Object(j.jsx)(ce,{header:Object(j.jsx)(m.a,{children:Object(j.jsx)(v.a,{children:fe.map((function(e,t){return Object(j.jsx)(p.a,{children:e.friendlyName},t)}))})}),data:r,generator:function(e){return te(e,e.internalUID,t)},style:ee})})]})},ee={font:"20px Arial, sans-serif"},te=function(e,t,n){return Object(j.jsxs)(v.a,{onClick:function(){ie(e,t),n(1/0)},children:[Object(j.jsx)(p.a,{children:e.name}),Object(j.jsx)(p.a,{children:e.startDateTime}),Object(j.jsx)(p.a,{children:e.endDateTime}),Object(j.jsx)(p.a,{children:e.origin}),Object(j.jsx)(p.a,{children:e.destination}),Object(j.jsx)(p.a,{children:e.POC}),Object(j.jsx)(p.a,{children:e.POCPhone}),Object(j.jsx)(p.a,{children:e.status})]},e.internalUID)},ne=function(e,t){return Object(j.jsxs)(v.a,{children:[Object(j.jsx)(p.a,{children:e.name}),Object(j.jsx)(p.a,{children:e.startDateTime}),Object(j.jsx)(p.a,{children:e.endDateTime}),Object(j.jsx)(p.a,{children:e.origin}),Object(j.jsx)(p.a,{children:e.destination}),Object(j.jsx)(p.a,{children:e.POC}),Object(j.jsx)(p.a,{children:e.POCPhone})]},e.internalUID)},ae=function(e,t,n,a){return Object(j.jsx)(v.a,{onClick:function(){ie(e,t),a(1/0)},children:Object(j.jsx)(p.a,{style:re(e.latest),align:"center",children:e.title})},n)},re=function(e){return!1===e?{color:"grey"}:{}},ie=function(e,t){var n;n=[q,t],(R=Object(d.a)(R)).push(n),a(R),q++},ce=function(e){var t=e.data,n=e.generator,a=(e.style,e.header),r=e.tail;return Object(j.jsx)(k.a,{children:Object(j.jsxs)(C.a,{children:[a,Object(j.jsx)(T.a,{children:t.map(n)}),r]})})},se=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,a=Object(i.a)(t);try{for(a.s();!(n=a.n()).done;){(0,n.value)(e())}}catch(r){a.e(r)}finally{a.f()}}]},le=[],ue=function(){return je},je=[],oe=["Pending","Submitted","Recommended"],de=[{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time"},{name:"endDateTime",initialData:"",friendlyName:"End time"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"}],be=[{name:"status",initialData:"Pending",friendlyName:"Status"}],fe=[].concat(de,be),Oe=function(e){var t=e.children,n=e.selTab,a=e.setSelTab,r=[Object(j.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(j.jsx)("img",{src:U,height:"48px",width:"48px"})})];return Object(j.jsxs)("div",{children:[Object(j.jsx)(w.a,{position:"static",children:Object(j.jsx)(S.a,{variant:"scrollable",value:Math.min(n,t.length-1)+r.length,children:[].concat(r,Object(d.a)(t.map((function(e,r){var i=Object(u.a)(Object(u.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(r,t.length)},onClick:function(){a(r)},active:r===Math.min(n,t.length-1),key:e.props.mykey});return Object(j.jsx)(he,Object(u.a)({},i))}))))})}),Object(j.jsx)("div",{children:t[Math.min(n,t.length-1)]})]})},he=function(e){var t=e.label,n=e.onClick,a=e.active,r=e.removable,i=e.removeCallback;return Object(j.jsx)(P.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(j.jsxs)("span",{children:[Object(j.jsx)(P.a,{label:t,onClick:n,selected:!!a||null}),r?Object(j.jsx)(N.a,{size:"small",onClick:i,children:Object(j.jsx)(I.a,{style:{fill:"red"}})}):void 0]})})},xe=se(W),me=Object(o.a)(xe,3),ve=me[0],pe=me[1],ye=me[2],ge=se(ue),De=Object(o.a)(ge,3),ke=De[0],Ce=De[1],Te=De[2];f.render(Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.383b7215.chunk.js.map