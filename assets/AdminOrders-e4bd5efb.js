import{P as L}from"./PaginationView-eca78fb9.js";import{M as V,D as C}from"./DeleteModal-fa4f208d.js";import{_ as k,o as s,c as o,a as t,t as l,i as y,F as p,f as O,j as v,l as w,r as m,b as f,n as D}from"./index-0a2bf6a4.js";import{S as _}from"./sweetalert2.all-80534048.js";const T={props:["order"],data(){return{selectOrder:{},modal:"",isPaid:!1}},mounted(){this.modal=new V(document.querySelector("#orderModal"),{backdrop:"static",keyboard:!1})},watch:{order(){this.selectOrder=this.order}}},E={id:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"},S={class:"modal-dialog modal-xl"},B={class:"modal-content border-0"},A=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"訂單明細")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body"},U={class:"row"},K={class:"col-md-4"},j=t("h3",null,"用戶資料",-1),q={class:"table"},N={key:0},F=t("th",{style:{width:"40%"}},"姓名",-1),H=t("th",{style:{width:"40%"}},"電子郵件",-1),R=t("th",{style:{width:"40%"}},"電話",-1),z=t("th",{style:{width:"40%"}},"地址",-1),G={class:"col-md-8"},J=t("h3",null,"訂單明細",-1),Q={class:"table"},W=t("th",{style:{width:"100px"}},"訂單編號",-1),X=t("th",{style:{width:"100px"}},"下單時間",-1),Y=t("th",{style:{width:"100px"}},"付款時間",-1),Z={key:0},tt={key:1},et=t("th",null,"付款狀態",-1),st={key:0,class:"text-success"},ot={key:1,class:"text-muted"},lt=t("th",null,"總金額",-1),nt=t("h3",null,"選購商品",-1),it={class:"table"},dt={class:"text-end"},at={class:"d-flex justify-content-end"},rt={class:"form-check"},ct={class:"form-check-label",for:"isPaidCheck"},ut={key:0},ht={key:1},_t={class:"modal-body d-flex justify-content-end"},pt=t("button",{type:"button",class:"btn btn-outline-warning me-2","data-bs-dismiss":"modal"}," 取消 ",-1);function mt(n,i,r,h,e,u){return s(),o("div",E,[t("div",S,[t("div",B,[A,t("div",I,[t("div",U,[t("div",K,[j,t("table",q,[e.selectOrder.user?(s(),o("tbody",N,[t("tr",null,[F,t("td",null,l(e.selectOrder.user.name),1)]),t("tr",null,[H,t("td",null,l(e.selectOrder.user.email),1)]),t("tr",null,[R,t("td",null,l(e.selectOrder.user.tel),1)]),t("tr",null,[z,t("td",null,l(e.selectOrder.user.address),1)])])):y("",!0)])]),t("div",G,[J,t("table",Q,[t("tbody",null,[t("tr",null,[W,t("td",null,l(e.selectOrder.id),1)]),t("tr",null,[X,t("td",null,l(n.$filters.date(e.selectOrder.create_at)),1)]),t("tr",null,[Y,t("td",null,[e.selectOrder.paid_date?(s(),o("span",Z,l(n.$filters.date(e.selectOrder.paid_date)),1)):(s(),o("span",tt,"時間不正確"))])]),t("tr",null,[et,t("td",null,[e.selectOrder.is_paid?(s(),o("span",st,"已付款")):(s(),o("span",ot,"未付款"))])]),t("tr",null,[lt,t("td",null,l(n.$filters.currency(e.selectOrder.total)),1)])])]),nt,t("table",it,[t("tbody",null,[(s(!0),o(p,null,O(e.selectOrder.products,a=>(s(),o("tr",{key:a.id},[t("th",null,l(a.product.title),1),t("td",null,l(a.qty)+" / "+l(a.product.unit),1),t("td",dt,l(a.total),1)]))),128))])]),t("div",at,[t("div",rt,[v(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"isPaidCheck","onUpdate:modelValue":i[0]||(i[0]=a=>e.selectOrder.is_paid=a)},null,512),[[w,e.selectOrder.is_paid]]),t("label",ct,[e.selectOrder.is_paid?(s(),o("span",ut,"已付款")):(s(),o("span",ht,"未付款"))])])])])])]),t("div",_t,[pt,t("button",{type:"button",class:"btn btn-primary",onClick:i[1]||(i[1]=a=>n.$emit("update-order",e.selectOrder))}," 確認 ")])])])],512)}const ft=k(T,[["render",mt]]),{VITE_API:b,VITE_APIPATH:g}={VITE_API:"https://vue3-course-api.hexschool.io/",VITE_APIPATH:"whattoplay",BASE_URL:"/what_to_play/",MODE:"production",DEV:!1,PROD:!0},bt={data(){return{orders:[],pagination:{},selectOrder:{},currentPage:1,isLoading:!1}},components:{PaginationView:L,OrderModal:ft,DeleteModal:C},methods:{getOrders(n=1){const i=`${b}/v2/api/${g}/admin/orders?page=${n}`;this.isLoading=!0,this.$http.get(i).then(r=>{this.isLoading=!1,this.orders=r.data.orders,this.pagination=r.data.pagination}).catch(r=>{this.isLoading=!1,_.fire({icon:"error",title:`錯誤 ${r.response.status}`,text:r.response.data.message,confirmButtonText:"OK"})})},updatePaidStatus(n){const i=`${b}/v2/api/${g}/admin/order/${n.id}`,r={is_paid:n.is_paid};this.isLoading=!0,this.$http.put(i,{data:r}).then(h=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$refs.orderModal.modal.hide(),_.fire({icon:"success",title:h.data.message,confirmButtonText:"OK"})}).catch(h=>{this.isLoading=!1,_.fire({icon:"error",title:`錯誤 ${h.response.status}`,text:h.response.data.message,confirmButtonText:"OK"})})},openModal(n){this.selectOrder={...n},this.$refs.orderModal.modal.show()},openDelModal(n){this.selectOrder={...n},this.$refs.delModal.modal.show()},deleteOrder(){const n=`${b}/v2/api/${g}/admin/order/${this.selectOrder.id}`;this.isLoading=!0,this.$http.delete(n).then(i=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$refs.delModal.modal.hide(),_.fire({icon:"success",title:i.data.message,confirmButtonText:"OK"})}).catch(i=>{this.isLoading=!1,_.fire({icon:"error",title:`錯誤 ${i.response.status}`,text:i.response.data.message,confirmButtonText:"OK"})})}},mounted(){this.getOrders()}},gt={class:"container"},yt={class:"table mt-4"},Ot=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"電子郵件"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),kt={key:0},vt={class:"list-unstyled"},wt={class:"form-check form-switch"},Mt=["onUpdate:modelValue","onChange"],$t={class:"form-check-label",for:"`paidSwitch_${order.id}`"},xt={key:0},Pt={key:1},Lt={class:"btn-group"},Vt=["onClick"],Ct=["onClick"];function Dt(n,i,r,h,e,u){const a=m("LoadingView"),M=m("PaginationView"),$=m("OrderModal"),x=m("DeleteModal");return s(),o(p,null,[t("div",gt,[f(a,{active:e.isLoading,"onUpdate:active":i[0]||(i[0]=d=>e.isLoading=d)},null,8,["active"]),t("table",yt,[Ot,t("tbody",null,[(s(!0),o(p,null,O(e.orders,d=>(s(),o(p,{key:d.id},[e.orders.length?(s(),o("tr",{key:0,class:D({"text-muted":d.is_paid})},[t("td",null,l(n.$filters.date(d.create_at)),1),t("td",null,[d.user?(s(),o("span",kt,l(d.user.email),1)):y("",!0)]),t("td",null,[t("ul",vt,[(s(!0),o(p,null,O(d.products,(c,P)=>(s(),o("li",{key:P},l(c.product.title)+" / "+l(c.qty)+l(c.product.unit),1))),128))])]),t("td",null,l(d.total),1),t("td",null,[t("div",wt,[v(t("input",{class:"form-check-input",type:"checkbox",id:"`paidSwitch_${order.id}`","onUpdate:modelValue":c=>d.is_paid=c,onChange:c=>u.updatePaidStatus(d)},null,40,Mt),[[w,d.is_paid]])]),t("label",$t,[d.is_paid?(s(),o("span",xt,"已付款")):(s(),o("span",Pt,"未付款"))])]),t("td",null,[t("div",Lt,[t("button",{type:"button",onClick:c=>u.openModal(d),class:"btn btn-outline-primary btn-sm"}," 檢視 ",8,Vt),t("button",{type:"button",onClick:c=>u.openDelModal(d),class:"btn btn-outline-warning btn-sm"}," 刪除 ",8,Ct)])])],2)):y("",!0)],64))),128))])]),f(M,{pages:e.pagination,onEmitPage:u.getOrders},null,8,["pages","onEmitPage"])]),f($,{ref:"orderModal",order:e.selectOrder,onUpdateOrder:u.updatePaidStatus},null,8,["order","onUpdateOrder"]),f(x,{ref:"delModal",item:e.selectOrder,onDelete:u.deleteOrder},null,8,["item","onDelete"])],64)}const At=k(bt,[["render",Dt]]);export{At as default};
