(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+e7F":function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return l}));var i=t("h4VS"),r=t("vOnD");function a(){var n=Object(i.a)(["\n  padding: 10px 20px;\n  border-bottom: 1px solid rgb(162, 179, 195);\n  transition: .3s;\n  font-size: 1.5em;\n  &:last-of-type {\n    border-bottom: none;\n  }\n  &:hover {\n    background: rgb(162, 179, 195, .3);\n    color: white;\n    cursor: pointer;\n    &:first-of-type {\n      border-radius: 10px 10px 0 0;\n    }\n    &:last-of-type {\n      border-radius: 0 0 10px 10px;\n    }\n  }\n  @media (max-width: 768px) {\n    font-size:1.2em;\n  };\n  @media (max-width: 425px) {\n    font-size:1.4em;\n  };\n"]);return a=function(){return n},n}function o(){var n=Object(i.a)(["\n  width: 45%;\n  position: relative;\n  margin-top: 40px;\n  height: fit-content;\n  background: rgb(162, 179, 195, .1);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: 406px;\n  @media (max-width: 425px) {\n    width: 100%;\n  };\n"]);return o=function(){return n},n}var u=r.a.div(o()),l=r.a.span(a())},CxEz:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people",function(){return t("gefR")}])},gefR:function(n,e,t){"use strict";t.r(e);var i=t("q1tI"),r=t.n(i),a=t("/MKj"),o=t("snGJ"),u=t.n(o),l=t("ouLL"),d=t("37GD"),c=t("DwZZ"),p=r.a.createElement,s=Object(a.b)((function(n){return{selectedPerson:n.selectedPerson,isFetchingPeople:n.isFetchingPeople}}),{})((function(n){var e=n.selectedPerson,t=n.isFetchingPeople,a=Object(i.useState)(!1),o=a[0],u=a[1];return p(r.a.Fragment,null,p(l.a,null,t?p(c.a,null):p(r.a.Fragment,null,e.name?p(r.a.Fragment,null,p(l.e,null,e.name),o?p(d.a,null):p(r.a.Fragment,null,p(l.b,{onError:function(){return u(!0)},src:"https://starwars-visualguide.com/assets/img/characters/".concat(e.id,".jpg")}),p(l.c,null,p(l.d,null,"Height:",e.height),p(l.d,null,"Mass: ",e.mass),p(l.d,null,"Hair color: ",e.hair_color),p(l.d,null,"Skin color: ",e.skin_color),p(l.d,null,"Eye color: ",e.eye_color),p(l.d,null,"Birth year: ",e.birth_year),p(l.d,null,"Gender: ",e.gender)))):null)))})),f=t("J8E0"),m=t("+e7F"),x=t("dpnd"),h=r.a.createElement,b=Object(a.b)((function(n){return{people:n.people,isFetchingPeople:n.isFetchingPeople}}),{fetchPeople:x.a,selectPerson:x.e})((function(n){var e=n.fetchPeople,t=n.people,a=n.selectPerson,o=n.isFetchingPeople;return Object(i.useEffect)((function(){e()}),[]),h(u.a,null,h(m.a,null,o?h(c.a,null):h(r.a.Fragment,null,t.map((function(n){return h(m.b,{onClick:function(){return a(n.name)}},n.name)})))))})),g=t("ocaA"),w=t("Pd3O"),v=r.a.createElement;e.default=function(){return v(u.a,null,v(g.a,null,v(f.a,null),v(w.a,null),v(g.b,null,v(b,null),v(s,null))))}},ouLL:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return p})),t.d(e,"c",(function(){return s})),t.d(e,"d",(function(){return f})),t.d(e,"e",(function(){return m}));var i=t("h4VS"),r=t("vOnD");function a(){var n=Object(i.a)(["\n  margin: 0 0 10px 0;\n  width: 100%;\n  @media (max-width: 768px) {\n    font-size:1.3em;\n  };\n  @media (max-width: 768px) {\n   text-align:center;\n  };\n"]);return a=function(){return n},n}function o(){var n=Object(i.a)(["\n  list-style: none;\n  line-height: 1.92;\n"]);return o=function(){return n},n}function u(){var n=Object(i.a)(["\n  vertical-align: top;\n  display: inline-block;\n  font-size: 1.3em;\n  margin: 0;\n  width: 268px;\n  padding-left: 20px;\n  box-sizing: border-box;\n  @media (max-width: 768px) {\n    font-size:1.1em;\n    padding-left: 0px;\n    width:100%\n\n  };\n  @media (max-width: 425px) {\n    font-size:20px;\n  };\n  @media (max-width: 375px) {\n    font-size: 18px;\n  };\n  @media (max-width: 320px) {\n    font-size: 14px;\n  };\n"]);return u=function(){return n},n}function l(){var n=Object(i.a)(["\n  width: 40%;\n  border-radius: 5px;\n  @media (max-width: 768px) {\n    width: 60%;\n  };\n  @media (max-width: 425px) {\n   display:flex;\n   margin: 0 auto;\n   padding-bottom: 1em;\n  };\n"]);return l=function(){return n},n}function d(){var n=Object(i.a)(["\n  width: 45%;\n  min-height:406px;\n  height: fit-content;\n  border-radius: 10px;\n  background: rgb(162, 179, 195, .1);\n  margin-top: 40px;\n  display: inline-block;\n  box-sizing: border-box;\n  position:relative;\n  padding: 30px;\n  animation: fade 1s;\n  @keyframes fade {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  };\n  @media (max-width: 425px) {\n    width: 100%;\n  };\n"]);return d=function(){return n},n}var c=r.a.div(d()),p=r.a.img(l()),s=r.a.ul(u()),f=r.a.li(o()),m=r.a.h1(a())}},[["CxEz",1,2,0,3,4]]]);