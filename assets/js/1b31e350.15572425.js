"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54297],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),f=o,y=b["".concat(p,".").concat(f)]||b[f]||u[f]||a;return n?t.createElement(y,i(i({ref:r},c),{},{components:n})):t.createElement(y,i({ref:r},c))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1192:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var t=n(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_label:"LaunchOptions"},s="LaunchOptions type",p={unversionedId:"browsers-api/browsers.launchoptions",id:"version-19.8.5/browsers-api/browsers.launchoptions",title:"LaunchOptions type",description:"Signature:",source:"@site/versioned_docs/version-19.8.5/browsers-api/browsers.launchoptions.md",sourceDirName:"browsers-api",slug:"/browsers-api/browsers.launchoptions",permalink:"/browsers-api/browsers.launchoptions",draft:!1,tags:[],version:"19.8.5",frontMatter:{sidebar_label:"LaunchOptions"},sidebar:"browsersApi",previous:{title:"InstallOptions",permalink:"/browsers-api/browsers.installoptions"},next:{title:"makeProgressCallback",permalink:"/browsers-api/browsers.makeprogresscallback"}},l={},c=[{value:"Signature:",id:"signature",level:4}],u={toc:c};function b(e){var{components:r}=e,n=a(e,["components"]);return(0,t.kt)("wrapper",o({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",o({},{id:"launchoptions-type"}),"LaunchOptions type"),(0,t.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export type LaunchOptions = {\n  executablePath: string;\n  pipe?: boolean;\n  dumpio?: boolean;\n  args?: string[];\n  env?: Record<string, string | undefined>;\n  handleSIGINT?: boolean;\n  handleSIGTERM?: boolean;\n  handleSIGHUP?: boolean;\n  detached?: boolean;\n  onExit?: () => Promise<void>;\n};\n")))}b.isMDXComponent=!0}}]);