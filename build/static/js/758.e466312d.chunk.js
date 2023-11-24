"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[758],{47619:(e,a,t)=>{t.d(a,{Z:()=>w});var r=t(30168),n=t(92550),i=t(17592),s=t(83061),o=t(47313),l=t(70499),d=t(19860),c=t(36304),p=t(47295),g=t(45894),u=t(46417);const m=function(e){const a=(0,d.Z)(),t=(0,g.v9)((0,p.lK)(a.palette.primary.main));return(0,u.jsx)("div",{className:"FusePageCarded-header",children:e.header&&(0,u.jsx)(c.Z,{theme:t,children:e.header})})};var h=t(46923),x=t(57451),b=t(49920);const f=function(e){const a=(0,d.Z)(),t=(0,g.v9)((0,p.lK)(a.palette.primary.main));return(0,u.jsxs)(u.Fragment,{children:[e.header&&(0,u.jsx)(c.Z,{theme:t,children:(0,u.jsx)("div",{className:(0,s.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&(0,u.jsx)(n.Z,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function v(e,a){const[t,r]=(0,o.useState)(!1);(0,o.useImperativeHandle)(a,(()=>({toggleSidebar:n})));const n=()=>{r(!t)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.Z,{lgUp:"permanent"===e.variant,children:(0,u.jsx)(b.Z,{variant:"temporary",anchor:e.position,open:t,onOpen:e=>{},onClose:e=>n(),disableSwipeToOpen:!0,classes:{root:(0,s.default)("FusePageCarded-sidebarWrapper",e.variant),paper:(0,s.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,u.jsx)(f,{...e})})}),"permanent"===e.variant&&(0,u.jsx)(x.Z,{lgDown:!0,children:(0,u.jsx)(h.ZP,{variant:"permanent",className:(0,s.default)("FusePageCarded-sidebarWrapper",e.variant),open:t,classes:{paper:(0,s.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:(0,u.jsx)(f,{...e})})})]})}const S=(0,o.forwardRef)(v);var j;const C=(0,i.ZP)("div")((e=>{let{theme:a}=e;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:a.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:Z,background:"linear-gradient(to right, ".concat(a.palette.primary.dark," 0%, ").concat(a.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0,[a.breakpoints.down("sm")]:{padding:"0 1.6rem"}},"& .FusePageCarded-header":{height:F,minHeight:F,maxHeight:F,display:"flex",color:a.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:a.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:a.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(a.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":{[a.breakpoints.up("lg")]:{zIndex:1,position:"relative"}}},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":{[a.breakpoints.up("lg")]:{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}},width:P,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:Z,minHeight:Z,color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark,"&.permanent":{[a.breakpoints.up("lg")]:{backgroundColor:"transparent"}}},"& .FusePageCarded-sidebarContent":{display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:a.palette.background.default,color:a.palette.text.primary,[a.breakpoints.up("lg")]:{overflow:"auto",WebkitOverflowScrolling:"touch"}},"& .FusePageCarded-backdrop":{position:"absolute"}}})),P=240,Z=200,N=64,F=Z-N,y=(0,o.forwardRef)(((e,a)=>{const t=(0,o.useRef)(null),r=(0,o.useRef)(null),i=(0,o.useRef)(null),d=e.rightSidebarHeader||e.rightSidebarContent,c=e.leftSidebarHeader||e.leftSidebarContent;return(0,o.useImperativeHandle)(a,(()=>({rootRef:i,toggleLeftSidebar:()=>{t.current.toggleSidebar()},toggleRightSidebar:()=>{r.current.toggleSidebar()}}))),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{styles:a=>({"#fuse-main":{height:e.innerScroll&&"100vh"}})}),(0,u.jsxs)(C,{className:(0,s.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:i,children:[(0,u.jsx)("div",{className:"FusePageCarded-topBg"}),(0,u.jsxs)("div",{className:"flex container w-full",children:[c&&(0,u.jsx)(S,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:t,rootRef:i}),(0,u.jsxs)("div",{className:(0,s.default)("FusePageCarded-contentWrapper",c&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[(0,u.jsx)(m,{header:e.header}),(0,u.jsxs)("div",{className:(0,s.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&(0,u.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&(0,u.jsx)(n.Z,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),d&&(0,u.jsx)(S,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:i})]})]})]})}));y.defaultProps={};const w=(0,o.memo)((0,i.ZP)(y)(j||(j=(0,r.Z)([""]))))},68702:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(61113),n=t(11755),i=t(96351),s=t(46417);const o=function(){return(0,s.jsx)("div",{className:"flex flex-col flex-1 items-center justify-center p-16",children:(0,s.jsxs)("div",{className:"max-w-512 text-center",children:[(0,s.jsx)(n.E.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1,transition:{delay:.1}},children:(0,s.jsx)(r.Z,{variant:"h1",color:"inherit",className:"font-medium mb-16",children:"401"})}),(0,s.jsx)(n.E.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:(0,s.jsx)(r.Z,{variant:"h5",color:"textSecondary",className:"mb-16 font-normal",children:i.Z.t("navigation:NOTALLOW")})})]})})}},80758:(e,a,t)=>{t.r(a),t.d(a,{default:()=>E});var r=t(47619),n=(t(23132),t(47313)),i=t(17592),s=t(71263),o=t(61113),l=t(11755),d=t(45894),c=t(47295),p=t(96351),g=(t(84946),t(70816)),u=t.n(g),m=t(92550),h=t(24813),x=t(19860),b=t(46417);const f=function(e){const a=(0,x.Z)(),[t,r]=((0,d.I0)(),(0,d.v9)(c.rg),(0,h.Z)(a.breakpoints.down("lg")),n.useState(u()().subtract(6,"months"))),[i,g]=n.useState(u()()),[m,f]=n.useState(""),[v,S]=n.useState(""),[j,C]=n.useState(""),[P,Z]=n.useState("");return(0,b.jsx)("div",{className:"flex flex-1 w-full items-center justify-between",children:(0,b.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},children:(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(s.Z,{component:l.E.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-54 md:text-72",children:"family_restroom"}),(0,b.jsx)("div",{className:"flex flex-col items-center sm:items-start mb-16 sm:mb-0",children:(0,b.jsx)(o.Z,{component:l.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:p.Z.t("navigation:REFERRALSTATS")})})]})})})};t(58970);var v=t(66835),S=t(57861),j=t(70941),C=t(41493),P=t(24076),Z=t(63830),N=t(63738),F=t(23477);const y=[{id:"driver",align:"center",disablePadding:!1,label:"DATE",sort:!1},{id:"vehisscle",align:"center",disablePadding:!1,label:"COMMISSIONVIA",sort:!1},{id:"vehicle",align:"center",disablePadding:!1,label:"DESC",sort:!1},{id:"emirates",align:"left",disablePadding:!1,label:"LEVELCOMMISION",sort:!1},{id:"cats",align:"center",disablePadding:!1,label:"AMOUNT",sort:!1},{id:"sscats",align:"center",disablePadding:!1,label:"AFTERBAL",sort:!1}];const w=function(e){return(0,d.I0)(),(0,b.jsx)(F.Z,{children:(0,b.jsx)(P.Z,{className:"h-48 sm:h-64",children:y.map(((e,a)=>(0,b.jsx)(j.Z,{className:"p-4 md:p-16",align:e.align,padding:e.disablePadding?"none":"normal",style:{paddingLeft:"driver"==e.id?22:""},children:p.Z.t("navigation:".concat(e.label))},a)),this)})})};var k=t(65152),I=t(47131);const H=(0,Z.EN)((function(e){const a=(0,d.I0)(),t=[],[r,i]=((0,d.v9)((e=>{let{i18n:a}=e;return a.language?a.language:""})),(0,n.useState)([])),[o,l]=(0,n.useState)({}),[c,p]=(0,n.useState)({}),[g,h]=(0,n.useState)(!1),[x,f]=(0,n.useState)(!1),[Z,N]=(0,n.useState)(0),[F,y]=(0,n.useState)(10),[H,T]=(0,n.useState)({direction:"asc",id:null});return(0,n.useEffect)((()=>{}),[]),(0,b.jsxs)("div",{className:"w-full flex flex-col",children:[(0,b.jsx)(m.Z,{className:"flex-grow overflow-x-auto",children:(0,b.jsxs)(v.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,b.jsx)(w,{}),(0,b.jsx)(S.Z,{children:t&&t.length>0?t.map(((e,t)=>(0,b.jsxs)(P.Z,{className:"h-72 cursor-pointer",hover:!0,children:[(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",style:{paddingLeft:22},children:(0,b.jsx)("strong",{onClick:()=>function(e){const t=e&&e.name?e.name:"";t&&(a(changeLogItemName(t)),k.Z.push({pathname:"/apps/jic/logs"}))}(e),style:{cursor:"pointer",color:"linear-gradient(to right, #194a4f 0%, #24585d 100%)",textDecoration:"underline"},children:e.name?e.name:""})}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.original_storenumber?e.original_storenumber:""}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.present_storenumber?e.present_storenumber:""}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:e.status?e.status:""}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:e.rentee?e.rentee:""}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.SerialNo?e.SerialNo:""}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.createdAt?u()(e.createdAt).format(DateTimeFormat):"--"}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:e.updatedAt?u()(e.updatedAt).format(DateTimeFormat):"--"}),(0,b.jsx)(j.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"center",children:(0,b.jsx)(I.Z,{onClick:()=>(e=>{p(g?{}:e),f(!x)})(e),color:"inherit",children:(0,b.jsx)(s.Z,{color:"inherit",children:"edit"})})})]},t))):(0,b.jsx)(b.Fragment,{})})]})}),(0,b.jsx)(C.Z,{className:"flex-shrink-0 border-t-1",component:"div",count:100,rowsPerPage:F,page:Z,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){a(changeItemPagination({pageNo:t+1,pageSize:F})),N(t)},onRowsPerPageChange:function(e){const t={pageNo:Z+1,pageSize:e.target.value};a(changeItemPagination(t)),y(e.target.value)}})]})}));var T=t(68702);const R=(0,i.ZP)(r.Z)((e=>{let{theme:a}=e;return{"& .FusePageCarded-header":{minHeight:72,height:72,alignItems:"center",[a.breakpoints.up("sm")]:{minHeight:136,height:136},[a.breakpoints.down("lg")]:{minHeight:222,height:222}},"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));const E=function(){(0,d.I0)(),(0,d.v9)((e=>{let{auth:a}=e;return a.user.roleid?a.user.roleid:0}));const[e,a]=n.useState(!0),[t,r]=n.useState(!1);return t?(0,b.jsx)(N.Z,{}):e?(0,b.jsx)(R,{header:(0,b.jsx)(f,{}),content:(0,b.jsx)(H,{}),innerScroll:!0}):(0,b.jsx)(T.Z,{})}}}]);