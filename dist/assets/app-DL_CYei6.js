(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const Cg=()=>{};var yu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Rg=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],c=n[e++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(E=64)),r.push(e[f],e[g],e[E],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Nd(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Rg(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new Pg;const E=i<<2|c>>4;if(r.push(E),d!==64){const b=c<<4&240|d>>2;if(r.push(b),g!==64){const D=d<<6&192|g;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ng=function(n){const t=Nd(n);return Dd.encodeByteArray(t,!0)},Fi=function(n){return Ng(n).replace(/\./g,"")},Od=function(n){try{return Dd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=()=>Dg().__FIREBASE_DEFAULTS__,kg=()=>{if(typeof process>"u"||typeof yu>"u")return;const n=yu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Od(n[1]);return t&&JSON.parse(t)},co=()=>{try{return Cg()||Og()||kg()||Vg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kd=n=>co()?.emulatorHosts?.[n],Lg=n=>{const t=kd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Vd=()=>co()?.config,Ld=n=>co()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Md(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fi(JSON.stringify(e)),Fi(JSON.stringify(a)),""].join(".")}const ys={};function Fg(){const n={prod:[],emulator:[]};for(const t of Object.keys(ys))ys[t]?n.emulator.push(t):n.prod.push(t);return n}function Ug(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Eu=!1;function xd(n,t){if(typeof window>"u"||typeof document>"u"||!Or(window.location.host)||ys[n]===t||ys[n]||Eu)return;ys[n]=t;function e(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Fg().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,b){E.setAttribute("width","24"),E.setAttribute("id",b),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Eu=!0,a()},E}function f(E,b){E.setAttribute("id",b),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=Ug(r),b=e("text"),D=document.getElementById(b)||document.createElement("span"),O=e("learnmore"),P=document.getElementById(O)||document.createElement("a"),M=e("preprendIcon"),x=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const $=E.element;c($),f(P,O);const B=d();u(x,M),$.append(x,D,P,B),document.body.appendChild($)}i?(D.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Bg(){const n=co()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wg(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zg(){return!Bg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kg(){try{return typeof indexedDB=="object"}catch{return!1}}function Gg(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="FirebaseError";class Ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Qg,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vs.prototype.create)}}class Vs{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Yg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ne(s,c,r)}}function Yg(n,t){return n.replace(Xg,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xg=/\{\$([^}]+)}/g;function Jg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ae(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(vu(i)&&vu(a)){if(!Ae(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function vu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ds(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function fs(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Zg(n,t){const e=new t_(n,t);return e.subscribe.bind(e)}class t_{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");e_(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=ia),s.error===void 0&&(s.error=ia),s.complete===void 0&&(s.complete=ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e_(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ia(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Mg;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(s_(t))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=wn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wn){return this.instances.has(t)}getOptions(t=wn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=wn){return this.component?this.component.multipleInstances?t:wn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r_(n){return n===wn?void 0:n}function s_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new n_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const o_={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},a_=Q.INFO,c_={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},l_=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=c_[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fc{constructor(t){this.name=t,this._logLevel=a_,this._logHandler=l_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?o_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const u_=(n,t)=>t.some(e=>n instanceof e);let Tu,Iu;function h_(){return Tu||(Tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d_(){return Iu||(Iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,ka=new WeakMap,Ud=new WeakMap,oa=new WeakMap,pc=new WeakMap;function f_(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(Qe(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Fd.set(e,n)}).catch(()=>{}),pc.set(t,n),t}function p_(n){if(ka.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ka.set(n,t)}let Va={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ka.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ud.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function m_(n){Va=n(Va)}function g_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(aa(this),t,...e);return Ud.set(r,t.sort?t.sort():[t]),Qe(r)}:d_().includes(n)?function(...t){return n.apply(aa(this),t),Qe(Fd.get(this))}:function(...t){return Qe(n.apply(aa(this),t))}}function __(n){return typeof n=="function"?g_(n):(n instanceof IDBTransaction&&p_(n),u_(n,h_())?new Proxy(n,Va):n)}function Qe(n){if(n instanceof IDBRequest)return f_(n);if(oa.has(n))return oa.get(n);const t=__(n);return t!==n&&(oa.set(n,t),pc.set(t,n)),t}const aa=n=>pc.get(n);function y_(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),c=Qe(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Qe(a.result),u.oldVersion,u.newVersion,Qe(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const E_=["get","getKey","getAll","getAllKeys","count"],v_=["put","add","delete","clear"],ca=new Map;function wu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ca.get(t))return ca.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=v_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||E_.includes(e)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&u.done]))[0]};return ca.set(t,i),i}m_(n=>({...n,get:(t,e,r)=>wu(t,e)||n.get(t,e,r),has:(t,e)=>!!wu(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(I_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function I_(n){return n.getComponent()?.type==="VERSION"}const La="@firebase/app",Au="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new fc("@firebase/app"),w_="@firebase/app-compat",A_="@firebase/analytics-compat",b_="@firebase/analytics",S_="@firebase/app-check-compat",C_="@firebase/app-check",R_="@firebase/auth",P_="@firebase/auth-compat",N_="@firebase/database",D_="@firebase/data-connect",O_="@firebase/database-compat",k_="@firebase/functions",V_="@firebase/functions-compat",L_="@firebase/installations",M_="@firebase/installations-compat",x_="@firebase/messaging",F_="@firebase/messaging-compat",U_="@firebase/performance",$_="@firebase/performance-compat",B_="@firebase/remote-config",j_="@firebase/remote-config-compat",q_="@firebase/storage",H_="@firebase/storage-compat",W_="@firebase/firestore",z_="@firebase/ai",K_="@firebase/firestore-compat",G_="firebase",Q_="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="[DEFAULT]",Y_={[La]:"fire-core",[w_]:"fire-core-compat",[b_]:"fire-analytics",[A_]:"fire-analytics-compat",[C_]:"fire-app-check",[S_]:"fire-app-check-compat",[R_]:"fire-auth",[P_]:"fire-auth-compat",[N_]:"fire-rtdb",[D_]:"fire-data-connect",[O_]:"fire-rtdb-compat",[k_]:"fire-fn",[V_]:"fire-fn-compat",[L_]:"fire-iid",[M_]:"fire-iid-compat",[x_]:"fire-fcm",[F_]:"fire-fcm-compat",[U_]:"fire-perf",[$_]:"fire-perf-compat",[B_]:"fire-rc",[j_]:"fire-rc-compat",[q_]:"fire-gcs",[H_]:"fire-gcs-compat",[W_]:"fire-fst",[K_]:"fire-fst-compat",[z_]:"fire-vertex","fire-js":"fire-js",[G_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,X_=new Map,xa=new Map;function bu(n,t){try{n.container.addComponent(t)}catch(e){be.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function mr(n){const t=n.name;if(xa.has(t))return be.debug(`There were multiple attempts to register component ${t}.`),!1;xa.set(t,n);for(const e of Ui.values())bu(e,n);for(const e of X_.values())bu(e,n);return!0}function mc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function qt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ye=new Vs("app","Firebase",J_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=Q_;function $d(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Ma,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Ye.create("bad-app-name",{appName:String(s)});if(e||(e=Vd()),!e)throw Ye.create("no-options");const i=Ui.get(s);if(i){if(Ae(e,i.options)&&Ae(r,i.config))return i;throw Ye.create("duplicate-app",{appName:s})}const a=new i_(s);for(const u of xa.values())a.addComponent(u);const c=new Z_(e,r,a);return Ui.set(s,c),c}function Bd(n=Ma){const t=Ui.get(n);if(!t&&n===Ma&&Vd())return $d();if(!t)throw Ye.create("no-app",{appName:n});return t}function Xe(n,t,e){let r=Y_[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),be.warn(a.join(" "));return}mr(new Nn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="firebase-heartbeat-database",ey=1,Ss="firebase-heartbeat-store";let la=null;function jd(){return la||(la=y_(ty,ey,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ss)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ye.create("idb-open",{originalErrorMessage:n.message})})),la}async function ny(n){try{const e=(await jd()).transaction(Ss),r=await e.objectStore(Ss).get(qd(n));return await e.done,r}catch(t){if(t instanceof Ne)be.warn(t.message);else{const e=Ye.create("idb-get",{originalErrorMessage:t?.message});be.warn(e.message)}}}async function Su(n,t){try{const r=(await jd()).transaction(Ss,"readwrite");await r.objectStore(Ss).put(t,qd(n)),await r.done}catch(e){if(e instanceof Ne)be.warn(e.message);else{const r=Ye.create("idb-set",{originalErrorMessage:e?.message});be.warn(r.message)}}}function qd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=1024,sy=30;class iy{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ay(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>sy){const s=cy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){be.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cu(),{heartbeatsToSend:e,unsentEntries:r}=oy(this._heartbeatsCache.heartbeats),s=Fi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return be.warn(t),""}}}function Cu(){return new Date().toISOString().substring(0,10)}function oy(n,t=ry){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ru(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ru(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ay{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kg()?Gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ny(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Su(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Su(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ru(n){return Fi(JSON.stringify({version:2,heartbeats:n})).length}function cy(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){mr(new Nn("platform-logger",t=>new T_(t),"PRIVATE")),mr(new Nn("heartbeat",t=>new iy(t),"PRIVATE")),Xe(La,Au,n),Xe(La,Au,"esm2020"),Xe("fire-js","")}ly("");function Hd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uy=Hd,Wd=new Vs("auth","Firebase",Hd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new fc("@firebase/auth");function hy(n,...t){$i.logLevel<=Q.WARN&&$i.warn(`Auth (${kr}): ${n}`,...t)}function bi(n,...t){$i.logLevel<=Q.ERROR&&$i.error(`Auth (${kr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,...t){throw gc(n,...t)}function ie(n,...t){return gc(n,...t)}function zd(n,t,e){const r={...uy(),[t]:e};return new Vs("auth","Firebase",r).create(t,{appName:n.name})}function ve(n){return zd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gc(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Wd.create(n,...t)}function j(n,t,...e){if(!n)throw gc(t,...e)}function ye(n){const t="INTERNAL ASSERTION FAILED: "+n;throw bi(t),new Error(t)}function Se(n,t){n||ye(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){return typeof self<"u"&&self.location?.href||""}function dy(){return Pu()==="http:"||Pu()==="https:"}function Pu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dy()||qg()||"connection"in navigator)?navigator.onLine:!0}function py(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e){this.shortDelay=t,this.longDelay=e,Se(e>t,"Short delay should be less than long delay!"),this.isMobile=$g()||Hg()}get(){return fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n,t){Se(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_y=new Ms(3e4,6e4);function hn(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function De(n,t,e,r,s={}){return Gd(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ls({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:t,headers:u,...i};return jg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Or(n.emulatorConfig.host)&&(d.credentials="include"),Kd.fetch()(await Qd(n,n.config.apiHost,e,c),d)})}async function Gd(n,t,e){n._canInitEmulator=!1;const r={...my,...t};try{const s=new Ey(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw di(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw di(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw di(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw di(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw zd(n,f,d);Zt(n,f)}}catch(s){if(s instanceof Ne)throw s;Zt(n,"network-request-failed",{message:String(s)})}}async function xs(n,t,e,r,s={}){const i=await De(n,t,e,r,s);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qd(n,t,e,r){const s=`${t}${e}?${r}`,i=n,a=i.config.emulator?_c(n.config,s):`${n.config.apiScheme}://${s}`;return gy.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function yy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ey{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ie(this.auth,"network-request-failed")),_y.get())})}}function di(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ie(n,t,r);return s.customData._tokenResponse=e,s}function Nu(n){return n!==void 0&&n.enterprise!==void 0}class vy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return yy(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ty(n,t){return De(n,"GET","/v2/recaptchaConfig",hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(n,t){return De(n,"POST","/v1/accounts:delete",t)}async function Bi(n,t){return De(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function wy(n,t=!1){const e=ft(n),r=await e.getIdToken(t),s=yc(r);j(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Es(ua(s.auth_time)),issuedAtTime:Es(ua(s.iat)),expirationTime:Es(ua(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ua(n){return Number(n)*1e3}function yc(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Od(e);return s?JSON.parse(s):(bi("Failed to decode base64 JWT payload"),null)}catch(s){return bi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Du(n){const t=yc(n);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ne&&Ay(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(n){const t=n.auth,e=await n.getIdToken(),r=await gr(n,Bi(t,{idToken:e}));j(r?.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?Yd(s.providerUserInfo):[],a=Cy(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ua(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Sy(n){const t=ft(n);await ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Cy(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Yd(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(n,t){const e=await Gd(n,{},async()=>{const r=Ls({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Qd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Or(n.emulatorConfig.host)&&(u.credentials="include"),Kd.fetch()(a,u)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Py(n,t){return De(n,"POST","/v2/accounts:revokeToken",hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Du(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){j(t.length!==0,"internal-error");const e=Du(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ry(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new hr;return r&&(j(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,t){j(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Xt{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new by(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ua(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await gr(this,this.stsTokenManager.getToken(this.auth,t));return j(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return wy(this,t)}reload(){return Sy(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Xt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(ve(this.auth));const t=await this.getIdToken();return await gr(this,Iy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,a=e.photoURL??void 0,c=e.tenantId??void 0,u=e._redirectEventId??void 0,d=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:b,providerData:D,stsTokenManager:O}=e;j(g&&O,t,"internal-error");const P=hr.fromJSON(this.name,O);j(typeof g=="string",t,"internal-error"),je(r,t.name),je(s,t.name),j(typeof E=="boolean",t,"internal-error"),j(typeof b=="boolean",t,"internal-error"),je(i,t.name),je(a,t.name),je(c,t.name),je(u,t.name),je(d,t.name),je(f,t.name);const M=new Xt({uid:g,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:P,createdAt:d,lastLoginAt:f});return D&&Array.isArray(D)&&(M.providerData=D.map(x=>({...x}))),u&&(M._redirectEventId=u),M}static async _fromIdTokenResponse(t,e,r=!1){const s=new hr;s.updateFromServerResponse(e);const i=new Xt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ji(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new hr;c.updateFromIdToken(r);const u=new Xt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ua(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Map;function Ee(n){Se(n instanceof Function,"Expected a class definition");let t=Ou.get(n);return t?(Se(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ou.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Xd.type="NONE";const ku=Xd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n,t,e){return`firebase:${n}:${t}:${e}`}class dr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Si(this.userKey,s.apiKey,i),this.fullPersistenceKey=Si("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Bi(this.auth,{idToken:t}).catch(()=>{});return e?Xt._fromGetAccountInfoResponse(this.auth,e,t):null}return Xt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new dr(Ee(ku),t,r);const s=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ee(ku);const a=Si(r,t.config.apiKey,t.name);let c=null;for(const d of e)try{const f=await d._get(a);if(f){let g;if(typeof f=="string"){const E=await Bi(t,{idToken:f}).catch(()=>{});if(!E)break;g=await Xt._fromGetAccountInfoResponse(t,E,f)}else g=Xt._fromJSON(t,f);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new dr(i,t,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(e.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new dr(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ef(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rf(t))return"Blackberry";if(sf(t))return"Webos";if(Zd(t))return"Safari";if((t.includes("chrome/")||tf(t))&&!t.includes("edge/"))return"Chrome";if(nf(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if(r?.length===2)return r[1]}return"Other"}function Jd(n=bt()){return/firefox\//i.test(n)}function Zd(n=bt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tf(n=bt()){return/crios\//i.test(n)}function ef(n=bt()){return/iemobile/i.test(n)}function nf(n=bt()){return/android/i.test(n)}function rf(n=bt()){return/blackberry/i.test(n)}function sf(n=bt()){return/webos/i.test(n)}function Ec(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ny(n=bt()){return Ec(n)&&!!window.navigator?.standalone}function Dy(){return Wg()&&document.documentMode===10}function of(n=bt()){return Ec(n)||nf(n)||sf(n)||rf(n)||/windows phone/i.test(n)||ef(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n,t=[]){let e;switch(n){case"Browser":e=Vu(bt());break;case"Worker":e=`${Vu(bt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,c)=>{try{const u=t(i);a(u)}catch(u){c(u)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(n,t={}){return De(n,"GET","/v2/passwordPolicy",hn(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=6;class Ly{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??Vy,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lu(this),this.idTokenSubscription=new Lu(this),this.beforeStateQueue=new Oy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ee(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await dr.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Bi(this,{idToken:t}),r=await Xt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(qt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(t);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ji(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=py()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(qt(this.app))return Promise.reject(ve(this));const e=t?ft(t):null;return e&&j(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(ve(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return qt(this.app)?Promise.reject(ve(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ky(this),e=new Ly(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Vs("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Py(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ee(t)||this._popupRedirectResolver;j(e,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[Ee(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,s);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&hy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function xn(n){return ft(n)}class Lu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Zg(e=>this.observer=e)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xy(n){lo=n}function cf(n){return lo.loadJS(n)}function Fy(){return lo.recaptchaEnterpriseScript}function Uy(){return lo.gapiScript}function $y(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class By{constructor(){this.enterprise=new jy}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class jy{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const qy="recaptcha-enterprise",lf="NO_RECAPTCHA";class Hy{constructor(t){this.type=qy,this.auth=xn(t)}async verify(t="verify",e=!1){async function r(i){if(!e){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Ty(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new vy(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Nu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:t}).then(d=>{a(d)}).catch(()=>{a(lf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new By().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!e&&Nu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Fy();u.length!==0&&(u+=c),cf(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Mu(n,t,e,r=!1,s=!1){const i=new Hy(n);let a;if(s)a=lf;else try{a=await i.verify(e)}catch{a=await i.verify(e,!0)}const c={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $a(n,t,e,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Mu(n,t,e,e==="getOobCode");return r(n,i)}else return r(n,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Mu(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n,t){const e=mc(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(Ae(i,t??{}))return s;Zt(s,"already-initialized")}return e.initialize({options:t})}function zy(n,t){const e=t?.persistence||[],r=(Array.isArray(e)?e:[e]).map(Ee);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t?.popupRedirectResolver)}function Ky(n,t,e){const r=xn(n);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=uf(t),{host:a,port:c}=Gy(t),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Ae(d,r.config.emulator)&&Ae(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Or(a)?(Md(`${i}//${a}${u}`),xd("Auth",!0)):Qy()}function uf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Gy(n){const t=uf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:xu(a)}}}function xu(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Qy(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ye("not implemented")}_getIdTokenResponse(t){return ye("not implemented")}_linkToIdToken(t,e){return ye("not implemented")}_getReauthenticationResolver(t){return ye("not implemented")}}async function Yy(n,t){return De(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,t){return xs(n,"POST","/v1/accounts:signInWithPassword",hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,t){return xs(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,t))}async function Zy(n,t){return xs(n,"POST","/v1/accounts:signInWithEmailLink",hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends vc{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Cs(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Cs(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e?.email&&e?.password){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(t,e,"signInWithPassword",Xy);case"emailLink":return Jy(t,{email:this._email,oobCode:this._password});default:Zt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(t,r,"signUpPassword",Yy);case"emailLink":return Zy(t,{idToken:e,email:this._email,oobCode:this._password});default:Zt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,t){return xs(n,"POST","/v1/accounts:signInWithIdp",hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="http://localhost";class Dn extends vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Zt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const a=new Dn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return fr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,fr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,fr(t,e)}buildRequest(){const t={requestUri:tE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ls(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nE(n){const t=ds(fs(n)).link,e=t?ds(fs(t)).deep_link_id:null,r=ds(fs(n)).deep_link_id;return(r?ds(fs(r)).link:null)||r||e||t||n}class Tc{constructor(t){const e=ds(fs(t)),r=e.apiKey??null,s=e.oobCode??null,i=eE(e.mode??null);j(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=nE(t);try{return new Tc(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.providerId=Vr.PROVIDER_ID}static credential(t,e){return Cs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Tc.parseLink(e);return j(r,"argument-error"),Cs._fromEmailAndCode(t,r.code,r.tenantId)}}Vr.PROVIDER_ID="password";Vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends hf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Fs{constructor(){super("facebook.com")}static credential(t){return Dn._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return He.credentialFromTaggedObject(t)}static credentialFromError(t){return He.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return He.credential(t.oauthAccessToken)}catch{return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com";He.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Dn._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return We.credentialFromTaggedObject(t)}static credentialFromError(t){return We.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return We.credential(e,r)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Fs{constructor(){super("github.com")}static credential(t){return Dn._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ze.credentialFromTaggedObject(t)}static credentialFromError(t){return ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ze.credential(t.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Fs{constructor(){super("twitter.com")}static credential(t,e){return Dn._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ke.credentialFromTaggedObject(t)}static credentialFromError(t){return Ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ke.credential(e,r)}catch{return null}}}Ke.TWITTER_SIGN_IN_METHOD="twitter.com";Ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n,t){return xs(n,"POST","/v1/accounts:signUp",hn(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await Xt._fromIdTokenResponse(t,r,s),a=Fu(r);return new On({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Fu(r);return new On({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Fu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Ne{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new qi(t,e,r,s)}}function df(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(n,i,t,r):i})}async function sE(n,t,e=!1){const r=await gr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return On._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n,t,e=!1){const{auth:r}=n;if(qt(r.app))return Promise.reject(ve(r));const s="reauthenticate";try{const i=await gr(n,df(r,s,t,n),e);j(i.idToken,r,"internal-error");const a=yc(i.idToken);j(a,r,"internal-error");const{sub:c}=a;return j(n.uid===c,r,"user-mismatch"),On._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(n,t,e=!1){if(qt(n.app))return Promise.reject(ve(n));const r="signIn",s=await df(n,r,t),i=await On._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}async function oE(n,t){return ff(xn(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(n){const t=xn(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function LR(n,t,e){if(qt(n.app))return Promise.reject(ve(n));const r=xn(n),a=await $a(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pf(n),u}),c=await On._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function MR(n,t,e){return qt(n.app)?Promise.reject(ve(n)):oE(ft(n),Vr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pf(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(n,t){return De(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=ft(n),i={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await gr(r,aE(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function cE(n,t,e,r){return ft(n).onIdTokenChanged(t,e,r)}function lE(n,t,e){return ft(n).beforeAuthStateChanged(t,e)}function FR(n,t,e,r){return ft(n).onAuthStateChanged(t,e,r)}function UR(n){return ft(n).signOut()}const Hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=1e3,hE=10;class gf extends mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=of(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Dy()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,hE):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},uE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}gf.type="LOCAL";const dE=gf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}_f.type="SESSION";const yf=_f;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new uo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!a?.size)return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(e.origin,i)),u=await fE(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Ic("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return window}function mE(n){oe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function gE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _E(){return navigator?.serviceWorker?.controller||null}function yE(){return Ef()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="firebaseLocalStorageDb",EE=1,Wi="firebaseLocalStorage",Tf="fbase_key";class Us{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ho(n,t){return n.transaction([Wi],t?"readwrite":"readonly").objectStore(Wi)}function vE(){const n=indexedDB.deleteDatabase(vf);return new Us(n).toPromise()}function Ba(){const n=indexedDB.open(vf,EE);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wi,{keyPath:Tf})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wi)?t(r):(r.close(),await vE(),t(await Ba()))})})}async function Uu(n,t,e){const r=ho(n,!0).put({[Tf]:t,value:e});return new Us(r).toPromise()}async function TE(n,t){const e=ho(n,!1).get(t),r=await new Us(e).toPromise();return r===void 0?null:r.value}function $u(n,t){const e=ho(n,!0).delete(t);return new Us(e).toPromise()}const IE=800,wE=3;class If{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>wE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uo._getInstance(yE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await gE(),!this.activeServiceWorker)return;this.sender=new pE(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_E()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ba();return await Uu(t,Hi,"1"),await $u(t,Hi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uu(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>TE(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>$u(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ho(s,!1).getAll();return new Us(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}If.type="LOCAL";const AE=If;new Ms(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(n,t){return t?Ee(t):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends vc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return fr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function SE(n){return ff(n.auth,new wc(n),n.bypassAuthState)}function CE(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),iE(e,new wc(n),n.bypassAuthState)}async function RE(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),sE(e,new wc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return SE;case"linkViaPopup":case"linkViaRedirect":return RE;case"reauthViaPopup":case"reauthViaRedirect":return CE;default:Zt(this.auth,"internal-error")}}resolve(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=new Ms(2e3,1e4);class lr extends wf{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const t=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,PE.get())};t()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="pendingRedirect",Ci=new Map;class DE extends wf{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ci.get(this.auth._key());if(!t){try{const r=await OE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ci.set(this.auth._key(),t)}return this.bypassAuthState||Ci.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OE(n,t){const e=LE(t),r=VE(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function kE(n,t){Ci.set(n._key(),t)}function VE(n){return Ee(n._redirectPersistence)}function LE(n){return Si(NE,n.config.apiKey,n.name)}async function ME(n,t,e=!1){if(qt(n.app))return Promise.reject(ve(n));const r=xn(n),s=bE(r,t),a=await new DE(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=600*1e3;class FE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!UE(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!Af(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";e.onError(ie(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=xE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bu(t))}saveEventToCache(t){this.cachedEventUids.add(Bu(t)),this.lastProcessedEventTime=Date.now()}}function Bu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Af({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function UE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Af(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(n,t={}){return De(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jE=/^https?/;async function qE(n){if(n.config.emulator)return;const{authorizedDomains:t}=await $E(n);for(const e of t)try{if(HE(e))return}catch{}Zt(n,"unauthorized-domain")}function HE(n){const t=Fa(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!jE.test(e))return!1;if(BE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=new Ms(3e4,6e4);function ju(){const n=oe().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function zE(n){return new Promise((t,e)=>{function r(){ju(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ju(),e(ie(n,"network-request-failed"))},timeout:WE.get()})}if(oe().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(oe().gapi?.load)r();else{const s=$y("iframefcb");return oe()[s]=()=>{gapi.load?r():e(ie(n,"network-request-failed"))},cf(`${Uy()}?onload=${s}`).catch(i=>e(i))}}).catch(t=>{throw Ri=null,t})}let Ri=null;function KE(n){return Ri=Ri||zE(n),Ri}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new Ms(5e3,15e3),QE="__/auth/iframe",YE="emulator/auth/iframe",XE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZE(n){const t=n.config;j(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?_c(t,YE):`https://${n.config.authDomain}/${QE}`,r={apiKey:t.apiKey,appName:n.name,v:kr},s=JE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${Ls(r).slice(1)}`}async function tv(n){const t=await KE(n),e=oe().gapi;return j(e,n,"internal-error"),t.open({where:document.body,url:ZE(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ie(n,"network-request-failed"),c=oe().setTimeout(()=>{i(a)},GE.get());function u(){oe().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nv=500,rv=600,sv="_blank",iv="http://localhost";class qu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ov(n,t,e,r=nv,s=rv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...ev,width:r.toString(),height:s.toString(),top:i,left:a},d=bt().toLowerCase();e&&(c=tf(d)?sv:e),Jd(d)&&(t=t||iv,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[b,D])=>`${E}${b}=${D},`,"");if(Ny(d)&&c!=="_self")return av(t||"",c),new qu(null);const g=window.open(t||"",c,f);j(g,n,"popup-blocked");try{g.focus()}catch{}return new qu(g)}function av(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="__/auth/handler",lv="emulator/auth/handler",uv=encodeURIComponent("fac");async function Hu(n,t,e,r,s,i){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:kr,eventId:s};if(t instanceof hf){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Jg(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(t instanceof Fs){const f=t.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${uv}=${encodeURIComponent(u)}`:"";return`${hv(n)}?${Ls(c).slice(1)}${d}`}function hv({config:n}){return n.emulator?_c(n,lv):`https://${n.authDomain}/${cv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="webStorageSupport";class dv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yf,this._completeRedirectFn=ME,this._overrideRedirectResult=kE}async _openPopup(t,e,r,s){Se(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Hu(t,e,r,Fa(),s);return ov(t,i,Ic())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await Hu(t,e,r,Fa(),s);return mE(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Se(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await tv(t),r=new FE(t);return e.register("authEvent",s=>(j(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ha,{type:ha},s=>{const i=s?.[0]?.[ha];i!==void 0&&e(!!i),Zt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=qE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return of()||Zd()||Ec()}}const fv=dv;var Wu="@firebase/auth",zu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gv(n){mr(new Nn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:af(n)},d=new My(r,s,i,u);return zy(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),mr(new Nn("auth-internal",t=>{const e=xn(t.getProvider("auth").getImmediate());return(r=>new pv(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Wu,zu,mv(n)),Xe(Wu,zu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=300,yv=Ld("authIdTokenMaxAge")||_v;let Ku=null;const Ev=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>yv)return;const s=e?.token;Ku!==s&&(Ku=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vv(n=Bd()){const t=mc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Wy(n,{popupRedirectResolver:fv,persistence:[AE,dE,yf]}),r=Ld("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Ev(i.toString());lE(e,a,()=>a(e.currentUser)),cE(e,c=>a(c))}}const s=kd("auth");return s&&Ky(e,`http://${s}`),e}function Tv(){return document.getElementsByTagName("head")?.[0]??document}xy({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=ie("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Tv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gv("Browser");var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Je,bf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function y(){}y.prototype=m.prototype,T.F=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(I,v,w){for(var _=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)_[ot-2]=arguments[ot];return m.prototype[v].apply(I,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);const I=Array(16);if(typeof m=="string")for(var v=0;v<16;++v)I[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;v<16;++v)I[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],v=T.g[2];let w=T.g[3],_;_=m+(w^y&(v^w))+I[0]+3614090360&4294967295,m=y+(_<<7&4294967295|_>>>25),_=w+(v^m&(y^v))+I[1]+3905402710&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(y^w&(m^y))+I[2]+606105819&4294967295,v=w+(_<<17&4294967295|_>>>15),_=y+(m^v&(w^m))+I[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(w^y&(v^w))+I[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=w+(v^m&(y^v))+I[5]+1200080426&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(y^w&(m^y))+I[6]+2821735955&4294967295,v=w+(_<<17&4294967295|_>>>15),_=y+(m^v&(w^m))+I[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(w^y&(v^w))+I[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=w+(v^m&(y^v))+I[9]+2336552879&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(y^w&(m^y))+I[10]+4294925233&4294967295,v=w+(_<<17&4294967295|_>>>15),_=y+(m^v&(w^m))+I[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(w^y&(v^w))+I[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=w+(v^m&(y^v))+I[13]+4254626195&4294967295,w=m+(_<<12&4294967295|_>>>20),_=v+(y^w&(m^y))+I[14]+2792965006&4294967295,v=w+(_<<17&4294967295|_>>>15),_=y+(m^v&(w^m))+I[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(v^w&(y^v))+I[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=w+(y^v&(m^y))+I[6]+3225465664&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(w^m))+I[11]+643717713&4294967295,v=w+(_<<14&4294967295|_>>>18),_=y+(w^m&(v^w))+I[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(y^v))+I[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=w+(y^v&(m^y))+I[10]+38016083&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(w^m))+I[15]+3634488961&4294967295,v=w+(_<<14&4294967295|_>>>18),_=y+(w^m&(v^w))+I[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(y^v))+I[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=w+(y^v&(m^y))+I[14]+3275163606&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(w^m))+I[3]+4107603335&4294967295,v=w+(_<<14&4294967295|_>>>18),_=y+(w^m&(v^w))+I[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(v^w&(y^v))+I[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=w+(y^v&(m^y))+I[2]+4243563512&4294967295,w=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(w^m))+I[7]+1735328473&4294967295,v=w+(_<<14&4294967295|_>>>18),_=y+(w^m&(v^w))+I[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(y^v^w)+I[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=w+(m^y^v)+I[8]+2272392833&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^y)+I[11]+1839030562&4294967295,v=w+(_<<16&4294967295|_>>>16),_=y+(v^w^m)+I[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(y^v^w)+I[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=w+(m^y^v)+I[4]+1272893353&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^y)+I[7]+4139469664&4294967295,v=w+(_<<16&4294967295|_>>>16),_=y+(v^w^m)+I[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(y^v^w)+I[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=w+(m^y^v)+I[0]+3936430074&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^y)+I[3]+3572445317&4294967295,v=w+(_<<16&4294967295|_>>>16),_=y+(v^w^m)+I[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(y^v^w)+I[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=w+(m^y^v)+I[12]+3873151461&4294967295,w=m+(_<<11&4294967295|_>>>21),_=v+(w^m^y)+I[15]+530742520&4294967295,v=w+(_<<16&4294967295|_>>>16),_=y+(v^w^m)+I[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(v^(y|~w))+I[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=w+(y^(m|~v))+I[7]+1126891415&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~y))+I[14]+2878612391&4294967295,v=w+(_<<15&4294967295|_>>>17),_=y+(w^(v|~m))+I[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=m+(v^(y|~w))+I[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=w+(y^(m|~v))+I[3]+2399980690&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~y))+I[10]+4293915773&4294967295,v=w+(_<<15&4294967295|_>>>17),_=y+(w^(v|~m))+I[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=m+(v^(y|~w))+I[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=w+(y^(m|~v))+I[15]+4264355552&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~y))+I[6]+2734768916&4294967295,v=w+(_<<15&4294967295|_>>>17),_=y+(w^(v|~m))+I[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=m+(v^(y|~w))+I[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=w+(y^(m|~v))+I[11]+3174756917&4294967295,w=m+(_<<10&4294967295|_>>>22),_=v+(m^(w|~y))+I[2]+718787259&4294967295,v=w+(_<<15&4294967295|_>>>17),_=y+(w^(v|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.v=function(T,m){m===void 0&&(m=T.length);const y=m-this.blockSize,I=this.C;let v=this.h,w=0;for(;w<m;){if(v==0)for(;w<=y;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(I[v++]=T.charCodeAt(w++),v==this.blockSize){s(this,I),v=0;break}}else for(;w<m;)if(I[v++]=T[w++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=m},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)T[m++]=this.g[y]>>>I&255;return T};function i(T,m){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;const y=[];let I=!0;for(let v=T.length-1;v>=0;v--){const w=T[v]|0;I&&w==m||(y[v]=w,I=!1)}this.g=y}var c={};function u(T){return-128<=T&&T<128?i(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return P(d(-T));const m=[];let y=1;for(let I=0;T>=y;I++)m[I]=T/y|0,y*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return P(f(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(m,8));let I=g;for(let w=0;w<T.length;w+=8){var v=Math.min(8,T.length-w);const _=parseInt(T.substring(w,w+v),m);v<8?(v=d(Math.pow(m,v)),I=I.j(v).add(d(_))):(I=I.j(y),I=I.add(d(_)))}return I}var g=u(0),E=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(O(this))return-P(this).m();let T=0,m=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);T+=(I>=0?I:4294967296+I)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(O(this))return"-"+P(this).toString(T);const m=d(Math.pow(T,6));var y=this;let I="";for(;;){const v=B(y,m).g;y=M(y,v.j(m));let w=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=v,D(y))return w+I;for(;w.length<6;)w="0"+w;I=w+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=M(this,T),O(T)?-1:D(T)?0:1};function P(T){const m=T.g.length,y=[];for(let I=0;I<m;I++)y[I]=~T.g[I];return new a(y,~T.h).add(E)}n.abs=function(){return O(this)?P(this):this},n.add=function(T){const m=Math.max(this.g.length,T.g.length),y=[];let I=0;for(let v=0;v<=m;v++){let w=I+(this.i(v)&65535)+(T.i(v)&65535),_=(w>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);I=_>>>16,w&=65535,_&=65535,y[v]=_<<16|w}return new a(y,y[y.length-1]&-2147483648?-1:0)};function M(T,m){return T.add(P(m))}n.j=function(T){if(D(this)||D(T))return g;if(O(this))return O(T)?P(this).j(P(T)):P(P(this).j(T));if(O(T))return P(this.j(P(T)));if(this.l(b)<0&&T.l(b)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,y=[];for(var I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<T.g.length;v++){const w=this.i(I)>>>16,_=this.i(I)&65535,ot=T.i(v)>>>16,St=T.i(v)&65535;y[2*I+2*v]+=_*St,x(y,2*I+2*v),y[2*I+2*v+1]+=w*St,x(y,2*I+2*v+1),y[2*I+2*v+1]+=_*ot,x(y,2*I+2*v+1),y[2*I+2*v+2]+=w*ot,x(y,2*I+2*v+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function x(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function $(T,m){this.g=T,this.h=m}function B(T,m){if(D(m))throw Error("division by zero");if(D(T))return new $(g,g);if(O(T))return m=B(P(T),m),new $(P(m.g),P(m.h));if(O(m))return m=B(T,P(m)),new $(P(m.g),m.h);if(T.g.length>30){if(O(T)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=E,I=m;I.l(T)<=0;)y=K(y),I=K(I);var v=H(y,1),w=H(I,1);for(I=H(I,2),y=H(y,2);!D(I);){var _=w.add(I);_.l(T)<=0&&(v=v.add(y),w=_),I=H(I,1),y=H(y,1)}return m=M(T,v.j(m)),new $(v,m)}for(v=g;T.l(m)>=0;){for(y=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),w=d(y),_=w.j(m);O(_)||_.l(T)>0;)y-=I,w=d(y),_=w.j(m);D(w)&&(w=E),v=v.add(w),T=M(T,_)}return new $(v,T)}n.B=function(T){return B(this,T).h},n.and=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)&T.i(I);return new a(y,this.h&T.h)},n.or=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)|T.i(I);return new a(y,this.h|T.h)},n.xor=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)^T.i(I);return new a(y,this.h^T.h)};function K(T){const m=T.g.length+1,y=[];for(let I=0;I<m;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(y,T.h)}function H(T,m){const y=m>>5;m%=32;const I=T.g.length-y,v=[];for(let w=0;w<I;w++)v[w]=m>0?T.i(w+y)>>>m|T.i(w+y+1)<<32-m:T.i(w+y);return new a(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,bf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Je=a}).apply(typeof Gu<"u"?Gu:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sf,ps,Cf,Pi,ja,Rf,Pf,Nf;(function(){var n,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(o,l){if(l)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break t;h=h[A]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function f(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,A,S){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[A].apply(p,k)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function D(o,l){for(let p=1;p<arguments.length;p++){const A=arguments[p];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const S=A.length||0;o.length=h+S;for(let k=0;k<S;k++)o[h+k]=A[k]}else o.push(A)}}class O{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function P(o){a.setTimeout(()=>{throw o},0)}function M(){var o=T;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class x{constructor(){this.h=this.g=null}add(l,h){const p=$.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $=new O(()=>new B,o=>o.reset());class B{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let K,H=!1,T=new x,m=()=>{const o=Promise.resolve(void 0);K=()=>{o.then(y)}};function y(){for(var o;o=M();){try{o.h.call(o.g)}catch(h){P(h)}var l=$;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}H=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function ot(o,l){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(ot,v),ot.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ot.Z.h.call(this)},ot.prototype.h=function(){ot.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var St="closure_listenable_"+(Math.random()*1e6|0),Ct=0;function Vt(o,l,h,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=A,this.key=++Ct,this.da=this.fa=!1}function me(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Bt(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function Hn(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Wn(o){const l={};for(const h in o)l[h]=o[h];return l}const ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _n(o,l){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let S=0;S<ke.length;S++)h=ke[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Qt(o){this.src=o,this.g={},this.h=0}Qt.prototype.add=function(o,l,h,p,A){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=ge(o,l,p,A);return k>-1?(l=o[k],h||(l.fa=!1)):(l=new Vt(l,this.src,S,!!p,A),l.fa=h,o.push(l)),l};function jt(o,l){const h=l.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,l,void 0),S;(S=A>=0)&&Array.prototype.splice.call(p,A,1),S&&(me(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ge(o,l,h,p){for(let A=0;A<o.length;++A){const S=o[A];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return A}return-1}var Ve="closure_lm_"+(Math.random()*1e6|0),Yt={};function zn(o,l,h,p,A){if(Array.isArray(l)){for(let S=0;S<l.length;S++)zn(o,l[S],h,p,A);return null}return h=Zs(h),o&&o[St]?o.J(l,h,c(p)?!!p.capture:!1,A):Bo(o,l,h,!1,p,A)}function Bo(o,l,h,p,A,S){if(!l)throw Error("Invalid event type");const k=c(A)?!!A.capture:!!A;let G=Gn(o);if(G||(o[Ve]=G=new Qt(o)),h=G.add(l,h,p,k,S),h.proxy)return h;if(p=Hr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)w||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(Js(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Hr(){function o(h){return l.call(o.src,o.listener,h)}const l=jo;return o}function Xs(o,l,h,p,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Xs(o,l[S],h,p,A);else p=c(p)?!!p.capture:!!p,h=Zs(h),o&&o[St]?(o=o.i,S=String(l).toString(),S in o.g&&(l=o.g[S],h=ge(l,h,p,A),h>-1&&(me(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[S],o.h--)))):o&&(o=Gn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ge(l,h,p,A)),(h=o>-1?l[o]:null)&&Kn(h))}function Kn(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[St])jt(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Js(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Gn(l))?(jt(h,o),h.h==0&&(h.src=null,l[Ve]=null)):me(o)}}}function Js(o){return o in Yt?Yt[o]:Yt[o]="on"+o}function jo(o,l){if(o.da)o=!0;else{l=new ot(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&Kn(o),o=h.call(p,l)}return o}function Gn(o){return o=o[Ve],o instanceof Qt?o:null}var Qn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zs(o){return typeof o=="function"?o:(o[Qn]||(o[Qn]=function(l){return o.handleEvent(l)}),o[Qn])}function gt(){I.call(this),this.i=new Qt(this),this.M=this,this.G=null}g(gt,I),gt.prototype[St]=!0,gt.prototype.removeEventListener=function(o,l,h,p){Xs(this,o,l,h,p)};function st(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new v(l,o);else if(l instanceof v)l.target=l.target||o;else{var A=l;l=new v(p,o),_n(l,A)}A=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=l.g=h[k],A=_e(S,p,!0,l)&&A;if(S=l.g=o,A=_e(S,p,!0,l)&&A,A=_e(S,p,!1,l)&&A,h)for(k=0;k<h.length;k++)S=l.g=h[k],A=_e(S,p,!1,l)&&A}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)me(h[p]);delete o.g[l],o.h--}}this.G=null},gt.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},gt.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function _e(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let S=0;S<l.length;++S){const k=l[S];if(k&&!k.da&&k.capture==h){const G=k.listener,pt=k.ha||k.src;k.fa&&jt(o.i,k),A=G.call(pt,p)!==!1&&A}}return A&&!p.defaultPrevented}function ti(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Wr(o){o.g=ti(()=>{o.g=null,o.i&&(o.i=!1,Wr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class zr extends I{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Wr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(o){I.call(this),this.h=o,this.g={}}g(Le,I);var Kr=[];function Gr(o){Bt(o.g,function(l,h){this.g.hasOwnProperty(h)&&Kn(l)},o),o.g={}}Le.prototype.N=function(){Le.Z.N.call(this),Gr(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yn=a.JSON.stringify,rg=a.JSON.parse,sg=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Cl(){}function Rl(){}var Qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qo(){v.call(this,"d")}g(qo,v);function Ho(){v.call(this,"c")}g(Ho,v);var yn={},Pl=null;function ei(){return Pl=Pl||new gt}yn.Ia="serverreachability";function Nl(o){v.call(this,yn.Ia,o)}g(Nl,v);function Yr(o){const l=ei();st(l,new Nl(l))}yn.STAT_EVENT="statevent";function Dl(o,l){v.call(this,yn.STAT_EVENT,o),this.stat=l}g(Dl,v);function Rt(o){const l=ei();st(l,new Dl(l,o))}yn.Ja="timingevent";function Ol(o,l){v.call(this,yn.Ja,o),this.size=l}g(Ol,v);function Xr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Jr(){this.g=!0}Jr.prototype.ua=function(){this.g=!1};function ig(o,l,h,p,A,S){o.info(function(){if(o.g)if(S){var k="",G=S.split("&");for(let tt=0;tt<G.length;tt++){var pt=G[tt].split("=");if(pt.length>1){const _t=pt[0];pt=pt[1];const re=_t.split("_");k=re.length>=2&&re[1]=="type"?k+(_t+"="+pt+"&"):k+(_t+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+h+`
`+k})}function og(o,l,h,p,A,S,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+h+`
`+S+" "+k})}function Xn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+cg(o,h)+(p?" "+p:"")})}function ag(o,l){o.info(function(){return"TIMEOUT: "+l})}Jr.prototype.info=function(){};function cg(o,l){if(!o.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return Yn(S)}catch{return l}}var ni={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},kl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vl;function Wo(){}g(Wo,Cl),Wo.prototype.g=function(){return new XMLHttpRequest},Vl=new Wo;function Zr(o){return encodeURIComponent(String(o))}function lg(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Me(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new Le(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ll}function Ll(){this.i=null,this.g="",this.h=!1}var Ml={},zo={};function Ko(o,l,h){o.M=1,o.A=si(ne(l)),o.u=h,o.R=!0,xl(o,null)}function xl(o,l){o.F=Date.now(),ri(o),o.B=ne(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Yl(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Ll,o.g=pu(o.j,h?l:null,!o.u),o.P>0&&(o.O=new zr(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Kr[0]=A.toString()),A=Kr);for(let S=0;S<A.length;S++){const k=zn(h,A[S],p||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.J?Wn(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Yr(),ig(o.i,o.v,o.B,o.l,o.S,o.u)}Me.prototype.ba=function(o){o=o.target;const l=this.O;l&&Ue(o)==3?l.j():this.Y(o)},Me.prototype.Y=function(o){try{if(o==this.g)t:{const G=Ue(this.g),pt=this.g.ya(),tt=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||ru(this.g)))){this.K||G!=4||pt==7||(pt==8||tt<=0?Yr(3):Yr(2)),Go(this);var l=this.g.ca();this.X=l;var h=ug(this);if(this.o=l==200,og(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){e:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var S=p;break e}}S=null}if(o=S)Xn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qo(this,o);else{this.o=!1,this.m=3,Rt(12),En(this),ts(this);break t}}if(this.R){o=!0;let _t;for(;!this.K&&this.C<h.length;)if(_t=hg(this,h),_t==zo){G==4&&(this.m=4,Rt(14),o=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==Ml){this.m=4,Rt(15),Xn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Xn(this.i,this.l,_t,null),Qo(this,_t);if(Fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||h.length!=0||this.h.h||(this.m=1,Rt(16),o=!1),this.o=this.o&&o,!o)Xn(this.i,this.l,h,"[Invalid Chunked Response]"),En(this),ts(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ra(k),k.P=!0,Rt(11))}}else Xn(this.i,this.l,h,null),Qo(this,h);G==4&&En(this),this.o&&!this.K&&(G==4?uu(this.j,this):(this.o=!1,ri(this)))}else bg(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),En(this),ts(this)}}}catch{}finally{}};function ug(o){if(!Fl(o))return o.g.la();const l=ru(o.g);if(l==="")return"";let h="";const p=l.length,A=Ue(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return En(o),ts(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,h+=o.h.i.decode(l[S],{stream:!(A&&S==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Fl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function hg(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?zo:(h=Number(l.substring(h,p)),isNaN(h)?Ml:(p+=1,p+h>l.length?zo:(l=l.slice(p,p+h),o.C=p+h,l)))}Me.prototype.cancel=function(){this.K=!0,En(this)};function ri(o){o.T=Date.now()+o.H,Ul(o,o.H)}function Ul(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Xr(d(o.aa,o),l)}function Go(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Me.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(ag(this.i,this.B),this.M!=2&&(Yr(),Rt(17)),En(this),this.m=2,ts(this)):Ul(this,this.T-o)};function ts(o){o.j.I==0||o.K||uu(o.j,o)}function En(o){Go(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Gr(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Qo(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Yo(h.h,o))){if(!o.L&&Yo(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)li(h),ai(h);else break t;na(h),Rt(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Xr(d(h.Va,h),6e3));jl(h.h)<=1&&h.ta&&(h.ta=void 0)}else Tn(h,11)}else if((o.L||h.g==o)&&li(h),!_(l))for(A=h.Ba.g.parse(l),l=0;l<A.length;l++){let tt=A[l];const _t=tt[0];if(!(_t<=h.K))if(h.K=_t,tt=tt[1],h.I==2)if(tt[0]=="c"){h.M=tt[1],h.ba=tt[2];const re=tt[3];re!=null&&(h.ka=re,h.j.info("VER="+h.ka));const In=tt[4];In!=null&&(h.za=In,h.j.info("SVER="+h.za));const $e=tt[5];$e!=null&&typeof $e=="number"&&$e>0&&(p=1.5*$e,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Be=o.g;if(Be){const hi=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var S=p.h;S.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Xo(S,S.h),S.h=null))}if(p.G){const sa=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;sa&&(p.wa=sa,nt(p.J,p.G,sa))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var k=o;if(p.na=fu(p,p.L?p.ba:null,p.W),k.L){ql(p.h,k);var G=k,pt=p.O;pt&&(G.H=pt),G.D&&(Go(G),ri(G)),p.g=k}else cu(p);h.i.length>0&&ci(h)}else tt[0]!="stop"&&tt[0]!="close"||Tn(h,7);else h.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Tn(h,7):ea(h):tt[0]!="noop"&&h.l&&h.l.qa(tt),h.A=0)}}Yr(4)}catch{}}var dg=class{constructor(o,l){this.g=o,this.map=l}};function $l(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function jl(o){return o.h?1:o.g?o.g.size:0}function Yo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Xo(o,l){o.g?o.g.add(l):o.h=l}function ql(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}$l.prototype.cancel=function(){if(this.i=Hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Hl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return b(o.i)}var Wl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fg(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let A,S=null;p>=0?(A=o[h].substring(0,p),S=o[h].substring(p+1)):A=o[h],l(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function xe(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof xe?(this.l=o.l,es(this,o.j),this.o=o.o,this.g=o.g,ns(this,o.u),this.h=o.h,Jo(this,Xl(o.i)),this.m=o.m):o&&(l=String(o).match(Wl))?(this.l=!1,es(this,l[1]||"",!0),this.o=rs(l[2]||""),this.g=rs(l[3]||"",!0),ns(this,l[4]),this.h=rs(l[5]||"",!0),Jo(this,l[6]||"",!0),this.m=rs(l[7]||"")):(this.l=!1,this.i=new is(null,this.l))}xe.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(ss(l,zl,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ss(l,zl,!0),"@"),o.push(Zr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ss(h,h.charAt(0)=="/"?gg:mg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ss(h,yg)),o.join("")},xe.prototype.resolve=function(o){const l=ne(this);let h=!!o.j;h?es(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)ns(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=l.h.lastIndexOf("/");A!=-1&&(p=l.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let k=0;k<A.length;){const G=A[k++];G=="."?p&&k==A.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&k==A.length&&S.push("")):(S.push(G),p=!0)}p=S.join("/")}else p=A}return h?l.h=p:h=o.i.toString()!=="",h?Jo(l,Xl(o.i)):h=!!o.m,h&&(l.m=o.m),l};function ne(o){return new xe(o)}function es(o,l,h){o.j=h?rs(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ns(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Jo(o,l,h){l instanceof is?(o.i=l,Eg(o.i,o.l)):(h||(l=ss(l,_g)),o.i=new is(l,o.l))}function nt(o,l,h){o.i.set(l,h)}function si(o){return nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function rs(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ss(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,pg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function pg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zl=/[#\/\?@]/g,mg=/[#\?:]/g,gg=/[#\?]/g,_g=/[#\?@]/g,yg=/#/g;function is(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function vn(o){o.g||(o.g=new Map,o.h=0,o.i&&fg(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=is.prototype,n.add=function(o,l){vn(this),this.i=null,o=Jn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Kl(o,l){vn(o),l=Jn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Gl(o,l){return vn(o),l=Jn(o,l),o.g.has(l)}n.forEach=function(o,l){vn(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(l,A,p,this)},this)},this)};function Ql(o,l){vn(o);let h=[];if(typeof l=="string")Gl(o,l)&&(h=h.concat(o.g.get(Jn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return vn(this),this.i=null,o=Jn(this,o),Gl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Ql(this,o),o.length>0?String(o[0]):l):l};function Yl(o,l,h){Kl(o,l),h.length>0&&(o.i=null,o.g.set(Jn(o,l),b(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const A=Zr(h);h=Ql(this,h);for(let S=0;S<h.length;S++){let k=A;h[S]!==""&&(k+="="+Zr(h[S])),o.push(k)}}return this.i=o.join("&")};function Xl(o){const l=new is;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Jn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Eg(o,l){l&&!o.j&&(vn(o),o.i=null,o.g.forEach(function(h,p){const A=p.toLowerCase();p!=A&&(Kl(this,p),Yl(this,A,h))},o)),o.j=l}function vg(o,l){const h=new Jr;if(a.Image){const p=new Image;p.onload=f(Fe,h,"TestLoadImage: loaded",!0,l,p),p.onerror=f(Fe,h,"TestLoadImage: error",!1,l,p),p.onabort=f(Fe,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=f(Fe,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Tg(o,l){const h=new Jr,p=new AbortController,A=setTimeout(()=>{p.abort(),Fe(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(A),S.ok?Fe(h,"TestPingServer: ok",!0,l):Fe(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Fe(h,"TestPingServer: error",!1,l)})}function Fe(o,l,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function Ig(){this.g=new sg}function Zo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Zo,Cl),Zo.prototype.g=function(){return new ii(this.i,this.h)};function ii(o,l){gt.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ii,gt),n=ii.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,as(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?os(this):as(this),this.readyState==3&&Jl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,os(this))},n.Na=function(o){this.g&&(this.response=o,os(this))},n.ga=function(){this.g&&os(this)};function os(o){o.readyState=4,o.l=null,o.j=null,o.B=null,as(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function as(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Zl(o){let l="";return Bt(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function ta(o,l,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Zl(h),typeof o=="string"?h!=null&&Zr(h):nt(o,l,h))}function at(o){gt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(at,gt);var wg=/^https?$/i,Ag=["POST","PUT"];n=at.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vl.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){tu(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ag,l,void 0)>=0)||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){tu(this,S)}};function tu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,eu(o),oi(o)}function eu(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,st(this,"complete"),st(this,"abort"),oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),at.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?nu(this):this.Xa())},n.Xa=function(){nu(this)};function nu(o){if(o.h&&typeof i<"u"){if(o.v&&Ue(o)==4)setTimeout(o.Ca.bind(o),0);else if(st(o,"readystatechange"),Ue(o)==4){o.h=!1;try{const S=o.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var p;if(p=S===0){let k=String(o.D).match(Wl)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!wg.test(k?k.toLowerCase():"")}h=p}if(h)st(o,"complete"),st(o,"success");else{o.o=6;try{var A=Ue(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",eu(o)}}finally{oi(o)}}}}function oi(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||st(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ue(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ue(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),rg(l)}};function ru(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bg(o){const l={};o=(o.g&&Ue(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var h=lg(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[A]||[];l[A]=S,S.push(h)}Hn(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function su(o){this.za=0,this.i=[],this.j=new Jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=cs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=cs("baseRetryDelayMs",5e3,o),this.Za=cs("retryDelaySeedMs",1e4,o),this.Ta=cs("forwardChannelMaxRetries",2,o),this.va=cs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new $l(o&&o.concurrentRequestLimit),this.Ba=new Ig,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=su.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Rt(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=fu(this,null,this.W),ci(this)};function ea(o){if(iu(o),o.I==3){var l=o.V++,h=ne(o.J);if(nt(h,"SID",o.M),nt(h,"RID",l),nt(h,"TYPE","terminate"),ls(o,h),l=new Me(o,o.j,l),l.M=2,l.A=si(ne(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=pu(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ri(l)}du(o)}function ai(o){o.g&&(ra(o),o.g.cancel(),o.g=null)}function iu(o){ai(o),o.v&&(a.clearTimeout(o.v),o.v=null),li(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ci(o){if(!Bl(o.h)&&!o.m){o.m=!0;var l=o.Ea;K||m(),H||(K(),H=!0),T.add(l,o),o.D=0}}function Sg(o,l){return jl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Xr(d(o.Ea,o,l),hu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Me(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Wn(S),_n(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=au(this,A,l),h=ne(this.J),nt(h,"RID",o),nt(h,"CVER",22),this.G&&nt(h,"X-HTTP-Session-Id",this.G),ls(this,h),S&&(this.R?l="headers="+Zr(Zl(S))+"&"+l:this.u&&ta(h,this.u,S)),Xo(this.h,A),this.Ra&&nt(h,"TYPE","init"),this.S?(nt(h,"$req",l),nt(h,"SID","null"),A.U=!0,Ko(A,h,null)):Ko(A,h,l),this.I=2}}else this.I==3&&(o?ou(this,o):this.i.length==0||Bl(this.h)||ou(this))};function ou(o,l){var h;l?h=l.l:h=o.V++;const p=ne(o.J);nt(p,"SID",o.M),nt(p,"RID",h),nt(p,"AID",o.K),ls(o,p),o.u&&o.o&&ta(p,o.u,o.o),h=new Me(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=au(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Xo(o.h,h),Ko(h,p,l)}function ls(o,l){o.H&&Bt(o.H,function(h,p){nt(l,p,h)}),o.l&&Bt({},function(h,p){nt(l,p,h)})}function au(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;t:{var A=o.i;let G=-1;for(;;){const pt=["count="+h];G==-1?h>0?(G=A[0].g,pt.push("ofs="+G)):G=0:pt.push("ofs="+G);let tt=!0;for(let _t=0;_t<h;_t++){var S=A[_t].g;const re=A[_t].map;if(S-=G,S<0)G=Math.max(0,A[_t].g-100),tt=!1;else try{S="req"+S+"_"||"";try{var k=re instanceof Map?re:Object.entries(re);for(const[In,$e]of k){let Be=$e;c($e)&&(Be=Yn($e)),pt.push(S+In+"="+encodeURIComponent(Be))}}catch(In){throw pt.push(S+"type="+encodeURIComponent("_badmap")),In}}catch{p&&p(re)}}if(tt){k=pt.join("&");break t}}k=void 0}return o=o.i.splice(0,h),l.G=o,k}function cu(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;K||m(),H||(K(),H=!0),T.add(l,o),o.A=0}}function na(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Xr(d(o.Da,o),hu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,lu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Xr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),ai(this),lu(this))};function ra(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function lu(o){o.g=new Me(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=ne(o.na);nt(l,"RID","rpc"),nt(l,"SID",o.M),nt(l,"AID",o.K),nt(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&nt(l,"TO",o.ia),nt(l,"TYPE","xmlhttp"),ls(o,l),o.u&&o.o&&ta(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=si(ne(l)),h.u=null,h.R=!0,xl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ai(this),na(this),Rt(19))};function li(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function uu(o,l){var h=null;if(o.g==l){li(o),ra(o),o.g=null;var p=2}else if(Yo(o.h,l))h=l.G,ql(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;p=ei(),st(p,new Ol(p,h)),ci(o)}else cu(o);else if(A=l.m,A==3||A==0&&l.X>0||!(p==1&&Sg(o,l)||p==2&&na(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Tn(o,5);break;case 4:Tn(o,10);break;case 3:Tn(o,6);break;default:Tn(o,2)}}}function hu(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function Tn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const A=!p;p=new xe(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||es(p,"https"),si(p),A?vg(p.toString(),h):Tg(p.toString(),h)}else Rt(2);o.I=0,o.l&&o.l.pa(l),du(o),iu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function du(o){if(o.I=0,o.ja=[],o.l){const l=Hl(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ja,l),D(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function fu(o,l,h){var p=h instanceof xe?ne(h):new xe(h);if(p.g!="")l&&(p.g=l+"."+p.g),ns(p,p.u);else{var A=a.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const S=new xe(null);p&&es(S,p),l&&(S.g=l),A&&ns(S,A),h&&(S.h=h),p=S}return h=o.G,l=o.wa,h&&l&&nt(p,h,l),nt(p,"VER",o.ka),ls(o,p),p}function pu(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new at(new Zo({ab:h})):new at(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function mu(){}n=mu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ui(){}ui.prototype.g=function(o,l){return new Lt(o,l)};function Lt(o,l){gt.call(this),this.g=new su(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!_(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Zn(this)}g(Lt,gt),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){ea(this.g)},Lt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Yn(o),o=h);l.i.push(new dg(l.Ya++,o)),l.I==3&&ci(l)},Lt.prototype.N=function(){this.g.l=null,delete this.j,ea(this.g),delete this.g,Lt.Z.N.call(this)};function gu(o){qo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(gu,qo);function _u(){Ho.call(this),this.status=1}g(_u,Ho);function Zn(o){this.g=o}g(Zn,mu),Zn.prototype.ra=function(){st(this.g,"a")},Zn.prototype.qa=function(o){st(this.g,new gu(o))},Zn.prototype.pa=function(o){st(this.g,new _u)},Zn.prototype.oa=function(){st(this.g,"b")},ui.prototype.createWebChannel=ui.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,Nf=function(){return new ui},Pf=function(){return ei()},Rf=yn,ja={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,Pi=ni,kl.COMPLETE="complete",Cf=kl,Rl.EventType=Qr,Qr.OPEN="a",Qr.CLOSE="b",Qr.ERROR="c",Qr.MESSAGE="d",gt.prototype.listen=gt.prototype.J,ps=Rl,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,Sf=at}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});const Qu="@firebase/firestore",Yu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new fc("@firebase/firestore");function nr(){return kn.logLevel}function L(n,...t){if(kn.logLevel<=Q.DEBUG){const e=t.map(Ac);kn.debug(`Firestore (${Lr}): ${n}`,...e)}}function Ce(n,...t){if(kn.logLevel<=Q.ERROR){const e=t.map(Ac);kn.error(`Firestore (${Lr}): ${n}`,...e)}}function _r(n,...t){if(kn.logLevel<=Q.WARN){const e=t.map(Ac);kn.warn(`Firestore (${Lr}): ${n}`,...e)}}function Ac(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Df(n,r,e)}function Df(n,t,e){let r=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ce(r),new Error(r)}function Z(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Df(t,s,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Iv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wt.UNAUTHENTICATED)))}shutdown(){}}class wv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Av{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Z(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Te,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;t.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Te)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Of(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string",2055,{h:t}),new wt(t)}}class bv{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sv{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new bv(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cv{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Xu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Rv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function Y(n,t){return n<t?-1:n>t?1:0}function qa(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return da(s)===da(i)?Y(s,i):da(s)?1:-1}return Y(n.length,t.length)}const Pv=55296,Nv=57343;function da(n){const t=n.charCodeAt(0);return t>=Pv&&t<=Nv}function yr(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="__name__";class se{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&q(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return se.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof se?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=se.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return Y(t.length,e.length)}static compareSegments(t,e){const r=se.isNumericId(t),s=se.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?se.extractNumericId(t).compare(se.extractNumericId(e)):qa(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Je.fromString(t.substring(4,t.length-2))}}class et extends se{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new et(e)}static emptyPath(){return new et([])}}const Dv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends se{construct(t,e,r){return new vt(t,e,r)}static isValidIdentifier(t){return Dv.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ju}static keyField(){return new vt([Ju])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vt(e)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(et.fromString(t))}static fromName(t){return new F(et.fromString(t).popFirst(5))}static empty(){return new F(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new et(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n,t,e){if(!e)throw new V(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ov(n,t,e,r){if(t===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Zu(n){if(!F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function th(n){if(F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function xt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fo(n);throw new V(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,t){const e={typeString:n};return t&&(e.value=t),e}function $s(n,t){if(!Vf(n))throw new V(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new V(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=-62135596800,nh=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*nh);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<eh)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nh}_compareTo(t){return this.seconds===t.seconds?Y(this.nanoseconds,t.nanoseconds):Y(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($s(t,rt._jsonSchema))return new rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-eh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:dt("string",rt._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new rt(0,0))}static max(){return new W(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=-1;function kv(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new tn(s,F.empty(),t)}function Vv(n){return new tn(n.readTime,n.key,Rs)}class tn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new tn(W.min(),F.empty(),Rs)}static max(){return new tn(W.max(),F.empty(),Rs)}}function Lv(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:Y(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Mv)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let s=0,i=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&e()}),(u=>r(u)))})),a=!0,i===s&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((s=>s?R.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,i)=>{r.push(e.call(this,s,i))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;e(t[d]).next((f=>{a[d]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new R(((r,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):r()};i()}))}}function Fv(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function xr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}po.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=-1;function mo(n){return n==null}function zi(n){return n===0&&1/n==-1/0}function Uv(n){return typeof n=="number"&&Number.isInteger(n)&&!zi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="";function $v(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=rh(t)),t=Bv(n.get(e),t);return rh(t)}function Bv(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case Lf:e+="";break;default:e+=i}}return e}function rh(n){return n+Lf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function dn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Mf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pi(this.root,t,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pi(this.root,t,this.comparator,!0)}}class pi{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Et(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw q(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ih(this.data.getIterator())}getIteratorFrom(t){return new ih(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class ih{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(vt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new mt(vt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return yr(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xf("Invalid base64 string: "+i):i}})(t);return new Tt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Y(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const jv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(Z(!!n,39018),typeof n=="string"){let t=0;const e=jv.exec(n);if(Z(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nn(n){return typeof n=="string"?Tt.fromBase64String(n):Tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="server_timestamp",Uf="__type__",$f="__previous_value__",Bf="__local_write_time__";function Cc(n){return(n?.mapValue?.fields||{})[Uf]?.stringValue===Ff}function go(n){const t=n.mapValue.fields[$f];return Cc(t)?go(t):t}function Ps(n){const t=en(n.mapValue.fields[Bf].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(t,e,r,s,i,a,c,u,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Ki="(default)";class Ns{constructor(t,e){this.projectId=t,this.database=e||Ki}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===Ki}isEqual(t){return t instanceof Ns&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="__type__",Hv="__max__",mi={mapValue:{}},qf="__vector__",Gi="value";function rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cc(n)?4:zv(n)?9007199254740991:Wv(n)?10:11:q(28295,{value:n})}function fe(n,t){if(n===t)return!0;const e=rn(n);if(e!==rn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ps(n).isEqual(Ps(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=en(s.timestampValue),c=en(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,i){return nn(s.bytesValue).isEqual(nn(i.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)})(n,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=lt(s.doubleValue),c=lt(i.doubleValue);return a===c?zi(a)===zi(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return yr(n.arrayValue.values||[],t.arrayValue.values||[],fe);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(sh(a)!==sh(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!fe(a[u],c[u])))return!1;return!0})(n,t);default:return q(52216,{left:n})}}function Ds(n,t){return(n.values||[]).find((e=>fe(e,t)))!==void 0}function Er(n,t){if(n===t)return 0;const e=rn(n),r=rn(t);if(e!==r)return Y(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,t.booleanValue);case 2:return(function(i,a){const c=lt(i.integerValue||i.doubleValue),u=lt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,t);case 3:return oh(n.timestampValue,t.timestampValue);case 4:return oh(Ps(n),Ps(t));case 5:return qa(n.stringValue,t.stringValue);case 6:return(function(i,a){const c=nn(i),u=nn(a);return c.compareTo(u)})(n.bytesValue,t.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=Y(c[d],u[d]);if(f!==0)return f}return Y(c.length,u.length)})(n.referenceValue,t.referenceValue);case 8:return(function(i,a){const c=Y(lt(i.latitude),lt(a.latitude));return c!==0?c:Y(lt(i.longitude),lt(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return ah(n.arrayValue,t.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},d=c[Gi]?.arrayValue,f=u[Gi]?.arrayValue,g=Y(d?.values?.length||0,f?.values?.length||0);return g!==0?g:ah(d,f)})(n.mapValue,t.mapValue);case 11:return(function(i,a){if(i===mi.mapValue&&a===mi.mapValue)return 0;if(i===mi.mapValue)return 1;if(a===mi.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const E=qa(u[g],f[g]);if(E!==0)return E;const b=Er(c[u[g]],d[f[g]]);if(b!==0)return b}return Y(u.length,f.length)})(n.mapValue,t.mapValue);default:throw q(23264,{he:e})}}function oh(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Y(n,t);const e=en(n),r=en(t),s=Y(e.seconds,r.seconds);return s!==0?s:Y(e.nanos,r.nanos)}function ah(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=Er(e[s],r[s]);if(i)return i}return Y(e.length,r.length)}function vr(n){return Ha(n)}function Ha(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=en(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return nn(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return F.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Ha(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ha(e.fields[a])}`;return s+"}"})(n.mapValue):q(61005,{value:n})}function Ni(n){switch(rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=go(n);return t?16+Ni(t):16;case 5:return 2*n.stringValue.length;case 6:return nn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ni(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return dn(r.fields,((i,a)=>{s+=i.length+Ni(a)})),s})(n.mapValue);default:throw q(13486,{value:n})}}function ch(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Wa(n){return!!n&&"integerValue"in n}function Rc(n){return!!n&&"arrayValue"in n}function lh(n){return!!n&&"nullValue"in n}function uh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Di(n){return!!n&&"mapValue"in n}function Wv(n){return(n?.mapValue?.fields||{})[jf]?.stringValue===qf}function vs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return dn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=vs(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=vs(n.arrayValue.values[e]);return t}return{...n}}function zv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Di(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=vs(e)}setAll(t){let e=vt.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=vs(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Di(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Di(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){dn(e,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Ot(vs(this.value))}}function Hf(n){const t=[];return dn(n.fields,((e,r)=>{const s=new vt([e]);if(Di(r)){const i=Hf(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,i,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new At(t,0,W.min(),W.min(),W.min(),Ot.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,W.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,W.min(),W.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,W.min(),W.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,e){this.position=t,this.inclusive=e}}function hh(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=Er(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dh(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!fe(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Kv(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{}class ht extends Wf{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Qv(t,e,r):e==="array-contains"?new Jv(t,r):e==="in"?new Zv(t,r):e==="not-in"?new tT(t,r):e==="array-contains-any"?new eT(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Yv(t,r):new Xv(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Er(e,this.value)):e!==null&&rn(this.value)===rn(e)&&this.matchesComparison(Er(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends Wf{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new te(t,e)}matches(t){return zf(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zf(n){return n.op==="and"}function Kf(n){return Gv(n)&&zf(n)}function Gv(n){for(const t of n.filters)if(t instanceof te)return!1;return!0}function za(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+vr(n.value);if(Kf(n))return n.filters.map((t=>za(t))).join(",");{const t=n.filters.map((e=>za(e))).join(",");return`${n.op}(${t})`}}function Gf(n,t){return n instanceof ht?(function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&fe(r.value,s.value)})(n,t):n instanceof te?(function(r,s){return s instanceof te&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Gf(a,s.filters[c])),!0):!1})(n,t):void q(19439)}function Qf(n){return n instanceof ht?(function(e){return`${e.field.canonicalString()} ${e.op} ${vr(e.value)}`})(n):n instanceof te?(function(e){return e.op.toString()+" {"+e.getFilters().map(Qf).join(" ,")+"}"})(n):"Filter"}class Qv extends ht{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Yv extends ht{constructor(t,e){super(t,"in",e),this.keys=Yf("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Xv extends ht{constructor(t,e){super(t,"not-in",e),this.keys=Yf("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Yf(n,t){return(t.arrayValue?.values||[]).map((e=>F.fromName(e.referenceValue)))}class Jv extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Rc(e)&&Ds(e.arrayValue,this.value)}}class Zv extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ds(this.value.arrayValue,e)}}class tT extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ds(this.value.arrayValue,e)}}class eT extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Rc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Ds(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(t,e=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function fh(n,t=null,e=[],r=[],s=null,i=null,a=null){return new nT(n,t,e,r,s,i,a)}function Pc(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>za(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),mo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>vr(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>vr(r))).join(",")),t.Te=e}return t.Te}function Nc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Kv(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Gf(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!dh(n.startAt,t.startAt)&&dh(n.endAt,t.endAt)}function Ka(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,e=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function rT(n,t,e,r,s,i,a,c){return new Bs(n,t,e,r,s,i,a,c)}function _o(n){return new Bs(n)}function ph(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xf(n){return n.collectionGroup!==null}function Ts(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new mt(vt.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Yi(i,r))})),e.has(vt.keyField().canonicalString())||t.Ie.push(new Yi(vt.keyField(),r))}return t.Ie}function ae(n){const t=z(n);return t.Ee||(t.Ee=sT(t,Ts(n))),t.Ee}function sT(n,t){if(n.limitType==="F")return fh(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)}));const e=n.endAt?new Qi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qi(n.startAt.position,n.startAt.inclusive):null;return fh(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ga(n,t){const e=n.filters.concat([t]);return new Bs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Qa(n,t,e){return new Bs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function yo(n,t){return Nc(ae(n),ae(t))&&n.limitType===t.limitType}function Jf(n){return`${Pc(ae(n))}|lt:${n.limitType}`}function rr(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Qf(s))).join(", ")}]`),mo(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>vr(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>vr(s))).join(",")),`Target(${r})`})(ae(n))}; limitType=${n.limitType})`}function Eo(n,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,t)&&(function(r,s){for(const i of Ts(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=hh(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,Ts(r),s)||r.endAt&&!(function(a,c,u){const d=hh(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,Ts(r),s))})(n,t)}function iT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zf(n){return(t,e)=>{let r=!1;for(const s of Ts(n)){const i=oT(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oT(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Er(u,d):q(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){dn(this.inner,((e,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return Mf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new it(F.comparator);function Re(){return aT}const tp=new it(F.comparator);function ms(...n){let t=tp;for(const e of n)t=t.insert(e.key,e);return t}function ep(n){let t=tp;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function An(){return Is()}function np(){return Is()}function Is(){return new Fn((n=>n.toString()),((n,t)=>n.isEqual(t)))}const cT=new it(F.comparator),lT=new mt(F.comparator);function X(...n){let t=lT;for(const e of n)t=t.add(e);return t}const uT=new mt(Y);function hT(){return uT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(t)?"-0":t}}function rp(n){return{integerValue:""+n}}function dT(n,t){return Uv(t)?rp(t):Dc(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this._=void 0}}function fT(n,t,e){return n instanceof Os?(function(s,i){const a={fields:{[Uf]:{stringValue:Ff},[Bf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cc(i)&&(i=go(i)),i&&(a.fields[$f]=i),{mapValue:a}})(e,t):n instanceof Tr?ip(n,t):n instanceof Ir?op(n,t):(function(s,i){const a=sp(s,i),c=mh(a)+mh(s.Ae);return Wa(a)&&Wa(s.Ae)?rp(c):Dc(s.serializer,c)})(n,t)}function pT(n,t,e){return n instanceof Tr?ip(n,t):n instanceof Ir?op(n,t):e}function sp(n,t){return n instanceof Xi?(function(r){return Wa(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class Os extends vo{}class Tr extends vo{constructor(t){super(),this.elements=t}}function ip(n,t){const e=ap(t);for(const r of n.elements)e.some((s=>fe(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Ir extends vo{constructor(t){super(),this.elements=t}}function op(n,t){let e=ap(t);for(const r of n.elements)e=e.filter((s=>!fe(s,r)));return{arrayValue:{values:e}}}class Xi extends vo{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function mh(n){return lt(n.integerValue||n.doubleValue)}function ap(n){return Rc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e){this.field=t,this.transform=e}}function mT(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Tr&&s instanceof Tr||r instanceof Ir&&s instanceof Ir?yr(r.elements,s.elements,fe):r instanceof Xi&&s instanceof Xi?fe(r.Ae,s.Ae):r instanceof Os&&s instanceof Os})(n.transform,t.transform)}class gT{constructor(t,e){this.version=t,this.transformResults=e}}class Jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jt}static exists(t){return new Jt(void 0,t)}static updateTime(t){return new Jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class To{}function cp(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new up(n.key,Jt.none()):new js(n.key,n.data,Jt.none());{const e=n.data,r=Ot.empty();let s=new mt(vt.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new fn(n.key,r,new Mt(s.toArray()),Jt.none())}}function _T(n,t,e){n instanceof js?(function(s,i,a){const c=s.value.clone(),u=_h(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof fn?(function(s,i,a){if(!Oi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=_h(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(lp(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function ws(n,t,e,r){return n instanceof js?(function(i,a,c,u){if(!Oi(i.precondition,a))return c;const d=i.value.clone(),f=yh(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof fn?(function(i,a,c,u){if(!Oi(i.precondition,a))return c;const d=yh(i.fieldTransforms,u,a),f=a.data;return f.setAll(lp(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,t,e,r):(function(i,a,c){return Oi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function yT(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=sp(r.transform,s||null);i!=null&&(e===null&&(e=Ot.empty()),e.set(r.field,i))}return e||null}function gh(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yr(r,s,((i,a)=>mT(i,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class js extends To{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fn extends To{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lp(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function _h(n,t,e){const r=new Map;Z(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,pT(a,c,e[s]))}return r}function yh(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,fT(i,a,t))}return r}class up extends To{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ET extends To{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&_T(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ws(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ws(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=np();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const u=cp(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),X())}isEqual(t){return this.batchId===t.batchId&&yr(this.mutations,t.mutations,((e,r)=>gh(e,r)))&&yr(this.baseMutations,t.baseMutations,((e,r)=>gh(e,r)))}}class kc{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Z(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return cT})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new kc(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,J;function wT(n){switch(n){case C.OK:return q(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function hp(n){if(n===void 0)return Ce("GRPC error has no .code"),C.UNKNOWN;switch(n){case ut.OK:return C.OK;case ut.CANCELLED:return C.CANCELLED;case ut.UNKNOWN:return C.UNKNOWN;case ut.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ut.INTERNAL:return C.INTERNAL;case ut.UNAVAILABLE:return C.UNAVAILABLE;case ut.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ut.NOT_FOUND:return C.NOT_FOUND;case ut.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ut.ABORTED:return C.ABORTED;case ut.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ut.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:n})}}(J=ut||(ut={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new Je([4294967295,4294967295],0);function Eh(n){const t=AT().encode(n),e=new bf;return e.update(t),new Uint8Array(e.digest())}function vh(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Je([e,r],0),new Je([s,i],0)]}class Vc{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new gs(`Invalid padding: ${e}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new gs(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Je.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Je.fromNumber(r)));return s.compare(bT)===1&&(s=new Je([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Eh(t),[r,s]=vh(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Vc(i,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.ge===0)return;const e=Eh(t),[r,s]=vh(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,qs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Io(W.min(),s,new it(Y),Re(),X())}}class qs{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new qs(r,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class dp{constructor(t,e){this.targetId=t,this.Ce=e}}class fp{constructor(t,e,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Th{constructor(){this.ve=0,this.Fe=Ih(),this.Me=Tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}})),new qs(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Ih()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ST{constructor(t){this.Ge=t,this.ze=new Map,this.je=Re(),this.Je=gi(),this.He=gi(),this.Ye=new it(Y)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:q(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Ka(i))if(r===0){const a=new F(i.path);this.et(e,a,At.newNoDocument(a,W.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),u=c?this.ct(c,t,a):1;if(u!==0){this.it(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=nn(r).toUint8Array()}catch(u){if(u instanceof xf)return _r("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Vc(a,s,i)}catch(u){return _r(u instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Ka(c.target)){const u=new F(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,At.newNoDocument(u,t))}i.Be&&(e.set(a,i.ke()),i.qe())}}));let r=X();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new Io(t,e,this.Ye,this.je,r);return this.je=Re(),this.Je=gi(),this.He=gi(),this.Ye=new it(Y),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Th,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new mt(Y),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new mt(Y),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Th),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function gi(){return new it(F.comparator)}function Ih(){return new it(F.comparator)}const CT={asc:"ASCENDING",desc:"DESCENDING"},RT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PT={and:"AND",or:"OR"};class NT{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ya(n,t){return n.useProto3Json||mo(t)?t:{value:t}}function Ji(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pp(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function DT(n,t){return Ji(n,t.toTimestamp())}function ce(n){return Z(!!n,49232),W.fromTimestamp((function(e){const r=en(e);return new rt(r.seconds,r.nanos)})(n))}function Lc(n,t){return Xa(n,t).canonicalString()}function Xa(n,t){const e=(function(s){return new et(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function mp(n){const t=et.fromString(n);return Z(vp(t),10190,{key:t.toString()}),t}function Ja(n,t){return Lc(n.databaseId,t.path)}function fa(n,t){const e=mp(t);if(e.get(1)!==n.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(_p(e))}function gp(n,t){return Lc(n.databaseId,t)}function OT(n){const t=mp(n);return t.length===4?et.emptyPath():_p(t)}function Za(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _p(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wh(n,t,e){return{name:Ja(n,t),fields:e.value.mapValue.fields}}function kT(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string",58123),Tt.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Tt.fromUint8Array(f||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(d){const f=d.code===void 0?C.UNKNOWN:hp(d.code);return new V(f,d.message||"")})(a);e=new fp(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=fa(n,r.document.name),i=ce(r.document.updateTime),a=r.document.createTime?ce(r.document.createTime):W.min(),c=new Ot({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];e=new ki(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=fa(n,r.document),i=r.readTime?ce(r.readTime):W.min(),a=At.newNoDocument(s,i),c=r.removedTargetIds||[];e=new ki([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=fa(n,r.document),i=r.removedTargetIds||[];e=new ki([],i,s,null)}else{if(!("filter"in t))return q(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new IT(s,i),c=r.targetId;e=new dp(c,a)}}return e}function VT(n,t){let e;if(t instanceof js)e={update:wh(n,t.key,t.value)};else if(t instanceof up)e={delete:Ja(n,t.key)};else if(t instanceof fn)e={update:wh(n,t.key,t.data),updateMask:qT(t.fieldMask)};else{if(!(t instanceof ET))return q(16599,{Vt:t.type});e={verify:Ja(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Os)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Tr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:DT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)})(n,t.precondition)),e}function LT(n,t){return n&&n.length>0?(Z(t!==void 0,14353),n.map((e=>(function(s,i){let a=s.updateTime?ce(s.updateTime):ce(i);return a.isEqual(W.min())&&(a=ce(i)),new gT(a,s.transformResults||[])})(e,t)))):[]}function MT(n,t){return{documents:[gp(n,t.path)]}}function xT(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=gp(n,s);const i=(function(d){if(d.length!==0)return Ep(te.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(E){return{field:sr(E.field),direction:$T(E.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ya(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function FT(n){let t=OT(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Z(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=(function(g){const E=yp(g);return E instanceof te&&Kf(E)?E.getFilters():[E]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((E=>(function(D){return new Yi(ir(D.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(E)))})(e.orderBy));let c=null;e.limit&&(c=(function(g){let E;return E=typeof g=="object"?g.value:g,mo(E)?null:E})(e.limit));let u=null;e.startAt&&(u=(function(g){const E=!!g.before,b=g.values||[];return new Qi(b,E)})(e.startAt));let d=null;return e.endAt&&(d=(function(g){const E=!g.before,b=g.values||[];return new Qi(b,E)})(e.endAt)),rT(t,s,a,i,c,"F",u,d)}function UT(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function yp(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ir(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ir(e.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ir(e.unaryFilter.field);return ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ir(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ht.create(ir(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return te.create(e.compositeFilter.filters.map((r=>yp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(e.compositeFilter.op))})(n):q(30097,{filter:n})}function $T(n){return CT[n]}function BT(n){return RT[n]}function jT(n){return PT[n]}function sr(n){return{fieldPath:n.canonicalString()}}function ir(n){return vt.fromServerFormat(n.fieldPath)}function Ep(n){return n instanceof ht?(function(e){if(e.op==="=="){if(uh(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NAN"}};if(lh(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(uh(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NOT_NAN"}};if(lh(e.value))return{unaryFilter:{field:sr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(e.field),op:BT(e.op),value:e.value}}})(n):n instanceof te?(function(e){const r=e.getFilters().map((s=>Ep(s)));return r.length===1?r[0]:{compositeFilter:{op:jT(e.op),filters:r}}})(n):q(54877,{filter:n})}function qT(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function vp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e,r,s,i=W.min(),a=W.min(),c=Tt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new Ge(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(t){this.yt=t}}function WT(n){const t=FT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qa(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.Cn=new KT}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(tn.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(tn.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class KT{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new mt(et.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new mt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Tp=41943040;class Dt{static withCacheSize(t){return new Dt(t,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(Tp,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new wr(0)}static cr(){return new wr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="LruGarbageCollector",GT=1048576;function Sh([n,t],[e,r]){const s=Y(n,e);return s===0?Y(t,r):s}class QT{constructor(t){this.Ir=t,this.buffer=new mt(Sh),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Sh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class YT{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){L(bh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xr(e)?L(bh,"Ignoring IndexedDB error during garbage collection: ",e):await Mr(e)}await this.Vr(3e5)}))}}class XT{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(po.ce);const r=new QT(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ah)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ah):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(t,r,e)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(t,r)))).next((g=>(d=Date.now(),nr()<=Q.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function JT(n,t){return new XT(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.changes=new Fn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&ws(r.mutation,s,Mt.empty(),rt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,X()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=X()){const s=An();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((i=>{let a=ms();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=An();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,X())))}populateOverlays(t,e,r){const s=[];return r.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let i=Re();const a=Is(),c=(function(){return Is()})();return e.forEach(((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof fn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ws(f.mutation,d,f.mutation.getFieldMask(),rt.now())):a.set(d.key,Mt.empty())})),this.recalculateAndSaveOverlays(t,i).next((u=>(u.forEach(((d,f)=>a.set(d,f))),e.forEach(((d,f)=>c.set(d,new tI(f,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(t,e){const r=Is();let s=new it(((a,c)=>a-c)),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||Mt.empty();f=c.applyToLocalView(d,f),r.set(u,f);const g=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,g=np();f.forEach((E=>{if(!i.has(E)){const b=cp(e.get(E),r.get(E));b!==null&&g.set(E,b),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):R.resolve(An());let c=Rs,u=i;return a.next((d=>R.forEach(d,((f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(t,f).next((E=>{u=u.insert(f,E)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,u,d,X()))).next((f=>({batchId:c,changes:ep(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next((r=>{let s=ms();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=ms();return this.indexManager.getCollectionParents(t,i).next((c=>R.forEach(c,(u=>{const d=(function(g,E){return new Bs(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((f=>{f.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,At.newInvalidDocument(f)))}));let c=ms();return a.forEach(((u,d)=>{const f=i.get(u);f!==void 0&&ws(f.mutation,d,Mt.empty(),rt.now()),Eo(e,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:ce(s.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:WT(s.bundledQuery),readTime:ce(s.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.overlays=new it(F.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=An();return R.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,i)=>{this.St(t,e,i)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=An(),i=e.length+1,a=new F(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new it(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=An(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=An(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=s)););return R.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new TT(e,r));let i=this.qr.get(e);i===void 0&&(i=X(),this.qr.set(e,i)),this.qr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.Qr=new mt(yt.$r),this.Ur=new mt(yt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new yt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new yt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new F(new et([])),r=new yt(e,t),s=new yt(e,t+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new et([])),r=new yt(e,t),s=new yt(e,t+1);let i=X();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new yt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class yt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||Y(t.Yr,e.Yr)}static Kr(t,e){return Y(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new mt(yt.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vT(i,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new yt(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Sc:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new mt(Y);return e.forEach((s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new yt(new F(i),0);let c=new mt(Y);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)}),a),R.resolve(this.ti(c))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Z(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(s=>{const i=new yt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new yt(e,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(t){this.ri=t,this.docs=(function(){return new it(F.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Re();return e.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Re();const a=e.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Lv(Vv(f),r)<=0||(s.has(f.key)||Eo(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(t,e,r,s){q(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new aI(this)}getSize(t){return R.resolve(this.size)}}class aI extends ZT{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(t){this.persistence=t,this.si=new Fn((e=>Pc(e)),Nc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Mc,this.targetCount=0,this.ai=wr.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new wr(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,e){this.ui={},this.overlays={},this.ci=new po(0),this.li=!1,this.li=!0,this.hi=new sI,this.referenceDelegate=t(this),this.Pi=new cI(this),this.indexManager=new zT,this.remoteDocumentCache=(function(s){return new oI(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new HT(e),this.Ii=new nI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rI,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new iI(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new lI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class lI extends xv{constructor(t){super(),this.currentSequenceNumber=t}}class xc{constructor(t){this.persistence=t,this.Ri=new Mc,this.Vi=null}static mi(t){return new xc(t)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const s=F.fromPath(r);return this.gi(t,s).next((i=>{i||e.removeEntry(s,W.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Zi{constructor(t,e){this.persistence=t,this.pi=new Fn((r=>$v(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=JT(this,e)}static mi(t,e){return new Zi(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?R.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((c=>{c||(r++,i.removeEntry(a,W.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ni(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=X(),s=X();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fc(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return zg()?8:Fv(bt())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ys(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(t,e,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new uI;return this.Ss(t,e,a).next((c=>{if(i.result=c,this.Vs)return this.bs(t,e,a,c.size)}))})).next((()=>i.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(nr()<=Q.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",rr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(nr()<=Q.DEBUG&&L("QueryEngine","Query:",rr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(nr()<=Q.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",rr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ae(e))):R.resolve())}ys(t,e){if(ph(e))return R.resolve(null);let r=ae(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Qa(e,null,"F"),r=ae(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=X(...i);return this.ps.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((u=>{const d=this.Ds(e,c);return this.Cs(e,d,a,u.readTime)?this.ys(t,Qa(e,null,"F")):this.vs(t,d,e,u)}))))})))))}ws(t,e,r,s){return ph(e)||s.isEqual(W.min())?R.resolve(null):this.ps.getDocuments(t,r).next((i=>{const a=this.Ds(e,i);return this.Cs(e,a,r,s)?R.resolve(null):(nr()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(e)),this.vs(t,a,e,kv(s,Rs)).next((c=>c)))}))}Ds(t,e){let r=new mt(Zf(t));return e.forEach(((s,i)=>{Eo(t,i)&&(r=r.add(i))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,r){return nr()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",rr(e)),this.ps.getDocumentsMatchingQuery(t,e,tn.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="LocalStore",dI=3e8;class fI{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new it(Y),this.xs=new Fn((i=>Pc(i)),Nc),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new eI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function pI(n,t,e,r){return new fI(n,t,e,r)}async function wp(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=X();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function mI(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,f){const g=d.batch,E=g.keys();let b=R.resolve();return E.forEach((D=>{b=b.next((()=>f.getEntry(u,D))).next((O=>{const P=d.docVersions.get(D);Z(P!==null,48541),O.version.compareTo(P)<0&&(g.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),f.addEntry(O)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(u,g)))})(e,r,t,i).next((()=>i.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Ap(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function gI(n,t){const e=z(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach(((f,g)=>{const E=s.get(g);if(!E)return;c.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,g).next((()=>e.Pi.addMatchingKeys(i,f.addedDocuments,g))));let b=E.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?b=b.withResumeToken(Tt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(g,b),(function(O,P,M){return O.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=dI?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(E,b,f)&&c.push(e.Pi.updateTargetData(i,b))}));let u=Re(),d=X();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(_I(i,a,t.documentUpdates).next((f=>{u=f.ks,d=f.qs}))),!r.isEqual(W.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next((g=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return R.waitFor(c).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(e.Ms=s,i)))}function _I(n,t,e){let r=X(),s=X();return e.forEach((i=>r=r.add(i))),t.getEntries(n,r).next((i=>{let a=Re();return e.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):L(Uc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function yI(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Sc),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function EI(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((i=>i?(s=i,R.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new Ge(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function tc(n,t,e){const r=z(n),s=r.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!xr(a))throw a;L(Uc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Ch(n,t,e){const r=z(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const g=z(u),E=g.xs.get(f);return E!==void 0?R.resolve(g.Ms.get(E)):g.Pi.getTargetData(d,f)})(r,a,ae(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:W.min(),e?i:X()))).next((c=>(vI(r,iT(t),c),{documents:c,Qs:i})))))}function vI(n,t,e){let r=n.Os.get(t)||W.min();e.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(t,r)}class Rh{constructor(){this.activeTargetIds=hT()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class TI{constructor(){this.Mo=new Rh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Rh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="ConnectivityMonitor";class Nh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(Ph,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){L(Ph,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i=null;function ec(){return _i===null?_i=(function(){return 268435456+Math.round(2147483648*Math.random())})():_i++,"0x"+_i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="RestConnection",wI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AI{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ki?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,i){const a=ec(),c=this.zo(t,e.toUriEncodedString());L(pa,`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(c),f=Or(d);return this.Jo(t,c,u,r,f).then((g=>(L(pa,`Received RPC '${t}' ${a}: `,g),g)),(g=>{throw _r(pa,`RPC '${t}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Ho(t,e,r,s,i,a){return this.Go(t,e,r,s,i)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Lr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,e){const r=wI[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class SI extends AI{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,i){const a=ec();return new Promise(((c,u)=>{const d=new Sf;d.setWithCredentials(!0),d.listenOnce(Cf.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Pi.NO_ERROR:const g=d.getResponseJson();L(It,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),c(g);break;case Pi.TIMEOUT:L(It,`RPC '${t}' ${a} timed out`),u(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case Pi.HTTP_ERROR:const E=d.getStatus();if(L(It,`RPC '${t}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b?.error;if(D&&D.status&&D.message){const O=(function(M){const x=M.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(x)>=0?x:C.UNKNOWN})(D.status);u(new V(O,D.message))}else u(new V(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(It,`RPC '${t}' ${a} completed.`)}}));const f=JSON.stringify(s);L(It,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,r,15)}))}T_(t,e,r){const s=ec(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Nf(),c=Pf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=i.join("");L(It,`Creating RPC '${t}' stream ${s}: ${f}`,u);const g=a.createWebChannel(f,u);this.I_(g);let E=!1,b=!1;const D=new bI({Yo:P=>{b?L(It,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(E||(L(It,`Opening RPC '${t}' stream ${s} transport.`),g.open(),E=!0),L(It,`RPC '${t}' stream ${s} sending:`,P),g.send(P))},Zo:()=>g.close()}),O=(P,M,x)=>{P.listen(M,($=>{try{x($)}catch(B){setTimeout((()=>{throw B}),0)}}))};return O(g,ps.EventType.OPEN,(()=>{b||(L(It,`RPC '${t}' stream ${s} transport opened.`),D.o_())})),O(g,ps.EventType.CLOSE,(()=>{b||(b=!0,L(It,`RPC '${t}' stream ${s} transport closed`),D.a_(),this.E_(g))})),O(g,ps.EventType.ERROR,(P=>{b||(b=!0,_r(It,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),D.a_(new V(C.UNAVAILABLE,"The operation could not be completed")))})),O(g,ps.EventType.MESSAGE,(P=>{if(!b){const M=P.data[0];Z(!!M,16349);const x=M,$=x?.error||x[0]?.error;if($){L(It,`RPC '${t}' stream ${s} received error:`,$);const B=$.status;let K=(function(m){const y=ut[m];if(y!==void 0)return hp(y)})(B),H=$.message;K===void 0&&(K=C.INTERNAL,H="Unknown error status: "+B+" with message "+$.message),b=!0,D.a_(new V(K,H)),g.close()}else L(It,`RPC '${t}' stream ${s} received:`,M),D.u_(M)}})),O(c,Rf.STAT_EVENT,(P=>{P.stat===ja.PROXY?L(It,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===ja.NOPROXY&&L(It,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function ma(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n){return new NT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="PersistentStream";class Sp{constructor(t,e,r,s,i,a,c,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bp(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ce(e.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return L(Dh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(L(Dh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class CI extends Sp{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=kT(this.serializer,t),r=(function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?ce(a.readTime):W.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Za(this.serializer),e.addTarget=(function(i,a){let c;const u=a.target;if(c=Ka(u)?{documents:MT(i,u)}:{query:xT(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=pp(i,a.resumeToken);const d=Ya(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=Ji(i,a.snapshotVersion.toTimestamp());const d=Ya(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const r=UT(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Za(this.serializer),e.removeTarget=t,this.q_(e)}}class RI extends Sp{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=LT(t.writeResults,t.commitTime),r=ce(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Za(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>VT(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{}class NI extends PI{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(t,Xa(e,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())}))}Ho(t,e,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(t,Xa(e,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class DI{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ce(e),this.aa=!1):L("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="RemoteStore";class OI{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Un(this)&&(L(Vn,"Restarting streams for network reachability change."),await(async function(u){const d=z(u);d.Ea.add(4),await Hs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Ao(d)})(this))}))})),this.Ra=new DI(r,s)}}async function Ao(n){if(Un(n))for(const t of n.da)await t(!0)}async function Hs(n){for(const t of n.da)await t(!1)}function Cp(n,t){const e=z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),qc(e)?jc(e):Fr(e).O_()&&Bc(e,t))}function $c(n,t){const e=z(n),r=Fr(e);e.Ia.delete(t),r.O_()&&Rp(e,t),e.Ia.size===0&&(r.O_()?r.L_():Un(e)&&e.Ra.set("Unknown"))}function Bc(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fr(n).Y_(t)}function Rp(n,t){n.Va.Ue(t),Fr(n).Z_(t)}function jc(n){n.Va=new ST({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.Ra.ua()}function qc(n){return Un(n)&&!Fr(n).x_()&&n.Ia.size>0}function Un(n){return z(n).Ea.size===0}function Pp(n){n.Va=void 0}async function kI(n){n.Ra.set("Online")}async function VI(n){n.Ia.forEach(((t,e)=>{Bc(n,t)}))}async function LI(n,t){Pp(n),qc(n)?(n.Ra.ha(t),jc(n)):n.Ra.set("Unknown")}async function MI(n,t,e){if(n.Ra.set("Online"),t instanceof fp&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(n,t)}catch(r){L(Vn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await to(n,r)}else if(t instanceof ki?n.Va.Ze(t):t instanceof dp?n.Va.st(t):n.Va.tt(t),!e.isEqual(W.min()))try{const r=await Ap(n.localStore);e.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Rp(i,u);const g=new Ge(f.target,u,d,f.sequenceNumber);Bc(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){L(Vn,"Failed to raise snapshot:",r),await to(n,r)}}async function to(n,t,e){if(!xr(t))throw t;n.Ea.add(1),await Hs(n),n.Ra.set("Offline"),e||(e=()=>Ap(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(Vn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Ao(n)}))}function Np(n,t){return t().catch((e=>to(n,e,t)))}async function bo(n){const t=z(n),e=sn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Sc;for(;xI(t);)try{const s=await yI(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,FI(t,s)}catch(s){await to(t,s)}Dp(t)&&Op(t)}function xI(n){return Un(n)&&n.Ta.length<10}function FI(n,t){n.Ta.push(t);const e=sn(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Dp(n){return Un(n)&&!sn(n).x_()&&n.Ta.length>0}function Op(n){sn(n).start()}async function UI(n){sn(n).ra()}async function $I(n){const t=sn(n);for(const e of n.Ta)t.ea(e.mutations)}async function BI(n,t,e){const r=n.Ta.shift(),s=kc.from(r,t,e);await Np(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await bo(n)}async function jI(n,t){t&&sn(n).X_&&await(async function(r,s){if((function(a){return wT(a)&&a!==C.ABORTED})(s.code)){const i=r.Ta.shift();sn(r).B_(),await Np(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await bo(r)}})(n,t),Dp(n)&&Op(n)}async function Oh(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),L(Vn,"RemoteStore received new credentials");const r=Un(e);e.Ea.add(3),await Hs(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Ao(e)}async function qI(n,t){const e=z(n);t?(e.Ea.delete(2),await Ao(e)):t||(e.Ea.add(2),await Hs(e),e.Ra.set("Unknown"))}function Fr(n){return n.ma||(n.ma=(function(e,r,s){const i=z(e);return i.sa(),new CI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:kI.bind(null,n),t_:VI.bind(null,n),r_:LI.bind(null,n),H_:MI.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),qc(n)?jc(n):n.Ra.set("Unknown")):(await n.ma.stop(),Pp(n))}))),n.ma}function sn(n){return n.fa||(n.fa=(function(e,r,s){const i=z(e);return i.sa(),new RI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:UI.bind(null,n),r_:jI.bind(null,n),ta:$I.bind(null,n),na:BI.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await bo(n)):(await n.fa.stop(),n.Ta.length>0&&(L(Vn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,c=new Hc(t,e,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wc(n,t){if(Ce("AsyncQueue",`${t}: ${n}`),xr(n))return new V(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{static emptySet(t){return new pr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=ms(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new pr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.ga=new it(F.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):q(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ar{constructor(t,e,r,s,i,a,c,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new Ar(t,e,pr.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class WI{constructor(){this.queries=Vh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=z(e),i=s.queries;s.queries=Vh(),i.forEach(((a,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new V(C.ABORTED,"Firestore shutting down"))}}function Vh(){return new Fn((n=>Jf(n)),yo)}async function zc(n,t){const e=z(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new HI,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Wc(a,`Initialization of query '${rr(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Gc(e)}async function Kc(n,t){const e=z(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function zI(n,t){const e=z(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Gc(e)}function KI(n,t,e){const r=z(n),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);r.queries.delete(t)}function Gc(n){n.Ca.forEach((t=>{t.next()}))}var nc,Lh;(Lh=nc||(nc={})).Ma="default",Lh.Cache="cache";class Qc{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ar(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ar.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t){this.key=t}}class Vp{constructor(t){this.key=t}}class GI{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=Zf(t),this.tu=new pr(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new kh,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,g)=>{const E=s.get(f),b=Eo(this.query,g)?g:null,D=!!E&&this.mutatedKeys.has(E.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;E&&b?E.data.isEqual(b.data)?D!==O&&(r.track({type:3,doc:b}),P=!0):this.su(E,b)||(r.track({type:2,doc:b}),P=!0,(u&&this.eu(b,u)>0||d&&this.eu(b,d)<0)&&(c=!0)):!E&&b?(r.track({type:0,doc:b}),P=!0):E&&!b&&(r.track({type:1,doc:E}),P=!0,(u||d)&&(c=!0)),P&&(b?(a=a.add(b),i=O?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((f,g)=>(function(b,D){const O=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:P})}};return O(b)-O(D)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new Ar(this.query,t.tu,i,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new Vp(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new kp(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ar.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Yc="SyncEngine";class QI{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class YI{constructor(t){this.key=t,this.hu=!1}}class XI{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Fn((c=>Jf(c)),yo),this.Iu=new Map,this.Eu=new Set,this.du=new it(F.comparator),this.Au=new Map,this.Ru=new Mc,this.Vu={},this.mu=new Map,this.fu=wr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function JI(n,t,e=!0){const r=$p(n);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Lp(r,t,e,!0),s}async function ZI(n,t){const e=$p(n);await Lp(e,t,!0,!1)}async function Lp(n,t,e,r){const s=await EI(n.localStore,ae(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await tw(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Cp(n.remoteStore,s),c}async function tw(n,t,e,r,s){n.pu=(g,E,b)=>(async function(O,P,M,x){let $=P.view.ru(M);$.Cs&&($=await Ch(O.localStore,P.query,!1).then((({documents:T})=>P.view.ru(T,$))));const B=x&&x.targetChanges.get(P.targetId),K=x&&x.targetMismatches.get(P.targetId)!=null,H=P.view.applyChanges($,O.isPrimaryClient,B,K);return xh(O,P.targetId,H.au),H.snapshot})(n,g,E,b);const i=await Ch(n.localStore,t,!0),a=new GI(t,i.Qs),c=a.ru(i.documents),u=qs.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);xh(n,e,d.au);const f=new QI(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function ew(n,t,e){const r=z(n),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!yo(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&$c(r.remoteStore,s.targetId),rc(r,s.targetId)})).catch(Mr)):(rc(r,s.targetId),await tc(r.localStore,s.targetId,!0))}async function nw(n,t){const e=z(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),$c(e.remoteStore,r.targetId))}async function rw(n,t,e){const r=uw(n);try{const s=await(function(a,c){const u=z(a),d=rt.now(),f=c.reduce(((b,D)=>b.add(D.key)),X());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let D=Re(),O=X();return u.Ns.getEntries(b,f).next((P=>{D=P,D.forEach(((M,x)=>{x.isValidDocument()||(O=O.add(M))}))})).next((()=>u.localDocuments.getOverlayedDocuments(b,D))).next((P=>{g=P;const M=[];for(const x of c){const $=yT(x,g.get(x.key).overlayedDocument);$!=null&&M.push(new fn(x.key,$,Hf($.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,M,c)})).next((P=>{E=P;const M=P.applyToLocalDocumentSet(g,O);return u.documentOverlayCache.saveOverlays(b,P.batchId,M)}))})).then((()=>({batchId:E.batchId,changes:ep(g)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new it(Y)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,e),await Ws(r,s.changes),await bo(r.remoteStore)}catch(s){const i=Wc(s,"Failed to persist write");e.reject(i)}}async function Mp(n,t){const e=z(n);try{const r=await gI(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Au.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))})),await Ws(e,r,t)}catch(r){await Mr(r)}}function Mh(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=z(a);u.onlineState=c;let d=!1;u.queries.forEach(((f,g)=>{for(const E of g.Sa)E.va(c)&&(d=!0)})),d&&Gc(u)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function sw(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new it(F.comparator);a=a.insert(i,At.newNoDocument(i,W.min()));const c=X().add(i),u=new Io(W.min(),new Map,new it(Y),a,c);await Mp(r,u),r.du=r.du.remove(i),r.Au.delete(t),Xc(r)}else await tc(r.localStore,t,!1).then((()=>rc(r,t,e))).catch(Mr)}async function iw(n,t){const e=z(n),r=t.batch.batchId;try{const s=await mI(e.localStore,t);Fp(e,r,null),xp(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ws(e,s)}catch(s){await Mr(s)}}async function ow(n,t,e){const r=z(n);try{const s=await(function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next((g=>(Z(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(r.localStore,t);Fp(r,t,e),xp(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ws(r,s)}catch(s){await Mr(s)}}function xp(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Fp(n,t,e){const r=z(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function rc(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||Up(n,r)}))}function Up(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&($c(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Xc(n))}function xh(n,t,e){for(const r of e)r instanceof kp?(n.Ru.addReference(r.key,t),aw(n,r)):r instanceof Vp?(L(Yc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Up(n,r.key)):q(19791,{wu:r})}function aw(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(L(Yc,"New document in limbo: "+e),n.Eu.add(r),Xc(n))}function Xc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new F(et.fromString(t)),r=n.fu.next();n.Au.set(r,new YI(e)),n.du=n.du.insert(e,r),Cp(n.remoteStore,new Ge(ae(_o(e.path)),r,"TargetPurposeLimboResolution",po.ce))}}async function Ws(n,t,e){const r=z(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{a.push(r.pu(u,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const f=d?!d.fromCache:e?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Fc.As(u.targetId,d);i.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,d){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>R.forEach(d,(E=>R.forEach(E.Es,(b=>f.persistence.referenceDelegate.addReference(g,E.targetId,b))).next((()=>R.forEach(E.ds,(b=>f.persistence.referenceDelegate.removeReference(g,E.targetId,b)))))))))}catch(g){if(!xr(g))throw g;L(Uc,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const b=f.Ms.get(E),D=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(D);f.Ms=f.Ms.insert(E,O)}}})(r.localStore,i))}async function cw(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){L(Yc,"User change. New user:",t.toKey());const r=await wp(e.localStore,t);e.currentUser=t,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new V(C.CANCELLED,a))}))})),i.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ws(e,r.Ls)}}function lw(n,t){const e=z(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let s=X();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function $p(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sw.bind(null,t),t.Pu.H_=zI.bind(null,t.eventManager),t.Pu.yu=KI.bind(null,t.eventManager),t}function uw(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=iw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ow.bind(null,t),t}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=wo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return pI(this.persistence,new hI,t.initialUser,this.serializer)}Cu(t){return new Ip(xc.mi,this.serializer)}Du(t){return new TI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class hw extends eo{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Z(this.persistence.referenceDelegate instanceof Zi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new YT(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new Ip((r=>Zi.mi(r,e)),this.serializer)}}class sc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cw.bind(null,this.syncEngine),await qI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new WI})()}createDatastore(t){const e=wo(t.databaseInfo.databaseId),r=(function(i){return new SI(i)})(t.databaseInfo);return(function(i,a,c,u){return new NI(i,a,c,u)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,i,a,c){return new OI(r,s,i,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Mh(this.syncEngine,e,0)),(function(){return Nh.v()?new Nh:new II})())}createSyncEngine(t,e){return(function(s,i,a,c,u,d,f){const g=new XI(s,i,a,c,u,d);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=z(e);L(Vn,"RemoteStore shutting down."),r.Ea.add(5),await Hs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}sc.provider={build:()=>new sc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ce("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="FirestoreClient";class dw{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=bc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(on,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(on,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Wc(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ga(n,t){n.asyncQueue.verifyOperationInProgress(),L(on,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await wp(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Fh(n,t){n.asyncQueue.verifyOperationInProgress();const e=await fw(n);L(on,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Oh(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Oh(t.remoteStore,s))),n._onlineComponents=t}async function fw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(on,"Using user provided OfflineComponentProvider");try{await ga(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;_r("Error using user provided cache. Falling back to memory cache: "+e),await ga(n,new eo)}}else L(on,"Using default OfflineComponentProvider"),await ga(n,new hw(void 0));return n._offlineComponents}async function Bp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(on,"Using user provided OnlineComponentProvider"),await Fh(n,n._uninitializedComponentsProvider._online)):(L(on,"Using default OnlineComponentProvider"),await Fh(n,new sc))),n._onlineComponents}function pw(n){return Bp(n).then((t=>t.syncEngine))}async function no(n){const t=await Bp(n),e=t.eventManager;return e.onListen=JI.bind(null,t.syncEngine),e.onUnlisten=ew.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ZI.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=nw.bind(null,t.syncEngine),e}function mw(n,t,e={}){const r=new Te;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new Jc({next:E=>{f.Nu(),a.enqueueAndForget((()=>Kc(i,g)));const b=E.docs.has(c);!b&&E.fromCache?d.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&E.fromCache&&u&&u.source==="server"?d.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new Qc(_o(c.path),f,{includeMetadataChanges:!0,qa:!0});return zc(i,g)})(await no(n),n.asyncQueue,t,e,r))),r.promise}function gw(n,t,e={}){const r=new Te;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new Jc({next:E=>{f.Nu(),a.enqueueAndForget((()=>Kc(i,g))),E.fromCache&&u.source==="server"?d.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new Qc(c,f,{includeMetadataChanges:!0,qa:!0});return zc(i,g)})(await no(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="firestore.googleapis.com",$h=!0;class Bh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qp,this.ssl=$h}else this.host=t.host,this.ssl=t.ssl??$h;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Tp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<GT)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ov("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jp(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class So{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Iv;switch(r.type){case"firstParty":return new Sv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Uh.get(e);r&&(L("ComponentProvider","Removing Datastore"),Uh.delete(e),r.terminate())})(this),Promise.resolve()}}function _w(n,t,e,r={}){n=xt(n,So);const s=Or(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Md(`https://${c}`),xd("Firestore",!0)),i.host!==qp&&i.host!==c&&_r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Ae(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=wt.MOCK_USER;else{d=xg(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new wt(g)}n._authCredentials=new wv(new Of(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $n(this.firestore,t,this._query)}}class ct{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if($s(e,ct._jsonSchema))return new ct(t,r||null,new F(et.fromString(e.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:dt("string",ct._jsonSchemaVersion),referencePath:dt("string")};class Ze extends $n{constructor(t,e,r){super(t,e,_o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new F(t))}withConverter(t){return new Ze(this.firestore,t,this._path)}}function BR(n,t,...e){if(n=ft(n),kf("collection","path",t),n instanceof So){const r=et.fromString(t,...e);return th(r),new Ze(n,null,r)}{if(!(n instanceof ct||n instanceof Ze))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return th(r),new Ze(n.firestore,null,r)}}function yw(n,t,...e){if(n=ft(n),arguments.length===1&&(t=bc.newId()),kf("doc","path",t),n instanceof So){const r=et.fromString(t,...e);return Zu(r),new ct(n,null,new F(r))}{if(!(n instanceof ct||n instanceof Ze))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Zu(r),new ct(n.firestore,n instanceof Ze?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="AsyncQueue";class qh{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bp(this,"async_queue_retry"),this._c=()=>{const r=ma();r&&L(jh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ma();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ma();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Te;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!xr(t))throw t;L(jh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ce("INTERNAL UNHANDLED ERROR: ",Hh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Hc.createAndSchedule(this,t,e,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:Hh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Hh(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class an extends So{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new qh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new qh(t),this._firestoreClient=void 0,await t}}}function Ew(n,t){const e=typeof n=="object"?n:Bd(),r=typeof n=="string"?n:Ki,s=mc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Lg("firestore");i&&_w(s,...i)}return s}function Co(n){if(n._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vw(n),n._firestoreClient}function vw(n){const t=n._freezeSettings(),e=(function(s,i,a,c){return new qv(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,jp(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new dw(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ht(Tt.fromBase64String(t))}catch(e){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ht(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($s(t,Ht._jsonSchema))return Ht.fromBase64String(t.bytes)}}Ht._jsonSchemaVersion="firestore/bytes/1.0",Ht._jsonSchema={type:dt("string",Ht._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Y(this._lat,t._lat)||Y(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:le._jsonSchemaVersion}}static fromJSON(t){if($s(t,le._jsonSchema))return new le(t.latitude,t.longitude)}}le._jsonSchemaVersion="firestore/geoPoint/1.0",le._jsonSchema={type:dt("string",le._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($s(t,ue._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new ue(t.vectorValues);throw new V(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ue._jsonSchemaVersion="firestore/vectorValue/1.0",ue._jsonSchema={type:dt("string",ue._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=/^__.*__$/;class Iw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new fn(t,this.data,this.fieldMask,e,this.fieldTransforms):new js(t,this.data,e,this.fieldTransforms)}}class Hp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new fn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Wp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class Po{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Po({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return ro(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Wp(this.Ac)&&Tw.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class ww{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||wo(t)}Cc(t,e,r,s=!1){return new Po({Ac:t,methodName:e,Dc:r,path:vt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function No(n){const t=n._freezeSettings(),e=wo(n._databaseId);return new ww(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zp(n,t,e,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,t,e,s);nl("Data must be an object, but it was:",a,r);const c=Gp(r,a);let u,d;if(i.merge)u=new Mt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const E=ic(t,g,e);if(!a.contains(E))throw new V(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Yp(f,E)||f.push(E)}u=new Mt(f),d=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,d=a.fieldTransforms;return new Iw(new Ot(c),u,d)}class Do extends Ur{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Do}}function Kp(n,t,e){return new Po({Ac:3,Dc:t.settings.Dc,methodName:n._methodName,fc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Zc extends Ur{_toFieldTransform(t){return new Oc(t.path,new Os)}isEqual(t){return t instanceof Zc}}class tl extends Ur{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=Kp(this,t,!0),r=this.vc.map((i=>Bn(i,e))),s=new Tr(r);return new Oc(t.path,s)}isEqual(t){return t instanceof tl&&Ae(this.vc,t.vc)}}class el extends Ur{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=Kp(this,t,!0),r=this.vc.map((i=>Bn(i,e))),s=new Ir(r);return new Oc(t.path,s)}isEqual(t){return t instanceof el&&Ae(this.vc,t.vc)}}function Aw(n,t,e,r){const s=n.Cc(1,t,e);nl("Data must be an object, but it was:",s,r);const i=[],a=Ot.empty();dn(r,((u,d)=>{const f=rl(t,u,e);d=ft(d);const g=s.yc(f);if(d instanceof Do)i.push(f);else{const E=Bn(d,g);E!=null&&(i.push(f),a.set(f,E))}}));const c=new Mt(i);return new Hp(a,c,s.fieldTransforms)}function bw(n,t,e,r,s,i){const a=n.Cc(1,t,e),c=[ic(t,r,e)],u=[s];if(i.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(ic(t,i[E])),u.push(i[E+1]);const d=[],f=Ot.empty();for(let E=c.length-1;E>=0;--E)if(!Yp(d,c[E])){const b=c[E];let D=u[E];D=ft(D);const O=a.yc(b);if(D instanceof Do)d.push(b);else{const P=Bn(D,O);P!=null&&(d.push(b),f.set(b,P))}}const g=new Mt(d);return new Hp(f,g,a.fieldTransforms)}function Sw(n,t,e,r=!1){return Bn(e,n.Cc(r?4:3,t))}function Bn(n,t){if(Qp(n=ft(n)))return nl("Unsupported field value:",t,n),Gp(n,t);if(n instanceof Ur)return(function(r,s){if(!Wp(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Bn(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,t)}return(function(r,s){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:Ji(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(s.serializer,i)}}if(r instanceof le)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ht)return{bytesValue:pp(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ue)return(function(a,c){return{mapValue:{fields:{[jf]:{stringValue:qf},[Gi]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Dc(c.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${fo(r)}`)})(n,t)}function Gp(n,t){const e={};return Mf(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dn(n,((r,s)=>{const i=Bn(s,t.mc(r));i!=null&&(e[r]=i)})),{mapValue:{fields:e}}}function Qp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof le||n instanceof Ht||n instanceof ct||n instanceof Ur||n instanceof ue)}function nl(n,t,e){if(!Qp(e)||!Vf(e)){const r=fo(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ic(n,t,e){if((t=ft(t))instanceof Ro)return t._internalPath;if(typeof t=="string")return rl(n,t);throw ro("Field path arguments must be of type string or ",n,!1,void 0,e)}const Cw=new RegExp("[~\\*/\\[\\]]");function rl(n,t,e){if(t.search(Cw)>=0)throw ro(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ro(...t.split("."))._internalPath}catch{throw ro(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ro(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(C.INVALID_ARGUMENT,c+n+u)}function Yp(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(sl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Rw extends Xp{data(){return super.data()}}function sl(n,t){return typeof t=="string"?rl(n,t):t instanceof Ro?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class il{}class Pw extends il{}function jR(n,t,...e){let r=[];t instanceof il&&r.push(t),r=r.concat(e),(function(i){const a=i.filter((u=>u instanceof ol)).length,c=i.filter((u=>u instanceof Oo)).length;if(a>1||a>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Oo extends Pw{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Oo(t,e,r)}_apply(t){const e=this._parse(t);return Zp(t._query,e),new $n(t.firestore,t.converter,Ga(t._query,e))}_parse(t){const e=No(t.firestore);return(function(i,a,c,u,d,f,g){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Kh(g,f);const D=[];for(const O of g)D.push(zh(u,i,O));E={arrayValue:{values:D}}}else E=zh(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Kh(g,f),E=Sw(c,a,g,f==="in"||f==="not-in");return ht.create(d,f,E)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function qR(n,t,e){const r=t,s=sl("where",n);return Oo._create(s,r,e)}class ol extends il{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ol(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:te.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Zp(a,u),a=Ga(a,u)})(t._query,e),new $n(t.firestore,t.converter,Ga(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zh(n,t,e){if(typeof(e=ft(e))=="string"){if(e==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xf(t)&&e.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!F.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ch(n,new F(r))}if(e instanceof ct)return ch(n,e._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fo(e)}.`)}function Kh(n,t){if(!Array.isArray(n)||n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Zp(n,t){const e=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Nw{convertValue(t,e="none"){switch(rn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(nn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return dn(t,((s,i)=>{r[s]=this.convertValue(i,e)})),r}convertVectorValue(t){const e=t.fields?.[Gi].arrayValue?.values?.map((r=>lt(r.doubleValue)));return new ue(e)}convertGeoPoint(t){return new le(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=go(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ps(t));default:return null}}convertTimestamp(t){const e=en(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);Z(vp(r),9688,{name:t});const s=new Ns(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(e)||Ce(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class _s{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cn extends Xp{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(sl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Cn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cn._jsonSchema={type:dt("string",Cn._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Vi extends Cn{data(t={}){return super.data(t)}}class Rn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new _s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Vi(this._firestore,this._userDataWriter,r.key,r,new _s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _s(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _s(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Dw(c.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Rn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=bc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Dw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(n){n=xt(n,ct);const t=xt(n.firestore,an);return mw(Co(t),n._key).then((e=>em(t,n,e)))}Rn._jsonSchemaVersion="firestore/querySnapshot/1.0",Rn._jsonSchema={type:dt("string",Rn._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class al extends Nw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ht(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,e)}}function WR(n){n=xt(n,$n);const t=xt(n.firestore,an),e=Co(t),r=new al(t);return Jp(n._query),gw(e,n._query).then((s=>new Rn(t,r,n,s)))}function zR(n,t,e){n=xt(n,ct);const r=xt(n.firestore,an),s=tm(n.converter,t);return cl(r,[zp(No(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Jt.none())])}function KR(n,t,e,...r){n=xt(n,ct);const s=xt(n.firestore,an),i=No(s);let a;return a=typeof(t=ft(t))=="string"||t instanceof Ro?bw(i,"updateDoc",n._key,t,e,r):Aw(i,"updateDoc",n._key,t),cl(s,[a.toMutation(n._key,Jt.exists(!0))])}function GR(n,t){const e=xt(n.firestore,an),r=yw(n),s=tm(n.converter,t);return cl(e,[zp(No(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then((()=>r))}function QR(n,...t){n=ft(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Wh(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Wh(t[r])){const u=t[r];t[r]=u.next?.bind(u),t[r+1]=u.error?.bind(u),t[r+2]=u.complete?.bind(u)}let i,a,c;if(n instanceof ct)a=xt(n.firestore,an),c=_o(n._key.path),i={next:u=>{t[r]&&t[r](em(a,n,u))},error:t[r+1],complete:t[r+2]};else{const u=xt(n,$n);a=xt(u.firestore,an),c=u._query;const d=new al(a);i={next:f=>{t[r]&&t[r](new Rn(a,d,u,f))},error:t[r+1],complete:t[r+2]},Jp(n._query)}return(function(d,f,g,E){const b=new Jc(E),D=new Qc(f,b,g);return d.asyncQueue.enqueueAndForget((async()=>zc(await no(d),D))),()=>{b.Nu(),d.asyncQueue.enqueueAndForget((async()=>Kc(await no(d),D)))}})(Co(a),c,s,i)}function cl(n,t){return(function(r,s){const i=new Te;return r.asyncQueue.enqueueAndForget((async()=>rw(await pw(r),s,i))),i.promise})(Co(n),t)}function em(n,t,e){const r=e.docs.get(t._key),s=new al(n);return new Cn(n,s,t._key,r,new _s(e.hasPendingWrites,e.fromCache),t.converter)}function YR(){return new Zc("serverTimestamp")}function XR(...n){return new tl("arrayUnion",n)}function JR(...n){return new el("arrayRemove",n)}(function(t,e=!0){(function(s){Lr=s})(kr),mr(new Nn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new an(new Av(r.getProvider("auth-internal")),new Cv(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(d.options.projectId,f)})(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Xe(Qu,Yu,t),Xe(Qu,Yu,"esm2020")})();var Ow="firebase",kw="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(Ow,kw,"app");const Vw={apiKey:"AIzaSyCwF4SMyR-D3-BIQbrXIK2e7lPLzX9GlXU",authDomain:"comp1800-202530-cd3b4.firebaseapp.com",projectId:"comp1800-202530-cd3b4",appId:"1:180036371663:web:ee7eda6c87045aa745e3ba"},nm=$d(Vw),ZR=vv(nm),tP=Ew(nm);var Pt="top",Ft="bottom",Ut="right",Nt="left",ko="auto",$r=[Pt,Ft,Ut,Nt],Ln="start",br="end",rm="clippingParents",ll="viewport",or="popper",sm="reference",oc=$r.reduce(function(n,t){return n.concat([t+"-"+Ln,t+"-"+br])},[]),ul=[].concat($r,[ko]).reduce(function(n,t){return n.concat([t,t+"-"+Ln,t+"-"+br])},[]),im="beforeRead",om="read",am="afterRead",cm="beforeMain",lm="main",um="afterMain",hm="beforeWrite",dm="write",fm="afterWrite",pm=[im,om,am,cm,lm,um,hm,dm,fm];function pe(n){return n?(n.nodeName||"").toLowerCase():null}function $t(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function Mn(n){var t=$t(n).Element;return n instanceof t||n instanceof Element}function Wt(n){var t=$t(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function hl(n){if(typeof ShadowRoot>"u")return!1;var t=$t(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function Lw(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},s=t.attributes[e]||{},i=t.elements[e];!Wt(i)||!pe(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(a){var c=s[a];c===!1?i.removeAttribute(a):i.setAttribute(a,c===!0?"":c)}))})}function Mw(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(r){var s=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:e[r]),c=a.reduce(function(u,d){return u[d]="",u},{});!Wt(s)||!pe(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(u){s.removeAttribute(u)}))})}}const dl={name:"applyStyles",enabled:!0,phase:"write",fn:Lw,effect:Mw,requires:["computeStyles"]};function he(n){return n.split("-")[0]}var Pn=Math.max,so=Math.min,Sr=Math.round;function ac(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function mm(){return!/^((?!chrome|android).)*safari/i.test(ac())}function Cr(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var r=n.getBoundingClientRect(),s=1,i=1;t&&Wt(n)&&(s=n.offsetWidth>0&&Sr(r.width)/n.offsetWidth||1,i=n.offsetHeight>0&&Sr(r.height)/n.offsetHeight||1);var a=Mn(n)?$t(n):window,c=a.visualViewport,u=!mm()&&e,d=(r.left+(u&&c?c.offsetLeft:0))/s,f=(r.top+(u&&c?c.offsetTop:0))/i,g=r.width/s,E=r.height/i;return{width:g,height:E,top:f,right:d+g,bottom:f+E,left:d,x:d,y:f}}function fl(n){var t=Cr(n),e=n.offsetWidth,r=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:r}}function gm(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&hl(e)){var r=t;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Pe(n){return $t(n).getComputedStyle(n)}function xw(n){return["table","td","th"].indexOf(pe(n))>=0}function pn(n){return((Mn(n)?n.ownerDocument:n.document)||window.document).documentElement}function Vo(n){return pe(n)==="html"?n:n.assignedSlot||n.parentNode||(hl(n)?n.host:null)||pn(n)}function Gh(n){return!Wt(n)||Pe(n).position==="fixed"?null:n.offsetParent}function Fw(n){var t=/firefox/i.test(ac()),e=/Trident/i.test(ac());if(e&&Wt(n)){var r=Pe(n);if(r.position==="fixed")return null}var s=Vo(n);for(hl(s)&&(s=s.host);Wt(s)&&["html","body"].indexOf(pe(s))<0;){var i=Pe(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function zs(n){for(var t=$t(n),e=Gh(n);e&&xw(e)&&Pe(e).position==="static";)e=Gh(e);return e&&(pe(e)==="html"||pe(e)==="body"&&Pe(e).position==="static")?t:e||Fw(n)||t}function pl(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function As(n,t,e){return Pn(n,so(t,e))}function Uw(n,t,e){var r=As(n,t,e);return r>e?e:r}function _m(){return{top:0,right:0,bottom:0,left:0}}function ym(n){return Object.assign({},_m(),n)}function Em(n,t){return t.reduce(function(e,r){return e[r]=n,e},{})}var $w=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ym(typeof t!="number"?t:Em(t,$r))};function Bw(n){var t,e=n.state,r=n.name,s=n.options,i=e.elements.arrow,a=e.modifiersData.popperOffsets,c=he(e.placement),u=pl(c),d=[Nt,Ut].indexOf(c)>=0,f=d?"height":"width";if(!(!i||!a)){var g=$w(s.padding,e),E=fl(i),b=u==="y"?Pt:Nt,D=u==="y"?Ft:Ut,O=e.rects.reference[f]+e.rects.reference[u]-a[u]-e.rects.popper[f],P=a[u]-e.rects.reference[u],M=zs(i),x=M?u==="y"?M.clientHeight||0:M.clientWidth||0:0,$=O/2-P/2,B=g[b],K=x-E[f]-g[D],H=x/2-E[f]/2+$,T=As(B,H,K),m=u;e.modifiersData[r]=(t={},t[m]=T,t.centerOffset=T-H,t)}}function jw(n){var t=n.state,e=n.options,r=e.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||gm(t.elements.popper,s)&&(t.elements.arrow=s))}const vm={name:"arrow",enabled:!0,phase:"main",fn:Bw,effect:jw,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Rr(n){return n.split("-")[1]}var qw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Hw(n,t){var e=n.x,r=n.y,s=t.devicePixelRatio||1;return{x:Sr(e*s)/s||0,y:Sr(r*s)/s||0}}function Qh(n){var t,e=n.popper,r=n.popperRect,s=n.placement,i=n.variation,a=n.offsets,c=n.position,u=n.gpuAcceleration,d=n.adaptive,f=n.roundOffsets,g=n.isFixed,E=a.x,b=E===void 0?0:E,D=a.y,O=D===void 0?0:D,P=typeof f=="function"?f({x:b,y:O}):{x:b,y:O};b=P.x,O=P.y;var M=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),$=Nt,B=Pt,K=window;if(d){var H=zs(e),T="clientHeight",m="clientWidth";if(H===$t(e)&&(H=pn(e),Pe(H).position!=="static"&&c==="absolute"&&(T="scrollHeight",m="scrollWidth")),H=H,s===Pt||(s===Nt||s===Ut)&&i===br){B=Ft;var y=g&&H===K&&K.visualViewport?K.visualViewport.height:H[T];O-=y-r.height,O*=u?1:-1}if(s===Nt||(s===Pt||s===Ft)&&i===br){$=Ut;var I=g&&H===K&&K.visualViewport?K.visualViewport.width:H[m];b-=I-r.width,b*=u?1:-1}}var v=Object.assign({position:c},d&&qw),w=f===!0?Hw({x:b,y:O},$t(e)):{x:b,y:O};if(b=w.x,O=w.y,u){var _;return Object.assign({},v,(_={},_[B]=x?"0":"",_[$]=M?"0":"",_.transform=(K.devicePixelRatio||1)<=1?"translate("+b+"px, "+O+"px)":"translate3d("+b+"px, "+O+"px, 0)",_))}return Object.assign({},v,(t={},t[B]=x?O+"px":"",t[$]=M?b+"px":"",t.transform="",t))}function Ww(n){var t=n.state,e=n.options,r=e.gpuAcceleration,s=r===void 0?!0:r,i=e.adaptive,a=i===void 0?!0:i,c=e.roundOffsets,u=c===void 0?!0:c,d={placement:he(t.placement),variation:Rr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Qh(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qh(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ml={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ww,data:{}};var yi={passive:!0};function zw(n){var t=n.state,e=n.instance,r=n.options,s=r.scroll,i=s===void 0?!0:s,a=r.resize,c=a===void 0?!0:a,u=$t(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach(function(f){f.addEventListener("scroll",e.update,yi)}),c&&u.addEventListener("resize",e.update,yi),function(){i&&d.forEach(function(f){f.removeEventListener("scroll",e.update,yi)}),c&&u.removeEventListener("resize",e.update,yi)}}const gl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:zw,data:{}};var Kw={left:"right",right:"left",bottom:"top",top:"bottom"};function Li(n){return n.replace(/left|right|bottom|top/g,function(t){return Kw[t]})}var Gw={start:"end",end:"start"};function Yh(n){return n.replace(/start|end/g,function(t){return Gw[t]})}function _l(n){var t=$t(n),e=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:e,scrollTop:r}}function yl(n){return Cr(pn(n)).left+_l(n).scrollLeft}function Qw(n,t){var e=$t(n),r=pn(n),s=e.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){i=s.width,a=s.height;var d=mm();(d||!d&&t==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:i,height:a,x:c+yl(n),y:u}}function Yw(n){var t,e=pn(n),r=_l(n),s=(t=n.ownerDocument)==null?void 0:t.body,i=Pn(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),a=Pn(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+yl(n),u=-r.scrollTop;return Pe(s||e).direction==="rtl"&&(c+=Pn(e.clientWidth,s?s.clientWidth:0)-i),{width:i,height:a,x:c,y:u}}function El(n){var t=Pe(n),e=t.overflow,r=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+r)}function Tm(n){return["html","body","#document"].indexOf(pe(n))>=0?n.ownerDocument.body:Wt(n)&&El(n)?n:Tm(Vo(n))}function bs(n,t){var e;t===void 0&&(t=[]);var r=Tm(n),s=r===((e=n.ownerDocument)==null?void 0:e.body),i=$t(r),a=s?[i].concat(i.visualViewport||[],El(r)?r:[]):r,c=t.concat(a);return s?c:c.concat(bs(Vo(a)))}function cc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Xw(n,t){var e=Cr(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Xh(n,t,e){return t===ll?cc(Qw(n,e)):Mn(t)?Xw(t,e):cc(Yw(pn(n)))}function Jw(n){var t=bs(Vo(n)),e=["absolute","fixed"].indexOf(Pe(n).position)>=0,r=e&&Wt(n)?zs(n):n;return Mn(r)?t.filter(function(s){return Mn(s)&&gm(s,r)&&pe(s)!=="body"}):[]}function Zw(n,t,e,r){var s=t==="clippingParents"?Jw(n):[].concat(t),i=[].concat(s,[e]),a=i[0],c=i.reduce(function(u,d){var f=Xh(n,d,r);return u.top=Pn(f.top,u.top),u.right=so(f.right,u.right),u.bottom=so(f.bottom,u.bottom),u.left=Pn(f.left,u.left),u},Xh(n,a,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function Im(n){var t=n.reference,e=n.element,r=n.placement,s=r?he(r):null,i=r?Rr(r):null,a=t.x+t.width/2-e.width/2,c=t.y+t.height/2-e.height/2,u;switch(s){case Pt:u={x:a,y:t.y-e.height};break;case Ft:u={x:a,y:t.y+t.height};break;case Ut:u={x:t.x+t.width,y:c};break;case Nt:u={x:t.x-e.width,y:c};break;default:u={x:t.x,y:t.y}}var d=s?pl(s):null;if(d!=null){var f=d==="y"?"height":"width";switch(i){case Ln:u[d]=u[d]-(t[f]/2-e[f]/2);break;case br:u[d]=u[d]+(t[f]/2-e[f]/2);break}}return u}function Pr(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=r===void 0?n.placement:r,i=e.strategy,a=i===void 0?n.strategy:i,c=e.boundary,u=c===void 0?rm:c,d=e.rootBoundary,f=d===void 0?ll:d,g=e.elementContext,E=g===void 0?or:g,b=e.altBoundary,D=b===void 0?!1:b,O=e.padding,P=O===void 0?0:O,M=ym(typeof P!="number"?P:Em(P,$r)),x=E===or?sm:or,$=n.rects.popper,B=n.elements[D?x:E],K=Zw(Mn(B)?B:B.contextElement||pn(n.elements.popper),u,f,a),H=Cr(n.elements.reference),T=Im({reference:H,element:$,placement:s}),m=cc(Object.assign({},$,T)),y=E===or?m:H,I={top:K.top-y.top+M.top,bottom:y.bottom-K.bottom+M.bottom,left:K.left-y.left+M.left,right:y.right-K.right+M.right},v=n.modifiersData.offset;if(E===or&&v){var w=v[s];Object.keys(I).forEach(function(_){var ot=[Ut,Ft].indexOf(_)>=0?1:-1,St=[Pt,Ft].indexOf(_)>=0?"y":"x";I[_]+=w[St]*ot})}return I}function tA(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=e.boundary,i=e.rootBoundary,a=e.padding,c=e.flipVariations,u=e.allowedAutoPlacements,d=u===void 0?ul:u,f=Rr(r),g=f?c?oc:oc.filter(function(D){return Rr(D)===f}):$r,E=g.filter(function(D){return d.indexOf(D)>=0});E.length===0&&(E=g);var b=E.reduce(function(D,O){return D[O]=Pr(n,{placement:O,boundary:s,rootBoundary:i,padding:a})[he(O)],D},{});return Object.keys(b).sort(function(D,O){return b[D]-b[O]})}function eA(n){if(he(n)===ko)return[];var t=Li(n);return[Yh(n),t,Yh(t)]}function nA(n){var t=n.state,e=n.options,r=n.name;if(!t.modifiersData[r]._skip){for(var s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!0:a,u=e.fallbackPlacements,d=e.padding,f=e.boundary,g=e.rootBoundary,E=e.altBoundary,b=e.flipVariations,D=b===void 0?!0:b,O=e.allowedAutoPlacements,P=t.options.placement,M=he(P),x=M===P,$=u||(x||!D?[Li(P)]:eA(P)),B=[P].concat($).reduce(function(Qt,jt){return Qt.concat(he(jt)===ko?tA(t,{placement:jt,boundary:f,rootBoundary:g,padding:d,flipVariations:D,allowedAutoPlacements:O}):jt)},[]),K=t.rects.reference,H=t.rects.popper,T=new Map,m=!0,y=B[0],I=0;I<B.length;I++){var v=B[I],w=he(v),_=Rr(v)===Ln,ot=[Pt,Ft].indexOf(w)>=0,St=ot?"width":"height",Ct=Pr(t,{placement:v,boundary:f,rootBoundary:g,altBoundary:E,padding:d}),Vt=ot?_?Ut:Nt:_?Ft:Pt;K[St]>H[St]&&(Vt=Li(Vt));var me=Li(Vt),Bt=[];if(i&&Bt.push(Ct[w]<=0),c&&Bt.push(Ct[Vt]<=0,Ct[me]<=0),Bt.every(function(Qt){return Qt})){y=v,m=!1;break}T.set(v,Bt)}if(m)for(var Hn=D?3:1,Wn=function(jt){var ge=B.find(function(Ve){var Yt=T.get(Ve);if(Yt)return Yt.slice(0,jt).every(function(zn){return zn})});if(ge)return y=ge,"break"},ke=Hn;ke>0;ke--){var _n=Wn(ke);if(_n==="break")break}t.placement!==y&&(t.modifiersData[r]._skip=!0,t.placement=y,t.reset=!0)}}const wm={name:"flip",enabled:!0,phase:"main",fn:nA,requiresIfExists:["offset"],data:{_skip:!1}};function Jh(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Zh(n){return[Pt,Ut,Ft,Nt].some(function(t){return n[t]>=0})}function rA(n){var t=n.state,e=n.name,r=t.rects.reference,s=t.rects.popper,i=t.modifiersData.preventOverflow,a=Pr(t,{elementContext:"reference"}),c=Pr(t,{altBoundary:!0}),u=Jh(a,r),d=Jh(c,s,i),f=Zh(u),g=Zh(d);t.modifiersData[e]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":g})}const Am={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rA};function sA(n,t,e){var r=he(n),s=[Nt,Pt].indexOf(r)>=0?-1:1,i=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,a=i[0],c=i[1];return a=a||0,c=(c||0)*s,[Nt,Ut].indexOf(r)>=0?{x:c,y:a}:{x:a,y:c}}function iA(n){var t=n.state,e=n.options,r=n.name,s=e.offset,i=s===void 0?[0,0]:s,a=ul.reduce(function(f,g){return f[g]=sA(g,t.rects,i),f},{}),c=a[t.placement],u=c.x,d=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=a}const bm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:iA};function oA(n){var t=n.state,e=n.name;t.modifiersData[e]=Im({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const vl={name:"popperOffsets",enabled:!0,phase:"read",fn:oA,data:{}};function aA(n){return n==="x"?"y":"x"}function cA(n){var t=n.state,e=n.options,r=n.name,s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!1:a,u=e.boundary,d=e.rootBoundary,f=e.altBoundary,g=e.padding,E=e.tether,b=E===void 0?!0:E,D=e.tetherOffset,O=D===void 0?0:D,P=Pr(t,{boundary:u,rootBoundary:d,padding:g,altBoundary:f}),M=he(t.placement),x=Rr(t.placement),$=!x,B=pl(M),K=aA(B),H=t.modifiersData.popperOffsets,T=t.rects.reference,m=t.rects.popper,y=typeof O=="function"?O(Object.assign({},t.rects,{placement:t.placement})):O,I=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,w={x:0,y:0};if(H){if(i){var _,ot=B==="y"?Pt:Nt,St=B==="y"?Ft:Ut,Ct=B==="y"?"height":"width",Vt=H[B],me=Vt+P[ot],Bt=Vt-P[St],Hn=b?-m[Ct]/2:0,Wn=x===Ln?T[Ct]:m[Ct],ke=x===Ln?-m[Ct]:-T[Ct],_n=t.elements.arrow,Qt=b&&_n?fl(_n):{width:0,height:0},jt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:_m(),ge=jt[ot],Ve=jt[St],Yt=As(0,T[Ct],Qt[Ct]),zn=$?T[Ct]/2-Hn-Yt-ge-I.mainAxis:Wn-Yt-ge-I.mainAxis,Bo=$?-T[Ct]/2+Hn+Yt+Ve+I.mainAxis:ke+Yt+Ve+I.mainAxis,Hr=t.elements.arrow&&zs(t.elements.arrow),Xs=Hr?B==="y"?Hr.clientTop||0:Hr.clientLeft||0:0,Kn=(_=v?.[B])!=null?_:0,Js=Vt+zn-Kn-Xs,jo=Vt+Bo-Kn,Gn=As(b?so(me,Js):me,Vt,b?Pn(Bt,jo):Bt);H[B]=Gn,w[B]=Gn-Vt}if(c){var Qn,Zs=B==="x"?Pt:Nt,gt=B==="x"?Ft:Ut,st=H[K],_e=K==="y"?"height":"width",ti=st+P[Zs],Wr=st-P[gt],zr=[Pt,Nt].indexOf(M)!==-1,Le=(Qn=v?.[K])!=null?Qn:0,Kr=zr?ti:st-T[_e]-m[_e]-Le+I.altAxis,Gr=zr?st+T[_e]+m[_e]-Le-I.altAxis:Wr,Yn=b&&zr?Uw(Kr,st,Gr):As(b?Kr:ti,st,b?Gr:Wr);H[K]=Yn,w[K]=Yn-st}t.modifiersData[r]=w}}const Sm={name:"preventOverflow",enabled:!0,phase:"main",fn:cA,requiresIfExists:["offset"]};function lA(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function uA(n){return n===$t(n)||!Wt(n)?_l(n):lA(n)}function hA(n){var t=n.getBoundingClientRect(),e=Sr(t.width)/n.offsetWidth||1,r=Sr(t.height)/n.offsetHeight||1;return e!==1||r!==1}function dA(n,t,e){e===void 0&&(e=!1);var r=Wt(t),s=Wt(t)&&hA(t),i=pn(t),a=Cr(n,s,e),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!e)&&((pe(t)!=="body"||El(i))&&(c=uA(t)),Wt(t)?(u=Cr(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=yl(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function fA(n){var t=new Map,e=new Set,r=[];n.forEach(function(i){t.set(i.name,i)});function s(i){e.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(c){if(!e.has(c)){var u=t.get(c);u&&s(u)}}),r.push(i)}return n.forEach(function(i){e.has(i.name)||s(i)}),r}function pA(n){var t=fA(n);return pm.reduce(function(e,r){return e.concat(t.filter(function(s){return s.phase===r}))},[])}function mA(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function gA(n){var t=n.reduce(function(e,r){var s=e[r.name];return e[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,e},{});return Object.keys(t).map(function(e){return t[e]})}var td={placement:"bottom",modifiers:[],strategy:"absolute"};function ed(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Lo(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,r=e===void 0?[]:e,s=t.defaultOptions,i=s===void 0?td:s;return function(c,u,d){d===void 0&&(d=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},td,i),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},g=[],E=!1,b={state:f,setOptions:function(M){var x=typeof M=="function"?M(f.options):M;O(),f.options=Object.assign({},i,f.options,x),f.scrollParents={reference:Mn(c)?bs(c):c.contextElement?bs(c.contextElement):[],popper:bs(u)};var $=pA(gA([].concat(r,f.options.modifiers)));return f.orderedModifiers=$.filter(function(B){return B.enabled}),D(),b.update()},forceUpdate:function(){if(!E){var M=f.elements,x=M.reference,$=M.popper;if(ed(x,$)){f.rects={reference:dA(x,zs($),f.options.strategy==="fixed"),popper:fl($)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(I){return f.modifiersData[I.name]=Object.assign({},I.data)});for(var B=0;B<f.orderedModifiers.length;B++){if(f.reset===!0){f.reset=!1,B=-1;continue}var K=f.orderedModifiers[B],H=K.fn,T=K.options,m=T===void 0?{}:T,y=K.name;typeof H=="function"&&(f=H({state:f,options:m,name:y,instance:b})||f)}}}},update:mA(function(){return new Promise(function(P){b.forceUpdate(),P(f)})}),destroy:function(){O(),E=!0}};if(!ed(c,u))return b;b.setOptions(d).then(function(P){!E&&d.onFirstUpdate&&d.onFirstUpdate(P)});function D(){f.orderedModifiers.forEach(function(P){var M=P.name,x=P.options,$=x===void 0?{}:x,B=P.effect;if(typeof B=="function"){var K=B({state:f,name:M,instance:b,options:$}),H=function(){};g.push(K||H)}})}function O(){g.forEach(function(P){return P()}),g=[]}return b}}var _A=Lo(),yA=[gl,vl,ml,dl],EA=Lo({defaultModifiers:yA}),vA=[gl,vl,ml,dl,bm,wm,Sm,vm,Am],Tl=Lo({defaultModifiers:vA});const Cm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:um,afterRead:am,afterWrite:fm,applyStyles:dl,arrow:vm,auto:ko,basePlacements:$r,beforeMain:cm,beforeRead:im,beforeWrite:hm,bottom:Ft,clippingParents:rm,computeStyles:ml,createPopper:Tl,createPopperBase:_A,createPopperLite:EA,detectOverflow:Pr,end:br,eventListeners:gl,flip:wm,hide:Am,left:Nt,main:lm,modifierPhases:pm,offset:bm,placements:ul,popper:or,popperGenerator:Lo,popperOffsets:vl,preventOverflow:Sm,read:om,reference:sm,right:Ut,start:Ln,top:Pt,variationPlacements:oc,viewport:ll,write:dm},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const qe=new Map,_a={set(n,t,e){qe.has(n)||qe.set(n,new Map);const r=qe.get(n);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,e)},get(n,t){return qe.has(n)&&qe.get(n).get(t)||null},remove(n,t){if(!qe.has(n))return;const e=qe.get(n);e.delete(t),e.size===0&&qe.delete(n)}},TA=1e6,IA=1e3,lc="transitionend",Rm=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),wA=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),AA=n=>{do n+=Math.floor(Math.random()*TA);while(document.getElementById(n));return n},bA=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const r=Number.parseFloat(t),s=Number.parseFloat(e);return!r&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*IA)},Pm=n=>{n.dispatchEvent(new Event(lc))},Ie=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),cn=n=>Ie(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Rm(n)):null,Br=n=>{if(!Ie(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const r=n.closest("summary");if(r&&r.parentNode!==e||r===null)return!1}return t},ln=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Nm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Nm(n.parentNode):null},io=()=>{},Ks=n=>{n.offsetHeight},Dm=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ya=[],SA=n=>{document.readyState==="loading"?(ya.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of ya)t()}),ya.push(n)):n()},zt=()=>document.documentElement.dir==="rtl",Gt=n=>{SA(()=>{const t=Dm();if(t){const e=n.NAME,r=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=r,n.jQueryInterface)}})},kt=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,Om=(n,t,e=!0)=>{if(!e){kt(n);return}const s=bA(t)+5;let i=!1;const a=({target:c})=>{c===t&&(i=!0,t.removeEventListener(lc,a),kt(n))};t.addEventListener(lc,a),setTimeout(()=>{i||Pm(t)},s)},Il=(n,t,e,r)=>{const s=n.length;let i=n.indexOf(t);return i===-1?!e&&r?n[s-1]:n[0]:(i+=e?1:-1,r&&(i=(i+s)%s),n[Math.max(0,Math.min(i,s-1))])},CA=/[^.]*(?=\..*)\.|.*/,RA=/\..*/,PA=/::\d+$/,Ea={};let nd=1;const km={mouseenter:"mouseover",mouseleave:"mouseout"},NA=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Vm(n,t){return t&&`${t}::${nd++}`||n.uidEvent||nd++}function Lm(n){const t=Vm(n);return n.uidEvent=t,Ea[t]=Ea[t]||{},Ea[t]}function DA(n,t){return function e(r){return wl(r,{delegateTarget:n}),e.oneOff&&N.off(n,r.type,t),t.apply(n,[r])}}function OA(n,t,e){return function r(s){const i=n.querySelectorAll(t);for(let{target:a}=s;a&&a!==this;a=a.parentNode)for(const c of i)if(c===a)return wl(s,{delegateTarget:a}),r.oneOff&&N.off(n,s.type,t,e),e.apply(a,[s])}}function Mm(n,t,e=null){return Object.values(n).find(r=>r.callable===t&&r.delegationSelector===e)}function xm(n,t,e){const r=typeof t=="string",s=r?e:t||e;let i=Fm(n);return NA.has(i)||(i=n),[r,s,i]}function rd(n,t,e,r,s){if(typeof t!="string"||!n)return;let[i,a,c]=xm(t,e,r);t in km&&(a=(D=>function(O){if(!O.relatedTarget||O.relatedTarget!==O.delegateTarget&&!O.delegateTarget.contains(O.relatedTarget))return D.call(this,O)})(a));const u=Lm(n),d=u[c]||(u[c]={}),f=Mm(d,a,i?e:null);if(f){f.oneOff=f.oneOff&&s;return}const g=Vm(a,t.replace(CA,"")),E=i?OA(n,e,a):DA(n,a);E.delegationSelector=i?e:null,E.callable=a,E.oneOff=s,E.uidEvent=g,d[g]=E,n.addEventListener(c,E,i)}function uc(n,t,e,r,s){const i=Mm(t[e],r,s);i&&(n.removeEventListener(e,i,!!s),delete t[e][i.uidEvent])}function kA(n,t,e,r){const s=t[e]||{};for(const[i,a]of Object.entries(s))i.includes(r)&&uc(n,t,e,a.callable,a.delegationSelector)}function Fm(n){return n=n.replace(RA,""),km[n]||n}const N={on(n,t,e,r){rd(n,t,e,r,!1)},one(n,t,e,r){rd(n,t,e,r,!0)},off(n,t,e,r){if(typeof t!="string"||!n)return;const[s,i,a]=xm(t,e,r),c=a!==t,u=Lm(n),d=u[a]||{},f=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(d).length)return;uc(n,u,a,i,s?e:null);return}if(f)for(const g of Object.keys(u))kA(n,u,g,t.slice(1));for(const[g,E]of Object.entries(d)){const b=g.replace(PA,"");(!c||t.includes(b))&&uc(n,u,a,E.callable,E.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const r=Dm(),s=Fm(t),i=t!==s;let a=null,c=!0,u=!0,d=!1;i&&r&&(a=r.Event(t,e),r(n).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented());const f=wl(new Event(t,{bubbles:c,cancelable:!0}),e);return d&&f.preventDefault(),u&&n.dispatchEvent(f),f.defaultPrevented&&a&&a.preventDefault(),f}};function wl(n,t={}){for(const[e,r]of Object.entries(t))try{n[e]=r}catch{Object.defineProperty(n,e,{configurable:!0,get(){return r}})}return n}function sd(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function va(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const we={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${va(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${va(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of e){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),t[s]=sd(n.dataset[r])}return t},getDataAttribute(n,t){return sd(n.getAttribute(`data-bs-${va(t)}`))}};class Gs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=Ie(e)?we.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...Ie(e)?we.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,s]of Object.entries(e)){const i=t[r],a=Ie(i)?"element":wA(i);if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${s}".`)}}}const VA="5.3.8";class ee extends Gs{constructor(t,e){super(),t=cn(t),t&&(this._element=t,this._config=this._getConfig(e),_a.set(this._element,this.constructor.DATA_KEY,this))}dispose(){_a.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){Om(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return _a.get(cn(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return VA}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Ta=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Rm(e)).join(","):null},U={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let r=n.parentNode.closest(t);for(;r;)e.push(r),r=r.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!ln(e)&&Br(e))},getSelectorFromElement(n){const t=Ta(n);return t&&U.findOne(t)?t:null},getElementFromSelector(n){const t=Ta(n);return t?U.findOne(t):null},getMultipleElementsFromSelector(n){const t=Ta(n);return t?U.find(t):[]}},Mo=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,r=n.NAME;N.on(document,e,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),ln(this))return;const i=U.getElementFromSelector(this)||this.closest(`.${r}`);n.getOrCreateInstance(i)[t]()})},LA="alert",MA="bs.alert",Um=`.${MA}`,xA=`close${Um}`,FA=`closed${Um}`,UA="fade",$A="show";class xo extends ee{static get NAME(){return LA}close(){if(N.trigger(this._element,xA).defaultPrevented)return;this._element.classList.remove($A);const e=this._element.classList.contains(UA);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),N.trigger(this._element,FA),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=xo.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Mo(xo,"close");Gt(xo);const BA="button",jA="bs.button",qA=`.${jA}`,HA=".data-api",WA="active",id='[data-bs-toggle="button"]',zA=`click${qA}${HA}`;class Fo extends ee{static get NAME(){return BA}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(WA))}static jQueryInterface(t){return this.each(function(){const e=Fo.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}N.on(document,zA,id,n=>{n.preventDefault();const t=n.target.closest(id);Fo.getOrCreateInstance(t).toggle()});Gt(Fo);const KA="swipe",jr=".bs.swipe",GA=`touchstart${jr}`,QA=`touchmove${jr}`,YA=`touchend${jr}`,XA=`pointerdown${jr}`,JA=`pointerup${jr}`,ZA="touch",tb="pen",eb="pointer-event",nb=40,rb={endCallback:null,leftCallback:null,rightCallback:null},sb={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class oo extends Gs{constructor(t,e){super(),this._element=t,!(!t||!oo.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return rb}static get DefaultType(){return sb}static get NAME(){return KA}dispose(){N.off(this._element,jr)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),kt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=nb)return;const e=t/this._deltaX;this._deltaX=0,e&&kt(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,XA,t=>this._start(t)),N.on(this._element,JA,t=>this._end(t)),this._element.classList.add(eb)):(N.on(this._element,GA,t=>this._start(t)),N.on(this._element,QA,t=>this._move(t)),N.on(this._element,YA,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===tb||t.pointerType===ZA)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ib="carousel",ob="bs.carousel",mn=`.${ob}`,$m=".data-api",ab="ArrowLeft",cb="ArrowRight",lb=500,us="next",tr="prev",ar="left",Mi="right",ub=`slide${mn}`,Ia=`slid${mn}`,hb=`keydown${mn}`,db=`mouseenter${mn}`,fb=`mouseleave${mn}`,pb=`dragstart${mn}`,mb=`load${mn}${$m}`,gb=`click${mn}${$m}`,Bm="carousel",Ei="active",_b="slide",yb="carousel-item-end",Eb="carousel-item-start",vb="carousel-item-next",Tb="carousel-item-prev",jm=".active",qm=".carousel-item",Ib=jm+qm,wb=".carousel-item img",Ab=".carousel-indicators",bb="[data-bs-slide], [data-bs-slide-to]",Sb='[data-bs-ride="carousel"]',Cb={[ab]:Mi,[cb]:ar},Rb={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Pb={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Qs extends ee{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=U.findOne(Ab,this._element),this._addEventListeners(),this._config.ride===Bm&&this.cycle()}static get Default(){return Rb}static get DefaultType(){return Pb}static get NAME(){return ib}next(){this._slide(us)}nextWhenVisible(){!document.hidden&&Br(this._element)&&this.next()}prev(){this._slide(tr)}pause(){this._isSliding&&Pm(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){N.one(this._element,Ia,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){N.one(this._element,Ia,()=>this.to(t));return}const r=this._getItemIndex(this._getActive());if(r===t)return;const s=t>r?us:tr;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,hb,t=>this._keydown(t)),this._config.pause==="hover"&&(N.on(this._element,db,()=>this.pause()),N.on(this._element,fb,()=>this._maybeEnableCycle())),this._config.touch&&oo.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of U.find(wb,this._element))N.on(r,pb,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(ar)),rightCallback:()=>this._slide(this._directionToOrder(Mi)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),lb+this._config.interval))}};this._swipeHelper=new oo(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Cb[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=U.findOne(jm,this._indicatorsElement);e.classList.remove(Ei),e.removeAttribute("aria-current");const r=U.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(Ei),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const r=this._getActive(),s=t===us,i=e||Il(this._getItems(),r,s,this._config.wrap);if(i===r)return;const a=this._getItemIndex(i),c=b=>N.trigger(this._element,b,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:a});if(c(ub).defaultPrevented||!r||!i)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const f=s?Eb:yb,g=s?vb:Tb;i.classList.add(g),Ks(i),r.classList.add(f),i.classList.add(f);const E=()=>{i.classList.remove(f,g),i.classList.add(Ei),r.classList.remove(Ei,g,f),this._isSliding=!1,c(Ia)};this._queueCallback(E,r,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(_b)}_getActive(){return U.findOne(Ib,this._element)}_getItems(){return U.find(qm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return zt()?t===ar?tr:us:t===ar?us:tr}_orderToDirection(t){return zt()?t===tr?ar:Mi:t===tr?Mi:ar}static jQueryInterface(t){return this.each(function(){const e=Qs.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(document,gb,bb,function(n){const t=U.getElementFromSelector(this);if(!t||!t.classList.contains(Bm))return;n.preventDefault();const e=Qs.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");if(r){e.to(r),e._maybeEnableCycle();return}if(we.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});N.on(window,mb,()=>{const n=U.find(Sb);for(const t of n)Qs.getOrCreateInstance(t)});Gt(Qs);const Nb="collapse",Db="bs.collapse",Ys=`.${Db}`,Ob=".data-api",kb=`show${Ys}`,Vb=`shown${Ys}`,Lb=`hide${Ys}`,Mb=`hidden${Ys}`,xb=`click${Ys}${Ob}`,wa="show",ur="collapse",vi="collapsing",Fb="collapsed",Ub=`:scope .${ur} .${ur}`,$b="collapse-horizontal",Bb="width",jb="height",qb=".collapse.show, .collapse.collapsing",hc='[data-bs-toggle="collapse"]',Hb={parent:null,toggle:!0},Wb={parent:"(null|element)",toggle:"boolean"};class ks extends ee{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=U.find(hc);for(const s of r){const i=U.getSelectorFromElement(s),a=U.find(i).filter(c=>c===this._element);i!==null&&a.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Hb}static get DefaultType(){return Wb}static get NAME(){return Nb}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(qb).filter(c=>c!==this._element).map(c=>ks.getOrCreateInstance(c,{toggle:!1}))),t.length&&t[0]._isTransitioning||N.trigger(this._element,kb).defaultPrevented)return;for(const c of t)c.hide();const r=this._getDimension();this._element.classList.remove(ur),this._element.classList.add(vi),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(vi),this._element.classList.add(ur,wa),this._element.style[r]="",N.trigger(this._element,Vb)},a=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,Lb).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Ks(this._element),this._element.classList.add(vi),this._element.classList.remove(ur,wa);for(const s of this._triggerArray){const i=U.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(vi),this._element.classList.add(ur),N.trigger(this._element,Mb)};this._element.style[e]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(wa)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=cn(t.parent),t}_getDimension(){return this._element.classList.contains($b)?Bb:jb}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(hc);for(const e of t){const r=U.getElementFromSelector(e);r&&this._addAriaAndCollapsedClass([e],this._isShown(r))}}_getFirstLevelChildren(t){const e=U.find(Ub,this._config.parent);return U.find(t,this._config.parent).filter(r=>!e.includes(r))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle(Fb,!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=ks.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t]()}})}}N.on(document,xb,hc,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of U.getMultipleElementsFromSelector(this))ks.getOrCreateInstance(t,{toggle:!1}).toggle()});Gt(ks);const od="dropdown",zb="bs.dropdown",jn=`.${zb}`,Al=".data-api",Kb="Escape",ad="Tab",Gb="ArrowUp",cd="ArrowDown",Qb=2,Yb=`hide${jn}`,Xb=`hidden${jn}`,Jb=`show${jn}`,Zb=`shown${jn}`,Hm=`click${jn}${Al}`,Wm=`keydown${jn}${Al}`,tS=`keyup${jn}${Al}`,cr="show",eS="dropup",nS="dropend",rS="dropstart",sS="dropup-center",iS="dropdown-center",bn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',oS=`${bn}.${cr}`,xi=".dropdown-menu",aS=".navbar",cS=".navbar-nav",lS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",uS=zt()?"top-end":"top-start",hS=zt()?"top-start":"top-end",dS=zt()?"bottom-end":"bottom-start",fS=zt()?"bottom-start":"bottom-end",pS=zt()?"left-start":"right-start",mS=zt()?"right-start":"left-start",gS="top",_S="bottom",yS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ES={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class de extends ee{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=U.next(this._element,xi)[0]||U.prev(this._element,xi)[0]||U.findOne(xi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return yS}static get DefaultType(){return ES}static get NAME(){return od}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ln(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,Jb,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(cS))for(const r of[].concat(...document.body.children))N.on(r,"mouseover",io);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(cr),this._element.classList.add(cr),N.trigger(this._element,Zb,t)}}hide(){if(ln(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,Yb,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))N.off(r,"mouseover",io);this._popper&&this._popper.destroy(),this._menu.classList.remove(cr),this._element.classList.remove(cr),this._element.setAttribute("aria-expanded","false"),we.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Xb,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Ie(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${od.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Cm>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Ie(this._config.reference)?t=cn(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Tl(t,this._menu,e)}_isShown(){return this._menu.classList.contains(cr)}_getPlacement(){const t=this._parent;if(t.classList.contains(nS))return pS;if(t.classList.contains(rS))return mS;if(t.classList.contains(sS))return gS;if(t.classList.contains(iS))return _S;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(eS)?e?hS:uS:e?fS:dS}_detectNavbar(){return this._element.closest(aS)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(we.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...kt(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const r=U.find(lS,this._menu).filter(s=>Br(s));r.length&&Il(r,e,t===cd,!r.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=de.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Qb||t.type==="keyup"&&t.key!==ad)return;const e=U.find(oS);for(const r of e){const s=de.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=t.composedPath(),a=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!a||s._config.autoClose==="outside"&&a||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ad||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const c={relatedTarget:s._element};t.type==="click"&&(c.clickEvent=t),s._completeHide(c)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),r=t.key===Kb,s=[Gb,cd].includes(t.key);if(!s&&!r||e&&!r)return;t.preventDefault();const i=this.matches(bn)?this:U.prev(this,bn)[0]||U.next(this,bn)[0]||U.findOne(bn,t.delegateTarget.parentNode),a=de.getOrCreateInstance(i);if(s){t.stopPropagation(),a.show(),a._selectMenuItem(t);return}a._isShown()&&(t.stopPropagation(),a.hide(),i.focus())}}N.on(document,Wm,bn,de.dataApiKeydownHandler);N.on(document,Wm,xi,de.dataApiKeydownHandler);N.on(document,Hm,de.clearMenus);N.on(document,tS,de.clearMenus);N.on(document,Hm,bn,function(n){n.preventDefault(),de.getOrCreateInstance(this).toggle()});Gt(de);const zm="backdrop",vS="fade",ld="show",ud=`mousedown.bs.${zm}`,TS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},IS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Km extends Gs{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return TS}static get DefaultType(){return IS}static get NAME(){return zm}show(t){if(!this._config.isVisible){kt(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Ks(e),e.classList.add(ld),this._emulateAnimation(()=>{kt(t)})}hide(t){if(!this._config.isVisible){kt(t);return}this._getElement().classList.remove(ld),this._emulateAnimation(()=>{this.dispose(),kt(t)})}dispose(){this._isAppended&&(N.off(this._element,ud),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(vS),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=cn(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,ud,()=>{kt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Om(t,this._getElement(),this._config.isAnimated)}}const wS="focustrap",AS="bs.focustrap",ao=`.${AS}`,bS=`focusin${ao}`,SS=`keydown.tab${ao}`,CS="Tab",RS="forward",hd="backward",PS={autofocus:!0,trapElement:null},NS={autofocus:"boolean",trapElement:"element"};class Gm extends Gs{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return PS}static get DefaultType(){return NS}static get NAME(){return wS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,ao),N.on(document,bS,t=>this._handleFocusin(t)),N.on(document,SS,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,ao))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const r=U.focusableChildren(e);r.length===0?e.focus():this._lastTabNavDirection===hd?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===CS&&(this._lastTabNavDirection=t.shiftKey?hd:RS)}}const dd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",fd=".sticky-top",Ti="padding-right",pd="margin-right";class dc{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ti,e=>e+t),this._setElementAttributes(dd,Ti,e=>e+t),this._setElementAttributes(fd,pd,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ti),this._resetElementAttributes(dd,Ti),this._resetElementAttributes(fd,pd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,r){const s=this.getWidth(),i=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+s)return;this._saveInitialAttribute(a,e);const c=window.getComputedStyle(a).getPropertyValue(e);a.style.setProperty(e,`${r(Number.parseFloat(c))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,e){const r=t.style.getPropertyValue(e);r&&we.setDataAttribute(t,e,r)}_resetElementAttributes(t,e){const r=s=>{const i=we.getDataAttribute(s,e);if(i===null){s.style.removeProperty(e);return}we.removeDataAttribute(s,e),s.style.setProperty(e,i)};this._applyManipulationCallback(t,r)}_applyManipulationCallback(t,e){if(Ie(t)){e(t);return}for(const r of U.find(t,this._element))e(r)}}const DS="modal",OS="bs.modal",Kt=`.${OS}`,kS=".data-api",VS="Escape",LS=`hide${Kt}`,MS=`hidePrevented${Kt}`,Qm=`hidden${Kt}`,Ym=`show${Kt}`,xS=`shown${Kt}`,FS=`resize${Kt}`,US=`click.dismiss${Kt}`,$S=`mousedown.dismiss${Kt}`,BS=`keydown.dismiss${Kt}`,jS=`click${Kt}${kS}`,md="modal-open",qS="fade",gd="show",Aa="modal-static",HS=".modal.show",WS=".modal-dialog",zS=".modal-body",KS='[data-bs-toggle="modal"]',GS={backdrop:!0,focus:!0,keyboard:!0},QS={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Nr extends ee{constructor(t,e){super(t,e),this._dialog=U.findOne(WS,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new dc,this._addEventListeners()}static get Default(){return GS}static get DefaultType(){return QS}static get NAME(){return DS}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,Ym,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(md),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||N.trigger(this._element,LS).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(gd),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){N.off(window,Kt),N.off(this._dialog,Kt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Km({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Gm({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=U.findOne(zS,this._dialog);e&&(e.scrollTop=0),Ks(this._element),this._element.classList.add(gd);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,xS,{relatedTarget:t})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,BS,t=>{if(t.key===VS){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),N.on(window,FS,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),N.on(this._element,$S,t=>{N.one(this._element,US,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(md),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,Qm)})}_isAnimated(){return this._element.classList.contains(qS)}_triggerBackdropTransition(){if(N.trigger(this._element,MS).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(Aa)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Aa),this._queueCallback(()=>{this._element.classList.remove(Aa),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),r=e>0;if(r&&!t){const s=zt()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!r&&t){const s=zt()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const r=Nr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t](e)}})}}N.on(document,jS,KS,function(n){const t=U.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),N.one(t,Ym,s=>{s.defaultPrevented||N.one(t,Qm,()=>{Br(this)&&this.focus()})});const e=U.findOne(HS);e&&Nr.getInstance(e).hide(),Nr.getOrCreateInstance(t).toggle(this)});Mo(Nr);Gt(Nr);const YS="offcanvas",XS="bs.offcanvas",Oe=`.${XS}`,Xm=".data-api",JS=`load${Oe}${Xm}`,ZS="Escape",_d="show",yd="showing",Ed="hiding",tC="offcanvas-backdrop",Jm=".offcanvas.show",eC=`show${Oe}`,nC=`shown${Oe}`,rC=`hide${Oe}`,vd=`hidePrevented${Oe}`,Zm=`hidden${Oe}`,sC=`resize${Oe}`,iC=`click${Oe}${Xm}`,oC=`keydown.dismiss${Oe}`,aC='[data-bs-toggle="offcanvas"]',cC={backdrop:!0,keyboard:!0,scroll:!1},lC={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class un extends ee{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return cC}static get DefaultType(){return lC}static get NAME(){return YS}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||N.trigger(this._element,eC,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new dc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(yd);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(_d),this._element.classList.remove(yd),N.trigger(this._element,nC,{relatedTarget:t})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||N.trigger(this._element,rC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ed),this._backdrop.hide();const e=()=>{this._element.classList.remove(_d,Ed),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new dc().reset(),N.trigger(this._element,Zm)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){N.trigger(this._element,vd);return}this.hide()},e=!!this._config.backdrop;return new Km({className:tC,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Gm({trapElement:this._element})}_addEventListeners(){N.on(this._element,oC,t=>{if(t.key===ZS){if(this._config.keyboard){this.hide();return}N.trigger(this._element,vd)}})}static jQueryInterface(t){return this.each(function(){const e=un.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}N.on(document,iC,aC,function(n){const t=U.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),ln(this))return;N.one(t,Zm,()=>{Br(this)&&this.focus()});const e=U.findOne(Jm);e&&e!==t&&un.getInstance(e).hide(),un.getOrCreateInstance(t).toggle(this)});N.on(window,JS,()=>{for(const n of U.find(Jm))un.getOrCreateInstance(n).show()});N.on(window,sC,()=>{for(const n of U.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&un.getOrCreateInstance(n).hide()});Mo(un);Gt(un);const uC=/^aria-[\w-]*$/i,tg={"*":["class","dir","id","lang","role",uC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},hC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),dC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,fC=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?hC.has(e)?!!dC.test(n.nodeValue):!0:t.filter(r=>r instanceof RegExp).some(r=>r.test(e))};function pC(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const a of i){const c=a.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){a.remove();continue}const u=[].concat(...a.attributes),d=[].concat(t["*"]||[],t[c]||[]);for(const f of u)fC(f,d)||a.removeAttribute(f.nodeName)}return s.body.innerHTML}const mC="TemplateFactory",gC={allowList:tg,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},_C={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},yC={entry:"(string|element|function|null)",selector:"(string|element)"};class EC extends Gs{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return gC}static get DefaultType(){return _C}static get NAME(){return mC}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(t,i,s);const e=t.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&e.classList.add(...r.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,r]of Object.entries(t))super._typeCheckConfig({selector:e,entry:r},yC)}_setContent(t,e,r){const s=U.findOne(r,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(Ie(e)){this._putElementInTemplate(cn(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?pC(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return kt(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const vC="tooltip",TC=new Set(["sanitize","allowList","sanitizeFn"]),ba="fade",IC="modal",Ii="show",wC=".tooltip-inner",Td=`.${IC}`,Id="hide.bs.modal",hs="hover",Sa="focus",Ca="click",AC="manual",bC="hide",SC="hidden",CC="show",RC="shown",PC="inserted",NC="click",DC="focusin",OC="focusout",kC="mouseenter",VC="mouseleave",LC={AUTO:"auto",TOP:"top",RIGHT:zt()?"left":"right",BOTTOM:"bottom",LEFT:zt()?"right":"left"},MC={allowList:tg,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},xC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class qr extends ee{constructor(t,e){if(typeof Cm>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return MC}static get DefaultType(){return xC}static get NAME(){return vC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(Td),Id,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=N.trigger(this._element,this.constructor.eventName(CC)),r=(Nm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),N.trigger(this._element,this.constructor.eventName(PC))),this._popper=this._createPopper(s),s.classList.add(Ii),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))N.on(c,"mouseover",io);const a=()=>{N.trigger(this._element,this.constructor.eventName(RC)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||N.trigger(this._element,this.constructor.eventName(bC)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ii),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))N.off(s,"mouseover",io);this._activeTrigger[Ca]=!1,this._activeTrigger[Sa]=!1,this._activeTrigger[hs]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName(SC)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ba,Ii),e.classList.add(`bs-${this.constructor.NAME}-auto`);const r=AA(this.constructor.NAME).toString();return e.setAttribute("id",r),this._isAnimated()&&e.classList.add(ba),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new EC({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[wC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ba)}_isShown(){return this.tip&&this.tip.classList.contains(Ii)}_createPopper(t){const e=kt(this._config.placement,[this,t,this._element]),r=LC[e.toUpperCase()];return Tl(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return kt(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...e,...kt(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")N.on(this._element,this.constructor.eventName(NC),this._config.selector,r=>{const s=this._initializeOnDelegatedTarget(r);s._activeTrigger[Ca]=!(s._isShown()&&s._activeTrigger[Ca]),s.toggle()});else if(e!==AC){const r=e===hs?this.constructor.eventName(kC):this.constructor.eventName(DC),s=e===hs?this.constructor.eventName(VC):this.constructor.eventName(OC);N.on(this._element,r,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusin"?Sa:hs]=!0,a._enter()}),N.on(this._element,s,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusout"?Sa:hs]=a._element.contains(i.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(Td),Id,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=we.getDataAttributes(this._element);for(const r of Object.keys(e))TC.has(r)&&delete e[r];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:cn(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,r]of Object.entries(this._config))this.constructor.Default[e]!==r&&(t[e]=r);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=qr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Gt(qr);const FC="popover",UC=".popover-header",$C=".popover-body",BC={...qr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},jC={...qr.DefaultType,content:"(null|string|element|function)"};class bl extends qr{static get Default(){return BC}static get DefaultType(){return jC}static get NAME(){return FC}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[UC]:this._getTitle(),[$C]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=bl.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Gt(bl);const qC="scrollspy",HC="bs.scrollspy",Sl=`.${HC}`,WC=".data-api",zC=`activate${Sl}`,wd=`click${Sl}`,KC=`load${Sl}${WC}`,GC="dropdown-item",er="active",QC='[data-bs-spy="scroll"]',Ra="[href]",YC=".nav, .list-group",Ad=".nav-link",XC=".nav-item",JC=".list-group-item",ZC=`${Ad}, ${XC} > ${Ad}, ${JC}`,tR=".dropdown",eR=".dropdown-toggle",nR={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},rR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Uo extends ee{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return nR}static get DefaultType(){return rR}static get NAME(){return qC}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=cn(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,wd),N.on(this._config.target,wd,Ra,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const r=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=a=>this._targetLinks.get(`#${a.target.id}`),r=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(e(a))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const a of t){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(a));continue}const c=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&c){if(r(a),!s)return;continue}!i&&!c&&r(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=U.find(Ra,this._config.target);for(const e of t){if(!e.hash||ln(e))continue;const r=U.findOne(decodeURI(e.hash),this._element);Br(r)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,r))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(er),this._activateParents(t),N.trigger(this._element,zC,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(GC)){U.findOne(eR,t.closest(tR)).classList.add(er);return}for(const e of U.parents(t,YC))for(const r of U.prev(e,ZC))r.classList.add(er)}_clearActiveClass(t){t.classList.remove(er);const e=U.find(`${Ra}.${er}`,t);for(const r of e)r.classList.remove(er)}static jQueryInterface(t){return this.each(function(){const e=Uo.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(window,KC,()=>{for(const n of U.find(QC))Uo.getOrCreateInstance(n)});Gt(Uo);const sR="tab",iR="bs.tab",qn=`.${iR}`,oR=`hide${qn}`,aR=`hidden${qn}`,cR=`show${qn}`,lR=`shown${qn}`,uR=`click${qn}`,hR=`keydown${qn}`,dR=`load${qn}`,fR="ArrowLeft",bd="ArrowRight",pR="ArrowUp",Sd="ArrowDown",Pa="Home",Cd="End",Sn="active",Rd="fade",Na="show",mR="dropdown",eg=".dropdown-toggle",gR=".dropdown-menu",Da=`:not(${eg})`,_R='.list-group, .nav, [role="tablist"]',yR=".nav-item, .list-group-item",ER=`.nav-link${Da}, .list-group-item${Da}, [role="tab"]${Da}`,ng='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Oa=`${ER}, ${ng}`,vR=`.${Sn}[data-bs-toggle="tab"], .${Sn}[data-bs-toggle="pill"], .${Sn}[data-bs-toggle="list"]`;class Dr extends ee{constructor(t){super(t),this._parent=this._element.closest(_R),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,hR,e=>this._keydown(e)))}static get NAME(){return sR}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),r=e?N.trigger(e,oR,{relatedTarget:t}):null;N.trigger(t,cR,{relatedTarget:e}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Sn),this._activate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Na);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,lR,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(Rd))}_deactivate(t,e){if(!t)return;t.classList.remove(Sn),t.blur(),this._deactivate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Na);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,aR,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(Rd))}_keydown(t){if(![fR,bd,pR,Sd,Pa,Cd].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!ln(s));let r;if([Pa,Cd].includes(t.key))r=e[t.key===Pa?0:e.length-1];else{const s=[bd,Sd].includes(t.key);r=Il(e,t.target,s,!0)}r&&(r.focus({preventScroll:!0}),Dr.getOrCreateInstance(r).show())}_getChildren(){return U.find(Oa,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const r of e)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),r=this._getOuterElement(t);t.setAttribute("aria-selected",e),r!==t&&this._setAttributeIfNotExists(r,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=U.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const r=this._getOuterElement(t);if(!r.classList.contains(mR))return;const s=(i,a)=>{const c=U.findOne(i,r);c&&c.classList.toggle(a,e)};s(eg,Sn),s(gR,Na),r.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,r){t.hasAttribute(e)||t.setAttribute(e,r)}_elemIsActive(t){return t.classList.contains(Sn)}_getInnerElement(t){return t.matches(Oa)?t:U.findOne(Oa,t)}_getOuterElement(t){return t.closest(yR)||t}static jQueryInterface(t){return this.each(function(){const e=Dr.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(document,uR,ng,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!ln(this)&&Dr.getOrCreateInstance(this).show()});N.on(window,dR,()=>{for(const n of U.find(vR))Dr.getOrCreateInstance(n)});Gt(Dr);const TR="toast",IR="bs.toast",gn=`.${IR}`,wR=`mouseover${gn}`,AR=`mouseout${gn}`,bR=`focusin${gn}`,SR=`focusout${gn}`,CR=`hide${gn}`,RR=`hidden${gn}`,PR=`show${gn}`,NR=`shown${gn}`,DR="fade",Pd="hide",wi="show",Ai="showing",OR={animation:"boolean",autohide:"boolean",delay:"number"},kR={animation:!0,autohide:!0,delay:5e3};class $o extends ee{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return kR}static get DefaultType(){return OR}static get NAME(){return TR}show(){if(N.trigger(this._element,PR).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(DR);const e=()=>{this._element.classList.remove(Ai),N.trigger(this._element,NR),this._maybeScheduleHide()};this._element.classList.remove(Pd),Ks(this._element),this._element.classList.add(wi,Ai),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||N.trigger(this._element,CR).defaultPrevented)return;const e=()=>{this._element.classList.add(Pd),this._element.classList.remove(Ai,wi),N.trigger(this._element,RR)};this._element.classList.add(Ai),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(wi),super.dispose()}isShown(){return this._element.classList.contains(wi)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const r=t.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,wR,t=>this._onInteraction(t,!0)),N.on(this._element,AR,t=>this._onInteraction(t,!1)),N.on(this._element,bR,t=>this._onInteraction(t,!0)),N.on(this._element,SR,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=$o.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Mo($o);Gt($o);function VR(){}document.addEventListener("DOMContentLoaded",VR);export{tP as a,GR as b,BR as c,yw as d,HR as e,JR as f,WR as g,XR as h,ZR as i,FR as j,MR as k,LR as l,xR as m,zR as n,QR as o,UR as p,jR as q,YR as s,KR as u,qR as w};
