(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{119:function(e,t,n){e.exports=n(152)},148:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(35),o=n.n(r),l=n(14),i=n.n(l),u=n(37),s=n.n(u),m=n(44),p=n(15),d=n(53),f=n.n(d),E=(n(125),n(22)),h=n.n(E),b=n(23),k=n.n(b),g=n(27),v=n.n(g),C=n(26),O=n.n(C),j=n(29),y=n.n(j),x=function(e){var t=e.id,n=(e.go,e.setModal);return c.a.createElement(h.a,{id:t},c.a.createElement(k.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0418\u0418\u0422 \u0427\u0435\u043b\u0413\u0423"),c.a.createElement(O.a,{title:"Open ModalGroupSelector"},c.a.createElement(y.a,null,c.a.createElement(v.a,{size:"xl",onClick:n,"data-to":"groupSelectorPage"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u0443"))))},S=n(54),w=n(45),U=n(46),I=function(){function e(){Object(w.a)(this,e)}return Object(U.a)(e,[{key:"setCookie",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(n=Object(S.a)({path:"/",expires:new Date(Date.now()+31536e6)},n)).expires instanceof Date&&(n.expires=n.expires.toUTCString());var a=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var c in n){a+="; "+c;var r=n[c];!0!==r&&(a+="="+r)}document.cookie=a}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}}]),e}(),P=n(5),A=["\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f","\u0411\u0438\u0437\u043d\u0435\u0441-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430"],_=["1","2","3","4","\u041c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430-1","\u041c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430-2"],D=["\u041f\u0440\u0418-101","\u041f\u0440\u0418-102","\u041f\u0440\u0418-201","\u0411\u0418-101"],K=new Array,M=new I,R=function(e){var t=e.id,n=e.go,r=e.open,o=Object(a.useState)(M.getCookie("direction")),l=Object(p.a)(o,2),i=l[0],u=l[1],s=Object(a.useState)(M.getCookie("course")),m=Object(p.a)(s,2),d=m[0],f=m[1],E=Object(a.useState)(M.getCookie("group")),h=Object(p.a)(E,2),b=h[0],k=h[1],g=Object(a.useState)(null),C=Object(p.a)(g,2),O=C[0],j=C[1];function y(e){K.push(e),j(e)}function x(){K.pop(),j(K[K.length-1])}return null!=r&&null==O&&y(r),c.a.createElement(P.f,{id:t,activeModal:O},c.a.createElement(P.d,{id:"groupSelectorPage",header:c.a.createElement(P.e,null,"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u0441\u0451 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u043c :)"),onClose:function(){return x()}},c.a.createElement(P.a,null,c.a.createElement(P.h,{top:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",onClick:function(){return y("direction")}},i),c.a.createElement(P.h,{top:"\u041a\u0443\u0440\u0441",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0443\u0440\u0441",onClick:function(){return y("course")}},d),c.a.createElement(P.h,{top:"\u0413\u0440\u0443\u043f\u043f\u0430",placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443",onClick:function(){return y("group")}},b),c.a.createElement(v.a,{size:"xl",onClick:function(){return M.setCookie("direction",i),M.setCookie("course",d),M.setCookie("group",b),y(void 0),void n("persik")}},"\u041f\u043e\u0433\u043d\u0430\u043b\u0438"))),c.a.createElement(P.d,{id:"direction",header:c.a.createElement(P.e,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),onClose:function(){return x()}},c.a.createElement(P.b,null,A.map((function(e,t){return c.a.createElement(P.g,{key:t,name:"direction",value:t,onClick:function(){u(e),x()}},e)})))),c.a.createElement(P.d,{id:"course",header:c.a.createElement(P.e,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441"),onClose:function(){return x()}},c.a.createElement(P.b,null,_.map((function(e,t){return c.a.createElement(P.g,{key:t,name:"direction",value:t,onClick:function(){f(e),x()}},e)})))),c.a.createElement(P.d,{id:"group",header:c.a.createElement(P.e,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u0443\u043f\u043f\u0443"),onClose:function(){return x()}},c.a.createElement(P.b,null,D.map((function(e,t){return c.a.createElement(P.g,{key:t,name:"direction",value:t,onClick:function(){k(e),x()}},e)})))))},T=n(32),V=n.n(T),z=n(33),N=n.n(z),W=function(e){var t=e.id,n=e.go,a=e.fetchedUser;return c.a.createElement(h.a,{id:t},c.a.createElement(k.a,null,"Example"),a&&c.a.createElement(O.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(V.a,{before:a.photo_200?c.a.createElement(N.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),c.a.createElement(O.a,{title:"Navigation Example"},c.a.createElement(y.a,null,c.a.createElement(v.a,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"Show me the Persik, please"))))},G=n(52),J=n.n(G),$=n(49),B=n.n($),F=n(50),q=n.n(F),H=n(51),L=n.n(H),Q=(n(148),Object(P.i)()),X=function(e){return c.a.createElement(h.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(J.a,{onClick:e.go,"data-to":"home"},Q===P.c?c.a.createElement(B.a,null):c.a.createElement(q.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:L.a,alt:"Persik The Cat"}))},Y=function(){var e=Object(a.useState)("splash"),t=Object(p.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),l=Object(p.a)(o,2),u=l[0],d=l[1],E=Object(a.useState)(null),h=Object(p.a)(E,2),b=h[0],k=h[1],g=Object(a.useState)(null),v=Object(p.a)(g,2),C=v[0],O=v[1],j=Object(a.useState)({}),y=Object(p.a)(j,2);y[0],y[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var S=function(e){"string"!=typeof e&&r(e.currentTarget.dataset.to),r(e)};return c.a.createElement(f.a,{activePanel:n,popout:b,modal:c.a.createElement(R,{go:S,open:C})},c.a.createElement(x,{id:"splash",go:S,setModal:function(e){var t=e.currentTarget.dataset.to;O(t)}}),c.a.createElement(W,{id:"home",fetchedUser:u,go:S}),c.a.createElement(X,{id:"persik",go:S}))};i.a.send("VKWebAppInit"),o.a.render(c.a.createElement(Y,null),document.getElementById("root"))},51:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"}},[[119,1,2]]]);
//# sourceMappingURL=main.f4e542fd.chunk.js.map