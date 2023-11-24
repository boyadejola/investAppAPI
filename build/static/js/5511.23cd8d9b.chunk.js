"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[5511],{47619:(e,a,r)=>{r.d(a,{Z:()=>N});var t=r(30168),n=r(92550),o=r(17592),i=r(83061),s=r(47313),d=r(70499),l=r(19860),c=r(36304),p=r(47295),u=r(45894),m=r(46417);const h=function(e){const a=(0,l.Z)(),r=(0,u.v9)((0,p.lK)(a.palette.primary.main));return(0,m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&(0,m.jsx)(c.Z,{theme:r,children:e.header})})};var g=r(46923),x=r(57451),f=r(49920);const b=function(e){const a=(0,l.Z)(),r=(0,u.v9)((0,p.lK)(a.palette.primary.main));return(0,m.jsxs)(m.Fragment,{children:[e.header&&(0,m.jsx)(c.Z,{theme:r,children:(0,m.jsx)("div",{className:(0,i.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&(0,m.jsx)(n.Z,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function C(e,a){const[r,t]=(0,s.useState)(!1);(0,s.useImperativeHandle)(a,(()=>({toggleSidebar:n})));const n=()=>{t(!r)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{lgUp:"permanent"===e.variant,children:(0,m.jsx)(f.Z,{variant:"temporary",anchor:e.position,open:r,onOpen:e=>{},onClose:e=>n(),disableSwipeToOpen:!0,classes:{root:(0,i.default)("FusePageCarded-sidebarWrapper",e.variant),paper:(0,i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:(0,m.jsx)(b,{...e})})}),"permanent"===e.variant&&(0,m.jsx)(x.Z,{lgDown:!0,children:(0,m.jsx)(g.ZP,{variant:"permanent",className:(0,i.default)("FusePageCarded-sidebarWrapper",e.variant),open:r,classes:{paper:(0,i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:(0,m.jsx)(b,{...e})})})]})}const v=(0,s.forwardRef)(C);var P;const j=(0,o.ZP)("div")((e=>{let{theme:a}=e;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:a.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:y,background:"linear-gradient(to right, ".concat(a.palette.primary.dark," 0%, ").concat(a.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0,[a.breakpoints.down("sm")]:{padding:"0 1.6rem"}},"& .FusePageCarded-header":{height:S,minHeight:S,maxHeight:S,display:"flex",color:a.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:a.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:a.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:w,minHeight:w,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(a.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":{[a.breakpoints.up("lg")]:{zIndex:1,position:"relative"}}},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":{[a.breakpoints.up("lg")]:{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}},width:Z,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:y,minHeight:y,color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark,"&.permanent":{[a.breakpoints.up("lg")]:{backgroundColor:"transparent"}}},"& .FusePageCarded-sidebarContent":{display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:a.palette.background.default,color:a.palette.text.primary,[a.breakpoints.up("lg")]:{overflow:"auto",WebkitOverflowScrolling:"touch"}},"& .FusePageCarded-backdrop":{position:"absolute"}}})),Z=240,y=200,w=64,S=y-w,k=(0,s.forwardRef)(((e,a)=>{const r=(0,s.useRef)(null),t=(0,s.useRef)(null),o=(0,s.useRef)(null),l=e.rightSidebarHeader||e.rightSidebarContent,c=e.leftSidebarHeader||e.leftSidebarContent;return(0,s.useImperativeHandle)(a,(()=>({rootRef:o,toggleLeftSidebar:()=>{r.current.toggleSidebar()},toggleRightSidebar:()=>{t.current.toggleSidebar()}}))),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{styles:a=>({"#fuse-main":{height:e.innerScroll&&"100vh"}})}),(0,m.jsxs)(j,{className:(0,i.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:o,children:[(0,m.jsx)("div",{className:"FusePageCarded-topBg"}),(0,m.jsxs)("div",{className:"flex container w-full",children:[c&&(0,m.jsx)(v,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:o}),(0,m.jsxs)("div",{className:(0,i.default)("FusePageCarded-contentWrapper",c&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",l&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[(0,m.jsx)(h,{header:e.header}),(0,m.jsxs)("div",{className:(0,i.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&(0,m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&(0,m.jsx)(n.Z,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),l&&(0,m.jsx)(v,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:t,rootRef:o})]})]})]})}));k.defaultProps={};const N=(0,s.memo)((0,o.ZP)(k)(P||(P=(0,t.Z)([""]))))},32545:(e,a,r)=>{r.r(a),r.d(a,{default:()=>V});var t=r(47619),n=r(23132),o=r(17592),i=r(88701),s=r(24193),d=r(71263),l=r(42461),c=r(82295),p=r(36304),u=r(61113),m=r(11755),h=r(45894),g=r(28303),x=r(47295),f=r(60397),b=r(46417);const C=function(e){const a=(0,h.I0)(),r=(0,h.v9)((e=>{let{eCommerceApp:a}=e;return a.products.searchText})),t=(0,h.v9)(x.rg);return(0,b.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(d.Z,{component:m.E.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"shopping_basket"}),(0,b.jsx)(u.Z,{component:m.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:"Products"})]}),(0,b.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:(0,b.jsx)(p.Z,{theme:t,children:(0,b.jsxs)(c.Z,{component:m.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[(0,b.jsx)(d.Z,{color:"action",children:"search"}),(0,b.jsx)(l.Z,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search"},onChange:e=>a((0,f.c5)(e))})]})})}),(0,b.jsx)(m.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:(0,b.jsxs)(s.Z,{component:g.rU,to:"/apps/e-commerce/products/new",className:"whitespace-nowrap",variant:"contained",color:"secondary",children:[(0,b.jsx)("span",{className:"hidden sm:flex",children:"Add New Product"}),(0,b.jsx)("span",{className:"flex sm:hidden",children:"New"})]})})]})};var v=r(92550),P=r(58970),j=r(44758),Z=r(66835),y=r(57861),w=r(70941),S=r(41493),k=r(24076),N=r(83061),F=r(47313),A=r(63830),I=r(63738),T=r(47131),R=r(74748),H=r(83213),O=r(85582),M=r(51405),z=r(14560),B=r(82558),E=r(49709),W=r(15743),q=r(23477);const D=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"Category",sort:!0},{id:"priceTaxIncl",align:"right",disablePadding:!1,label:"Price",sort:!0},{id:"quantity",align:"right",disablePadding:!1,label:"Quantity",sort:!0},{id:"active",align:"right",disablePadding:!1,label:"Active",sort:!0}];const _=function(e){const{selectedProductIds:a}=e,r=a.length,[t,n]=(0,F.useState)(null),o=(0,h.I0)();function i(){n(null)}return(0,b.jsx)(q.Z,{children:(0,b.jsxs)(k.Z,{className:"h-48 sm:h-64",children:[(0,b.jsxs)(w.Z,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[(0,b.jsx)(j.Z,{indeterminate:r>0&&r<e.rowCount,checked:0!==e.rowCount&&r===e.rowCount,onChange:e.onSelectAllClick}),r>0&&(0,b.jsxs)(W.Z,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:e=>e.palette.background.paper},children:[(0,b.jsx)(T.Z,{"aria-owns":t?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},size:"large",children:(0,b.jsx)(d.Z,{children:"more_horiz"})}),(0,b.jsx)(O.Z,{id:"selectedProductsMenu",anchorEl:t,open:Boolean(t),onClose:i,children:(0,b.jsx)(z.Z,{children:(0,b.jsxs)(M.Z,{onClick:()=>{o((0,f.$0)(a)),e.onMenuItemClick(),i()},children:[(0,b.jsx)(R.Z,{className:"min-w-40",children:(0,b.jsx)(d.Z,{children:"delete"})}),(0,b.jsx)(H.Z,{primary:"Remove"})]})})})]})]}),D.map((a=>{return(0,b.jsx)(w.Z,{className:"p-4 md:p-16",align:a.align,padding:a.disablePadding?"none":"normal",sortDirection:e.order.id===a.id&&e.order.direction,children:a.sort&&(0,b.jsx)(E.Z,{title:"Sort",placement:"right"===a.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,b.jsx)(B.Z,{active:e.order.id===a.id,direction:e.order.direction,onClick:(r=a.id,a=>{e.onRequestSort(a,r)}),className:"font-semibold",children:a.label})})},a.id);var r}),this)]})})};const L=(0,A.EN)((function(e){const a=(0,h.I0)(),r=(0,h.v9)(f.nR),t=(0,h.v9)((e=>{let{eCommerceApp:a}=e;return a.products.searchText})),[n,o]=(0,F.useState)(!0),[i,s]=(0,F.useState)([]),[l,c]=(0,F.useState)(r),[p,g]=(0,F.useState)(0),[x,C]=(0,F.useState)(10),[A,T]=(0,F.useState)({direction:"asc",id:null});return(0,F.useEffect)((()=>{a((0,f.Xp)()).then((()=>o(!1)))}),[a]),(0,F.useEffect)((()=>{0!==t.length?(c(P.Z.filter(r,(e=>e.name.toLowerCase().includes(t.toLowerCase())))),g(0)):c(r)}),[r,t]),n?(0,b.jsx)(I.Z,{}):0===l.length?(0,b.jsx)(m.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,b.jsx)(u.Z,{color:"textSecondary",variant:"h5",children:"There are no products!"})}):(0,b.jsxs)("div",{className:"w-full flex flex-col",children:[(0,b.jsx)(v.Z,{className:"flex-grow overflow-x-auto",children:(0,b.jsxs)(Z.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,b.jsx)(_,{selectedProductIds:i,order:A,onSelectAllClick:function(e){e.target.checked?s(l.map((e=>e.id))):s([])},onRequestSort:function(e,a){const r=a;let t="desc";A.id===a&&"desc"===A.direction&&(t="asc"),T({direction:t,id:r})},rowCount:l.length,onMenuItemClick:function(){s([])}}),(0,b.jsx)(y.Z,{children:P.Z.orderBy(l,[e=>"categories"===A.id?e.categories[0]:e[A.id]],[A.direction]).slice(p*x,p*x+x).map((a=>{const r=-1!==i.indexOf(a.id);return(0,b.jsxs)(k.Z,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:r=>{return t=a,void e.history.push("/apps/e-commerce/products/".concat(t.id,"/").concat(t.handle));var t},children:[(0,b.jsx)(w.Z,{className:"w-40 md:w-64 text-center",padding:"none",children:(0,b.jsx)(j.Z,{checked:r,onClick:e=>e.stopPropagation(),onChange:e=>function(e,a){const r=i.indexOf(a);let t=[];-1===r?t=t.concat(i,a):0===r?t=t.concat(i.slice(1)):r===i.length-1?t=t.concat(i.slice(0,-1)):r>0&&(t=t.concat(i.slice(0,r),i.slice(r+1))),s(t)}(0,a.id)})}),(0,b.jsx)(w.Z,{className:"w-52 px-4 md:px-0",component:"th",scope:"row",padding:"none",children:a.images.length>0&&a.featuredImageId?(0,b.jsx)("img",{className:"w-full block rounded",src:P.Z.find(a.images,{id:a.featuredImageId}).url,alt:a.name}):(0,b.jsx)("img",{className:"w-full block rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:a.name})}),(0,b.jsx)(w.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:a.name}),(0,b.jsx)(w.Z,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:a.categories.join(", ")}),(0,b.jsxs)(w.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[(0,b.jsx)("span",{children:"$"}),a.priceTaxIncl]}),(0,b.jsxs)(w.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[a.quantity,(0,b.jsx)("i",{className:(0,N.default)("inline-block w-8 h-8 rounded mx-8",a.quantity<=5&&"bg-red",a.quantity>5&&a.quantity<=25&&"bg-orange",a.quantity>25&&"bg-green")})]}),(0,b.jsx)(w.Z,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:a.active?(0,b.jsx)(d.Z,{className:"text-green text-20",children:"check_circle"}):(0,b.jsx)(d.Z,{className:"text-red text-20",children:"remove_circle"})})]},a.id)}))})]})}),(0,b.jsx)(S.Z,{className:"flex-shrink-0 border-t-1",component:"div",count:l.length,rowsPerPage:x,page:p,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,a){g(a)},onRowsPerPageChange:function(e){C(e.target.value)}})]})})),U=(0,o.ZP)(t.Z)((e=>{let{theme:a}=e;return{"& .FusePageCarded-header":{minHeight:72,height:72,alignItems:"center",[a.breakpoints.up("sm")]:{minHeight:136,height:136}},"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));const V=(0,n.Z)("eCommerceApp",i.Z)((function(){return(0,b.jsx)(U,{header:(0,b.jsx)(C,{}),content:(0,b.jsx)(L,{}),innerScroll:!0})}))},88701:(e,a,r)=>{r.d(a,{Z:()=>d});var t=r(80821),n=r(83168),o=r(74604),i=r(40471),s=r(60397);const d=(0,t.UY)({products:s.ZP,product:i.ZP,orders:o.ZP,order:n.ZP})},83168:(e,a,r)=>{r.d(a,{H8:()=>d,ZP:()=>l,co:()=>o});var t=r(80827),n=r(35662);const o=(0,t.hg)("eCommerceApp/order/getOrder",(async e=>{const a=await n.Z.get("/api/e-commerce-app/order",{params:e}),r=await a.data;return void 0===r?null:r})),i=(0,t.hg)("eCommerceApp/order/saveOrder",(async e=>{const a=await n.Z.post("/api/e-commerce-app/order/save",e);return await a.data})),s=(0,t.oM)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:()=>null},extraReducers:{[o.fulfilled]:(e,a)=>a.payload,[i.fulfilled]:(e,a)=>a.payload}}),{resetOrder:d}=s.actions,l=s.reducer},74604:(e,a,r)=>{r.d(a,{AU:()=>o,ZP:()=>u,ny:()=>d,uN:()=>p,zH:()=>i});var t=r(80827),n=r(35662);const o=(0,t.hg)("eCommerceApp/orders/getOrders",(async()=>{const e=await n.Z.get("/api/e-commerce-app/orders");return await e.data})),i=(0,t.hg)("eCommerceApp/orders/removeOrders",(async(e,a)=>{let{dispatch:r,getState:t}=a;return await n.Z.post("/api/e-commerce-app/remove-orders",{orderIds:e}),e})),s=(0,t.HF)({}),{selectAll:d,selectById:l}=s.getSelectors((e=>e.eCommerceApp.orders)),c=(0,t.oM)({name:"eCommerceApp/orders",initialState:s.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:(e,a)=>{e.searchText=a.payload},prepare:e=>({payload:e.target.value||""})}},extraReducers:{[o.fulfilled]:s.setAll,[i.fulfilled]:(e,a)=>s.removeMany(e,a.payload)}}),{setOrdersSearchText:p}=c.actions,u=c.reducer},40471:(e,a,r)=>{r.d(a,{AC:()=>c,ZP:()=>u,gg:()=>d,kh:()=>s,ms:()=>p,wv:()=>i});var t=r(80827),n=r(35662),o=r(34814);const i=(0,t.hg)("eCommerceApp/product/getProduct",(async e=>{const a=await n.Z.get("/api/e-commerce-app/product",{params:e}),r=await a.data;return void 0===r?null:r})),s=(0,t.hg)("eCommerceApp/product/removeProduct",(async(e,a)=>{let{dispatch:r,getState:t}=a;const{id:o}=t().eCommerceApp.product;return await n.Z.post("/api/e-commerce-app/remove-product",{id:o}),o})),d=(0,t.hg)("eCommerceApp/product/saveProduct",(async(e,a)=>{let{dispatch:r,getState:t}=a;const{product:o}=t().eCommerceApp,i=await n.Z.post("/api/e-commerce-app/product/save",{...o,...e});return await i.data})),l=(0,t.oM)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:()=>null,newProduct:{reducer:(e,a)=>a.payload,prepare:e=>({payload:{id:o.Z.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}})}},extraReducers:{[i.fulfilled]:(e,a)=>a.payload,[d.fulfilled]:(e,a)=>a.payload,[s.fulfilled]:(e,a)=>null}}),{newProduct:c,resetProduct:p}=l.actions,u=l.reducer},60397:(e,a,r)=>{r.d(a,{$0:()=>i,Xp:()=>o,ZP:()=>u,c5:()=>p,nR:()=>d});var t=r(80827),n=r(35662);const o=(0,t.hg)("eCommerceApp/products/getProducts",(async()=>{const e=await n.Z.get("/api/e-commerce-app/products");return await e.data})),i=(0,t.hg)("eCommerceApp/products/removeProducts",(async(e,a)=>{let{dispatch:r,getState:t}=a;return await n.Z.post("/api/e-commerce-app/remove-products",{productIds:e}),e})),s=(0,t.HF)({}),{selectAll:d,selectById:l}=s.getSelectors((e=>e.eCommerceApp.products)),c=(0,t.oM)({name:"eCommerceApp/products",initialState:s.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:(e,a)=>{e.searchText=a.payload},prepare:e=>({payload:e.target.value||""})}},extraReducers:{[o.fulfilled]:s.setAll,[i.fulfilled]:(e,a)=>s.removeMany(e,a.payload)}}),{setProductsSearchText:p}=c.actions,u=c.reducer},35328:(e,a,r)=>{r.d(a,{Z:()=>o});r(47313);var t=r(54750),n=r(46417);const o=(0,t.Z)((0,n.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},88168:(e,a,r)=>{r.d(a,{Z:()=>o});r(47313);var t=r(54750),n=r(46417);const o=(0,t.Z)((0,n.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},15743:(e,a,r)=>{r.d(a,{Z:()=>t});const t=(0,r(14156).Z)()}}]);