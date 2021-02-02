(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(1),c=i.n(n),s=i(17),o=i.n(s),r=i(7),l=i(2),b=(i(9),i(15)),d=(i(24),["btn--primary","btn--outline"]),j=["btn--medium","btn--large"],h=function(e){var t=e.path,i=(e.target,e.children),n=e.type,c=e.onClick,s=e.buttonStyle,o=e.buttonSize,r=d.includes(s)?s:d[0],l=j.includes(o)?o:j[0];return Object(a.jsx)("a",{href:t,className:"btn-mobile",children:Object(a.jsx)("button",{className:"btn ".concat(r," ").concat(l),onClick:c,type:n,children:i})})},m=(i(25),i(26),["btn--primary","btn--outline"]),u=["btn--medium","btn--large"],p=function(e){var t=e.path,i=(e.target,e.children),n=e.type,c=e.onClick,s=e.buttonStyle,o=e.buttonSize,l=m.includes(s)?s:m[0],b=u.includes(o)?o:u[0];return Object(a.jsx)(r.b,{to:t,className:"btn-mobile",children:Object(a.jsx)("button",{className:"btn ".concat(l," ").concat(b),onClick:c,type:n,children:i})})};var x=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(b.a)(s,2),l=o[0],d=(o[1],function(){return c(!1)});return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("div",{className:"navbar-container",children:[Object(a.jsx)(r.b,{to:"/",className:"navbar-logo",children:"Isaac Cisneros"}),Object(a.jsx)("div",{className:"menu-icon",onClick:function(){return c(!i)},children:Object(a.jsx)("i",{className:i?"fas fa-times":"fas fa-bars"})}),Object(a.jsxs)("ul",{className:i?"nav-menu active":"nav-menu",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/",className:"nav-links",onClick:d,children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/about",className:"nav-links",onClick:d,children:"About"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(r.b,{to:"/contact",className:"nav-links nav-links-mobile",onClick:d,children:"Contact"})})]}),l&&Object(a.jsx)(p,{path:"/contact",buttonStyle:"btn--outline",children:"Contact"})]})})})};i(32);var f=function(){return Object(a.jsxs)("div",{className:"hero-container",children:[Object(a.jsx)("h1",{children:"Isaac Cisneros"}),Object(a.jsx)("p",{children:"Self-taught entry-level Web Developer"}),Object(a.jsx)("div",{className:"hero-btns",children:Object(a.jsx)(p,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",path:"/contact",children:"CONTACT ME"})})]})};var O=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("li",{className:"cards__item",children:Object(a.jsxs)("div",{className:"cards__item__link",children:[Object(a.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(a.jsx)("img",{src:e.src,alt:"Project 1",className:"cards__item__img"})}),Object(a.jsxs)("div",{className:"cards__item__info",children:[Object(a.jsx)("h1",{className:"cards__item__header",children:e.header}),Object(a.jsx)("h5",{className:"cards__item__text",children:e.text}),Object(a.jsxs)("div",{className:"project__buttons",children:[Object(a.jsx)(h,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--medium",path:e.projectbuttonlink1,target:e.target,children:e.projectbutton1}),Object(a.jsx)(h,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--medium",path:e.projectbuttonlink2,target:e.target,children:e.projectbutton2})]})]})]})})})},g=(i(33),i.p,i.p+"static/media/MaynoothThumbnail.537753d4.jpg"),v=i.p+"static/media/MaynoothMobileThumbnail.1682e379.jpg",w=i.p+"static/media/RoarBikesThumbnail.b075088e.jpg",N=i.p+"static/media/RobofriendsThumbnail.726b4ced.jpg",k=i.p+"static/media/todolist.6d50e52b.jpg";var y=function(){return Object(a.jsxs)("div",{className:"cards",children:[Object(a.jsx)("h1",{children:"Projects"}),Object(a.jsx)("div",{className:"cards__container",children:Object(a.jsxs)("div",{className:"cards__wrapper",children:[Object(a.jsxs)("ul",{className:"cards__items",children:[Object(a.jsx)(O,{src:N,header:"Robofriends",text:"This React application which I did while on the WebDev ZTM Course consists of being able to filter robot names using a search bar. Robot names are obtained from a file which contains an array with objects.\r In this aplication I get to apply props & state, as well as some object manipulation. For reference see the source code",label:"React",projectbutton1:"Code",projectbuttonlink1:"https://github.com/IsaacCisneros95/robofriends",projectbutton2:"Live App",projectbuttonlink2:"https://isaaccisneros95.github.io/robofriends/",target:"_blank"}),Object(a.jsx)(O,{src:k,header:"To-do list",text:"This is a basic to-do list I did while on my WebDev ZTM Course, it involves Javascript DOM Manipulation in order to delete html items, \r add new html items, switch between classes, etc.",label:"Javascript",projectbutton1:"Code",projectbuttonlink1:"https://github.com/IsaacCisneros95/todolist",projectbutton2:"Live App",projectbuttonlink2:"https://isaaccisneros95.github.io/todolist/",target:"_blank"})]}),Object(a.jsxs)("ul",{className:"cards__items",children:[Object(a.jsx)(O,{src:g,header:"Maynooth Furniture",text:"This is a high fidelity wireframe for a Furniture Website which I did in while on my UX/UI Essentials Adobe XD Course. \r It involved the whole design process from idea, Low Fidelity wireframe, High Fidelity wireframe, creating interactions, \r prototyping and finally sharing web developer assets.",label:"Adobe XD",projectbutton1:"Adobe Link",projectbuttonlink1:"https://xd.adobe.com/view/7383e6b4-6f69-416b-9c62-9e9250e87106-26d0/",projectbutton2:"Video Demo",projectbuttonlink2:"https://www.youtube.com/watch?v=-qBm_fmHrXc",target:"_blank"}),Object(a.jsx)(O,{src:v,header:"Maynooth Furniture Mobile",text:"This is a high fidelity wireframe for Furniture Website Mobile App which I did in while on my UX/UI Essentials Adobe XD Course. \r It involved the whole design process from idea, Low Fidelity wireframe, High Fidelity wireframe, creating interactions, prototyping and \r finally sharing web developer assets.",label:"Adobe XD",projectbutton1:"Adobe Link",projectbuttonlink1:"https://xd.adobe.com/view/3f59e789-779d-4601-bf31-915f829910d6-6a0a/",projectbutton2:"Video Demo",projectbuttonlink2:"https://youtu.be/fflcwT4IGvM",target:"_blank"}),Object(a.jsx)(O,{src:w,header:"Roar Bikes",text:"This is a high fidelity wireframe for a Bike Company which I did in while on my UX/UI Essentials Adobe XD Course. \r It involved the whole design process from idea, Low Fidelity wireframe, High Fidelity wireframe, creating interactions, \r prototyping and finally sharing web developer assets.",label:"Adobe XD",projectbutton1:"Adobe Link",projectbuttonlink1:"https://xd.adobe.com/view/bd0fb675-20e3-43c8-9a01-ec1b97033ad2-e85c/",projectbutton2:"Video Demo",projectbuttonlink2:"https://www.youtube.com/watch?v=VYxlk_VT3C0",target:"_blank"})]})]})})]})};var _=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(y,{})]})},I=i.p+"static/media/aboutimage.41a85f80.jpg";function C(){return Object(a.jsx)("div",{className:"about",children:Object(a.jsxs)("div",{className:"aboutwrapper",children:[Object(a.jsx)("h1",{children:"About me"}),Object(a.jsxs)("div",{className:"abouttext",children:[Object(a.jsx)("h3",{className:"aboutintro",children:"My name is Isaac Cisneros, I am 25 years old and currently live in Tijuana, Baja California, Mexico. I am a B.S. in Mechanical Engineer graduate from UABC. After gaining some experience in Tijuana's manufacturing industry, I decided to transition into Web Development as it has been in my best interests for a long time. I took on the challenge of learning web development with the help of online courses and close friends. I have enjoyed this transition very much since I started. I am currently focusing on HTML, CSS, JavaScript and React, as I think it is a very powerful and flexible framework, however I am excited to see what new languages and frameworks I could learn from a career in the IT Industry."}),Object(a.jsx)("img",{className:"aboutimage",src:I,alt:"aboutimage"})]})]})})}function T(){return Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsxs)("div",{className:"contactheader",children:[Object(a.jsx)("h1",{children:"Contact Information"}),Object(a.jsx)("h3",{children:"I am currently open for internships, full time positions and freelancing work related to Web Development in Tijuana, Baja California or remotely."})]}),Object(a.jsxs)("div",{className:"contactinfo",children:[Object(a.jsxs)("h4",{className:"contactitem",children:["Linked-In:",Object(a.jsxs)("a",{href:"https://www.linkedin.com/in/isaaccisneros95/",className:"contactlink",children:["https://www.linkedin.com/in/isaaccisneros95",Object(a.jsx)("i",{className:" contactlogo fab fa-linkedin-in"})]})]}),Object(a.jsxs)("h4",{className:"contactitem",children:["GitHub:",Object(a.jsxs)("a",{href:"https://github.com/IsaacCisneros95",className:"contactlink",children:["https://github.com/IsaacCisneros95",Object(a.jsx)("i",{className:"contactlogo fab fa-github"})]})]})]})]})}i(34);function S(){return Object(a.jsxs)("div",{className:"footer-container",children:[Object(a.jsx)("section",{className:"footer-subscription",children:Object(a.jsxs)("div",{className:"input-areas",children:[Object(a.jsx)(p,{buttonStyle:"btn--outline",path:"/contact",children:"CONTACT ME!"}),Object(a.jsx)("p",{className:"footer-subscription-heading",children:"Follow me on Linked-In and GitHub!"})]})}),Object(a.jsx)("section",{className:"social-media",children:Object(a.jsxs)("div",{className:"social-media-wrap",children:[Object(a.jsxs)("div",{className:"social-icons",children:[Object(a.jsx)("a",{className:"social-icon-link linkedin",href:"https://www.linkedin.com/in/isaaccisneros95/","aria-label":"Linkedin",children:Object(a.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(a.jsx)("a",{className:"social-icon-link github",href:"https://github.com/IsaacCisneros95","aria-label":"Github",children:Object(a.jsx)("i",{className:"fab fa-github"})})]}),Object(a.jsxs)("div",{className:"footer-logo",children:[Object(a.jsx)("h3",{children:"Made with React"}),Object(a.jsx)("img",{alt:"react",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",width:"60",height:"40"})]})]})})]})}var F=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(x,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:_}),Object(a.jsx)(l.a,{path:"/about",exact:!0,component:C}),Object(a.jsx)(l.a,{path:"/contact",exact:!0,component:T})]}),Object(a.jsx)(S,{})]})})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,36)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),c(e),s(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),M()},9:function(e,t,i){}},[[35,1,2]]]);
//# sourceMappingURL=main.e4d493ad.chunk.js.map