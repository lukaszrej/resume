(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+5i3":function(e,t,n){},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},To3n:function(e,t,n){"use strict";var r=n("hJXx");t.a=function(){return r.data.allDataJson.nodes[0]}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,u,l=r(t),p=r(n);if(l&&p){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=p)return!1;var d=t instanceof Date,f=n instanceof Date;if(d!=f)return!1;if(d&&f)return t.getTime()==n.getTime();var h=t instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==n.toString();var y=o(t);if((s=y.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,y[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(u=y[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},hJXx:function(e){e.exports=JSON.parse('{"data":{"allDataJson":{"nodes":[{"name":"Łukasz Rej","profile":"I\'ve been learning frontend for three years. First practical experience as a Junior Frontend Developer is behind me. The company decided to terminate contract with me and others (cornovirus). Now I am looking for new opportunities.","contact":{"location":"Location: Warsaw","phone":"+48 504 264 554","email":"rejlukasz@gmail.com"},"skills":["JavaScript","React.js","CSS","SCSS","HTML5","Twig","JQuery","Rest API","Gatsby.js","GraphQL","headless CMS","Bootstrap","Git","Github","NPM","Webpack","RWD","BEM","Scrum"],"info":{"linkedIn":[{"title":"linkedin.com/in/lukasz-rej","url":"https://linkedin.com/in/lukasz-rej/"}],"github":[{"title":"github.com/lukaszrej","url":"https://github.com/lukaszrej/"}]},"experience":[{"company":"Miinto Group","dates":"12/2019 – 04/2020","position":"Junior Frontend Developer","tasks":["Working on the biggest Miinto project - SEO","Frontend of the project (plain JS, Twig, SCSS)","Administration and SEO panel (Bootstrap, jQuery)","Miinterface - working on library of components for internal usage","Code review and daily reporting (Scrum)"]}],"projects":[{"name":"Calorie Counter - React JS","description":{"technologies":"Technologies: ReactJS (React Router, React DOM), SASS","demo":"lukaszrej.github.io/Calorie-Counter_ReactJS","url":"https://lukaszrej.github.io/Calorie-Counter_ReactJS/","points":["Fetching data from an external API","React\'s Hash Router","Clean code/DRY"]}},{"name":"Blog - Gatsby JS","description":{"technologies":"Technologies: GatsbyJS, Strapi, SCSS","demo":"lukaszrej.github.io/Blog","url":"https://lukaszrej.github.io/Blog/","points":["Fetching posts directly from headless CMS - Strapi","Clean code/BEM/DRY"]}},{"name":"To-Do-List - JavaScript","description":{"technologies":"Technologies: JavaScript, HTML5, CSS3","demo":"lukaszrej.github.io/To-Do-List_JavaScript","url":"https://lukaszrej.github.io/To-Do-List_JavaScript/","points":["Responsive to-do-list written in plain Vanilla JS and CSS"]}},{"name":"Sit-On-Chair","description":{"technologies":"Technologies: HTML5, CSS3, JavaScript","demo":"lukaszrej.github.io/SitOnChair","url":"https://lukaszrej.github.io/SitOnChair/","points":["Fully functional and responsive website"]}},{"name":"Mailing","description":{"technologies":"Technology: HTML","demo":"lukaszrej.github.io/Mailing","url":"https://lukaszrej.github.io/Mailing/","points":["Coded without external stylesheets"]}}],"education":[{"school":"CodersLab IT School","dates":"10/2018 – 06/2019","field":"Field of study: JavaScript Developer: React","scope":"Thematic scope: HTML, CSS, JavaScript, SASS, RWD, jQuery, ECMAScript 6, Git, React JS","degree":null},{"school":"University of Lodz","dates":"10/2010 – 06/2012","field":"Field of study: International Relations","scope":"Specialization: German studies","degree":"Degree: Master of International Relations"},{"school":"University of Lodz","dates":"10/2007 – 06/2010","field":"Field of study: International Relations","scope":"Specialization: German studies","degree":"Degree: Bachelor of International Relations"}],"otherExperience":[{"company":"Mettler-Toledo International, Inc","dates":"01/2019 – 11/2019","position":"SubProcess Leader Dispute Management"},{"company":null,"dates":"01/2018 – 12/2018","position":"Senior AR Accountant"},{"company":null,"dates":"08/2016 – 12/2017","position":"AR Accountant"},{"company":"TRW Automotive (ZF Group)","dates":"01/2015 – 04/2016","position":"Junior AR Accountant"},{"company":"PriceWaterhouseCoopers (PwC)","dates":"10/2013 – 12/2014","position":"Process Specialist"}],"languages":["English - very good knowledge (B2)","German - very good knowledge (B2)","Polish - native"],"consent":"„I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)”."}]}}}')},k2JI:function(e,t,n){"use strict";n("f3/d");var r=n("q1tI"),o=n.n(r),i=n("qhky"),a=n("qKvR"),c=n("wLTh"),s=n("U5uR"),u=n("v32x"),l=n("To3n");t.a=function(){var e=Object(r.useContext)(s.a),t=e.state,n=e.dispatch,p=Object(c.b)(),d=u.data.site.siteMetadata,f=d.title,h=d.charSet,m=d.author,y=d.description,b=d.lang,g=d.robots,T=Object(l.a)().name;return Object(a.d)(o.a.Fragment,null,Object(a.d)(i.a,null,Object(a.d)("title",null,f+" | "+m),Object(a.d)("meta",{charSet:h}),Object(a.d)("meta",{name:"author",content:m}),Object(a.d)("meta",{name:"description",content:y}),Object(a.d)("meta",{name:"robots",content:g}),Object(a.d)("html",{lang:b})),Object(a.d)(a.a,{styles:Object(a.c)("body{background-color:",t.isDark?p.dark.background:p.light.background,"}h1,h2,p,div,a{color:",t.isDark?p.dark.fontColor:p.light.fontColor,'}div.p-header__button{background-image:url("',t.isDark?p.dark.sunWhite:p.light.sunBlack,'")}')}),Object(a.d)("div",{className:"p-header"},Object(a.d)("header",null,Object(a.d)("h1",{className:"p-header__title"},T)),Object(a.d)("div",{className:"p-header__button",onClick:function(){return n({type:"TOGGLE_DARK_MODE"})},onKeyDown:function(){return n({type:"TOGGLE_DARK_MODE"})},role:"button",tabIndex:"0"})))}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,i,a,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),p=n("bmMU"),d=n.n(p),f=n("q1tI"),h=n.n(f),m=n("MgzW"),y=n.n(m),b="bodyAttributes",g="htmlAttributes",T="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",C="href",O="http-equiv",A="innerHTML",j="itemprop",E="name",k="property",R="rel",L="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",x="defer",D="encodeSpecialCharacters",J="onChangeClientState",N="titleTemplate",F=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=Z(e,v.TITLE),n=Z(e,N);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,I);return t||r||void 0},Y=function(e){return Z(e,J)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===R&&"canonical"===e[n].toLowerCase()||s===R&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==A&&c!==w&&c!==j||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=y()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,p=e.title,d=e.titleAttributes;se(v.BODY,r),se(v.HTML,o),ce(p,d);var f={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},h={},m={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=f[e].oldTags)})),t&&t(),s(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=pe(n,r),[h.a.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return pe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===A||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,p=void 0===l?"":l,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(g,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,s,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:p,titleAttributes:d},r)}},he=l()((function(e){return{baseTag:Q([C,P],e),bodyAttributes:V(b,e),defer:Z(e,x),encode:Z(e,D),htmlAttributes:V(g,e),linkTags:X(v.LINK,[R,C],e),metaTags:X(v.META,[E,S,O,k,j],e),noscriptTags:X(v.NOSCRIPT,[A],e),onChangeClientState:Y(e),scriptTags:X(v.SCRIPT,[L,A],e),styleTags:X(v.STYLE,[w],e),title:U(e),titleAttributes:V(T,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return G({},o,((t={})[r.type]=a,t.titleAttributes=G({},i),t));case v.BODY:return G({},o,{bodyAttributes:G({},i)});case v.HTML:return G({},o,{htmlAttributes:G({},i)})}return G({},o,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),r=G({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind}).call(this,n("yLpj"))},v32x:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Resume","author":"Łukasz Rej","description":"Personal resume. Created with GatsbyJS","lang":"en","charSet":"utf-8","robots":"noindex, nofollow "}}}}')},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-9c4d2d070190f37ffdf2.js.map