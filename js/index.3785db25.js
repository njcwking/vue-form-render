(function(e){function t(t){for(var a,c,i=t[0],l=t[1],u=t[2],m=0,p=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={index:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){n("bbea"),e.exports=n("c31f")},2:function(e,t){},3:function(e,t){},"476a":function(e,t,n){},"75c1":function(e,t,n){"use strict";n("8c89")},"8c89":function(e,t,n){},"96e3":function(e,t,n){"use strict";n("476a")},c31f:function(e,t,n){"use strict";n.r(t);n("7a59");var a=n("39ab"),r=(n("8b88"),n("681b")),o=(n("055b"),n("160c")),c=(n("8918"),n("fbdf")),i=(n("a106"),n("09d9")),l=(n("4295"),n("5c5f")),u=(n("19ac"),n("cdeb")),s=(n("e1f5"),n("5efb")),m=(n("20c5"),n("bb76")),p=(n("4bbf"),n("59a5")),d=(n("519e"),n("0bb7")),f=(n("02cf"),n("9839")),v=(n("a71a"),n("b558")),h=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),b={class:"demo"},g={class:"menu"},j=Object(h["createTextVNode"])("基本"),O=Object(h["createTextVNode"])("所有组件"),y=Object(h["createTextVNode"])("string"),N=Object(h["createTextVNode"])("multi"),x=Object(h["createTextVNode"])("array"),V=Object(h["createTextVNode"])("object"),C=Object(h["createTextVNode"])("richText");function D(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("router-link"),i=Object(h["resolveComponent"])("router-view");return Object(h["openBlock"])(),Object(h["createBlock"])("div",b,[Object(h["createVNode"])("div",g,[Object(h["createVNode"])(c,{to:"simple"},{default:Object(h["withCtx"])((function(){return[j]})),_:1}),Object(h["createVNode"])(c,{to:"all"},{default:Object(h["withCtx"])((function(){return[O]})),_:1}),Object(h["createVNode"])(c,{to:"string"},{default:Object(h["withCtx"])((function(){return[y]})),_:1}),Object(h["createVNode"])(c,{to:"multi"},{default:Object(h["withCtx"])((function(){return[N]})),_:1}),Object(h["createVNode"])(c,{to:"array"},{default:Object(h["withCtx"])((function(){return[x]})),_:1}),Object(h["createVNode"])(c,{to:"object"},{default:Object(h["withCtx"])((function(){return[V]})),_:1}),Object(h["createVNode"])(c,{to:"richText"},{default:Object(h["withCtx"])((function(){return[C]})),_:1})]),Object(h["createVNode"])(i)])}var T={};n("75c1");T.render=D;var k=T;function S(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("Demo");return Object(h["openBlock"])(),Object(h["createBlock"])("div",null,[Object(h["createVNode"])(c,{schemaProps:e.schema,formDataProps:e.formData,validate:a.onValidate},null,8,["schemaProps","formDataProps","validate"])])}var B=n("5530"),w={class:"demo-preview"},P={class:"preview"},A={key:1};function R(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("formRender"),i=Object(h["resolveComponent"])("prism-editor");return Object(h["openBlock"])(),Object(h["createBlock"])("div",w,[Object(h["createVNode"])("div",P,[e.error?(Object(h["openBlock"])(),Object(h["createBlock"])("div",A,Object(h["toDisplayString"])(e.error),1)):(Object(h["openBlock"])(),Object(h["createBlock"])(c,{key:0,schema:e.schema,formData:e.formData,onOnChange:a.change,onOnValidate:a.validate,options:e.options},null,8,["schema","formData","onOnChange","onOnValidate","options"]))]),Object(h["createVNode"])(i,{class:"my-editor",modelValue:e.schemaStr,"onUpdate:modelValue":a.changeSchema,highlight:o.highlighter,"line-numbers":""},null,8,["modelValue","onUpdate:modelValue","highlight"])])}var _=n("53ca"),F=n("5857"),I=n.n(F),L=n("e57a"),Y=(n("cabf"),n("8c7a")),M=(n("cb55"),n("416b"),n("84bf"),n("99af"),n("7db0"),n("4160"),n("c975"),n("d81d"),n("b0c0"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),n("159b"),n("15fd")),q=n("2909"),E=function(e,t){return"array"===t.type&&t.enum?!e||0===e.length:0!==e&&!1!==e&&!e},U=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,o=[],c=a.type,i=a.items,l={value:n,schema:a};if("object"===c){var u=z(n,a,r);o.push.apply(o,Object(q["a"])(u))}else"array"===c&&n.forEach((function(n){var a=e(t,n,i,r);o.push.apply(o,Object(q["a"])(a))}));return le(l)&&o.push(t),o},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=n||e,r=[],o=t.properties,c=t.required;return c&&c.length>0&&c.forEach((function(t){var n=o&&o[t]||{},a=e&&e[t];E(a,n)&&r.push(t)})),o&&e&&Object.keys(e)&&Object.keys(e).length>0&&Object.keys(e).forEach((function(t){var n=e[t],c=o[t]||{},i=U(t,n,c,a);r.push.apply(r,Object(q["a"])(i))})),r},J=n("0dd9"),$=n.n(J);n("c740"),n("466d");function H(e){var t=/^(?:\w+:)?\/\/(\S+)$/;return"string"===typeof e&&t.test(e)}var Z=function(e){var t="^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!(!e||!new RegExp(t).test(e))};function W(e){return e.find((function(e,t,n){return t!==n.findIndex((function(t){return JSON.stringify(e)===JSON.stringify(t)}))}))}function G(e){if("string"===typeof e)return e;var t="".concat(e);return"0"==t&&1/e==-INFINITY?"-0":t}var K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/;function X(e,t){if(Array.isArray(e))return!1;var n=Object(_["a"])(e);return"number"===n||"boolean"===n||null==e||(Q.test(e)||!K.test(e)||null!=t&&e in Object(t))}function ee(e,t){return Array.isArray(e)?e:X(e,t)?[e]:e.match(/([^\.\[\]"']+)/g)}var te=function(e){return 0===Object.keys(e).length&&e.constructor===Object};function ne(e,t){t=ee(t,e);var n=0,a=t.length;while(null!=e&&n<a)e=e[G(t[n++])];return n&&n==a?e:void 0}function ae(e){return"function"===typeof e||("string"===typeof e&&"@"===e.substring(0,1)?e.substring(1):"string"===typeof e&&"{{"===e.substring(0,2)&&"}}"===e.substring(e.length-2,e.length)&&e.substring(2,e.length-2))}function re(e){try{return JSON.parse(JSON.stringify(e))}catch(t){return e}}function oe(e){var t=e.default,n=e.enum,a=void 0===n?[]:n,r=e.type,o={array:[],boolean:!1,integer:"",null:null,number:"",object:{},string:"",range:null};if(ae(t))return o[r];if(ae(a)){if("array"===r)return[];if("string"===r||"number"===r)return""}return"undefined"!==typeof t?t:"array"===r&&a.length?[]:Array.isArray(a)&&a[0]&&"undefined"!==typeof a[0]?e.hasOwnProperty("default")?e.default:a[0]:o[r]}function ce(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.type,r=e.properties,o=e.items,c=e.default,i=e.required,l=void 0===i?[]:i,u=e["ui:widget"],s=n.checkRequired,m=void 0!==s&&s,p="undefined"===typeof t?oe(e):re(t);if("object"===a){if(u)return c&&"object"===Object(_["a"])(c)?c:p;var d=r||{},f={};return Object.keys(d).forEach((function(e){var t=m&&-1!==[].concat(l).indexOf(e);m&&!t||(f[e]=ce(d[e],p[e],n))})),f}if("array"===a){if(c&&Array.isArray(c)&&!p)return c;if(u)return p;var v=[].concat(o||[]),h=[];return p.forEach&&p.forEach((function(e,t){h[t]=ce(v[t]||v[0],e,n)})),h}return p}function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.properties,n=e.items,a=Object(M["a"])(e,["properties","items"]),r=a.type;if(!t&&!n)return[];var o={};return"object"===r&&(o=t),"array"===r&&(o=[].concat(n)),Object.keys(o).map((function(e){return{schema:o[e],name:e,$parent:a}}))}var le=function(e){var t=e.name,n=e.schema,a=e.value,r=e.required,o=void 0===r?[]:r,c=n.type,i=n["ui:options"],l=n.message,u=n.maxLength,s=n.minLength,m=n.format,p=n.pattern,d=n.maximum,f=n.minimum,v=n.maxItems,h=n.minItems,b=n.uniqueItems;if(te(n))return!1;if(o.indexOf(t)>=0&&(!a||!a.length))return"不能为空";var g=p&&["string","number"].indexOf(c)>-1;if("string"===c){var j=a;"string"!==typeof a&&(j=null===a||void 0===a?"":String(a));var O=i&&i.noTrim,y=j.trim();if(y!==j&&!O)return l&&l.trim||"输入的内容有多余空格";if(j&&u&&!$()(j,0,parseInt(u,10)))return l&&l.maxLength||"长度不能大于 ".concat(u);if(j&&(s||0===s)&&(!j||!$()(j,parseInt(s,10),void 0)))return l&&l.minLength||"长度不能小于 ".concat(s);if("color"===m&&""===a)return"请填写正确的颜色格式";if("image"===m){var N="([/|.|w|s|-])*.(?:jpg|gif|png|bmp|apng|webp|jpeg|json)",x=H(a),V=new RegExp(N).test(a);if(g);else if(a&&!x&&!V)return l&&l.image||"请输入正确的图片格式"}if("url"===m)if(g);else if(a&&!H(a))return l&&l.url||"请输入正确的url格式";if("email"===m)if(g);else if(a&&!Z(a))return l&&l.email||"请输入正确的email格式"}if("number"===c){if("number"!==typeof a)return"请填写数字";if(d&&parseFloat(a,10)>d)return l&&l.maximum||"数值不能大于 ".concat(d);if((f||0===f)&&parseFloat(a,10)<f)return l&&l.minimum||"数值不能小于 ".concat(f)}if(a&&g&&!new RegExp(p).test(a))return l&&l.pattern||"格式不匹配";if("array"===c){if(v&&a&&a.length>v)return l&&l.maxItems||"数组长度不能大于 ".concat(v);if((h||0===h)&&a&&a.length<h)return l&&l.minItems||"数组长度不能小于 ".concat(h);if(b&&Array.isArray(a)&&a.length>1){if("boolean"===typeof b&&W(a))return"存在重复元素";if("string"===typeof b)try{var C=a.map((function(e){return ne(e,b)})),D=C.find((function(e,t){return C.indexOf(e)!==t}));if(D)return b+" 的值存在重复的"}catch(T){}}}return""},ue=(n("a434"),n("a9e3"),n("ade3")),se=n("b76a"),me=n.n(se),pe=n("1146"),de=n.n(pe),fe=function(e){var t=e.value,n=H(t);return n?h["createVNode"]("a",{target:"_blank",href:t},[h["createTextVNode"]("测试链接")]):h["createVNode"]("div",null,[h["createTextVNode"]("测试链接")])},ve=function(e){var t=e.value,n=e.handleChange,a=e.props,r=e.type;return"radio"===r?h["createVNode"](h["resolveComponent"]("a-radio-group"),{name:"radioGroup",onChange:function(e){return n(e.target.value)},value:t},{default:function(){return[a.schema.enum.map((function(e,t){return h["createVNode"](h["resolveComponent"]("a-radio"),{value:e,key:e},{default:function(){return[a.schema.enumNames&&a.schema.enumNames[t]||a.schema.enum[t]]}})}))]}}):h["createVNode"](h["resolveComponent"]("a-select"),{value:t,onChange:n},{default:function(){return[a.schema.enum.map((function(e,t){return h["createVNode"](h["resolveComponent"]("a-select-option"),{value:e,key:e},{default:function(){return[a.schema.enumNames&&a.schema.enumNames[t]||a.schema.enum[t]]}})}))]}})},he={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.schema,a=t.onChange,r=t.name,o=t.value,c=t.disabled,i=t.readOnly,l=n.value,u=l.format,s=void 0===u?"text":u,m=l.maxLength,p=l["ui:options"],d=["image","email","url"].indexOf(s)>-1?"text":s,f=function(e){a.value(r.value,e)},v=Object(B["a"])({},p);return delete v.noTrim,function(){var t=void 0;try{var n=o.value||"";"number"===typeof n&&(n=String(n)),t=p.suffix,!t&&m&&(t=h["createVNode"]("span",{style:n.length>m?{fontSize:12,color:"#ff4d4f"}:{fontSize:12,color:"#999"}},[n.length+" / "+m]))}catch(l){}var a=Object(B["a"])(Object(B["a"])({},v),{},{maxLength:m,suffix:t}),r=v.addonAfter;return"url"!==s||r||(r=h["createVNode"](fe,{value:e.value},null)),h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),e.schema.enum?h["createVNode"](ve,{type:e.schema["ui:widget"],value:o.value,props:e,handleChange:f},null):h["createVNode"](h["resolveComponent"]("a-input"),h["mergeProps"](a,{value:o.value,type:d,disabled:c.value||i.value,onInput:function(e){return f(e.target.value)},addonAfter:r}),null)])}}},be={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){return function(){return h["createVNode"](he,e,null)}}},ge=(n("d98f"),{props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.onChange,a=t.name,r=t.value,o=function(e){n.value(a.value,e.target.value)};return function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"]("div",{className:"flex align-center"},[h["createVNode"](h["resolveComponent"]("a-input"),{style:{width:"50px",height:"32px",padding:0},value:r.value,type:"color",onInput:o},null),h["createVNode"](h["resolveComponent"]("a-input"),{className:"flex1",disabled:!0,value:r.value,type:"text"},null)])])}}}),je=n("5a0c"),Oe=n.n(je),ye=n("40a7"),Ne=function(e){return h["createVNode"](h["resolveComponent"]("a-date-picker"),h["mergeProps"](e,{locale:ye["a"],value:e.value,onChange:e.onChange}),null)},xe=function(e){return h["createVNode"](h["resolveComponent"]("a-month-picker"),h["mergeProps"](e,{locale:ye["a"],value:e.value,onChange:e.onChange}),null)},Ve=function(e){return h["createVNode"](h["resolveComponent"]("a-week-picker"),h["mergeProps"](e,{locale:ye["a"],value:e.value,onChange:e.onChange}),null)},Ce={DatePicker:Ne,MonthPicker:xe,WeekPicker:Ve},De={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.onChange,a=t.name,r=t.value,o=function(e,t){n.value(a.value,t)},c=e.schema["ui:options"]||{},i=Ce[c.type||"DatePicker"];return function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"](i,h["mergeProps"](c,{value:r.value?Oe()(r.value,c.format):null,onChange:o}),null)])}}},Te={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.onChange,a=t.name,r=t.value,o=function(e){n.value(a.value,e.target.value)},c=function(e){var t=e.file;try{var r=t.response.data[0];console.log(t.response.data[0]),n.value(a.value,r)}catch(o){}};return function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"]("div",{className:"flex align-center"},[h["createVNode"](h["resolveComponent"]("a-upload"),{action:"http://api.91jkys.com:8096",onChange:c,showUploadList:!1,accept:".png,.gif,.jpg,.jpeg",name:"filed",data:{action:"fileUpload"}},{default:function(){return[h["createVNode"](h["resolveComponent"]("a-button"),null,{default:function(){return[h["createTextVNode"](" "),h["createVNode"](h["resolveComponent"]("upload-outlined"),null,null)]}})]}}),h["createVNode"](h["resolveComponent"]("a-input"),{className:"flex1",value:r.value,type:"text",onInput:o},null),h["createVNode"](h["resolveComponent"]("a-popover"),null,{default:function(){return[h["createVNode"]("div",null,[h["createVNode"](h["resolveComponent"]("a-button"),null,{default:function(){return[h["createTextVNode"](" "),h["createVNode"](h["resolveComponent"]("FileImageOutlined"),null,null)]}})])]},content:function(){return h["createVNode"](h["resolveComponent"]("a-image"),{width:100,src:r.value},null)}})])])}}},ke={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.schema,a=t.onChange,r=t.name,o=t.value,c=t.disabled,i=t.readOnly,l=n.value,u=l.format,s=void 0===u?"text":u,m=l.max,p=l.min,d=["image","email"].indexOf(s)>-1?"text":s,f=function(e){a.value(r.value,e)},v=e.schema["ui:options"]||{};return function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),"slider"===e.schema["ui:widget"]?h["createVNode"](h["resolveComponent"]("a-slider"),h["mergeProps"](v,{value:o.value,type:d,onChange:f,max:m,min:p}),null):h["createVNode"](h["resolveComponent"]("a-input-number"),h["mergeProps"](v,{value:o.value,type:d,disabled:c.value||i.value,onChange:f,max:m,min:p}),null)])}}},Se={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.onChange,a=t.name,r=t.value,o=function(e){n.value(a.value,e)};return function(){return h["createVNode"]("div",{className:"form-item"},["switch"===e.schema["ui:widget"]?h["createVNode"]("div",null,[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"](h["resolveComponent"]("a-switch"),{checked:r.value,onChange:o},null)]):h["createVNode"](h["resolveComponent"]("a-checkbox"),{checked:r.value,onChange:function(){return o(!r.value)}},{default:function(){return[e.schema.title]}})])}}},Be={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.onChange,a=t.name,r=t.value,o=function(e,t){n.value(a.value,t)},c=e.schema["ui:options"]||{},i=function(e,t){if(!e)return[];var n=e[0]?Oe()(e[0],t):"",a=e[1]?Oe()(e[1],t):"";return[n,a]};return function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"](h["resolveComponent"]("a-range-picker"),h["mergeProps"](c,{locale:ye["a"],value:i(r.value,c.format),onChange:o}),null)])}}},we={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.onChange,a=t.name,r=t.value,o=function(e){n.value(a.value,e)};return function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"](h["resolveComponent"]("a-select"),{mode:"multiple",value:r.value,onChange:o,style:"width: 200px",placeholder:"Please select"},{default:function(){return[e.schema.enum.map((function(t,n){return h["createVNode"](h["resolveComponent"]("a-select-option"),{value:t,key:t},{default:function(){return[e.schema.enumNames&&e.schema.enumNames[n]||e.schema.enum[n]]}})}))]}})])}}},Pe={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t=Object(h["toRefs"])(e),n=t.onChange,a=t.name,r=t.value,o=function(e){n.value(a.value,e)};return function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"](h["resolveComponent"]("a-checkbox-group"),{value:r.value,onChange:o},{default:function(){return[e.schema.enum.map((function(t,n){return h["createVNode"](h["resolveComponent"]("a-checkbox"),{value:t,key:t},{default:function(){return[e.schema.enumNames&&e.schema.enumNames[n]||e.schema.enum[n]]}})}))]}})])}}},Ae=n("6fad"),Re=n.n(Ae),_e={props:{schema:Object,formData:Object,name:String,onChange:Function,value:[String,Number,Boolean,Object],disabled:Boolean,readOnly:Boolean,invalidText:String},setup:function(e){var t,n=Object(h["toRefs"])(e),a=n.onChange,r=n.name,o=n.value,c=function(e){a.value(r.value,e)},i=Object(h["ref"])();return Object(h["onMounted"])((function(){t=new Re.a(i.value),Object.assign(t.config,{onchange:function(e){c(e)}}),t.config.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","lineHeight","foreColor","backColor","link","list","todo","justify","quote","image","video","table","code","splitLine","undo","redo"],t.create(),t.txt.html(o.value)})),Object(h["onBeforeUnmount"])((function(){t.destroy(),t=null})),function(){return h["createVNode"]("div",{className:"form-item"},[h["createVNode"]("div",{className:"form-item-title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText])]),h["createVNode"]("div",{ref:i},null)])}}},Fe=new FileReader,Ie={props:{schema:Object,formData:Object,value:[String,Number,Boolean,Object],onChange:Function,name:String},setup:function(e){return function(){var t=ie(e.schema);return h["createVNode"]("div",{className:"form-item object"},[e.schema.title&&h["createVNode"]("div",{className:"title"},[e.schema.title]),h["createVNode"]("div",{className:"content"},[Object.keys(e.value).map((function(n,a){var r=t[a].schema,o=Me[Ye["".concat(r.type).concat(r.format?":".concat(r.format):"")]];if(!o)return null;var c=le({name:n,schema:r,value:e.value[n],required:e.schema.required});return h["createVNode"](o,{invalidText:c,value:e.value[n],schema:r,name:n,onChange:function(t,n){var a=Object(B["a"])(Object(B["a"])({},e.value),{},Object(ue["a"])({},t,n));e.onChange(e.name,a)}},null)}))])])}}},Le={props:{schema:Object,formData:Object,value:[String,Number,Boolean,Object],onChange:Function,name:String,invalidText:String},setup:function(e){var t=function(t){var n=ie(e.schema);return Fe.readAsArrayBuffer(t),Fe.onload=function(t){var a=t.target.result,r=de.a.read(a,{type:"array"}),o=r.SheetNames[0],c=r.Sheets[o],i=[],l=e.value[0]?re(e.value)[0]:ce(n[0].schema);"object"!==Object(_["a"])(l)?(i=de.a.utils.sheet_to_json(c,{header:1}),i=i.map((function(e){return e[0]}))):i=de.a.utils.sheet_to_json(c),e.onChange(e.name,i)},!1},n=function(){var t=ie(e.schema),n=e.value.length?re(e.value):[ce(t[0].schema)];"object"!==Object(_["a"])(n[0])&&(n=[n]);var a=de.a.utils.json_to_sheet(n),r=de.a.utils.book_new();de.a.utils.book_append_sheet(r,a),de.a.writeFile(r,"".concat(e.schema.title,".xlsx"))};return function(){var a=ie(e.schema),r=e.schema["ui:widget"];return"multiSelect"===r?h["createVNode"](we,{className:"flex1",value:e.value,schema:e.schema,name:e.name,onChange:function(t,n){e.onChange(e.name,n)}},null):e.schema.enum?h["createVNode"](Pe,{className:"flex1",value:e.value,schema:e.schema,name:e.name,onChange:function(t,n){e.onChange(e.name,n)}},null):h["createVNode"]("div",{className:"form-item object"},[e.schema.title&&h["createVNode"]("div",{className:"title"},[e.schema.title,h["createVNode"]("span",{style:{color:e.invalidText&&"#ff4d4f"}},[e.invalidText&&e.invalidText]),h["createVNode"]("div",{className:"flex align-center"},[h["createVNode"](h["resolveComponent"]("a-upload"),{accept:".xlsx",multiple:!1,showUploadList:!1,beforeUpload:t},{default:function(){return[h["createVNode"]("span",{className:"upload-excel"},[h["createTextVNode"]("导入 excel")])]}}),h["createVNode"]("span",{className:"upload-excel",onClick:n},[h["createTextVNode"]("下载 excel")]),e.schema.maxLength&&e.schema.maxLength<=e.value.length?null:h["createVNode"](h["resolveComponent"]("PlusOutlined"),{onClick:function(){var t=Object(q["a"])(e.value);t.push(t[0]||ce(a[0].schema)),e.onChange(e.name,t)}},null)])]),h["createVNode"]("div",{className:"content"},[h["createVNode"](me.a,{modelValue:e.value,class:"list-group",handle:".handle",itemKey:"list-group","onUpdate:modelValue":function(t){var n=Object(q["a"])(re(t));e.onChange(e.name,n)}},{item:function(t){var n,r=t.index,o=e.value[r],c=(null===(n=a[r])||void 0===n?void 0:n.schema)||a[0].schema,i=Me[Ye["".concat(c.type).concat(c.format?":".concat(c.format):"")]];return i?h["createVNode"](h["resolveComponent"]("a-card"),{hoverable:!0,size:"small"},{default:function(){return[h["createVNode"](i,{className:"flex1",value:o,schema:c,name:"".concat(r),onChange:function(t,n){var a=Object(q["a"])(e.value);a[t]=n,e.onChange(e.name,a)}},null)]},title:function(){return h["createVNode"](h["resolveComponent"]("BarsOutlined"),{class:"handle"},null)},extra:function(){return e.schema.minLength&&e.schema.minLength>=e.value.length?null:h["createVNode"](h["resolveComponent"]("DeleteOutlined"),{onClick:function(){var t=re(e.value);t.splice(r,1),e.onChange(e.name,t)}},null)}}):null}})])])}},components:{Draggable:me.a}},Ye={default:"input",string:"input",object:"map",array:"array",number:"number",boolean:"boolean",multiSelect:"multiSelect",multiCheckbox:"multiCheckbox","range:dateTime":"range","string:email":"input","string:url":"url","string:color":"color","string:image":"image","string:date":"date","string:richText":"richText"},Me={input:he,map:Ie,url:be,color:ge,date:De,array:Le,image:Te,number:ke,boolean:Se,range:Be,multiSelect:we,multiCheckbox:Pe,richText:_e},qe={props:{schema:Object,formData:Object},setup:function(e,t){var n=t.emit;if(!e.schema)return null;var a=Object(h["toRefs"])(e),r=a.formData,o=a.schema,c=ce(e.schema,r.value);n("on-change",c),Object(h["watch"])(r,(function(){c=ce(e.schema,r.value),n("on-validate",z(c,e.schema))})),Object(h["watch"])(o.value,(function(){c=ce(e.schema,r.value),n("on-change",c)}));var i=function(e,t){n("on-change",re(t))};return function(){var t=Me[Ye["".concat(e.schema.type).concat(e.schema.format?":".concat(e.schema.format):"")]];return h["createVNode"]("div",{className:"vue-form-render"},[h["createVNode"](t,{schema:e.schema,formData:c,value:c,name:"$form",onChange:i},null)])}}},Ee=function(e){return JSON.stringify(e,null,2)||""},Ue={name:"App",props:{schemaProps:Object,formDataProps:Object},setup:function(e){var t=e.schemaProps,n=e.formDataProps,a=Object(h["reactive"])({schema:t,formData:n,error:"",schemaStr:""}),r=function(e){a.formData=e,console.log(e)},o=function(e){console.log(e)},c=function(e){var t={};try{return t=I()(e),"object"!==Object(_["a"])(t)?void(a.error="schema非正确json"):(a.error="",t)}catch(n){a.error=String(n)}return""},i=function(e){try{a.schemaStr=e;var t=c(e);console.log(t),t&&(a.schema=t)}catch(n){console.log(n)}};return a.schemaStr=Ee(a.schema),Object(B["a"])(Object(B["a"])({},Object(h["toRefs"])(a)),{},{change:r,validate:o,changeSchema:i})},components:{formRender:qe,PrismEditor:L["a"]},methods:{highlighter:function(e){return Object(Y["highlight"])(e,Y["languages"].js)}}};n("96e3");Ue.render=R;var ze=Ue,Je={name:"App",setup:function(){var e=Object(h["reactive"])({schema:{type:"object",properties:{string:{title:"字符串",type:"string",maxLength:4,"ui:options":{placeholder:"试着输入超过4个字符"}},select:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["选项1","选项2","选项3"]},object:{type:"object",title:"object",properties:{string2:{title:"字符串",type:"string"}},required:["string2"]}},required:["string"]},formData:{}}),t=function(t){e.formData=t},n=function(e){console.log(e)};return Object(B["a"])(Object(B["a"])({},Object(h["toRefs"])(e)),{},{change:t,onValidate:n})},components:{Demo:ze}};Je.render=S;var $e=Je;function He(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("Demo");return Object(h["openBlock"])(),Object(h["createBlock"])("div",null,[Object(h["createVNode"])(c,{schemaProps:e.schema,formDataProps:e.formData},null,8,["schemaProps","formDataProps"])])}var Ze={name:"App",setup:function(){var e=Object(h["reactive"])({schema:{type:"object",properties:{name:{type:"string",title:"名称"},configs:{title:"对象",type:"object",properties:{name:{type:"string",title:"string"},array:{type:"array",title:"array",items:{type:"object",properties:{input1:{title:"简单输入框",type:"string"},selet1:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["早","中","晚"]}}}}}}}},formData:{}});return Object(B["a"])({},Object(h["toRefs"])(e))},components:{Demo:ze}};Ze.render=He;var We=Ze;function Ge(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("Demo");return Object(h["openBlock"])(),Object(h["createBlock"])("div",null,[Object(h["createVNode"])(c,{schemaProps:e.schema,formDataProps:e.formData},null,8,["schemaProps","formDataProps"])])}var Ke={name:"App",setup:function(){var e=Object(h["reactive"])({schema:{type:"object",properties:{input:{title:"简单输入框",type:"string"},textarea:{title:"简单文本编辑框",type:"string",format:"textarea"},url:{title:"URL",type:"string",format:"url"},email:{title:"邮箱",type:"string",format:"email"},color:{title:"颜色选择",type:"string",format:"color"},date:{title:"日期选择",type:"string",format:"date","ui:options":{placeholder:"请选择日期","show-time":!0,format:"YYYY/MM/DD HH:mm:ss",type:"DatePicker"}},week:{title:"week选择",type:"string",format:"date","ui:options":{format:"YYYY-wo",type:"WeekPicker"}},moth:{title:"moth选择",type:"string",format:"date","ui:options":{format:"YYYY-MM",type:"MonthPicker"}},image:{title:"图片展示",type:"string",format:"image"},number:{title:"数字",type:"number","ui:options":{max:3}},select:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["选项1","选项2","选项3"]}}},formData:{}});return Object(B["a"])({},Object(h["toRefs"])(e))},components:{Demo:ze}};Ke.render=Ge;var Qe=Ke;function Xe(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("Demo");return Object(h["openBlock"])(),Object(h["createBlock"])("div",null,[Object(h["createVNode"])(c,{schemaProps:e.schema,formDataProps:e.formData},null,8,["schemaProps","formDataProps"])])}var et={name:"App",setup:function(){var e=Object(h["reactive"])({schema:{type:"object",properties:{string:{title:"字符串",type:"string",maxLength:4,"ui:options":{placeholder:"试着输入超过4个字符"}},select:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["选项1","选项2","选项3"]},object:{type:"object",title:"对象",properties:{string:{title:"字符串",type:"string",maxLength:4,"ui:options":{placeholder:"试着输入超过4个字符"}},array:{type:"array",title:"array",items:{type:"object",properties:{input1:{title:"简单输入框",type:"string"},selet1:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["早","中","晚"]}}}}}}}},formData:{}});return Object(B["a"])({},Object(h["toRefs"])(e))},components:{Demo:ze}};et.render=Xe;var tt=et;function nt(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("Demo");return Object(h["openBlock"])(),Object(h["createBlock"])("div",null,[Object(h["createVNode"])(c,{schemaProps:e.schema,formDataProps:e.formData},null,8,["schemaProps","formDataProps"])])}var at={name:"App",setup:function(){var e=Object(h["reactive"])({schema:{type:"object",properties:{AllString:{title:"string类",type:"object",properties:{input:{title:"简单输入框",type:"string","ui:options":{placeholder:"昵称"}},textarea:{title:"简单文本编辑框",type:"string",format:"textarea"},color:{title:"颜色选择",type:"string",format:"color"},date:{title:"日期选择",type:"string",format:"date"},image:{title:"图片展示",type:"string",format:"image"}}},allNumber:{title:"number类",type:"object",properties:{number1:{title:"数字输入框",description:"1 - 1000",type:"number",min:1,max:1e3},number2:{title:"带滑动条",type:"number","ui:widget":"slider"}}},allBoolean:{title:"boolean类",type:"object",properties:{radio:{title:"是否通过",type:"boolean"},switch:{title:"开关控制",type:"boolean","ui:widget":"switch"}}},allRange:{title:"range类",type:"object",properties:{dateRange:{title:"日期范围",type:"range",format:"dateTime","ui:options":{placeholder:["开始时间","结束时间"]}}}},allEnum:{title:"选择类",type:"object",properties:{select:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["早","中","晚"]},radio:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["早","中","晚"],"ui:widget":"radio"},multiSelect:{title:"多选",description:"下拉多选",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["杭州","武汉","湖州","贵阳"],"ui:widget":"multiSelect"},boxes:{title:"多选",description:"checkbox",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["杭州","武汉","湖州","贵阳"]}}},obj1:{title:"可折叠对象",description:"这是个对象类型",type:"object","ui:options":{collapsed:!0},properties:{input1:{title:"输入框1",type:"string"},input2:{title:"输入框2",type:"string"}}},listName2:{title:"对象数组",description:"对象数组嵌套功能",type:"array",minItems:1,maxItems:3,"ui:displayType":"row",items:{type:"object",properties:{input1:{title:"简单输入框",type:"string"},selet1:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["早","中","晚"]}}}}},required:[]},formData:{}});return Object(B["a"])({},Object(h["toRefs"])(e))},components:{Demo:ze}};at.render=nt;var rt=at;function ot(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("Demo");return Object(h["openBlock"])(),Object(h["createBlock"])("div",null,[Object(h["createVNode"])(c,{schemaProps:e.schema,formDataProps:e.formData},null,8,["schemaProps","formDataProps"])])}var ct={name:"App",setup:function(){var e=Object(h["reactive"])({schema:{type:"array",title:"array",items:{type:"object",properties:{input1:{title:"简单输入框",type:"string"},selet1:{title:"单选",type:"string",enum:["a","b","c"],enumNames:["早","中","晚"]}}}},formData:{}}),t=function(t){e.formData=t},n=function(e){console.log(e)};return Object(B["a"])(Object(B["a"])({},Object(h["toRefs"])(e)),{},{change:t,validate:n})},components:{Demo:ze}};ct.render=ot;var it=ct;function lt(e,t,n,a,r,o){var c=Object(h["resolveComponent"])("Demo");return Object(h["openBlock"])(),Object(h["createBlock"])("div",null,[Object(h["createVNode"])(c,{schemaProps:e.schema,formDataProps:e.formData},null,8,["schemaProps","formDataProps"])])}var ut={name:"App",setup:function(){var e=Object(h["reactive"])({schema:{type:"object",properties:{content:{title:"富文本编辑器",type:"string",format:"richText"}}},formData:{content:"<a>超链接</a>"}}),t=function(t){e.formData=t},n=function(e){console.log(e)};return Object(B["a"])(Object(B["a"])({},Object(h["toRefs"])(e)),{},{change:t,validate:n})},components:{Demo:ze}};ut.render=lt;var st=ut,mt=n("6c02"),pt=[{path:"/",name:"simple",component:$e},{path:"/all",name:"all",component:rt},{path:"/object",name:"object",component:We},{path:"/string",name:"string",component:Qe},{path:"/multi",name:"multi",component:tt},{path:"/array",name:"array",component:it},{path:"/richText",name:"richText",component:st},{path:"/:pathMatch(.*)*",component:$e}],dt=Object(mt["a"])({routes:pt,history:Object(mt["b"])()}),ft=dt,vt=n("8f0d"),ht=n("5f89"),bt=n("47ce"),gt=n("5ede"),jt=n("b1c8"),Ot=(n("202f"),Object(h["createApp"])(k));Ot.use(v["a"]),Ot.use(f["a"]),Ot.use(d["a"]),Ot.use(p["a"]),Ot.use(m["a"]),Ot.use(s["a"]),Ot.use(u["a"]),Ot.use(l["a"]),Ot.use(i["a"]),Ot.use(c["a"]),Ot.use(o["a"]),Ot.use(r["a"]),Ot.use(a["a"]),Ot.component("FileImageOutlined",vt["a"]),Ot.component("UploadOutlined",ht["a"]),Ot.component("PlusOutlined",bt["a"]),Ot.component("BarsOutlined",gt["a"]),Ot.component("DeleteOutlined",jt["a"]),Ot.use(ft),Ot.mount("#app")},d98f:function(e,t,n){}});
//# sourceMappingURL=index.3785db25.js.map