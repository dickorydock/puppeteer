"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={sidebar_label:"Page.waitForXPath"},p="Page.waitForXPath() method",l={unversionedId:"api/puppeteer.page.waitforxpath",id:"version-20.7.0/api/puppeteer.page.waitforxpath",title:"Page.waitForXPath() method",description:"Wait for the xpath to appear in page. If at the moment of calling the method the xpath already exists, the method will return immediately. If the xpath doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-20.7.0/api/puppeteer.page.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforxpath",permalink:"/api/puppeteer.page.waitforxpath",draft:!1,tags:[],version:"20.7.0",frontMatter:{sidebar_label:"Page.waitForXPath"},sidebar:"api",previous:{title:"Page.waitForTimeout",permalink:"/api/puppeteer.page.waitfortimeout"},next:{title:"Page.workers",permalink:"/api/puppeteer.page.workers"}},s={},m=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:m};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"pagewaitforxpath-method"}),"Page.waitForXPath() method"),(0,n.kt)("p",null,"Wait for the ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," to appear in page. If at the moment of calling the method the ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the ",(0,n.kt)("inlineCode",{parentName:"p"},"xpath")," doesn't appear after the ",(0,n.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,n.kt)("h4",r({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  waitForXPath(\n    xpath: string,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<Node> | null>;\n}\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"xpath"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A ",(0,n.kt)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/XPath"}),"xpath")," of an element to wait for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.waitforselectoroptions"}),"WaitForSelectorOptions")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)")," Optional waiting parameters")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","Node",">"," ","|"," null",">"),(0,n.kt)("p",null,"Promise which resolves when element specified by xpath string is added to DOM. Resolves to ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if waiting for ",(0,n.kt)("inlineCode",{parentName:"p"},"hidden: true")," and xpath is not found in DOM, otherwise resolves to ",(0,n.kt)("inlineCode",{parentName:"p"},"ElementHandle"),"."),(0,n.kt)("h2",r({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The optional Argument ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," have properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"visible"),": A boolean to wait for element to be present in DOM and to be visible, i.e. to not have ",(0,n.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"hidden"),": A boolean wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,n.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"timeout"),": A number which is maximum time to wait for in milliseconds. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,n.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.page.setdefaulttimeout"}),"Page.setDefaultTimeout()")," method."))),(0,n.kt)("h2",r({},{id:"example"}),"Example"),(0,n.kt)("p",null,"This method works across navigation"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForXPath('//img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n")))}d.isMDXComponent=!0}}]);