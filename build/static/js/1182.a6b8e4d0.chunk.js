"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1182],{11182:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var o=a(11755),r=a(43270),s=a(1432),n=a(24193),l=a(73428),i=a(93405),c=a(44758),d=a(19536),m=a(1550),u=a(83929),x=a(24631),p=a(61113),h=a(28303),f=a(3463),j=a(58970),v=a(46417);const b=f.Ry().shape({email:f.Z_().email("You must enter a valid email").required("You must enter a email"),password:f.Z_().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum.")}),y={email:"",password:"",remember:!0};const Z=function(){const{control:e,formState:t,handleSubmit:a,reset:f}=(0,r.cI)({mode:"onChange",defaultValues:y,resolver:(0,s.X)(b)}),{isValid:Z,dirtyFields:w,errors:g}=t;return(0,v.jsxs)("div",{className:"flex flex-col flex-auto p-16 sm:p-24 md:flex-row md:p-0 overflow-hidden",children:[(0,v.jsxs)("div",{className:"flex flex-col flex-grow-0 items-center p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left",children:[(0,v.jsx)(o.E.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1,transition:{delay:.1}},children:(0,v.jsx)("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})}),(0,v.jsx)(o.E.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:(0,v.jsxs)(p.Z,{className:"text-32 sm:text-44 font-semibold leading-tight",children:["Welcome ",(0,v.jsx)("br",{}),"to the ",(0,v.jsx)("br",{})," FUSE React!"]})}),(0,v.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:(0,v.jsx)(p.Z,{variant:"subtitle1",className:"mt-32 font-medium",children:"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."})})]}),(0,v.jsx)(l.Z,{component:o.E.div,initial:{x:200},animate:{x:0},transition:{bounceDamping:0},className:"w-full max-w-400 mx-auto m-16 md:m-0 rounded-20 md:rounded-none",square:!0,layout:!0,children:(0,v.jsxs)(i.Z,{className:"flex flex-col items-center justify-center p-16 sm:p-32 md:p-48 md:pt-128 ",children:[(0,v.jsx)(p.Z,{variant:"h6",className:"mb-24 font-semibold text-18 sm:text-24",children:"Login to your account"}),(0,v.jsxs)("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:a((function(){f(y)})),children:[(0,v.jsx)(r.Qr,{name:"email",control:e,render:e=>{var t;let{field:a}=e;return(0,v.jsx)(x.Z,{...a,className:"mb-16",label:"Email",autoFocus:!0,type:"email",error:!!g.email,helperText:null===g||void 0===g||null===(t=g.email)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0})}}),(0,v.jsx)(r.Qr,{name:"password",control:e,render:e=>{var t;let{field:a}=e;return(0,v.jsx)(x.Z,{...a,className:"mb-16",label:"Password",type:"password",error:!!g.password,helperText:null===g||void 0===g||null===(t=g.password)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0})}}),(0,v.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center sm:justify-between",children:[(0,v.jsx)(r.Qr,{name:"remember",control:e,render:e=>{let{field:t}=e;return(0,v.jsx)(m.Z,{children:(0,v.jsx)(u.Z,{label:"Remember Me",control:(0,v.jsx)(c.Z,{...t})})})}}),(0,v.jsx)(h.rU,{className:"font-normal",to:"/pages/auth/forgot-password-2",children:"Forgot Password?"})]}),(0,v.jsx)(n.Z,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"LOG IN",disabled:j.Z.isEmpty(w)||!Z,type:"submit",children:"Login"})]}),(0,v.jsxs)("div",{className:"my-24 flex items-center justify-center",children:[(0,v.jsx)(d.Z,{className:"w-32"}),(0,v.jsx)("span",{className:"mx-8 font-semibold",children:"OR"}),(0,v.jsx)(d.Z,{className:"w-32"})]}),(0,v.jsx)(n.Z,{variant:"contained",color:"secondary",size:"small",className:"w-192 mb-8",children:"Log in with Google"}),(0,v.jsx)(n.Z,{variant:"contained",color:"primary",size:"small",className:"w-192",children:"Log in with Facebook"}),(0,v.jsxs)("div",{className:"flex flex-col items-center justify-center pt-32 pb-24",children:[(0,v.jsx)("span",{className:"font-normal",children:"Don't have an account?"}),(0,v.jsx)(h.rU,{className:"font-normal",to:"/pages/auth/register-2",children:"Create an account"})]})]})})]})}},44758:(e,t,a)=>{a.d(t,{Z:()=>k});var o=a(63366),r=a(87462),s=a(47313),n=(a(75192),a(92661)),l=a(17551),i=a(97423),c=a(54750),d=a(46417);const m=(0,c.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=(0,c.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,c.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var p=a(91615),h=a(77342),f=a(17592),j=a(67794);function v(e){return(0,j.Z)("MuiCheckbox",e)}const b=(0,a(23262).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],Z=(0,f.ZP)(i.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat((0,p.Z)(a.color))]]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({color:t.palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:(0,l.Fq)("default"===a.color?t.palette.action.active:t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{["&.".concat(b.checked,", &.").concat(b.indeterminate)]:{color:t.palette[a.color].main},["&.".concat(b.disabled)]:{color:t.palette.action.disabled}})})),w=(0,d.jsx)(u,{}),g=(0,d.jsx)(m,{}),N=(0,d.jsx)(x,{}),k=s.forwardRef((function(e,t){var a,l;const i=(0,h.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=w,color:m="primary",icon:u=g,indeterminate:x=!1,indeterminateIcon:f=N,inputProps:j,size:b="medium"}=i,k=(0,o.Z)(i,y),C=x?f:u,z=x?f:c,S=(0,r.Z)({},i,{color:m,indeterminate:x,size:b}),P=(e=>{const{classes:t,indeterminate:a,color:o}=e,s={root:["root",a&&"indeterminate","color".concat((0,p.Z)(o))]},l=(0,n.Z)(s,v,t);return(0,r.Z)({},t,l)})(S);return(0,d.jsx)(Z,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":x},j),icon:s.cloneElement(C,{fontSize:null!=(a=C.props.fontSize)?a:b}),checkedIcon:s.cloneElement(z,{fontSize:null!=(l=z.props.fontSize)?l:b}),ownerState:S,ref:t},k,{classes:P}))}))}}]);