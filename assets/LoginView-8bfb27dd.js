import{S as i}from"./sweetalert2.all-21680827.js";import{_ as c,o as m,c as u,a as e,h as p,k as l,l as d}from"./index-97a2166d.js";const{VITE_API:f}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"whattoplay",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${f}/v2/admin/signin`,this.user).then(t=>{const{token:s,expired:n}=t.data;document.cookie=`hexToken=${s}; expires=${new Date(n)};`,this.$router.push("/admin/products"),i.fire({icon:"success",title:t.data.message,confirmButtonText:"OK"})}).catch(t=>{i.fire({icon:"error",title:`錯誤 ${t.response.status}`,text:t.response.data.message,confirmButtonText:"OK"})})}}},h={class:"container mt-5 pt-5"},w={class:"row justify-content-center"},x={class:"form-floating mb-4"},b=e("label",{for:"username"},"Email address",-1),g={class:"form-floating mb-4"},v=e("label",{for:"password"},"Password",-1),E=e("button",{class:"btn btn-lg btn-primary align-self-center mt-3 mb-5 text-nowrap",type:"submit"}," 登入 ",-1);function T(t,s,n,V,r,a){return m(),u("div",h,[e("div",w,[e("form",{id:"form",class:"form-signin col-8 d-flex flex-column mt-5 mb-5",onSubmit:s[2]||(s[2]=p((...o)=>a.login&&a.login(...o),["prevent"]))},[e("div",x,[l(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=o=>r.user.username=o),required:"",autofocus:""},null,512),[[d,r.user.username]]),b]),e("div",g,[l(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=o=>r.user.password=o),required:""},null,512),[[d,r.user.password]]),v]),E],32)])])}const k=c(_,[["render",T]]);export{k as default};
