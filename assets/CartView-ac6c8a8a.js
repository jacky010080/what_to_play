import{S as n}from"./sweetalert2.all-68c604d6.js";import{_ as v,r as m,o as r,a as d,d as w,b as t,F as p,h as g,e as b,t as c,l as y,w as L,k as I,m as T,g as k}from"./index-98fabb26.js";const{VITE_API:h,VITE_APIPATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"whattoplay",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{products:[],productId:"",cart:{},loadingItem:"",order_open:!1,isLoading:!1}},methods:{getCart(){this.isLoading=!0,this.$http.get(`${h}/v2/api/${u}/cart`).then(e=>{this.isLoading=!1,this.cart=e.data.data,this.cart.total=this.cart.total.toLocaleString(),this.cart.carts.length>0?this.order_open=!0:this.order_open=!1}).catch(e=>{this.isLoading=!1,n.fire({icon:"error",title:`錯誤 ${e.response.status}`,text:e.response.data.message,confirmButtonText:"OK"})})},updateProductQty(e){const o={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.isLoading=!0,this.$http.put(`${h}/v2/api/${u}/cart/${e.id}`,{data:o}).then(l=>{this.isLoading=!1,this.getCart(),this.loadingItem="",n.fire({icon:"success",title:l.data.message,confirmButtonText:"OK"})}).catch(l=>{this.isLoading=!1,this.loadingItem="",n.fire({icon:"error",title:`錯誤 ${l.response.status}`,text:l.response.data.message,confirmButtonText:"OK"})})},deleteProduct(e){this.loadingItem=e.id,this.isLoading=!0,this.$http.delete(`${h}/v2/api/${u}/cart/${e.id}`).then(o=>{this.isLoading=!1,this.getCart(),this.loadingItem="",n.fire({icon:"success",title:o.data.message,confirmButtonText:"OK"})}).catch(o=>{this.isLoading=!1,n.fire({icon:"error",title:`錯誤 ${o.response.status}`,text:o.response.data.message,confirmButtonText:"OK"})})},deleteAllProduct(){this.isLoading=!0,this.$http.delete(`${h}/v2/api/${u}/carts`).then(e=>{this.isLoading=!1,this.getCart(),n.fire({icon:"success",title:e.data.message,confirmButtonText:"OK"})}).catch(e=>{this.isLoading=!1,n.fire({icon:"error",title:`錯誤 ${e.response.status}`,text:e.response.data.message,confirmButtonText:"OK"})})}},mounted(){this.getCart()}},C={class:"container mt-5"},V={class:"mt-3"},P=["disabled"],B=t("h3",{class:"mt-3 mb-4"},"購物車",-1),O={class:"row"},A={class:"col-md-8"},S={class:"table"},E=t("thead",null,[t("tr",null,[t("th"),t("th",{scope:"col",class:"border-0 ps-0"},"品名"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0 text-end"},"總計")])],-1),K={class:"border-0 align-middle"},N=["onClick","disabled"],D={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},U=["src"],q={class:"mb-0 fw-bold ms-md-3 d-inline-block"},j={class:"border-0 align-middle"},F={class:"input-group input-group-sm"},H=["onUpdate:modelValue","onChange","disabled"],M=["value"],Q={class:"border-0 align-middle text-end"},R={class:"mb-0 ms-auto"},z={class:"col-md-4"},G={class:"border p-4 mb-4"},J=t("h4",{class:"fw-bold mb-4"},"Order Detail",-1),W={class:"table text-muted border-bottom"},X=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal")],-1),Y={scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},Z={class:"text-end border-0 px-0 pt-4"},tt={class:"d-flex justify-content-between mt-4"},et=t("p",{class:"mb-0 h4 fw-bold"},"Total",-1),st={class:"mb-0 h4 fw-bold"};function ot(e,o,l,at,a,_){const f=m("LoadingView"),x=m("router-link");return r(),d("div",C,[w(f,{active:a.isLoading,"onUpdate:active":o[0]||(o[0]=s=>a.isLoading=s)},null,8,["active"]),t("div",V,[t("button",{type:"button",class:"btn btn-outline-warning rounded-0",onClick:o[1]||(o[1]=s=>_.deleteAllProduct()),disabled:!a.order_open}," 清空購物車 ",8,P),B,t("div",O,[t("div",A,[t("table",S,[E,t("tbody",null,[a.cart.carts?(r(!0),d(p,{key:0},g(a.cart.carts,s=>(r(),d("tr",{key:s.id,class:"border-bottom border-top"},[t("td",K,[t("button",{type:"button",class:"btn btn-outline-warning btn-sm rounded-0",onClick:i=>_.deleteProduct(s),disabled:s.id===a.loadingItem}," x ",8,N)]),t("td",D,[t("img",{src:s.product.imageUrl,alt:"productImage",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,U),t("p",q,c(s.product.title),1)]),t("td",j,[t("div",F,[I(t("select",{class:"form-control","onUpdate:modelValue":i=>s.qty=i,onChange:i=>_.updateProductQty(s),disabled:s.id===a.loadingItem},[(r(),d(p,null,g(20,i=>t("option",{value:i,key:"cart"+i},c(i),9,M)),64))],40,H),[[T,s.qty]])])]),t("td",Q,[t("p",R,"NT$"+c(s.total.toLocaleString()),1)])]))),128)):b("",!0)])])]),t("div",z,[t("div",G,[J,t("table",W,[t("tbody",null,[X,(r(!0),d(p,null,g(a.cart.carts,s=>(r(),d("tr",{key:s.id},[t("th",Y,c(s.product.title),1),t("td",Z,"NT$"+c(s.total.toLocaleString()),1)]))),128))])]),t("div",tt,[et,t("p",st,"NT$"+c(a.cart.total),1)]),a.order_open?(r(),y(x,{key:0,to:"/checkout",class:"btn btn-primary w-100 mt-4"},{default:L(()=>[k("確認購買")]),_:1})):b("",!0)])])])])])}const rt=v($,[["render",ot]]);export{rt as default};