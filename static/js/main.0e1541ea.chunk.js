(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(16),r=a.n(c),i=(a(38),a(23)),o=a(19),l=a(29),d=a.n(l),j=a(31),b=a(14),u=a(36),h=a(18),O=a(146),m=a(158),p=a(147),x=a(159),f=a(148),w=a(151),g=a(64),v=a.n(g),y=a(3),P=a(142),N=a(149),C=a(150),S=a(157),L=a(155),k=a(156),W=a(77),D=(a(100),W.a.initializeApp({apiKey:"AIzaSyD6gr7-5as5OHUsOWBk89MOA8Rncgg3akw",authDomain:"auth-1bc19.firebaseapp.com",projectId:"auth-1bc19",storageBucket:"auth-1bc19.appspot.com",messagingSenderId:"553594943233",appId:"1:553594943233:web:5fd129e900233323898d00"}).auth()),E=a(2),F=s.a.createContext();function U(){return Object(n.useContext)(F)}function A(e){var t=e.children,a=Object(n.useState)(),s=Object(h.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(!0),o=Object(h.a)(i,2),l=o[0],d=o[1];Object(n.useEffect)((function(){return D.onAuthStateChanged((function(e){r(e),d(!1)}))}),[]);var j={currentUser:c,signup:function(e,t){return D.createUserWithEmailAndPassword(e,t)},login:function(e,t){return D.signInWithEmailAndPassword(e,t)},logout:function(){return D.signOut()},resetPassword:function(e){return D.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(E.jsx)(F.Provider,{value:j,children:!l&&t})}var I=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"},Label:{marginLeft:e.spacing(-1.8)}}}));var B=function(){var e=U().login,t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(""),g=Object(h.a)(l,2),P=g[0],W=g[1],D=Object(o.g)(),F=I();Object(n.useEffect)((function(){document.title="Log In"}),[]);var A=s.a.useState({email:"",password:"",showPassword:!1}),B=Object(h.a)(A,2),H=B[0],q=B[1];function M(){return(M=Object(u.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,W(""),r(!0),t.next=6,e(H.email,H.password);case 6:D.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),W("Couldn't Log In");case 12:r(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}var T=function(e){return function(t){q(Object(b.a)(Object(b.a)({},H),{},Object(j.a)({},e,t.target.value)))}};return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"main_bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(E.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(E.jsx)(S.a,{className:"card",style:{opacity:"0.8"},children:Object(E.jsxs)(S.a.Body,{children:[Object(E.jsx)(v.a,{className:"login-icon",style:{display:"block",fontSize:"3rem"}}),Object(E.jsx)("div",{className:"login-title",children:"Log In"}),P&&Object(E.jsx)(L.a,{variant:"danger",children:P}),Object(E.jsxs)(k.a,{onSubmit:function(e){return M.apply(this,arguments)},children:[Object(E.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:[Object(E.jsx)(m.a,{required:!0,htmlFor:"outlined-basic",className:Object(y.a)(F.Label),children:"Email"}),Object(E.jsx)(p.a,{id:"outlined-basic",type:"text",values:H.email,onChange:T("email"),autoComplete:"off"})]}),Object(E.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:[Object(E.jsx)(m.a,{required:!0,htmlFor:"outlined-adornment-password",className:Object(y.a)(F.Label),children:"Password"}),Object(E.jsx)(p.a,{id:"outlined-adornment-password",type:H.showPassword?"text":"password",value:H.password,onChange:T("password"),endAdornment:Object(E.jsx)(x.a,{position:"end",children:Object(E.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:function(){q(Object(b.a)(Object(b.a)({},H),{},{showPassword:!H.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:H.showPassword?Object(E.jsx)(N.a,{}):Object(E.jsx)(C.a,{})})})})]}),Object(E.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:c,className:Object(y.a)(F.withoutLabel),children:"Submit"})]}),Object(E.jsx)(i.b,{to:"/forgot-password",children:Object(E.jsx)("p",{className:"link",children:"Forgot Password ?"})}),Object(E.jsx)(i.b,{to:"/sign-up",children:Object(E.jsx)("p",{className:"link",children:"Don't have an account ? Sign Up"})})]})})})})})};var H=function(){return Object(E.jsx)("div",{className:"navbar-div",children:Object(E.jsx)("h1",{className:"navbar",children:">.<"})})},q=a(152),M=(a(69),Object(P.a)((function(e){return{Paper:{padding:e.spacing(3),opacity:"0.5"},Profile:{marginBottom:"20px"}}})));var T=function(){var e=U(),t=e.currentUser,a=e.logout,s=Object(n.useState)(!1),c=Object(h.a)(s,2),r=c[0],l=c[1],j=Object(n.useState)(""),b=Object(h.a)(j,2),O=b[0],m=b[1],p=Object(o.g)(),x=M();function f(){return(f=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(""),e.prev=1,l(!0),e.next=5,a();case 5:p.push("/sign-in"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(!1),console.log(e.t0),m("Failed to Log Out");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){document.title="Home"}),[]),Object(E.jsxs)("div",{className:"bg",children:[Object(E.jsx)(H,{}),Object(E.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(E.jsxs)("div",{className:"w-100",style:{maxWidth:"400px",fontSize:"18px",color:"white"},children:[Object(E.jsxs)(q.a,{elevation:3,className:Object(y.a)(x.Paper),id:"paper",children:[Object(E.jsx)("h1",{className:Object(y.a)(x.Profile),children:"My Profile"}),Object(E.jsx)("strong",{className:"mr-1",children:"Email: "}),Object(E.jsx)("span",{children:t.email}),O&&Object(E.jsx)(L.a,{variant:"danger",children:O}),Object(E.jsx)(i.b,{to:"/update-profile",children:Object(E.jsx)("p",{children:"Update Profile"})})]}),Object(E.jsx)(w.a,{disabled:r,onClick:function(){return f.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",id:"logout_button",className:"w-25 mt-4 ",children:"Logout"})]})})]})},z=a(153),R=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"},HeplerText:{color:"black"}}}));var _=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(h.a)(r,2),g=l[0],P=l[1],W=U().signup,D=Object(o.g)(),F=R(),A=s.a.useState({email:"",password:"",showPassword:!1,confirmPassword:"",showConfirmPassword:!1}),I=Object(h.a)(A,2),B=I[0],H=I[1];function q(){return(q=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),B.password===B.confirmPassword){e.next=3;break}return e.abrupt("return",c("Password do not match"));case 3:return e.prev=3,c(""),P(!0),e.next=8,W(B.email,B.password);case 8:D.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),c("Failed to Create Account");case 14:P(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var M=function(e){return function(t){H(Object(b.a)(Object(b.a)({},B),{},Object(j.a)({},e,t.target.value)))}},T=function(e){e.preventDefault()};return Object(n.useEffect)((function(){document.title="Sign Up"}),[]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"main_bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(E.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(E.jsx)(S.a,{className:"card",style:{opacity:"0.8"},children:Object(E.jsxs)(S.a.Body,{children:[Object(E.jsx)(v.a,{className:"login-icon",style:{display:"block",fontSize:"3rem"}}),Object(E.jsx)("div",{className:"login-title",children:"Sign Up"}),a&&Object(E.jsx)(L.a,{variant:"danger",children:a}),Object(E.jsxs)(k.a,{onSubmit:function(e){return q.apply(this,arguments)},children:[Object(E.jsxs)(O.a,{fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:[Object(E.jsx)(m.a,{required:!0,htmlFor:"outlined-adornment-password",children:"Email"}),Object(E.jsx)(p.a,{required:!0,id:"outlined-basic-email",values:B.email,type:"email",autoComplete:"off","aria-describedby":"my-helper-text-email",onChange:M("email")}),Object(E.jsx)(z.a,{id:"my-helper-text-email",className:Object(y.a)(F.HeplerText),children:"We'll never share your email."})]}),Object(E.jsxs)(O.a,{fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:[Object(E.jsx)(m.a,{required:!0,htmlFor:"outlined-adornment-password",children:"Password"}),Object(E.jsx)(p.a,{id:"outlined-adornment-password",type:B.showPassword?"text":"password",value:B.password,autoComplete:"current-password",onChange:M("password"),endAdornment:Object(E.jsx)(x.a,{position:"end",children:Object(E.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:function(e){H(Object(b.a)(Object(b.a)({},B),{},{showPassword:!B.showPassword}))},onMouseDown:T,edge:"end",children:B.showPassword?Object(E.jsx)(N.a,{}):Object(E.jsx)(C.a,{})})})})]}),Object(E.jsxs)(O.a,{fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:[Object(E.jsx)(m.a,{required:!0,htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(E.jsx)(p.a,{id:"outlined-adornment-confirm-password",type:B.showConfirmPassword?"text":"password",value:B.confirmPassword,autoComplete:"current-confirm-password",onChange:M("confirmPassword"),endAdornment:Object(E.jsx)(x.a,{position:"end",children:Object(E.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:function(){H(Object(b.a)(Object(b.a)({},B),{},{showConfirmPassword:!B.showConfirmPassword}))},onMouseDown:T,edge:"end",children:B.showConfirmPassword?Object(E.jsx)(N.a,{}):Object(E.jsx)(C.a,{})})})})]}),Object(E.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:g,className:Object(y.a)(F.withoutLabel),children:"Sign UP"})]}),Object(E.jsx)(i.b,{to:"/sign-in",children:Object(E.jsx)("p",{className:"link",children:"Already have an account ? Log In"})})]})})})})})},J=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"},Label:{marginLeft:e.spacing(-1.8)}}}));var K=function(){var e,t=U().resetPassword,a=Object(n.useState)(!1),c=Object(h.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(""),x=Object(h.a)(l,2),f=x[0],g=x[1],v=J(),P=s.a.useState({email:""}),N=Object(h.a)(P,2),C=N[0],W=N[1];function D(){return(D=Object(u.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,g(""),o(!0),e.next=6,t(C.email);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g("Failed to reset password");case 11:o(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){document.title="Reset Password"}),[]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"main_bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(E.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(E.jsx)(S.a,{className:"card",style:{opacity:"0.8"},children:Object(E.jsxs)(S.a.Body,{children:[Object(E.jsx)("div",{className:"login-title",children:"Reset Password"}),f&&Object(E.jsx)(L.a,{variant:"danger",children:f}),Object(E.jsxs)(k.a,{onSubmit:function(e){return D.apply(this,arguments)},children:[Object(E.jsxs)(O.a,{variant:"outlined",fullWidth:!0,className:Object(y.a)(v.withoutLabel),children:[Object(E.jsx)(m.a,{required:!0,htmlFor:"outlined-basic",className:Object(y.a)(v.Label),children:"Email"}),Object(E.jsx)(p.a,{id:"outlined-basic",type:"text",values:C.email,onChange:(e="email",function(t){W(Object(b.a)(Object(b.a)({},C),{},Object(j.a)({},e,t.target.value)))}),autoComplete:"off",labelWidth:60})]}),Object(E.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:r,className:Object(y.a)(v.withoutLabel),children:"Submit"})]}),Object(E.jsx)(i.b,{to:"/sign-in",children:Object(E.jsx)("p",{className:"link",children:"Back to Login Page"})})]})})})})})},V=a(154),G=Object(P.a)((function(e){return{withoutLabel:{marginTop:e.spacing(3)},LinkStyle:{textDecoration:"None"},HeplerText:{color:"black"}}}));var Q=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(h.a)(r,2),d=l[0],u=l[1],g=U(),v=g.currentUser,P=g.updatePassword,W=g.updateEmail,D=Object(o.g)(),F=G(),A=s.a.useState({email:"",password:"",showPassword:!1,confirmPassword:"",showConfirmPassword:!1}),I=Object(h.a)(A,2),B=I[0],H=I[1];Object(n.useEffect)((function(){document.title="Update Profile"}),[]);var q=function(e){return function(t){H(Object(b.a)(Object(b.a)({},B),{},Object(j.a)({},e,t.target.value)))}},M=function(e){e.preventDefault()};return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:" bg d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(E.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(E.jsx)(S.a,{className:"card",style:{opacity:"0.6"},children:Object(E.jsxs)(S.a.Body,{children:[Object(E.jsx)("div",{className:"login-title",children:"Update Profile"}),a&&Object(E.jsx)(L.a,{variant:"danger",children:a}),Object(E.jsxs)(k.a,{onSubmit:function(e){if(e.preventDefault(),B.password!==B.confirmPassword)return c("Password do not match");var t=[];B.email!==v.email&&t.push(W(B.email)),B.password&&t.push(P(B.password)),c(""),u(!0),Promise.all(t).then((function(){D.push("/")})).catch((function(){c("Failed to update")})).finally((function(){u(!1)}))},children:[Object(E.jsx)(O.a,{fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:Object(E.jsx)(V.a,{required:!0,id:"outlined-basic-email",values:B.email,label:"Email",type:"email",autoComplete:"off",onChange:q("email"),defaultValue:v.email})}),Object(E.jsxs)(O.a,{fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:[Object(E.jsx)(m.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(E.jsx)(p.a,{id:"outlined-adornment-password",type:B.showPassword?"text":"password",value:B.password,autoComplete:"current-password",onChange:q("password"),endAdornment:Object(E.jsx)(x.a,{position:"end",children:Object(E.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:function(e){H(Object(b.a)(Object(b.a)({},B),{},{showPassword:!B.showPassword}))},onMouseDown:M,edge:"end",children:B.showPassword?Object(E.jsx)(N.a,{}):Object(E.jsx)(C.a,{})})})})]}),Object(E.jsxs)(O.a,{fullWidth:!0,className:Object(y.a)(F.withoutLabel),children:[Object(E.jsx)(m.a,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(E.jsx)(p.a,{id:"outlined-adornment-confirm-password",type:B.showConfirmPassword?"text":"password",value:B.confirmPassword,autoComplete:"current-confirm-password",onChange:q("confirmPassword"),endAdornment:Object(E.jsx)(x.a,{position:"end",children:Object(E.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:function(){H(Object(b.a)(Object(b.a)({},B),{},{showConfirmPassword:!B.showConfirmPassword}))},onMouseDown:M,edge:"end",children:B.showConfirmPassword?Object(E.jsx)(N.a,{}):Object(E.jsx)(C.a,{})})}),labelWidth:150})]}),Object(E.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:d,className:Object(y.a)(F.withoutLabel),children:"Update"})]}),Object(E.jsx)(i.b,{to:"/",children:Object(E.jsx)("p",{className:"link",children:"Cancel"})})]})})})})})},X=a(85);var Y=function(e){var t=e.component,a=Object(X.a)(e,["component"]),n=U().currentUser;return Object(E.jsx)(o.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return n?Object(E.jsx)(t,Object(b.a)({},e)):Object(E.jsx)(o.a,{to:"/sign-in"})}}))};var Z=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(i.a,{children:Object(E.jsx)(A,{children:Object(E.jsxs)(o.d,{children:[Object(E.jsx)(Y,{exact:!0,path:"/",component:T}),Object(E.jsx)(Y,{path:"/update-profile",component:Q}),Object(E.jsx)(o.b,{path:"/sign-up",component:_}),Object(E.jsx)(o.b,{path:"/sign-in",component:B}),Object(E.jsx)(o.b,{path:"/forgot-password",component:K})]})})})})};r.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(Z,{})}),document.getElementById("root"))},38:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.0e1541ea.chunk.js.map