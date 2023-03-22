<template>
  <!-- cart template -->
  <div class="container">
    <div class="mt-3">
      <h3 class="mt-3 mb-4">購物車</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col" class="border-0 ps-0">品名</th>
                <th scope="col" class="border-0">數量</th>
                <th scope="col" class="border-0">單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id" class="border-bottom border-top">
                  <td class="border-0 align-middle">
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteProduct(item)" :disabled="item.id === loadingItem">
                          <i class="fas fa-spinner fa-pulse"></i>
                          x
                      </button>
                  </td>
                  <td scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img :src="item.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{ item.product.title }}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <div class="input-group input-group-sm">
                      <select name="" id="" class="form-control" v-model="item.qty" @change="updateProductQty(item)" :disabled="item.id === loadingItem">
                        <option :value="i" v-for="i in 20" :key="'cart' + i">{{ i }}</option>
                      </select>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT${{ item.total }}</p></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!-- Order Detail -->
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">Order Detail</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{ cart.total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT${{ cart.total }}</p>
            </div>
            <a href="#" class="btn btn-primary w-100 mt-4">購買</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      loadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/cart`)
        .then(res => {
          this.cart = res.data.data
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    updateProductQty (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http.put(`${VITE_API}/v2/api/${VITE_APIPATH}/cart/${item.id}`, { data })
        .then(res => {
          alert(res.data.message)
          this.getCart()
          this.loadingItem = ''
        })
        .catch(err => {
          alert(err.response.data.message)
          this.loadingItem = ''
        })
    },
    deleteProduct (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_API}/v2/api/${VITE_APIPATH}/cart/${item.id}`)
        .then(res => {
          alert(res.data.message)
          this.getCart()
          this.loadingItem = ''
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    deleteAllProduct () {
      this.$http.delete(`${VITE_API}/v2/api/${VITE_APIPATH}/carts`)
        .then(res => {
          alert(res.data.message)
          this.getCart()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
