(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},33:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),i=a(8),l=a(38),s=a(39),d=a(40),u=a(9),m=a.n(u),h=a(14),b=a(15),p=a(18),f=a(16),g=a(5),v=a(19),w=a(10),C=a(11),E=a.n(C),k=a(7),N=a.n(k),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={beta:"",unicode:""},a.handleBetaChange=a.handleBetaChange.bind(Object(g.a)(a)),a.handleUnicodeChange=a.handleUnicodeChange.bind(Object(g.a)(a)),a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"handleBetaChange",value:function(e){var t=e.target.value;this.setState({beta:t,unicode:Object(w.betaCodeToGreek)(t)})}},{key:"handleUnicodeChange",value:function(e){var t=e.target.value;this.setState({beta:Object(w.greekToBetaCode)(t),unicode:t})}},{key:"render",value:function(){var e=this.state,t=e.beta,a=e.unicode;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row pt-4 mb-3"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("h1",{className:"h3 font-weight-normal"},"Greek Beta Code Converter"))),o.a.createElement("div",{className:"row ".concat(N.a.row)},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"d-block d-sm-none"},o.a.createElement("h4",{className:"text-center"},"Unicode")),o.a.createElement("div",{className:"d-none d-sm-block"},o.a.createElement("h4",{className:"text-center"},"Greek Unicode")),o.a.createElement("textarea",{className:"".concat(N.a.textarea," form-control input-lg clipboard-target-unicode"),type:"text",placeholder:"\u03bc\u1fc6\u03bd\u03b9\u03bd \u1f04\u03b5\u03b9\u03b4\u03b5 \u03b8\u03b5\u1f70 ...",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleUnicodeChange,value:a})),o.a.createElement("div",{className:"col-6"},o.a.createElement("h4",{className:"text-center"},"Beta Code"),o.a.createElement("textarea",{className:"".concat(N.a.textarea," form-control input-lg clipboard-target-betacode"),type:"text",placeholder:"mh=nin a)/eide qea\\ ...",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",onChange:this.handleBetaChange,value:t}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement(E.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-unicode"},"Copy to Clipboard")),o.a.createElement("div",{className:"col-6"},o.a.createElement(E.a,{"button-type":"button",className:"btn btn-block btn-success mb-4 mt-2","data-clipboard-target":".clipboard-target-betacode"},"Copy to Clipboard"))))}}]),t}(n.Component),y=function(){return o.a.createElement(l.a,{basename:"/beta-code"},o.a.createElement(o.a.Fragment,null,o.a.createElement(i.PerseidsHeader,null,"Greek Beta Code Converter"),o.a.createElement("main",{role:"main",className:m.a.main},o.a.createElement("div",{className:"container ".concat(m.a.container)},o.a.createElement(s.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:x})))),o.a.createElement(i.PerseidsFooter,{report:"https://github.com/perseids-project/beta-code-js",github:"https://github.com/perseids-project/beta-code-js/issues"})))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(32),a(33),a(34),a(35);r.a.render(o.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/beta-code",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/beta-code","/service-worker.js");j?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):_(t,e)})}}()},7:function(e,t,a){e.exports={row:"Converter_row__2TQAN",textarea:"Converter_textarea__2qcKs"}},9:function(e,t,a){e.exports={main:"App_main__3Lg8g",container:"App_container__eyuZg"}}},[[20,1,2]]]);
//# sourceMappingURL=main.4e421996.chunk.js.map