import{S as m}from"./sweetalert2.all-147aed70.js";import{_ as x,r as u,o as _,c as p,a as e,F as w,g as V,t as i,b as a,w as g,n as d,k as y,l as T}from"./index-5b10822d.js";const{VITE_API:f,VITE_APIPATH:b}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"jacky010080",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{products:[],productId:"",cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){this.$http.get(`${f}/v2/api/${b}/cart`).then(r=>{this.cart=r.data.data}).catch(r=>{m.fire({icon:"error",title:`錯誤 ${r.response.status}`,text:r.response.data.message,confirmButtonText:"OK"})})},createOrder(){const r=this.form;this.$http.post(`${f}/v2/api/${b}/order`,{data:r}).then(s=>{this.$refs.form.resetForm(),this.getCart(),m.fire({icon:"success",title:s.data.message,confirmButtonText:"OK"})}).catch(s=>{m.fire({icon:"error",title:`錯誤 ${s.response.status}`,text:s.response.data.message,confirmButtonText:"OK"})})}},mounted(){this.getCart()}},k={class:"container"},I=e("div",{class:"row justify-content-center"},[e("div",{class:"col-md-10"},[e("h3",{class:"fw-bold mb-4 pt-3"},"訂單確認")])],-1),P={class:"row flex-row-reverse justify-content-center pb-5"},A={class:"col-4"},B={class:"border p-4 mb-4"},C=["src"],F={class:"w-100"},O={class:"d-flex justify-content-between"},S={class:"mb-0 fw-bold"},U={class:"mb-0"},j={class:"mb-0 fw-bold"},q={class:"table mt-4 border-top border-bottom text-muted"},D=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"Subtotal",-1),N={class:"text-end border-0 px-0 pt-4"},M=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"Payment"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),K={class:"d-flex justify-content-between mt-4"},H=e("p",{class:"mb-0 h4 fw-bold"},"Total",-1),L={class:"mb-0 h4 fw-bold"},R={class:"col-6"},$={class:"mb-3"},z=e("label",{for:"email",class:"form-label"},"Email",-1),G={class:"mb-3"},J=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),Q={class:"mb-3"},W=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),X={class:"mb-3"},Y=e("label",{for:"address",class:"form-label"},"收件人地址",-1),Z={class:"mb-3"},ee=e("label",{for:"message",class:"form-label"},"留言",-1),se=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-primary"},"送出訂單")],-1);function te(r,s,oe,le,t,h){const n=u("FieldView"),c=u("ErrorMessage"),v=u("FormView");return _(),p("div",k,[I,e("div",P,[e("div",A,[e("div",B,[(_(!0),p(w,null,V(t.cart.carts,o=>(_(),p("div",{class:"d-flex mt-2",key:o.id},[e("img",{src:o.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,C),e("div",F,[e("div",O,[e("p",S,i(o.product.title),1),e("p",U,"NT$"+i(o.total),1)]),e("p",j,"x"+i(o.qty),1)])]))),128)),e("table",q,[e("tbody",null,[e("tr",null,[D,e("td",N,"NT$"+i(t.cart.total),1)]),M])]),e("div",K,[H,e("p",L,"NT$"+i(t.cart.total),1)])])]),e("div",R,[a(v,{ref:"form",onSubmit:h.createOrder},{default:g(({errors:o})=>[e("div",$,[z,a(n,{id:"email",name:"email",type:"email",class:d(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=l=>t.form.user.email=l)},null,8,["class","modelValue"]),a(c,{name:"email",class:"invalid-feedback"})]),e("div",G,[J,a(n,{id:"name",name:"姓名",type:"text",class:d(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>t.form.user.name=l)},null,8,["class","modelValue"]),a(c,{name:"姓名",class:"invalid-feedback"})]),e("div",Q,[W,a(n,{id:"tel",name:"電話",type:"text",class:d(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=l=>t.form.user.tel=l)},null,8,["class","modelValue"]),a(c,{name:"電話",class:"invalid-feedback"})]),e("div",X,[Y,a(n,{id:"address",name:"地址",type:"text",class:d(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=l=>t.form.user.address=l)},null,8,["class","modelValue"]),a(c,{name:"地址",class:"invalid-feedback"})]),e("div",Z,[ee,y(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=l=>t.form.message=l)},null,512),[[T,t.form.message]])]),se]),_:1},8,["onSubmit"])])])])}const ie=x(E,[["render",te]]);export{ie as default};
