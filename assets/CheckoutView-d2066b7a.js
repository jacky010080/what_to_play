import{S as u}from"./sweetalert2.all-80534048.js";import{_ as x,r as c,o as p,c as _,a as e,b as l,F as w,f as V,t as r,w as y,n as m,j as T,k as L}from"./index-0a2bf6a4.js";const{VITE_API:f,VITE_APIPATH:h}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"whattoplay",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{products:[],productId:"",cart:{},loadingItem:"",isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){this.isLoading=!0,this.$http.get(`${f}/v2/api/${h}/cart`).then(i=>{this.isLoading=!1,this.cart=i.data.data}).catch(i=>{this.isLoading=!1,u.fire({icon:"error",title:`錯誤 ${i.response.status}`,text:i.response.data.message,confirmButtonText:"OK"})})},createOrder(){const i=this.form;this.isLoading=!0,this.$http.post(`${f}/v2/api/${h}/order`,{data:i}).then(s=>{this.isLoading=!1,this.$refs.form.resetForm(),this.getCart(),u.fire({icon:"success",title:s.data.message,confirmButtonText:"OK"})}).catch(s=>{this.isLoading=!1,u.fire({icon:"error",title:`錯誤 ${s.response.status}`,text:s.response.data.message,confirmButtonText:"OK"})})}},mounted(){this.getCart()}},I={class:"container"},k=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"訂單確認")])],-1),P={class:"row flex-row-reverse justify-content-center pb-5"},A={class:"col-4"},U={class:"border p-4 mb-4"},B=["src"],C={class:"w-100"},F={class:"d-flex justify-content-between"},O={class:"mb-0 fw-bold"},S={class:"mb-0"},j={class:"mb-0 fw-bold"},q={class:"table mt-4 border-top border-bottom text-muted"},D=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal",-1),N={class:"text-end border-0 px-0 pt-4"},M=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"Payment"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),K={class:"d-flex justify-content-between mt-4"},H=e("p",{class:"mb-0 h4 fw-bold"},"Total",-1),R={class:"mb-0 h4 fw-bold"},z={class:"col-6"},G={class:"mb-3"},J=e("label",{for:"email",class:"form-label"},"Email",-1),Q={class:"mb-3"},W=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),X={class:"mb-3"},Y=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),Z={class:"mb-3"},$=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ee={class:"mb-3"},se=e("label",{for:"message",class:"form-label"},"留言",-1),te=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-primary"},"送出訂單")],-1);function oe(i,s,le,ae,t,b){const v=c("LoadingView"),n=c("FieldView"),d=c("ErrorMessage"),g=c("FormView");return p(),_("div",I,[k,e("div",P,[e("div",A,[l(v,{active:t.isLoading,"onUpdate:active":s[0]||(s[0]=o=>t.isLoading=o),class:"mb-3"},null,8,["active"]),e("div",U,[(p(!0),_(w,null,V(t.cart.carts,o=>(p(),_("div",{class:"d-flex mt-2",key:o.id},[e("img",{src:o.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,B),e("div",C,[e("div",F,[e("p",O,r(o.product.title),1),e("p",S,"NT$"+r(o.total),1)]),e("p",j,"x"+r(o.qty),1)])]))),128)),e("table",q,[e("tbody",null,[e("tr",null,[D,e("td",N,"NT$"+r(t.cart.total),1)]),M])]),e("div",K,[H,e("p",R,"NT$"+r(t.cart.total),1)])])]),e("div",z,[l(g,{ref:"form",onSubmit:b.createOrder},{default:y(({errors:o})=>[e("div",G,[J,l(n,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.form.user.email,"onUpdate:modelValue":s[1]||(s[1]=a=>t.form.user.email=a)},null,8,["class","modelValue"]),l(d,{name:"email",class:"invalid-feedback"})]),e("div",Q,[W,l(n,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[2]||(s[2]=a=>t.form.user.name=a)},null,8,["class","modelValue"]),l(d,{name:"姓名",class:"invalid-feedback"})]),e("div",X,[Y,l(n,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":s[3]||(s[3]=a=>t.form.user.tel=a)},null,8,["class","modelValue"]),l(d,{name:"電話",class:"invalid-feedback"})]),e("div",Z,[$,l(n,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[4]||(s[4]=a=>t.form.user.address=a)},null,8,["class","modelValue"]),l(d,{name:"地址",class:"invalid-feedback"})]),e("div",ee,[se,T(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[5]||(s[5]=a=>t.form.message=a)},null,512),[[L,t.form.message]])]),te]),_:1},8,["onSubmit"])])])])}const ne=x(E,[["render",oe]]);export{ne as default};