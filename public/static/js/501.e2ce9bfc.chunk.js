"use strict";(self.webpackChunkface_recognition=self.webpackChunkface_recognition||[]).push([[501],{9788:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r=t(2791),a=t.p+"static/media/bg.d95480a0620985246f60.mkv",i=t(7689),s=t(184);var c=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("video",{className:"bg-video",src:a,autoPlay:!0,muted:!0,loop:!0,id:"myVideo"}),(0,s.jsx)("section",{className:"wrapper",children:(0,s.jsx)(i.j3,{})})]})},l=t(1413),o=t(5987),u=t(1087),d=t(1630),f=["children","path"];var h=function(e){var n=e.children,t=e.path,a=(0,o.Z)(e,f);return(0,r.createElement)(d.E.span,(0,l.Z)((0,l.Z)({},a),{},{key:t}),(0,s.jsxs)(u.rU,{className:"neon-link",to:"/"+t,children:[(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),n]}))};var x=function(){return(0,s.jsxs)("div",{className:"neon-link-container",children:[(0,s.jsx)(h,{path:"login",initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{delay:.4},children:"Kirish"}),(0,s.jsx)(h,{path:"register",initial:{opacity:0,x:100},exit:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{delay:.4},children:"Ro`yxatdan o`tish"})]})},v=t(4165),p=t(5861),m=t(9439),j=t(97),y=t.n(j),g=t(9434),Z=t(1611),b=t(8244),w=t(3131);var N=function(){var e=(0,g.I0)(),n=(0,g.v9)(Z.Vb),t=(0,g.v9)(Z.SG),a=(0,r.useRef)(),i=(0,r.useState)(!1),c=(0,m.Z)(i,2),l=c[0],o=c[1],u=(0,r.useRef)(null),f=function(){var n=(0,p.Z)((0,v.Z)().mark((function n(t){var r;return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.qB.tinyFaceDetector.loadFromUri("facenet/models/tiny_face_detector");case 2:r=0,a.current=setInterval((0,p.Z)((0,v.Z)().mark((function n(){var t;return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r<=40)){n.next=7;break}return n.next=3,b.Qr(u.current.video,new b.aK);case 3:1===(t=n.sent).length&&t[0].score>.5?(r++,e((0,Z.y$)("#00ff00")),e((0,Z.rS)("Stand still for "+Math.round(4-r/10)+" seconds."))):(r=0,e((0,Z.y$)("#f00000")),e((0,Z.rS)("Place the face in the oval."))),n.next=8;break;case 7:e((0,w.yN)(u.current.getScreenshot())),clearInterval(a.current);case 8:case"end":return n.stop()}}),n)}))),100);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,r.useEffect)((function(){navigator.getUserMedia({video:!0},(function(){o(!0)}),(function(){o(!1)}))}),[]),(0,s.jsxs)(d.E.div,{initial:{opacity:0,scale:.2},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.2},transition:{duration:.6},style:{textAlign:"center"},children:[l&&(0,s.jsx)(d.E.p,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.5},className:"face-message",children:n}),(0,s.jsx)("div",{className:"camera-container",children:l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y(),{id:"webcam",audio:!1,ref:u,screenshotFormat:"image/jpeg",screenshotQuality:1,mirrored:!0,videoConstraints:{facingMode:"user"},onUserMedia:f,onUserMediaError:function(){}}),(0,s.jsx)("div",{className:"face-overlay",style:{borderColor:t}})]})})]})},k=function(){var e=(0,g.I0)(),n=(0,g.v9)((function(e){return e.auth.request.screenshot})),t=(0,g.v9)((function(e){return e.facenet.faces})).length>0,a=(0,r.useRef)(),i=(0,r.useRef)(),c=function(){var n=(0,p.Z)((0,v.Z)().mark((function n(){return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((0,Z.PN)(null)),e((0,Z._g)({previewRef:i,canvasRef:a})).then((function(e){var n=e.payload;if(n&&n.length>0){var t={lineWidth:4,boxColor:1===n.length&&n[0].detection.score>.75?"#00ff00":"#f00000",drawLabelOptions:{fontColor:"#1e40af"}};n.map((function(e){var n=e.detection.box;return t.label="Score: "+Math.round(100*e.detection.score)/100,new b.ii.Jo(n,t).draw(a.current)}))}}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"preview ".concat(t?"stopAnimate":""),children:null!=n&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("canvas",{id:"preview-canvas",ref:a,children:"Your browser does not support the HTML canvas tag."}),(0,s.jsx)("img",{ref:i,src:n,alt:"preview",className:"preview",onLoad:c})]})})},E=function(){var e=(0,g.v9)((function(e){return e.auth.error})),n=(0,g.v9)(Z.z_),t=(0,g.v9)((function(e){return e.auth.request})),r=function(n){return Object.values(e[n]).filter((function(e){return null!=e}))},a=null==n?r("login"):r("login").concat(n);return(0,s.jsxs)(d.E.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{delay:.5},children:[(0,s.jsx)("div",{className:"alert alert-success "+(200===t.code&&0===a.length?"":"hidden"),role:"alert",children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:t.msg})})}),(0,s.jsx)("div",{className:"alert alert-danger "+(0===a.length?"hidden":""),role:"alert",children:(0,s.jsx)("ul",{children:a.map((function(e,n){return Array.isArray(e)?e.map((function(e,n){return(0,s.jsx)("li",{children:e},n)})):(0,s.jsx)("li",{children:e},n)}))})})]})};var I=function(){var e=(0,i.s0)(),n=(0,g.I0)(),t=(0,g.v9)((function(e){return e.auth.request.screenshot})),r=(0,g.v9)((function(e){return e.facenet.faces}));return r.length>0&&setTimeout((function(){var a={screenshot:t,descriptor:Object.values(r[0].descriptor)};n((0,w.pH)(a)).then((function(t){if("fulfilled"===t.meta.requestStatus)return e("/dashboard",{replace:!0});setTimeout((function(){n((0,w.Z2)({login:{serverErr:null}})),n((0,Z.y$)("#ddd")),n((0,Z.rS)("Place the face in the oval.")),n((0,w.yN)(null))}),3e3)}))}),1500),(0,s.jsxs)("div",{className:"login-container",children:[(0,s.jsx)(E,{}),t&&(0,s.jsx)(k,{}),!t&&(0,s.jsx)(N,{})]})},S=t(4554),A=t(878),C=t(5803),R=t(3835),W=t(7957),q=t(890),M=t(57),F=t(533);var P=function(){var e=(0,g.I0)(),n=(0,g.v9)((function(e){return e.auth.request.screenshot})),t=(0,i.s0)(),r=(0,g.v9)((function(e){return e.facenet.faces}));return(0,s.jsx)(d.E.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:100},transition:{duration:.6},children:(0,s.jsxs)(S.Z,{component:"form",onSubmit:function(a){a.preventDefault();var i=a.target,s=i.name,c=i.email,l=i.password,o={name:s.value,email:c.value,password:l.value,screenshot:n,descriptor:Object.values(r[0].descriptor)};e((0,w.a$)(o)).then((function(e){if("fulfilled"===e.meta.requestStatus)return t("/dashboard",{replace:!0})}))},sx:{"& > :not(style)":{my:4},backgroundColor:"rgba(255,255,255,0.9)",padding:"1rem",borderRadius:"1rem",width:"30vw"},noValidate:!0,autoComplete:"off",children:[(0,s.jsx)(q.Z,{variant:"h4",sx:{color:"#3c3c3c"},align:"center",gutterBottom:!0,children:"Ro`yxatdan o`tish"}),(0,s.jsxs)(S.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,s.jsx)(C.Z,{sx:{color:"action.active",mr:3,my:.5}}),(0,s.jsx)(A.Z,{fullWidth:!0,id:"name",label:"Name",variant:"standard",size:"small"})]}),(0,s.jsxs)(S.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,s.jsx)(R.Z,{sx:{color:"action.active",mr:3,my:.5}}),(0,s.jsx)(A.Z,{type:"email",fullWidth:!0,id:"email",label:"Email",variant:"standard",size:"small"})]}),(0,s.jsxs)(S.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,s.jsx)(W.Z,{sx:{color:"action.active",mr:3,my:.5}}),(0,s.jsx)(A.Z,{type:"password",fullWidth:!0,id:"password",label:"Password",variant:"standard",size:"small"})]}),(0,s.jsxs)(S.Z,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"2rem"},children:[(0,s.jsx)(F.Z,{href:"/login",underline:"hover",children:"Kirish"}),(0,s.jsx)(M.Z,{type:"submit",variant:"contained",children:"Ro`yxatdan o`tish"})]})]})})},_=function(){var e=(0,g.v9)((function(e){return e.auth.error})),n=(0,g.v9)(Z.z_),t=(0,g.v9)((function(e){return e.auth.request})),r=function(n){return Object.values(e[n]).filter((function(e){return null!=e}))},a=null==n?r("register"):r("register").concat(n);return(0,s.jsxs)(d.E.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{delay:.5},children:[(0,s.jsx)("div",{className:"alert alert-success "+(200===t.code&&0===a.length?"":"hidden"),role:"alert",children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:t.msg})})}),(0,s.jsx)("div",{className:"alert alert-danger "+(0===a.length?"hidden":""),role:"alert",children:(0,s.jsx)("ul",{children:a.map((function(e,n){return Array.isArray(e)?e.map((function(e,n){return(0,s.jsx)("li",{children:e},n)})):(0,s.jsx)("li",{children:e},n)}))})})]})};var $=function(){var e=(0,g.I0)(),n=(0,g.v9)((function(e){return e.auth.request.screenshot})),t=(0,g.v9)((function(e){return e.facenet.faces}));return t.length<0&&(e((0,w.Z2)({login:{serverErr:null}})),e((0,Z.y$)("#ddd")),e((0,Z.rS)("Place the face in the oval.")),e((0,w.yN)(null))),(0,r.useEffect)((function(){e((0,w.Z2)({login:{serverErr:null}})),e((0,Z.y$)("#ddd")),e((0,Z.rS)("Place the face in the oval.")),e((0,w.yN)(null))}),[e]),(0,s.jsxs)("section",{children:[(0,s.jsx)(_,{}),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem"},children:[!n&&(0,s.jsx)(N,{}),n&&(0,s.jsx)(k,{}),t.length>0&&(0,s.jsx)(P,{})]})]})};var z=function(){var e=(0,g.v9)((function(e){return e.auth.user}));return e?(0,s.jsxs)(S.Z,{sx:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(q.Z,{color:"primary",variant:"h1",children:"Dashboard"}),e&&(0,s.jsxs)(q.Z,{color:"gold",variant:"h2",children:["Welcome ",(0,s.jsx)("span",{style:{color:"#3c3c3c"},children:e.name})]})]}):(0,s.jsx)(i.Fg,{to:"/"})},O=t(3791);var U=function(){return(0,s.jsx)(O.M,{children:(0,s.jsxs)(i.Z5,{children:[(0,s.jsxs)(i.AW,{element:(0,s.jsx)(c,{}),children:[(0,s.jsx)(i.AW,{path:"/",index:!0,element:(0,s.jsx)(x,{})}),(0,s.jsx)(i.AW,{path:"/login",element:(0,s.jsx)(I,{})}),(0,s.jsx)(i.AW,{path:"/register",element:(0,s.jsx)($,{})})]}),(0,s.jsx)(i.AW,{path:"/dashboard",element:(0,s.jsx)(z,{})})]})})}}}]);
//# sourceMappingURL=501.e2ce9bfc.chunk.js.map