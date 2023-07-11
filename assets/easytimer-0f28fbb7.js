var Gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qt(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var K={exports:{}};(function(l,gt){(function(P,w){w(gt)})(Gt,function(P){function w(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),s.push.apply(s,o)}return s}function Q(e){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?w(Object(s),!0).forEach(function(o){pt(e,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(s,o))})}return e}function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},v(e)}function pt(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function yt(e,n,s){var o,a="";if(e=typeof e=="number"?String(e):e,e.length>n)return e;for(o=0;o<n;o=o+1)a+=String(s);return(a+e).slice(-a.length)}function A(){this.reset()}A.prototype.toString=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["hours","minutes","seconds"],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:":",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:2;e=e||["hours","minutes","seconds"],n=n||":",s=s||2;var o=[],a;for(a=0;a<e.length;a=a+1)this[e[a]]!==void 0&&(e[a]==="secondTenths"?o.push(this[e[a]]):o.push(yt(this[e[a]],s,"0")));return o.join(n)},A.prototype.reset=function(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0};function g(){this.events={}}g.prototype.on=function(e,n){var s=this;return Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(n),function(){return s.removeListener(e,n)}},g.prototype.removeListener=function(e,n){if(Array.isArray(this.events[e])){var s=this.events[e].indexOf(n);s>-1&&this.events[e].splice(s,1)}},g.prototype.removeAllListeners=function(e){e?Array.isArray(this.events[e])&&(this.events[e]=[]):this.events={}},g.prototype.emit=function(e){for(var n=this,s=arguments.length,o=new Array(s>1?s-1:0),a=1;a<s;a++)o[a-1]=arguments[a];Array.isArray(this.events[e])&&this.events[e].forEach(function(T){return T.apply(n,o)})};var D=10,I=60,_=60,N=24,C=0,U=1,j=2,L=3,M=4,h="secondTenths",p="seconds",R="minutes",H="hours",y="days",Z=[h,p,R,H,y],m={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},Tt={secondTenths:D,seconds:I,minutes:_,hours:N};function x(e,n){return(e%n+n)%n}function k(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=new A,s=new A,o,a=new g,T=!1,V=!1,O,F,G,J={},q,c,d,z,S,W,u={detail:{timer:this}};st(e);function Ot(t,r){var i=Tt[t];s[t]=r,t===y?n[t]=Math.abs(r):r>=0?n[t]=x(r,i):n[t]=x(i-x(r,i),i)}function St(t){return E(t,y)}function Et(t){return E(t,H)}function bt(t){return E(t,R)}function Pt(t){return E(t,p)}function wt(t){return E(t,h)}function E(t,r){var i=s[r];return Ot(r,b(t,m[r])),s[r]!==i}function X(){$(),_t()}function $(){clearInterval(o),o=void 0,T=!1,V=!1}function tt(t){dt()?(S=et(),c=B(q.target)):st(t),At()}function At(){var t=m[O];rt(Y(Date.now()))||(o=setInterval(Dt,t),T=!0,V=!1)}function et(){return Y(Date.now())-s.secondTenths*m[h]*F}function Dt(){var t=Y(Date.now()),r=nt();It(r),G(u.detail.timer),rt(t)&&(at(),f("targetAchieved",u))}function nt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Y(Date.now()),r=F>0?t-S:S-t,i={};return i[h]=wt(r),i[p]=Pt(r),i[R]=bt(r),i[H]=Et(r),i[y]=St(r),i}function Y(t){return Math.floor(t/m[O])*m[O]}function It(t){t[h]&&f("secondTenthsUpdated",u),t[p]&&f("secondsUpdated",u),t[R]&&f("minutesUpdated",u),t[H]&&f("hoursUpdated",u),t[y]&&f("daysUpdated",u)}function rt(t){return c instanceof Array&&t>=W}function _t(){n.reset(),s.reset()}function st(t){t=t||{},O=Nt(t.precision),G=typeof t.callback=="function"?t.callback:function(){},z=t.countdown===!0,F=z===!0?-1:1,v(t.startValues)==="object"?Ut(t.startValues):d=null,S=et(),nt(),v(t.target)==="object"?c=B(t.target):z?(t.target={seconds:0},c=B(t.target)):c=null,J={precision:O,callback:G,countdown:v(t)==="object"&&t.countdown===!0,target:c,startValues:d},q=t}function Nt(t){if(t=typeof t=="string"?t:p,!Ct(t))throw new Error("Error in precision parameter: ".concat(t," is not a valid value"));return t}function Ct(t){return Z.indexOf(t)>=0}function it(t){var r;if(v(t)==="object")if(t instanceof Array){if(t.length!==5)throw new Error("Array size not valid");r=t}else{for(var i in t)if(Z.indexOf(i)<0)throw new Error("Error in startValues or target parameter: ".concat(i," is not a valid input value"));r=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0]}r=r.map(function(xt){return parseInt(xt,10)});var lt=r[C],vt=r[U]+b(lt,D),ht=r[j]+b(vt,I),mt=r[L]+b(ht,_),Yt=r[M]+b(mt,N);return r[C]=lt%D,r[U]=vt%I,r[j]=ht%_,r[L]=mt%N,r[M]=Yt,r}function b(t,r){var i=t/r;return i<0?Math.ceil(i):Math.floor(i)}function B(t){if(t){c=it(t);var r=ot(c);return W=S+r.secondTenths*m[h]*F,c}}function Ut(t){d=it(t),n.secondTenths=d[C],n.seconds=d[U],n.minutes=d[j],n.hours=d[L],n.days=d[M],s=ot(d,s)}function ot(t,r){var i=r||{};return i.days=t[M],i.hours=i.days*N+t[L],i.minutes=i.hours*_+t[j],i.seconds=i.minutes*I+t[U],i.secondTenths=i.seconds*D+t[[C]],i}function at(){X(),f("stopped",u)}function jt(){X(),tt(q),f("reset",u)}function Lt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t=Q(Q({},e),t),!ct()&&(tt(t),f("started",u))}function Mt(){$(),V=!0,f("paused",u)}function ut(t,r){a.on(t,r)}function ft(t,r){a.removeListener(t,r)}function Rt(t){a.removeAllListeners(t)}function f(t,r){a.emit(t,r)}function ct(){return T}function dt(){return V}function Ht(){return n}function Vt(){return s}function Ft(){return J}typeof this<"u"&&(this.start=Lt,this.pause=Mt,this.stop=at,this.reset=jt,this.isRunning=ct,this.isPaused=dt,this.getTimeValues=Ht,this.getTotalTimeValues=Vt,this.getConfig=Ft,this.addEventListener=ut,this.on=ut,this.removeEventListener=ft,this.removeAllEventListeners=Rt,this.off=ft)}P.Timer=k,P.default=k,Object.defineProperty(P,"__esModule",{value:!0})})})(K,K.exports);var zt=K.exports;const Bt=qt(zt);export{Bt as T};
