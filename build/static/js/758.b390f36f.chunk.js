"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[758],{47619:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(30168),r=a(92550),o=a(17592),s=a(83061),i=a(47313),l=a(70499),c=a(19860),d=a(36304),p=a(47295),g=a(45894),u=a(46417);const h=function(e){const t=(0,c.Z)(),a=(0,g.v9)((0,p.lK)(t.palette.primary.main));return(0,u.jsx)("div",{className:"FusePageCarded-header",children:e.header&&(0,u.jsx)(d.Z,{theme:a,children:e.header})})};var m=a(46923),x=a(57451),b=a(49920);const f=function(e){const t=(0,c.Z)(),a=(0,g.v9)((0,p.lK)(t.palette.primary.main));return(0,u.jsxs)(u.Fragment,{children:[e.header&&(0,u.jsx)(d.Z,{theme:a,children:(0,u.jsx)("div",{className:(0,s.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&(0,u.jsx)(r.Z,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function P(e,t){const[a,n]=(0,i.useState)(!1);(0,i.useImperativeHandle)(t,(()=>({toggleSidebar:r})));const r=()=>{n(!a)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.Z,{lgUp:"permanent"===e.variant,children:(0,u.jsx)(b.Z,{variant:"temporary",anchor:e.position,open:a,onOpen:e=>{},onClose:e=>r(),disableSwipeToOpen:!0,classes:{root:(0,s.default)("FusePageCarded-sidebarWrapper",e.variant),paper:(0,s.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,u.jsx)(f,{...e})})}),"permanent"===e.variant&&(0,u.jsx)(x.Z,{lgDown:!0,children:(0,u.jsx)(m.ZP,{variant:"permanent",className:(0,s.default)("FusePageCarded-sidebarWrapper",e.variant),open:a,classes:{paper:(0,s.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:(0,u.jsx)(f,{...e})})})]})}const Z=(0,i.forwardRef)(P);var v;const j=(0,o.ZP)("div")((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:C,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0,[t.breakpoints.down("sm")]:{padding:"0 1.6rem"}},"& .FusePageCarded-header":{height:y,minHeight:y,maxHeight:y,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:w,minHeight:w,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":{[t.breakpoints.up("lg")]:{zIndex:1,position:"relative"}}},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":{[t.breakpoints.up("lg")]:{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}},width:S,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:C,minHeight:C,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":{[t.breakpoints.up("lg")]:{backgroundColor:"transparent"}}},"& .FusePageCarded-sidebarContent":{display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary,[t.breakpoints.up("lg")]:{overflow:"auto",WebkitOverflowScrolling:"touch"}},"& .FusePageCarded-backdrop":{position:"absolute"}}})),S=240,C=200,w=64,y=C-w,N=(0,i.forwardRef)(((e,t)=>{const a=(0,i.useRef)(null),n=(0,i.useRef)(null),o=(0,i.useRef)(null),c=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return(0,i.useImperativeHandle)(t,(()=>({rootRef:o,toggleLeftSidebar:()=>{a.current.toggleSidebar()},toggleRightSidebar:()=>{n.current.toggleSidebar()}}))),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{styles:t=>({"#fuse-main":{height:e.innerScroll&&"100vh"}})}),(0,u.jsxs)(j,{className:(0,s.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:o,children:[(0,u.jsx)("div",{className:"FusePageCarded-topBg"}),(0,u.jsxs)("div",{className:"flex container w-full",children:[d&&(0,u.jsx)(Z,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:o}),(0,u.jsxs)("div",{className:(0,s.default)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",c&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[(0,u.jsx)(h,{header:e.header}),(0,u.jsxs)("div",{className:(0,s.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&(0,u.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&(0,u.jsx)(r.Z,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),c&&(0,u.jsx)(Z,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:n,rootRef:o})]})]})]})}));N.defaultProps={};const k=(0,i.memo)((0,o.ZP)(N)(v||(v=(0,n.Z)([""]))))},68702:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(61113),r=a(11755),o=a(96351),s=a(46417);const i=function(){return(0,s.jsx)("div",{className:"flex flex-col flex-1 items-center justify-center p-16",children:(0,s.jsxs)("div",{className:"max-w-512 text-center",children:[(0,s.jsx)(r.E.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1,transition:{delay:.1}},children:(0,s.jsx)(n.Z,{variant:"h1",color:"inherit",className:"font-medium mb-16",children:"401"})}),(0,s.jsx)(r.E.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:(0,s.jsx)(n.Z,{variant:"h5",color:"textSecondary",className:"mb-16 font-normal",children:o.Z.t("navigation:NOTALLOW")})})]})})}},80758:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var n=a(47619),r=(a(23132),a(47313)),o=a(17592),s=a(71263),i=a(61113),l=a(11755),c=a(45894),d=a(47295),p=a(96351),g=(a(84946),a(70816)),u=a.n(g),h=a(92550),m=a(24813),x=a(19860),b=a(46417);const f=function(e){const t=(0,x.Z)(),[a,n]=((0,c.I0)(),(0,c.v9)(d.rg),(0,m.Z)(t.breakpoints.down("lg")),r.useState(u()().subtract(6,"months"))),[o,g]=r.useState(u()()),[h,f]=r.useState(""),[P,Z]=r.useState(""),[v,j]=r.useState(""),[S,C]=r.useState("");return(0,b.jsx)("div",{className:"flex flex-1 w-full items-center justify-between",children:(0,b.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},children:(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(s.Z,{component:l.E.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-54 md:text-72",children:"family_restroom"}),(0,b.jsx)("div",{className:"flex flex-col items-center sm:items-start mb-16 sm:mb-0",children:(0,b.jsx)(i.Z,{component:l.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:p.Z.t("navigation:REFERRALSTATS")})})]})})})};a(58970);var P=a(66835),Z=a(57861),v=a(70941),j=a(41493),S=a(24076),C=a(63830),w=a(63738),y=a(23477);const N=[{id:"driver",align:"center",disablePadding:!1,label:"DATE",sort:!1},{id:"vehisscle",align:"center",disablePadding:!1,label:"COMMISSIONVIA",sort:!1},{id:"vehicle",align:"center",disablePadding:!1,label:"DESC",sort:!1},{id:"emirates",align:"left",disablePadding:!1,label:"LEVELCOMMISION",sort:!1},{id:"cats",align:"center",disablePadding:!1,label:"AMOUNT",sort:!1},{id:"sscats",align:"center",disablePadding:!1,label:"AFTERBAL",sort:!1}];const k=function(e){return(0,c.I0)(),(0,b.jsx)(y.Z,{children:(0,b.jsx)(S.Z,{className:"h-48 sm:h-64",children:N.map(((e,t)=>(0,b.jsx)(v.Z,{className:"p-4 md:p-16",align:e.align,padding:e.disablePadding?"none":"normal",style:{paddingLeft:"driver"==e.id?22:""},children:p.Z.t("navigation:".concat(e.label))},t)),this)})})};var F=a(65152),I=a(47131);const R=(0,C.EN)((function(e){const t=(0,c.I0)(),a=[],[n,o]=((0,c.v9)((e=>{let{i18n:t}=e;return t.language?t.language:""})),(0,r.useState)([])),[i,l]=(0,r.useState)({}),[d,p]=(0,r.useState)({}),[g,m]=(0,r.useState)(!1),[x,f]=(0,r.useState)(!1),[C,w]=(0,r.useState)(0),[y,N]=(0,r.useState)(10),[R,L]=(0,r.useState)({direction:"asc",id:null});return(0,r.useEffect)((()=>{}),[]),(0,b.jsxs)("div",{className:"w-full flex flex-col",children:[(0,b.jsx)(h.Z,{className:"flex-grow overflow-x-auto",children:(0,b.jsxs)(P.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,b.jsx)(k,{}),(0,b.jsx)(Z.Z,{children:a&&a.length>0?a.map(((e,a)=>(0,b.jsxs)(S.Z,{className:"h-72 cursor-pointer",hover:!0,children:[(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",style:{paddingLeft:22},children:(0,b.jsx)("strong",{onClick:()=>function(e){const a=e&&e.name?e.name:"";a&&(t(changeLogItemName(a)),F.Z.push({pathname:"/apps/jic/logs"}))}(e),style:{cursor:"pointer",color:"linear-gradient(to right, #194a4f 0%, #24585d 100%)",textDecoration:"underline"},children:e.name?e.name:""})}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.original_storenumber?e.original_storenumber:""}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.present_storenumber?e.present_storenumber:""}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:e.status?e.status:""}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:e.rentee?e.rentee:""}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.SerialNo?e.SerialNo:""}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.createdAt?u()(e.createdAt).format(DateTimeFormat):"--"}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.updatedAt?u()(e.updatedAt).format(DateTimeFormat):"--"}),(0,b.jsx)(v.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:(0,b.jsx)(I.Z,{onClick:()=>(e=>{p(g?{}:e),f(!x)})(e),color:"inherit",children:(0,b.jsx)(s.Z,{color:"inherit",children:"edit"})})})]},a))):(0,b.jsx)(b.Fragment,{})})]})}),(0,b.jsx)(j.Z,{className:"flex-shrink-0 border-t-1",component:"div",count:100,rowsPerPage:y,page:C,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,a){t(changeItemPagination({pageNo:a+1,pageSize:y})),w(a)},onRowsPerPageChange:function(e){const a={pageNo:C+1,pageSize:e.target.value};t(changeItemPagination(a)),N(e.target.value)}})]})}));var L=a(68702);const T=(0,o.ZP)(n.Z)((e=>{let{theme:t}=e;return{"& .FusePageCarded-header":{minHeight:72,height:72,alignItems:"center",[t.breakpoints.up("sm")]:{minHeight:136,height:136},[t.breakpoints.down("lg")]:{minHeight:222,height:222}},"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));const B=function(){(0,c.I0)(),(0,c.v9)((e=>{let{auth:t}=e;return t.user.roleid?t.user.roleid:0}));const[e,t]=r.useState(!0),[a,n]=r.useState(!1);return a?(0,b.jsx)(w.Z,{}):e?(0,b.jsx)(T,{header:(0,b.jsx)(f,{}),content:(0,b.jsx)(R,{}),innerScroll:!0}):(0,b.jsx)(L.Z,{})}},41493:(e,t,a)=>{a.d(t,{Z:()=>K});var n,r,o,s,i,l,c,d,p=a(63366),g=a(87462),u=a(47313),h=(a(75192),a(83061)),m=a(92661),x=a(2436),b=a(17592),f=a(77342),P=a(73976),Z=a(51405),v=a(40454),j=a(70941),S=a(9289),C=a(35328),w=a(88168),y=a(19860),N=a(47131),k=a(66152),F=a(39004),I=a(46417);const R=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],L=u.forwardRef((function(e,t){const{backIconButtonProps:a,count:u,getItemAriaLabel:h,nextIconButtonProps:m,onPageChange:x,page:b,rowsPerPage:f,showFirstButton:P,showLastButton:Z}=e,v=(0,p.Z)(e,R),j=(0,y.Z)();return(0,I.jsxs)("div",(0,g.Z)({ref:t},v,{children:[P&&(0,I.jsx)(N.Z,{onClick:e=>{x(e,0)},disabled:0===b,"aria-label":h("first",b),title:h("first",b),children:"rtl"===j.direction?n||(n=(0,I.jsx)(k.Z,{})):r||(r=(0,I.jsx)(F.Z,{}))}),(0,I.jsx)(N.Z,(0,g.Z)({onClick:e=>{x(e,b-1)},disabled:0===b,color:"inherit","aria-label":h("previous",b),title:h("previous",b)},a,{children:"rtl"===j.direction?o||(o=(0,I.jsx)(w.Z,{})):s||(s=(0,I.jsx)(C.Z,{}))})),(0,I.jsx)(N.Z,(0,g.Z)({onClick:e=>{x(e,b+1)},disabled:-1!==u&&b>=Math.ceil(u/f)-1,color:"inherit","aria-label":h("next",b),title:h("next",b)},m,{children:"rtl"===j.direction?i||(i=(0,I.jsx)(C.Z,{})):l||(l=(0,I.jsx)(w.Z,{}))})),Z&&(0,I.jsx)(N.Z,{onClick:e=>{x(e,Math.max(0,Math.ceil(u/f)-1))},disabled:b>=Math.ceil(u/f)-1,"aria-label":h("last",b),title:h("last",b),children:"rtl"===j.direction?c||(c=(0,I.jsx)(F.Z,{})):d||(d=(0,I.jsx)(k.Z,{}))})]}))}));var T,B=a(17677),M=a(16596);const H=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],A=(0,b.ZP)(j.Z,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{overflow:"auto",color:t.palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),E=(0,b.ZP)(S.Z,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>(0,g.Z)({["& .".concat(M.Z.actions)]:t.actions},t.toolbar)})((e=>{let{theme:t}=e;return{minHeight:52,paddingRight:2,["".concat(t.breakpoints.up("xs")," and (orientation: landscape)")]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},["& .".concat(M.Z.actions)]:{flexShrink:0,marginLeft:20}}})),O=(0,b.ZP)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,t)=>t.spacer})({flex:"1 1 100%"}),D=(0,b.ZP)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,t)=>t.selectLabel})((e=>{let{theme:t}=e;return(0,g.Z)({},t.typography.body2,{flexShrink:0})})),z=(0,b.ZP)(v.Z,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>(0,g.Z)({["& .".concat(M.Z.selectIcon)]:t.selectIcon,["& .".concat(M.Z.select)]:t.select},t.input,t.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,["& .".concat(M.Z.select)]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),W=(0,b.ZP)(Z.Z,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,t)=>t.menuItem})({}),_=(0,b.ZP)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,t)=>t.displayedRows})((e=>{let{theme:t}=e;return(0,g.Z)({},t.typography.body2,{flexShrink:0})}));function V(e){let{from:t,to:a,count:n}=e;return"".concat(t,"-").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))}function U(e){return"Go to ".concat(e," page")}const K=u.forwardRef((function(e,t){const a=(0,f.Z)({props:e,name:"MuiTablePagination"}),{ActionsComponent:n=L,backIconButtonProps:r,className:o,colSpan:s,component:i=j.Z,count:l,getItemAriaLabel:c=U,labelDisplayedRows:d=V,labelRowsPerPage:b="Rows per page:",nextIconButtonProps:Z,onPageChange:v,onRowsPerPageChange:S,page:C,rowsPerPage:w,rowsPerPageOptions:y=[10,25,50,100],SelectProps:N={},showFirstButton:k=!1,showLastButton:F=!1}=a,R=(0,p.Z)(a,H),K=a,G=(e=>{const{classes:t}=e;return(0,m.Z)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},M.U,t)})(K),q=N.native?"option":W;let J;i!==j.Z&&"td"!==i||(J=s||1e3);const Q=(0,B.Z)(N.id),X=(0,B.Z)(N.labelId);return(0,I.jsx)(A,(0,g.Z)({colSpan:J,ref:t,as:i,ownerState:K,className:(0,h.default)(G.root,o)},R,{children:(0,I.jsxs)(E,{className:G.toolbar,children:[(0,I.jsx)(O,{className:G.spacer}),y.length>1&&(0,I.jsx)(D,{className:G.selectLabel,id:X,children:b}),y.length>1&&(0,I.jsx)(z,(0,g.Z)({variant:"standard",input:T||(T=(0,I.jsx)(P.ZP,{})),value:w,onChange:S,id:Q,labelId:X},N,{classes:(0,g.Z)({},N.classes,{root:(0,h.default)(G.input,G.selectRoot,(N.classes||{}).root),select:(0,h.default)(G.select,(N.classes||{}).select),icon:(0,h.default)(G.selectIcon,(N.classes||{}).icon)}),children:y.map((e=>(0,u.createElement)(q,(0,g.Z)({},!(0,x.Z)(q)&&{ownerState:K},{className:G.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)))})),(0,I.jsx)(_,{className:G.displayedRows,children:d({from:0===l?0:C*w+1,to:-1===l?(C+1)*w:-1===w?l:Math.min(l,(C+1)*w),count:-1===l?-1:l,page:C})}),(0,I.jsx)(n,{className:G.actions,backIconButtonProps:r,count:l,nextIconButtonProps:Z,onPageChange:v,page:C,rowsPerPage:w,showFirstButton:k,showLastButton:F,getItemAriaLabel:c})]})}))}))},16596:(e,t,a)=>{a.d(t,{U:()=>r,Z:()=>o});var n=a(67794);function r(e){return(0,n.Z)("MuiTablePagination",e)}const o=(0,a(23262).Z)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"])},39004:(e,t,a)=>{a.d(t,{Z:()=>o});a(47313);var n=a(54750),r=a(46417);const o=(0,n.Z)((0,r.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},66152:(e,t,a)=>{a.d(t,{Z:()=>o});a(47313);var n=a(54750),r=a(46417);const o=(0,n.Z)((0,r.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);