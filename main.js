/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:C(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function w(){}var L={};f(L,u,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(N([])));E&&E!==o&&i.call(E,u)&&(L=E);var x=w.prototype=b.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,a,c,u){var s=d(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function C(t,e,n){var o=h;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,_;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=w,a(x,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new q(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),f(x,l,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-3",headers:{authorization:"88e213d3-ef27-4eed-9e07-4a422284ecbf ","Content-Type":"application/json"}},i=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},a=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all([a(),c()]));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:r.name,about:r.about})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:r.name,link:r.link})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:r})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=document.querySelector("#card-template").content;function v(t,e,r,n,o){var i=y.querySelector(".card").cloneNode(!0),a=i.querySelector(".card__image"),c=i.querySelector(".card__title"),u=i.querySelector(".card__like-count"),s=i.querySelector(".card__delete-button"),l=i.querySelector(".card__like-button");return i.dataset.cardId=t._id,i.dataset.ownerId=t.owner._id,a.src=t.link,a.alt=t.name,c.textContent=t.name,u.textContent=t.likes.length,t.owner._id===e?s.addEventListener("click",(function(t){return r(i)})):s.remove(),t.likes.some((function(t){return t._id===e}))&&l.classList.add(""),l.addEventListener("click",(function(e){n(e,t._id)})),a.addEventListener("click",(function(){o(a.src,a.alt,c.textContent)})),i}function m(t){d(t.dataset.cardId),t.remove()}function _(t,e){var r=t.target.parentNode.querySelector(".card__like-count");t.target.classList.contains("card__like-button_is-active")?p(e).then((function(e){t.target.classList.remove("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)})):f(e).then((function(e){t.target.classList.add("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)}))}function b(t){t.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",w)}function g(t){t.classList.remove("popup_is-opened"),document.addEventListener("keydown",w)}function w(t){"Escape"===t.key&&g(document.querySelector(".popup_is-opened"))}var L,S=function(t,e){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove("form__input_type_error"),r.textContent="",r.classList.remove("form__input-error_active")},E=function(t,e){t.some((function(t){return!t.validity.valid}))?(e.classList.add("button_inactive"),e.disabled=!0):(e.classList.remove("button_inactive"),e.disabled=!1)},x=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);n.classList.add(e.inactiveButtonClass),n.disabled=!0,r.forEach((function(r){S(t,r,e.inputErrorClass,e.errorClass),r.setCustomValidity("")}))},k=document.querySelector(".places__list"),q=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup_type_new-card"),O=document.querySelector(".popup_type_image"),j=document.querySelector(".popup_type_avatar"),P=document.querySelector('[name = "edit-profile"]'),T=document.querySelector(".popup__input_type_name"),N=document.querySelector(".popup__input_type_description"),A=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),G=document.querySelector(".profile__image"),I=document.forms["edit-avatar"],D=document.querySelector('[name = "new-place"]'),F=document.querySelector('[name = "place-name"]'),B=document.querySelector('[name = "link"]'),J=O.querySelector(".popup__image"),M=O.querySelector(".popup__caption"),V=document.querySelector(".profile__image-container"),H=document.querySelector(".profile__edit-button"),Y=document.querySelector(".profile__add-button"),z=(document.querySelector(".popup__button"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"});function K(t,e){e.textContent=t?"Сохранение...":e.textContent}function Q(t,e){b(O),J.src=t,J.alt=e,M.textContent=e}V.addEventListener("click",(function(t){x(I,z),I.reset(),b(j)})),I.addEventListener("submit",(function(t){K(!0,t.submitter),t.preventDefault(),h(I.link.value).then((function(t){R(t),g(j)})).catch((function(t){console.log(t)})).finally((function(){K(!1,t.submitter)}))})),H.addEventListener("click",(function(){x(q,z),b(q),T.value=A.textContent,N.value=U.textContent})),P.addEventListener("submit",(function(t){K(!0,t.submitter),t.preventDefault(),s({name:T.value,about:N.value}).then((function(t){R(t),g(q)})).catch((function(t){console.log(t)})).finally((function(){K(!1,t.submitter)}))})),Y.addEventListener("click",(function(){x(C,z),b(C)})),D.addEventListener("submit",(function(t){K(!0,t.submitter),t.preventDefault();var e={name:F.value,link:B.value};l(e).then((function(t){var e=v(t,L,m,_,Q);k.prepend(e),F.value="",B.value="",g(C)})).catch((function(t){console.log(t)})).finally((function(){K(!1,t.submitter)}))})),document.querySelectorAll(".popup__close").forEach((function(t){var e=t.closest(".popup");t.addEventListener("click",(function(){return g(e)})),e.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&g(e)}))})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault()})),function(t){var e=Array.from(t.querySelectorAll(".popup__input")),r=t.querySelector(".popup__button");E(e,r),e.forEach((function(n){n.addEventListener("input",(function(){!function(t,e){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?S(t,e):function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.add("form__input_type_error"),n.textContent=r,n.classList.add("form__input-error_active")}(t,e,e.validationMessage)}(t,n),E(e,r)}))}))}(t)})),u().then((function(t){var e=t[0];L=e._id;var r=t[1];R(e),function(t,e){t.forEach((function(t){k.append(v(t,e,m,_,Q))}))}(r,L)})).catch((function(t){console.log(t)}));var R=function(t){A.textContent=t.name,U.textContent=t.about,G.style.backgroundImage="url(".concat(t.avatar,")")}})();