(this["webpackJsonpindent-system"]=this["webpackJsonpindent-system"]||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a,i,r=n(56),c=n(25),s=n.n(c),l=n(49),u=n(18),j=n(3),o=n(15),d=n(31),b=n(0),f=n(9),h=n(81),O=n.n(h),x=n(134),m=n(168),p=n(169),v=n(170),y=n(181),g=n(173),D=n(183),k=n(174),C=n(175),T=n(176),w=n(177),S=n(178),N=n(182),P=n(179),I=n(180),U=n.p+"static/media/logo.58ed9303.jpg",q=n.p+"static/media/5sirlogo.a6ac04db.jpg",E="https://murmuring-ocean-38436.herokuapp.com/",M=[],R=0,W=function(){var e=b.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1];a=r,b.useEffect((function(){return(i=O()(E,{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<B)return;B=t,void 0!==F[t]&&F[t]()}ue=Object(d.a)(e).reverse(),ge()})),i.on("sendNotifications",(function(e){oe=Object(d.a)(e).reverse(),we()})),i.emit("requestIndents",""),i.emit("requestNotifications",""),function(){i.disconnect()}}),[]);var c=b.useState(0),s=Object(o.a)(c,2),l=s[0],u=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(Oe,{selTab:l,setSelTab:u,children:[Object(j.jsx)("div",{label:"view indents",mykey:"defaultTab1",children:Object(j.jsx)(ee,{setSelTab:u})},"defaultTab1"),Object(j.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(j.jsx)(_,{})},"defaultTab2"),Object(j.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(j.jsx)(A,{setSelTab:u})},"defaultTab3")].concat(Object(d.a)(n.map((function(e,t){return Object(j.jsx)(L,{mykey:e[0],label:z(e[1]).name,removable:"true",removeCallback:function(t,n){var i;i=e[0],M=Object(d.a)(M).filter((function(e){return e[0]!==i})),J[i]=void 0,a(M);var r=Math.min(l,n-1);r>t&&u(r-1)},details:e},e[0])}))))}),Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)("img",{src:q,width:"192px"})]})},A=function(e){var t=e.setSelTab,n=je(),a=b.useState(n),i=Object(o.a)(a,2),r=(i[0],i[1]);b.useEffect((function(){var e=Ce(r);return function(){return Te(e)}}),[]);for(var c=[],s={},l=0;l<n.length;l++)!0===s[n[l].internalUID]?c.push(Object(u.a)(Object(u.a)({},n[l]),{},{latest:!1})):c.push(Object(u.a)(Object(u.a)({},n[l]),{},{latest:!0})),s[n[l].internalUID]=!0;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(x.a,{square:!0,children:Object(j.jsx)(se,{data:c,generator:function(e,n){return ie(e,e.internalUID,""+e.internalUID+n,t)},style:te})})]})},J={},L=function(e){var t=e.details,n=Object(o.a)(t,2),a=n[0],i=n[1];void 0===J[a]&&(J[a]=z(i));var r=b.useState(J[a]),c=Object(o.a)(r,2),s=c[0],l=c[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(x.a,{square:!0,children:Object(j.jsx)(se,{header:Object(j.jsx)(m.a,{children:Object(j.jsx)(p.a,{children:be.map((function(e,t){return Object(j.jsx)(v.a,{children:e.friendlyName},t)}))})}),data:[s],generator:function(e){return ae(e,e.internalUID)},style:te})}),Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(y.a,{variant:"outlined",native:!0,value:s.status,onChange:function(e){J[a]=Object(u.a)(Object(u.a)({},J[a]),{},{status:e.target.value}),l(J[a])},children:de.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))}),Object(j.jsx)(g.a,{variant:"outlined",onClick:function(){V(i,J[a])},children:"Save"})]})},V=function(){var e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t,n);case 2:e.sent&&ge();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(e){var t=ue.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},B=0,H=0,F=[],G=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H++,r=new Promise((function(e){return a=e})),F[H]=a,i.emit("writeDataStore",[t,n,H]),e.next=6,r;case 6:if(H!==B){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H++,a=new Promise((function(e){return n=e})),F[H]=n,i.emit("appendDataStore",[t,H]),e.next=6,a;case 6:if(H!==B){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){return ue},X=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:e.sent&&ge();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){for(var t=e.fields,n=e.defaults,a=[],i=b.useState(t.map((function(e){return e.initialData}))),c=Object(o.a)(i,2),s=c[0],l=c[1],u=s,f=function(){var e=h,n=t[e];a.push([s[e],function(t){(u=Object(d.a)(u))[e]=t,l(u)},n.initialData,n.name,n.friendlyName,n.fieldType])},h=0;h<t.length;h++)f();return Object(j.jsxs)("form",{noValidate:!0,children:[Object(j.jsx)("div",{children:a.map((function(e,t){var n=Object(o.a)(e,6),a=n[0],i=n[1],r=(n[2],n[3],n[4]),c=n[5];return Object(j.jsx)("div",{style:$,children:"datetime"===c?Object(j.jsx)(D.a,{id:"datetime-local",fullWidth:!0,label:r,type:"datetime-local",variant:"outlined",onChange:function(e){return i(e.target.value)},InputLabelProps:{shrink:!0}}):Object(j.jsx)(D.a,{fullWidth:!0,multiline:!0,label:r,variant:"outlined",value:a,onChange:function(e){return i(e.target.value)},InputLabelProps:{shrink:!0}})},t)}))}),Object(j.jsx)(g.a,{variant:"outlined",onClick:function(){var e,i={},c=Object(r.a)(n);try{for(c.s();!(e=c.n()).done;){var s=e.value,u=s.name,j=s.initialData;i[u]=j}}catch(p){c.e(p)}finally{c.f()}var d,b=Object(r.a)(a);try{for(b.s();!(d=b.n()).done;){var f=Object(o.a)(d.value,6),h=f[0],O=(f[1],f[2],f[3]),x=(f[4],f[5]),m=Z[x];i[O]=m?m(h):h}}catch(p){b.e(p)}finally{b.f()}X(i),l(t.map((function(e){return e.initialData})))},children:"submit"})]})},Z={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},$={display:"flex",justifyContent:"center",padding:"5px"},_=function(){return Object(j.jsxs)("div",{style:te,children:[Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(Y,{fields:be,defaults:fe})]})},ee=function(e){var t=e.setSelTab,n=b.useState(Q()),a=Object(o.a)(n,2),i=a[0],r=a[1];return b.useEffect((function(){var e=ve(r);return function(){return ye(e)}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{height:"6px"}}),Object(j.jsx)(x.a,{square:!0,children:Object(j.jsx)(se,{header:Object(j.jsx)(m.a,{children:Object(j.jsx)(p.a,{children:he.map((function(e,t){return Object(j.jsx)(v.a,{children:e.friendlyName},t)}))})}),data:i,generator:function(e){return ne(e,e.internalUID,t)},style:te})})]})},te={font:"20px Arial, sans-serif"},ne=function(e,t,n){return Object(j.jsxs)(p.a,{onClick:function(){ce(e,t),n(1/0)},children:[Object(j.jsx)(v.a,{children:e.name}),Object(j.jsx)(v.a,{children:e.startDateTime}),Object(j.jsx)(v.a,{children:e.endDateTime}),Object(j.jsx)(v.a,{children:e.origin}),Object(j.jsx)(v.a,{children:e.destination}),Object(j.jsx)(v.a,{children:e.POC}),Object(j.jsx)(v.a,{children:e.POCPhone}),Object(j.jsx)(v.a,{children:e.vehicles}),Object(j.jsx)(v.a,{children:e.notes}),Object(j.jsx)(v.a,{children:e.status})]},e.internalUID)},ae=function(e,t){return Object(j.jsxs)(p.a,{children:[Object(j.jsx)(v.a,{children:e.name}),Object(j.jsx)(v.a,{children:e.startDateTime}),Object(j.jsx)(v.a,{children:e.endDateTime}),Object(j.jsx)(v.a,{children:e.origin}),Object(j.jsx)(v.a,{children:e.destination}),Object(j.jsx)(v.a,{children:e.POC}),Object(j.jsx)(v.a,{children:e.POCPhone}),Object(j.jsx)(v.a,{children:e.vehicles}),Object(j.jsx)(v.a,{children:e.notes})]},e.internalUID)},ie=function(e,t,n,a){return Object(j.jsx)(p.a,{onClick:function(){ce(e,t),a(1/0)},children:Object(j.jsx)(v.a,{style:re(e.latest),align:"center",children:e.title})},n)},re=function(e){return!1===e?{color:"grey"}:{}},ce=function(e,t){var n;n=[R,t],(M=Object(d.a)(M)).push(n),a(M),R++},se=function(e){var t=e.data,n=e.generator,a=(e.style,e.header),i=e.tail;return Object(j.jsx)(k.a,{children:Object(j.jsxs)(C.a,{children:[a,Object(j.jsx)(T.a,{children:t.map(n)}),i]})})},le=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,a=Object(r.a)(t);try{for(a.s();!(n=a.n()).done;){(0,n.value)(e())}}catch(i){a.e(i)}finally{a.f()}}]},ue=[],je=function(){return oe},oe=[],de=["Pending","Submitted","Recommended"],be=[{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes"}],fe=[{name:"status",initialData:"Pending",friendlyName:"Status"}],he=[].concat(be,fe),Oe=function(e){var t=e.children,n=e.selTab,a=e.setSelTab,i=[Object(j.jsx)(w.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(j.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(j.jsx)("img",{src:U,height:"48px",width:"48px"})})})];return Object(j.jsxs)("div",{children:[Object(j.jsx)(S.a,{position:"static",children:Object(j.jsx)(N.a,{variant:"scrollable",value:Math.min(n,t.length-1)+i.length,children:[].concat(i,Object(d.a)(t.map((function(e,i){var r=Object(u.a)(Object(u.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(i,t.length)},onClick:function(){a(i)},active:i===Math.min(n,t.length-1),key:e.props.mykey});return Object(j.jsx)(xe,Object(u.a)({},r))}))))})}),Object(j.jsx)("div",{children:t[Math.min(n,t.length-1)]})]})},xe=function(e){var t=e.label,n=e.onClick,a=e.active,i=e.removable,r=e.removeCallback;return Object(j.jsx)(w.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(j.jsxs)("span",{children:[Object(j.jsx)(w.a,{label:t,onClick:n,selected:!!a||null}),i?Object(j.jsx)(P.a,{size:"small",onClick:r,children:Object(j.jsx)(I.a,{style:{fill:"red"}})}):void 0]})})},me=le(Q),pe=Object(o.a)(me,3),ve=pe[0],ye=pe[1],ge=pe[2],De=le(je),ke=Object(o.a)(De,3),Ce=ke[0],Te=ke[1],we=ke[2];f.render(Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.aec0a3df.chunk.js.map