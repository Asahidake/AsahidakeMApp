var UrlHistory=function(t,n){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(n);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var o,a,i=(function(t,n){t.exports=function(){var t,n,e={version:"0.2.0"},r=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(t,n,e){return t<n?n:t>e?e:t}function a(t){return 100*(-1+t)}function i(t,n,e){var o;return(o="translate3d"===r.positionUsing?{transform:"translate3d("+a(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+a(t)+"%,0)"}:{"margin-left":a(t)+"%"}).transition="all "+n+"ms "+e,o}e.configure=function(t){var n,e;for(n in t)void 0!==(e=t[n])&&t.hasOwnProperty(n)&&(r[n]=e);return this},e.status=null,e.set=function(t){var n=e.isStarted();t=o(t,r.minimum,1),e.status=1===t?null:t;var a=e.render(!n),c=a.querySelector(r.barSelector),l=r.speed,d=r.easing;return a.offsetWidth,s((function(n){""===r.positionUsing&&(r.positionUsing=e.getPositioningCSS()),u(c,i(t,l,d)),1===t?(u(a,{transition:"none",opacity:1}),a.offsetWidth,setTimeout((function(){u(a,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){e.remove(),n()}),l)}),l)):setTimeout(n,l)})),this},e.isStarted=function(){return"number"==typeof e.status},e.start=function(){e.status||e.set(0);var t=function(){setTimeout((function(){e.status&&(e.trickle(),t())}),r.trickleSpeed)};return r.trickle&&t(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var n=e.status;return n?("number"!=typeof t&&(t=(1-n)*o(Math.random()*n,.1,.95)),n=o(n+t,0,.994),e.set(n)):e.start()},e.trickle=function(){return e.inc(Math.random()*r.trickleRate)},t=0,n=0,e.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&e.start(),t++,n++,r.always((function(){0==--n?(t=0,e.done()):e.set((t-n)/t)})),this):this},e.render=function(t){if(e.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=r.template;var o,i=n.querySelector(r.barSelector),s=t?"-100":a(e.status||0),c=document.querySelector(r.parent);return u(i,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),r.showSpinner||(o=n.querySelector(r.spinnerSelector))&&m(o),c!=document.body&&l(c,"nprogress-custom-parent"),c.appendChild(n),n},e.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&m(t)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var t=document.body.style,n="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return n+"Perspective"in t?"translate3d":n+"Transform"in t?"translate":"margin"};var s=function(){var t=[];function n(){var e=t.shift();e&&e(n)}return function(e){t.push(e),1==t.length&&n()}}(),u=function(){var t=["Webkit","O","Moz","ms"],n={};function e(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,n){return n.toUpperCase()}))}function r(n){var e=document.body.style;if(n in e)return n;for(var r,o=t.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if((r=t[o]+a)in e)return r;return n}function o(t){return t=e(t),n[t]||(n[t]=r(t))}function a(t,n,e){n=o(n),t.style[n]=e}return function(t,n){var e,r,o=arguments;if(2==o.length)for(e in n)void 0!==(r=n[e])&&n.hasOwnProperty(e)&&a(t,e,r);else a(t,o[1],o[2])}}();function c(t,n){return("string"==typeof t?t:f(t)).indexOf(" "+n+" ")>=0}function l(t,n){var e=f(t),r=e+n;c(e,n)||(t.className=r.substring(1))}function d(t,n){var e,r=f(t);c(t,n)&&(e=r.replace(" "+n+" "," "),t.className=e.substring(1,e.length-1))}function f(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function m(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return e}()}(a={path:o,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&a.path)}},a.exports),a.exports);function s(t,n){return new Promise((e,o)=>{r.default(t).load(n,(t,n,r)=>{"error"===n?o(new u(r.status,r.statusText)):e()})})}class u extends Error{constructor(t,n){super(n),this.code=t}}let c=!1;function l(t){if(c)return AsahidakeMap.fitView(t)}function d(t){if(c)return AsahidakeMap.highlightTrail(t)}async function f(t){switch(t){case"aboutDaisetsuzan":await s("#column","aboutDaisetsuzan.html"),l("loop"),d(null);break;case"aboutTrailToPeak":await s("#column","aboutTrailToPeak.html"),l("summit"),d("summit");break;case"about6hLoop":await s("#column","about6hLoop.html"),l("loop"),d("loop");break;case"info":await s("#column","info.html"),d(null);break;case"aboutDaisetsuzanGrade":await s("#column","aboutDaisetsuzanGrade.html"),d(null);break;case"blog":await s("#column","blog.html"),d(null);break;case"aboutSugatami":default:await s("#column","aboutSugatami.html"),l("sugatami"),d("sugatami")}}function m(t){console.dir("pushStateAndNav"),window.history.pushState({page:t},null,"#/"+t),f(t)}function p(t,n){document.getElementById(t).addEventListener("click",n)}new Promise((t,n)=>{if(void 0!==window.AsahidakeMap)return t(window.AsahidakeMap);document.getElementById("map-script").addEventListener("load",()=>{void 0!==window.AsahidakeMap?(c=!0,t(window.AsahidakeMap)):n(new Error("Error loading map script"))})}),p("aboutDaisetsuzan",(function(){m("aboutDaisetsuzan")})),p("aboutSugatami",(function(){m("aboutSugatami")})),p("aboutTrailToPeak",(function(){m("aboutTrailToPeak")})),p("about6hLoop",(function(){m("about6hLoop")})),p("info",(function(){m("info")})),p("aboutDaisetsuzanGrade",(function(){m("aboutDaisetsuzanGrade")})),p("blog",(function(){m("blog")}));const g=document.querySelectorAll(".navbar-burger,.navbar-menu");function b(){for(let t of g)t.classList.toggle("is-active")}for(let t of g)t.addEventListener("click",b);return window.onpopstate=function(){const t=null!==history.state?history.state.page:null;console.dir("onpopstate  state:"+t),f(t)},f(document.location.hash.substring(2)),r.default(document).ajaxStart(()=>{i.start()}),r.default(document).ajaxStop(()=>{i.done()}),t.doNav=f,t.pushStateAndNav=m,t}({},$);
//# sourceMappingURL=urlhistory.js.map
