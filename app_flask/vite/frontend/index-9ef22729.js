(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Be=(e,t)=>e===t,se=Symbol("solid-proxy"),qe=typeof Proxy=="function",H={equals:Be};let Fe=Pe;const T=1,Q=2,pe={owned:null,cleanups:null,context:null,owner:null};var d=null;let te=null,Ue=null,g=null,S=null,O=null,Z=0;function ge(e,t){const n=g,s=d,r=e.length===0,i=t===void 0?s:t,l=r?pe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>x(()=>U(l)));d=l,g=null;try{return R(o,!0)}finally{g=n,d=s}}function B(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),ve(n,r));return[be.bind(n),s]}function F(e,t,n){const s=Se(e,t,!1,T);z(s)}function A(e,t,n){n=n?Object.assign({},H,n):H;const s=Se(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,z(s),be.bind(s)}function x(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function ye(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let a=0;a<e.length;a++)o[a]=e[a]()}else o=e();if(i)return i=!1,l;const u=x(()=>t(o,r,l));return r=o,u}}function me(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function De(){return d}function Ke(e,t){const n=d,s=g;d=e,g=null;try{return R(t,!0)}catch(r){ce(r)}finally{d=n,g=s}}function Me(e){const t=g,n=d;return Promise.resolve().then(()=>{g=t,d=n;let s;return R(e,!1),g=d=null,s?s.done:void 0})}function we(e,t){const n=Symbol("context");return{id:n,Provider:Xe(n),defaultValue:e}}function le(e){let t;return d&&d.context&&(t=d.context[e.id])!==void 0?t:e.defaultValue}function ue(e){const t=A(e),n=A(()=>oe(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function be(){if(this.sources&&this.state)if(this.state===T)z(this);else{const e=S;S=null,R(()=>J(this),!1),S=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function ve(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&R(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=te&&te.running;l&&te.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?S.push(i):O.push(i),i.observers&&xe(i)),l||(i.state=T)}if(S.length>1e6)throw S=[],new Error},!1)),t}function z(e){if(!e.fn)return;U(e);const t=Z;Ge(e,e.value,t)}function Ge(e,t,n){let s;const r=d,i=g;g=d=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=T,e.owned&&e.owned.forEach(U),e.owned=null),e.updatedAt=n+1,ce(l)}finally{g=i,d=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ve(e,s):e.value=s,e.updatedAt=n)}function Se(e,t,n,s=T,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==pe&&(d.owned?d.owned.push(i):d.owned=[i]),i}function Ae(e){if(e.state===0)return;if(e.state===Q)return J(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===T)z(e);else if(e.state===Q){const s=S;S=null,R(()=>J(e,t[0]),!1),S=s}}function R(e,t){if(S)return e();let n=!1;t||(S=[]),O?n=!0:O=[],Z++;try{const s=e();return We(n),s}catch(s){n||(O=null),S=null,ce(s)}}function We(e){if(S&&(Pe(S),S=null),e)return;const t=O;O=null,t.length&&R(()=>Fe(t),!1)}function Pe(e){for(let t=0;t<e.length;t++)Ae(e[t])}function J(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===T?s!==t&&(!s.updatedAt||s.updatedAt<Z)&&Ae(s):r===Q&&J(s,t)}}}function xe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Q,n.pure?S.push(n):O.push(n),n.observers&&xe(n))}}function U(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)U(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)U(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ce(e,t=d){throw Ve(e)}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=oe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Xe(e,t){return function(s){let r;return F(()=>r=x(()=>(d.context={...d.context,[e]:s.value},ue(()=>s.children))),void 0),r}}function P(e,t){return x(()=>e(t||{}))}function V(){return!0}const He={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return t===se?!0:e.has(t)},set:V,deleteProperty:V,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:V,deleteProperty:V}},ownKeys(e){return e.keys()}};function ne(e){return(e=typeof e=="function"?e():e)?e:{}}function Qe(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Je(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&se in o,e[l]=typeof o=="function"?(t=!0,A(o)):o}if(qe&&t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const u=ne(e[o])[l];if(u!==void 0)return u}},has(l){for(let o=e.length-1;o>=0;o--)if(l in ne(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(ne(e[o])));return[...new Set(l)]}},He);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const u=Object.getOwnPropertyNames(o);for(let a=u.length-1;a>=0;a--){const c=u[a];if(c==="__proto__"||c==="constructor")continue;const f=Object.getOwnPropertyDescriptor(o,c);if(!s[c])s[c]=f.get?{enumerable:!0,configurable:!0,get:Qe.bind(n[c]=[f.get.bind(o)])}:f.value!==void 0?f:void 0;else{const h=n[c];h&&(f.get?h.push(f.get.bind(o)):f.value!==void 0&&h.push(()=>f.value))}}}const r={},i=Object.keys(s);for(let l=i.length-1;l>=0;l--){const o=i[l],u=s[o];u&&u.get?Object.defineProperty(r,o,u):r[o]=u?u.value:void 0}return r}const Ye=e=>`Stale read from <${e}>.`;function Ee(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return A(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?x(()=>r(t?s:()=>{if(!x(n))throw Ye("Show");return e.when})):r}return e.fallback},void 0,void 0)}function Ze(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,u=t[r-1].nextSibling,a=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const c=i<s?o?n[o-1].nextSibling:n[i-o]:u;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[r]=n[i]}else{if(!a){a=new Map;let f=o;for(;f<i;)a.set(n[f],f++)}const c=a.get(t[l]);if(c!=null)if(o<c&&c<i){let f=l,h=1,w;for(;++f<r&&f<i&&!((w=a.get(t[f]))==null||w!==c+h);)h++;if(h>c-o){const b=t[l];for(;o<c;)e.insertBefore(n[o++],b)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const he="_$DX_DELEGATE";function ze(e,t,n,s={}){let r;return ge(i=>{r=i,t===document?e():nt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function et(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>x(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function Ce(e,t=window.document){const n=t[he]||(t[he]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,rt))}}function tt(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function nt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Y(e,t,s,n);F(r=>Y(e,t(),r,n),s)}function rt(e){let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,i=u=>Object.defineProperty(e,"target",{configurable:!0,value:u}),l=()=>{const u=t[n];if(u&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?u.call(t,a,e):u.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const u=e.composedPath();i(u[0]);for(let a=0;a<u.length-2&&(t=u[a],!!l());a++){if(t._$host){t=t._$host,o();break}if(t.parentNode===r)break}}else o();i(s)}function Y(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=j(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=j(e,n,s);else{if(i==="function")return F(()=>{let o=t();for(;typeof o=="function";)o=o();n=Y(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(ie(o,t,n,r))return F(()=>n=Y(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=j(e,n,s),l)return n}else u?n.length===0?de(e,o,s):Ze(e,n,o):(n&&j(e),de(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=j(e,n,s,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ie(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],u=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=ie(e,o,u)||r;else if(a==="function")if(s){for(;typeof o=="function";)o=o();r=ie(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||r}else e.push(o),r=!0;else{const c=String(o);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return r}function de(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function j(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const u=o.parentNode===e;!i&&!l?u?e.replaceChild(r,o):e.insertBefore(r,n):u&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const st=!1;function ot(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function it([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function lt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function ut(e,t){const n=lt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function ct(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=it(B(i(e()),{equals:(o,u)=>o.value===u.value}),void 0,o=>(!r&&t(o),o));return n&&me(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function at(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:B({value:""})};return e}function ft(){return ct(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),ut(window.location.hash.slice(1),n)},e=>ot(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function ht(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:u=>{u&&(n=!0),o.navigate(r,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const dt=/^(?:[a-z0-9]+:)?\/\//i,pt=/^\/+|(\/)\/+$/g;function q(e,t=!1){const n=e.replace(pt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function X(e,t,n){if(dt.test(t))return;const s=q(e),r=n&&q(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+q(t,!i)}function gt(e,t){if(e==null)throw new Error(t);return e}function $e(e,t){return q(e).replace(/\/*(\*.*)?$/g,"")+q(t)}function yt(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function mt(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),l=i.length;return o=>{const u=o.split("/").filter(Boolean),a=u.length-l;if(a<0||a>0&&r===void 0&&!t)return null;const c={path:l?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<l;h++){const w=i[h],b=u[h],y=w[0]===":",$=y?w.slice(1):w;if(y&&re(b,f($)))c.params[$]=b;else if(y||!re(b,w))return null;c.path+=`/${b}`}if(r){const h=a?u.slice(-a).join("/"):"";if(re(h,f(r)))c.params[r]=h;else return null}return c}}function re(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function wt(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function Oe(e){const t=new Map,n=De();return new Proxy({},{get(s,r){return t.has(r)||Ke(n,()=>t.set(r,A(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Te(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Te(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const bt=100,Re=we(),ee=we(),_e=()=>gt(le(Re),"Make sure your app is wrapped in a <Router />");let D;const Le=()=>D||le(ee)||_e().base;function vt(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>P(s,{}):()=>{const{element:u}=e;return u===void 0&&n?P(n,{}):u},preload:e.component?s.preload:e.preload,data:r};return je(e.path).reduce((u,a)=>{for(const c of Te(a)){const f=$e(t,c),h=l?f:f.split("/*",1)[0];u.push({...o,originalPath:c,pattern:h,matcher:mt(h,!l,e.matchFilters)})}return u},[])}function St(e,t=0){return{routes:e,score:wt(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function je(e){return Array.isArray(e)?e:[e]}function ke(e,t="",n,s=[],r=[]){const i=je(e);for(let l=0,o=i.length;l<o;l++){const u=i[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=vt(u,t,n);for(const c of a){s.push(c);const f=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!f)ke(u.children,c.pattern,n,s,r);else{const h=St([...s],r.length);r.push(h)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function At(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Pt(e,t){const n=new URL("http://sar"),s=A(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),r=A(()=>s().pathname),i=A(()=>s().search,!0),l=A(()=>s().hash),o=A(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Oe(ye(i,()=>yt(s())))}}function xt(e,t="",n,s){const{signal:[r,i],utils:l={}}=at(e),o=l.parsePath||(m=>m),u=l.renderPath||(m=>m),a=l.beforeLeave||ht(),c=X("",t),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[h,w]=B(!1),b=async m=>{w(!0);try{await Me(m)}finally{w(!1)}},[y,$]=B(r().value),[_,K]=B(r().state),M=Pt(y,_),k=[],L={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(m){return X(c,m)}};if(n)try{D=L,L.data=n({data:void 0,params:{},location:M,navigate:fe(L)})}finally{D=void 0}function ae(m,p,v){x(()=>{if(typeof p=="number"){p&&(l.go?a.confirm(p,v)&&l.go(p):console.warn("Router integration does not support relative routing"));return}const{replace:G,resolve:W,scroll:E,state:N}={replace:!1,resolve:!0,scroll:!0,...v},C=W?m.resolvePath(p):X("",p);if(C===void 0)throw new Error(`Path '${p}' is not a routable path`);if(k.length>=bt)throw new Error("Too many redirects");const I=y();if((C!==I||N!==_())&&!st){if(a.confirm(C,v)){const Ie=k.push({value:I,replace:G,scroll:E,state:_()});b(()=>{$(C),K(N)}).then(()=>{k.length===Ie&&Ne({value:C,state:N})})}}})}function fe(m){return m=m||le(ee)||L,(p,v)=>ae(m,p,v)}function Ne(m){const p=k[0];p&&((m.value!==p.value||m.state!==p.state)&&i({...m,replace:p.replace,scroll:p.scroll}),k.length=0)}F(()=>{const{value:m,state:p}=r();x(()=>{m!==y()&&b(()=>{$(m),K(p)})})});{let m=function(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const v=p.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!v||!v.hasAttribute("link"))return;const G=v.href;if(v.target||!G&&!v.hasAttribute("state"))return;const W=(v.getAttribute("rel")||"").split(/\s+/);if(v.hasAttribute("download")||W&&W.includes("external"))return;const E=new URL(G);if(E.origin!==window.location.origin||c&&E.pathname&&!E.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const N=o(E.pathname+E.search+E.hash),C=v.getAttribute("state");p.preventDefault(),ae(L,N,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:C&&JSON.parse(C)})};var kt=m;Ce(["click"]),document.addEventListener("click",m),me(()=>document.removeEventListener("click",m))}return{base:L,out:f,location:M,isRouting:h,renderPath:u,parsePath:o,navigatorFactory:fe,beforeLeave:a}}function Et(e,t,n,s,r){const{base:i,location:l,navigatorFactory:o}=e,{pattern:u,element:a,preload:c,data:f}=s().route,h=A(()=>s().path);c&&c();const w={parent:t,pattern:u,get child(){return n()},path:h,params:r,data:t.data,outlet:a,resolvePath(b){return X(i.path(),b,h())}};if(f)try{D=w,w.data=f({data:t.data,params:r,location:l,navigate:o(w)})}finally{D=void 0}return w}const Ct=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||ft(),o=xt(l,s,r);return P(Re.Provider,{value:o,get children(){return e.children}})},$t=e=>{const t=_e(),n=Le(),s=ue(()=>e.children),r=A(()=>ke(s(),$e(n.pattern,e.base||""),Tt)),i=A(()=>At(r(),t.location.pathname)),l=Oe(()=>{const c=i(),f={};for(let h=0;h<c.length;h++)Object.assign(f,c[h].params);return f});t.out&&t.out.matches.push(i().map(({route:c,path:f,params:h})=>({originalPath:c.originalPath,pattern:c.pattern,path:f,params:h})));const o=[];let u;const a=A(ye(i,(c,f,h)=>{let w=f&&c.length===f.length;const b=[];for(let y=0,$=c.length;y<$;y++){const _=f&&f[y],K=c[y];h&&_&&K.route.key===_.route.key?b[y]=h[y]:(w=!1,o[y]&&o[y](),ge(M=>{o[y]=M,b[y]=Et(t,b[y-1]||n,()=>a()[y+1],()=>i()[y],l)}))}return o.splice(c.length).forEach(y=>y()),h&&w?h:(u=b[0],b)}));return P(Ee,{get when(){return a()&&u},keyed:!0,children:c=>P(ee.Provider,{value:c,get children(){return c.outlet()}})})},Ot=e=>{const t=ue(()=>e.children);return Je(e,{get children(){return t()}})},Tt=()=>{const e=Le();return P(Ee,{get when(){return e.child},keyed:!0,children:t=>P(ee.Provider,{value:t,get children(){return t.outlet()}})})},Rt="/--vite--/frontend/ili-85e34484.gif";var _t=et("<div class=container><h1>Flask-Vite-Transporter 🚚</h1><p class=pt-2>Image Asset Example</p><p>👇</p><img width=100 alt=ili><small>🥞 Vite, SolidJS, TailwindCSS</small><hr><small class=mt-4>Demo tests (open browser inspect console)</small><button class=button>API Flask</button><button class=button>API Flask Session</button><button class=button>API Quart</button><button class=button>API Quart Session");function Lt(){function e(){fetch("http://127.0.0.1:5001/api",{method:"GET",headers:{"Content-Type":"application/json"}}).then(r=>r.json()).then(r=>{console.log(r)})}function t(){fetch("http://127.0.0.1:5001/api/session",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(r=>r.json()).then(r=>{console.log(r)})}function n(){fetch("http://127.0.0.1:5002/api",{method:"GET",headers:{"Content-Type":"application/json"}}).then(r=>r.json()).then(r=>{console.log(r)})}function s(){fetch("http://127.0.0.1:5002/api/session",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(r=>r.json()).then(r=>{console.log(r)})}return(()=>{var r=_t(),i=r.firstChild,l=i.nextSibling,o=l.nextSibling,u=o.nextSibling,a=u.nextSibling,c=a.nextSibling,f=c.nextSibling,h=f.nextSibling,w=h.nextSibling,b=w.nextSibling,y=b.nextSibling;return tt(u,"src",Rt),h.$$click=e,w.$$click=t,b.$$click=n,y.$$click=s,r})()}Ce(["click"]);const jt=document.getElementById("root");ze(()=>P(Ct,{get children(){return P($t,{get children(){return P(Ot,{path:"/",component:Lt})}})}}),jt);
