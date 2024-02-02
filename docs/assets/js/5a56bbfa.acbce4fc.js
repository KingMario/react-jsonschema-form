"use strict";(self.webpackChunk_rjsf_docs=self.webpackChunk_rjsf_docs||[]).push([[5108],{3636:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>h});var a=t(5668);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,h=p["".concat(m,".").concat(d)]||p[d]||u[d]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(5307),r=(t(5668),t(3636));const o={},i="Quickstart",s={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Let's walk through setup of a form after installing the dependency properly.",source:"@site/docs/01-quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/react-jsonschema-form/docs/quickstart",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/01-quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/react-jsonschema-form/docs/"},next:{title:"Advanced Customization",permalink:"/react-jsonschema-form/docs/advanced-customization/"}},m={},l=[{value:"Form schema",id:"form-schema",level:2},{value:"Form uiSchema",id:"form-uischema",level:2},{value:"Form initialization",id:"form-initialization",level:2},{value:"Form event handlers",id:"form-event-handlers",level:3},{value:"Controlled component",id:"controlled-component",level:3}],c={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"quickstart"},"Quickstart"),(0,r.yg)("p",null,"Let's walk through setup of a form after installing the dependency properly.\nNOTE: As of version 5, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Form")," now requires you to provide a ",(0,r.yg)("inlineCode",{parentName:"p"},"validator")," implementation. We recommend the one from ",(0,r.yg)("inlineCode",{parentName:"p"},"@rjsf/validator-ajv8"),"."),(0,r.yg)("h2",{id:"form-schema"},"Form schema"),(0,r.yg)("p",null,"First, specify a schema using the ",(0,r.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema specification"),". The below schema renders a single string field:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'Test form',\n  type: 'string',\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.yg)("p",null,"You can also render an object with multiple fields with the below schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'Test form',\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n    },\n    age: {\n      type: 'number',\n    },\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.yg)("p",null,"For more information and examples of JSON Schema properties that this library supports, see ",(0,r.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/json-schema/single"},"Using JSON Schema"),"."),(0,r.yg)("h2",{id:"form-uischema"},"Form uiSchema"),(0,r.yg)("p",null,"The uiSchema is used to add more customization to the form's look and feel. Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"classNames"),"\nattribute of the uiSchema to add a custom CSS class name to the form:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'Test form',\n  type: 'string',\n};\n\nconst uiSchema: UiSchema = {\n  'ui:classNames': 'custom-css-class',\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,r.yg)("p",null,"To customize object fields in the uiSchema, the structure of the\nuiSchema should be ",(0,r.yg)("inlineCode",{parentName:"p"},"{key: value}"),", where ",(0,r.yg)("inlineCode",{parentName:"p"},"key")," is the property key and ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," is an\nobject with the uiSchema configuration for that particular property. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  title: 'Test form',\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n    },\n    age: {\n      type: 'number',\n    },\n  },\n};\n\nconst uiSchema: UiSchema = {\n  name: {\n    'ui:classNames': 'custom-class-name',\n  },\n  age: {\n    'ui:classNames': 'custom-class-age',\n  },\n};\n\nrender(<Form schema={schema} validator={validator} />, document.getElementById('app'));\n")),(0,r.yg)("h2",{id:"form-initialization"},"Form initialization"),(0,r.yg)("p",null,"Often you'll want to prefill a form with existing data; this is done by passing a ",(0,r.yg)("inlineCode",{parentName:"p"},"formData")," prop object matching the schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  properties: {\n    title: {\n      type: 'string',\n    },\n    done: {\n      type: 'boolean',\n    },\n  },\n};\n\nconst formData = {\n  title: 'First task',\n  done: true,\n};\n\nrender(<Form schema={schema} formData={formData} validator={validator} />, document.getElementById('app'));\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: If your form has a single field, pass a single value to ",(0,r.yg)("inlineCode",{parentName:"p"},"formData"),". ex: ",(0,r.yg)("inlineCode",{parentName:"p"},'formData="Charlie"'))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"WARNING: If you have situations where your parent component can re-render, make sure you listen to the ",(0,r.yg)("inlineCode",{parentName:"p"},"onChange")," event and update the data you pass to the ",(0,r.yg)("inlineCode",{parentName:"p"},"formData")," attribute.")),(0,r.yg)("h3",{id:"form-event-handlers"},"Form event handlers"),(0,r.yg)("p",null,"You can use event handlers such as ",(0,r.yg)("inlineCode",{parentName:"p"},"onChange"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"onError"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"onSubmit"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"onFocus"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"onBlur")," on the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Form />")," component; see the ",(0,r.yg)("a",{parentName:"p",href:"/react-jsonschema-form/docs/api-reference/form-props"},"Form Props Reference")," for more details."),(0,r.yg)("h3",{id:"controlled-component"},"Controlled component"),(0,r.yg)("p",null,"By default, ",(0,r.yg)("inlineCode",{parentName:"p"},"<Form />")," is an ",(0,r.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/uncontrolled-components.html"},"uncontrolled component"),". To make it a controlled component, use the\n",(0,r.yg)("inlineCode",{parentName:"p"},"onChange")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"formData")," props as in the below example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"import validator from '@rjsf/validator-ajv8';\n\nconst App = () => {\n  const [formData, setFormData] = React.useState(null);\n  return (\n    <Form\n      schema={{ type: 'string' }}\n      formData={formData}\n      onChange={(e) => setFormData(e.formData)}\n      validator={validator}\n    />\n  );\n};\n\nrender(<App />, document.getElementById('app'));\n")))}u.isMDXComponent=!0}}]);