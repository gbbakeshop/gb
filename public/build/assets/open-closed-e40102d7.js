import{r as s,R as w,e as O}from"./app-586d90fb.js";var R=Object.defineProperty,x=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t,n)=>(x(e,typeof t!="symbol"?t+"":t,n),n);let k=class{constructor(){v(this,"current",this.detect()),v(this,"handoffState","pending"),v(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},y=new k,F=(e,t)=>{y.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function H(e){let t=s.useRef(e);return F(()=>{t.current=e},[e]),t}let P=function(e){let t=H(e);return w.useCallback((...n)=>t.current(...n),[t])};function T(){let e=typeof document>"u";return"useSyncExternalStore"in O?(t=>t.useSyncExternalStore)(O)(()=>()=>{},()=>!1,()=>!e):!1}function M(){let e=T(),[t,n]=s.useState(y.isHandoffComplete);return t&&y.isHandoffComplete===!1&&n(!1),s.useEffect(()=>{t!==!0&&n(!0)},[t]),s.useEffect(()=>y.handoff(),[]),e?!1:t}function N(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,N),o}let C=Symbol();function V(e,t=!0){return Object.assign(e,{[C]:t})}function W(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=P(o=>{for(let r of t.current)r!=null&&(typeof r=="function"?r(o):r.current=o)});return e.every(o=>o==null||(o==null?void 0:o[C]))?void 0:n}function S(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var A=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(A||{}),I=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(I||{});function X({ourProps:e,theirProps:t,slot:n,defaultTag:o,features:r,visible:c=!0,name:u}){let i=$(t,e);if(c)return h(i,n,o,u);let p=r??0;if(p&2){let{static:a=!1,...d}=i;if(a)return h(d,n,o,u)}if(p&1){let{unmount:a=!0,...d}=i;return N(a?0:1,{0(){return null},1(){return h({...d,hidden:!0,style:{display:"none"}},n,o,u)}})}return h(i,n,o,u)}function h(e,t={},n,o){let{as:r=n,children:c,refName:u="ref",...i}=b(e,["unmount","static"]),p=e.ref!==void 0?{[u]:e.ref}:{},a=typeof c=="function"?c(t):c;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let d={};if(t){let l=!1,m=[];for(let[g,f]of Object.entries(t))typeof f=="boolean"&&(l=!0),f===!0&&m.push(g);l&&(d["data-headlessui-state"]=m.join(" "))}if(r===s.Fragment&&Object.keys(E(i)).length>0){if(!s.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let l=a.props,m=typeof(l==null?void 0:l.className)=="function"?(...f)=>S(l==null?void 0:l.className(...f),i.className):S(l==null?void 0:l.className,i.className),g=m?{className:m}:{};return s.cloneElement(a,Object.assign({},$(a.props,E(b(i,["ref"]))),d,p,U(a.ref,p.ref),g))}return s.createElement(r,Object.assign({},b(i,["ref"]),r!==s.Fragment&&p,r!==s.Fragment&&d),a)}function U(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function $(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let o of e)for(let r in o)r.startsWith("on")&&typeof o[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(o[r])):t[r]=o[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(t,{[o](r,...c){let u=n[o];for(let i of u){if((r instanceof Event||(r==null?void 0:r.nativeEvent)instanceof Event)&&r.defaultPrevented)return;i(r,...c)}}});return t}function Y(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function E(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function b(e,t=[]){let n=Object.assign({},e);for(let o of t)o in n&&delete n[o];return n}let j=s.createContext(null);j.displayName="OpenClosedContext";var B=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(B||{});function q(){return s.useContext(j)}function z({value:e,children:t}){return w.createElement(j.Provider,{value:e},t)}export{q as C,Y as D,E as R,A as S,V as T,X,M as a,y as b,z as c,B as d,I as j,F as l,P as o,H as s,S as t,N as u,W as y};
