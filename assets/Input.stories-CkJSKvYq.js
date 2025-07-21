import{b as $,j as O}from"./index-BqRUItyf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const T=e=>{const{type:u="text",disabled:a=!1,className:r="",onChange:i,...R}=e,S=`${$(a)} ${r}`.trim();return{type:u,className:S,disabled:a,onChange:P=>{const j=P.target;i==null||i(j.value)},...R}},c=e=>{const u=T(e);return O.jsx("input",{...u,onChange:a=>{var r;return(r=e.onChange)==null?void 0:r.call(e,a.target.value)}})};try{c.displayName="Input",c.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void) | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string | undefined"}}}}}catch{}const F={title:"React/Input",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},s={args:{placeholder:"Enter text..."}},t={args:{type:"email",placeholder:"Enter email..."}},n={args:{type:"password",placeholder:"Enter password..."}},l={args:{type:"number",placeholder:"Enter number..."}},d={args:{placeholder:"Disabled input",disabled:!0}},o={args:{placeholder:"Required field",required:!0}};var p,m,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,y,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter email...'
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,q,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password...'
  }
}`,...(v=(q=n.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var E,V,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter number...'
  }
}`,...(x=(V=l.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var _,N,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var I,C,D;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Required field',
    required: true
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const G=["Default","Email","Password","Number","Disabled","Required"];export{s as Default,d as Disabled,t as Email,l as Number,n as Password,o as Required,G as __namedExportsOrder,F as default};
