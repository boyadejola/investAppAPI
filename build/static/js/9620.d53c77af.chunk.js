"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9620],{44269:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(1483),s=r(75908),o=r(73428),i=r(71263),c=r(65280),a=r(5297),l=r(83061),d=r(47313),m=r(1168),u=r(10223),x=r(21871),f=r(95682),h=r(35301),p=r(19860),j=r(17592),b=r(70499),y=r(46417);function v(e){const{children:n,document:r}=e,t=(0,p.Z)();d.useEffect((()=>{r.body.dir=t.direction}),[r,t.direction]);const s=d.useMemo((()=>(0,x.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:r.head,stylisPlugins:"rtl"===t.direction?[u.Z]:[]})),[r,t.direction]),o=d.useCallback((()=>r.defaultView),[r]);return(0,y.jsx)(h.LC,{target:r.head,stylisPlugins:"rtl"===t.direction?[u.Z]:[],children:(0,y.jsxs)(f.C,{value:s,children:[(0,y.jsx)(b.Z,{styles:()=>({html:{fontSize:"62.5%"}})}),d.cloneElement(n,{window:o})]})})}const N=(0,j.ZP)("iframe")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function g(e){var n;const{children:r,name:t,...s}=e,o="".concat(t," demo"),i=d.useRef(null),[c,a]=d.useReducer((()=>!0),!1);d.useEffect((()=>{const e=i.current.contentDocument;null==e||"complete"!==e.readyState||c||a()}),[c]);const l=null===(n=i.current)||void 0===n?void 0:n.contentDocument;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(N,{onLoad:a,ref:i,title:o,...s}),!1!==c?m.createPortal((0,y.jsx)(v,{document:l,children:r}),l.body):null]})}const S=d.memo(g);function Z(e){const[n,r]=(0,d.useState)(e.currentTabIndex),{component:m,raw:u,iframe:x,className:f}=e;return(0,y.jsxs)(o.Z,{className:(0,l.default)(f,"shadow"),children:[(0,y.jsx)(s.Z,{position:"static",color:"default",className:"shadow-0",children:(0,y.jsxs)(a.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:n,onChange:function(e,n){r(n)},children:[m&&(0,y.jsx)(c.Z,{classes:{root:"min-w-64"},icon:(0,y.jsx)(i.Z,{children:"remove_red_eye"})}),u&&(0,y.jsx)(c.Z,{classes:{root:"min-w-64"},icon:(0,y.jsx)(i.Z,{children:"code"})})]})}),(0,y.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,y.jsx)("div",{className:0===n?"flex flex-1 max-w-full":"hidden",children:m&&(x?(0,y.jsx)(S,{children:(0,y.jsx)(m,{})}):(0,y.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,y.jsx)(m,{})}))}),(0,y.jsx)("div",{className:1===n?"flex flex-1":"hidden",children:u&&(0,y.jsx)("div",{className:"flex flex-1",children:(0,y.jsx)(t.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:u.default})})})]})]})}Z.defaultProps={currentTabIndex:0};const w=Z},34911:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(47313),s=r(9506),o=r(14141),i=r(46417);function c(){return Array.from(new Array(5e3)).map(((e,n)=>(0,i.jsx)("span",{children:"."},n)))}function a(){const[e,n]=t.useState({open:!1,defer:!1});return(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{type:"button",onClick:()=>n({open:!e.open,defer:!1}),children:'Render NoSsr defer="false"'}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"button",onClick:()=>n({open:!e.open,defer:!0}),children:'Render NoSsr defer="true"'}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.Z,{sx:{width:300,display:"flex",flexWrap:"wrap"},children:e.open?(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)("div",{children:"Outside NoSsr"}),(0,i.jsxs)(o.Z,{defer:e.defer,children:[".....Inside NoSsr",(0,i.jsx)(c,{})]})]}):null})]})}},24830:(e,n,r)=>{r.d(n,{Z:()=>i});r(47313);var t=r(14141),s=r(9506),o=r(46417);function i(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{sx:{p:2,bgcolor:"primary.main",color:"primary.contrastText"},children:"Server and Client"}),(0,o.jsx)(t.Z,{children:(0,o.jsx)(s.Z,{sx:{p:2,bgcolor:"secondary.main",color:"secondary.contrastText"},children:"Client only"})})]})}},59620:(e,n,r)=>{r.r(n),r.d(n,{default:()=>l});var t=r(44269),s=r(1483),o=r(24193),i=r(71263),c=r(61113),a=r(46417);const l=function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:(0,a.jsxs)(o.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/no-ssr",target:"_blank",role:"button",children:[(0,a.jsx)(i.Z,{children:"link"}),(0,a.jsx)("span",{className:"mx-4",children:"Reference"})]})}),(0,a.jsx)(c.Z,{className:"text-40 my-16 font-700",component:"h1",children:"No SSR"}),(0,a.jsx)(c.Z,{className:"description",children:"NoSsr purposely removes components from the subject of Server Side Rendering (SSR)."}),(0,a.jsx)(c.Z,{className:"mb-40",component:"div",children:"This component can be useful in a variety of situations:"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Escape hatch for broken dependencies not supporting SSR."}),(0,a.jsx)("li",{children:"Improve the time-to-first paint on the client by only rendering above the fold."}),(0,a.jsx)("li",{children:"Reduce the rendering time on the server."}),(0,a.jsx)("li",{children:"Under too heavy server load, you can turn on service degradation."}),(0,a.jsxs)("li",{children:["Improve the time-to-interactive by only rendering what's important (with the ",(0,a.jsx)("code",{children:"defer"})," property)."]})]}),(0,a.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Client-side deferring"}),(0,a.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(24830).Z,raw:r(87606)})}),(0,a.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Frame deferring"}),(0,a.jsxs)(c.Z,{className:"mb-40",component:"div",children:["At its core, the NoSsr component's purpose is to"," ",(0,a.jsx)("strong",{children:"defer rendering"}),". As it's illustrated in the previous demo, you can use it to defer the rendering from the server to the client."]}),(0,a.jsxs)(c.Z,{className:"mb-40",component:"div",children:["But you can also use it to defer the rendering within the client itself. You can ",(0,a.jsx)("strong",{children:"wait a screen frame"})," with the ",(0,a.jsx)("code",{children:"defer"})," ","property to render the children. React does"," ",(0,a.jsx)("a",{href:"https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects",children:"2 commits"})," ","instead of 1."]}),(0,a.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(t.Z,{className:"my-24",iframe:!1,component:r(34911).Z,raw:r(41328)})}),(0,a.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Unstyled"}),(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:["\ud83d\udce6"," ",(0,a.jsx)("a",{href:"https://bundlephobia.com/result?p=@mui/core@latest",children:"784 B gzipped"})]})}),(0,a.jsx)(c.Z,{className:"mb-40",component:"div",children:"As the component does not have any styles, it also comes with the unstyled package."}),(0,a.jsx)(s.Z,{component:"pre",className:"language-js",children:" \nimport NoSsr from '@mui/core/NoSsr';\n"})]})}},41328:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport Box from "@mui/material/Box";\nimport NoSsr from "@mui/material/NoSsr";\n\nfunction LargeTree() {\n  return Array.from(new Array(5000)).map((_, index) => (\n    <span key={index}>.</span>\n  ));\n}\n\nexport default function FrameDeferring() {\n  const [state, setState] = React.useState({\n    open: false,\n    defer: false,\n  });\n\n  return (\n    <div>\n      <button\n        type="button"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: false,\n          })\n        }\n      >\n        {\'Render NoSsr defer="false"\'}\n      </button>\n      <br />\n      <button\n        type="button"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: true,\n          })\n        }\n      >\n        {\'Render NoSsr defer="true"\'}\n      </button>\n      <br />\n      <br />\n      <Box sx={{ width: 300, display: "flex", flexWrap: "wrap" }}>\n        {state.open ? (\n          <React.Fragment>\n            <div>Outside NoSsr</div>\n            <NoSsr defer={state.defer}>\n              .....Inside NoSsr\n              <LargeTree />\n            </NoSsr>\n          </React.Fragment>\n        ) : null}\n      </Box>\n    </div>\n  );\n}\n'},87606:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='import * as React from "react";\nimport NoSsr from "@mui/material/NoSsr";\nimport Box from "@mui/material/Box";\n\nexport default function SimpleNoSsr() {\n  return (\n    <div>\n      <Box\n        sx={{ p: 2, bgcolor: "primary.main", color: "primary.contrastText" }}\n      >\n        Server and Client\n      </Box>\n      <NoSsr>\n        <Box\n          sx={{\n            p: 2,\n            bgcolor: "secondary.main",\n            color: "secondary.contrastText",\n          }}\n        >\n          Client only\n        </Box>\n      </NoSsr>\n    </div>\n  );\n}\n'}}]);