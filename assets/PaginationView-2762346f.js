import{_ as d,o as i,c as r,a as e,n as l,h as o,F as g,f as _,t as p}from"./index-97a2166d.js";const u={props:["pages"],methods:{updatePage(c){this.$emit("emit-page",c)}}},h={"aria-label":"Page navigation example"},m={class:"pagination"},f=e("span",{"aria-hidden":"true"},"«",-1),k=[f],v=["onClick"],P=e("span",{"aria-hidden":"true"},"»",-1),x=[P];function b(c,s,a,C,B,n){return i(),r("nav",h,[e("ul",m,[e("li",{class:l(["page-item",{disabled:!a.pages.has_pre}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=o(t=>n.updatePage(a.pages.current_page-1),["prevent"]))},k)],2),(i(!0),r(g,null,_(a.pages.total_pages,t=>(i(),r("li",{class:l(["page-item",{active:t===a.pages.current_page}]),key:"page"+t},[e("a",{class:"page-link",href:"#",onClick:o(w=>n.updatePage(t),["prevent"])},p(t),9,v)],2))),128)),e("li",{class:l(["page-item",{disabled:!a.pages.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:s[1]||(s[1]=o(t=>n.updatePage(a.pages.current_page+1),["prevent"]))},x)],2)])])}const F=d(u,[["render",b]]);export{F as P};