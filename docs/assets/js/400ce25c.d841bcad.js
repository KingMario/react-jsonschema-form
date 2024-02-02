"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[2508],{3636:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>y});var r=a(5668);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,y=p["".concat(m,".").concat(d)]||p[d]||g[d]||o;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(5307),n=(a(5668),a(3636));const o={},l="Themes",i={unversionedId:"usage/themes",id:"usage/themes",title:"Themes",description:"By default, this library renders form fields and widgets leveraging the Bootstrap semantics,",source:"@site/docs/usage/themes.md",sourceDirName:"usage",slug:"/usage/themes",permalink:"/react-jsonschema-form/docs/usage/themes",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/usage/themes.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Usage and Customization",permalink:"/react-jsonschema-form/docs/usage/"},next:{title:"Validation",permalink:"/react-jsonschema-form/docs/usage/validation"}},m={},s=[{value:"Supported themes",id:"supported-themes",level:2},{value:"Using themes",id:"using-themes",level:2},{value:"Customizing with other frameworks",id:"customizing-with-other-frameworks",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"themes"},"Themes"),(0,n.yg)("p",null,"By default, this library renders form fields and widgets leveraging the ",(0,n.yg)("a",{parentName:"p",href:"http://getbootstrap.com/"},"Bootstrap")," semantics,\nmeaning that you must load the Bootstrap stylesheet on the page to view the form properly. You can use another theme by importing one of the packages listed below."),(0,n.yg)("h2",{id:"supported-themes"},"Supported themes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Theme Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Package Name / Link"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"antd"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/antd"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Bootstrap 3 (default)"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/core"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Bootstrap 4"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/bootstrap-4"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Chakra UI"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/chakra-ui"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fluent-ui"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/fluent-ui"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"fluentui-rc"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/fluentui-rc"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"material-ui 4"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/material-ui"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"material-ui 5"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/mui"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Semantic UI"),(0,n.yg)("td",{parentName:"tr",align:null},"Published"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"@rjsf/semantic-ui"))))),(0,n.yg)("h2",{id:"using-themes"},"Using themes"),(0,n.yg)("p",null,"To use a theme from a package, just import the ",(0,n.yg)("inlineCode",{parentName:"p"},"<Form />")," component from that package. For example, to use the material ui form,\nfirst install both ",(0,n.yg)("inlineCode",{parentName:"p"},"@rjsf/core")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"@rjsf/material-ui"),". Then you can import the form by doing:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"import Form from '@rjsf/material-ui';\n")),(0,n.yg)("p",null,"If you would like to contribute a theme with a new UI framework, please develop the theme using the ",(0,n.yg)("inlineCode",{parentName:"p"},"withTheme")," component described in ",(0,n.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/advanced-customization/custom-themes"},"Theme Customization")," and make a PR!"),(0,n.yg)("p",null,"You can also use the uiSchema to add custom CSS class names to your form."),(0,n.yg)("h2",{id:"customizing-with-other-frameworks"},"Customizing with other frameworks"),(0,n.yg)("p",null,"The default theme is bootstrap 3. In order to use another theme, you must first install ",(0,n.yg)("inlineCode",{parentName:"p"},"@rjsf/core"),"."),(0,n.yg)("p",null,"For example, to use the standard bootstrap 3 form, you can run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"import Form from '@rjsf/core';\n")),(0,n.yg)("p",null,"To use the material-ui form, you should first install both ",(0,n.yg)("inlineCode",{parentName:"p"},"@rjsf/core")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"@rjsf/material-ui"),". Then, you can run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"import Form from '@rjsf/material-ui';\n")),(0,n.yg)("p",null,"For more information on how to create a custom theme, see documentation on the ",(0,n.yg)("inlineCode",{parentName:"p"},"withTheme")," component."))}g.isMDXComponent=!0}}]);