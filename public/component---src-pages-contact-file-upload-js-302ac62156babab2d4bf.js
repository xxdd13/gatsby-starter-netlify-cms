(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});a(34),a(230);var n=a(7),l=a.n(n),c=(a(73),a(52),a(174),a(0)),i=a.n(c),r=a(162),o=a(159);function m(e){for(var t=new FormData,a=Object.keys(e),n=0;n<a.length;n++){var l=a[n];t.append(l,e[l])}return t}var s=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleAttachment=function(e){var t;a.setState(((t={})[e.target.name]=e.target.files[0],t))},a.handleSubmit=function(e){e.preventDefault();var t=e.target;fetch("/",{method:"POST",body:m(Object.assign({"form-name":t.getAttribute("name")},a.state))}).then(function(){return Object(r.navigate)(t.getAttribute("action"))}).catch(function(e){return alert(e)})},a.state={},a}return l()(t,e),t.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",null,"File Upload"),i.a.createElement("form",{name:"file-upload",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"hidden",name:"form-name",value:"file-upload"}),i.a.createElement("div",{hidden:!0},i.a.createElement("label",null,"Don’t fill this out:"," ",i.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"file"},i.a.createElement("label",{className:"file-label"},i.a.createElement("input",{className:"file-input",type:"file",name:"attachment",onChange:this.handleAttachment}),i.a.createElement("span",{className:"file-cta"},i.a.createElement("span",{className:"file-label"},"Choose a file…"))))),i.a.createElement("div",{className:"field"},i.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},t}(i.a.Component)},174:function(e,t,a){var n=a(25),l=a(35);a(175)("keys",function(){return function(e){return l(n(e))}})},175:function(e,t,a){var n=a(11),l=a(16),c=a(24);e.exports=function(e,t){var a=(l.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*c(function(){a(1)}),"Object",i)}},230:function(e,t,a){var n=a(26).f,l=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in l||a(17)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-file-upload-js-302ac62156babab2d4bf.js.map