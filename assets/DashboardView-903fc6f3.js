import{_ as l,R as h,r as i,o as _,a as p,b as s,d as o,w as a,g as e,i as m}from"./index-68db7088.js";const{VITE_API:f}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"whattoplay",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},k={components:{RouterView:h},methods:{logout(){document.cookie=`hexToken=; expires=${new Date};`,this.$router.push("/login")},checkLogin(){const c=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=c,this.$http.post(`${f}api/user/check`).then(t=>{alert(`狀態是否登入：${t.data.success}`),t.data.success||this.$router.push("/login")}).catch(t=>{alert(t.data.message)})}},mounted(){this.checkLogin()}},w={class:"container"},$={class:"row justify-content-center"},V={class:"col-10"},g=s("hr",null,null,-1);function x(c,t,b,E,T,r){const n=i("router-link"),u=i("RouterView");return _(),p("div",w,[s("div",$,[s("div",V,[o(n,{to:"/admin/products"},{default:a(()=>[e("後台產品列表")]),_:1}),e(" | "),o(n,{to:"/admin/orders"},{default:a(()=>[e("後台訂單列表")]),_:1}),e(" | "),o(n,{to:"/"},{default:a(()=>[e("回到前台")]),_:1}),e(" | "),s("button",{type:"button",class:"btn btn-warning btn-sm",onClick:t[0]||(t[0]=m((...d)=>r.logout&&r.logout(...d),["prevent"]))},"登出"),g,o(u)])])])}const A=l(k,[["render",x]]);export{A as default};
