"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[726],{47619:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(30168),n=r(92550),o=r(17592),i=r(83061),d=r(47313),l=r(70499),s=r(19860),c=r(36304),p=r(47295),u=r(45894),m=r(46417);const h=function(e){const t=(0,s.Z)(),r=(0,u.v9)((0,p.lK)(t.palette.primary.main));return(0,m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&(0,m.jsx)(c.Z,{theme:r,children:e.header})})};var g=r(46923),x=r(57451),f=r(49920);const b=function(e){const t=(0,s.Z)(),r=(0,u.v9)((0,p.lK)(t.palette.primary.main));return(0,m.jsxs)(m.Fragment,{children:[e.header&&(0,m.jsx)(c.Z,{theme:r,children:(0,m.jsx)("div",{className:(0,i.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&(0,m.jsx)(n.Z,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function C(e,t){const[r,a]=(0,d.useState)(!1);(0,d.useImperativeHandle)(t,(()=>({toggleSidebar:n})));const n=()=>{a(!r)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{lgUp:"permanent"===e.variant,children:(0,m.jsx)(f.Z,{variant:"temporary",anchor:e.position,open:r,onOpen:e=>{},onClose:e=>n(),disableSwipeToOpen:!0,classes:{root:(0,i.default)("FusePageCarded-sidebarWrapper",e.variant),paper:(0,i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,m.jsx)(b,{...e})})}),"permanent"===e.variant&&(0,m.jsx)(x.Z,{lgDown:!0,children:(0,m.jsx)(g.ZP,{variant:"permanent",className:(0,i.default)("FusePageCarded-sidebarWrapper",e.variant),open:r,classes:{paper:(0,i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:(0,m.jsx)(b,{...e})})})]})}const v=(0,d.forwardRef)(C);var P;const w=(0,o.ZP)("div")((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:Z,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0,[t.breakpoints.down("sm")]:{padding:"0 1.6rem"}},"& .FusePageCarded-header":{height:j,minHeight:j,maxHeight:j,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:S,minHeight:S,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":{[t.breakpoints.up("lg")]:{zIndex:1,position:"relative"}}},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":{[t.breakpoints.up("lg")]:{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}},width:y,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:Z,minHeight:Z,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":{[t.breakpoints.up("lg")]:{backgroundColor:"transparent"}}},"& .FusePageCarded-sidebarContent":{display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary,[t.breakpoints.up("lg")]:{overflow:"auto",WebkitOverflowScrolling:"touch"}},"& .FusePageCarded-backdrop":{position:"absolute"}}})),y=240,Z=200,S=64,j=Z-S,k=(0,d.forwardRef)(((e,t)=>{const r=(0,d.useRef)(null),a=(0,d.useRef)(null),o=(0,d.useRef)(null),s=e.rightSidebarHeader||e.rightSidebarContent,c=e.leftSidebarHeader||e.leftSidebarContent;return(0,d.useImperativeHandle)(t,(()=>({rootRef:o,toggleLeftSidebar:()=>{r.current.toggleSidebar()},toggleRightSidebar:()=>{a.current.toggleSidebar()}}))),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Z,{styles:t=>({"#fuse-main":{height:e.innerScroll&&"100vh"}})}),(0,m.jsxs)(w,{className:(0,i.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:o,children:[(0,m.jsx)("div",{className:"FusePageCarded-topBg"}),(0,m.jsxs)("div",{className:"flex container w-full",children:[c&&(0,m.jsx)(v,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:o}),(0,m.jsxs)("div",{className:(0,i.default)("FusePageCarded-contentWrapper",c&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[(0,m.jsx)(h,{header:e.header}),(0,m.jsxs)("div",{className:(0,i.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&(0,m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&(0,m.jsx)(n.Z,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),s&&(0,m.jsx)(v,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:o})]})]})]})}));k.defaultProps={};const N=(0,d.memo)((0,o.ZP)(k)(P||(P=(0,a.Z)([""]))))},57608:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(58970),n=r(83061),o=r(46417);const i=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];const d=function(e){return(0,o.jsx)("div",{className:(0,n.default)("inline text-12 font-semibold py-4 px-12 rounded-full truncate",a.Z.find(i,{name:e.name}).color),children:e.name})}},70726:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var a=r(47619),n=r(23132),o=r(17592),i=r(88701),d=r(71263),l=r(42461),s=r(82295),c=r(36304),p=r(61113),u=r(11755),m=r(45894),h=r(47295),g=r(74604),x=r(46417);const f=function(e){const t=(0,m.I0)(),r=(0,m.v9)((e=>{let{eCommerceApp:t}=e;return t.orders.searchText})),a=(0,m.v9)(h.rg);return(0,x.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)(d.Z,{component:u.E.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"receipt"}),(0,x.jsx)(p.Z,{component:u.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"Orders"})]}),(0,x.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:(0,x.jsx)(c.Z,{theme:a,children:(0,x.jsxs)(s.Z,{component:u.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[(0,x.jsx)(d.Z,{color:"action",children:"search"}),(0,x.jsx)(l.Z,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search"},onChange:e=>t((0,g.uN)(e))})]})})})]})};var b=r(92550),C=r(34814),v=r(58970),P=r(44758),w=r(66835),y=r(57861),Z=r(70941),S=r(41493),j=r(24076),k=r(47313),N=r(63830),F=r(63738),A=r(57608),I=r(47131),R=r(74748),T=r(83213),H=r(85582),O=r(51405),B=r(14560),M=r(82558),D=r(49709),W=r(15743),z=r(23477);const E=[{id:"id",align:"left",disablePadding:!1,label:"ID",sort:!0},{id:"reference",align:"left",disablePadding:!1,label:"Reference",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}];const U=function(e){const{selectedOrderIds:t}=e,r=t.length,[a,n]=(0,k.useState)(null),o=(0,m.I0)();function i(){n(null)}return(0,x.jsx)(z.Z,{children:(0,x.jsxs)(j.Z,{className:"h-48 sm:h-64",children:[(0,x.jsxs)(Z.Z,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,x.jsx)(P.Z,{indeterminate:r>0&&r<e.rowCount,checked:0!==e.rowCount&&r===e.rowCount,onChange:e.onSelectAllClick}),r>0&&(0,x.jsxs)(W.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:e=>e.palette.background.paper},children:[(0,x.jsx)(I.Z,{"aria-owns":a?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},size:"large",children:(0,x.jsx)(d.Z,{children:"more_horiz"})}),(0,x.jsx)(H.Z,{id:"selectedOrdersMenu",anchorEl:a,open:Boolean(a),onClose:i,children:(0,x.jsx)(B.Z,{children:(0,x.jsxs)(O.Z,{onClick:()=>{o((0,g.zH)(t)),e.onMenuItemClick(),i()},children:[(0,x.jsx)(R.Z,{className:"min-w-40",children:(0,x.jsx)(d.Z,{children:"delete"})}),(0,x.jsx)(T.Z,{primary:"Remove"})]})})})]})]}),E.map((t=>{return(0,x.jsx)(Z.Z,{className:"p-4 md:p-16",align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&(0,x.jsx)(D.Z,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,x.jsx)(M.Z,{active:e.order.id===t.id,direction:e.order.direction,onClick:(r=t.id,t=>{e.onRequestSort(t,r)}),className:"font-semibold",children:t.label})})},t.id);var r}),this)]})})};const V=(0,N.EN)((function(e){const t=(0,m.I0)(),r=(0,m.v9)(g.ny),a=(0,m.v9)((e=>{let{eCommerceApp:t}=e;return t.orders.searchText})),[n,o]=(0,k.useState)(!0),[i,d]=(0,k.useState)([]),[l,s]=(0,k.useState)(r),[c,h]=(0,k.useState)(0),[f,N]=(0,k.useState)(10),[I,R]=(0,k.useState)({direction:"asc",id:null});return(0,k.useEffect)((()=>{t((0,g.AU)()).then((()=>o(!1)))}),[t]),(0,k.useEffect)((()=>{0!==a.length?(s(C.Z.filterArrayByString(r,a)),h(0)):s(r)}),[r,a]),n?(0,x.jsx)(F.Z,{}):0===l.length?(0,x.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,x.jsx)(p.Z,{color:"textSecondary",variant:"h5",children:"There are no orders!"})}):(0,x.jsxs)("div",{className:"w-full flex flex-col",children:[(0,x.jsx)(b.Z,{className:"flex-grow overflow-x-auto",children:(0,x.jsxs)(w.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,x.jsx)(U,{selectedOrderIds:i,order:I,onSelectAllClick:function(e){e.target.checked?d(l.map((e=>e.id))):d([])},onRequestSort:function(e,t){const r=t;let a="desc";I.id===t&&"desc"===I.direction&&(a="asc"),R({direction:a,id:r})},rowCount:l.length,onMenuItemClick:function(){d([])}}),(0,x.jsx)(y.Z,{children:v.Z.orderBy(l,[e=>{switch(I.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[I.id]}}],[I.direction]).slice(c*f,c*f+f).map((t=>{const r=-1!==i.indexOf(t.id);return(0,x.jsxs)(j.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:r=>{return a=t,void e.history.push("/apps/e-commerce/orders/".concat(a.id));var a},children:[(0,x.jsx)(Z.Z,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,x.jsx)(P.Z,{checked:r,onClick:e=>e.stopPropagation(),onChange:e=>function(e,t){const r=i.indexOf(t);let a=[];-1===r?a=a.concat(i,t):0===r?a=a.concat(i.slice(1)):r===i.length-1?a=a.concat(i.slice(0,-1)):r>0&&(a=a.concat(i.slice(0,r),i.slice(r+1))),d(a)}(0,t.id)})}),(0,x.jsx)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.id}),(0,x.jsx)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.reference}),(0,x.jsx)(Z.Z,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:"".concat(t.customer.firstName," ").concat(t.customer.lastName)}),(0,x.jsxs)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[(0,x.jsx)("span",{children:"$"}),t.total]}),(0,x.jsx)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.payment.method}),(0,x.jsx)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:(0,x.jsx)(A.Z,{name:t.status[0].name})}),(0,x.jsx)(Z.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.date})]},t.id)}))})]})}),(0,x.jsx)(S.Z,{className:"flex-shrink-0 border-t-1",component:"div",count:l.length,rowsPerPage:f,page:c,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){h(t)},onRowsPerPageChange:function(e){N(e.target.value)}})]})})),_=(0,o.ZP)(a.Z)((e=>{let{theme:t}=e;return{"& .FusePageCarded-header":{minHeight:72,height:72,alignItems:"center",[t.breakpoints.up("sm")]:{minHeight:136,height:136}},"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));const q=(0,n.Z)("eCommerceApp",i.Z)((function(){return(0,x.jsx)(_,{header:(0,x.jsx)(f,{}),content:(0,x.jsx)(V,{}),innerScroll:!0})}))},88701:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(80821),n=r(83168),o=r(74604),i=r(40471),d=r(60397);const l=(0,a.UY)({products:d.ZP,product:i.ZP,orders:o.ZP,order:n.ZP})},83168:(e,t,r)=>{r.d(t,{H8:()=>l,ZP:()=>s,co:()=>o});var a=r(80827),n=r(35662);const o=(0,a.hg)("eCommerceApp/order/getOrder",(async e=>{const t=await n.Z.get("/api/e-commerce-app/order",{params:e}),r=await t.data;return void 0===r?null:r})),i=(0,a.hg)("eCommerceApp/order/saveOrder",(async e=>{const t=await n.Z.post("/api/e-commerce-app/order/save",e);return await t.data})),d=(0,a.oM)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:()=>null},extraReducers:{[o.fulfilled]:(e,t)=>t.payload,[i.fulfilled]:(e,t)=>t.payload}}),{resetOrder:l}=d.actions,s=d.reducer},74604:(e,t,r)=>{r.d(t,{AU:()=>o,ZP:()=>u,ny:()=>l,uN:()=>p,zH:()=>i});var a=r(80827),n=r(35662);const o=(0,a.hg)("eCommerceApp/orders/getOrders",(async()=>{const e=await n.Z.get("/api/e-commerce-app/orders");return await e.data})),i=(0,a.hg)("eCommerceApp/orders/removeOrders",(async(e,t)=>{let{dispatch:r,getState:a}=t;return await n.Z.post("/api/e-commerce-app/remove-orders",{orderIds:e}),e})),d=(0,a.HF)({}),{selectAll:l,selectById:s}=d.getSelectors((e=>e.eCommerceApp.orders)),c=(0,a.oM)({name:"eCommerceApp/orders",initialState:d.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:(e,t)=>{e.searchText=t.payload},prepare:e=>({payload:e.target.value||""})}},extraReducers:{[o.fulfilled]:d.setAll,[i.fulfilled]:(e,t)=>d.removeMany(e,t.payload)}}),{setOrdersSearchText:p}=c.actions,u=c.reducer},40471:(e,t,r)=>{r.d(t,{AC:()=>c,ZP:()=>u,gg:()=>l,kh:()=>d,ms:()=>p,wv:()=>i});var a=r(80827),n=r(35662),o=r(34814);const i=(0,a.hg)("eCommerceApp/product/getProduct",(async e=>{const t=await n.Z.get("/api/e-commerce-app/product",{params:e}),r=await t.data;return void 0===r?null:r})),d=(0,a.hg)("eCommerceApp/product/removeProduct",(async(e,t)=>{let{dispatch:r,getState:a}=t;const{id:o}=a().eCommerceApp.product;return await n.Z.post("/api/e-commerce-app/remove-product",{id:o}),o})),l=(0,a.hg)("eCommerceApp/product/saveProduct",(async(e,t)=>{let{dispatch:r,getState:a}=t;const{product:o}=a().eCommerceApp,i=await n.Z.post("/api/e-commerce-app/product/save",{...o,...e});return await i.data})),s=(0,a.oM)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:()=>null,newProduct:{reducer:(e,t)=>t.payload,prepare:e=>({payload:{id:o.Z.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}})}},extraReducers:{[i.fulfilled]:(e,t)=>t.payload,[l.fulfilled]:(e,t)=>t.payload,[d.fulfilled]:(e,t)=>null}}),{newProduct:c,resetProduct:p}=s.actions,u=s.reducer},60397:(e,t,r)=>{r.d(t,{$0:()=>i,Xp:()=>o,ZP:()=>u,c5:()=>p,nR:()=>l});var a=r(80827),n=r(35662);const o=(0,a.hg)("eCommerceApp/products/getProducts",(async()=>{const e=await n.Z.get("/api/e-commerce-app/products");return await e.data})),i=(0,a.hg)("eCommerceApp/products/removeProducts",(async(e,t)=>{let{dispatch:r,getState:a}=t;return await n.Z.post("/api/e-commerce-app/remove-products",{productIds:e}),e})),d=(0,a.HF)({}),{selectAll:l,selectById:s}=d.getSelectors((e=>e.eCommerceApp.products)),c=(0,a.oM)({name:"eCommerceApp/products",initialState:d.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:(e,t)=>{e.searchText=t.payload},prepare:e=>({payload:e.target.value||""})}},extraReducers:{[o.fulfilled]:d.setAll,[i.fulfilled]:(e,t)=>d.removeMany(e,t.payload)}}),{setProductsSearchText:p}=c.actions,u=c.reducer},15743:(e,t,r)=>{r.d(t,{Z:()=>a});const a=(0,r(14156).Z)()}}]);