(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3524],{32667:function(a,b,c){var d=c(9950),e=c(25419);function f(a){return null==a}function g(a){(a=(function(a){var b={};for(var c in a)b[c]=a[c];return b})(a||{})).whiteList=a.whiteList||d.whiteList,a.onAttr=a.onAttr||d.onAttr,a.onIgnoreAttr=a.onIgnoreAttr||d.onIgnoreAttr,a.safeAttrValue=a.safeAttrValue||d.safeAttrValue,this.options=a}c(17381),g.prototype.process=function(a){if(!(a=(a=a||"").toString()))return"";var b=this,c=b.options,d=c.whiteList,g=c.onAttr,h=c.onIgnoreAttr,i=c.safeAttrValue;return e(a,function(a,b,c,e,j){var k=d[c],l=!1;if(!0===k?l=k:"function"==typeof k?l=k(e):k instanceof RegExp&&(l=k.test(e)),!0!==l&&(l=!1),e=i(c,e)){var m={position:b,sourcePosition:a,source:j,isWhite:l};if(l){var n=g(c,e,m);return f(n)?c+":"+e:n}var n=h(c,e,m);if(!f(n))return n}})},a.exports=g},9950:function(a,b){function c(){var a={};return a["align-content"]=!1,a["align-items"]=!1,a["align-self"]=!1,a["alignment-adjust"]=!1,a["alignment-baseline"]=!1,a.all=!1,a["anchor-point"]=!1,a.animation=!1,a["animation-delay"]=!1,a["animation-direction"]=!1,a["animation-duration"]=!1,a["animation-fill-mode"]=!1,a["animation-iteration-count"]=!1,a["animation-name"]=!1,a["animation-play-state"]=!1,a["animation-timing-function"]=!1,a.azimuth=!1,a["backface-visibility"]=!1,a.background=!0,a["background-attachment"]=!0,a["background-clip"]=!0,a["background-color"]=!0,a["background-image"]=!0,a["background-origin"]=!0,a["background-position"]=!0,a["background-repeat"]=!0,a["background-size"]=!0,a["baseline-shift"]=!1,a.binding=!1,a.bleed=!1,a["bookmark-label"]=!1,a["bookmark-level"]=!1,a["bookmark-state"]=!1,a.border=!0,a["border-bottom"]=!0,a["border-bottom-color"]=!0,a["border-bottom-left-radius"]=!0,a["border-bottom-right-radius"]=!0,a["border-bottom-style"]=!0,a["border-bottom-width"]=!0,a["border-collapse"]=!0,a["border-color"]=!0,a["border-image"]=!0,a["border-image-outset"]=!0,a["border-image-repeat"]=!0,a["border-image-slice"]=!0,a["border-image-source"]=!0,a["border-image-width"]=!0,a["border-left"]=!0,a["border-left-color"]=!0,a["border-left-style"]=!0,a["border-left-width"]=!0,a["border-radius"]=!0,a["border-right"]=!0,a["border-right-color"]=!0,a["border-right-style"]=!0,a["border-right-width"]=!0,a["border-spacing"]=!0,a["border-style"]=!0,a["border-top"]=!0,a["border-top-color"]=!0,a["border-top-left-radius"]=!0,a["border-top-right-radius"]=!0,a["border-top-style"]=!0,a["border-top-width"]=!0,a["border-width"]=!0,a.bottom=!1,a["box-decoration-break"]=!0,a["box-shadow"]=!0,a["box-sizing"]=!0,a["box-snap"]=!0,a["box-suppress"]=!0,a["break-after"]=!0,a["break-before"]=!0,a["break-inside"]=!0,a["caption-side"]=!1,a.chains=!1,a.clear=!0,a.clip=!1,a["clip-path"]=!1,a["clip-rule"]=!1,a.color=!0,a["color-interpolation-filters"]=!0,a["column-count"]=!1,a["column-fill"]=!1,a["column-gap"]=!1,a["column-rule"]=!1,a["column-rule-color"]=!1,a["column-rule-style"]=!1,a["column-rule-width"]=!1,a["column-span"]=!1,a["column-width"]=!1,a.columns=!1,a.contain=!1,a.content=!1,a["counter-increment"]=!1,a["counter-reset"]=!1,a["counter-set"]=!1,a.crop=!1,a.cue=!1,a["cue-after"]=!1,a["cue-before"]=!1,a.cursor=!1,a.direction=!1,a.display=!0,a["display-inside"]=!0,a["display-list"]=!0,a["display-outside"]=!0,a["dominant-baseline"]=!1,a.elevation=!1,a["empty-cells"]=!1,a.filter=!1,a.flex=!1,a["flex-basis"]=!1,a["flex-direction"]=!1,a["flex-flow"]=!1,a["flex-grow"]=!1,a["flex-shrink"]=!1,a["flex-wrap"]=!1,a.float=!1,a["float-offset"]=!1,a["flood-color"]=!1,a["flood-opacity"]=!1,a["flow-from"]=!1,a["flow-into"]=!1,a.font=!0,a["font-family"]=!0,a["font-feature-settings"]=!0,a["font-kerning"]=!0,a["font-language-override"]=!0,a["font-size"]=!0,a["font-size-adjust"]=!0,a["font-stretch"]=!0,a["font-style"]=!0,a["font-synthesis"]=!0,a["font-variant"]=!0,a["font-variant-alternates"]=!0,a["font-variant-caps"]=!0,a["font-variant-east-asian"]=!0,a["font-variant-ligatures"]=!0,a["font-variant-numeric"]=!0,a["font-variant-position"]=!0,a["font-weight"]=!0,a.grid=!1,a["grid-area"]=!1,a["grid-auto-columns"]=!1,a["grid-auto-flow"]=!1,a["grid-auto-rows"]=!1,a["grid-column"]=!1,a["grid-column-end"]=!1,a["grid-column-start"]=!1,a["grid-row"]=!1,a["grid-row-end"]=!1,a["grid-row-start"]=!1,a["grid-template"]=!1,a["grid-template-areas"]=!1,a["grid-template-columns"]=!1,a["grid-template-rows"]=!1,a["hanging-punctuation"]=!1,a.height=!0,a.hyphens=!1,a.icon=!1,a["image-orientation"]=!1,a["image-resolution"]=!1,a["ime-mode"]=!1,a["initial-letters"]=!1,a["inline-box-align"]=!1,a["justify-content"]=!1,a["justify-items"]=!1,a["justify-self"]=!1,a.left=!1,a["letter-spacing"]=!0,a["lighting-color"]=!0,a["line-box-contain"]=!1,a["line-break"]=!1,a["line-grid"]=!1,a["line-height"]=!1,a["line-snap"]=!1,a["line-stacking"]=!1,a["line-stacking-ruby"]=!1,a["line-stacking-shift"]=!1,a["line-stacking-strategy"]=!1,a["list-style"]=!0,a["list-style-image"]=!0,a["list-style-position"]=!0,a["list-style-type"]=!0,a.margin=!0,a["margin-bottom"]=!0,a["margin-left"]=!0,a["margin-right"]=!0,a["margin-top"]=!0,a["marker-offset"]=!1,a["marker-side"]=!1,a.marks=!1,a.mask=!1,a["mask-box"]=!1,a["mask-box-outset"]=!1,a["mask-box-repeat"]=!1,a["mask-box-slice"]=!1,a["mask-box-source"]=!1,a["mask-box-width"]=!1,a["mask-clip"]=!1,a["mask-image"]=!1,a["mask-origin"]=!1,a["mask-position"]=!1,a["mask-repeat"]=!1,a["mask-size"]=!1,a["mask-source-type"]=!1,a["mask-type"]=!1,a["max-height"]=!0,a["max-lines"]=!1,a["max-width"]=!0,a["min-height"]=!0,a["min-width"]=!0,a["move-to"]=!1,a["nav-down"]=!1,a["nav-index"]=!1,a["nav-left"]=!1,a["nav-right"]=!1,a["nav-up"]=!1,a["object-fit"]=!1,a["object-position"]=!1,a.opacity=!1,a.order=!1,a.orphans=!1,a.outline=!1,a["outline-color"]=!1,a["outline-offset"]=!1,a["outline-style"]=!1,a["outline-width"]=!1,a.overflow=!1,a["overflow-wrap"]=!1,a["overflow-x"]=!1,a["overflow-y"]=!1,a.padding=!0,a["padding-bottom"]=!0,a["padding-left"]=!0,a["padding-right"]=!0,a["padding-top"]=!0,a.page=!1,a["page-break-after"]=!1,a["page-break-before"]=!1,a["page-break-inside"]=!1,a["page-policy"]=!1,a.pause=!1,a["pause-after"]=!1,a["pause-before"]=!1,a.perspective=!1,a["perspective-origin"]=!1,a.pitch=!1,a["pitch-range"]=!1,a["play-during"]=!1,a.position=!1,a["presentation-level"]=!1,a.quotes=!1,a["region-fragment"]=!1,a.resize=!1,a.rest=!1,a["rest-after"]=!1,a["rest-before"]=!1,a.richness=!1,a.right=!1,a.rotation=!1,a["rotation-point"]=!1,a["ruby-align"]=!1,a["ruby-merge"]=!1,a["ruby-position"]=!1,a["shape-image-threshold"]=!1,a["shape-outside"]=!1,a["shape-margin"]=!1,a.size=!1,a.speak=!1,a["speak-as"]=!1,a["speak-header"]=!1,a["speak-numeral"]=!1,a["speak-punctuation"]=!1,a["speech-rate"]=!1,a.stress=!1,a["string-set"]=!1,a["tab-size"]=!1,a["table-layout"]=!1,a["text-align"]=!0,a["text-align-last"]=!0,a["text-combine-upright"]=!0,a["text-decoration"]=!0,a["text-decoration-color"]=!0,a["text-decoration-line"]=!0,a["text-decoration-skip"]=!0,a["text-decoration-style"]=!0,a["text-emphasis"]=!0,a["text-emphasis-color"]=!0,a["text-emphasis-position"]=!0,a["text-emphasis-style"]=!0,a["text-height"]=!0,a["text-indent"]=!0,a["text-justify"]=!0,a["text-orientation"]=!0,a["text-overflow"]=!0,a["text-shadow"]=!0,a["text-space-collapse"]=!0,a["text-transform"]=!0,a["text-underline-position"]=!0,a["text-wrap"]=!0,a.top=!1,a.transform=!1,a["transform-origin"]=!1,a["transform-style"]=!1,a.transition=!1,a["transition-delay"]=!1,a["transition-duration"]=!1,a["transition-property"]=!1,a["transition-timing-function"]=!1,a["unicode-bidi"]=!1,a["vertical-align"]=!1,a.visibility=!1,a["voice-balance"]=!1,a["voice-duration"]=!1,a["voice-family"]=!1,a["voice-pitch"]=!1,a["voice-range"]=!1,a["voice-rate"]=!1,a["voice-stress"]=!1,a["voice-volume"]=!1,a.volume=!1,a["white-space"]=!1,a.widows=!1,a.width=!0,a["will-change"]=!1,a["word-break"]=!0,a["word-spacing"]=!0,a["word-wrap"]=!0,a["wrap-flow"]=!1,a["wrap-through"]=!1,a["writing-mode"]=!1,a["z-index"]=!1,a}var d=/javascript\s*\:/img;b.whiteList=c(),b.getDefaultWhiteList=c,b.onAttr=function(a,b,c){},b.onIgnoreAttr=function(a,b,c){},b.safeAttrValue=function(a,b){return d.test(b)?"":b}},29970:function(a,b,c){var d=c(9950),e=c(32667);for(var f in(b=a.exports=function(a,b){return new e(b).process(a)}).FilterCSS=e,d)b[f]=d[f];"undefined"!=typeof window&&(window.filterCSS=a.exports)},25419:function(a,b,c){var d=c(17381);a.exports=function(a,b){";"!==(a=d.trimRight(a))[a.length-1]&&(a+=";");var c=a.length,e=!1,f=0,g=0,h="";function i(){if(!e){var c=d.trim(a.slice(f,g)),i=c.indexOf(":");if(-1!==i){var j=d.trim(c.slice(0,i)),k=d.trim(c.slice(i+1));if(j){var l=b(f,h.length,j,k,c);l&&(h+=l+"; ")}}}f=g+1}for(;g<c;g++){var j=a[g];if("/"===j&&"*"===a[g+1]){var k=a.indexOf("*/",g+2);if(-1===k)break;f=(g=k+1)+1,e=!1}else"("===j?e=!0:")"===j?e=!1:";"===j?e||i():"\n"===j&&i()}return d.trim(h)}},17381:function(a){a.exports={indexOf:function(a,b){var c,d;if(Array.prototype.indexOf)return a.indexOf(b);for(c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return -1},forEach:function(a,b,c){var d,e;if(Array.prototype.forEach)return a.forEach(b,c);for(d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},trim:function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(a){return String.prototype.trimRight?a.trimRight():a.replace(/(\s*$)/g,"")}}},63449:function(a,b,c){"use strict";var d,e=c(91033),f=c(67294),g=c(73935),h=(d=e)&&"object"==typeof d&&"default"in d?d:{"default":d},i=function(a){if(a&&a.__esModule)return a;var b=Object.create(null);return a&&Object.keys(a).forEach(function(c){if("default"!==c){var d=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(b,c,d.get?d:{enumerable:!0,get:function(){return a[c]}})}}),b.default=a,Object.freeze(b)}(f),j=function(a,b){return(j=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},k=function(){return(k=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c.g?c.g:"undefined"!=typeof self?self:{},m=function(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)},n="object"==typeof l&&l&&l.Object===Object&&l,o="object"==typeof self&&self&&self.Object===Object&&self,p=n||o||Function("return this")(),q=p,r=/\s/,s=function(a){for(var b=a.length;b-- &&r.test(a.charAt(b)););return b},t=/^\s+/,u=p.Symbol,v=u,w=Object.prototype,x=w.hasOwnProperty,y=w.toString,z=v?v.toStringTag:void 0,A=Object.prototype.toString,B=u,C=function(a){var b=x.call(a,z),c=a[z];try{a[z]=void 0;var d=!0}catch(e){}var f=y.call(a);return d&&(b?a[z]=c:delete a[z]),f},D=B?B.toStringTag:void 0,E=function(a){var b;return null==a?void 0===a?"[object Undefined]":"[object Null]":D&&D in Object(a)?C(a):(b=a,A.call(b))},F=m,G=function(a){var b;return"symbol"==typeof a||null!=(b=a)&&"object"==typeof b&&"[object Symbol]"==E(a)},H=0/0,I=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,L=parseInt,M=m,N=function(){return q.Date.now()},O=function(a){if("number"==typeof a)return a;if(G(a))return H;if(F(a)){var b,c="function"==typeof a.valueOf?a.valueOf():a;a=F(c)?c+"":c}if("string"!=typeof a)return 0===a?a:+a;a=(b=a)?b.slice(0,s(b)+1).replace(t,""):b;var d=J.test(a);return d||K.test(a)?L(a.slice(2),d?2:8):I.test(a)?H:+a},P=Math.max,Q=Math.min,R=function(a,b,c){var d,e,f,g,h,i,j=0,k=!1,l=!1,m=!0;if("function"!=typeof a)throw new TypeError("Expected a function");function n(b){var c=d,f=e;return d=e=void 0,j=b,g=a.apply(f,c)}function o(a){var c=a-i;return void 0===i||c>=b||c<0||l&&a-j>=f}function p(){var a,c,d=N();if(o(d))return q(d);h=setTimeout(p,(c=b-((a=d)-i),l?Q(c,f-(a-j)):c))}function q(a){return(h=void 0,m&&d)?n(a):(d=e=void 0,g)}function r(){var a,c=N(),f=o(c);if(d=arguments,e=this,i=c,f){if(void 0===h)return j=a=i,h=setTimeout(p,b),k?n(a):g;if(l)return clearTimeout(h),h=setTimeout(p,b),n(i)}return void 0===h&&(h=setTimeout(p,b)),g}return b=O(b)||0,M(c)&&(k=!!c.leading,l="maxWait"in c,f=l?P(O(c.maxWait)||0,b):f,m="trailing"in c?!!c.trailing:m),r.cancel=function(){void 0!==h&&clearTimeout(h),j=0,d=i=e=h=void 0},r.flush=function(){return void 0===h?g:q(N())},r},S=R,T=m,U=function(a,b,c){var d=!0,e=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return T(c)&&(d="leading"in c?!!c.leading:d,e="trailing"in c?!!c.trailing:e),S(a,b,{leading:d,maxWait:b,trailing:e})},V=function(a,b,c,d){switch(b){case"debounce":return R(a,c,d);case"throttle":return U(a,c,d);default:return a}},W=function(a){return"function"==typeof a},X=function(){return"undefined"==typeof window},Y=function(a){return a instanceof Element||a instanceof HTMLDocument},Z=function(a){function b(b){var c=a.call(this,b)||this;c.cancelHandler=function(){c.resizeHandler&&c.resizeHandler.cancel&&(c.resizeHandler.cancel(),c.resizeHandler=null)},c.attachObserver=function(){var a=c.props,b=a.targetRef,d=a.observerOptions;if(!X()){b&&b.current&&(c.targetRef.current=b.current);var e=c.getElement();!!e&&(c.observableElement&&c.observableElement===e||(c.observableElement=e,c.resizeObserver.observe(e,d)))}},c.getElement=function(){var a=c.props,b=a.querySelector,d=a.targetDomEl;if(X())return null;if(b)return document.querySelector(b);if(d&&Y(d))return d;if(c.targetRef&&Y(c.targetRef.current))return c.targetRef.current;var e=g.findDOMNode(c);if(!e)return null;var f=c.getRenderType();switch(f){case"renderProp":return e;case"childFunction":return e;case"child":return e;case"childArray":return e;default:return e.parentElement}},c.createResizeHandler=function(a){var b=c.props,d=b.handleWidth,e=void 0===d||d,f=b.handleHeight,g=void 0===f||f,h=b.onResize;if(e||g){var i,j,k,l,m=(i=h,j=c.setState.bind(c),k=e,l=g,function(a){var b=a.width,c=a.height;j(function(a){return a.width===b&&a.height===c?a:(a.width!==b||l)&&(a.height!==c||k)?(i&&W(i)&&i(b,c),{width:b,height:c}):a})});a.forEach(function(a){var b=a&&a.contentRect||{},d=b.width,e=b.height,f=!c.skipOnMount&&!X();f&&m({width:d,height:e}),c.skipOnMount=!1})}},c.getRenderType=function(){var a=c.props,b=a.render,d=a.children;return W(b)?"renderProp":W(d)?"childFunction":f.isValidElement(d)?"child":Array.isArray(d)?"childArray":"parent"};var d=b.skipOnMount,e=b.refreshMode,i=b.refreshRate,j=b.refreshOptions;return c.state={width:void 0,height:void 0},c.skipOnMount=d,c.targetRef=f.createRef(),c.observableElement=null,X()||(c.resizeHandler=V(c.createResizeHandler,e,void 0===i?1000:i,j),c.resizeObserver=new h.default(c.resizeHandler)),c}return(function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function c(){this.constructor=a}j(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c())})(b,a),b.prototype.componentDidMount=function(){this.attachObserver()},b.prototype.componentDidUpdate=function(){this.attachObserver()},b.prototype.componentWillUnmount=function(){X()||(this.resizeObserver.disconnect(),this.cancelHandler())},b.prototype.render=function(){var a,b=this.props,c=b.render,d=b.children,e=b.nodeType,g=this.state,h=g.width,j=g.height,k={width:h,height:j,targetRef:this.targetRef},l=this.getRenderType();switch(l){case"renderProp":return c&&c(k);case"childFunction":return(a=d)(k);case"child":if((a=d).type&&"string"==typeof a.type){k.targetRef;var m=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}(k,["targetRef"]);return f.cloneElement(a,m)}return f.cloneElement(a,k);case"childArray":return(a=d).map(function(a){return!!a&&f.cloneElement(a,k)});default:return i.createElement(void 0===e?"div":e,null)}},b}(f.PureComponent);X()?f.useEffect:f.useLayoutEffect,b.ZP=Z},82302:function(a,b,c){var d=c(29970).FilterCSS,e=c(29970).getDefaultWhiteList,f=c(75938);function g(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src",],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width",]}}var h=new d();function i(a){return a.replace(j,"&lt;").replace(k,"&gt;")}var j=/</g,k=/>/g,l=/"/g,m=/&quot;/g,n=/&#([a-zA-Z0-9]*);?/gim,o=/&colon;?/gim,p=/&newline;?/gim,q=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,r=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,s=/u\s*r\s*l\s*\(.*/gi;function t(a){return a.replace(l,"&quot;")}function u(a){return a.replace(m,"\"")}function v(a){return a.replace(n,function(a,b){return"x"===b[0]||"X"===b[0]?String.fromCharCode(parseInt(b.substr(1),16)):String.fromCharCode(parseInt(b,10))})}function w(a){return a.replace(o,":").replace(p," ")}function x(a){for(var b="",c=0,d=a.length;c<d;c++)b+=32>a.charCodeAt(c)?" ":a.charAt(c);return f.trim(b)}function y(a){return a=x(a=w(a=v(a=u(a))))}function z(a){return a=i(a=t(a))}b.whiteList=g(),b.getDefaultWhiteList=g,b.onTag=function(a,b,c){},b.onIgnoreTag=function(a,b,c){},b.onTagAttr=function(a,b,c){},b.onIgnoreTagAttr=function(a,b,c){},b.safeAttrValue=function(a,b,c,d){if(c=y(c),"href"===b||"src"===b){if("#"===(c=f.trim(c)))return"#";if(!("http://"===c.substr(0,7)||"https://"===c.substr(0,8)||"mailto:"===c.substr(0,7)||"tel:"===c.substr(0,4)||"data:image/"===c.substr(0,11)||"ftp://"===c.substr(0,6)||"./"===c.substr(0,2)||"../"===c.substr(0,3)||"#"===c[0]||"/"===c[0]))return""}else if("background"===b){if(q.lastIndex=0,q.test(c))return""}else if("style"===b){if(r.lastIndex=0,r.test(c))return"";if(s.lastIndex=0,s.test(c)&&(q.lastIndex=0,q.test(c)))return"";!1!==d&&(c=(d=d||h).process(c))}return c=z(c)},b.escapeHtml=i,b.escapeQuote=t,b.unescapeQuote=u,b.escapeHtmlEntities=v,b.escapeDangerHtml5Entities=w,b.clearNonPrintableCharacter=x,b.friendlyAttrValue=y,b.escapeAttrValue=z,b.onIgnoreTagStripAll=function(){return""},b.StripTagBody=function(a,b){"function"!=typeof b&&(b=function(){});var c=!Array.isArray(a),d=[],e=!1;return{onIgnoreTag:function(g,h,i){var j;if(j=g,c?0:-1===f.indexOf(a,j))return b(g,h,i);if(!i.isClosing)return e||(e=i.position),"[removed]";var k="[/removed]",l=i.position+k.length;return d.push([!1!==e?e:i.position,l,]),e=!1,k},remove:function(a){var b="",c=0;return f.forEach(d,function(d){b+=a.slice(c,d[0]),c=d[1]}),b+=a.slice(c)}}},b.stripCommentTag=function(a){for(var b="",c=0;c<a.length;){var d=a.indexOf("<!--",c);if(-1===d){b+=a.slice(c);break}b+=a.slice(c,d);var e=a.indexOf("-->",d);if(-1===e)break;c=e+3}return b},b.stripBlankChar=function(a){var b=a.split("");return(b=b.filter(function(a){var b=a.charCodeAt(0);return 127!==b&&(!(b<=31)||10===b||13===b)})).join("")},b.cssFilter=h,b.getDefaultCSSWhiteList=e},68924:function(a,b,c){var d=c(82302),e=c(73268),f=c(82973);function g(a,b){return new f(b).process(a)}(b=a.exports=g).filterXSS=g,b.FilterXSS=f,(function(){for(var a in d)b[a]=d[a];for(var c in e)b[c]=e[c]})(),"undefined"!=typeof window&&(window.filterXSS=a.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=a.exports)},73268:function(a,b,c){var d=c(75938);function e(a){var b,c=d.spaceIndex(a);return b=-1===c?a.slice(1,-1):a.slice(1,c+1),"/"===(b=d.trim(b).toLowerCase()).slice(0,1)&&(b=b.slice(1)),"/"===b.slice(-1)&&(b=b.slice(0,-1)),b}function f(a){return"</"===a.slice(0,2)}var g=/[^a-zA-Z0-9\\_:.-]/gim;function h(a,b){for(;b<a.length;b++){var c=a[b];if(" "!==c){if("="===c)return b;return -1}}}function i(a,b){for(;b<a.length;b++){var c=a[b];if(" "!==c){if("'"===c||"\""===c)return b;return -1}}}function j(a,b){for(;b>0;b--){var c=a[b];if(" "!==c){if("="===c)return b;return -1}}}function k(a){var b;return"\""===(b=a)[0]&&"\""===b[b.length-1]||"'"===b[0]&&"'"===b[b.length-1]?a.substr(1,a.length-2):a}b.parseTag=function(a,b,c){"use strict";var d="",g=0,h=!1,i=!1,j=0,k=a.length,l="",m="";chariterator:for(j=0;j<k;j++){var n=a.charAt(j);if(!1===h){if("<"===n){h=j;continue}}else if(!1===i){if("<"===n){d+=c(a.slice(g,j)),h=j,g=j;continue}if(">"===n){d+=c(a.slice(g,h)),m=a.slice(h,j+1),l=e(m),d+=b(h,d.length,l,m,f(m)),g=j+1,h=!1;continue}if("\""===n||"'"===n)for(var o=1,p=a.charAt(j-o);""===p.trim()||"="===p;){if("="===p){i=n;continue chariterator}p=a.charAt(j- ++o)}}else if(n===i){i=!1;continue}}return g<a.length&&(d+=c(a.substr(g))),d},b.parseAttr=function(a,b){"use strict";var c=0,e=0,f=[],l=!1,m=a.length;function n(a,c){if(!((a=(a=d.trim(a)).replace(g,"").toLowerCase()).length<1)){var e=b(a,c||"");e&&f.push(e)}}for(var o=0;o<m;o++){var p,q=a.charAt(o);if(!1===l&&"="===q){l=a.slice(c,o),c=o+1,e="\""===a.charAt(c)||"'"===a.charAt(c)?c:i(a,o+1);continue}if(!1!==l&&o===e){if(-1===(p=a.indexOf(q,o+1)))break;n(l,d.trim(a.slice(e+1,p))),l=!1,c=(o=p)+1;continue}if(/\s|\n|\t/.test(q)){if(a=a.replace(/\s|\n|\t/g," "),!1===l){if(-1===(p=h(a,o))){n(d.trim(a.slice(c,o))),l=!1,c=o+1;continue}o=p-1;continue}if(-1!==(p=j(a,o-1)))continue;n(l,k(d.trim(a.slice(c,o)))),l=!1,c=o+1;continue}}return c<a.length&&(!1===l?n(a.slice(c)):n(l,k(d.trim(a.slice(c))))),d.trim(f.join(" "))}},75938:function(a){a.exports={indexOf:function(a,b){var c,d;if(Array.prototype.indexOf)return a.indexOf(b);for(c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return -1},forEach:function(a,b,c){var d,e;if(Array.prototype.forEach)return a.forEach(b,c);for(d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},trim:function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(a){var b=/\s|\n|\t/.exec(a);return b?b.index:-1}}},82973:function(a,b,c){var d=c(29970).FilterCSS,e=c(82302),f=c(73268),g=f.parseTag,h=f.parseAttr,i=c(75938);function j(a){return null==a}function k(a){(a=(function(a){var b={};for(var c in a)b[c]=a[c];return b})(a||{})).stripIgnoreTag&&(a.onIgnoreTag&&console.error("Notes: cannot use these two options \"stripIgnoreTag\" and \"onIgnoreTag\" at the same time"),a.onIgnoreTag=e.onIgnoreTagStripAll),a.whiteList||a.allowList?a.whiteList=(function(a){var b={};for(var c in a)Array.isArray(a[c])?b[c.toLowerCase()]=a[c].map(function(a){return a.toLowerCase()}):b[c.toLowerCase()]=a[c];return b})(a.whiteList||a.allowList):a.whiteList=e.whiteList,a.onTag=a.onTag||e.onTag,a.onTagAttr=a.onTagAttr||e.onTagAttr,a.onIgnoreTag=a.onIgnoreTag||e.onIgnoreTag,a.onIgnoreTagAttr=a.onIgnoreTagAttr||e.onIgnoreTagAttr,a.safeAttrValue=a.safeAttrValue||e.safeAttrValue,a.escapeHtml=a.escapeHtml||e.escapeHtml,this.options=a,!1===a.css?this.cssFilter=!1:(a.css=a.css||{},this.cssFilter=new d(a.css))}k.prototype.process=function(a){if(!(a=(a=a||"").toString()))return"";var b=this,c=b.options,d=c.whiteList,f=c.onTag,k=c.onIgnoreTag,l=c.onTagAttr,m=c.onIgnoreTagAttr,n=c.safeAttrValue,o=c.escapeHtml,p=b.cssFilter;c.stripBlankChar&&(a=e.stripBlankChar(a)),c.allowCommentTag||(a=e.stripCommentTag(a));var q=!1;c.stripIgnoreTagBody&&(k=(q=e.StripTagBody(c.stripIgnoreTagBody,k)).onIgnoreTag);var r=g(a,function(a,b,c,e,g){var q={sourcePosition:a,position:b,isClosing:g,isWhite:Object.prototype.hasOwnProperty.call(d,c)},r=f(c,e,q);if(!j(r))return r;if(q.isWhite){if(q.isClosing)return"</"+c+">";var s=function(a){var b=i.spaceIndex(a);if(-1===b)return{html:"",closing:"/"===a[a.length-2]};var c="/"===(a=i.trim(a.slice(b+1,-1)))[a.length-1];return c&&(a=i.trim(a.slice(0,-1))),{html:a,closing:c}}(e),t=d[c],u=h(s.html,function(a,b){var d=-1!==i.indexOf(t,a),e=l(c,a,b,d);return j(e)?d?(b=n(c,a,b,p))?a+"=\""+b+"\"":a:j(e=m(c,a,b,d))?void 0:e:e});return e="<"+c,u&&(e+=" "+u),s.closing&&(e+=" /"),e+=">"}return j(r=k(c,e,q))?o(e):r},o);return q&&(r=q.remove(r)),r},a.exports=k}}])