"use strict";(self.webpackChunkpwa=self.webpackChunkpwa||[]).push([[821],{5528:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),r=n(649),l=(n(7207),n(6368)),c=n(9963),s=n(8037);function i(){var e=a.useState(null),t=e[0],n=e[1];a.useEffect((function(){"undefined"!=typeof window&&null===t?n({apiUrl:window.GATSBY_API_URL}):(0,c.jl)()&&"undefined"!=typeof window&&(0===window.location.search.length?(o(JSON.parse(window.sessionStorage.getItem("payment"))),console.log(i)):E())}),[t]);var r=a.useState(null),i=r[0],o=r[1],m=a.useState(null),u=m[0],d=m[1];console.log(i);var E=function(){d(!0);var e=JSON.parse(window.sessionStorage.getItem("payment"));if("undefined"!=typeof window){var n=window.location.search,a=new URLSearchParams(n).get("orderID");e.orderId!==a&&(0,s.c4)("/vault"),fetch(t.apiUrl+"/gateways/waardepapieren-service/payments/"+e.id+"/certificate"+n,{credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){(0,s.c4)("/vault")}))}},h=function(){"undefined"!=typeof window&&(window.sessionStorage.removeItem("payment"),(0,s.c4)("/"))};return a.createElement(a.Fragment,null,a.createElement("div",null,null!==u&&a.createElement("div",{className:"text-center"},a.createElement("div",{className:"spinner-border",role:"status"},a.createElement("span",{className:"sr-only"},"Loading..."))),null!==i&&a.createElement("form",{method:"POST",action:i.redirectUrl},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-12"},a.createElement("h4",{className:"utrecht-heading-4"},a.createElement("strong",null,"Waardepapier:")," ",i.type.replaceAll("_"," "))),a.createElement("div",{className:"col-12"},a.createElement("h4",{className:"utrecht-heading-4"},a.createElement("strong",null,"Kost:")," € ",i.price/100,",-")),a.createElement("div",{className:"col-12"},a.createElement("button",{className:"utrecht-button"},"Betalen"))),Object.entries(i.configuration).map((function(e){var t=e[0],n=e[1];return a.createElement("input",{key:t,type:"hidden",name:t,value:n})}))),a.createElement(l.Card,{title:"Betalen",cardHeader:function(){return a.createElement(a.Fragment,null,null===u&&a.createElement("button",{onClick:h,className:"utrecht-button"},"Terug"))},cardBody:function(){return a.createElement(a.Fragment,null,null!==u&&a.createElement("div",{className:"text-center"},a.createElement("div",{className:"spinner-border",role:"status"},a.createElement("span",{className:"sr-only"},"Loading..."))),null!==i&&a.createElement("form",{method:"POST",action:i.redirectUrl},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-12"},a.createElement("h4",{className:"utrecht-heading-4"},a.createElement("strong",null,"Waardepapier:")," ",i.type.replaceAll("_"," "))),a.createElement("div",{className:"col-12"},a.createElement("h4",{className:"utrecht-heading-4"},a.createElement("strong",null,"Kost:")," € ",i.price/100,",-")),a.createElement("div",{className:"col-12"},a.createElement("button",{className:"utrecht-button"},"Betalen"))),Object.entries(i.configuration).map((function(e){var t=e[0],n=e[1];return a.createElement("input",{key:t,type:"hidden",name:t,value:n})}))))}})))}var o=function(){a.useEffect((function(){"undefined"!=typeof window&&n({baseUrl:window.GATSBY_BASE_URL,frontendUrl:window.GATSBY_FRONTEND_URL})}),[]);var e=a.useState({baseUrl:"",frontendUrl:""}),t=e[0],n=e[1];return a.createElement(r.Z,null,a.createElement("main",null,a.createElement("div",{className:"text-center mt-4"},(0,c.jl)()?a.createElement(a.Fragment,null,a.createElement(i,null)):a.createElement(a.Fragment,null,a.createElement("h1",{className:"utrecht-heading-1 utrecht-heading-1--distanced"},"Welkom"),a.createElement("h4",{className:"utrecht-heading-4 utrecht-heading-4--distanced"},"U dient ingelogd te zijn om door te gaan."),a.createElement("div",{className:"mt-4"},a.createElement("a",{className:"utrecht-link",href:t.baseUrl+"/digid/login?returnUrl="+t.frontendUrl+"/redirect"},a.createElement("button",{className:"utrecht-button"},"Inloggen")))))))}}}]);
//# sourceMappingURL=component---src-pages-pay-certificate-index-tsx-a624990fed98375af3aa.js.map