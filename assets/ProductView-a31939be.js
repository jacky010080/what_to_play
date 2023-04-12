import{S as l}from"./sweetalert2.all-101be72f.js";import{_ as x,r as f,o as p,a as _,b as t,d,w as u,t as n,F as y,h as w,f as T,g as h}from"./index-a326aaf7.js";const{VITE_API:m,VITE_APIPATH:b}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"whattoplay",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{product:{},products:[],isLoading:!1}},methods:{getTargetProduct(){const{id:c}=this.$route.params;this.isLoading=!0,this.$http.get(`${m}/v2/api/${b}/product/${c}`).then(s=>{this.isLoading=!1,this.product=s.data.product,this.getProducts()}).catch(s=>{this.isLoading=!1,l.fire({icon:"error",title:`錯誤 ${s.response.status}`,text:s.response.data.message,confirmButtonText:"OK"})})},getProducts(c=1){this.isLoading=!0,this.$http.get(`${m}/v2/api/${b}/products/?page=${c}`).then(s=>{this.isLoading=!1;for(const i of s.data.products)if(i.id!==this.product.id&&i.category===this.product.category&&this.products.push(i),this.products.length>=3)break}).catch(s=>{this.isLoading=!1,l.fire({icon:"error",title:`錯誤 ${s.response.status}`,text:s.response.data.message,confirmButtonText:"OK"})})},addToCart(c){const s={product_id:c,qty:1};this.isLoading=!0,this.$http.post(`${m}/v2/api/${b}/cart`,{data:s}).then(i=>{this.isLoading=!1,l.fire({icon:"success",title:i.data.message,confirmButtonText:"OK"})}).catch(i=>{this.isLoading=!1,l.fire({icon:"error",title:`錯誤 ${i.response.status}`,text:i.response.data.message,confirmButtonText:"OK"})})},goToProduct(c){this.$router.push(`/product/${c}`).then(()=>{location.reload()})}},mounted(){this.getTargetProduct()}},$={class:"container my-5"},L={class:"row justify-content-center align-items-center"},P={class:"col-md-6"},C={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},V={class:"carousel-inner"},E={class:"carousel-item active"},B=["src"],I={class:"col-md-4"},N={"aria-label":"breadcrumb"},j={class:"breadcrumb bg-white px-0 mb-0 py-3"},A={class:"breadcrumb-item"},O={class:"breadcrumb-item"},D=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Detail",-1),S={class:"fw-bold h1 mb-1"},K={class:"mb-0 text-muted text-end"},U={class:"h4 fw-bold text-end"},H={class:"row align-items-center"},F=T('<div class="col-6"><div class="input-group my-3 bg-light rounded"><div class="input-group-prepend"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1"><i class="fas fa-minus"></i></button></div><input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"><div class="input-group-append"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"><i class="fas fa-plus"></i></button></div></div></div>',1),R={class:"col-6"},q={class:"row my-5 col-12 justify-content-center"},M={class:"col-md-6"},z={class:"col-md-4"},G={class:"text-muted"},J={class:"row justify-content-center"},Q={class:"col-md-10"},W={class:"row justify-content-between mt-4"},X=t("h3",{class:"fw-bold"},"你可能還喜歡...",-1),Y={class:"mb-4 position-relative position-relative"},Z=["src"],tt=t("a",{href:"#",class:"text-dark"},[t("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),st={class:"card-body p-0 d-flex justify-content-between align-items-end"},ot={class:"w-75"},et={class:"mb-0 mt-3 fs-5"},it={class:"card-text mb-0"},ct={class:"text-muted"},nt=["onClick"];function dt(c,s,i,at,e,a){const v=f("LoadingView"),r=f("router-link");return p(),_("div",$,[t("div",L,[t("div",P,[d(v,{active:e.isLoading,"onUpdate:active":s[0]||(s[0]=o=>e.isLoading=o)},null,8,["active"]),t("div",C,[t("div",V,[t("div",E,[t("img",{src:e.product.imageUrl,class:"d-block w-100",alt:"..."},null,8,B)])])])]),t("div",I,[t("nav",N,[t("ol",j,[t("li",A,[d(r,{to:"/",class:"text-muted"},{default:u(()=>[h("Home")]),_:1})]),t("li",O,[d(r,{to:"/products",class:"text-muted"},{default:u(()=>[h("Product")]),_:1})]),D])]),t("h2",S,n(e.product.title),1),t("p",K,[t("del",null,"NT$"+n(e.product.origin_price),1)]),t("p",U,"NT$"+n(e.product.price),1),t("div",H,[F,t("div",R,[t("button",{type:"button",class:"btn btn-primary py-2 text-nowrap w-100",onClick:s[1]||(s[1]=o=>a.addToCart(e.product.id))},"加入購物車")])])])]),t("div",q,[t("div",M,[t("p",null,n(e.product.description),1)]),t("div",z,[t("p",G,n(e.product.content),1)])]),t("div",J,[t("div",Q,[t("div",W,[X,(p(!0),_(y,null,w(e.products,o=>(p(),_("div",{class:"col-md-4 mt-2",key:o.id},[t("div",Y,[d(r,{to:`/product/${o.id}`,onClick:g=>a.goToProduct(o.id)},{default:u(()=>[t("img",{src:o.imageUrl,class:"card-img-top rounded-0",alt:"...",style:{"max-height":"150px","object-fit":"cover","object-position":"top center"}},null,8,Z)]),_:2},1032,["to","onClick"]),tt,t("div",st,[t("div",ot,[d(r,{to:`/product/${o.id}`,onClick:g=>a.goToProduct(o.id)},{default:u(()=>[t("h4",et,n(o.title),1)]),_:2},1032,["to","onClick"]),t("p",it,[h("NT$"+n(o.price)+" ",1),t("span",ct,[t("del",null,"NT$"+n(o.origin_price),1)])])]),t("button",{type:"button",class:"btn btn-outline-primary btn-sm text-nowrap",onClick:g=>a.addToCart(o.id)},"加入購物車",8,nt)])])]))),128))])])])])}const ut=x(k,[["render",dt]]);export{ut as default};
