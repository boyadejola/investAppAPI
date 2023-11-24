"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8627],{44269:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(1483),i=n(75908),a=n(73428),s=n(71263),r=n(65280),c=n(5297),l=n(83061),d=n(47313),m=n(1168),h=n(10223),p=n(21871),u=n(95682),g=n(35301),y=n(19860),x=n(17592),f=n(70499),b=n(46417);function j(e){const{children:t,document:n}=e,o=(0,y.Z)();d.useEffect((()=>{n.body.dir=o.direction}),[n,o.direction]);const i=d.useMemo((()=>(0,p.Z)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===o.direction?[h.Z]:[]})),[n,o.direction]),a=d.useCallback((()=>n.defaultView),[n]);return(0,b.jsx)(g.LC,{target:n.head,stylisPlugins:"rtl"===o.direction?[h.Z]:[],children:(0,b.jsxs)(u.C,{value:i,children:[(0,b.jsx)(f.Z,{styles:()=>({html:{fontSize:"62.5%"}})}),d.cloneElement(t,{window:a})]})})}const v=(0,x.ZP)("iframe")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function Z(e){var t;const{children:n,name:o,...i}=e,a="".concat(o," demo"),s=d.useRef(null),[r,c]=d.useReducer((()=>!0),!1);d.useEffect((()=>{const e=s.current.contentDocument;null==e||"complete"!==e.readyState||r||c()}),[r]);const l=null===(t=s.current)||void 0===t?void 0:t.contentDocument;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{onLoad:c,ref:s,title:a,...i}),!1!==r?m.createPortal((0,b.jsx)(j,{document:l,children:n}),l.body):null]})}const T=d.memo(Z);function w(e){const[t,n]=(0,d.useState)(e.currentTabIndex),{component:m,raw:h,iframe:p,className:u}=e;return(0,b.jsxs)(a.Z,{className:(0,l.default)(u,"shadow"),children:[(0,b.jsx)(i.Z,{position:"static",color:"default",className:"shadow-0",children:(0,b.jsxs)(c.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:t,onChange:function(e,t){n(t)},children:[m&&(0,b.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,b.jsx)(s.Z,{children:"remove_red_eye"})}),h&&(0,b.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,b.jsx)(s.Z,{children:"code"})})]})}),(0,b.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,b.jsx)("div",{className:0===t?"flex flex-1 max-w-full":"hidden",children:m&&(p?(0,b.jsx)(T,{children:(0,b.jsx)(m,{})}):(0,b.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,b.jsx)(m,{})}))}),(0,b.jsx)("div",{className:1===t?"flex flex-1":"hidden",children:h&&(0,b.jsx)("div",{className:"flex flex-1",children:(0,b.jsx)(o.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}w.defaultProps={currentTabIndex:0};const N=w},30652:(e,t,n)=>{n.d(t,{Z:()=>s});n(47313);var o=n(9506),i=n(61113),a=n(46417);function s(){return(0,a.jsxs)(o.Z,{sx:{width:"100%",maxWidth:500},children:[(0,a.jsx)(i.Z,{variant:"h1",component:"div",gutterBottom:!0,children:"h1. Heading"}),(0,a.jsx)(i.Z,{variant:"h2",gutterBottom:!0,component:"div",children:"h2. Heading"}),(0,a.jsx)(i.Z,{variant:"h3",gutterBottom:!0,component:"div",children:"h3. Heading"}),(0,a.jsx)(i.Z,{variant:"h4",gutterBottom:!0,component:"div",children:"h4. Heading"}),(0,a.jsx)(i.Z,{variant:"h5",gutterBottom:!0,component:"div",children:"h5. Heading"}),(0,a.jsx)(i.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"h6. Heading"}),(0,a.jsx)(i.Z,{variant:"subtitle1",gutterBottom:!0,component:"div",children:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),(0,a.jsx)(i.Z,{variant:"subtitle2",gutterBottom:!0,component:"div",children:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),(0,a.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),(0,a.jsx)(i.Z,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),(0,a.jsx)(i.Z,{variant:"button",display:"block",gutterBottom:!0,children:"button text"}),(0,a.jsx)(i.Z,{variant:"caption",display:"block",gutterBottom:!0,children:"caption text"}),(0,a.jsx)(i.Z,{variant:"overline",display:"block",gutterBottom:!0,children:"overline text"})]})}},15335:(e,t,n)=>{n.d(t,{Z:()=>s});n(47313);var o=n(17592),i=n(46417);const a=(0,o.ZP)("div")((e=>{let{theme:t}=e;return{...t.typography.button,backgroundColor:t.palette.background.paper,padding:t.spacing(1)}}));function s(){return(0,i.jsx)(a,{children:"This div's text looks like that of a button."})}},27810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(44269),i=n(1483),a=n(24193),s=n(71263),r=n(61113),c=n(46417);const l=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:(0,c.jsxs)(a.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/typography",target:"_blank",role:"button",children:[(0,c.jsx)(s.Z,{children:"link"}),(0,c.jsx)("span",{className:"mx-4",children:"Reference"})]})}),(0,c.jsx)(r.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Typography"}),(0,c.jsx)(r.Z,{className:"description",children:"Use typography to present your design and content as clearly and efficiently as possible."}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["Too many type sizes and styles at once can spoil any layout. A"," ",(0,c.jsx)("a",{href:"https://material.io/design/typography/#type-scale",children:"typographic scale"})," ","has a limited set of type sizes that work well together along with the layout grid."]}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"General"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["The ",(0,c.jsx)("em",{children:"Roboto"})," font will ",(0,c.jsx)("strong",{children:"not"})," be automatically loaded by MUI. You are responsible for loading any fonts used in your application. Roboto Font has a few easy ways to get started. For more advanced configuration, check out",(0,c.jsx)("a",{href:"/customization/typography/",children:"the theme customization section"}),"."]}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Roboto Font CDN"}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"Shown below is a sample link markup used to load the Roboto font from a CDN:"}),(0,c.jsx)(i.Z,{component:"pre",className:"language-html",children:" \n<link\n  rel='stylesheet'\n  href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'\n/>\n"}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Install with npm"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["You can"," ",(0,c.jsx)("a",{href:"https://www.npmjs.com/package/@fontsource/roboto",children:"install it"})," ","by typing the below command in your terminal:"]}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)("code",{children:"npm install @fontsource/roboto"})}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"Then, you can import it in your entry-point."}),(0,c.jsx)(i.Z,{component:"pre",className:"language-js",children:" \nimport '@fontsource/roboto/300.css';\nimport '@fontsource/roboto/400.css';\nimport '@fontsource/roboto/500.css';\nimport '@fontsource/roboto/700.css';\n"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["For more info check out"," ",(0,c.jsx)("a",{href:"https://github.com/fontsource/fontsource",children:"Fontsource"}),"."]}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"Fontsource can be configured to load specific subsets, weights and styles. MUI default typography configuration only relies on 300, 400, 500, and 700 font weights."}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Component"}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"The Typography component makes it easy to apply a default set of font weights and sizes in your application."}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{className:"my-24",iframe:!1,component:n(30652).Z,raw:n(47395)})}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Theme"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["In some situations you might not be able to use the"," ",(0,c.jsx)("code",{children:"Typography"})," component. Hopefully, you might be able to take advantage of the"," ",(0,c.jsx)("a",{href:"/customization/default-theme/?expand-path=$.typography",children:(0,c.jsx)("code",{children:"typography"})})," ","keys of the theme."]}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{className:"my-24",iframe:!1,component:n(15335).Z,raw:n(20491)})}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Changing the semantic element"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["The Typography component uses the ",(0,c.jsx)("code",{children:"variantMapping"})," prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element."]}),(0,c.jsx)("ul",{children:(0,c.jsxs)("li",{children:["You can change the underlying element for a one-off situation with the"," ",(0,c.jsx)("code",{children:"component"})," prop:"]})}),(0,c.jsx)(i.Z,{component:"pre",className:"language-jsx",children:" \n{\n  /* There is already an h1 in the page, let's not duplicate it. */\n}\n<Typography variant='h1' component='h2'>\n  h1. Heading\n</Typography>;\n"}),(0,c.jsx)("ul",{children:(0,c.jsxs)("li",{children:["You can change the mapping"," ",(0,c.jsx)("a",{href:"/customization/theme-components/#default-props",children:"globally using the theme"}),":"]})}),(0,c.jsx)(i.Z,{component:"pre",className:"language-js",children:" \nconst theme = createTheme({\n  components: {\n    MuiTypography: {\n      defaultProps: {\n        variantMapping: {\n          h1: 'h2',\n          h2: 'h2',\n          h3: 'h2',\n          h4: 'h2',\n          h5: 'h2',\n          h6: 'h2',\n          subtitle1: 'h2',\n          subtitle2: 'h2',\n          body1: 'span',\n          body2: 'span',\n        },\n      },\n    },\n  },\n});\n"}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Adding & disabling variants"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["In addition to using the default typography variants, you can add custom ones, or disable any you don't need. See the"," ",(0,c.jsx)("a",{href:"/customization/typography/#adding-amp-disabling-variants",children:"Adding & disabling variants"})," ","example for more info."]}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"System props"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["As a CSS utility component, the ",(0,c.jsx)("code",{children:"Typography"})," supports all"," ",(0,c.jsx)("a",{href:"/system/properties/",children:(0,c.jsx)("code",{children:"system"})})," ","properties. You can use them as prop directly on the component. For instance, a margin-top:"]}),(0,c.jsx)(i.Z,{component:"pre",className:"language-jsx",children:" \n<Typography mt={2}>\n"}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"A few key factors to follow for an accessible typography:"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Color"}),". Provide enough contrast between text and its background, check out the minimum recommended"," ",(0,c.jsx)("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",children:"WCAG 2.0 color contrast ratio"})," ","(4.5:1)."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Font size"}),". Use"," ",(0,c.jsx)("a",{href:"/customization/typography/#font-size",children:"relative units (rem)"})," ","to accommodate the user's settings."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Heading hierarchy"}),"."," ",(0,c.jsx)("a",{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/",children:"Don't skip"})," ","heading levels. In order to solve this problem, you need to"," ",(0,c.jsx)("a",{href:"#changing-the-semantic-element",children:"separate the semantics from the style"}),"."]})]})]})}},47395:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o='import * as React from "react";\nimport Box from "@mui/material/Box";\nimport Typography from "@mui/material/Typography";\n\nexport default function Types() {\n  return (\n    <Box sx={{ width: "100%", maxWidth: 500 }}>\n      <Typography variant="h1" component="div" gutterBottom>\n        h1. Heading\n      </Typography>\n      <Typography variant="h2" gutterBottom component="div">\n        h2. Heading\n      </Typography>\n      <Typography variant="h3" gutterBottom component="div">\n        h3. Heading\n      </Typography>\n      <Typography variant="h4" gutterBottom component="div">\n        h4. Heading\n      </Typography>\n      <Typography variant="h5" gutterBottom component="div">\n        h5. Heading\n      </Typography>\n      <Typography variant="h6" gutterBottom component="div">\n        h6. Heading\n      </Typography>\n      <Typography variant="subtitle1" gutterBottom component="div">\n        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        Quos blanditiis tenetur\n      </Typography>\n      <Typography variant="subtitle2" gutterBottom component="div">\n        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        Quos blanditiis tenetur\n      </Typography>\n      <Typography variant="body1" gutterBottom>\n        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\n        blanditiis tenetur unde suscipit, quam beatae rerum inventore\n        consectetur, neque doloribus, cupiditate numquam dignissimos laborum\n        fugiat deleniti? Eum quasi quidem quibusdam.\n      </Typography>\n      <Typography variant="body2" gutterBottom>\n        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\n        blanditiis tenetur unde suscipit, quam beatae rerum inventore\n        consectetur, neque doloribus, cupiditate numquam dignissimos laborum\n        fugiat deleniti? Eum quasi quidem quibusdam.\n      </Typography>\n      <Typography variant="button" display="block" gutterBottom>\n        button text\n      </Typography>\n      <Typography variant="caption" display="block" gutterBottom>\n        caption text\n      </Typography>\n      <Typography variant="overline" display="block" gutterBottom>\n        overline text\n      </Typography>\n    </Box>\n  );\n}\n'},20491:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o='import * as React from "react";\nimport { styled } from "@mui/material/styles";\n\nconst Div = styled("div")(({ theme }) => ({\n  ...theme.typography.button,\n  backgroundColor: theme.palette.background.paper,\n  padding: theme.spacing(1),\n}));\n\nexport default function TypographyTheme() {\n  return <Div>{"This div\'s text looks like that of a button."}</Div>;\n}\n'}}]);