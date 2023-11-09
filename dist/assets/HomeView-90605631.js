import{d as E,u as H,o as W,r as y,a as pe,b,c as k,e as v,w as I,v as L,F as Q,f as ee,g as te,t as M,h as oe,p as re,i as ie,_ as R,j as ne,k as N,l as D,m as ae,n as he,q as ve,s as me,x as A,y as ge,z as q,A as B,B as z,C as j,D as $,T as ye,S as F}from"./index-8abcc2ff.js";const fe=o=>(re("data-v-c136dce8"),o=o(),ie(),o),_e={id:"home-side-bar"},be={class:"search-box"},we={class:"events-container"},ke=fe(()=>v("h2",null,"Events list",-1)),Ce={class:"events"},Se=["onClick"],Ee={key:0},Oe={class:"create-event-btn"},Ie=E({__name:"HomeSideBar",emits:["onpress","createevent"],setup(o,{emit:e}){const t=H();W(()=>{n()});async function n(){await t.getLocations(),console.log(t.$state.eventsLocations[1])}const r=t.getEventsList(),i=t.$state.eventsLocations,a=e,p=y(""),h=pe(Array(r.length).fill(!1)),s=y(-1);function l(){a("createevent")}function u(d){const g=i[d];a("onpress",g)}function m(d){s.value!==-1&&s.value!==d&&(h[s.value]=!1),s.value=d,h[d]=!h[d]}function f(d){return Array.isArray(r)?r.filter(g=>g.name.toLowerCase().includes(d.toLowerCase())||g.description.toLowerCase().includes(d.toLowerCase())):[]}function c(d){return new Date(d.seconds*1e3).toLocaleDateString()}return(d,g)=>(b(),k("div",_e,[v("div",be,[I(v("input",{type:"text",placeholder:"Search","onUpdate:modelValue":g[0]||(g[0]=_=>p.value=_)},null,512),[[L,p.value]])]),v("div",we,[ke,v("div",Ce,[(b(!0),k(Q,null,ee(f(p.value),(_,w)=>(b(),k("div",{key:w,class:"event-item"},[v("div",{onClick:te(C=>(m(w),u(w)),["prevent"])},[v("h3",null,M(_.name),1),v("p",null,M(c(_.date)),1),h[w]?(b(),k("p",Ee,M(_.description),1)):oe("",!0)],8,Se)]))),128))])]),v("div",Oe,[v("button",{onClick:g[1]||(g[1]=_=>l())},"Create event")])]))}});const Le=R(Ie,[["__scopeId","data-v-c136dce8"]]);(function(){try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".mapdiv[data-v-174b771e]{width:100%;height:100%}.info-window-wrapper[data-v-90174664]{display:none}.mapdiv .info-window-wrapper[data-v-90174664]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var xe=Object.defineProperty,Pe=(o,e,t)=>e in o?xe(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,K=(o,e,t)=>(Pe(o,typeof e!="symbol"?e+"":e,t),t);const se=Symbol("map"),le=Symbol("api"),qe=Symbol("marker"),Te=Symbol("markerCluster"),V=Symbol("CustomMarker"),je=Symbol("mapTilesLoaded"),ce=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ne(o,e,t,n){function r(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function p(l){try{s(n.next(l))}catch(u){a(u)}}function h(l){try{s(n.throw(l))}catch(u){a(u)}}function s(l){l.done?i(l.value):r(l.value).then(p,h)}s((n=n.apply(o,e||[])).next())})}var $e=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){var a=i[r];if(!o(e[a],t[a]))return!1}return!0}return e!==e&&t!==t};const Z="__googleMapsScriptId";var x;(function(o){o[o.INITIALIZED=0]="INITIALIZED",o[o.LOADING=1]="LOADING",o[o.SUCCESS=2]="SUCCESS",o[o.FAILURE=3]="FAILURE"})(x||(x={}));class S{constructor({apiKey:e,authReferrerPolicy:t,channel:n,client:r,id:i=Z,language:a,libraries:p=[],mapIds:h,nonce:s,region:l,retries:u=3,url:m="https://maps.googleapis.com/maps/api/js",version:f}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=n,this.client=r,this.id=i||Z,this.language=a,this.libraries=p,this.mapIds=h,this.nonce=s,this.region=l,this.retries=u,this.url=m,this.version=f,S.instance){if(!$e(this.options,S.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(S.instance.options)}`);return S.instance}S.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?x.FAILURE:this.done?x.SUCCESS:this.loading?x.LOADING:x.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(n=>{n?t(n.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const n={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(n).forEach(i=>!n[i]&&delete n[i]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(i=>{let a,p,h,s="The Google Maps JavaScript API",l="google",u="importLibrary",m="__ib__",f=document,c=window;c=c[l]||(c[l]={});const d=c.maps||(c.maps={}),g=new Set,_=new URLSearchParams,w=()=>a||(a=new Promise((C,O)=>Ne(this,void 0,void 0,function*(){var T;yield p=f.createElement("script"),p.id=this.id,_.set("libraries",[...g]+"");for(h in i)_.set(h.replace(/[A-Z]/g,G=>"_"+G[0].toLowerCase()),i[h]);_.set("callback",l+".maps."+m),p.src=this.url+"?"+_,d[m]=C,p.onerror=()=>a=O(Error(s+" could not load.")),p.nonce=this.nonce||((T=f.querySelector("script[nonce]"))===null||T===void 0?void 0:T.nonce)||"",f.head.append(p)})));d[u]?console.warn(s+" only loads once. Ignoring:",i):d[u]=(C,...O)=>g.add(C)&&w().then(()=>d[u](C,...O))})(n);const r=this.libraries.map(i=>this.importLibrary(i));r.length||r.push(this.importLibrary("core")),Promise.all(r).then(()=>this.callback(),i=>{const a=new ErrorEvent("error",{error:i});this.loadErrorCallback(a)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function Be(o){return class extends o.OverlayView{constructor(e){super(),K(this,"element"),K(this,"opts");const{element:t,...n}=e;this.element=t,this.opts=n,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof o.LatLng?this.opts.position:new o.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";const n=this.element.offsetHeight,r=this.element.offsetWidth;let i,a;switch(this.opts.anchorPoint){case"TOP_CENTER":i=t.x-r/2,a=t.y;break;case"BOTTOM_CENTER":i=t.x-r/2,a=t.y-n;break;case"LEFT_CENTER":i=t.x,a=t.y-n/2;break;case"RIGHT_CENTER":i=t.x-r,a=t.y-n/2;break;case"TOP_LEFT":i=t.x,a=t.y;break;case"TOP_RIGHT":i=t.x-r,a=t.y;break;case"BOTTOM_LEFT":i=t.x,a=t.y-n;break;case"BOTTOM_RIGHT":i=t.x-r,a=t.y-n;break;default:i=t.x-r/2,a=t.y-n/2}this.element.style.left=i+"px",this.element.style.top=a+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...n}=e;this.element=t,this.opts=n,this.draw()}}}let J;const Y=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","heading_changed","idle","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","resize","rightclick","tilesloaded","tilt_changed","zoom_changed"],Re=E({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:Y,setup(o,{emit:e}){const t=y(),n=y(!1),r=y(),i=y(),a=y(!1);N(se,r),N(le,i),N(je,a);const p=()=>{const u={...o};Object.keys(u).forEach(c=>{u[c]===void 0&&delete u[c]});const m=c=>{var d;return c?{position:(d=i.value)==null?void 0:d.ControlPosition[c]}:{}},f={scaleControlOptions:o.scaleControlStyle?{style:o.scaleControlStyle}:{},panControlOptions:m(o.panControlPosition),zoomControlOptions:m(o.zoomControlPosition),rotateControlOptions:m(o.rotateControlPosition),streetViewControlOptions:m(o.streetViewControlPosition),fullscreenControlOptions:m(o.fullscreenControlPosition),disableDefaultUI:o.disableDefaultUi};return{...u,...f}},h=D([i,r],([u,m])=>{const f=u,c=m;f&&c&&(f.event.addListenerOnce(c,"tilesloaded",()=>{a.value=!0}),setTimeout(h,0))},{immediate:!0}),s=()=>{try{const{apiKey:u,region:m,version:f,language:c,libraries:d}=o;J=new S({apiKey:u,region:m,version:f,language:c,libraries:d})}catch(u){console.error(u)}},l=u=>{i.value=q(u.maps),r.value=q(new u.maps.Map(t.value,p()));const m=Be(i.value);i.value[V]=m,Y.forEach(c=>{var d;(d=r.value)==null||d.addListener(c,g=>e(c,g))}),n.value=!0;const f=Object.keys(o).filter(c=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom"].includes(c)).map(c=>ne(o,c));D([()=>o.center,()=>o.zoom,...f],([c,d],[g,_])=>{var w,C,O;const{center:T,zoom:G,...ue}=p();(w=r.value)==null||w.setOptions(ue),d!==void 0&&d!==_&&((C=r.value)==null||C.setZoom(d));const de=!g||c.lng!==g.lng||c.lat!==g.lat;c&&de&&((O=r.value)==null||O.panTo(c))})};return W(()=>{o.apiPromise&&o.apiPromise instanceof Promise?o.apiPromise.then(l):(s(),J.load().then(l))}),ae(()=>{var u;a.value=!1,r.value&&((u=i.value)==null||u.event.clearInstanceListeners(r.value))}),{mapRef:t,ready:n,map:r,api:i,mapTilesLoaded:a}}}),Me=(o,e)=>{const t=o.__vccOpts||o;for(const[n,r]of e)t[n]=r;return t},Ae={ref:"mapRef",class:"mapdiv"};function De(o,e,t,n,r,i){return b(),k("div",null,[v("div",Ae,null,512),he(o.$slots,"default",ve(me({ready:o.ready,map:o.map,api:o.api,mapTilesLoaded:o.mapTilesLoaded})),void 0,!0)])}const ze=Me(Re,[["render",De],["__scopeId","data-v-174b771e"]]);function Ue(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var He=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){var a=i[r];if(!o(e[a],t[a]))return!1}return!0}return e!==e&&t!==t};const Ve=Ue(He),Ge=o=>o==="Marker",Fe=o=>o===V,Ke=(o,e,t,n)=>{const r=y(),i=A(se,y()),a=A(le,y()),p=A(Te,y()),h=ge(()=>!!(p.value&&a.value&&(r.value instanceof a.value.Marker||r.value instanceof a.value[V])));return D([i,t],(s,[l,u])=>{var m,f,c;const d=!Ve(t.value,u)||i.value!==l;!i.value||!a.value||!d||(r.value?(r.value.setOptions(t.value),h.value&&((m=p.value)==null||m.removeMarker(r.value),(f=p.value)==null||f.addMarker(r.value))):(Ge(o)?r.value=q(new a.value[o](t.value)):Fe(o)?r.value=q(new a.value[o](t.value)):r.value=q(new a.value[o]({...t.value,map:i.value})),h.value?(c=p.value)==null||c.addMarker(r.value):r.value.setMap(i.value),e.forEach(g=>{var _;(_=r.value)==null||_.addListener(g,w=>n(g,w))})))},{immediate:!0}),ae(()=>{var s,l;r.value&&((s=a.value)==null||s.event.clearInstanceListeners(r.value),h.value?(l=p.value)==null||l.removeMarker(r.value):r.value.setMap(null))}),r},X=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],Ze=E({name:"Marker",props:{options:{type:Object,required:!0}},emits:X,setup(o,{emit:e,expose:t,slots:n}){const r=ne(o,"options"),i=Ke("Marker",X,r,e);return N(qe,i),t({marker:i}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}});ce.concat(["bounds_changed"]);ce.concat(["center_changed","radius_changed"]);var U;(function(o){o.CLUSTERING_BEGIN="clusteringbegin",o.CLUSTERING_END="clusteringend",o.CLUSTER_CLICK="click"})(U||(U={}));Object.values(U);const Je={id:"map-container"},Ye=E({__name:"HomeGoogleMap",setup(o,{expose:e}){const t=H(),n="AIzaSyBcvbQreDyY0TB68BGC6UnzzfoiEk9zgng",r=t.$state.eventsLocations,i=y(12),a=y({lat:50.033687,lng:22.005063});return e({updateZoom:s=>{i.value=s},updateCenter:s=>{a.value=s}}),(s,l)=>(b(),k("div",Je,[B(j(ze),{"api-key":j(n),style:{width:"100%",height:"100%"},center:a.value,zoom:i.value},{default:z(()=>[(b(!0),k(Q,null,ee(j(r),(u,m)=>(b(),$(j(Ze),{key:m,options:{position:u}},null,8,["options"]))),128))]),_:1},8,["api-key","center","zoom"])]))}});const Xe=R(Ye,[["__scopeId","data-v-2d718536"]]),P=o=>(re("data-v-870e5592"),o=o(),ie(),o),We={id:"container"},Qe={class:"createEvent"},et=P(()=>v("h1",null,"Create New Event",-1)),tt=["onSubmit"],ot=P(()=>v("label",{for:"name"},"Name:",-1)),rt=P(()=>v("label",{for:"description"},"Description:",-1)),it=P(()=>v("label",{for:"locationlat"},"Location:",-1)),nt=P(()=>v("label",{for:"date"},"Date:",-1)),at=P(()=>v("button",{type:"submit"},"Create Event",-1)),st=E({__name:"HomeNewEvent",setup(o){const e=H(),t=y(""),n=y(""),r=y({lat:0,lng:0}),i=y("");function a(h){return ye.fromDate(new Date(h))}const p=()=>{const h={name:t.value,description:n.value,location:r.value,date:a(i.value)};e.addEventToDb(h),t.value="",n.value="",r.value={lat:0,lng:0},i.value=""};return(h,s)=>(b(),k("div",We,[v("div",Qe,[et,v("form",{onSubmit:te(p,["prevent"])},[ot,I(v("input",{type:"text",id:"name","onUpdate:modelValue":s[0]||(s[0]=l=>t.value=l),required:""},null,512),[[L,t.value]]),rt,I(v("textarea",{id:"description","onUpdate:modelValue":s[1]||(s[1]=l=>n.value=l),required:""},null,512),[[L,n.value]]),it,I(v("input",{type:"text",id:"locationlat","onUpdate:modelValue":s[2]||(s[2]=l=>r.value.lat=l),required:""},null,512),[[L,r.value.lat]]),I(v("input",{type:"text",id:"locationlng","onUpdate:modelValue":s[3]||(s[3]=l=>r.value.lng=l),required:""},null,512),[[L,r.value.lng]]),nt,I(v("input",{type:"date",id:"date","onUpdate:modelValue":s[4]||(s[4]=l=>i.value=l),required:""},null,512),[[L,i.value]]),at],40,tt)])]))}});const lt=R(st,[["__scopeId","data-v-870e5592"]]),ct=E({__name:"TheHome",setup(o){const e=y(!1),t=()=>{e.value=!e.value},n=y(null),r=y(null),i=async a=>{a===null?r.value.updateZoom(12):r.value.updateZoom(15),r.value.updateCenter(a)};return(a,p)=>(b(),k("div",null,[(b(),$(F,null,{default:z(()=>[B(Le,{onOnpress:i,ref_key:"sidebar",ref:n,onCreateevent:t},null,512)]),_:1})),(b(),$(F,null,{default:z(()=>[B(Xe,{ref_key:"child",ref:r},null,512)]),_:1})),e.value?(b(),$(lt,{key:0})):oe("",!0)]))}});const ut=R(ct,[["__scopeId","data-v-0e783b3f"]]),pt=E({__name:"HomeView",setup(o){return(e,t)=>(b(),k("main",null,[B(ut)]))}});export{pt as default};