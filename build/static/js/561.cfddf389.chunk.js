"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[561],{44269:(e,n,a)=>{a.d(n,{Z:()=>w});var o=a(1483),l=a(75908),t=a(73428),i=a(71263),r=a(65280),c=a(5297),s=a(83061),m=a(47313),d=a(1168),h=a(10223),u=a(21871),p=a(95682),x=a(35301),f=a(19860),b=a(17592),j=a(70499),C=a(46417);function v(e){const{children:n,document:a}=e,o=(0,f.Z)();m.useEffect((()=>{a.body.dir=o.direction}),[a,o.direction]);const l=m.useMemo((()=>(0,u.Z)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:a.head,stylisPlugins:"rtl"===o.direction?[h.Z]:[]})),[a,o.direction]),t=m.useCallback((()=>a.defaultView),[a]);return(0,C.jsx)(x.LC,{target:a.head,stylisPlugins:"rtl"===o.direction?[h.Z]:[],children:(0,C.jsxs)(p.C,{value:l,children:[(0,C.jsx)(j.Z,{styles:()=>({html:{fontSize:"62.5%"}})}),m.cloneElement(n,{window:t})]})})}const Z=(0,b.ZP)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function k(e){var n;const{children:a,name:o,...l}=e,t="".concat(o," demo"),i=m.useRef(null),[r,c]=m.useReducer((()=>!0),!1);m.useEffect((()=>{const e=i.current.contentDocument;null==e||"complete"!==e.readyState||r||c()}),[r]);const s=null===(n=i.current)||void 0===n?void 0:n.contentDocument;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Z,{onLoad:c,ref:i,title:t,...l}),!1!==r?d.createPortal((0,C.jsx)(v,{document:s,children:a}),s.body):null]})}const g=m.memo(k);function y(e){const[n,a]=(0,m.useState)(e.currentTabIndex),{component:d,raw:h,iframe:u,className:p}=e;return(0,C.jsxs)(t.Z,{className:(0,s.default)(p,"shadow"),children:[(0,C.jsx)(l.Z,{position:"static",color:"default",className:"shadow-0",children:(0,C.jsxs)(c.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){a(n)},children:[d&&(0,C.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(i.Z,{children:"remove_red_eye"})}),h&&(0,C.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,C.jsx)(i.Z,{children:"code"})})]})}),(0,C.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,C.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:d&&(u?(0,C.jsx)(g,{children:(0,C.jsx)(d,{})}):(0,C.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,C.jsx)(d,{})}))}),(0,C.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:h&&(0,C.jsx)("div",{className:"flex flex-1",children:(0,C.jsx)(o.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}y.defaultProps={currentTabIndex:0};const w=y},64452:(e,n,a)=>{a.d(n,{Z:()=>r});a(47313);var o=a(48119),l=a(66212),t=a(35898),i=a(46417);function r(){return(0,i.jsxs)(t.Z,{direction:"row",spacing:1,children:[(0,i.jsx)(l.Z,{avatar:(0,i.jsx)(o.Z,{children:"M"}),label:"Avatar"}),(0,i.jsx)(l.Z,{avatar:(0,i.jsx)(o.Z,{alt:"Natacha",src:"/material-ui-static/images/avatar/1.jpg"}),label:"Avatar",variant:"outlined"})]})}},63941:(e,n,a)=>{a.d(n,{Z:()=>i});a(47313);var o=a(66212),l=a(35898),t=a(46417);function i(){return(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"Chip Filled"}),(0,t.jsx)(o.Z,{label:"Chip Outlined",variant:"outlined"})]})}},64666:(e,n,a)=>{a.d(n,{Z:()=>m});var o=a(47313),l=a(17592),t=a(66212),i=a(82295),r=a(11621),c=a(46417);const s=(0,l.ZP)("li")((e=>{let{theme:n}=e;return{margin:n.spacing(.5)}}));function m(){const[e,n]=o.useState([{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]);return(0,c.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul",children:e.map((e=>{let a;return"React"===e.label&&(a=(0,c.jsx)(r.Z,{})),(0,c.jsx)(s,{children:(0,c.jsx)(t.Z,{icon:a,label:e.label,onDelete:"React"===e.label?void 0:(o=e,()=>{n((e=>e.filter((e=>e.key!==o.key))))})})},e.key);var o}))})}},31648:(e,n,a)=>{a.d(n,{Z:()=>f});var o=a(47313),l=a(93381),t=a(9019),i=a(1550),r=a(5178),c=a(83929),s=a(54299),m=a(31058),d=a(48119),h=a(66212),u=a(22187),p=a(64292),x=a(46417);const f=function(){const[e,n]=o.useState({color:"default",onDelete:"none",avatar:"none",icon:"none",variant:"filled",size:"medium"}),{color:a,onDelete:f,avatar:b,icon:j,variant:C,size:v}=e,Z=a=>{n({...e,[a.target.name]:a.target.value})},k="default"!==a?'color="'.concat(a,'" '):"",g="small"===v?'size="small" ':"",y="filled"!==C?'variant="'.concat(C,'" '):"";let w,D,F,N,S;switch(f){case"none":w="";break;case"custom":w="deleteIcon={<DoneIcon />} onDelete={handleDelete} ";break;default:w="onDelete={handleDelete} "}if("none"===j)D="";else D="icon={<FaceIcon />} ",F=(0,x.jsx)(u.Z,{});switch(b){case"none":N="";break;case"img":N='avatar={<Avatar src="/material-ui-static/images/avatar/1.jpg" />} ',S=(0,x.jsx)(d.Z,{src:"/material-ui-static/images/avatar/1.jpg"});break;case"letter":N="avatar={<Avatar>F</Avatar>} ",S=(0,x.jsx)(d.Z,{children:"F"})}"none"!==b&&(D="",F=null);const R="\n<Chip ".concat(y).concat(k).concat(g).concat(w).concat(N).concat(D,"/>\n");return(0,x.jsxs)(t.ZP,{container:!0,sx:{flexGrow:1},children:[(0,x.jsx)(t.ZP,{item:!0,xs:12,children:(0,x.jsx)(t.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:(0,x.jsx)(t.ZP,{item:!0,sx:{height:e=>e.spacing(10)},children:(0,x.jsx)(h.Z,{label:"Chip Component",color:a,deleteIcon:"custom"===f?(0,x.jsx)(p.Z,{}):void 0,onDelete:"none"!==f?()=>{console.info("You clicked the delete icon.")}:void 0,avatar:S,icon:F,variant:C,size:v})})})}),(0,x.jsx)(t.ZP,{item:!0,xs:12,children:(0,x.jsxs)(t.ZP,{container:!0,spacing:3,children:[(0,x.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,x.jsxs)(i.Z,{component:"fieldset",children:[(0,x.jsx)(r.Z,{children:"variant"}),(0,x.jsxs)(s.Z,{row:!0,name:"variant","aria-label":"variant",value:C,onChange:Z,children:[(0,x.jsx)(c.Z,{value:"filled",control:(0,x.jsx)(m.Z,{}),label:"filled"}),(0,x.jsx)(c.Z,{value:"outlined",control:(0,x.jsx)(m.Z,{}),label:"outlined"})]})]})}),(0,x.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,x.jsxs)(i.Z,{component:"fieldset",children:[(0,x.jsx)(r.Z,{children:"color"}),(0,x.jsxs)(s.Z,{row:!0,name:"color","aria-label":"color",value:a,onChange:Z,children:[(0,x.jsx)(c.Z,{value:"default",control:(0,x.jsx)(m.Z,{}),label:"default"}),(0,x.jsx)(c.Z,{value:"primary",control:(0,x.jsx)(m.Z,{}),label:"primary"}),(0,x.jsx)(c.Z,{value:"secondary",control:(0,x.jsx)(m.Z,{}),label:"secondary"}),(0,x.jsx)(c.Z,{value:"error",control:(0,x.jsx)(m.Z,{}),label:"error"}),(0,x.jsx)(c.Z,{value:"info",control:(0,x.jsx)(m.Z,{}),label:"info"}),(0,x.jsx)(c.Z,{value:"success",control:(0,x.jsx)(m.Z,{}),label:"success"}),(0,x.jsx)(c.Z,{value:"warning",control:(0,x.jsx)(m.Z,{}),label:"warning"})]})]})}),(0,x.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,x.jsxs)(i.Z,{component:"fieldset",children:[(0,x.jsx)(r.Z,{children:"size"}),(0,x.jsxs)(s.Z,{row:!0,name:"size","aria-label":"size",value:v,onChange:Z,children:[(0,x.jsx)(c.Z,{value:"medium",control:(0,x.jsx)(m.Z,{}),label:"medium"}),(0,x.jsx)(c.Z,{value:"small",control:(0,x.jsx)(m.Z,{}),label:"small"})]})]})}),(0,x.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,x.jsxs)(i.Z,{component:"fieldset",children:[(0,x.jsx)(r.Z,{children:"icon"}),(0,x.jsxs)(s.Z,{row:!0,name:"icon","aria-label":"icon",value:j,onChange:Z,children:[(0,x.jsx)(c.Z,{value:"none",control:(0,x.jsx)(m.Z,{}),label:"none"}),(0,x.jsx)(c.Z,{value:"icon",control:(0,x.jsx)(m.Z,{}),label:"icon"})]})]})}),(0,x.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,x.jsxs)(i.Z,{component:"fieldset",children:[(0,x.jsx)(r.Z,{children:"avatar"}),(0,x.jsxs)(s.Z,{row:!0,name:"avatar","aria-label":"avatar",value:b,onChange:Z,children:[(0,x.jsx)(c.Z,{value:"none",control:(0,x.jsx)(m.Z,{}),label:"none"}),(0,x.jsx)(c.Z,{value:"letter",control:(0,x.jsx)(m.Z,{}),label:"letter"}),(0,x.jsx)(c.Z,{value:"img",control:(0,x.jsx)(m.Z,{}),label:"img"})]})]})}),(0,x.jsx)(t.ZP,{item:!0,xs:12,md:6,children:(0,x.jsxs)(i.Z,{component:"fieldset",children:[(0,x.jsx)(r.Z,{children:"onDelete"}),(0,x.jsxs)(s.Z,{row:!0,name:"onDelete","aria-label":"on delete",value:f,onChange:Z,children:[(0,x.jsx)(c.Z,{value:"none",control:(0,x.jsx)(m.Z,{}),label:"none"}),(0,x.jsx)(c.Z,{value:"default",control:(0,x.jsx)(m.Z,{}),label:"default"}),(0,x.jsx)(c.Z,{value:"custom",control:(0,x.jsx)(m.Z,{}),label:"custom"})]})]})})]})}),(0,x.jsx)(t.ZP,{item:!0,xs:12,children:(0,x.jsx)(l.Z,{code:R,language:"jsx"})})]})}},78256:(e,n,a)=>{a.d(n,{Z:()=>i});a(47313);var o=a(66212),l=a(35898),t=a(46417);function i(){const e=()=>{console.info("You clicked the Chip.")},n=()=>{console.info("You clicked the delete icon.")};return(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"Clickable Deletable",onClick:e,onDelete:n}),(0,t.jsx)(o.Z,{label:"Clickable Deletable",variant:"outlined",onClick:e,onDelete:n})]})}},83813:(e,n,a)=>{a.d(n,{Z:()=>i});a(47313);var o=a(66212),l=a(35898),t=a(46417);function i(){const e=()=>{console.info("You clicked the Chip.")};return(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"Clickable",onClick:e}),(0,t.jsx)(o.Z,{label:"Clickable",variant:"outlined",onClick:e})]})}},77899:(e,n,a)=>{a.d(n,{Z:()=>i});a(47313);var o=a(66212),l=a(35898),t=a(46417);function i(){return(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"Clickable Link",component:"a",href:"#basic-chip",clickable:!0}),(0,t.jsx)(o.Z,{label:"Clickable Link",component:"a",href:"#basic-chip",variant:"outlined",clickable:!0})]})}},33971:(e,n,a)=>{a.d(n,{Z:()=>i});a(47313);var o=a(66212),l=a(35898),t=a(46417);function i(){return(0,t.jsxs)(l.Z,{spacing:1,alignItems:"center",children:[(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"primary",color:"primary"}),(0,t.jsx)(o.Z,{label:"success",color:"success"})]}),(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"primary",color:"primary",variant:"outlined"}),(0,t.jsx)(o.Z,{label:"success",color:"success",variant:"outlined"})]})]})}},4981:(e,n,a)=>{a.d(n,{Z:()=>c});a(47313);var o=a(66212),l=a(35898),t=a(64292),i=a(51997),r=a(46417);function c(){const e=()=>{console.info("You clicked the Chip.")},n=()=>{console.info("You clicked the delete icon.")};return(0,r.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,r.jsx)(o.Z,{label:"Custom delete icon",onClick:e,onDelete:n,deleteIcon:(0,r.jsx)(t.Z,{})}),(0,r.jsx)(o.Z,{label:"Custom delete icon",onClick:e,onDelete:n,deleteIcon:(0,r.jsx)(i.Z,{}),variant:"outlined"})]})}},33202:(e,n,a)=>{a.d(n,{Z:()=>i});a(47313);var o=a(66212),l=a(35898),t=a(46417);function i(){const e=()=>{console.info("You clicked the delete icon.")};return(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"Deletable",onDelete:e}),(0,t.jsx)(o.Z,{label:"Deletable",variant:"outlined",onDelete:e})]})}},29212:(e,n,a)=>{a.d(n,{Z:()=>r});a(47313);var o=a(66212),l=a(35898),t=a(22187),i=a(46417);function r(){return(0,i.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,i.jsx)(o.Z,{icon:(0,i.jsx)(t.Z,{}),label:"With Icon"}),(0,i.jsx)(o.Z,{icon:(0,i.jsx)(t.Z,{}),label:"With Icon",variant:"outlined"})]})}},58042:(e,n,a)=>{a.d(n,{Z:()=>i});a(47313);var o=a(66212),l=a(35898),t=a(46417);function i(){return(0,t.jsxs)(l.Z,{direction:"row",spacing:1,children:[(0,t.jsx)(o.Z,{label:"Small",size:"small"}),(0,t.jsx)(o.Z,{label:"Small",size:"small",variant:"outlined"})]})}},20561:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var o=a(44269),l=a(24193),t=a(71263),i=a(61113),r=a(46417);const c=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:(0,r.jsxs)(l.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/chips",target:"_blank",role:"button",children:[(0,r.jsx)(t.Z,{children:"link"}),(0,r.jsx)("span",{className:"mx-4",children:"Reference"})]})}),(0,r.jsx)(i.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Chip"}),(0,r.jsx)(i.Z,{className:"description",children:"Chips are compact elements that represent an input, attribute, or action."}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:"Chips allow users to enter information, make selections, filter content, or trigger actions."}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:"While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context."}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic chip"}),(0,r.jsxs)(i.Z,{className:"mb-40",component:"div",children:["The ",(0,r.jsx)("code",{children:"Chip"})," component supports outlined and filled styling."]}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(63941).Z,raw:a(24078)})}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Chip actions"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:"You can use the following actions."}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Chips with the ",(0,r.jsx)("code",{children:"onClick"})," prop defined change appearance on focus, hover, and click."]}),(0,r.jsxs)("li",{children:["Chips with the ",(0,r.jsx)("code",{children:"onDelete"})," prop defined will display a delete icon which changes appearance on hover."]})]}),(0,r.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Clickable"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(83813).Z,raw:a(16977)})}),(0,r.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Deletable"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(33202).Z,raw:a(62559)})}),(0,r.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Clickable and deletable"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(78256).Z,raw:a(39312)})}),(0,r.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Clickable link"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(77899).Z,raw:a(72776)})}),(0,r.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Custom delete icon"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(4981).Z,raw:a(1133)})}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Chip adornments"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:"You can add ornaments to the beginning of the component."}),(0,r.jsxs)(i.Z,{className:"mb-40",component:"div",children:["Use the ",(0,r.jsx)("code",{children:"avatar"})," prop to added a avatar or use the"," ",(0,r.jsx)("code",{children:"icon"})," prop to added a icon."]}),(0,r.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Avatar chip"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(64452).Z,raw:a(51658)})}),(0,r.jsx)(i.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Icon chip"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(29212).Z,raw:a(66605)})}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Color chip"}),(0,r.jsxs)(i.Z,{className:"mb-40",component:"div",children:["You can use the ",(0,r.jsx)("code",{children:"color"})," prop to define a color from theme palette."]}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(33971).Z,raw:a(34921)})}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Sizes chip"}),(0,r.jsxs)(i.Z,{className:"mb-40",component:"div",children:["You can use the ",(0,r.jsx)("code",{children:"size"})," prop to define a small Chip."]}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(58042).Z,raw:a(54958)})}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Chip array"}),(0,r.jsxs)(i.Z,{className:"mb-40",component:"div",children:["An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no",(0,r.jsx)("code",{children:"onClick"})," prop is defined, the ",(0,r.jsx)("code",{children:"Chip"})," can be focused, but does not gain depth while clicked or touched."]}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(64666).Z,raw:a(90647)})}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Chip playground"}),(0,r.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,r.jsx)(o.Z,{className:"my-24",iframe:!1,component:a(31648).Z,raw:a(33904)})}),(0,r.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,r.jsxs)(i.Z,{className:"mb-40",component:"div",children:["If the Chip is deletable or clickable then it is a button in tab order. When the Chip is focused (e.g. when tabbing) releasing (",(0,r.jsx)("code",{children:"keyup"})," event) ",(0,r.jsx)("code",{children:"Backspace"})," or ",(0,r.jsx)("code",{children:"Delete"})," ","will call the ",(0,r.jsx)("code",{children:"onDelete"})," handler while releasing"," ",(0,r.jsx)("code",{children:"Escape"})," will blur the Chip."]})]})}},93381:(e,n,a)=>{a.d(n,{Z:()=>i});var o=a(47313),l=a(53335),t=a(46417);const i=(0,o.forwardRef)((function(e,n){const{code:a,language:o,...i}=e;return(0,t.jsx)(l.Z,{component:"pre",className:"language-".concat(o||"jsx"),ref:n,...i,children:a})}))},51658:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Avatar from "@mui/material/Avatar";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function AvatarChips() {\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />\n      <Chip\n        avatar={\n          <Avatar alt="Natacha" src="/material-ui-static/images/avatar/1.jpg" />\n        }\n        label="Avatar"\n        variant="outlined"\n      />\n    </Stack>\n  );\n}\n'},24078:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function BasicChips() {\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip label="Chip Filled" />\n      <Chip label="Chip Outlined" variant="outlined" />\n    </Stack>\n  );\n}\n'},90647:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport { styled } from "@mui/material/styles";\nimport Chip from "@mui/material/Chip";\nimport Paper from "@mui/material/Paper";\nimport TagFacesIcon from "@mui/icons-material/TagFaces";\n\nconst ListItem = styled("li")(({ theme }) => ({\n  margin: theme.spacing(0.5),\n}));\n\nexport default function ChipsArray() {\n  const [chipData, setChipData] = React.useState([\n    { key: 0, label: "Angular" },\n    { key: 1, label: "jQuery" },\n    { key: 2, label: "Polymer" },\n    { key: 3, label: "React" },\n    { key: 4, label: "Vue.js" },\n  ]);\n\n  const handleDelete = (chipToDelete) => () => {\n    setChipData((chips) =>\n      chips.filter((chip) => chip.key !== chipToDelete.key)\n    );\n  };\n\n  return (\n    <Paper\n      sx={{\n        display: "flex",\n        justifyContent: "center",\n        flexWrap: "wrap",\n        listStyle: "none",\n        p: 0.5,\n        m: 0,\n      }}\n      component="ul"\n    >\n      {chipData.map((data) => {\n        let icon;\n\n        if (data.label === "React") {\n          icon = <TagFacesIcon />;\n        }\n\n        return (\n          <ListItem key={data.key}>\n            <Chip\n              icon={icon}\n              label={data.label}\n              onDelete={data.label === "React" ? undefined : handleDelete(data)}\n            />\n          </ListItem>\n        );\n      })}\n    </Paper>\n  );\n}\n'},33904:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport HighlightedCode from "app/main/documentation/material-ui-components/utils/HighlightedCode";\nimport Grid from "@mui/material/Grid";\nimport FormControl from "@mui/material/FormControl";\nimport FormLabel from "@mui/material/FormLabel";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport RadioGroup from "@mui/material/RadioGroup";\nimport Radio from "@mui/material/Radio";\nimport Avatar from "@mui/material/Avatar";\nimport Chip from "@mui/material/Chip";\nimport FaceIcon from "@mui/icons-material/Face";\nimport DoneIcon from "@mui/icons-material/Done";\n\nfunction ChipsPlayground() {\n  const [state, setState] = React.useState({\n    color: "default",\n    onDelete: "none",\n    avatar: "none",\n    icon: "none",\n    variant: "filled",\n    size: "medium",\n  });\n  const { color, onDelete, avatar, icon, variant, size } = state;\n\n  const handleChange = (event) => {\n    setState({\n      ...state,\n      [event.target.name]: event.target.value,\n    });\n  };\n\n  const handleDeleteExample = () => {\n    console.info("You clicked the delete icon.");\n  };\n\n  const colorToCode = color !== "default" ? `color="${color}" ` : "";\n  const sizeToCode = size === "small" ? `size="small" ` : "";\n  const variantToCode = variant !== "filled" ? `variant="${variant}" ` : "";\n\n  let onDeleteToCode;\n  switch (onDelete) {\n    case "none":\n      onDeleteToCode = "";\n      break;\n    case "custom":\n      onDeleteToCode = "deleteIcon={<DoneIcon />} onDelete={handleDelete} ";\n      break;\n    default:\n      onDeleteToCode = "onDelete={handleDelete} ";\n      break;\n  }\n\n  let iconToCode;\n  let iconToPlayground;\n  switch (icon) {\n    case "none":\n      iconToCode = "";\n      break;\n    default:\n      iconToCode = "icon={<FaceIcon />} ";\n      iconToPlayground = <FaceIcon />;\n      break;\n  }\n\n  let avatarToCode;\n  let avatarToPlayground;\n  switch (avatar) {\n    case "none":\n      avatarToCode = "";\n      break;\n    case "img":\n      avatarToCode =\n        \'avatar={<Avatar src="/material-ui-static/images/avatar/1.jpg" />} \';\n      avatarToPlayground = (\n        <Avatar src="/material-ui-static/images/avatar/1.jpg" />\n      );\n      break;\n    case "letter":\n      avatarToCode = "avatar={<Avatar>F</Avatar>} ";\n      avatarToPlayground = <Avatar>F</Avatar>;\n      break;\n    default:\n      break;\n  }\n\n  if (avatar !== "none") {\n    iconToCode = "";\n    iconToPlayground = null;\n  }\n\n  const jsx = `\n<Chip ${variantToCode}${colorToCode}${sizeToCode}${onDeleteToCode}${avatarToCode}${iconToCode}/>\n`;\n\n  return (\n    <Grid container sx={{ flexGrow: 1 }}>\n      <Grid item xs={12}>\n        <Grid container justifyContent="center" alignItems="center">\n          <Grid item sx={{ height: (theme) => theme.spacing(10) }}>\n            <Chip\n              label="Chip Component"\n              color={color}\n              deleteIcon={onDelete === "custom" ? <DoneIcon /> : undefined}\n              onDelete={onDelete !== "none" ? handleDeleteExample : undefined}\n              avatar={avatarToPlayground}\n              icon={iconToPlayground}\n              variant={variant}\n              size={size}\n            />\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid item xs={12}>\n        <Grid container spacing={3}>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>variant</FormLabel>\n              <RadioGroup\n                row\n                name="variant"\n                aria-label="variant"\n                value={variant}\n                onChange={handleChange}\n              >\n                <FormControlLabel\n                  value="filled"\n                  control={<Radio />}\n                  label="filled"\n                />\n                <FormControlLabel\n                  value="outlined"\n                  control={<Radio />}\n                  label="outlined"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>color</FormLabel>\n              <RadioGroup\n                row\n                name="color"\n                aria-label="color"\n                value={color}\n                onChange={handleChange}\n              >\n                <FormControlLabel\n                  value="default"\n                  control={<Radio />}\n                  label="default"\n                />\n                <FormControlLabel\n                  value="primary"\n                  control={<Radio />}\n                  label="primary"\n                />\n                <FormControlLabel\n                  value="secondary"\n                  control={<Radio />}\n                  label="secondary"\n                />\n                <FormControlLabel\n                  value="error"\n                  control={<Radio />}\n                  label="error"\n                />\n                <FormControlLabel\n                  value="info"\n                  control={<Radio />}\n                  label="info"\n                />\n                <FormControlLabel\n                  value="success"\n                  control={<Radio />}\n                  label="success"\n                />\n                <FormControlLabel\n                  value="warning"\n                  control={<Radio />}\n                  label="warning"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>size</FormLabel>\n              <RadioGroup\n                row\n                name="size"\n                aria-label="size"\n                value={size}\n                onChange={handleChange}\n              >\n                <FormControlLabel\n                  value="medium"\n                  control={<Radio />}\n                  label="medium"\n                />\n                <FormControlLabel\n                  value="small"\n                  control={<Radio />}\n                  label="small"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>icon</FormLabel>\n              <RadioGroup\n                row\n                name="icon"\n                aria-label="icon"\n                value={icon}\n                onChange={handleChange}\n              >\n                <FormControlLabel\n                  value="none"\n                  control={<Radio />}\n                  label="none"\n                />\n                <FormControlLabel\n                  value="icon"\n                  control={<Radio />}\n                  label="icon"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>avatar</FormLabel>\n              <RadioGroup\n                row\n                name="avatar"\n                aria-label="avatar"\n                value={avatar}\n                onChange={handleChange}\n              >\n                <FormControlLabel\n                  value="none"\n                  control={<Radio />}\n                  label="none"\n                />\n                <FormControlLabel\n                  value="letter"\n                  control={<Radio />}\n                  label="letter"\n                />\n                <FormControlLabel value="img" control={<Radio />} label="img" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <FormControl component="fieldset">\n              <FormLabel>onDelete</FormLabel>\n              <RadioGroup\n                row\n                name="onDelete"\n                aria-label="on delete"\n                value={onDelete}\n                onChange={handleChange}\n              >\n                <FormControlLabel\n                  value="none"\n                  control={<Radio />}\n                  label="none"\n                />\n                <FormControlLabel\n                  value="default"\n                  control={<Radio />}\n                  label="default"\n                />\n                <FormControlLabel\n                  value="custom"\n                  control={<Radio />}\n                  label="custom"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid item xs={12}>\n        <HighlightedCode code={jsx} language="jsx" />\n      </Grid>\n    </Grid>\n  );\n}\n\nexport default ChipsPlayground;\n'},39312:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function ClickeableAndDeleteableChips() {\n  const handleClick = () => {\n    console.info("You clicked the Chip.");\n  };\n\n  const handleDelete = () => {\n    console.info("You clicked the delete icon.");\n  };\n\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip\n        label="Clickable Deletable"\n        onClick={handleClick}\n        onDelete={handleDelete}\n      />\n      <Chip\n        label="Clickable Deletable"\n        variant="outlined"\n        onClick={handleClick}\n        onDelete={handleDelete}\n      />\n    </Stack>\n  );\n}\n'},16977:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function ClickeableChips() {\n  const handleClick = () => {\n    console.info("You clicked the Chip.");\n  };\n\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip label="Clickable" onClick={handleClick} />\n      <Chip label="Clickable" variant="outlined" onClick={handleClick} />\n    </Stack>\n  );\n}\n'},72776:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function ClickeableLinkChips() {\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />\n      <Chip\n        label="Clickable Link"\n        component="a"\n        href="#basic-chip"\n        variant="outlined"\n        clickable\n      />\n    </Stack>\n  );\n}\n'},34921:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function ColorChips() {\n  return (\n    <Stack spacing={1} alignItems="center">\n      <Stack direction="row" spacing={1}>\n        <Chip label="primary" color="primary" />\n        <Chip label="success" color="success" />\n      </Stack>\n      <Stack direction="row" spacing={1}>\n        <Chip label="primary" color="primary" variant="outlined" />\n        <Chip label="success" color="success" variant="outlined" />\n      </Stack>\n    </Stack>\n  );\n}\n'},1133:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport DoneIcon from "@mui/icons-material/Done";\nimport DeleteIcon from "@mui/icons-material/Delete";\n\nexport default function CustomDeleteIconChips() {\n  const handleClick = () => {\n    console.info("You clicked the Chip.");\n  };\n\n  const handleDelete = () => {\n    console.info("You clicked the delete icon.");\n  };\n\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip\n        label="Custom delete icon"\n        onClick={handleClick}\n        onDelete={handleDelete}\n        deleteIcon={<DoneIcon />}\n      />\n      <Chip\n        label="Custom delete icon"\n        onClick={handleClick}\n        onDelete={handleDelete}\n        deleteIcon={<DeleteIcon />}\n        variant="outlined"\n      />\n    </Stack>\n  );\n}\n'},62559:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function DeleteableChips() {\n  const handleDelete = () => {\n    console.info("You clicked the delete icon.");\n  };\n\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip label="Deletable" onDelete={handleDelete} />\n      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />\n    </Stack>\n  );\n}\n'},66605:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\nimport FaceIcon from "@mui/icons-material/Face";\n\nexport default function IconChips() {\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip icon={<FaceIcon />} label="With Icon" />\n      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />\n    </Stack>\n  );\n}\n'},54958:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const o='import * as React from "react";\nimport Chip from "@mui/material/Chip";\nimport Stack from "@mui/material/Stack";\n\nexport default function SizesChips() {\n  return (\n    <Stack direction="row" spacing={1}>\n      <Chip label="Small" size="small" />\n      <Chip label="Small" size="small" variant="outlined" />\n    </Stack>\n  );\n}\n'}}]);