(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FhjM:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),r=t("tRbT"),o=t("ofer"),c=t("hlie"),s=t("OYT4"),l=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"});n.default=function(e){var n=e.donor,t=e.cart;return i.a.createElement(r.a,{item:!0,xs:12},i.a.createElement(o.a,{variant:"h4",component:"h2"},"Thank you",(null==n?void 0:n.fullName)&&", "+n.fullName+", "," for your contribution!"),i.a.createElement("br",null),i.a.createElement(o.a,{paragraph:!0},"Next steps:"),i.a.createElement(o.a,{component:"span"},i.a.createElement("ol",null,i.a.createElement("li",null,"Send your ",l.format(t.totalAmount)," payment to our ",i.a.createElement(c.a,{href:"https://www.paypal.me/berlinbakers/"+t.totalAmount+"EUR",target:"_blank",rel:"noreferrer"},"PayPal.me account"),"."),i.a.createElement("li",null,"Receive a confirmation email from us with more details on your ",t.fulfillment===s.b.DropOff?"delivery":"pickup","."),i.a.createElement("li",null,"On Saturday, 20 June, 2020, your items will be fresh-baked and ready for you."),i.a.createElement("li",null,"All proceeds will be donated on Sunday, 21 June, 2020."))))}},G7As:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),i=t("i8i4"),r=!0,o=!1,c=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(r=!0)}function u(){r=!1}function d(){"hidden"===this.visibilityState&&o&&(r=!0)}function f(e){var n,t,a,i=e.target;try{return i.matches(":focus-visible")}catch(o){}return r||(t=(n=i).type,!("INPUT"!==(a=n.tagName)||!s[t]||n.readOnly)||"TEXTAREA"===a&&!n.readOnly||!!n.isContentEditable)}function m(){o=!0,window.clearTimeout(c),c=window.setTimeout((function(){o=!1}),100)}function p(){return{isFocusVisible:f,onBlurVisible:m,ref:a.useCallback((function(e){var n,t=i.findDOMNode(e);null!=t&&((n=t.ownerDocument).addEventListener("keydown",l,!0),n.addEventListener("mousedown",u,!0),n.addEventListener("pointerdown",u,!0),n.addEventListener("touchstart",u,!0),n.addEventListener("visibilitychange",d,!0))}),[])}}},GIek:function(e,n,t){"use strict";function a(e,n){"function"==typeof e?e(n):e&&(e.current=n)}t.d(n,"a",(function(){return a}))},bfFb:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),i=t("GIek");function r(e,n){return a.useMemo((function(){return null==e&&null==n?null:function(t){Object(i.a)(e,t),Object(i.a)(n,t)}}),[e,n])}},hlie:function(e,n,t){"use strict";var a=t("wx14"),i=t("Ff2n"),r=t("q1tI"),o=t("iuhU"),c=t("NqtD"),s=t("H2TA"),l=t("G7As"),u=t("bfFb"),d=t("ofer"),f=r.forwardRef((function(e,n){var t=e.classes,s=e.className,f=e.color,m=void 0===f?"primary":f,p=e.component,x=void 0===p?"a":p,g=e.onBlur,b=e.onFocus,v=e.TypographyClasses,w=e.underline,y=void 0===w?"hover":w,h=e.variant,j=void 0===h?"inherit":h,E=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=Object(l.a)(),S=O.isFocusVisible,k=O.onBlurVisible,C=O.ref,I=r.useState(!1),N=I[0],T=I[1],D=Object(u.a)(n,C);return r.createElement(d.a,Object(a.a)({className:Object(o.a)(t.root,t["underline".concat(Object(c.a)(y))],s,N&&t.focusVisible,"button"===x&&t.button),classes:v,color:m,component:x,onBlur:function(e){N&&(k(),T(!1)),g&&g(e)},onFocus:function(e){S(e)&&T(!0),b&&b(e)},ref:D,variant:j},E))}));n.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},tRbT:function(e,n,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("DNiP"),t("pIFo"),t("8+KV");var a=t("Ff2n"),i=t("wx14"),r=t("q1tI"),o=t("iuhU"),c=t("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=parseFloat(e);return"".concat(t/n).concat(String(e).replace(String(t),"")||"px")}var d=r.forwardRef((function(e,n){var t=e.alignContent,c=void 0===t?"stretch":t,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,d=e.className,f=e.component,m=void 0===f?"div":f,p=e.container,x=void 0!==p&&p,g=e.direction,b=void 0===g?"row":g,v=e.item,w=void 0!==v&&v,y=e.justify,h=void 0===y?"flex-start":y,j=e.lg,E=void 0!==j&&j,O=e.md,S=void 0!==O&&O,k=e.sm,C=void 0!==k&&k,I=e.spacing,N=void 0===I?0:I,T=e.wrap,D=void 0===T?"wrap":T,F=e.xl,W=void 0!==F&&F,A=e.xs,M=void 0!==A&&A,B=e.zeroMinWidth,G=void 0!==B&&B,R=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(o.a)(u.root,d,x&&[u.container,0!==N&&u["spacing-xs-".concat(String(N))]],w&&u.item,G&&u.zeroMinWidth,"row"!==b&&u["direction-xs-".concat(String(b))],"wrap"!==D&&u["wrap-xs-".concat(String(D))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==h&&u["justify-xs-".concat(String(h))],!1!==M&&u["grid-xs-".concat(String(M))],!1!==C&&u["grid-sm-".concat(String(C))],!1!==S&&u["grid-md-".concat(String(S))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==W&&u["grid-xl-".concat(String(W))]);return r.createElement(m,Object(i.a)({className:z,ref:n},R))})),f=Object(c.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,n){var t={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(t["spacing-".concat(n,"-").concat(a)]={margin:"-".concat(u(i,2)),width:"calc(100% + ".concat(u(i),")"),"& > $item":{padding:u(i,2)}})})),t}(e,"xs"),e.breakpoints.keys.reduce((function(n,t){return function(e,n,t){var a={};l.forEach((function(e){var n="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[n]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[n]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[n]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===t?Object(i.a)(e,a):e[n.breakpoints.up(t)]=a}(n,e,t),n}),{}))}),{name:"MuiGrid"})(d);n.a=f}}]);
//# sourceMappingURL=component---src-pages-success-tsx-158cde08d4f75eda093d.js.map