(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(15),r=a.n(c),i=(a(36),a(21)),o=a(18),l=a(27),d=a.n(l),j=a(29),b=a(13),u=a(34),h=a(17),O=a(145),m=a(155),p=a(156),x=a(158),w=a(146),f=a(149),g=a(62),v=a.n(g),y=a(4),P=a(141),N=a(147),C=a(148),S=a(154),k=a(151),W=a(153),L=a(76),D=(a(99),L.a.initializeApp({apiKey:"AIzaSyD6gr7-5as5OHUsOWBk89MOA8Rncgg3akw",authDomain:"auth-1bc19.firebaseapp.com",projectId:"auth-1bc19",storageBucket:"auth-1bc19.appspot.com",messagingSenderId:"553594943233",appId:"1:553594943233:web:5fd129e900233323898d00"}).auth()),F=a(2),A=s.a.createContext();function E(){return Object(n.useContext)(A)}function U(e){var t=e.children,a=Object(n.useState)(),s=Object(h.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(!0),o=Object(h.a)(i,2),l=o[0],d=o[1];Object(n.useEffect)((function(){return D.onAuthStateChanged((function(e){r(e),d(!1)}))}),[]);var j={currentUser:c,signup:function(e,t){return D.createUserWithEmailAndPassword(e,t)},login:function(e,t){return D.signInWithEmailAndPassword(e,t)},logout:function(){return D.signOut()},resetPassword:function(e){return D.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(F.jsx)(A.Provider,{value:j,children:!l&&t})}var I=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"}}}));var B=function(){var e=E().login,t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(""),g=Object(h.a)(l,2),P=g[0],L=g[1],D=Object(o.g)(),A=I(),U=s.a.useState({email:"",password:"",showPassword:!1}),B=Object(h.a)(U,2),H=B[0],q=B[1];function M(){return(M=Object(u.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,L(""),r(!0),t.next=6,e(H.email,H.password);case 6:D.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),L("Couldn't Log In");case 12:r(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}var T=function(e){return function(t){q(Object(b.a)(Object(b.a)({},H),{},Object(j.a)({},e,t.target.value)))}};return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"main_bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(F.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(F.jsx)(S.a,{className:"card",style:{opacity:"0.8"},children:Object(F.jsxs)(S.a.Body,{children:[Object(F.jsx)(v.a,{className:"login-icon",style:{display:"block",fontSize:"3rem"}}),Object(F.jsx)("div",{className:"login-title",children:"Log In"}),P&&Object(F.jsx)(k.a,{variant:"danger",children:P}),Object(F.jsxs)(W.a,{onSubmit:function(e){return M.apply(this,arguments)},children:[Object(F.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:[Object(F.jsx)(m.a,{required:!0,htmlFor:"outlined-basic",children:"Email"}),Object(F.jsx)(p.a,{id:"outlined-basic",type:"text",values:H.email,onChange:T("email"),autoComplete:"off",labelWidth:60})]}),Object(F.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:[Object(F.jsx)(m.a,{required:!0,htmlFor:"outlined-adornment-password",children:"Password"}),Object(F.jsx)(p.a,{id:"outlined-adornment-password",type:H.showPassword?"text":"password",value:H.password,onChange:T("password"),endAdornment:Object(F.jsx)(x.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){q(Object(b.a)(Object(b.a)({},H),{},{showPassword:!H.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:H.showPassword?Object(F.jsx)(N.a,{}):Object(F.jsx)(C.a,{})})}),labelWidth:90})]}),Object(F.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:c,className:Object(y.a)(A.withoutLabel),children:"Submit"})]}),Object(F.jsx)(i.b,{to:"/forgot-password",children:Object(F.jsx)("p",{className:"link",children:"Forgot Password ?"})}),Object(F.jsx)(i.b,{to:"/sign-up",children:Object(F.jsx)("p",{className:"link",children:"Don't have an account ? Sign Up"})})]})})})})})};var H=function(){return Object(F.jsx)("h1",{className:"navbar",children:"booo"})};a(68);var q=function(){var e=E(),t=e.currentUser,a=e.logout,s=Object(n.useState)(!1),c=Object(h.a)(s,2),r=c[0],l=c[1],j=Object(n.useState)(""),b=Object(h.a)(j,2),O=b[0],m=b[1],p=Object(o.g)();function x(){return(x=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(""),e.prev=1,l(!0),e.next=5,a();case 5:p.push("/sign-in"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(!1),console.log(e.t0),m("Failed to Log Out");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(F.jsxs)("div",{className:"bg",children:[Object(F.jsx)(H,{}),Object(F.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(F.jsxs)("div",{className:"w-100",style:{maxWidth:"400px",fontSize:"18px",color:"white"},children:[Object(F.jsx)("strong",{className:"mr-1",children:"Email: "}),Object(F.jsx)("span",{children:t.email}),O&&Object(F.jsx)(k.a,{variant:"danger",children:O}),Object(F.jsx)(i.b,{to:"/update-profile",children:Object(F.jsx)("p",{children:"Update Profile"})}),Object(F.jsx)(f.a,{disabled:r,onClick:function(){return x.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:"w-25 mt-4",children:"Logout"})]})})]})},M=a(152),T=a(150),z=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"},HeplerText:{color:"black"}}}));var R=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(h.a)(r,2),g=l[0],P=l[1],L=E().signup,D=Object(o.g)(),A=z(),U=s.a.useState({email:"",password:"",showPassword:!1,confirmPassword:"",showConfirmPassword:!1}),I=Object(h.a)(U,2),B=I[0],H=I[1];function q(){return(q=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),B.password===B.confirmPassword){e.next=3;break}return e.abrupt("return",c("Password do not match"));case 3:return e.prev=3,c(""),P(!0),e.next=8,L(B.email,B.password);case 8:D.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),c("Failed to Create Account");case 14:P(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var R=function(e){return function(t){H(Object(b.a)(Object(b.a)({},B),{},Object(j.a)({},e,t.target.value)))}},_=function(e){e.preventDefault()};return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"main_bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(F.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(F.jsx)(S.a,{className:"card",style:{opacity:"0.8"},children:Object(F.jsxs)(S.a.Body,{children:[Object(F.jsx)(v.a,{className:"login-icon",style:{display:"block",fontSize:"3rem"}}),Object(F.jsx)("div",{className:"login-title",children:"Sign Up"}),a&&Object(F.jsx)(k.a,{variant:"danger",children:a}),Object(F.jsxs)(W.a,{onSubmit:function(e){return q.apply(this,arguments)},children:[Object(F.jsxs)(O.a,{fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:[Object(F.jsx)(M.a,{required:!0,id:"outlined-basic-email",values:B.email,label:"Email",variant:"outlined",type:"email",autoComplete:"off","aria-describedby":"my-helper-text-email",onChange:R("email")}),Object(F.jsx)(T.a,{id:"my-helper-text-email",className:Object(y.a)(A.HeplerText),children:"We'll never share your email."})]}),Object(F.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:[Object(F.jsx)(m.a,{required:!0,htmlFor:"outlined-adornment-password",children:"Password"}),Object(F.jsx)(p.a,{id:"outlined-adornment-password",type:B.showPassword?"text":"password",value:B.password,autoComplete:"current-password",onChange:R("password"),endAdornment:Object(F.jsx)(x.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(e){H(Object(b.a)(Object(b.a)({},B),{},{showPassword:!B.showPassword}))},onMouseDown:_,edge:"end",children:B.showPassword?Object(F.jsx)(N.a,{}):Object(F.jsx)(C.a,{})})}),labelWidth:90})]}),Object(F.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:[Object(F.jsx)(m.a,{required:!0,htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(F.jsx)(p.a,{id:"outlined-adornment-confirm-password",type:B.showConfirmPassword?"text":"password",value:B.confirmPassword,autoComplete:"current-confirm-password",onChange:R("confirmPassword"),endAdornment:Object(F.jsx)(x.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){H(Object(b.a)(Object(b.a)({},B),{},{showConfirmPassword:!B.showConfirmPassword}))},onMouseDown:_,edge:"end",children:B.showConfirmPassword?Object(F.jsx)(N.a,{}):Object(F.jsx)(C.a,{})})}),labelWidth:150})]}),Object(F.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:g,className:Object(y.a)(A.withoutLabel),children:"Sign UP"})]}),Object(F.jsx)(i.b,{to:"/sign-in",children:Object(F.jsx)("p",{className:"link",children:"Already have an account ? Log In"})})]})})})})})},_=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"}}}));var J=function(){var e,t=E().resetPassword,a=Object(n.useState)(!1),c=Object(h.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(""),x=Object(h.a)(l,2),w=x[0],g=x[1],v=_(),P=s.a.useState({email:""}),N=Object(h.a)(P,2),C=N[0],L=N[1];function D(){return(D=Object(u.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,g(""),o(!0),e.next=6,t(C.email);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g("Failed to reset password");case 11:o(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"main_bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(F.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(F.jsx)(S.a,{className:"card",style:{opacity:"0.8"},children:Object(F.jsxs)(S.a.Body,{children:[Object(F.jsx)("div",{className:"login-title",children:"Reset Password"}),w&&Object(F.jsx)(k.a,{variant:"danger",children:w}),Object(F.jsxs)(W.a,{onSubmit:function(e){return D.apply(this,arguments)},children:[Object(F.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(v.withoutLabel),children:[Object(F.jsx)(m.a,{required:!0,htmlFor:"outlined-basic",children:"Email"}),Object(F.jsx)(p.a,{id:"outlined-basic",type:"text",values:C.email,onChange:(e="email",function(t){L(Object(b.a)(Object(b.a)({},C),{},Object(j.a)({},e,t.target.value)))}),autoComplete:"off",labelWidth:60})]}),Object(F.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:r,className:Object(y.a)(v.withoutLabel),children:"Submit"})]}),Object(F.jsx)(i.b,{to:"/sign-in",children:Object(F.jsx)("p",{className:"link",children:"Back to Login Page"})})]})})})})})},K=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"},HeplerText:{color:"black"}}}));var V=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(h.a)(r,2),d=l[0],u=l[1],g=E(),v=g.currentUser,P=g.updatePassword,L=g.updateEmail,D=Object(o.g)(),A=K(),U=s.a.useState({email:"",password:"",showPassword:!1,confirmPassword:"",showConfirmPassword:!1}),I=Object(h.a)(U,2),B=I[0],H=I[1],q=function(e){return function(t){H(Object(b.a)(Object(b.a)({},B),{},Object(j.a)({},e,t.target.value)))}},T=function(e){e.preventDefault()};return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:" bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(F.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(F.jsx)(S.a,{className:"card",style:{opacity:"0.6"},children:Object(F.jsxs)(S.a.Body,{children:[Object(F.jsx)("div",{className:"login-title",children:"Update Profile"}),a&&Object(F.jsx)(k.a,{variant:"danger",children:a}),Object(F.jsxs)(W.a,{onSubmit:function(e){if(e.preventDefault(),B.password!==B.confirmPassword)return c("Password do not match");var t=[];B.email!==v.email&&t.push(L(B.email)),B.password&&t.push(P(B.password)),c(""),u(!0),Promise.all(t).then((function(){D.push("/")})).catch((function(){c("Failed to update")})).finally((function(){u(!1)}))},children:[Object(F.jsx)(O.a,{fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:Object(F.jsx)(M.a,{required:!0,id:"outlined-basic-email",values:B.email,label:"Email",variant:"outlined",type:"email",autoComplete:"off",onChange:q("email"),defaultValue:v.email})}),Object(F.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:[Object(F.jsx)(m.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(F.jsx)(p.a,{id:"outlined-adornment-password",type:B.showPassword?"text":"password",value:B.password,autoComplete:"current-password",onChange:q("password"),endAdornment:Object(F.jsx)(x.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(e){H(Object(b.a)(Object(b.a)({},B),{},{showPassword:!B.showPassword}))},onMouseDown:T,edge:"end",children:B.showPassword?Object(F.jsx)(N.a,{}):Object(F.jsx)(C.a,{})})}),labelWidth:90})]}),Object(F.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(A.withoutLabel),children:[Object(F.jsx)(m.a,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(F.jsx)(p.a,{id:"outlined-adornment-confirm-password",type:B.showConfirmPassword?"text":"password",value:B.confirmPassword,autoComplete:"current-confirm-password",onChange:q("confirmPassword"),endAdornment:Object(F.jsx)(x.a,{position:"end",children:Object(F.jsx)(w.a,{"aria-label":"toggle password visibility",onClick:function(){H(Object(b.a)(Object(b.a)({},B),{},{showConfirmPassword:!B.showConfirmPassword}))},onMouseDown:T,edge:"end",children:B.showConfirmPassword?Object(F.jsx)(N.a,{}):Object(F.jsx)(C.a,{})})}),labelWidth:150})]}),Object(F.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:d,className:Object(y.a)(A.withoutLabel),children:"Update"})]}),Object(F.jsx)(i.b,{to:"/",children:Object(F.jsx)("p",{className:"link",children:"Cancel"})})]})})})})})},G=a(84);var Q=function(e){var t=e.component,a=Object(G.a)(e,["component"]),n=E().currentUser;return Object(F.jsx)(o.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return n?Object(F.jsx)(t,Object(b.a)({},e)):Object(F.jsx)(o.a,{to:"/sign-in"})}}))};var X=function(){return Object(F.jsx)("div",{children:Object(F.jsx)(i.a,{basename:"login-register-template-react/",children:Object(F.jsx)(U,{children:Object(F.jsxs)(o.d,{children:[Object(F.jsx)(Q,{exact:!0,path:"/",component:q}),Object(F.jsx)(Q,{path:"/update-profile",component:V}),Object(F.jsx)(o.b,{path:"/sign-up",component:R}),Object(F.jsx)(o.b,{path:"/sign-in",component:B}),Object(F.jsx)(o.b,{path:"/forgot-password",component:J})]})})})})};r.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(X,{})}),document.getElementById("root"))},36:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.c6d24a84.chunk.js.map