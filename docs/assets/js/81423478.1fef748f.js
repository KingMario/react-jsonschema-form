"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5891],{876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=i,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7896),i=(a(2784),a(876));const l={},r="Custom Templates",o={unversionedId:"advanced-customization/custom-templates",id:"version-3.2.1/advanced-customization/custom-templates",title:"Custom Templates",description:"This is an advanced feature that lets you customize even more aspects of the form:",source:"@site/versioned_docs/version-3.2.1/advanced-customization/custom-templates.md",sourceDirName:"advanced-customization",slug:"/advanced-customization/custom-templates",permalink:"/react-jsonschema-form/docs/version-3.2.1/advanced-customization/custom-templates",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/versioned_docs/version-3.2.1/advanced-customization/custom-templates.md",tags:[],version:"3.2.1",frontMatter:{},sidebar:"docs",previous:{title:"Advanced Customization",permalink:"/react-jsonschema-form/docs/version-3.2.1/advanced-customization/"},next:{title:"Custom Themes",permalink:"/react-jsonschema-form/docs/version-3.2.1/advanced-customization/custom-themes"}},p={},d=[{value:"ArrayFieldTemplate",id:"arrayfieldtemplate",level:2},{value:"FieldTemplate",id:"fieldtemplate",level:2},{value:"ObjectFieldTemplate",id:"objectfieldtemplate",level:2}],m={toc:d},s="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-templates"},"Custom Templates"),(0,i.kt)("p",null,"This is an advanced feature that lets you customize even more aspects of the form:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"_"),(0,i.kt)("th",{parentName:"tr",align:null},"Custom Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Custom Template"),(0,i.kt)("th",{parentName:"tr",align:null},"Custom Widget"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"What it does")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides all behaviour"),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides just the layout (not behaviour)"),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides just the input box (not layout, labels, or help, or validation)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Usage")),(0,i.kt)("td",{parentName:"tr",align:null},"Global or per-field"),(0,i.kt)("td",{parentName:"tr",align:null},"Global or per-field"),(0,i.kt)("td",{parentName:"tr",align:null},"Global or per-field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Global Example")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<Form fields={MyCustomField} />")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<Form ArrayFieldTemplate={MyArrayTemplate} />")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<Form widgets={MyCustomWidget} />"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Per-Field Example")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"ui:field": MyCustomField')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"ui:ArrayFieldTemplate": MyArrayTemplate')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"ui:widget":MyCustomWidget'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Documentation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/react-jsonschema-form/docs/version-3.2.1/advanced-customization/custom-widgets-fields"},"Custom Fields")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#FieldTemplate"},"FieldTemplate")," / ",(0,i.kt)("a",{parentName:"td",href:"#ArrayFieldTemplate"},"ArrayFieldTemplate")," / ",(0,i.kt)("a",{parentName:"td",href:"#ObjectFieldTemplate"},"ObjectFieldTemplate")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/react-jsonschema-form/docs/version-3.2.1/advanced-customization/custom-widgets-fields"},"Custom Widgets"))))),(0,i.kt)("h2",{id:"arrayfieldtemplate"},"ArrayFieldTemplate"),(0,i.kt)("p",null,"You can use an ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayFieldTemplate")," to customize how your arrays are rendered.\nThis allows you to customize your array, and each element in the array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "array",\n  items: {\n    type: "string"\n  }\n};\n\nfunction ArrayFieldTemplate(props) {\n  return (\n    <div>\n      {props.items.map(element => element.children)}\n      {props.canAdd && <button type="button" onClick={props.onAddClick}></button>}\n    </div>\n  );\n}\n\nrender((\n  <Form schema={schema}\n        ArrayFieldTemplate={ArrayFieldTemplate} />\n), document.getElementById("app"));\n')),(0,i.kt)("p",null,"You also can provide your own field template to a uiSchema by specifying a ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:ArrayFieldTemplate")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const uiSchema = {\n  "ui:ArrayFieldTemplate": ArrayFieldTemplate\n}\n')),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/blob/4542cd254ffdc6dfaf55e8c9f6f17dc900d0d041/packages/playground/src/samples/customArray.js"},"customArray.js")," for another example."),(0,i.kt)("p",null,"The following props are passed to each ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayFieldTemplate"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DescriptionField"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"DescriptionField")," from the registry (in case you wanted to utilize it)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TitleField"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"TitleField")," from the registry (in case you wanted to utilize it)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"canAdd"),": A boolean value stating whether new elements can be added to the array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"className"),": The className string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),": A boolean value stating if the array is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idSchema"),": Object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"items"),": An array of objects representing the items in the array. Each of the items represent a child with properties described below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onAddClick: (event?) => void"),": A function that adds a new item to the array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readonly"),": A boolean value stating if the array is read-only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required"),": A boolean value stating if the array is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema"),": The schema object for this array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uiSchema"),": The uiSchema object for this array field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": A string value containing the title for the array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formContext"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"formContext")," object that you passed to Form."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formData"),": The formData for this array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"registry")," object.")),(0,i.kt)("p",null,"The following props are part of each element in ",(0,i.kt)("inlineCode",{parentName:"p"},"items"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children"),": The html for the item's content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"className"),": The className string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),": A boolean value stating if the array item is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasMoveDown"),": A boolean value stating whether the array item can be moved down."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasMoveUp"),": A boolean value stating whether the array item can be moved up."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasRemove"),": A boolean value stating whether the array item can be removed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasToolbar"),": A boolean value stating whether the array item has a toolbar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index"),": A number stating the index the array item occurs in ",(0,i.kt)("inlineCode",{parentName:"li"},"items"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": A stable, unique key for the array item."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onAddIndexClick: (index) => (event?) => void"),": Returns a function that adds a new item at ",(0,i.kt)("inlineCode",{parentName:"li"},"index"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onDropIndexClick: (index) => (event?) => void"),": Returns a function that removes the item at ",(0,i.kt)("inlineCode",{parentName:"li"},"index"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onReorderClick: (index, newIndex) => (event?) => void"),": Returns a function that swaps the items at ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"newIndex"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readonly"),": A boolean value stating if the array item is read-only.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Array and object field templates are always rendered inside of the FieldTemplate. To fully customize an array field template, you may need to specify both ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:FieldTemplate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:ArrayFieldTemplate"),".")),(0,i.kt)("h2",{id:"fieldtemplate"},"FieldTemplate"),(0,i.kt)("p",null,"To take control over the inner organization of each field (each form row), you can define a ",(0,i.kt)("em",{parentName:"p"},"field template")," for your form."),(0,i.kt)("p",null,"A field template is basically a React stateless component being passed field-related props, allowing you to structure your form row as you like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "string"\n};\n\nfunction CustomFieldTemplate(props) {\n  const {id, classNames, label, help, required, description, errors, children} = props;\n  return (\n    <div className={classNames}>\n      <label htmlFor={id}>{label}{required ? "*" : null}</label>\n      {description}\n      {children}\n      {errors}\n      {help}\n    </div>\n  );\n}\n\nrender((\n  <Form schema={schema}\n        FieldTemplate={CustomFieldTemplate} />\n), document.getElementById("app"));\n')),(0,i.kt)("p",null,"You also can provide your own field template to a uiSchema by specifying a ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:FieldTemplate")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const uiSchema = {\n  "ui:FieldTemplate": CustomFieldTemplate\n}\n')),(0,i.kt)("p",null,"If you want to handle the rendering of each element yourself, you can use the props ",(0,i.kt)("inlineCode",{parentName:"p"},"rawHelp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rawDescription")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rawErrors"),"."),(0,i.kt)("p",null,"The following props are passed to a custom field template component:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": The id of the field in the hierarchy. You can use it to render a label targeting the wrapped widget."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"classNames"),": A string containing the base Bootstrap CSS classes, merged with any ",(0,i.kt)("a",{parentName:"li",href:"#custom-css-class-names"},"custom ones")," defined in your uiSchema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label"),": The computed label for this field, as a string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": A component instance rendering the field description, if one is defined (this will use any ",(0,i.kt)("a",{parentName:"li",href:"#custom-descriptions"},"custom ",(0,i.kt)("inlineCode",{parentName:"a"},"DescriptionField"))," defined)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rawDescription"),": A string containing any ",(0,i.kt)("inlineCode",{parentName:"li"},"ui:description")," uiSchema directive defined."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children"),": The field or widget component instance for this field row."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errors"),": A component instance listing any encountered errors for this field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rawErrors"),": An array of strings listing all generated error messages from encountered errors for this field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"help"),": A component instance rendering any ",(0,i.kt)("inlineCode",{parentName:"li"},"ui:help")," uiSchema directive defined."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rawHelp"),": A string containing any ",(0,i.kt)("inlineCode",{parentName:"li"},"ui:help")," uiSchema directive defined. ",(0,i.kt)("strong",{parentName:"li"},"NOTE:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"rawHelp")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," if passed ",(0,i.kt)("inlineCode",{parentName:"li"},"ui:help")," is a React component instead of a string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hidden"),": A boolean value stating if the field should be hidden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required"),": A boolean value stating if the field is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readonly"),": A boolean value stating if the field is read-only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),": A boolean value stating if the field is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"displayLabel"),": A boolean value stating if the label should be rendered or not. This is useful for nested fields in arrays where you don't want to clutter the UI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields"),": An array containing all Form's fields including your ",(0,i.kt)("a",{parentName:"li",href:"#custom-field-components"},"custom fields")," and the built-in fields."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema"),": The schema object for this field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uiSchema"),": The uiSchema object for this field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onChange"),": The value change event handler; Can be called with a new value to change the value for this field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formContext"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"formContext")," object that you passed to Form."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formData"),": The formData for this field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"registry")," object.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: you can only define a single global field template for a form, but you can set individual field templates per property using ",(0,i.kt)("inlineCode",{parentName:"p"},'"ui:FieldTemplate"'),".")),(0,i.kt)("h2",{id:"objectfieldtemplate"},"ObjectFieldTemplate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const schema = {\n  type: "object",\n  title: "Object title",\n  description: "Object description",\n  properties: {\n    name: {\n      type: "string"\n    },\n    age: {\n      type: "number"\n    }\n  }\n};\n\nfunction ObjectFieldTemplate(props) {\n  return (\n    <div>\n      {props.title}\n      {props.description}\n      {props.properties.map(element => <div className="property-wrapper">{element.content}</div>)}\n    </div>\n  );\n}\n\nrender((\n  <Form schema={schema}\n        ObjectFieldTemplate={ObjectFieldTemplate} />\n), document.getElementById("app"));\n')),(0,i.kt)("p",null,"You also can provide your own field template to a uiSchema by specifying a ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:ObjectFieldTemplate")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const uiSchema = {\n  "ui:ObjectFieldTemplate": ObjectFieldTemplate\n};\n')),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form/blob/4542cd254ffdc6dfaf55e8c9f6f17dc900d0d041/packages/playground/src/samples/customObject.js"},"customObject.js")," for a better example."),(0,i.kt)("p",null,"The following props are passed to each ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectFieldTemplate"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DescriptionField"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"DescriptionField")," from the registry (in case you wanted to utilize it)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TitleField"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"TitleField")," from the registry (in case you wanted to utilize it)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": A string value containing the title for the object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": A string value containing the description for the object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),": A boolean value stating if the object is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties"),": An array of object representing the properties in the array. Each of the properties represent a child with properties described below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onAddClick: (schema: JSONSchema7) => () => void"),": Returns a function that adds a new property to the object (to be used with additionalProperties)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readonly"),": A boolean value stating if the object is read-only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"required"),": A boolean value stating if the object is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schema"),": The schema object for this object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uiSchema"),": The uiSchema object for this object field."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idSchema"),": An object containing the id for this object & ids for it's properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formData"),": The form data for the object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"formContext"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"formContext")," object that you passed to Form."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"registry")," object.")),(0,i.kt)("p",null,"The following props are part of each element in ",(0,i.kt)("inlineCode",{parentName:"p"},"properties"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content"),": The html for the property's content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": A string representing the property name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),": A boolean value stating if the object property is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readonly"),": A boolean value stating if the property is read-only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hidden"),": A boolean value stating if the property should be hidden.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Array and object field templates are always rendered inside of the FieldTemplate. To fully customize an object field template, you may need to specify both ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:FieldTemplate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ui:ObjectFieldTemplate"),".")))}u.isMDXComponent=!0}}]);