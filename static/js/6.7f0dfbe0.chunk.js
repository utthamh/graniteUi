(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),r=n(87),c=n(96),i=(n(512),n(0),n(143));function o(e){var t=e.type,n=e.value,o=Object(c.a)(e,["type","value"]);switch(t){case"checkbox":return Object(a.jsx)(i.a,Object(r.a)({value:n},o));case"select":return Object(a.jsx)(i.e,Object(r.a)({value:n},o));case"radio":return Object(a.jsx)(i.d,Object(r.a)({value:n},o));case"password":return Object(a.jsx)(i.c,Object(r.a)({type:t},o));case"file":return Object(a.jsx)(i.b,Object(r.a)({type:t},o));default:return Object(a.jsx)(i.b,Object(r.a)({type:t,value:n},o))}}var s=o},143:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"e",(function(){return C})),n.d(t,"a",(function(){return N})),n.d(t,"d",(function(){return P}));var a=n(85),r=n(2),c=n(87),i=n(96),o=n(28),s=n(577),l=n(515),j=n(516),d=n(517),u=n(568),b=n(522),O=n(523),p=n(573),x=n(524),m=n(0),h=n(518),f=n(519),g=Object(o.a)((function(e){return{root:{position:"relative","label + &":{marginTop:e.spacing(1)},background:"#FFFFFF",border:"0.5px solid rgba(0, 0, 0, 0.33)",boxSizing:"border-box",fontSize:16,width:"100%",padding:"1px 10px",transition:e.transitions.create(["border-color","box-shadow"]),"&:focus-within":{border:"1px solid ".concat(e.palette.secondary.main)}}}}))(s.a),v=function(e){var t=e.label,n=e.error,a=Object(i.a)(e,["label","error"]);return Object(r.jsxs)(l.a,{fullWidth:!0,error:n,children:[Object(r.jsx)("label",{style:{fontWeight:500,fontSize:13,textTransform:"capitalize",color:"#aaa"},children:t}),Object(r.jsx)(g,Object(c.a)({color:"secondary"},a)),Object(r.jsx)(j.a,{children:n})]})},y=function(e){var t=e.label,n=e.error,o=Object(i.a)(e,["label","error"]),s=Object(m.useState)(!1),u=Object(a.a)(s,2),b=u[0],O=u[1];return Object(r.jsxs)(l.a,{fullWidth:!0,error:n,children:[Object(r.jsx)("label",{style:{fontWeight:500,fontSize:13,textTransform:"capitalize",color:"#aaa"},children:t}),Object(r.jsx)(g,Object(c.a)(Object(c.a)({color:"secondary"},o),{},{type:b?"text":"password",endAdornment:Object(r.jsx)(d.a,{onClick:function(){return O(!b)},position:"end",children:b?Object(r.jsx)(h.a,{}):Object(r.jsx)(f.a,{})})})),Object(r.jsx)(j.a,{children:n})]})},C=function(e){var t=e.label,n=e.options,a=Object(i.a)(e,["label","options"]);return Object(r.jsxs)(l.a,{fullWidth:!0,children:[Object(r.jsx)("label",{style:{fontWeight:600,fontSize:13,textTransform:"capitalize",color:"#aaa"},children:t}),Object(r.jsxs)(u.a,Object(c.a)(Object(c.a)({},a),{},{input:Object(r.jsx)(g,{color:"secondary"}),children:[Object(r.jsx)(b.a,{value:"",children:Object(r.jsx)("em",{children:"None"})}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(r.jsx)(b.a,Object(c.a)({},e),t)}))]}))]})},N=function(e){var t=e.error,n=e.label,a=e.handleChange,c=e.options;return Object(r.jsxs)(l.a,{color:"secondary",error:t,component:"fieldset",children:[Object(r.jsx)("label",{style:{fontWeight:600,fontSize:13,textTransform:"capitalize",color:"#aaa"},children:n}),Object(r.jsx)(O.a,{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(r.jsx)(FormControlLabel,{control:Object(r.jsx)(p.a,{checked:e.value,onChange:a,name:e.value}),label:e.label},t)}))}),Object(r.jsx)(j.a,{children:t})]})},P=function(e){var t=e.error,n=e.label,a=e.options,o=Object(i.a)(e,["error","label","options"]);return Object(r.jsxs)(l.a,{color:"secondary",error:t,component:"fieldset",children:[Object(r.jsx)("label",{style:{fontWeight:600,fontSize:13,textTransform:"capitalize",color:"#aaa"},children:n}),Object(r.jsx)(x.a,Object(c.a)(Object(c.a)({color:"secondary","aria-label":"gender"},o),{},{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(r.jsx)(FormControlLabel,Object(c.a)({control:Object(r.jsx)(Radio,{})},e),t)}))})),Object(r.jsx)(j.a,{children:t})]})}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),r=n(512),c=n(525),i=(n(0),n(124));function o(){return Object(a.jsx)("form",{children:Object(a.jsxs)(r.a,{container:!0,spacing:1,children:[Object(a.jsxs)(r.a,{item:!0,md:6,xs:"12",children:[" ",Object(a.jsx)(i.a,{label:"firstName",md:6})]}),Object(a.jsxs)(r.a,{item:!0,md:6,xs:"12",children:[" ",Object(a.jsx)(i.a,{label:"lastName",md:6})]}),Object(a.jsxs)(r.a,{item:!0,xs:12,children:[" ",Object(a.jsx)(i.a,{label:"Email"})]}),Object(a.jsxs)(r.a,{item:!0,xs:12,children:[" ",Object(a.jsx)(i.a,{label:"Phone"})]}),Object(a.jsxs)(r.a,{item:!0,xs:12,children:[" ",Object(a.jsx)(i.a,{label:"Address",multiline:!0,rows:"4"})]}),Object(a.jsxs)(r.a,{item:!0,xs:"12",md:"6",children:[" ",Object(a.jsx)(i.a,{type:"password",label:"Password",md:6})]}),Object(a.jsx)(r.a,{item:!0,xs:"12",md:"6",children:Object(a.jsx)(i.a,{type:"password",label:"Confirm Password",md:6})}),Object(a.jsxs)(r.a,{item:!0,xs:12,className:"text-center",children:[" ",Object(a.jsx)(c.a,{variant:"contained",color:"secondary",children:"Submit"})]})]})})}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(2),r=n(567),c=n(525),i=(n(0),n(124));function o(){return Object(a.jsxs)("form",{children:[Object(a.jsx)(i.a,{label:"UserName/Email"}),Object(a.jsx)(r.a,{mb:1}),Object(a.jsx)(i.a,{label:"password",type:"password"}),Object(a.jsx)(r.a,{className:"text-center",py:1,children:Object(a.jsx)(c.a,{variant:"contained",color:"secondary",className:"px-5",children:"Login"})})]})}},342:function(e,t){},344:function(e,t){},356:function(e,t){},358:function(e,t){},385:function(e,t){},387:function(e,t){},388:function(e,t){},393:function(e,t){},395:function(e,t){},414:function(e,t){},426:function(e,t){},429:function(e,t){},564:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Gt}));var a=n(2),r=n(87),c=n(501),i=n(0),o=n.n(i),s=n(3),l=n(85),j=n(119),d=n(498),u=n(499),b=n(512),O=n(503),p=n(577),x=n(541),m=n(328),h=n.n(m),f=n(329),g=n.n(f),v=n(330),y=n.n(v),C=n(327),N=n.n(C),P=n(199),k=n.n(P),S=function(e){var t=e.classes,n=e.handleDrawerToggle;return Object(a.jsx)(u.a,{position:"fixed",className:null===t||void 0===t?void 0:t.appBar,elevation:4,children:Object(a.jsx)(c.a,{children:Object(a.jsxs)(b.a,{container:!0,alignItems:"center",children:[Object(a.jsx)(b.a,{item:!0,children:Object(a.jsx)(O.a,{color:"primary","aria-label":"open drawer",edge:"start",onClick:n,className:t.menuButton,children:Object(a.jsx)(k.a,{})})}),Object(a.jsx)(b.a,{item:!0,children:Object(a.jsx)(p.a,{placeholder:"Search topics",className:null===t||void 0===t?void 0:t.searchInput,startAdornment:Object(a.jsx)(N.a,{fontSize:"small"})})}),Object(a.jsx)(b.a,{item:!0,sm:!0}),Object(a.jsxs)(b.a,{item:!0,children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{badgeContent:4,color:"secondary",children:Object(a.jsx)(h.a,{fontSize:"small"})})}),Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{badgeContent:3,color:"primary",children:Object(a.jsx)(g.a,{fontSize:"small"})})}),Object(a.jsx)(O.a,{children:Object(a.jsx)(y.a,{fontSize:"small"})})]})]})})})},w=n(542),I=n(576),M=n(572),T=n(92),z=n(543),H=n(509),F=n(510),A=n(544),B=n(545),D=n(531),E=n(332),W=n.n(E),V=n(331),L=n.n(V),R=n(333),G=n.n(R),J=n(210),U=n.n(J),Y=n(334),q=n.n(Y),K=n(23),Q=function(e){var t=e.classes,n=e.window,r=e.mobileOpen,i=e.handleDrawerToggle,o=e.menus,s=Object(T.a)(),l=Object(a.jsxs)("div",{children:[Object(a.jsx)(c.a,{children:Object(a.jsx)("div",{className:"logo"})}),Object(a.jsx)(w.a,{}),Object(a.jsx)(H.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(a.jsx)(z.a,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:null===o||void 0===o?void 0:o.map((function(e){return(null===e||void 0===e?void 0:e.submenu)?Object(a.jsx)(X,{classes:t,menu:e}):Object(a.jsxs)(F.a,{button:!0,component:K.b,to:(null===e||void 0===e?void 0:e.link)||"/",activeClassName:t.active,exact:!0,children:[" ",Object(a.jsx)(A.a,{children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(B.a,{primary:null===e||void 0===e?void 0:e.title})]})}))})]}),j=void 0!==n?function(){return n().document.body}:void 0;return Object(a.jsxs)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:[Object(a.jsx)(M.a,{smUp:!0,implementation:"css",children:Object(a.jsx)(I.a,{container:j,variant:"temporary",anchor:"rtl"===s.direction?"right":"left",open:r,onClose:i,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:l})}),Object(a.jsx)(M.a,{xsDown:!0,implementation:"css",children:Object(a.jsx)(I.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0,children:l})})]})},X=function(e){var t,n=e.classes,r=e.menu,c=o.a.useState(!1),i=Object(l.a)(c,2),s=i[0],j=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(F.a,{button:!0,onClick:function(){j(!s)},children:[Object(a.jsx)(A.a,{children:Object(a.jsx)(W.a,{})}),Object(a.jsx)(B.a,{primary:null===r||void 0===r?void 0:r.title}),s?Object(a.jsx)(G.a,{}):Object(a.jsx)(U.a,{})]}),Object(a.jsx)(D.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(H.a,{component:"div",disablePadding:!0,children:null===r||void 0===r||null===(t=r.submenu)||void 0===t?void 0:t.map((function(e){var t=e.title,r=e.link;return Object(a.jsxs)(F.a,{button:!0,className:n.nested,exact:!0,component:K.b,to:r||"/",activeClassName:n.active,children:[Object(a.jsx)(A.a,{children:Object(a.jsx)(q.a,{})}),Object(a.jsx)(B.a,{primary:t})]})}))})})]})},Z=240,$=Object(d.a)((function(e){return{root:{display:"flex"},drawer:Object(j.a)({},e.breakpoints.up("sm"),{width:Z,flexShrink:0}),searchInput:{opacity:"0.6",padding:"0px ".concat(e.spacing(1),"px"),fontSize:"0.8rem","&:hover":{backgroundColor:"#f2f2f2"},"& .MuiSvgIcon-root":{marginRight:e.spacing(1)}},appBar:Object(j.a)({backgroundColor:"#fff"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(Z,"px)"),marginLeft:Z}),menuButton:Object(j.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:Z},content:{flexGrow:1,padding:e.spacing(3),backgroundColor:"aliceblue",minHeight:"100vh"},nested:{paddingLeft:e.spacing(4)},active:{backgroundColor:e.palette.secondary.main}}}));function _(e){var t=e.children,n=e.menus,r=$(),c=o.a.useState(!1),i=Object(l.a)(c,2),s=i[0],j=i[1],d=function(){j(!s)};return Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsx)(S,{classes:r,handleDrawerToggle:d}),Object(a.jsx)(Q,{menus:n,classes:r,mobileOpen:s,handleDrawerToggle:d}),Object(a.jsx)("main",{className:r.content,children:t})]})}var ee=n(335),te=n.n(ee),ne=function(e){for(var t=[],n=0;n<e;n++)t.push(n);return t},ae=function(){var e=Math.random();return{firstName:te.a.generate({words:1,numbers:0}),lastName:te.a.generate({words:1,numbers:0}),age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random()),progress:Math.floor(100*Math.random()),status:e>.66?"relationship":e>.33?"complicated":"single"}};function re(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=t[n];return ne(a).map((function(a){return Object(r.a)(Object(r.a)({},ae()),{},{subRows:t[n+1]?e(n+1):void 0})}))};return a()}var ce=n(563),ie=n(500),oe=n(567),se=n(527),le=n(505),je=Object(d.a)((function(e){return{root:{backgroundColor:"#fdfdff"},pageHeader:{padding:e.spacing(1),display:"flex"},pageIcon:{display:"inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}}));function de(e){var t=je(),n=e.title,r=e.subTitle,c=e.icon;return Object(a.jsx)(ie.a,{variant:"outlined",className:t.root,children:Object(a.jsxs)("div",{className:t.pageHeader,children:[Object(a.jsx)(se.a,{className:t.pageIcon,children:c}),Object(a.jsxs)("div",{className:t.pageTitle,children:[Object(a.jsx)(le.a,{variant:"h6",component:"div",children:n}),Object(a.jsx)(le.a,{variant:"subtitle2",component:"div",children:r})]})]})})}var ue=n(552),be=n(553),Oe=n(554),pe=n(555),xe=n(556),me=n(582),he=n(557),fe=n(558),ge=n(583),ve=n(456),ye=n.n(ve),Ce=n(455),Ne=n.n(Ce),Pe=n(452),ke=n.n(Pe),Se=n(454),we=n.n(Se),Ie=n(453),Me=n.n(Ie),Te=n(451),ze=n.n(Te),He=n(96),Fe=n(546);var Ae=n(143),Be=n(515),De=n(529),Ee=n(524),We=n(530),Ve=n(571);var Le=n(547),Re=n(568),Ge=n(522),Je=n(516);var Ue=n(573);var Ye=n(132),qe=n(566),Ke=n(458);var Qe=n(525),Xe=Object(d.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var Ze=Object(d.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.primary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var $e={MyInput:Ae.b,MyPassword:Ae.c,MySelect:Ae.e,Input:function(e){var t=e.name,n=e.label,c=e.value,i=e.error,o=void 0===i?null:i,s=e.onChange,l=Object(He.a)(e,["name","label","value","error","onChange"]);return Object(a.jsx)(Fe.a,Object(r.a)(Object(r.a)({variant:"outlined",label:n,name:t,value:c,onChange:s},l),o&&{error:!0,helperText:o}))},RadioGroup:function(e){var t=e.name,n=e.label,r=e.value,c=e.onChange,i=e.items;return Object(a.jsxs)(Be.a,{children:[Object(a.jsx)(De.a,{children:n}),Object(a.jsx)(Ee.a,{row:!0,name:t,value:r,onChange:c,children:i.map((function(e){return Object(a.jsx)(We.a,{value:e.id,control:Object(a.jsx)(Ve.a,{}),label:e.title},e.id)}))})]})},Select:function(e){var t=e.name,n=e.label,c=e.value,i=e.error,o=void 0===i?null:i,s=e.onChange,l=e.options;return Object(a.jsxs)(Be.a,Object(r.a)(Object(r.a)({variant:"outlined"},o&&{error:!0}),{},{children:[Object(a.jsx)(Le.a,{children:n}),Object(a.jsxs)(Re.a,{label:n,name:t,value:c,onChange:s,children:[Object(a.jsx)(Ge.a,{value:"",children:"None"}),l.map((function(e){return Object(a.jsx)(Ge.a,{value:e.id,children:e.title},e.id)}))]}),o&&Object(a.jsx)(Je.a,{children:o})]}))},Checkbox:function(e){var t=e.name,n=e.label,r=e.value,c=e.onChange;return Object(a.jsx)(Be.a,{children:Object(a.jsx)(We.a,{control:Object(a.jsx)(Ue.a,{name:t,color:"primary",checked:r,onChange:function(e){return c(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))}}),label:n})})},DatePicker:function(e){var t=e.name,n=e.label,r=e.value,c=e.onChange;return Object(a.jsx)(Ye.a,{utils:Ke.a,children:Object(a.jsx)(qe.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:n,format:"MMM/dd/yyyy",name:t,value:r,onChange:function(e){return c(function(e,t){return{target:{name:e,value:t}}}(t,e))}})})},Button:function(e){var t=e.text,n=e.size,c=e.color,i=e.variant,o=e.onClick,s=Object(He.a)(e,["text","size","color","variant","onClick"]),l=Xe();return Object(a.jsx)(Qe.a,Object(r.a)(Object(r.a)({variant:i||"contained",size:n||"large",color:c||"primary",onClick:o},s),{},{classes:{root:l.root,label:l.label},children:t}))},ActionButton:function(e){var t=e.color,n=e.children,r=e.onClick,c=Ze();return Object(a.jsx)(Qe.a,{className:"".concat(c.root," ").concat(c[t]),onClick:r,children:n})}},_e=n(551),et=n(517),tt=function(e){var t=e.filter,n=e.setFilter,r=e.classes,i=e.add;return Object(a.jsxs)(c.a,{children:[Object(a.jsx)($e.Input,{label:"Search Here..",className:r.searchInput,value:t||"",size:"small",onChange:function(e){return n(e.target.value)},InputProps:{startAdornment:Object(a.jsx)(et.a,{position:"start",children:Object(a.jsx)(_e.a,{})})}}),Object(a.jsx)(oe.a,{flex:"1"}),i]})},nt=n(447),at=Object(d.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.secondary.main},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}})),rt=Object(d.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function ct(e){var t=rt(),n=Object(T.a)(),r=e.canNextPage,c=e.canPreviousPage,i=e.nextPage,o=e.previousPage,s=e.gotoPage,l=e.pageCount,j=o,d=i;return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(O.a,{onClick:function(){return s(0)},disabled:!c,"aria-label":"first page",children:"rtl"===n.direction?Object(a.jsx)(ze.a,{}):Object(a.jsx)(ke.a,{})}),Object(a.jsx)(O.a,{onClick:j,disabled:!c,"aria-label":"previous page",children:"rtl"===n.direction?Object(a.jsx)(Me.a,{}):Object(a.jsx)(we.a,{})}),Object(a.jsx)(O.a,{onClick:d,disabled:!r,"aria-label":"next page",children:"rtl"===n.direction?Object(a.jsx)(we.a,{}):Object(a.jsx)(Me.a,{})}),Object(a.jsx)(O.a,{onClick:function(){return s(l-1)},disabled:!r,"aria-label":"last page",children:"rtl"===n.direction?Object(a.jsx)(ke.a,{}):Object(a.jsx)(ze.a,{})})]})}function it(e){var t=e.columns,n=e.data,c=e.add,i=Object(nt.useTable)({columns:t,data:n},nt.useGlobalFilter,nt.useSortBy,nt.usePagination),o=i.getTableProps,s=i.getTableBodyProps,l=i.headerGroups,j=i.page,d=i.nextPage,u=i.previousPage,b=i.canNextPage,O=i.state,p=(i.pageOptions,i.setPageSize),x=i.gotoPage,m=i.setGlobalFilter,h=i.pageCount,f=i.canPreviousPage,g=i.prepareRow,v=at();return Object(a.jsxs)(oe.a,{children:[Object(a.jsx)(tt,{filter:O.globalFilter,setFilter:m,add:c,classes:v}),Object(a.jsx)(ue.a,{children:Object(a.jsxs)(be.a,Object(r.a)(Object(r.a)({},o()),{},{className:v.table,children:[Object(a.jsx)(Oe.a,{children:l.map((function(e){return Object(a.jsx)(pe.a,Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(a.jsxs)(xe.a,Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps)),{},{children:[e.render("Header"),Object(a.jsx)(me.a,{children:e.isSorted?e.isSortedDesc?Object(a.jsx)(Ne.a,{fontSize:"small"}):Object(a.jsx)(ye.a,{fontSize:"small"}):""})]}))}))}))}))}),Object(a.jsx)(he.a,Object(r.a)(Object(r.a)({},s()),{},{children:j.map((function(e,t){return g(e),Object(a.jsx)(pe.a,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(a.jsx)(xe.a,Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(a.jsx)(fe.a,{children:Object(a.jsx)(ge.a,{rowsPerPageOptions:[5,10,25],page:O.pageIndex,onChangeRowsPerPage:function(e){p(e.target.value),x(0)},rowsPerPage:O.pageSize,count:n.length,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},ActionsComponent:function(){return Object(a.jsx)(ct,{nextPage:d,previousPage:u,canNextPage:b,canPreviousPage:f,gotoPage:x,pageCount:h})}})})]}))})]})}var ot=function(e){var t=e.data,n=e.columns,r=e.add;return Object(a.jsx)(it,{columns:n,data:t,add:r})},st=n(548),lt=n(559),jt=n(549),dt=n(262),ut=n.n(dt),bt=Object(d.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{padding:0}}}));function Ot(e){var t=o.a.useState(!1),n=Object(l.a)(t,2),c=n[0],i=n[1];return{MyPopup:function(t){var n=t.children,o=Object(He.a)(t,["children"]);return Object(a.jsx)(pt,Object(r.a)(Object(r.a)({title:e,openPopup:c,setOpenPopup:i},o),{},{children:n}))},openDialog:function(){return i((function(e){return!e}))}}}function pt(e){var t=e.title,n=e.children,c=e.openPopup,i=e.setOpenPopup,o=Object(He.a)(e,["title","children","openPopup","setOpenPopup"]),s=bt();return Object(a.jsxs)(st.a,Object(r.a)(Object(r.a)({open:c,classes:{paper:s.dialogWrapper}},o),{},{children:[Object(a.jsx)(lt.a,{className:s.dialogTitle,children:Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)(le.a,{variant:"h6",component:"div",style:{flexGrow:1},children:t}),Object(a.jsx)($e.ActionButton,{color:"secondary",onClick:function(){i(!1)},children:Object(a.jsx)(ut.a,{})})]})}),Object(a.jsx)(w.a,{}),Object(a.jsx)(jt.a,{children:n})]}))}var xt=function(e){var t=e.title,n=e.subTitle,r=e.icon,c=e.columns,i=e.data,o=e.add;return Object(a.jsxs)(b.a,{container:!0,spacing:1,children:[Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(de,{title:t,subTitle:n,icon:r})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(ie.a,{variant:"outlined",children:Object(a.jsx)(oe.a,{p:5,children:Object(a.jsx)(mt,{columns:c,data:i,add:o})})})})]})},mt=function(e){var t=e.columns,n=e.data,r=e.add;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(ot,{columns:t,data:n,add:r})})},ht=n(550),ft=n(457),gt=n.n(ft),vt=Object(d.a)((function(e){return{dialog:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{textAlign:"center"},dialogContent:{textAlign:"center"},dialogAction:{justifyContent:"center"},titleIcon:{backgroundColor:e.palette.secondary.light,color:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.light,cursor:"default"},"& .MuiSvgIcon-root":{fontSize:"8rem"}}}}));function yt(e,t){var n=o.a.useState(!1),r=Object(l.a)(n,2),c=r[0],i=r[1],s=o.a.useState((function(){return function(){}})),j=Object(l.a)(s,2),d=j[0],u=j[1],b=function(){return i(!1)};return{ConfirmPopup:function(){return Object(a.jsx)(Ct,{onConfirm:d,title:e,subTitle:t,openPopup:c,setOpenPopup:b})},openConfirm:function(e){i(!0),u((function(){return e}))}}}function Ct(e){var t=e.title,n=e.subTitle,r=e.onConfirm,c=e.openPopup,i=e.setOpenPopup,o=(Object(He.a)(e,["title","subTitle","onConfirm","openPopup","setOpenPopup"]),vt());return Object(a.jsxs)(st.a,{open:c,classes:{paper:o.dialog},children:[Object(a.jsx)(lt.a,{className:o.dialogTitle,children:Object(a.jsx)(O.a,{disableRipple:!0,className:o.titleIcon,children:Object(a.jsx)(gt.a,{})})}),Object(a.jsxs)(jt.a,{className:o.dialogContent,children:[Object(a.jsx)(le.a,{variant:"h6",children:t}),Object(a.jsx)(le.a,{variant:"subtitle2",children:n})]}),Object(a.jsxs)(ht.a,{className:o.dialogAction,children:[Object(a.jsx)($e.Button,{text:"No",color:"default",onClick:i}),Object(a.jsx)($e.Button,{text:"Yes",color:"secondary",onClick:function(){r(),i()}})]})]})}var Nt=n(560),Pt=n(561),kt=n(562);function St(e){var t=e.children,n=Object(He.a)(e,["children"]);return Object(a.jsx)(Qe.a,Object(r.a)(Object(r.a)({size:"small",variant:"outlined",color:"primary",startIcon:Object(a.jsx)(Nt.a,{})},n),{},{children:t}))}function wt(e){e.children;var t=Object(He.a)(e,["children"]);return Object(a.jsx)(Qe.a,Object(r.a)(Object(r.a)({size:"small",color:"primary",variant:"outlined"},t),{},{startIcon:Object(a.jsx)(Pt.a,{}),children:"Edit"}))}function It(e){e.children;var t=Object(He.a)(e,["children"]);return Object(a.jsx)(Qe.a,Object(r.a)(Object(r.a)({size:"small",variant:"outlined",color:"primary",startIcon:Object(a.jsx)(kt.a,{})},t),{},{children:"Delete"}))}function Mt(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,a=Object(i.useState)(e),c=Object(l.a)(a,2),o=c[0],s=c[1],d=Object(i.useState)({}),u=Object(l.a)(d,2),b=u[0],O=u[1],p=function(e){var a=e.target,c=a.name,i=a.value;s(Object(r.a)(Object(r.a)({},o),{},Object(j.a)({},c,i))),t&&n(Object(j.a)({},c,i))},x=function(){s(e),O({})};return{values:o,setValues:s,errors:b,setErrors:O,handleInputChange:p,resetForm:x}}Object(d.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"80%",margin:e.spacing(1)}}}}));var Tt=function(e){var t=e.value,n=e.addorEdit,r=Mt(0==Object.keys(t).length?{brandName:"",brandImage:"",brandWebsite:""}:t,!1,{}),c=r.values,i=r.handleInputChange;return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(c)},children:[Object(a.jsx)($e.MyInput,{label:"brandName",name:"brandName",value:c.brandName,onChange:i}),Object(a.jsx)($e.MyInput,{label:"brandImage",name:"brandImage",value:c.brandImage,onChange:i}),Object(a.jsx)($e.MyInput,{label:"brandWebsite",name:"brandWebsite",value:c.brandWebsite,onChange:i}),Object(a.jsx)($e.MyInput,{label:"brandIcon",name:"brandIcon",value:c.brandIcon,onChange:i}),Object(a.jsx)($e.Button,{type:"submit",text:"Submit"})]})},zt=n(192);function Ht(e,t){var n=Object(i.useState)((function(){try{return JSON.parse(localStorage.getItem(e))||t}catch(n){return t}})),a=Object(l.a)(n,2),r=a[0],c=a[1];return[r,function(t){c(t),localStorage.setItem(e,JSON.stringify(t))}]}var Ft=function(){var e=Object(i.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(){var e=Ht("brand",[]),t=Object(l.a)(e,2),n=t[0],a=t[1];return{mydata:n,add:function(e){a([].concat(Object(zt.a)(n||[]),[Object(r.a)({id:Date.now()},e)]))},update:function(e){return a(n.map((function(t){return t.id==e.id?e:t})))},deleteC:function(e){return a(n.filter((function(t){return t.id!=e.id})))}}}(),j=s.mydata,d=s.add,u=s.update,b=s.deleteC,O=Ot(0==Object.keys(n).length?"Add Brand":"Edit Brand"),p=O.MyPopup,x=O.openDialog,m=yt("Are you sure","once deleted not recoverd"),h=m.ConfirmPopup,f=m.openConfirm,g=Object(a.jsx)(ce.a,{fontSize:"large"}),v=Tt,y=o.a.useMemo((function(){return j||[]}),[j]),C=Object(a.jsx)(St,{onClick:function(){c({}),x()},children:"Add New"}),N=o.a.useMemo((function(){return[{Header:"Brand Id",accessor:"id"},{Header:"Brand Name",accessor:"brandName"},{Header:"Brand Image",accessor:"brandImage"},{Header:"Brand Icon",accessor:"brandIcon"},{Header:"Actions",Cell:function(e){var t=e.row;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(wt,{onClick:function(){c(t.original),x()},children:"Edit"}),Object(a.jsx)(It,{onClick:function(){return f((function(){return b(t.original)}))},children:"Delete"})]})}}]}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(xt,{add:C,columns:N,data:y,title:"Brand",subTitle:"Brands",icon:g}),Object(a.jsx)(p,{fullwidth:!0,children:Object(a.jsx)(v,{addorEdit:function(e){0==Object.keys(n).length?d(e):u(e),x()},value:n})}),Object(a.jsx)(h,{})]})},At=n(144);function Bt(e){var t=e.value,n=e.addorEdit,r=Mt(0==Object.keys(t).length?{categoryName:""}:t,!1,{}),c=r.values,i=r.handleInputChange;return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(c)},children:[Object(a.jsx)($e.MyInput,{label:"categoryName",name:"categoryName",value:c.categoryName,onChange:i}),Object(a.jsx)($e.Button,{type:"submit",text:"Submit"})]})}var Dt=function(){var e=Object(i.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(){var e=Ht("category",[]),t=Object(l.a)(e,2),n=t[0],a=t[1];return{mydata:n,add:function(e){a([].concat(Object(zt.a)(n||[]),[Object(r.a)({id:Date.now()},e)]))},update:function(e){return a(n.map((function(t){return t.id==e.id?e:t})))},deleteC:function(e){return a(n.filter((function(t){return t.id!=e.id})))}}}(),j=s.mydata,d=s.add,u=s.update,b=s.deleteC,O=Ot(0==Object.keys(n).length?"Add Category":"Edit Category"),p=O.MyPopup,x=O.openDialog,m=yt("Are you sure","once deleted not recoverd"),h=m.ConfirmPopup,f=m.openConfirm,g=Object(a.jsx)(ce.a,{fontSize:"large"}),v=Bt,y=o.a.useMemo((function(){return j||[]}),[j]),C=Object(a.jsx)(St,{onClick:function(){c({}),x()},children:"Add New"}),N=o.a.useMemo((function(){return[{Header:"Category Id",accessor:"id"},{Header:"Category Name",accessor:"categoryName"},{Header:"Actions",Cell:function(e){var t=e.row;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(wt,{onClick:function(){c(t.original),x()},children:"Edit"}),Object(a.jsx)(It,{onClick:function(){return f((function(){return b(t.original)}))},children:"Delete"})]})}}]}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(xt,{add:C,columns:N,data:y,title:"Category",subTitle:"Form design with validation",icon:g}),Object(a.jsx)(p,{fullwidth:!0,children:Object(a.jsx)(v,{addorEdit:function(e){0==Object.keys(n).length?d(e):u(e),x()},value:n})}),Object(a.jsx)(h,{})]})},Et=function(e){var t=e.value,n=e.addorEdit,r=Mt(0==Object.keys(t).length?{varientName:"",categoryName:""}:t,!1,{}),c=r.values,i=r.handleInputChange;return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(c)},children:[Object(a.jsx)($e.MyInput,{label:"varientName",name:"varientName",value:c.varientName,onChange:i}),Object(a.jsx)($e.MyInput,{label:"categoryName",name:"categoryName",value:c.categoryName,onChange:i}),Object(a.jsx)($e.Button,{type:"submit",text:"Submit"})]})},Wt=function(){var e=Object(i.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(){var e=Ht("Varient",[]),t=Object(l.a)(e,2),n=t[0],a=t[1];return{mydata:n,add:function(e){a([].concat(Object(zt.a)(n||[]),[Object(r.a)({id:Date.now()},e)]))},update:function(e){return a(n.map((function(t){return t.id==e.id?e:t})))},deleteC:function(e){return a(n.filter((function(t){return t.id!=e.id})))}}}(),j=s.mydata,d=s.add,u=s.update,b=s.deleteC,O=Ot(0==Object.keys(n).length?"Add Varient":"Edit Varient"),p=O.MyPopup,x=O.openDialog,m=yt("Are you sure","once deleted not recoverd"),h=m.ConfirmPopup,f=m.openConfirm,g=Object(a.jsx)(ce.a,{fontSize:"large"}),v=Et,y=o.a.useMemo((function(){return j||[]}),[j]),C=Object(a.jsx)(St,{onClick:function(){c({}),x()},children:"Add New"}),N=o.a.useMemo((function(){return[{Header:"Varient Id",accessor:"id"},{Header:"Varient Name",accessor:"varientName"},{Header:"Category Name",accessor:"categoryName"},{Header:"Actions",Cell:function(e){var t=e.row;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(wt,{onClick:function(){c(t.original),x()},children:"Edit"}),Object(a.jsx)(It,{onClick:function(){return f((function(){return b(t.original)}))},children:"Delete"})]})}}]}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(xt,{add:C,columns:N,data:y,title:"Varient",subTitle:"Varients",icon:g}),Object(a.jsx)(p,{fullwidth:!0,children:Object(a.jsx)(v,{addorEdit:function(e){0==Object.keys(n).length?d(e):u(e),x()},value:n})}),Object(a.jsx)(h,{})]})},Vt=function(){var e=Ot("Title"),t=e.MyPopup,n=e.openDialog,r=Object(a.jsx)(ce.a,{fontSize:"large"}),c=At.a,i=o.a.useMemo((function(){return re(20)}),[]),s=Object(a.jsx)(St,{children:"Add Item"}),l=o.a.useMemo((function(){return[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age"},{Header:"Visits",accessor:"visits"},{Header:"Status",accessor:"status"},{Header:"Profile Progress",accessor:"progress"},{Header:"Actions",Cell:function(e){var t=e.row;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(wt,{onClick:n,children:"Edit"}),Object(a.jsx)(It,{onClick:function(){return console.log(t.original)},children:"Delete"})]})}}]}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(xt,{add:s,columns:l,data:i,title:"Subscribers",subTitle:"Form design with validation",icon:r}),Object(a.jsx)(t,{fullwidth:!0,children:Object(a.jsx)(c,{})})]})},Lt=n(169),Rt=function(){var e=Ot("Title"),t=e.MyPopup,n=e.openDialog,r=Object(a.jsx)(ce.a,{fontSize:"large"}),c=Lt.a,i=o.a.useMemo((function(){return re(20)}),[]),s=Object(a.jsx)(St,{children:"Add Item"}),l=o.a.useMemo((function(){return[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age"},{Header:"Visits",accessor:"visits"},{Header:"Status",accessor:"status"},{Header:"Profile Progress",accessor:"progress"},{Header:"Actions",Cell:function(e){var t=e.row;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(wt,{onClick:n,children:"Edit"}),Object(a.jsx)(It,{onClick:function(){return console.log(t.original)},children:"Delete"})]})}}]}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(xt,{add:s,columns:l,data:i,title:"Subscription Page",subTitle:"Form design with validation",icon:r}),Object(a.jsx)(t,{fullwidth:!0,children:Object(a.jsx)(c,{})})]})};function Gt(){var e="/admin",t=[{title:"SubScription",submenu:[{title:"SubScriber",link:e+"/"},{title:"Subscription",link:e+"/subscription"}]},{title:"Category",link:e+"/category"},{title:"Brands",link:e+"/brand"},{title:"Varient",link:e+"/varient"},{title:"name4"}],n=[{path:e+"/subscription",component:Rt},{path:e+"/category",component:Dt},{path:e+"/brand",component:Ft},{path:e+"/varient",component:Wt},{path:e+"/",exact:!0,component:Vt}];return Object(a.jsxs)(_,{menus:t,children:[Object(a.jsx)(c.a,{}),null===n||void 0===n?void 0:n.map((function(e){return Object(a.jsx)(s.b,Object(r.a)({},e))}))]})}}}]);
//# sourceMappingURL=6.7f0dfbe0.chunk.js.map