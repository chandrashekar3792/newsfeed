(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,a){},45:function(e,t){e.exports={apiUrl:"https://4yq8jvnzga.execute-api.us-east-1.amazonaws.com/dev/api/v1/",baseUrl:"http://0.0.0.0:3000/",customPath:""}},49:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(21),s=a.n(o),l=a(11),i=a(12),c=a(14),m=a(13),u=a(15),d=a(48),h=a(18),p=a(22),E=(a(30),a(31),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"page-footer font-small  Footer "},n.a.createElement("div",{className:"footer-copyright text-center py-3  "},"\xa9 2020 Copyright:",n.a.createElement("a",{href:"/"},"chandrashekar.com")))}}]),t}(r.Component)),f=a(8),b=a(26),g=a.n(b),w=a(91),v=a(92),y=a(93),O=a(94),S=a(95),j=a(96),k=a(19),N=a.n(k),z=a(45),A=a.n(z);N.a.defaults.baseURL=A.a.apiUrl;var I=function(e,t){try{return N.a.post("login",{email:e,password:t})}catch(a){throw a}},C=function(e,t,a){return N.a.post("register",{email:e,mobile:t,password:a})},L=function(e,t){return N.a.post("verifyUser",{email:e,token:t})},U=a(85),M=a(86),P=a(87),D=a(88),q=a(89),x=a(90),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1,token:localStorage.getItem("Authorization")},a.toggle=a.toggle.bind(Object(f.a)(a)),a.closeNav=a.closeNav.bind(Object(f.a)(a)),a.logout=a.logout.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){localStorage.removeItem("Authorization")}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"closeNav",value:function(){!0===this.state.isOpen&&this.toggle()}},{key:"render",value:function(){return n.a.createElement("div",{className:"navbar-container"},n.a.createElement(U.a,{color:"light",light:!0,expand:"md"},n.a.createElement(M.a,{href:"/"},"News Feed"),n.a.createElement(P.a,{onClick:this.toggle}),n.a.createElement(D.a,{isOpen:this.state.isOpen,navbar:!0},this.props.auth||this.state.token?n.a.createElement(q.a,{navbar:!0,className:"ml-auto"},n.a.createElement(x.a,null,n.a.createElement(p.b,{to:"/",className:"padded-nav",onClick:this.logout}," Log Out "))):n.a.createElement(q.a,{navbar:!0,className:"ml-auto"},n.a.createElement(x.a,null,n.a.createElement(p.b,{to:"/login",className:"padded-nav"}," Login ")),n.a.createElement(x.a,null,n.a.createElement(p.b,{to:"/signup",className:"padded-nav"}," Sign Up "))))))}}]),t}(r.Component),Z=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={showLoading:!0,feeds:[],isAuthenticated:!0},e.formatDate=e.formatDate.bind(Object(f.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var e=localStorage.getItem("Authorization");return N.a.get("feeds",{headers:{Authorization:e}})})().then((function(t){e.setState({showLoading:!1,feeds:t.data.data})}))}},{key:"formatDate",value:function(e){var t=new Date,a=new Date(e);return g()(a).from(g()(t))}},{key:"renderLoaderOrData",value:function(){var e=this;return this.state.showLoading?n.a.createElement(w.a,{className:"widthTopSpinner"},n.a.createElement(v.a,{md:{size:6,offset:5}},n.a.createElement(y.a,{style:{width:"3rem",height:"3rem"}})," ")):n.a.createElement("div",{className:"bottom-margin"},this.state.feeds.map((function(t,a){return n.a.createElement("div",{key:a},n.a.createElement(O.a,null,n.a.createElement(S.a,null,n.a.createElement(w.a,null,n.a.createElement(v.a,{md:3},n.a.createElement("img",{src:t.urlToImage,alt:a})),n.a.createElement(v.a,null,n.a.createElement(j.a,null,t.description),n.a.createElement(j.a,null,n.a.createElement("small",{className:"text-muted"},t.source.name," - ",e.formatDate(t.publishedAt))))))),n.a.createElement("br",null))})))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(T,{auth:this.state.isAuthenticated}),this.renderLoaderOrData())}}]),t}(r.Component),B=a(23),F=a(97),J=a(98),R=a(99),V=a(100),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),!a.state.showError&&a.state.password&&a.state.email&&(a.setState({showLoading:!0}),I(a.state.email,a.state.password).then((function(e){localStorage.setItem("Authorization",e.data.data.token),a.setState({showError:!1,showLoading:!1}),a.props.history.push("/")})).catch((function(e){e.response&&a.setState({showError:!0,errorMsg:e.response.data.error,showLoading:!1})})))},a.state={clickSubmit:!0,showError:!1,errorMsg:"",password:"",email:"",showLoading:!1,isAuthenticated:!1},a.handleUserInput=a.handleUserInput.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("Authorization")&&this.props.history.push("/")}},{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"validatePassword",value:function(e){return/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(String(e))}},{key:"handleUserInput",value:function(e){var t=e.target.name,a=e.target.value;"email"!==t||this.validateEmail(a)?"password"!==t||this.validatePassword(a)?(this.setState(Object(B.a)({},t,a)),this.setState({showError:!1})):this.setState({showError:!0,errorMsg:"Password should be combination of Lowercase,Uppercase,Number and Special Character"}):this.setState({showError:!0,errorMsg:"Email Entered is Invalid"})}},{key:"renderButton",value:function(){return this.state.showLoading?n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(y.a,{style:{width:"3rem",height:"3rem"}}))):n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement("button",{className:"btn btn-primary",name:"action",onClick:this.handleSubmit},"Login")))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(T,{auth:this.state.isAuthenticated}),n.a.createElement(J.a,null,n.a.createElement(F.a,{row:!0,className:"form-group required"},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(R.a,{className:"col-md-2 control-label",for:"exampleEmail",sm:2},"Email"),n.a.createElement(V.a,{type:"email",name:"email",id:"email",placeholder:"Enter Email Address",onChange:this.handleUserInput,required:!0}))),n.a.createElement(F.a,{row:!0,className:"form-group required"},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(R.a,{className:"col-md-2 control-label",for:"password",sm:2},"Password"),n.a.createElement(V.a,{type:"password",name:"password",id:"password",placeholder:"Enter Password",onChange:this.handleUserInput,required:!0}))),this.state.showError&&n.a.createElement("div",{className:"formError"},n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:6,offset:3}},this.state.errorMsg))),this.renderButton()))}}]),t}(r.Component),$=a(104),G=a(101),H=a(102),K=a(103),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).verifyOTP=function(e){e.preventDefault(),a.setState({model:!1}),L(a.state.email,a.state.token).then((function(){a.setState({otpError:""}),a.props.history.push("/login")})).catch((function(e){e.response&&a.setState({otpError:e.response.data.error.message})}))},a.handleSubmit=function(e){e.preventDefault(),!a.state.showError&&a.state.password&&a.state.email&&(a.setState({showLoading:!0}),C(a.state.email,a.state.mobile,a.state.password).then((function(){a.setState({showError:!1,showLoading:!1,modal:!0})})).catch((function(e){e.response&&a.setState({showError:!0,errorMsg:e.response.data.error.message,showLoading:!1,modal:!1})})))},a.state={clickSubmit:!0,showError:!1,errorMsg:"",password:"",email:"",mobile:"",showLoading:!1,model:!1,otpError:"",isAuthenticated:!1},a.handleUserInput=a.handleUserInput.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.verifyOTP=a.verifyOTP.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("Authorization")&&this.props.history.push("/")}},{key:"validateEmail",value:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"validatePassword",value:function(e){return/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(String(e))}},{key:"validateMobile",value:function(e){return/[0-9]{10}/.test(String(e))}},{key:"handleUserInput",value:function(e){var t=e.target.name,a=e.target.value;"email"!==t||this.validateEmail(a)?"password"!==t||this.validatePassword(a)?"mobile"!==t||this.validateMobile(a)?(this.setState(Object(B.a)({},t,a)),this.setState({showError:!1}),this.setState({otpError:!1})):this.setState({showError:!0,errorMsg:"Mobile Number is Invalid"}):this.setState({showError:!0,errorMsg:"Password should be combination of Lowercase,Uppercase,Number and Special Character"}):this.setState({showError:!0,errorMsg:"Email Entered is Invalid"})}},{key:"showPopUp",value:function(){return n.a.createElement("div",null,n.a.createElement($.a,{isOpen:this.state.modal},n.a.createElement(G.a,{style:{textAlign:"center"}},"Verify User"),n.a.createElement(H.a,null,n.a.createElement(J.a,null,this.state.otpError&&this.state.otpError.length>0&&n.a.createElement("div",{className:"formError"},n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:9,offset:3}},n.a.createElement("span",null,this.state.otpError)))),n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:11,offset:1},style:{textAlign:"center",marginBottom:"10px"}},n.a.createElement("span",null,"Verification Code is sent to your email and mobile")),n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(V.a,{type:"number",name:"token",id:"token",placeholder:"Enter OTP",onChange:this.handleUserInput,required:!0}))),n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:6,offset:5}},n.a.createElement(K.a,{color:"primary",onClick:this.verifyOTP},"Submit")," "))))))}},{key:"renderButton",value:function(){return this.state.showLoading?n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(y.a,{style:{width:"3rem",height:"3rem"}}))):n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement("button",{className:"btn btn-primary",name:"action",onClick:this.handleSubmit},"Register")))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(T,{auth:this.state.isAuthenticated}),n.a.createElement(J.a,null,n.a.createElement(F.a,{row:!0,className:"form-group required"},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(R.a,{className:"col-md-2 control-label",for:"email",sm:2},"Email"),n.a.createElement(V.a,{type:"email",name:"email",id:"email",placeholder:"Enter Email Address",onChange:this.handleUserInput,required:!0}))),n.a.createElement(F.a,{row:!0,className:"form-group required"},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(R.a,{className:"col-md-2 control-label",for:"mobile",md:5,sm:5},"Mobile Number"),n.a.createElement(V.a,{type:"tel",name:"mobile",id:"mobile",placeholder:"Enter Mobile Number",pattern:"[0-9]{10}",onChange:this.handleUserInput,required:!0}))),n.a.createElement(F.a,{row:!0,className:"form-group required"},n.a.createElement(v.a,{md:{size:6,offset:3}},n.a.createElement(R.a,{className:"col-md-2 control-label",for:"password",sm:2},"Password"),n.a.createElement(V.a,{type:"password",name:"password",id:"password",placeholder:"Enter Password",onChange:this.handleUserInput,required:!0}))),this.state.showError&&n.a.createElement("div",{className:"formError"},n.a.createElement(F.a,{row:!0},n.a.createElement(v.a,{md:{size:6,offset:3}},this.state.errorMsg))),this.renderButton(),this.showPopUp()))}}]),t}(r.Component),X=function(e){var t=e.component,a=Object(d.a)(e,["component"]);return n.a.createElement(h.b,Object.assign({},a,{render:function(e){return localStorage.getItem("Authorization")?n.a.createElement(t,e):n.a.createElement(h.a,{to:"/login"})}}))},Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isAuthenticated:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("Authorization")&&this.setState({isAuthenticated:!0})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement(X,{path:"/",component:Z}),n.a.createElement(h.b,{path:"/login",component:W}),n.a.createElement(h.b,{path:"/signup",component:Q}),n.a.createElement(E,null))))}}]),t}(r.Component);window.axios=N.a,s.a.render(n.a.createElement(Y,null),document.querySelector("#root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.489c03a1.chunk.js.map