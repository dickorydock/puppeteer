"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57635],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},44407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});t(67294);var r=t(3905);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={},l="Configuration",p={unversionedId:"guides/configuration",id:"version-20.7.0/guides/configuration",title:"Configuration",description:"All defaults in Puppeteer can be customized in two ways:",source:"@site/versioned_docs/version-20.7.0/guides/configuration.mdx",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/guides/configuration",draft:!1,tags:[],version:"20.7.0",frontMatter:{},sidebar:"docs",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"Query Selectors",permalink:"/guides/query-selectors"}},u={},c=[{value:"Configuration files",id:"configuration-files",level:2},{value:"Examples",id:"examples",level:3},{value:"Changing the default cache directory",id:"changing-the-default-cache-directory",level:4},{value:"Environment variables",id:"environment-variables",level:2}],s={toc:c};function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"All defaults in Puppeteer can be customized in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",i({parentName:"li"},{href:"#configuration-files"}),"Configuration files")," (",(0,r.kt)("strong",{parentName:"li"},"recommended"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",i({parentName:"li"},{href:"#environment-variables"}),"Environment variables"))),(0,r.kt)("admonition",i({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Note that some options are only customizable through environment variables (such\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),").")),(0,r.kt)("admonition",i({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"Puppeteer's configuration files and environment variables are ignored by ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer-core"),".")),(0,r.kt)("h2",i({},{id:"configuration-files"}),"Configuration files"),(0,r.kt)("p",null,"Configuration files are the ",(0,r.kt)("strong",{parentName:"p"},"recommended")," choice for configuring Puppeteer.\nPuppeteer will look up the file tree for any of the following formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.cjs"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.js"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc")," (YAML/JSON),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.json"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".puppeteerrc.yaml"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer.config.js"),", and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"puppeteer.config.cjs"))),(0,r.kt)("p",null,"Puppeteer will also read a ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," key from your application's\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",i({parentName:"p"},{href:"../api/puppeteer.configuration"}),(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))," interface for possible\noptions."),(0,r.kt)("admonition",i({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"After adding a configuration file, you may need to remove and reinstall\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," for it to take effect if the changes affect installation.")),(0,r.kt)("h3",i({},{id:"examples"}),"Examples"),(0,r.kt)("h4",i({},{id:"changing-the-default-cache-directory"}),"Changing the default cache directory"),(0,r.kt)("p",null,"Starting in v19.0.0, Puppeteer stores browsers in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.cache/puppeteer")," to\nglobally cache browsers between installation. This can cause problems if\n",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," is packed during some build step and moved to a fresh location. The\nfollowing configuration can solve this issue (reinstall ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," to take\neffect):"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-js",metastring:'title="project-directory/.puppeteerrc.cjs"',title:'"project-directory/.puppeteerrc.cjs"'}),"const {join} = require('path');\n\n/**\n * @type {import(\"puppeteer\").Configuration}\n */\nmodule.exports = {\n  // Changes the cache location for Puppeteer.\n  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),\n};\n")),(0,r.kt)("admonition",i({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Notice this is only possible with CommonJS configuration files as information\nabout the ambient environment is needed (in this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"__dirname"),").")),(0,r.kt)("h2",i({},{id:"environment-variables"}),"Environment variables"),(0,r.kt)("p",null,"Along with configuration files, Puppeteer looks for certain\n",(0,r.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Environment_variable"}),"environment variables")," for\ncustomizing behavior. Environment variables will always override configuration\nfile options when applicable."),(0,r.kt)("p",null,"The following options are ",(0,r.kt)("em",{parentName:"p"},"environment-only")," options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," - defines HTTP proxy settings that are\nused to download and run the browser.")),(0,r.kt)("p",null,"All other options can be found in the documentation for the\n",(0,r.kt)("a",i({parentName:"p"},{href:"../api/puppeteer.configuration"}),(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))," interface."))}f.isMDXComponent=!0}}]);