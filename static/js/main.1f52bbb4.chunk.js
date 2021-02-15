(this["webpackJsonpcalculator-ts"]=this["webpackJsonpcalculator-ts"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},41:function(e,t){},43:function(e,t,a){"use strict";a.r(t);var n,c,r,i,o,l,d,s,u,b=a(1),j=a.n(b),p=a(22),x=a.n(p),f=(a(30),a(31),a(6)),O=a(5),h=a(7),g=a(8),k=g.a.div(n||(n=Object(h.a)(["\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),m=g.a.main(c||(c=Object(h.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 500px;\n  margin: 3.125rem auto 0 auto;\n  padding: 1.25rem 1.25rem 1.25rem 1.25rem;\n  background-color: #44454c;\n  border-radius: 6px;\n  box-shadow: 0px -1px 31px -3px rgba(0, 0, 0, 0.69);\n"]))),v=g.a.div(r||(r=Object(h.a)(["\n  display: grid;\n  grid-gap: 6px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n"]))),C=g.a.img(i||(i=Object(h.a)(["\n  width: 150px;\n  margin-bottom: 1.25rem;\n"]))),y=g.a.button(o||(o=Object(h.a)(["\n  padding: 1.25rem;\n  border-radius: 3px;\n  background-color: #aca6a3;\n  border: none;\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #121315;\n  background-color: #888;\n  background: linear-gradient(#888, #aca6a3);\n  border: 0 none;\n  box-shadow: 0 1px 0 #666, 0 5px 0 #444, 0 6px 6px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  :hover {\n    background: linear-gradient(#a0a0a0, #dacfc9);\n  }\n  :focus,\n  :active {\n    background: linear-gradient(#f1e5e5, #eaded7);\n    outline: 1px solid #555;\n    outline-offset: 2px;\n  }\n  @media (max-width: 411px) {\n    font-size: 1.2rem;\n  }\n  @media (max-width: 330px) {\n    padding: 8px;\n  }\n"]))),w=g.a.div(l||(l=Object(h.a)(["\n  position: relative;\n  background: #fff;\n  padding: 1.25rem;\n  grid-column-start: 1;\n  grid-column-end: 5;\n  text-align: right;\n  margin-bottom: 0.625rem;\n"]))),D=g.a.div(d||(d=Object(h.a)(["\n  font-size: 0.8rem;\n  position: absolute;\n  top: 0.3125px;\n  right: 1.25rem;\n"]))),T=g.a.div(s||(s=Object(h.a)([""]))),I=a(46);!function(e){e.ADD="+",e.SUBTRACT="-",e.DIVIDE="\xf7",e.MULTIPLY="\xd7"}(u||(u={}));var S=function e(t){var a,n=t.indexOf(u.DIVIDE),c=t.indexOf(u.MULTIPLY),r=t.indexOf(u.ADD),i=t.indexOf(u.SUBTRACT);if(-1!==n){if(a=L(t[n-1],t[n],t[n+1]),t[n-1]=a,t.splice(n,2),t.length>1)return e(t)}else if(-1!==c){if(a=L(t[c-1],t[c],t[c+1]),t[c-1]=a,t.splice(c,2),t.length>1)return e(t)}else if(-1!==r){if(a=L(t[r-1],t[r],t[r+1]),t[r-1]=a,t.splice(r,2),t.length>1)return e(t)}else{if(-1===i)throw new Error("Unable to find matching operator");if(a=L(t[i-1],t[i],t[i+1]),t[i-1]=a,t.splice(i,2),t.length>1)return e(t)}return t[0]},L=function(e,t,a){var n;switch(t){case u.ADD:n=Object(I.a)(e,a);break;case u.SUBTRACT:n=Object(I.e)(e,a);break;case u.MULTIPLY:n=Object(I.d)(e,a);break;case u.DIVIDE:n=Object(I.b)(e,a)}return+(n=Object(I.c)(n,{precision:14}))},E=a.p+"static/media/equal-experts.17ff2453.png",U=a(2);function A(){var e=Object(b.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],c=Object(b.useState)(!1),r=Object(O.a)(c,2),i=r[0],o=r[1],l=Object(b.useState)(0),d=Object(O.a)(l,2),s=d[0],j=d[1],p=Object(b.useState)(""),x=Object(O.a)(p,2),h=x[0],g=x[1],I=function(e){var t=e.currentTarget.value;if(!(s.toString().length>=16)){var a="";i?(a=t,o(!1)):a=s.toString()+t,"."===t?-1===s.toString().indexOf(".")&&j(a):j(Number(a))}},L=function(e){var t;if(!i){switch(e.currentTarget.value){case"+":t=u.ADD;break;case"-":t=u.SUBTRACT;break;case"*":t=u.MULTIPLY;break;case"/":t=u.DIVIDE;break;default:throw new Error("Incorrect operator type supplied")}n((function(e){var a=Object(f.a)(e);return a.push(Number(s)),a.push(t),a})),o(!0),j(t),g("".concat(a.join(" ")," ").concat(s," ").concat(t))}};return Object(U.jsx)(k,{children:Object(U.jsxs)(m,{children:[Object(U.jsx)(C,{src:E,alt:"EqualExperts Logo"}),Object(U.jsxs)(v,{children:[Object(U.jsxs)(w,{children:[Object(U.jsx)(D,{"data-testid":"calculator-display-history",children:h}),Object(U.jsx)(T,{"data-testid":"calculator-display-input",children:s})]}),Object(U.jsx)(y,{}),Object(U.jsx)(y,{}),Object(U.jsx)(y,{onClick:function(){j((function(e){return-1*Number(e)}))},value:"plus-minus","data-testid":"calculator-operator-plus-minus",children:"\xb1"}),Object(U.jsx)(y,{onClick:function(){j(0),n([]),g("")},"data-testid":"calculator-key-clear",children:"C"}),Object(U.jsx)(y,{onClick:I,value:"7","data-testid":"calculator-key-7",children:"7"}),Object(U.jsx)(y,{onClick:I,value:"8","data-testid":"calculator-key-8",children:"8"}),Object(U.jsx)(y,{onClick:I,value:"9","data-testid":"calculator-key-9",children:"9"}),Object(U.jsx)(y,{onClick:L,value:"/","data-testid":"calculator-operator-divide",children:"\xf7"}),Object(U.jsx)(y,{onClick:I,value:"4","data-testid":"calculator-key-4",children:"4"}),Object(U.jsx)(y,{onClick:I,value:"5","data-testid":"calculator-key-5",children:"5"}),Object(U.jsx)(y,{onClick:I,value:"6","data-testid":"calculator-key-6",children:"6"}),Object(U.jsx)(y,{onClick:L,value:"*","data-testid":"calculator-operator-multiply",children:"\xd7"}),Object(U.jsx)(y,{onClick:I,value:"1","data-testid":"calculator-key-1",children:"1"}),Object(U.jsx)(y,{onClick:I,value:"2","data-testid":"calculator-key-2",children:"2"}),Object(U.jsx)(y,{onClick:I,value:"3","data-testid":"calculator-key-3",children:"3"}),Object(U.jsx)(y,{onClick:L,value:"-","data-testid":"calculator-operator-minus",children:"-"}),Object(U.jsx)(y,{onClick:I,value:"0","data-testid":"calculator-key-0",children:"0"}),Object(U.jsx)(y,{onClick:I,value:".","data-testid":"calculator-key-dot",children:"."}),Object(U.jsx)(y,{"data-testid":"calculator-key-equals",value:"=",onClick:function(){if(a.length>1){var e=S([].concat(Object(f.a)(a),[Number(s)]));j(e),n([]),g("".concat(a.join(" ")," ").concat(s," = ").concat(e))}},children:"="}),Object(U.jsx)(y,{onClick:L,value:"+","data-testid":"calculator-operator-plus",children:"+"})]})]})})}var B=function(){return Object(U.jsx)(A,{})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};x.a.render(Object(U.jsx)(j.a.StrictMode,{children:Object(U.jsx)(B,{})}),document.getElementById("root")),P()}},[[43,1,2]]]);
//# sourceMappingURL=main.1f52bbb4.chunk.js.map