"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[2911],{44269:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(1483),s=r(75908),o=r(73428),a=r(71263),i=r(65280),c=r(5297),l=r(83061),m=r(47313),u=r(1168),d=r(10223),p=r(21871),f=r(95682),x=r(35301),h=r(19860),g=r(17592),v=r(70499),Z=r(46417);function j(e){const{children:n,document:r}=e,t=(0,h.Z)();m.useEffect((()=>{r.body.dir=t.direction}),[r,t.direction]);const s=m.useMemo((()=>(0,p.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:r.head,stylisPlugins:"rtl"===t.direction?[d.Z]:[]})),[r,t.direction]),o=m.useCallback((()=>r.defaultView),[r]);return(0,Z.jsx)(x.LC,{target:r.head,stylisPlugins:"rtl"===t.direction?[d.Z]:[],children:(0,Z.jsxs)(f.C,{value:s,children:[(0,Z.jsx)(v.Z,{styles:()=>({html:{fontSize:"62.5%"}})}),m.cloneElement(n,{window:o})]})})}const b=(0,g.ZP)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function y(e){var n;const{children:r,name:t,...s}=e,o="".concat(t," demo"),a=m.useRef(null),[i,c]=m.useReducer((()=>!0),!1);m.useEffect((()=>{const e=a.current.contentDocument;null==e||"complete"!==e.readyState||i||c()}),[i]);const l=null===(n=a.current)||void 0===n?void 0:n.contentDocument;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b,{onLoad:c,ref:a,title:o,...s}),!1!==i?u.createPortal((0,Z.jsx)(j,{document:l,children:r}),l.body):null]})}const P=m.memo(y);function C(e){const[n,r]=(0,m.useState)(e.currentTabIndex),{component:u,raw:d,iframe:p,className:f}=e;return(0,Z.jsxs)(o.Z,{className:(0,l.default)(f,"shadow"),children:[(0,Z.jsx)(s.Z,{position:"static",color:"default",className:"shadow-0",children:(0,Z.jsxs)(c.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){r(n)},children:[u&&(0,Z.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(a.Z,{children:"remove_red_eye"})}),d&&(0,Z.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(a.Z,{children:"code"})})]})}),(0,Z.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,Z.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:u&&(p?(0,Z.jsx)(P,{children:(0,Z.jsx)(u,{})}):(0,Z.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,Z.jsx)(u,{})}))}),(0,Z.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:d&&(0,Z.jsx)("div",{className:"flex flex-1",children:(0,Z.jsx)(t.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:d.default})})})]})]})}C.defaultProps={currentTabIndex:0};const w=C},69979:(e,n,r)=>{r.d(n,{Z:()=>a});r(47313);var t=r(35898),s=r(98668),o=r(46417);function a(){return(0,o.jsxs)(t.Z,{sx:{color:"grey.500"},spacing:2,direction:"row",children:[(0,o.jsx)(s.Z,{color:"secondary"}),(0,o.jsx)(s.Z,{color:"success"}),(0,o.jsx)(s.Z,{color:"inherit"})]})}},78208:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(47313),s=r(35898),o=r(98668),a=r(46417);function i(){const[e,n]=t.useState(0);return t.useEffect((()=>{const e=setInterval((()=>{n((e=>e>=100?0:e+10))}),800);return()=>{clearInterval(e)}}),[]),(0,a.jsxs)(s.Z,{spacing:2,direction:"row",children:[(0,a.jsx)(o.Z,{variant:"determinate",value:25}),(0,a.jsx)(o.Z,{variant:"determinate",value:50}),(0,a.jsx)(o.Z,{variant:"determinate",value:75}),(0,a.jsx)(o.Z,{variant:"determinate",value:100}),(0,a.jsx)(o.Z,{variant:"determinate",value:e})]})}},50385:(e,n,r)=>{r.d(n,{Z:()=>a});r(47313);var t=r(98668),s=r(9506),o=r(46417);function a(){return(0,o.jsx)(s.Z,{sx:{display:"flex"},children:(0,o.jsx)(t.Z,{})})}},76497:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(47313),s=r(9506),o=r(98668),a=r(23837),i=r(24193),c=r(42420),l=r(68728),m=r(83121),u=r(46417);function d(){const[e,n]=t.useState(!1),[r,d]=t.useState(!1),p=t.useRef(),f={...r&&{bgcolor:a.Z[500],"&:hover":{bgcolor:a.Z[700]}}};t.useEffect((()=>()=>{clearTimeout(p.current)}),[]);const x=()=>{e||(d(!1),n(!0),p.current=window.setTimeout((()=>{d(!0),n(!1)}),2e3))};return(0,u.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,u.jsxs)(s.Z,{sx:{m:1,position:"relative"},children:[(0,u.jsx)(c.Z,{"aria-label":"save",color:"primary",sx:f,onClick:x,children:r?(0,u.jsx)(l.Z,{}):(0,u.jsx)(m.Z,{})}),e&&(0,u.jsx)(o.Z,{size:68,sx:{color:a.Z[500],position:"absolute",top:-6,left:-6,zIndex:1}})]}),(0,u.jsxs)(s.Z,{sx:{m:1,position:"relative"},children:[(0,u.jsx)(i.Z,{variant:"contained",sx:f,disabled:e,onClick:x,children:"Accept terms"}),e&&(0,u.jsx)(o.Z,{size:24,sx:{color:a.Z[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}})]})]})}},13318:(e,n,r)=>{r.d(n,{Z:()=>o});r(47313);var t=r(98668),s=r(46417);function o(){return(0,s.jsx)(t.Z,{disableShrink:!0})}},69384:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(47313),s=r(98668),o=r(61113),a=r(9506),i=r(46417);function c(e){return(0,i.jsxs)(a.Z,{sx:{position:"relative",display:"inline-flex"},children:[(0,i.jsx)(s.Z,{variant:"determinate",...e}),(0,i.jsx)(a.Z,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)(o.Z,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function l(){const[e,n]=t.useState(10);return t.useEffect((()=>{const e=setInterval((()=>{n((e=>e>=100?0:e+10))}),800);return()=>{clearInterval(e)}}),[]),(0,i.jsx)(c,{value:e})}},18459:(e,n,r)=>{r.d(n,{Z:()=>d});r(47313);var t=r(17592),s=r(9506),o=r(98668),a=r(94808),i=r(94149),c=r(66598),l=r(46417);const m=(0,t.ZP)(i.Z)((e=>{let{theme:n}=e;return{height:10,borderRadius:5,["&.".concat(c.Z.colorPrimary)]:{backgroundColor:n.palette.grey["light"===n.palette.mode?200:800]},["& .".concat(c.Z.bar)]:{borderRadius:5,backgroundColor:"light"===n.palette.mode?"#1a90ff":"#308fe8"}}}));function u(e){return(0,l.jsxs)(s.Z,{sx:{position:"relative"},children:[(0,l.jsx)(o.Z,{variant:"determinate",sx:{color:e=>e.palette.grey["light"===e.palette.mode?200:800]},size:40,thickness:4,...e,value:100}),(0,l.jsx)(o.Z,{variant:"indeterminate",disableShrink:!0,sx:{color:e=>"light"===e.palette.mode?"#1a90ff":"#308fe8",animationDuration:"550ms",position:"absolute",left:0,["& .".concat(a.Z.circle)]:{strokeLinecap:"round"}},size:40,thickness:4,...e})]})}function d(){return(0,l.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,l.jsx)(u,{}),(0,l.jsx)("br",{}),(0,l.jsx)(m,{variant:"determinate",value:50})]})}},48453:(e,n,r)=>{r.d(n,{Z:()=>m});var t=r(47313),s=r(9506),o=r(32530),a=r(24193),i=r(98668),c=r(61113),l=r(46417);function m(){const[e,n]=t.useState(!1),[r,m]=t.useState("idle"),u=t.useRef();t.useEffect((()=>()=>{clearTimeout(u.current)}),[]);return(0,l.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)(s.Z,{sx:{height:40},children:(0,l.jsx)(o.Z,{in:e,style:{transitionDelay:e?"800ms":"0ms"},unmountOnExit:!0,children:(0,l.jsx)(i.Z,{})})}),(0,l.jsx)(a.Z,{onClick:()=>{n((e=>!e))},sx:{m:2},children:e?"Stop loading":"Loading"}),(0,l.jsx)(s.Z,{sx:{height:40},children:"success"===r?(0,l.jsx)(c.Z,{children:"Success!"}):(0,l.jsx)(o.Z,{in:"progress"===r,style:{transitionDelay:"progress"===r?"800ms":"0ms"},unmountOnExit:!0,children:(0,l.jsx)(i.Z,{})})}),(0,l.jsx)(a.Z,{onClick:()=>{u.current&&clearTimeout(u.current),"idle"===r?(m("progress"),u.current=window.setTimeout((()=>{m("success")}),2e3)):m("idle")},sx:{m:2},children:"idle"!==r?"Reset":"Simulate a load"})]})}},58594:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(47313),s=r(9506),o=r(94149),a=r(46417);function i(){const[e,n]=t.useState(0),[r,i]=t.useState(10),c=t.useRef((()=>{}));return t.useEffect((()=>{c.current=()=>{if(e>100)n(0),i(10);else{const r=10*Math.random(),t=10*Math.random();n(e+r),i(e+r+t)}}})),t.useEffect((()=>{const e=setInterval((()=>{c.current()}),500);return()=>{clearInterval(e)}}),[]),(0,a.jsx)(s.Z,{sx:{width:"100%"},children:(0,a.jsx)(o.Z,{variant:"buffer",value:e,valueBuffer:r})})}},88673:(e,n,r)=>{r.d(n,{Z:()=>a});r(47313);var t=r(35898),s=r(94149),o=r(46417);function a(){return(0,o.jsxs)(t.Z,{sx:{width:"100%",color:"grey.500"},spacing:2,children:[(0,o.jsx)(s.Z,{color:"secondary"}),(0,o.jsx)(s.Z,{color:"success"}),(0,o.jsx)(s.Z,{color:"inherit"})]})}},23395:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(47313),s=r(9506),o=r(94149),a=r(46417);function i(){const[e,n]=t.useState(0);return t.useEffect((()=>{const e=setInterval((()=>{n((e=>{if(100===e)return 0;const n=10*Math.random();return Math.min(e+n,100)}))}),500);return()=>{clearInterval(e)}}),[]),(0,a.jsx)(s.Z,{sx:{width:"100%"},children:(0,a.jsx)(o.Z,{variant:"determinate",value:e})})}},54545:(e,n,r)=>{r.d(n,{Z:()=>a});r(47313);var t=r(9506),s=r(94149),o=r(46417);function a(){return(0,o.jsx)(t.Z,{sx:{width:"100%"},children:(0,o.jsx)(s.Z,{})})}},85912:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(47313),s=r(94149),o=r(61113),a=r(9506),i=r(46417);function c(e){return(0,i.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(a.Z,{sx:{width:"100%",mr:1},children:(0,i.jsx)(s.Z,{variant:"determinate",...e})}),(0,i.jsx)(a.Z,{sx:{minWidth:35},children:(0,i.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function l(){const[e,n]=t.useState(10);return t.useEffect((()=>{const e=setInterval((()=>{n((e=>e>=100?10:e+10))}),800);return()=>{clearInterval(e)}}),[]),(0,i.jsx)(a.Z,{sx:{width:"100%"},children:(0,i.jsx)(c,{value:e})})}},22911:(e,n,r)=>{r.r(n),r.d(n,{default:()=>l});var t=r(44269),s=r(1483),o=r(24193),a=r(71263),i=r(61113),c=r(46417);const l=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:(0,c.jsxs)(o.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/progress",target:"_blank",role:"button",children:[(0,c.jsx)(a.Z,{children:"link"}),(0,c.jsx)("span",{className:"mx-4",children:"Reference"})]})}),(0,c.jsx)(i.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Progress"}),(0,c.jsx)(i.Z,{className:"description",children:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process."}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates."}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Determinate"})," indicators display how long an operation will take."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Indeterminate"})," indicators visualize an unspecified wait time."]})]}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:"The animations of the components rely on CSS as much as possible to work even before the JavaScript is loaded."}),(0,c.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Circular"}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Circular indeterminate"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(50385).Z,raw:r(44535)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Circular color"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(69979).Z,raw:r(7498)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Circular determinate"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(78208).Z,raw:r(87857)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Interactive integration"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(76497).Z,raw:r(41126)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Circular with label"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(69384).Z,raw:r(55448)})}),(0,c.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Linear"}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Linear indeterminate"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(54545).Z,raw:r(83621)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Linear color"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(88673).Z,raw:r(21367)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Linear determinate"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(23395).Z,raw:r(97230)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Linear buffer"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(58594).Z,raw:r(24015)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Linear with label"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(85912).Z,raw:r(74299)})}),(0,c.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Non-standard ranges"}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:"The progress components accept a value in the range 0 - 100. This simplifies things for screen-reader users, where these are the default min / max values. Sometimes, however, you might be working with a data source where the values fall outside this range. Here's how you can easily transform a value in any range to a scale of 0 - 100:"}),(0,c.jsx)(s.Z,{component:"pre",className:"language-jsx",children:" \n// MIN = Minimum expected value\n// MAX = Maximium expected value\n// Function to normalise the values (MIN / MAX could be integrated)\nconst normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);\n\n// Example component that utilizes the `normalise` function at the point of render.\nfunction Progress(props) {\n  return (\n    <React.Fragment>\n      <CircularProgress variant='determinate' value={normalise(props.value)} />\n      <LinearProgress variant='determinate' value={normalise(props.value)} />\n    </React.Fragment>\n  );\n}\n"}),(0,c.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),(0,c.jsxs)(i.Z,{className:"mb-40",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the"," ",(0,c.jsx)("a",{href:"/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(18459).Z,raw:r(77844)})}),(0,c.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Delaying appearance"}),(0,c.jsxs)(i.Z,{className:"mb-40",component:"div",children:["There are"," ",(0,c.jsx)("a",{href:"https://www.nngroup.com/articles/response-times-3-important-limits/",children:"3 important limits"})," ","to know around response time. The ripple effect of the"," ",(0,c.jsx)("code",{children:"ButtonBase"})," component ensures that the user feels that the system is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep user's flow of thought uninterrupted."]}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(48453).Z,raw:r(14242)})}),(0,c.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Limitations"}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"High CPU load"}),(0,c.jsxs)(i.Z,{className:"mb-40",component:"div",children:["Under heavy load, you might lose the stroke dash animation or see random"," ",(0,c.jsx)("code",{children:"CircularProgress"})," ring widths. You should run processor intensive operations in a web worker or by batch in order not to block the main rendering thread."]}),(0,c.jsxs)(i.Z,{className:"mb-40",component:"div",children:[" ","src='/material-ui-static/images/progress/heavy-load.gif' alt='heavy load/>"]}),(0,c.jsxs)(i.Z,{className:"mb-40",component:"div",children:["When it's not possible, you can leverage the"," ",(0,c.jsx)("code",{children:"disableShrink"})," prop to mitigate the issue. See"," ",(0,c.jsx)("a",{href:"https://github.com/mui-org/material-ui/issues/10327",children:"this issue"}),"."]}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(13318).Z,raw:r(82877)})}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"High frequency updates"}),(0,c.jsxs)(i.Z,{className:"mb-40",component:"div",children:["The ",(0,c.jsx)("code",{children:"LinearProgress"})," uses a transition on the CSS transform property to provide a smooth update between different values. The default transition duration is 200ms. In the event a parent component updates the ",(0,c.jsx)("code",{children:"value"})," prop too quickly, you will at least experience a 200ms delay between the re-render and the progress bar fully updated."]}),(0,c.jsx)(i.Z,{className:"mb-40",component:"div",children:"If you need to perform 30 re-renders per second or more, we recommend disabling the transition:"}),(0,c.jsx)(s.Z,{component:"pre",className:"language-css",children:" \n.MuiLinearProgress-bar {\n  transition: none;\n}\n"}),(0,c.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"IE 11"}),(0,c.jsxs)(i.Z,{className:"mb-40",component:"div",children:["The circular progress component animation on IE 11 is degraded. The stroke dash animation is not working (equivalent to"," ",(0,c.jsx)("code",{children:"disableShrink"}),") and the circular animation wobbles. You can solve the latter with:"]}),(0,c.jsx)(s.Z,{component:"pre",className:"language-css",children:" \n.MuiCircularProgress-indeterminate {\n  animation: circular-rotate 1.4s linear infinite;\n}\n\n@keyframes circular-rotate {\n  0% {\n    transform: rotate(0deg);\n    /* Fix IE11 wobbly */\n    transform-origin: 50% 50%;\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"})]})}},68728:(e,n,r)=>{var t=r(64836);n.Z=void 0;var s=t(r(45045)),o=r(46417),a=(0,s.default)((0,o.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.Z=a},83121:(e,n,r)=>{var t=r(64836);n.Z=void 0;var s=t(r(45045)),o=r(46417),a=(0,s.default)((0,o.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");n.Z=a},45045:(e,n,r)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(28095)},35898:(e,n,r)=>{r.d(n,{Z:()=>h});var t=r(63366),s=r(87462),o=r(47313),a=(r(75192),r(54929)),i=r(86886),c=r(39028),l=r(13019),m=r(17592),u=r(77342),d=r(46417);const p=["component","direction","spacing","divider","children"];function f(e,n){const r=o.Children.toArray(e).filter(Boolean);return r.reduce(((e,t,s)=>(e.push(t),s<r.length-1&&e.push(o.cloneElement(n,{key:"separator-".concat(s)})),e)),[])}const x=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((e=>{let{ownerState:n,theme:r}=e,t=(0,s.Z)({display:"flex"},(0,a.k9)({theme:r},n.direction,(e=>({flexDirection:e}))));if(n.spacing){const e=(0,i.hB)(r),s=Object.keys(r.breakpoints.values).reduce(((e,r)=>(null==n.spacing[r]&&null==n.direction[r]||(e[r]=!0),e)),{}),o=(0,a.P$)({values:n.direction,base:s}),c=(0,a.P$)({values:n.spacing,base:s}),m=(r,t)=>{return{"& > :not(style) + :not(style)":{margin:0,["margin".concat((s=t?o[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[s]))]:(0,i.NA)(e,r)}};var s};t=(0,l.Z)(t,(0,a.k9)({theme:r},c,m))}return t})),h=o.forwardRef((function(e,n){const r=(0,u.Z)({props:e,name:"MuiStack"}),o=(0,c.Z)(r),{component:a="div",direction:i="column",spacing:l=0,divider:m,children:h}=o,g=(0,t.Z)(o,p),v={direction:i,spacing:l};return(0,d.jsx)(x,(0,s.Z)({as:a,ownerState:v,ref:n},g,{children:m?f(h,m):h}))}))},28095:(e,n,r)=>{r.r(n),r.d(n,{capitalize:()=>t.Z,createChainedFunction:()=>s.Z,createSvgIcon:()=>o.Z,debounce:()=>a.Z,deprecatedPropType:()=>i,isMuiElement:()=>c.Z,ownerDocument:()=>l.Z,ownerWindow:()=>m.Z,requirePropFactory:()=>u,setRef:()=>d,unstable_useEnhancedEffect:()=>p.Z,unstable_useId:()=>f.Z,unsupportedProp:()=>x,useControlled:()=>h.Z,useEventCallback:()=>g.Z,useForkRef:()=>v.Z,useIsFocusVisible:()=>Z.Z});var t=r(91615),s=r(85038),o=r(54750),a=r(47228);const i=function(e,n){return()=>null};var c=r(27816),l=r(6106),m=r(23533);r(87462);const u=function(e,n){return()=>null};const d=r(89265).Z;var p=r(24993),f=r(17677);const x=function(e,n,r,t,s){return null};var h=r(53800),g=r(73236),v=r(86983),Z=r(47037)},7498:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Stack from "@mui/material/Stack";\nimport CircularProgress from "@mui/material/CircularProgress";\n\nexport default function CircularColor() {\n  return (\n    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">\n      <CircularProgress color="secondary" />\n      <CircularProgress color="success" />\n      <CircularProgress color="inherit" />\n    </Stack>\n  );\n}\n'},87857:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Stack from "@mui/material/Stack";\nimport CircularProgress from "@mui/material/CircularProgress";\n\nexport default function CircularDeterminate() {\n  const [progress, setProgress] = React.useState(0);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) =>\n        prevProgress >= 100 ? 0 : prevProgress + 10\n      );\n    }, 800);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <Stack spacing={2} direction="row">\n      <CircularProgress variant="determinate" value={25} />\n      <CircularProgress variant="determinate" value={50} />\n      <CircularProgress variant="determinate" value={75} />\n      <CircularProgress variant="determinate" value={100} />\n      <CircularProgress variant="determinate" value={progress} />\n    </Stack>\n  );\n}\n'},44535:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport CircularProgress from "@mui/material/CircularProgress";\nimport Box from "@mui/material/Box";\n\nexport default function CircularIndeterminate() {\n  return (\n    <Box sx={{ display: "flex" }}>\n      <CircularProgress />\n    </Box>\n  );\n}\n'},41126:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Box from "@mui/material/Box";\nimport CircularProgress from "@mui/material/CircularProgress";\nimport { green } from "@mui/material/colors";\nimport Button from "@mui/material/Button";\nimport Fab from "@mui/material/Fab";\nimport CheckIcon from "@mui/icons-material/Check";\nimport SaveIcon from "@mui/icons-material/Save";\n\nexport default function CircularIntegration() {\n  const [loading, setLoading] = React.useState(false);\n  const [success, setSuccess] = React.useState(false);\n  const timer = React.useRef();\n\n  const buttonSx = {\n    ...(success && {\n      bgcolor: green[500],\n      "&:hover": {\n        bgcolor: green[700],\n      },\n    }),\n  };\n\n  React.useEffect(() => {\n    return () => {\n      clearTimeout(timer.current);\n    };\n  }, []);\n\n  const handleButtonClick = () => {\n    if (!loading) {\n      setSuccess(false);\n      setLoading(true);\n      timer.current = window.setTimeout(() => {\n        setSuccess(true);\n        setLoading(false);\n      }, 2000);\n    }\n  };\n\n  return (\n    <Box sx={{ display: "flex", alignItems: "center" }}>\n      <Box sx={{ m: 1, position: "relative" }}>\n        <Fab\n          aria-label="save"\n          color="primary"\n          sx={buttonSx}\n          onClick={handleButtonClick}\n        >\n          {success ? <CheckIcon /> : <SaveIcon />}\n        </Fab>\n        {loading && (\n          <CircularProgress\n            size={68}\n            sx={{\n              color: green[500],\n              position: "absolute",\n              top: -6,\n              left: -6,\n              zIndex: 1,\n            }}\n          />\n        )}\n      </Box>\n      <Box sx={{ m: 1, position: "relative" }}>\n        <Button\n          variant="contained"\n          sx={buttonSx}\n          disabled={loading}\n          onClick={handleButtonClick}\n        >\n          Accept terms\n        </Button>\n        {loading && (\n          <CircularProgress\n            size={24}\n            sx={{\n              color: green[500],\n              position: "absolute",\n              top: "50%",\n              left: "50%",\n              marginTop: "-12px",\n              marginLeft: "-12px",\n            }}\n          />\n        )}\n      </Box>\n    </Box>\n  );\n}\n'},82877:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport CircularProgress from "@mui/material/CircularProgress";\n\nexport default function CircularUnderLoad() {\n  return <CircularProgress disableShrink />;\n}\n'},55448:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport PropTypes from "prop-types";\nimport CircularProgress from "@mui/material/CircularProgress";\nimport Typography from "@mui/material/Typography";\nimport Box from "@mui/material/Box";\n\nfunction CircularProgressWithLabel(props) {\n  return (\n    <Box sx={{ position: "relative", display: "inline-flex" }}>\n      <CircularProgress variant="determinate" {...props} />\n      <Box\n        sx={{\n          top: 0,\n          left: 0,\n          bottom: 0,\n          right: 0,\n          position: "absolute",\n          display: "flex",\n          alignItems: "center",\n          justifyContent: "center",\n        }}\n      >\n        <Typography variant="caption" component="div" color="text.secondary">\n          {`${Math.round(props.value)}%`}\n        </Typography>\n      </Box>\n    </Box>\n  );\n}\n\nCircularProgressWithLabel.propTypes = {\n  /**\n   * The value of the progress indicator for the determinate variant.\n   * Value between 0 and 100.\n   * @default 0\n   */\n  value: PropTypes.number.isRequired,\n};\n\nexport default function CircularStatic() {\n  const [progress, setProgress] = React.useState(10);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) =>\n        prevProgress >= 100 ? 0 : prevProgress + 10\n      );\n    }, 800);\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return <CircularProgressWithLabel value={progress} />;\n}\n'},77844:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport { styled } from "@mui/material/styles";\nimport Box from "@mui/material/Box";\nimport CircularProgress, {\n  circularProgressClasses,\n} from "@mui/material/CircularProgress";\nimport LinearProgress, {\n  linearProgressClasses,\n} from "@mui/material/LinearProgress";\n\nconst BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({\n  height: 10,\n  borderRadius: 5,\n  [`&.${linearProgressClasses.colorPrimary}`]: {\n    backgroundColor:\n      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],\n  },\n  [`& .${linearProgressClasses.bar}`]: {\n    borderRadius: 5,\n    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",\n  },\n}));\n\n// Inspired by the former Facebook spinners.\nfunction FacebookCircularProgress(props) {\n  return (\n    <Box sx={{ position: "relative" }}>\n      <CircularProgress\n        variant="determinate"\n        sx={{\n          color: (theme) =>\n            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],\n        }}\n        size={40}\n        thickness={4}\n        {...props}\n        value={100}\n      />\n      <CircularProgress\n        variant="indeterminate"\n        disableShrink\n        sx={{\n          color: (theme) =>\n            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",\n          animationDuration: "550ms",\n          position: "absolute",\n          left: 0,\n          [`& .${circularProgressClasses.circle}`]: {\n            strokeLinecap: "round",\n          },\n        }}\n        size={40}\n        thickness={4}\n        {...props}\n      />\n    </Box>\n  );\n}\n\nexport default function CustomizedProgressBars() {\n  return (\n    <Box sx={{ flexGrow: 1 }}>\n      <FacebookCircularProgress />\n      <br />\n      <BorderLinearProgress variant="determinate" value={50} />\n    </Box>\n  );\n}\n'},14242:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Fade from "@mui/material/Fade";\nimport Button from "@mui/material/Button";\nimport CircularProgress from "@mui/material/CircularProgress";\nimport Typography from "@mui/material/Typography";\n\nexport default function DelayingAppearance() {\n  const [loading, setLoading] = React.useState(false);\n  const [query, setQuery] = React.useState("idle");\n  const timerRef = React.useRef();\n\n  React.useEffect(\n    () => () => {\n      clearTimeout(timerRef.current);\n    },\n    []\n  );\n\n  const handleClickLoading = () => {\n    setLoading((prevLoading) => !prevLoading);\n  };\n\n  const handleClickQuery = () => {\n    if (timerRef.current) {\n      clearTimeout(timerRef.current);\n    }\n\n    if (query !== "idle") {\n      setQuery("idle");\n      return;\n    }\n\n    setQuery("progress");\n    timerRef.current = window.setTimeout(() => {\n      setQuery("success");\n    }, 2000);\n  };\n\n  return (\n    <Box\n      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}\n    >\n      <Box sx={{ height: 40 }}>\n        <Fade\n          in={loading}\n          style={{\n            transitionDelay: loading ? "800ms" : "0ms",\n          }}\n          unmountOnExit\n        >\n          <CircularProgress />\n        </Fade>\n      </Box>\n      <Button onClick={handleClickLoading} sx={{ m: 2 }}>\n        {loading ? "Stop loading" : "Loading"}\n      </Button>\n      <Box sx={{ height: 40 }}>\n        {query === "success" ? (\n          <Typography>Success!</Typography>\n        ) : (\n          <Fade\n            in={query === "progress"}\n            style={{\n              transitionDelay: query === "progress" ? "800ms" : "0ms",\n            }}\n            unmountOnExit\n          >\n            <CircularProgress />\n          </Fade>\n        )}\n      </Box>\n      <Button onClick={handleClickQuery} sx={{ m: 2 }}>\n        {query !== "idle" ? "Reset" : "Simulate a load"}\n      </Button>\n    </Box>\n  );\n}\n'},24015:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Box from "@mui/material/Box";\nimport LinearProgress from "@mui/material/LinearProgress";\n\nexport default function LinearBuffer() {\n  const [progress, setProgress] = React.useState(0);\n  const [buffer, setBuffer] = React.useState(10);\n\n  const progressRef = React.useRef(() => {});\n  React.useEffect(() => {\n    progressRef.current = () => {\n      if (progress > 100) {\n        setProgress(0);\n        setBuffer(10);\n      } else {\n        const diff = Math.random() * 10;\n        const diff2 = Math.random() * 10;\n        setProgress(progress + diff);\n        setBuffer(progress + diff + diff2);\n      }\n    };\n  });\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      progressRef.current();\n    }, 500);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <Box sx={{ width: "100%" }}>\n      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />\n    </Box>\n  );\n}\n'},21367:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Stack from "@mui/material/Stack";\nimport LinearProgress from "@mui/material/LinearProgress";\n\nexport default function LinearColor() {\n  return (\n    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>\n      <LinearProgress color="secondary" />\n      <LinearProgress color="success" />\n      <LinearProgress color="inherit" />\n    </Stack>\n  );\n}\n'},97230:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Box from "@mui/material/Box";\nimport LinearProgress from "@mui/material/LinearProgress";\n\nexport default function LinearDeterminate() {\n  const [progress, setProgress] = React.useState(0);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((oldProgress) => {\n        if (oldProgress === 100) {\n          return 0;\n        }\n        const diff = Math.random() * 10;\n        return Math.min(oldProgress + diff, 100);\n      });\n    }, 500);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <Box sx={{ width: "100%" }}>\n      <LinearProgress variant="determinate" value={progress} />\n    </Box>\n  );\n}\n'},83621:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Box from "@mui/material/Box";\nimport LinearProgress from "@mui/material/LinearProgress";\n\nexport default function LinearIndeterminate() {\n  return (\n    <Box sx={{ width: "100%" }}>\n      <LinearProgress />\n    </Box>\n  );\n}\n'},74299:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport PropTypes from "prop-types";\nimport LinearProgress from "@mui/material/LinearProgress";\nimport Typography from "@mui/material/Typography";\nimport Box from "@mui/material/Box";\n\nfunction LinearProgressWithLabel(props) {\n  return (\n    <Box sx={{ display: "flex", alignItems: "center" }}>\n      <Box sx={{ width: "100%", mr: 1 }}>\n        <LinearProgress variant="determinate" {...props} />\n      </Box>\n      <Box sx={{ minWidth: 35 }}>\n        <Typography variant="body2" color="text.secondary">{`${Math.round(\n          props.value\n        )}%`}</Typography>\n      </Box>\n    </Box>\n  );\n}\n\nLinearProgressWithLabel.propTypes = {\n  /**\n   * The value of the progress indicator for the determinate and buffer variants.\n   * Value between 0 and 100.\n   */\n  value: PropTypes.number.isRequired,\n};\n\nexport default function LinearWithValueLabel() {\n  const [progress, setProgress] = React.useState(10);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) =>\n        prevProgress >= 100 ? 10 : prevProgress + 10\n      );\n    }, 800);\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <Box sx={{ width: "100%" }}>\n      <LinearProgressWithLabel value={progress} />\n    </Box>\n  );\n}\n'}}]);