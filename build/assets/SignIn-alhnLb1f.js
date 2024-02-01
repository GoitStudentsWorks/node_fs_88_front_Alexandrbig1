import{u as r,p as w,r as m,a as y,j as o,l as j}from"./index-D8mBq5VJ.js";import{B as l,a as v,L as S,T as u,b as k,c as C,d as T,e as $,f as E}from"./TextField-lhLJcO6P.js";import"./iconBase-Vco1bFau.js";const B=r(l)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 6.4rem);
  padding: 1.2rem;
  overflow-x: hidden;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`,F=r(l)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem;

  border-radius: 8px;
  background: #151515;
  max-width: 424px;
`;r(l)`
  width: 100%;
`;const P=r(v)`
  width: 100%;
  padding: 1.4rem;
`,z=r.div`
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${e=>e.theme.colors.headerColor};

  background-color: #bedbb0;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  color: ${e=>e.theme.colors.headerTextColor};
  color: white;
  color: #161616;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${e=>e.theme.colors.btnHoverThemeColor};
  }
`,L=r(S)`
  color: ${e=>e.theme.colors.textColor};
`,I=r.a`
  color: rgba(255, 255, 255, 0.3);
  font-family: ${w};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`,R=r(u)`
  color: ${e=>e.theme.colors.textColor};
  color: white;
  color: #161616;
`,W=r(u)`
  color: ${e=>e.theme.colors.textColor};
  color: white;
`,h=r(k)`
  input {
    color: ${e=>e.theme.colors.textColor};
    color: white;
    background-color: ${e=>e.theme.colors.inputBg};
    border-radius: 0.4rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:focus-within {
      outline: none;
    }
  }

  label {
    color: ${e=>e.theme.colors.textColorLowOp};
    color: rgba(255, 255, 255, 0.3);

    font-family: "Roboto", sans-serif;
  }
`,q=r.div`
  position: relative;
`,D=r.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-35%);
  font-size: 2rem;
  color: ${e=>e.theme.colors.textColorLowOp};
  color: rgba(255, 255, 255, 0.3);

  &:hover {
    cursor: pointer;
  }
`,p=r.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.deleteBtn};
  color: red;
`,O=E({breakpoints:{values:{xs:0,sm:550,md:960,lg:1280,xl:1920}}});function Y(e){return o.jsxs(R,{variant:"body2",align:"center",...e,style:{fontSize:"1rem"},children:["Creamy Sharks © ",o.jsx(L,{color:"inherit",href:"https://alexandrbig1.github.io/task-pro/",target:"_blank",children:"TaskPro"})," ",new Date().getFullYear(),"."]})}function V(){const[e,x]=m.useState(!1),g=y(),[t,d]=m.useState({}),f=()=>{x(!e)},b=c=>{c.preventDefault();const i=c.currentTarget,n=i.elements.email.value,a=i.elements.password.value,s={};n.trim().length===0?s.email="Email address is required":/@/.test(n)&&/\.[a-z]{2,}$/.test(n)||(s.email="Please enter a valid email address"),(a.length<6||a.length>18)&&(s.password="Password must be between 6 and 18 characters"),d(s),Object.keys(s).length===0&&(d({}),g(j({email:n,password:a})),i.reset())};return o.jsx(C,{theme:O,children:o.jsxs(B,{children:[o.jsxs(F,{children:[o.jsxs(l,{style:{display:"flex",alignItems:"center",gap:"1.4rem"},children:[o.jsx(I,{href:"/auth/signup",variant:"body2",style:{fontSize:"1rem"},children:"Registration"}),o.jsx(W,{component:"h1",variant:"h5",children:"Log In"})]}),o.jsxs(l,{component:"form",onSubmit:b,noValidate:!0,sx:{mt:2,width:{sm:"396px",xs:"312px"}},children:[o.jsxs("div",{style:{position:"relative"},children:[o.jsx(h,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Enter your email",name:"email",autoComplete:"email",autoFocus:!0,error:!!t.email}),t.email&&o.jsx(p,{children:t.email})]}),o.jsxs(q,{children:[o.jsx(h,{label:"Confirm a password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",id:"password",autoComplete:"current-password",type:e?"text":"password",error:!!t.password}),t.password&&o.jsx(p,{children:t.password}),o.jsx(D,{onClick:f,children:e?o.jsx(T,{}):o.jsx($,{})})]}),o.jsx(z,{children:o.jsx(P,{type:"submit",color:"inherit",children:"Log In Now"})})]})]}),o.jsx(Y,{sx:{mt:8,mb:4}})]})})}export{V as default};
