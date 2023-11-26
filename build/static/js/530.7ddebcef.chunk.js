"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[530,1630],{88409:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var s=t(58970),i=t(17592),l=t(19860),n=t(61113),c=t(23132),r=t(11755),o=t(47313),d=t(45894),m=t(86588),x=t(61160),h=t(12499),u=t(96351),g=(t(65152),t(57451));t(30146);var p=t(66835),N=t(57861),v=t(98668),j=t(24076),f=t(70941),Z=t(46417);const b=e=>{var a,t,s,i,l,n,c;let r=null===(a=e.eachData)||void 0===a?void 0:a.price_change_percentage_24h;r=null===(t=r)||void 0===t?void 0:t.toFixed(2),r||(r=0);let o=e.eachData.symbol.toUpperCase(),d=null===(s=e.eachData.current_price)||void 0===s?void 0:s.toLocaleString();d||(d=0);let m=null===(i=e.eachData.total_volume)||void 0===i?void 0:i.toLocaleString();m||(m=0);let x=null===(l=e.eachData.market_cap)||void 0===l?void 0:l.toLocaleString();return x||(x=0),(0,Z.jsxs)(j.Z,{className:"border-b-[1px] ".concat(!0===e.themeStatus?"border-grey-200 hover:bg-grey-100":"hover:bg-[#001e3c] border-blue-grey-600"),children:[(0,Z.jsx)(f.Z,{className:"pl-2 py-6 font-medium text-sm",children:e.num}),(0,Z.jsx)(f.Z,{children:(0,Z.jsxs)("div",{className:"flex items-center",children:[(0,Z.jsx)("img",{alt:"coin_icon",className:"w-24 h-18 cursor-pointer mx-8",src:null===(n=e.eachData)||void 0===n?void 0:n.image}),(0,Z.jsx)("span",{className:"ml-3 font-medium text-base hover:underline cursor-pointer first-letter:uppercase",children:null===(c=e.eachData)||void 0===c?void 0:c.id}),(0,Z.jsx)("span",{className:"ml-4 font-medium text-xs text-grey-500 cursor-pointer",children:o})]})}),(0,Z.jsxs)(f.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:["$",d]}),(0,Z.jsxs)(f.Z,{className:"tp-4 md:p-16 ".concat(r>0?"text-green-400":"text-red-500"),children:[r,"%"]}),(0,Z.jsxs)(f.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:["$",m]}),(0,Z.jsxs)(f.Z,{className:"p-4 md:p-16",component:"th",scope:"row",children:["$",x]})]})};var y=t(14532),w=t(92550),P=t(23477);const E=[{id:"driver",align:"center",disablePadding:!1,label:"HASH",sort:!1},{id:"vehisscle",align:"center",disablePadding:!1,label:"COIN",sort:!1},{id:"vehicle",align:"center",disablePadding:!1,label:"PRICE",sort:!1},{id:"emirdfgates",align:"left",disablePadding:!1,label:"TWNTYFR",sort:!1},{id:"emiadrates",align:"left",disablePadding:!1,label:"VOL",sort:!1},{id:"emiraasdtes",align:"left",disablePadding:!1,label:"MARKETCAP",sort:!1}];const A=function(e){return(0,d.I0)(),(0,Z.jsx)(P.Z,{children:(0,Z.jsx)(j.Z,{className:"h-48 sm:h-64",children:E.map(((e,a)=>(0,Z.jsx)(f.Z,{className:"p-4 md:p-16",align:e.align,padding:e.disablePadding?"none":"normal",style:{paddingLeft:"driver"===e.id?22:""},children:u.Z.t("navigation:".concat(e.label))},a)),this)})})},S=e=>{const[a,t]=(0,o.useState)([]),[s,i]=(0,o.useState)([]),[l,n]=(0,o.useState)(!1),[c,r]=(0,o.useState)(null),[d,m]=(0,o.useState)(""),[x,h]=(0,o.useState)(1);(0,o.useEffect)((()=>{!async function(){n(!0),r(null);try{let e="https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat("usd","&order=market_cap_desc&per_page=200&page=1&sparkline=false"),a=await fetch(e);if(!a.ok)throw new Error("Some thing Went Wrong");let s=await a.json();i(s),t(s)}catch(c){r(c.message)}n(!1)}()}),[]),(0,o.useEffect)((()=>{let e=setTimeout((()=>{i(a.filter((e=>e.id.toLowerCase().includes(d)||e.id.toUpperCase().includes(d))))}),600);return()=>{clearTimeout(e)}}),[d,a]);return(0,Z.jsx)("div",{className:"p-8 max-w-[1300px] mx-auto",children:(0,Z.jsxs)(o.Fragment,{children:[(0,Z.jsxs)("div",{className:"overflow-x-auto mb-8",children:[(0,Z.jsx)(w.Z,{className:"flex-grow overflow-x-auto",children:(0,Z.jsxs)(p.Z,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[(0,Z.jsx)(A,{}),!l&&(0,Z.jsx)(N.Z,{children:s.slice(20*(x-1),20*(x-1)+20).map(((a,t)=>(0,Z.jsx)(b,{themeStatus:e.theme,num:t+1+20*(x-1),eachData:a},a.id)))})]})}),l&&(0,Z.jsx)("div",{className:"z-0",children:(0,Z.jsx)(v.Z,{style:{marginTop:"5%",marginLeft:"48%",width:48,height:48,marginBottom:80},color:"secondary"})}),!l&&c&&(0,Z.jsx)("div",{className:"text-center font-medium",children:(0,Z.jsx)("p",{children:c})})]}),(0,Z.jsx)("div",{className:"flex z-0 justify-center",children:(0,Z.jsx)(y.Z,{className:"w-fit",count:+((null===s||void 0===s?void 0:s.length)/20).toFixed(0),variant:"outlined",color:"primary",size:"small",onChange:(e,a)=>{h(a)}})})]})})};t(10259);t(52963);t(1168);t(65476);const k=function(){const[e,a]=(0,o.useState)(!1),[t,s]=(0,o.useState)(""),[i,l]=(0,o.useState)(!0);return(0,Z.jsx)("div",{className:"".concat(!0===i?"":"bg-[#0a1929] text-white"),children:(0,Z.jsx)(S,{themeStatus:i,onsetModal:e=>{a((e=>!e)),s(e||"")}})})};var I=t(11630);const T=(0,i.ZP)("div")((e=>{let{theme:a}=e;return{"& .header":{background:"linear-gradient(to right, ".concat(a.palette.primary.dark," 0%, ").concat(a.palette.primary.main," 100%)"),color:a.palette.getContrastText(a.palette.primary.main),"& .header-icon":{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"}}}}));const C=(0,c.Z)("academyApp",m.Z)((function(e){const a=(0,d.I0)(),t=(0,d.v9)(h.ln),[i,c]=((0,d.v9)(x.us),(0,l.Z)(),(0,o.useState)(null)),[m,p]=(0,o.useState)(""),[N,v]=(0,o.useState)("all");return(0,o.useEffect)((()=>{a((0,x.CP)()),a((0,h.Ho)())}),[a]),(0,o.useEffect)((()=>{t&&c(0===m.length&&"all"===N?t:s.Z.filter(t,(e=>("all"===N||e.category===N)&&e.title.toLowerCase().includes(m.toLowerCase()))))}),[t,m,N]),(0,Z.jsxs)(T,{className:"flex flex-col flex-auto flex-shrink-0 w-full",children:[(0,Z.jsx)("div",{style:{backgroundImage:"url(assets/images/background.jpg)"},className:"header relative overflow-hidden flex flex-shrink-0 items-center justify-center h-200 sm:h-288",children:(0,Z.jsxs)("div",{className:"flex flex-col max-w-2xl mx-auto w-full p-24 sm:p-32",children:[(0,Z.jsx)(r.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:0}},children:(0,Z.jsx)(n.Z,{color:"inherit",className:"text-24 sm:text-44 font-bold tracking-tight text-center",children:u.Z.t("navigation:WELVENAX")})}),(0,Z.jsx)(g.Z,{lgDown:!0,children:(0,Z.jsx)(r.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:(0,Z.jsx)(n.Z,{color:"inherit",className:"text-12 sm:text-14 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center",children:u.Z.t("navigation:VENAXWORLD")})})}),(0,Z.jsx)(r.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.4}},children:(0,Z.jsx)(n.Z,{color:"inherit",className:"text-18 sm:text-20 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center",children:u.Z.t("navigation:WELSUBHEAD")})})]})}),(0,Z.jsxs)("div",{className:"flex flex-col flex-1 max-w-full w-full mx-auto px-8 sm:px-16 py-24",children:[(0,Z.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-between py-24",children:[(0,Z.jsxs)("div",{className:"mx-6",children:[(0,Z.jsx)(n.Z,{color:"inherit",className:"text-18 font-bold sm:text-20 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center",children:u.Z.t("navigation:WELPICHEAD1")}),(0,Z.jsx)(n.Z,{color:"inherit",className:"text-12 sm:text-16 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center",children:u.Z.t("navigation:WELPICHEAD2")})]}),(0,Z.jsx)("img",{className:"w-full",src:"assets/images/header.png"})]}),(0,Z.jsx)("div",{className:"flex sm:flex-row items-center justify-center py-24",children:(0,Z.jsxs)("div",{className:"mx-6",children:[(0,Z.jsx)(n.Z,{color:"inherit",className:"text-24 font-bold sm:text-32 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center",children:u.Z.t("navigation:MARKETCAPWIDG")}),(0,Z.jsx)(n.Z,{color:"inherit",className:"text-18 font-semibold sm:text-24 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center",children:u.Z.t("navigation:MARKETCAP1")}),(0,Z.jsx)(n.Z,{color:"inherit",className:"text-12 sm:text-18 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center",children:u.Z.t("navigation:MARKETCAP2")})]})}),(0,Z.jsx)(k,{}),(0,Z.jsx)(I.default,{})]})]})}))},61160:(e,a,t)=>{t.d(a,{CP:()=>l,ZP:()=>o,us:()=>c});var s=t(80827),i=t(35662);const l=(0,s.hg)("academyApp/categories/getCategories",(async()=>{const e=await i.Z.get("/api/academy-app/categories");return await e.data})),n=(0,s.HF)({}),{selectAll:c,selectById:r}=n.getSelectors((e=>e.academyApp.categories)),o=(0,s.oM)({name:"academyApp/categories",initialState:n.getInitialState({}),reducers:{},extraReducers:{[l.fulfilled]:n.setAll}}).reducer},3563:(e,a,t)=>{t.d(a,{Hf:()=>c,XR:()=>n,ZP:()=>r});var s=t(80827),i=t(35662),l=t(43850);const n=(0,s.hg)("academyApp/course/getCourse",(async e=>{const a=await i.Z.get("/api/academy-app/course",{params:e});return await a.data})),c=(0,s.hg)("academyApp/course/updateCourse",(async(e,a)=>{let{getState:t,dispatch:s}=a;const{id:n}=t().academyApp.course,c=await i.Z.post("api/academy-app/course/update",{id:n,...e}),r=await c.data;return s((0,l.PV)({message:"Course Saved"})),r})),r=(0,s.oM)({name:"academyApp/course",initialState:null,reducers:{},extraReducers:{[n.fulfilled]:(e,a)=>a.payload,[c.fulfilled]:(e,a)=>({...e,...a.payload})}}).reducer},12499:(e,a,t)=>{t.d(a,{Ho:()=>l,ZP:()=>o,ln:()=>c});var s=t(80827),i=t(35662);const l=(0,s.hg)("academyApp/categories/getCourses",(async()=>{const e=await i.Z.get("/api/academy-app/courses");return await e.data})),n=(0,s.HF)({}),{selectAll:c,selectById:r}=n.getSelectors((e=>e.academyApp.courses)),o=(0,s.oM)({name:"academyApp/courses",initialState:n.getInitialState({}),reducers:{},extraReducers:{[l.fulfilled]:n.setAll}}).reducer},86588:(e,a,t)=>{t.d(a,{Z:()=>c});var s=t(80821),i=t(3563),l=t(12499),n=t(61160);const c=(0,s.UY)({categories:n.ZP,courses:l.ZP,course:i.ZP})},11630:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var s=t(24193),i=t(17592),l=t(73428),n=t(93405),c=t(61113),r=t(11755),o=t(96351),d=t(21853),m=t(45894),x=t(65152),h=t(46417);const u=(0,i.ZP)("div")((e=>{let{theme:a}=e;return{"& .PricingStyle2Page-header":{height:600,background:"linear-gradient(to right, ".concat(a.palette.primary.dark," 0%, ").concat(a.palette.primary.main," 100%)"),color:a.palette.primary.contrastText},"& .PricingStyle2Page-badge":{backgroundColor:a.palette.error.main,color:a.palette.getContrastText(a.palette.error.main)}}}));const g=function(){const e=(0,m.v9)((e=>{let{auth:a}=e;return a.sharedData.loggedin})),a={hidden:{opacity:0,y:100},show:{opacity:1,y:0}};function t(){e||x.Z.push("/login")}return(0,h.jsxs)(u,{className:"w-full",children:[(0,h.jsx)("div",{className:"PricingStyle2Page-header flex",children:(0,h.jsx)("div",{className:"p-24 w-full max-w-2xl mx-auto",children:(0,h.jsxs)("div",{className:"text-center my-64 mx-24",children:[(0,h.jsx)(r.E.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.1}},children:(0,h.jsx)(c.Z,{color:"inherit",className:"font-bold text-32 md:text-52",children:o.Z.t("navigation:PRICINGPLAN")})}),(0,h.jsx)(r.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:(0,h.jsx)(c.Z,{color:"inherit",className:"text-16 opacity-75 mt-16 mx-auto max-w-512",children:o.Z.t("navigation:PRICINGPLANTITLE")})})]})})}),(0,h.jsx)("div",{className:"-mt-288",children:(0,h.jsxs)("div",{className:"w-full max-w-2xl mx-auto",children:[(0,h.jsxs)(r.E.div,{variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",className:"flex items-center justify-center flex-wrap",children:[(0,h.jsx)(r.E.div,{variants:a,className:"w-full max-w-320 sm:w-1/4 p-12",children:(0,h.jsxs)(l.Z,{className:"relative rounded-16",children:[(0,h.jsx)("div",{className:"pt-48 pb-24 text-center",children:(0,h.jsx)(c.Z,{variant:"subtitle1",color:"inherit",className:"text-20 font-semibold",children:o.Z.t("navigation:ULTRAPLAN")})}),(0,h.jsxs)(n.Z,{className:"text-center p-0",children:[(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("div",{className:"flex justify-center mb-8",children:(0,h.jsxs)(c.Z,{className:"text-56 mx-4 tracking-tight font-semibold leading-none",children:[o.Z.t("navigation:ULTRAPERCENT"),"%"]})}),(0,h.jsx)(c.Z,{color:"textSecondary",className:"font-medium text-12",children:o.Z.t("navigation:RETURNULTRA")})]}),(0,h.jsxs)("div",{className:"flex flex-col p-32",children:[(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package1")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package2")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package3")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINULTRA1")})}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINULTRA2")})})]})]}),(0,h.jsx)("div",{className:"flex justify-center pb-32",children:(0,h.jsx)(s.Z,{style:{color:d.lj.btnText,backgroundImage:d.lj.btn},variant:"contained",className:"w-128",onClick:()=>t(),children:o.Z.t("navigation:INVESTNOW")})})]})}),(0,h.jsx)(r.E.div,{variants:a,className:"w-full max-w-320 sm:w-1/4 p-12",children:(0,h.jsxs)(l.Z,{className:"relative rounded-16",children:[(0,h.jsx)("div",{className:"pt-48 pb-24 text-center",children:(0,h.jsx)(c.Z,{variant:"subtitle1",color:"inherit",className:"text-20 font-semibold",children:o.Z.t("navigation:PLATINUMPLAN")})}),(0,h.jsxs)(n.Z,{className:"text-center p-0",children:[(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("div",{className:"flex justify-center mb-8",children:(0,h.jsxs)(c.Z,{className:"text-56 mx-4 tracking-tight font-semibold leading-none",children:[o.Z.t("navigation:PLATINUMPERCENT"),"%"]})}),(0,h.jsx)(c.Z,{color:"textSecondary",className:"font-medium text-12",children:o.Z.t("navigation:RETURNPLATINUM")})]}),(0,h.jsxs)("div",{className:"flex flex-col p-32",children:[(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package1")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package2")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package3")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINPALTINUM1")})}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINPALTINUM2")})})]})]}),(0,h.jsx)("div",{className:"flex justify-center pb-32",children:(0,h.jsx)(s.Z,{style:{color:d.lj.btnText,backgroundImage:d.lj.btn},variant:"contained",className:"w-128",onClick:()=>t(),children:o.Z.t("navigation:INVESTNOW")})})]})}),(0,h.jsx)(r.E.div,{variants:a,className:"w-full max-w-320 sm:w-1/4 p-12",children:(0,h.jsxs)(l.Z,{className:"relative rounded-16",children:[(0,h.jsx)("div",{className:"pt-48 pb-24 text-center",children:(0,h.jsx)(c.Z,{variant:"subtitle1",color:"inherit",className:"text-20 font-semibold",children:o.Z.t("navigation:STANDARDPLAN")})}),(0,h.jsxs)(n.Z,{className:"text-center p-0",children:[(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("div",{className:"flex justify-center mb-8",children:(0,h.jsxs)(c.Z,{className:"text-56 mx-4 tracking-tight font-semibold leading-none",children:[o.Z.t("navigation:STANDARDPERCENT"),"%"]})}),(0,h.jsx)(c.Z,{color:"textSecondary",className:"font-medium text-12",children:o.Z.t("navigation:RETURNSTANDARD")})]}),(0,h.jsxs)("div",{className:"flex flex-col p-32",children:[(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package1")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package2")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package3")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINSTANDARD1")})}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINSTANDARD2")})})]})]}),(0,h.jsx)("div",{className:"flex justify-center pb-32",children:(0,h.jsx)(s.Z,{style:{color:d.lj.btnText,backgroundImage:d.lj.btn},variant:"contained",className:"w-128",onClick:()=>t(),children:o.Z.t("navigation:INVESTNOW")})})]})}),(0,h.jsx)(r.E.div,{variants:a,className:"w-full max-w-320 sm:w-1/4 p-12",children:(0,h.jsxs)(l.Z,{className:"relative rounded-16",children:[(0,h.jsx)("div",{className:"pt-48 pb-24 text-center",children:(0,h.jsx)(c.Z,{variant:"subtitle1",color:"inherit",className:"text-20 font-semibold",children:o.Z.t("navigation:BEGINNERPLAN")})}),(0,h.jsxs)(n.Z,{className:"text-center p-0",children:[(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("div",{className:"flex justify-center mb-8",children:(0,h.jsxs)(c.Z,{className:"text-56 mx-4 tracking-tight font-semibold leading-none",children:[o.Z.t("navigation:BEGINNERPERCENT"),"%"]})}),(0,h.jsx)(c.Z,{color:"textSecondary",className:"font-medium text-12",children:o.Z.t("navigation:RETURNBEGINNER")})]}),(0,h.jsxs)("div",{className:"flex flex-col p-32",children:[(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package1")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package2")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:o.Z.t("navigation:Package3")}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINBEGINNER1")})}),(0,h.jsx)(c.Z,{variant:"subtitle1",className:"mb-8",children:(0,h.jsx)("span",{className:"font-semibold mx-4",children:o.Z.t("navigation:MINBEGINNER2")})})]})]}),(0,h.jsx)("div",{className:"flex justify-center pb-32",children:(0,h.jsx)(s.Z,{style:{color:d.lj.btnText,backgroundImage:d.lj.btn},variant:"contained",className:"w-128",onClick:()=>t(),children:o.Z.t("navigation:INVESTNOW")})})]})})]}),(0,h.jsxs)("div",{className:"flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto",children:[(0,h.jsx)(c.Z,{variant:"h4",className:"pb-32 font-medium",children:"Frequently Asked Questions"}),(0,h.jsxs)("div",{className:"flex flex-wrap w-full",children:[(0,h.jsxs)("div",{className:"w-full sm:w-1/2 p-24",children:[(0,h.jsx)(c.Z,{className:"text-20 mb-8",children:"How does free trial work?"}),(0,h.jsx)(c.Z,{className:"text-16",color:"textSecondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum."})]}),(0,h.jsxs)("div",{className:"w-full sm:w-1/2 p-24",children:[(0,h.jsx)(c.Z,{className:"text-20 mb-8",children:"Can I cancel any time?"}),(0,h.jsx)(c.Z,{className:"text-16",color:"textSecondary",children:"Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus. Donec maximus ipsum in malesuada hendrerit."})]}),(0,h.jsxs)("div",{className:"w-full sm:w-1/2 p-24",children:[(0,h.jsx)(c.Z,{className:"text-20 mb-8",children:"What happens after my trial ended?"}),(0,h.jsx)(c.Z,{className:"text-16",color:"textSecondary",children:"Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus. Donec maximus ipsum in malesuada hendrerit."})]}),(0,h.jsxs)("div",{className:"w-full sm:w-1/2 p-24",children:[(0,h.jsx)(c.Z,{className:"text-20 mb-8",children:"Can I have a discount?"}),(0,h.jsx)(c.Z,{className:"text-16",color:"textSecondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum."})]})]})]})]})})]})}}}]);