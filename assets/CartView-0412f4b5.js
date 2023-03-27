import{S as n}from"./sweetalert2.all-7996aed0.js";import{_ as w,r as p,o as l,c as r,b as m,a as t,F as g,f as b,i as y,t as c,w as L,e as f,j as T,v as I}from"./index-64c5ca7d.js";const{VITE_API:h,VITE_APIPATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"whattoplay",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{products:[],productId:"",cart:{},loadingItem:"",isLoading:!1}},methods:{getCart(){this.isLoading=!0,this.$http.get(`${h}/v2/api/${u}/cart`).then(s=>{this.isLoading=!1,this.cart=s.data.data}).catch(s=>{this.isLoading=!1,n.fire({icon:"error",title:`錯誤 ${s.response.status}`,text:s.response.data.message,confirmButtonText:"OK"})})},updateProductQty(s){const o={product_id:s.product.id,qty:s.qty};this.loadingItem=s.id,this.isLoading=!0,this.$http.put(`${h}/v2/api/${u}/cart/${s.id}`,{data:o}).then(d=>{this.isLoading=!1,this.getCart(),this.loadingItem="",n.fire({icon:"success",title:d.data.message,confirmButtonText:"OK"})}).catch(d=>{this.isLoading=!1,this.loadingItem="",n.fire({icon:"error",title:`錯誤 ${d.response.status}`,text:d.response.data.message,confirmButtonText:"OK"})})},deleteProduct(s){this.loadingItem=s.id,this.isLoading=!0,this.$http.delete(`${h}/v2/api/${u}/cart/${s.id}`).then(o=>{this.isLoading=!1,this.getCart(),this.loadingItem="",n.fire({icon:"success",title:o.data.message,confirmButtonText:"OK"})}).catch(o=>{this.isLoading=!1,n.fire({icon:"error",title:`錯誤 ${o.response.status}`,text:o.response.data.message,confirmButtonText:"OK"})})},deleteAllProduct(){this.isLoading=!0,this.$http.delete(`${h}/v2/api/${u}/carts`).then(s=>{this.isLoading=!1,this.getCart(),n.fire({icon:"success",title:s.data.message,confirmButtonText:"OK"})}).catch(s=>{this.isLoading=!1,n.fire({icon:"error",title:`錯誤 ${s.response.status}`,text:s.response.data.message,confirmButtonText:"OK"})})}},mounted(){this.getCart()}},C={class:"container mt-5"},V={class:"mt-3"},P=t("h3",{class:"mt-3 mb-4"},"購物車",-1),k={class:"row"},B={class:"col-md-8"},O={class:"table"},A=t("thead",null,[t("tr",null,[t("th"),t("th",{scope:"col",class:"border-0 ps-0"},"品名"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0"},"單價")])],-1),E={class:"border-0 align-middle"},K=["onClick","disabled"],N=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),D={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},S=["src"],U={class:"mb-0 fw-bold ms-3 d-inline-block"},q={class:"border-0 align-middle"},j={class:"input-group input-group-sm"},F=["onUpdate:modelValue","onChange","disabled"],H=["value"],M={class:"border-0 align-middle"},Q={class:"mb-0 ms-auto"},R={class:"col-md-4"},z={class:"border p-4 mb-4"},G=t("h4",{class:"fw-bold mb-4"},"Order Detail",-1),J={class:"table text-muted border-bottom"},W=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal",-1),X={class:"text-end border-0 px-0 pt-4"},Y={class:"d-flex justify-content-between mt-4"},Z=t("p",{class:"mb-0 h4 fw-bold"},"Total",-1),tt={class:"mb-0 h4 fw-bold"};function st(s,o,d,et,a,_){const v=p("LoadingView"),x=p("router-link");return l(),r("div",C,[m(v,{active:a.isLoading,"onUpdate:active":o[0]||(o[0]=e=>a.isLoading=e)},null,8,["active"]),t("div",V,[t("button",{type:"button",class:"btn btn-outline-warning",onClick:o[1]||(o[1]=e=>_.deleteAllProduct())},"清空購物車"),P,t("div",k,[t("div",B,[t("table",O,[A,t("tbody",null,[a.cart.carts?(l(!0),r(g,{key:0},b(a.cart.carts,e=>(l(),r("tr",{key:e.id,class:"border-bottom border-top"},[t("td",E,[t("button",{type:"button",class:"btn btn-outline-warning btn-sm",onClick:i=>_.deleteProduct(e),disabled:e.id===a.loadingItem},[N,f(" x ")],8,K)]),t("td",D,[t("img",{src:e.product.imageUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,S),t("p",U,c(e.product.title),1)]),t("td",q,[t("div",j,[T(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":i=>e.qty=i,onChange:i=>_.updateProductQty(e),disabled:e.id===a.loadingItem},[(l(),r(g,null,b(20,i=>t("option",{value:i,key:"cart"+i},c(i),9,H)),64))],40,F),[[I,e.qty]])])]),t("td",M,[t("p",Q,"NT$"+c(e.total),1)])]))),128)):y("",!0)])])]),t("div",R,[t("div",z,[G,t("table",J,[t("tbody",null,[t("tr",null,[W,t("td",X,"NT$"+c(a.cart.total),1)])])]),t("div",Y,[Z,t("p",tt,"NT$"+c(a.cart.total),1)]),m(x,{to:"/checkout",class:"btn btn-primary w-100 mt-4"},{default:L(()=>[f("確認購買")]),_:1})])])])])])}const it=w($,[["render",st]]);export{it as default};