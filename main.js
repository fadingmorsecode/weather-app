(()=>{"use strict";var n={150:(n,e,t)=>{t.d(e,{Z:()=>A});var o=t(537),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Scribble&display=swap);"]),a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr 3fr 3fr;\n}\n\nheader {\n  grid-column-start: 1;\n  grid-column-end: 4;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n  min-width: 100%;\n  background-color: #2c0703;\n}\n\n#search-input {\n  width: 160px;\n  height: 25px;\n  border: solid 3px #b6465f;\n  border-radius: 10px;\n  font-family: poppins;\n  padding: 5px;\n  color: black;\n  background-color: lightgrey;\n}\n\n#search-btn {\n  height: 25px;\n  width: 65px;\n  border: none;\n  color: white;\n  border-radius: 10px;\n  background-color: #b6465f;\n  font-family: poppins;\n}\n\n.heading-text {\n  color: white;\n  font-family: "rubik scribble", Impact, Haettenschweiler, "Arial Narrow Bold",\n    sans-serif;\n  font-size: 3.5rem;\n}\n\n/* switch styling */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch::before {\n  position: absolute;\n  content: "°F";\n  font-size: 1.4rem;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  color: white;\n  right: 80px;\n  top: 7px;\n}\n\n.switch::after {\n  position: absolute;\n  content: "°C";\n  font-size: 1.4rem;\n  font-family: sans-serif;\n  color: white;\n  left: 80px;\n  top: 7px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #da9f93;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #b6465f;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #b6465f;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Weather containers */\n\n.current-weather {\n  grid-row-start: 2;\n  grid-row-end: 3;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.current-container,\n.forecast-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  min-width: 80%;\n  min-height: 80%;\n  justify-content: center;\n  align-items: center;\n  font-family: poppins;\n  border: dashed 3px darkcyan;\n  background-color: #ebd4cb;\n  border-radius: 15px;\n  padding: 20px;\n}\n\n.current-location-text,\n.forecast-date-text {\n  font-size: 1.8rem;\n}\n\n.current-country-text {\n  font-size: 1.2rem;\n}\n\n.current-temp-text,\n.forecast-temp-text {\n  position: relative;\n  font-size: 3rem;\n  font-weight: 300;\n}\n\n.current-temp-text::after {\n  position: absolute;\n  content: "°";\n}\n\n.current-condition-text,\n.forecast-condition-text {\n  font-size: 1.3rem;\n}\n\n.forecast-range-container {\n  display: flex;\n  gap: 15px;\n  font-size: 20px;\n}\n.forecast-weather {\n  grid-row-start: 3;\n  grid-row-end: 4;\n  grid-column-start: 1;\n  grid-column-end: 4;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n',"",{version:3,sources:["webpack://./src/main.css"],names:[],mappings:"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",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Scribble&display=swap");\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr 3fr 3fr;\n}\n\nheader {\n  grid-column-start: 1;\n  grid-column-end: 4;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n  min-width: 100%;\n  background-color: #2c0703;\n}\n\n#search-input {\n  width: 160px;\n  height: 25px;\n  border: solid 3px #b6465f;\n  border-radius: 10px;\n  font-family: poppins;\n  padding: 5px;\n  color: black;\n  background-color: lightgrey;\n}\n\n#search-btn {\n  height: 25px;\n  width: 65px;\n  border: none;\n  color: white;\n  border-radius: 10px;\n  background-color: #b6465f;\n  font-family: poppins;\n}\n\n.heading-text {\n  color: white;\n  font-family: "rubik scribble", Impact, Haettenschweiler, "Arial Narrow Bold",\n    sans-serif;\n  font-size: 3.5rem;\n}\n\n/* switch styling */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch::before {\n  position: absolute;\n  content: "°F";\n  font-size: 1.4rem;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  color: white;\n  right: 80px;\n  top: 7px;\n}\n\n.switch::after {\n  position: absolute;\n  content: "°C";\n  font-size: 1.4rem;\n  font-family: sans-serif;\n  color: white;\n  left: 80px;\n  top: 7px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #da9f93;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #b6465f;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #b6465f;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/* Weather containers */\n\n.current-weather {\n  grid-row-start: 2;\n  grid-row-end: 3;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.current-container,\n.forecast-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  min-width: 80%;\n  min-height: 80%;\n  justify-content: center;\n  align-items: center;\n  font-family: poppins;\n  border: dashed 3px darkcyan;\n  background-color: #ebd4cb;\n  border-radius: 15px;\n  padding: 20px;\n}\n\n.current-location-text,\n.forecast-date-text {\n  font-size: 1.8rem;\n}\n\n.current-country-text {\n  font-size: 1.2rem;\n}\n\n.current-temp-text,\n.forecast-temp-text {\n  position: relative;\n  font-size: 3rem;\n  font-weight: 300;\n}\n\n.current-temp-text::after {\n  position: absolute;\n  content: "°";\n}\n\n.current-condition-text,\n.forecast-condition-text {\n  font-size: 1.3rem;\n}\n\n.forecast-range-container {\n  display: flex;\n  gap: 15px;\n  font-size: 20px;\n}\n.forecast-weather {\n  grid-row-start: 3;\n  grid-row-end: 4;\n  grid-column-start: 1;\n  grid-column-end: 4;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n'],sourceRoot:""}]);const A=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],A=0;A<n.length;A++){var c=n[A],s=o.base?c[0]+o.base:c[0],d=i[s]||0,l="".concat(s," ").concat(d);i[s]=d+1;var p=t(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=r(u,o);o.byIndex=A,e.splice(A,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var c=o(n,r),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),A=t(565),c=t.n(A),s=t(216),d=t.n(s),l=t(589),p=t.n(l),u=t(150),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const m=document.querySelector("#search-input");async function E(n){const e=await async function(n){const e=await n;return{name:e.location.name,country:e.location.country,temp_c:e.current.temp_c,temp_f:e.current.temp_f,condition:e.current.condition.text}}(async function(n){const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=e27d0611824649cba3880002231612&q=${n}&aqi=no`,{mode:"cors"});return await e.json()}(n)),t=await async function(n){const e=await n,t=[];return e.forecast.forecastday.forEach((n=>{t.push({name:e.location.name,country:e.location.country,date:n.date,maxtemp_c:n.day.maxtemp_c,maxtemp_f:n.day.maxtemp_f,mintemp_c:n.day.mintemp_c,mintemp_f:n.day.mintemp_f,condition:n.day.condition.text})})),t}(async function(n){const e=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e27d0611824649cba3880002231612&q=${n}&days=3&aqi=no&alerts=no`,{mode:"cors"});return await e.json()}(n));!function(){const n=document.querySelector(".current-weather"),e=document.querySelector(".forecast-weather");for(;n.firstChild;)n.removeChild(n.lastChild);for(;e.firstChild;)e.removeChild(e.lastChild)}(),function(){const n=document.querySelector(".current-weather"),e=document.querySelector(".forecast-weather"),t=document.createElement("div");t.classList.add("current-container");const o=document.createElement("p");o.classList.add("current-location-text");const r=document.createElement("p");r.classList.add("current-country-text");const i=document.createElement("p");i.classList.add("current-temp-text");const a=document.createElement("p");a.classList.add("current-condition-text"),t.appendChild(o),t.appendChild(r),t.appendChild(i),t.appendChild(a),n.appendChild(t),function(){for(let n=0;n<3;n++){const n=document.createElement("div");n.classList.add("forecast-container");const t=document.createElement("p");t.classList.add("forecast-date-text");const o=document.createElement("p");o.classList.add("forecast-condition-text");const r=document.createElement("div");r.classList.add("forecast-range-container");const i=document.createElement("p"),a=document.createElement("p");n.appendChild(t),n.appendChild(o),n.appendChild(r),r.appendChild(i),r.appendChild(a),e.appendChild(n)}}()}(),function(n,e){const t=function(){let n;return n=document.querySelector('input[type="checkbox"]').checked?"c":"f",n}(),o=document.querySelector(".current-location-text"),r=document.querySelector(".current-country-text"),i=document.querySelector(".current-temp-text"),a=document.querySelector(".current-condition-text");o.textContent=n.name,r.textContent=n.country,i.textContent=n[`temp_${t}`],a.textContent=n.condition;const A=document.querySelectorAll(".forecast-container"),c=Array.from(A);console.log(c[0].childNodes[2]);for(let n=0;n<c.length;n++)c[n].children[0].textContent=e[n].date,c[n].childNodes[1].textContent=e[n].condition,c[n].childNodes[2].childNodes[0].textContent=`Low: ${e[n][`mintemp_${t}`]}`,c[n].childNodes[2].childNodes[1].textContent=`High: ${e[n][`maxtemp_${t}`]}`;console.log(n,e)}(e,t)}document.addEventListener("click",(function(n){n.target.matches("#search-btn")&&(n.preventDefault(),E(m.value))}))})()})();
//# sourceMappingURL=main.js.map