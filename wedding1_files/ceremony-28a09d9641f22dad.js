(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8299],{20457:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[weddingGuid]/venue/ceremony",function(){return c(32504)}])},48798:function(a,b,c){"use strict";c.r(b),c.d(b,{pushToasts:function(){return g},getCeremony:function(){return h},updateCeremonyInstant:function(){return i},updateCeremony:function(){return j},setQueueUploadCeremony:function(){return k},addUploadCeremony:function(){return l},uploadPhotosCeremony:function(){return m},deleteUploadCeremony:function(){return n}});var d=c(88804),e=c(88086),f=c(27832);function g(a,b){a({type:e.I,payload:f.c.errorsForNotifications(f.c.extractErrors(b))})}function h(a,b,c){return function(e){e({type:d.JQ,payload:null}),f.c.apiCall("GET","".concat("https://planning.wedding","/api/v1/project/ceremony/").concat(a),b,function(a){!0===a.success?(e({type:d.JQ,payload:a.item}),c&&c()):g(e,a.errors)})}}function i(a){return{type:d.K6,payload:a}}function j(a,b,c){var e=void 0!==c&&c;return function(c){f.c.apiCall("PUT","".concat("https://planning.wedding","/api/v1/project/ceremony/").concat(a),b,function(a){!0===a.success?e||c({type:d.JQ,payload:a.item}):g(c,a.errors)})}}function k(a){return{type:d.C5,payload:a}}function l(a){return{type:d.OH,payload:a}}function m(a,b,c,d){return function(e){f.c.apiCall("POST","".concat("https://planning.wedding","/api/v1/upload/image/w/").concat(a,"/").concat(b),c,function(a){!0===a.success?d(a.result):g(e,a.errors)},null,!1)}}function n(a){return{type:d.iZ,payload:a}}},11413:function(a,b,c){"use strict";var d=c(85893),e=c(67294),f=c(71893),g=c.n(f);function h(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function i(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function k(a,b){return(k=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var l=function(a){"use strict";!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&k(a,b)}(l,a);var b,c,e,f=function(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d,e,f,g=j(a);if(b){var i=j(this).constructor;f=Reflect.construct(g,arguments,i)}else f=g.apply(this,arguments);return d=this,(e=f)&&("object"==((c=e)&&"undefined"!=typeof Symbol&&c.constructor===Symbol?"symbol":typeof c)||"function"==typeof e)?e:h(d)}}(l);function l(){var a;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,l),a=f.apply(this,arguments),!function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}(h(a),"shouldComponentUpdate",function(b){return b.isShowPulse!==a.props.isShowPulse||b.defaultAddress!==a.props.defaultAddress}),a}return b=l,c=[{key:"render",value:function(){var a=this,b=this.props,c=b.isShowPulse,e=b.defaultAddress;return(0,d.jsxs)("div",{className:"venue__add-vendor-container",onClick:function(){return a.props.handleShowSearchDialog(e)},children:[(0,d.jsxs)("div",{className:"venue__add-vendor-btn",children:[(0,d.jsx)("div",{className:"venue__add-vendor-plus"}),(0,d.jsx)("span",{className:"text-not-selectable",children:g().get("search.find_and_add_vendors").d("…")})]}),c?(0,d.jsx)("div",{className:"venue__pulse"}):null]})}}],i(b.prototype,c),e&&i(b,e),l}(e.Component);b.Z=l},89597:function(a,b,c){"use strict";var d=c(85893),e=c(67294),f=c(55162),g=c(56441),h=c.n(g),i=c(71893),j=c.n(i);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}b.Z=function(a){var b=function(a){var b=l({},n)[a].id,c=Array.from(u),d={};c.forEach(function(a){return d[a]=!0}),d[b]?delete d[b]:d[b]=!0,v(Object.keys(d))},c=function(a){r(a,u),v([])},g=function(a,b){var c=i||30;return(0,d.jsxs)("div",{className:"bp3-non-ideal-state",children:[(0,d.jsx)("br",{}),!(void 0!==b&&b)&&(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"bp3-non-ideal-state-visual",children:(0,d.jsx)("span",{className:"bp3-icon bp3-icon-cloud-upload"})}),(0,d.jsx)("h4",{className:"bp3-heading",children:j().get("upload_photos").d("…")})]}),(0,d.jsx)("p",{className:"wa-p",children:j().get("upload_try").d("…")}),(0,d.jsxs)("p",{className:"wa-p",children:[(0,d.jsx)("b",{children:j().get("upload_limit_count",{limit:c}).d("…")}),"\xa0",a&&Array.isArray(a)&&a.length>0?(0,d.jsx)("b",{children:j().get("upload_more",{value:c-a.length}).d("…")}):null,(0,d.jsx)("br",{}),j().get("upload_limit_size",{size:(k||20)+"Mb"}).d("…")]}),(0,d.jsx)("button",{className:"bp3-button bp3-intent-purple",children:j().get("upload_btn").d("…")}),(0,d.jsx)("br",{})]})},i=a.countLimit,k=a.sizeLimit,m=a.isActive,n=a.photos,o=a.queue,p=a.enableImageSelection,q=a.handleOnDrop,r=a.handleDeleteImages,s=a.handleNotificationActions,t=(0,e.useState)([]),u=t[0],v=t[1],w=(0,e.useRef)(),x={};u.forEach(function(a){return x[a]=!0});var y=n&&Array.isArray(n)?n.map(function(a,b){return{nano:a.nano,src:a.normal.f,thumbnail:a.thumb360.f,thumbnailWidth:a.thumb360.w,thumbnailHeight:a.thumb360.h,isSelected:!!x[a.id]}}):[];return(0,d.jsx)(f.ZP,{accept:"image/jpeg, image/png, image/webp, image/heic, image/avif",onDrop:function(a){if(m){var b=i||30,c=a.length,d=b-((n&&Array.isArray(n)?n.length:0)+(o||0));c>d&&(a=a.filter(function(a,b){return b<d}),s.pushToasts([{message:j().get("upload_reached_limit",{count:b}).d("…")}])),q(a,k||20)}},children:function(a){var e,f,i=a.getRootProps,k=a.getInputProps;return(0,d.jsxs)("div",l({className:"post-event__dropzone"},i(),{children:[(0,d.jsx)("input",l({},k())),(0,d.jsxs)("div",{children:[(0,d.jsx)(h(),{images:y,backdropClosesModal:!0,enableImageSelection:p,onSelectImage:b,ref:w}),o?(e=o,(0,d.jsx)("div",{className:"photo-loading",children:(0,d.jsxs)("span",{className:"photo-loading__counter",children:["+",e]})})):null]}),(f=u,(0,d.jsx)("div",{className:"col-xs-12 text-center",children:f.length>0?(0,d.jsx)("button",{className:"bp3-button bp3-intent-danger",onClick:c,children:j().get("upload_delete_btn").d("…")}):null})),y.length>0?g(n,!0):g()]}))}})}},49836:function(a,b,c){"use strict";c.d(b,{Z:function(){return p}});var d=c(85893),e=c(67294),f=c(71893),g=c.n(f),h=c(65732),i=c(53766),j=(0,e.memo)(function(a){var b,c=function(a,b){-1===a.target.className.indexOf("bp3-icon-more")&&(n(b,p),a.preventDefault())},e=function(a,b){o(b,p),a.preventDefault(),a.stopPropagation()},f=a.data,j=a.fullAccess,k=a.allVendors,l=a.isSuggestion,m=a.handleExtractPrimaryCategory,n=a.handleShowBusinessDialog,o=a.handleUnfollowVendorFromWedding,p=f._id,q=f.business_guid,r=f&&f.details?f.details:{},s=r.kind,t=r.title,u=r.primary,v=r.cover,w=r.pattern,x=r.alias,y=null;return v&&(y={backgroundImage:"url(".concat(v.thumb360.f,"), url(").concat(v.nano,")"),backgroundPosition:"center center",backgroundSize:"cover"}),(0,d.jsx)("div",{className:"business-button__container",onClick:function(a){return c(a,x,p)},children:(0,d.jsx)("div",{className:"business-button__card",style:y,children:(0,d.jsxs)("div",{className:"business-button__card-pattern business-profile__header-pattern business-profile__header-pattern-"+w,children:[l?(0,d.jsx)("span",{className:"business-button__card-near-tag",children:g().get("vendor.near")}):null,j?(0,d.jsx)(h.J2,{content:(b=q,(0,d.jsx)("ul",{className:"bp3-menu bp3-elevation-1",children:(0,d.jsxs)("li",{children:[(0,d.jsx)("button",{type:"button",className:"bp3-menu-item bp3-icon-eye-open bp3-popover-dismiss",onClick:function(a){return c(a,x,p)},children:g().get("vendor.show_details_btn")}),l?null:(0,d.jsx)("button",{type:"button",className:"bp3-menu-item bp3-icon-trash bp3-intent-danger bp3-popover-dismiss",onClick:function(a){return e(a,b,p)},children:g().get("vendor.remove_btn")})]})})),interactionKind:h.V3.CLICK,position:i.Ly.BOTTOM_RIGHT,className:"business-button__card-settings",minimal:!0,usePortal:!0,children:(0,d.jsx)("button",{className:"bp3-button bp3-minimal bp3-intent-danger bp3-icon-more",onClick:function(a){a.preventDefault()}})}):null,"venue"===s?(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"business-button__card-venue-tag",children:g().get("dict_venue")})}):null,(0,d.jsx)("div",{className:"business-button__card-category",children:(0,d.jsx)("p",{children:m(s,u)})}),(0,d.jsx)("h2",{className:"business-button__card-title",children:t})]})})})},function(a,b){return b.data.business_guid===a.data.business_guid&&b.data.bookmark===a.data.bookmark&&b.data.details.pattern===a.data.details.pattern&&b.data.details.kind===a.data.details.kind&&b.data.details.primary===a.data.details.primary&&b.data.details.title===a.data.details.title&&b.data.details.cover===a.data.details.cover}),k=c(11413),l=c(68110),m=c(96888);function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return(function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}})(a)||(function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)})(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance")})()}var p=function(a){var b=function(a){if("full"!==w)return null;r.unfollowVendorFromWedding(a,v,function(a){h&&h.send({action:"unfollowVendorFromWeddingInstant",payload:a})})},c=a.className,f=a.headline,g=a.wedding,h=a.socket,i=a.defaultAddress,p=a.vendors,q=a.isShowSuggestedVendors,r=a.handleVendorsActions,s=a.handleShowSearchDialog,t=a.handleShowBusinessDialog,u=a.handleDeleteCustomVendor,v=g.guid,w=g.access,x=p.list,y=p.suggested,z=(0,e.useState)(function(){return m.H.getSingleVendorObject()})[0],A=(0,e.useState)(function(){return m.H.getSingleVenueObject()})[0];return(0,d.jsxs)("div",{className:c||"venue__vendors",children:[f&&(0,d.jsx)("h3",{className:"ceremony__h3",children:f}),x?function(a,c){var f="full"===w,g=[],h={};return q&&(a.forEach(function(a){a.business_guid&&(h[a.business_guid]=!0)}),c&&Array.isArray(c)&&(g=c.filter(function(a){return!h[a.business_guid]}))),a=o(a).concat(o(g)).map(function(c,e){var g=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){n(a,b,c[b])})}return a}({},c);return"custom"===c.type&&(g.details.card&&(g.details.cover=g.details.card),g.details.category&&(g.details.primary=g.details.category)),(0,d.jsx)(j,{data:g,fullAccess:f,allVendors:a,isSuggestion:c.is_suggestion,handleExtractPrimaryCategory:function(a,b){return"vendor"===a?z[b]:A[b]},handleShowBusinessDialog:t,handleUnfollowVendorFromWedding:"custom"===c.type?u:b},e+"_"+c._id)}),(0,d.jsxs)(e.Fragment,{children:[a,(0,d.jsx)(k.Z,{isShowPulse:!(a.length>0),defaultAddress:i,handleShowSearchDialog:s})]})}(x,y):(0,d.jsx)(l.Z,{})]})}},32504:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return I}});var d=c(85893),e=c(67294),f=c(11163),g=c(70457),h=c(27208),i=c(41664),j=c(14890),k=c(66338),l=c(32743),m=c(59717),n=c(1237),o=c(48798),p=c(73572),q=c(30834),r=c(65732),s=c(14715),t=c(28258),u=c(89597);c(49836);var v=c(35196),w=c(20569),x=c(5582),y=c.n(x),z=c(68110),A=c(66912),B=c(91620),C=A.S.extract("templates/app"),D=C.t,E=A.S.extract("project/ceremony").t,F=A.S.extract(""),G=F.t,H={},I=!0;b.default=(0,k.$j)(function(a){return{user:a.user,wedding:a.wedding,vendors:a.vendors,ceremony:a.ceremony,geolocation:a.geolocation}},function(a){return{notificationActions:(0,j.DE)(l,a),weddingActions:(0,j.DE)(m,a),vendorsActions:(0,j.DE)(n,a),ceremonyActions:(0,j.DE)(o,a)}})(function(a){var b=function(){var a=W.updateCeremonyInstant,b=W.setQueueUploadCeremony,c=W.addUploadCeremony,d=W.deleteUploadCeremony,e=V.followVendorToWeddingInstant,f=V.updateVendorInstant,g=V.unfollowVendorFromWeddingInstant;I.setCallBackEvents({updateCeremonyInstant:a,setQueueUploadCeremony:b,addUploadCeremony:c,deleteUploadCeremony:d,followVendorToWeddingInstant:e,updateVendorInstant:f,unfollowVendorFromWeddingInstant:g})},c=function(a){var b=S.photos;clearInterval(H.photos),H.photos=setTimeout(function(){W.updateCeremony(o,{photos:b},!0)},void 0!==a&&a?0:300)},j=function(a,b){if("full"!==Q.access)return null;var c=0;a.forEach(function(a){var d=1048576*b;if(a.size>d)T.pushToasts([{message:G("upload_file_size_too_large",{size:b})}]);else{var e=new FormData();e.append("files",a),Y(Q._id,"ceremony",e,function(a){$(a),I.send({action:"addUploadCeremony",payload:a}),ea(!0)}),c+=1}}),c>0&&(Z(c),I.send({action:"setQueueUploadCeremony",payload:c}))},k=function(a){if("full"!==Q.access)return null;U.updateWedding(o,a,null,null,!0),U.updateWeddingInstant(a),I.send({action:"updateWeddingInstant",payload:a})},l=function(a,b,c){var d=a&&b?"".concat(a.replace(/ /g,"_"),"_&_").concat(b.replace(/ /g,"_"),"_"):"";return"".concat(d,"vendors_").concat(y()().format("DD-MMMM-YYYY"),".").concat(c)},m=(0,f.useRouter)(),n=m.locale,o=m.query.weddingGuid,x=(0,e.useRef)(null);n!==x.current&&(A.S.load(n,a.dict),x.current=n);var C=(0,e.useRef)(),F=C&&C.current?C.current:{},I=F.socket;F.handleShowSearchDialog,F.handleShowBusinessDialog;var J,K,L,M,N,O,P,Q=a.wedding,R=a.vendors,S=a.ceremony,T=a.notificationActions,U=a.weddingActions,V=a.vendorsActions,W=a.ceremonyActions,X=S.photos,Y=W.uploadPhotosCeremony,Z=W.setQueueUploadCeremony,$=W.addUploadCeremony,_=(0,e.useState)(0),aa=_[0],ba=_[1],ca=(0,e.useState)(null),da=ca[0],ea=ca[1];return(0,g.C)(function(){o&&"[weddingGuid]"!==o&&(W.getCeremony(o),V.getVendors(o))},[o]),(0,h.D)(function(){ba(aa+1)},[n]),(0,e.useEffect)(function(){return I&&b(I),function(){I&&I.setCallBackEvents({})}},[I]),(0,e.useEffect)(function(){da&&(c(!0),ea(null))},[X,da]),(0,d.jsxs)(p.Z,{ref:C,children:[(J=(0,v.R)("/project/".concat(o,"/venue/ceremony"),n),(0,d.jsx)(q.Z,{router:m,title:E("h2"),description:E("p"),alternate:"all",disableIndexing:"none",canonical:J,schemaLogo:JSON.stringify([B.c.generate(n)])})),(0,d.jsxs)("main",{className:"venue__container",children:[(0,d.jsx)("h1",{className:"wa-h2",children:E("h2")}),(0,d.jsx)("p",{className:"wa-p",children:E("p")}),Q._id?(L=(K=S||{}).comment,M=K.photos,N=K.queue,O=Q.ceremony_date,P=Q.ceremony_location,(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"venue__info",children:[(0,d.jsxs)("div",{className:"venue__info-details venue__info-calendar",children:[(0,d.jsx)("h2",{className:"venue__info-details-h2",children:E("ceremony_date")}),(0,d.jsx)(s.Z,{locale:n,weddingDate:O,placeholder:D("set_wedding_date"),handleUpdateDate:function(a){k({ceremony_date:a})}})]}),(0,d.jsxs)("div",{className:"venue__info-details venue__info-location",children:[(0,d.jsx)("h2",{className:"venue__info-details-h2",children:E("ceremony_location")}),(0,d.jsx)(t.Z,{location:P,placeholder:D("set_location"),dialogTitle:D("set_ceremony_location"),handleSetLocation:function(a){k({ceremony_location:a})}})]}),Q.hidden_services&&!Q.hidden_services.ceremony_layout?(0,d.jsxs)("div",{className:"venue__info-details venue__info-layout",children:[(0,d.jsx)("h2",{className:"venue__info-details-h2",children:E("ceremony_layout")}),(0,d.jsx)("div",{className:"venue__info-details-date",children:(0,d.jsx)(i.default,{href:"/project/".concat(o,"/supplies/ceremony-layout"),children:(0,d.jsx)("a",{children:E("plan_venue_layout")})})})]}):null]}),(0,d.jsx)("div",{className:"venue__comment",children:(0,d.jsx)(r.sL,{className:"basic__comment",value:L||"",multiline:!0,minLines:4,maxLines:1000,onChange:function(a){if("full"!==Q.access)return null;var b={comment:a};clearInterval(H.comment),H.comment=setTimeout(function(){W.updateCeremony(o,b,!0)},300),W.updateCeremonyInstant(b),I.send({action:"updateCeremonyInstant",payload:b})},placeholder:E("description_placeholder")})}),(0,d.jsx)(u.Z,{photos:M||[],queue:N,enableImageSelection:"full"===Q.access,isActive:"full"===Q.access,handleOnDrop:function(a,b){return j(a,b)},handleDeleteImages:function(a,b){if("full"!==Q.access)return null;W.deleteUploadCeremony(b),I.send({action:"deleteUploadCeremony",payload:b}),ea(!0),a.preventDefault(),a.stopPropagation()},handleNotificationActions:T}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"text-center",children:(0,d.jsx)(w.Z,{title:D("download_pdf_btn"),handleExport:function(b){var c=Q.guid,d=Q.groom,e=Q.bride,f={wli:a.user.wli,filename:l(d,e,"pdf")};V.getPdf(c,f,b)}})}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]})):(0,d.jsx)(z.Z,{})]})]})})},27208:function(a,b,c){"use strict";c.d(b,{D:function(){return e}});var d=c(67294);function e(a,b){var c=(0,d.useRef)(!1);(0,d.useEffect)(function(){c.current?a():c.current=!0},b)}}},function(a){a.O(0,[4885,4317,4116,5732,4734,6441,5162,3458,5506,3524,7868,7811,6120,3894,8262,1837,8470,6179,5083,42,1385,9774,2888,179],function(){return a(a.s=20457)}),_N_E=a.O()}])