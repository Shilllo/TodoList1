(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),c=n(314),a=n.n(c)()(o());a.push([e.id,"html {\n    height: 100%\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 100px 1fr 50px;\n    min-height: 100%;\n    margin: 0px;\n    background: linear-gradient(to bottom, #8D6335 0%, #5C743D 60%, #0F7B6B 100%);\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\nfooter > div {\n    display: flex;\n    gap: 5px;\n\n}\n\nheader > div > h4 {\n    margin: 0 auto 0 auto\n}\n\nheader > h1 {\n    margin: 0 auto 0 auto;\n    color: #DDEFBB;\n    font-weight: bolder;\n    font-size: 4ch;\n}\n\n#sidebar {\n    grid-area: 2 / 1 / 3 / 2;\n    padding: 10px;\n    height: 1fr;\n    display: flex;\n    flex-direction: column;\n    padding: 15px 5px 15px 5px;\n    gap: 10px\n}\n\n#defaultProjects, #customProjects {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.project {\n    height: 35px;\n    background-color: rgb(99, 87, 23);\n    border-radius: 10%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n}\n\n.project:hover, .addProject:hover {\n    border: 3px solid rgb(99, 87, 23);\n    background-color: rgb(173, 158, 70);\n}\n\n.addProject > svg {\n    width: 30px;\n    height: 30px;\n    fill: #DDEFBB;\n    align-self: center;\n}\n\n.addProject {\n    margin: auto auto 0 auto;\n    width: 190px;\n    height: 40px;\n    border-radius: 10%;\n    background-color: rgb(99, 87, 23);\n    border: 3px solid rgb(173, 158, 70);\n}\n\n#sidebar > div:first-child {\n    font-size: 3.5ch;\n    color: #DDEFBB;\n    margin: 5px;\n    font-weight: bolder;\n}\n\nfooter {\n    background-color: rgb(71, 65, 65);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-area: 3 / 1 / 4 / 3;\n}\n\nfooter > div > svg {\n    width: 20px;\n    height: 20px;\n    align-self: center;\n}\n\n#content {\n    grid-area: 2 / 2 / 3 / 3;\n    height: 1fr;\n    padding: 15px;\n    display: flex;\n    gap: 10px;\n    padding: 15px;\n    flex-wrap: wrap;\n}\n\n.block, #todoForm {\n    width: 200px;\n    height: 250px;\n    background-color: rgb(99, 87, 23);\n    border: 3px solid rgb(173, 158, 70);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    flex-direction: column;\n    justify-content: space-between;\n    /* height: fit-content; */\n    border-radius: 5%;\n}\n\n.buttons > button {\n    background-color: rgb(99, 87, 23);\n    border-radius: 15%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n    width: 90px;\n}\n\n.buttons {\n    margin: 5px auto 5px auto;\n    display: flex;\n    gap: 10px;\n}\n\n.buttons > button:hover {\n    border: 3px solid rgb(99, 87, 23);\n    background-color: rgb(173, 158, 70);\n}\n\n#content > div {\n    color: #DDEFBB;\n}\n\n.title {\n    font-weight: bolder;\n}\n\n.status {\n    background-color: rgb(173, 158, 70);\n    color: rgb(99, 87, 23);\n    height: 35px;\n    border-radius: 15px;\n    padding: 5px\n  }\n\n#todoForm > label, #projectForm > label {\n    color: #DDEFBB;\n}\n\n#todoForm > .buttons > button {\n    background-color: rgb(99, 87, 23);\n    border-radius: 15%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n    width: 180px;\n} \n\n#todoForm > .buttons > button:hover, #projectForm > button:hover {\n    border: 3px solid rgb(99, 87, 23);\n    background-color: rgb(173, 158, 70);\n}\n\n#projectForm {\n    height: 250px;\n    background-color: rgb(99, 87, 23);\n    border: 3px solid rgb(173, 158, 70);\n    display: flex;\n    gap: 10px;\n    padding: 10px;\n    flex-direction: column;\n    justify-content: space-between;\n    height: fit-content;\n    border-radius: 5%;\n}\n\n#projectForm > button {\n    width: 164px;\n    background-color: rgb(99, 87, 23);\n    border-radius: 15%;\n    color: #DDEFBB;\n    border: 3px solid rgb(173, 158, 70);\n    font-weight: bold;\n}",""]);const i=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var d=e[i],l=r.base?d[0]+r.base:d[0],s=c[l]||0,u="".concat(l," ").concat(s);c[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var d=r(e,o),l=0;l<c.length;l++){var s=n(c[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),c=n(659),a=n.n(c),i=n(56),d=n.n(i),l=n(540),s=n.n(l),u=n(113),p=n.n(u),m=n(208),f={};function g(e){let t=document.querySelector("#content");t.querySelectorAll(":scope > :not(:first-child)").forEach((e=>e.remove()));let n=JSON.parse(localStorage.getItem("Storage"))[e];if(n.length)for(let e=0;e<n.length;e++){let r=document.createElement("div");r.classList.add("block");let o=document.createElement("div");o.classList.add("title"),o.textContent=n[e].title;let c=document.createElement("div");c.classList.add("description"),c.textContent=n[e].description;let a=document.createElement("div");a.classList.add("date"),a.textContent=n[e].date;let i=document.createElement("select");i.classList.add("status");let d=document.createElement("option");d.text="Not started",d.value="notStarted",i.add(d);let l=document.createElement("option");l.text="In progress",l.value="inProgress",i.add(l);let s=document.createElement("option");s.text="Done",s.value="Done",i.add(s);let u=document.createElement("div");u.classList.add("buttons");let p=document.createElement("button");p.textContent="Edit",u.appendChild(p);let m=document.createElement("button");m.textContent="Remove",m.classList.add("removeBtn"),m.setAttribute("id",n[e].title),u.appendChild(m),r.appendChild(o),r.appendChild(c),r.appendChild(a),r.appendChild(i),r.appendChild(u),t.appendChild(r)}}function h(e,t){let n=document.createElement("button");n.textContent=e,n.classList.add("project");let r=e.split(" ").join("-");n.setAttribute("id",r),"Inbox"==e||"Today"==e||"Week"==e?document.querySelector("#defaultProjects").appendChild(n):document.querySelector("#customProjects").appendChild(n),t.createProject(e)}function b(e,t){let n=e.split(" ").join("-");document.querySelector(`#${n}`).addEventListener("click",(function(){g(e),t.refreshEvents(),document.querySelector("#projectHeader").textContent=`Projects: ${e}`}))}var v;f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals,function(e){document.querySelector(".addProject").addEventListener("click",(function(){if(!document.querySelector("#projectForm")){let t=document.createElement("form");t.setAttribute("id","projectForm"),t.method="GET";let n=document.createElement("label");n.setAttribute("for","projectName"),n.textContent="Your project's title";let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","projectName");let o=document.createElement("button");o.type="button",o.textContent="Create",o.classList.add("createProject"),t.appendChild(n),t.appendChild(r),t.appendChild(o),document.querySelector("#sidebar").appendChild(t),o.addEventListener("click",(function(){document.querySelector("#projectName").value&&(h(document.querySelector("#projectName").value.toString(),e),b(document.querySelector("#projectName").value,e),e.refreshEvents(),t.remove())})),document.querySelector("#projectForm").addEventListener("keypress",(function(n){13===n.keyCode&&(n.preventDefault(),document.querySelector("#projectName").value)&&(h(document.querySelector("#projectName").value.toString(),e),b(document.querySelector("#projectName").value,e),e.refreshEvents(),t.remove())}))}}))}(v=new class{constructor(){if(localStorage.getItem("Storage")){this.storage=JSON.parse(localStorage.getItem("Storage")),g("Inbox");let e=this,t=document.querySelector("#customProjects");for(let n in this.storage){if(!["Inbox","Today","Week"].includes(n)){let e=document.createElement("button");e.classList.add("project"),e.textContent=n;let r=n.split(" ").join("-");e.setAttribute("id",r),t.appendChild(e)}let r=n.split(" ").join("-");document.querySelector(`#${r}`).addEventListener("click",(function(){g(n),e.refreshEvents(),document.querySelector("#projectHeader").textContent=`Projects: ${n}`}))}document.querySelector("#projectHeader").textContent="Projects: Inbox"}else{this.storage={Inbox:[],Today:[],Week:[]},this.refreshLocalStorage(this.storage),g("Inbox"),this.refreshEvents();let e=this;for(let t in this.storage){let n=t.split(" ").join("-");document.querySelector(`#${n}`).addEventListener("click",(function(){g(t),e.refreshEvents(),document.querySelector("#projectHeader").textContent=`Projects: ${t}`}))}let t=document.querySelector("#projectHeader").textContent.slice(10);document.querySelector("#projectHeader").textContent=`Projects: ${t}`}}refreshLocalStorage(e){localStorage.setItem("Storage",JSON.stringify(e))}createProject(e){this.storage[e]=[],this.refreshLocalStorage(this.storage),g(e),this.refreshEvents()}createTodo(e,t){this.storage[e].push(t),this.refreshLocalStorage(this.storage),g(e),this.refreshEvents()}removeTodo(e,t){for(let n=0;n<this.storage[e].length;n++)this.storage[e][n].title==t&&(this.storage[e].splice(n,1),this.refreshLocalStorage(this.storage));g(e),this.refreshEvents()}get currentStorage(){return this.storage}set currentStorage(e){this.storage=e}refreshEvents(){let e=this,t=document.querySelectorAll(".removeBtn"),n=document.querySelector("#projectHeader").textContent.slice(10);for(let r=0;r<t.length;r++){let o=t[r].id;document.querySelector(`#${o}`).addEventListener("click",(function(){console.log(n),console.log(o),e.removeTodo(n,o)}))}}}),function(e){document.querySelector("#createTodo").addEventListener("click",(function(){let t=document.querySelector("#title").value,n=document.querySelector("#description").value,r=document.querySelector("#date").value;if(t&&n&&r){let o={title:t,description:n,date:r};document.querySelector("#title").value="",document.querySelector("#description").value="",document.querySelector("#date").value="",e.createTodo(document.querySelector("#projectHeader").textContent.slice(10),o)}}))}(v)})()})();