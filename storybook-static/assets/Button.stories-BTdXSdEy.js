import{g as M,j as n}from"./index-BqRUItyf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const T=r=>{const{variant:m="primary",size:p="md",disabled:e=!1,loading:a=!1,className:$="",onClick:A,children:H,...I}=r;return{className:`${M(m,p,e,a)} ${$}`.trim(),disabled:e||a,onClick:e||a?void 0:A,"aria-disabled":e||a,"aria-busy":a,loading:a,children:H,...I}},g=r=>{const{children:m,loading:p,...e}=T(r);return n.jsxs("button",{...e,children:[p&&n.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[n.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),n.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),m]})};try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'},{value:'"ghost"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string | undefined"}}}}}catch{}const U={title:"React/Button",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}}}},s={args:{children:"Button",variant:"primary"}},t={args:{children:"Button",variant:"secondary"}},o={args:{children:"Button",variant:"outline"}},i={args:{children:"Button",variant:"ghost"}},l={args:{children:"Button",size:"sm"}},d={args:{children:"Button",size:"lg"}},c={args:{children:"Button",loading:!0}},u={args:{children:"Button",disabled:!0}};var y,f,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,B,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var S,x,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'outline'
  }
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var z,C,_;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'ghost'
  }
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var V,q,j;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'sm'
  }
}`,...(j=(q=l.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var k,w,L;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'lg'
  }
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var P,O,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    loading: true
  }
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var E,G,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    disabled: true
  }
}`,...(R=(G=u.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const X=["Primary","Secondary","Outline","Ghost","Small","Large","Loading","Disabled"];export{u as Disabled,i as Ghost,d as Large,c as Loading,o as Outline,s as Primary,t as Secondary,l as Small,X as __namedExportsOrder,U as default};
