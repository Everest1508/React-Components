import{a as j,j as e}from"./index-BqRUItyf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const P=a=>{const{padding:i="md",shadow:o=!0,className:_="",...v}=a;return{className:`${j(i,o)} ${_}`.trim(),...v}},l=a=>{const{children:i,...o}=P(a);return e.jsx("div",{...o,children:i})};try{l.displayName="Card",l.__docgenInfo={description:"",displayName:"Card",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string | undefined"}}}}}catch{}const z={title:"React/Card",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{padding:{control:{type:"select"},options:["sm","md","lg"]},shadow:{control:{type:"boolean"}}}},r={args:{children:"This is a card with default styling."}},n={args:{children:"This is a card with small padding.",padding:"sm"}},s={args:{children:"This is a card with large padding.",padding:"lg"}},d={args:{children:"This is a card without shadow.",shadow:!1}},t={args:{children:e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"18px",fontWeight:"bold"},children:"Card Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666"},children:"This is a more complex card with multiple elements inside it."}),e.jsx("button",{style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Action Button"})]})}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a card with default styling.'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'This is a card with small padding.',
    padding: 'sm'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'This is a card with large padding.',
    padding: 'lg'
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,b,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'This is a card without shadow.',
    shadow: false
  }
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var T,S,N;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
          Card Title
        </h3>
        <p style={{
        margin: '0 0 16px 0',
        color: '#666'
      }}>
          This is a more complex card with multiple elements inside it.
        </p>
        <button style={{
        padding: '8px 16px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Action Button
        </button>
      </div>
  }
}`,...(N=(S=t.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const A=["Default","SmallPadding","LargePadding","NoShadow","WithContent"];export{r as Default,s as LargePadding,d as NoShadow,n as SmallPadding,t as WithContent,A as __namedExportsOrder,z as default};
