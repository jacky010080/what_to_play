<template>
  <div class="container mt-5">
    <LoadingView v-model:active="isLoading"></LoadingView>
    <div class="mt-3">
      <button
        type="button"
        class="btn btn-outline-warning rounded-0"
        @click="deleteAllProduct()"
        :disabled="!order_open"
      >
        清空購物車
      </button>
      <h3 class="mt-3 mb-4">購物車</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col" class="border-0 ps-0">品名</th>
                <th scope="col" class="border-0">數量</th>
                <th scope="col" class="border-0 text-end">總計</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id" class="border-bottom border-top">
                  <td class="border-0 align-middle">
                    <button
                      type="button"
                      class="btn btn-outline-warning btn-sm rounded-0"
                      @click="deleteProduct(item)"
                      :disabled="item.id === loadingItem"
                    >
                      x
                    </button>
                  </td>
                  <td scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img
                    :src="item.product.imageUrl"
                    alt="productImage"
                    style="width: 72px; height: 72px; object-fit: cover;"
                  >
                    <p class="mb-0 fw-bold ms-md-3 d-inline-block">{{ item.product.title }}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <div class="input-group input-group-sm">
                      <select
                        class="form-control"
                        v-model="item.qty"
                        @change="updateProductQty(item)"
                        :disabled="item.id === loadingItem"
                      >
                        <option :value="i" v-for="i in 20" :key="'cart' + i">{{ i }}</option>
                      </select>
                    </div>
                  </td>
                  <td class="border-0 align-middle text-end">
                    <p class="mb-0 ms-auto">NT${{ item.total.toLocaleString() }}</p>
                  </td>
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
                  <!-- <td class="text-end border-0 px-0 pt-4">NT${{ cart.total }}</td> -->
                </tr>
                <tr v-for="item in cart.carts" :key="item.id">
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">{{ item.product.title }}</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{ item.total.toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT${{ cart.total }}</p>
            </div>
            <router-link v-if="order_open" to="/checkout" class="btn btn-primary w-100 mt-4">確認購買</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  emits: ['refreshCart'],
  data () {
    return {
      products: [],
      productId: '',
      cart: {},
      loadingItem: '',
      order_open: false,
      isLoading: false
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/cart`)
        .then(res => {
          this.isLoading = false
          this.cart = res.data.data
          this.cart.total = this.cart.total.toLocaleString()
          if (this.cart.carts.length > 0) {
            this.order_open = true
          } else {
            this.order_open = false
          }
        })
        .catch(err => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response.status}`,
            text: err.response.data.message,
            confirmButtonText: 'OK'
          })
        })
    },
    updateProductQty (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.isLoading = true
      this.$http.put(`${VITE_API}/v2/api/${VITE_APIPATH}/cart/${item.id}`, { data })
        .then(res => {
          this.isLoading = false
          this.getCart()
          this.loadingItem = ''
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            confirmButtonText: 'OK'
          })
        })
        .catch(err => {
          this.isLoading = false
          this.loadingItem = ''
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response.status}`,
            text: err.response.data.message,
            confirmButtonText: 'OK'
          })
        })
    },
    deleteProduct (item) {
      this.loadingItem = item.id
      this.isLoading = true
      this.$http.delete(`${VITE_API}/v2/api/${VITE_APIPATH}/cart/${item.id}`)
        .then(res => {
          this.isLoading = false
          this.getCart()
          this.loadingItem = ''
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            confirmButtonText: 'OK'
          })
          this.$emit('refreshCart')
        })
        .catch(err => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response.status}`,
            text: err.response.data.message,
            confirmButtonText: 'OK'
          })
        })
    },
    deleteAllProduct () {
      this.isLoading = true
      this.$http.delete(`${VITE_API}/v2/api/${VITE_APIPATH}/carts`)
        .then(res => {
          this.isLoading = false
          this.getCart()
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            confirmButtonText: 'OK'
          })
          this.$emit('refreshCart')
        })
        .catch(err => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response.status}`,
            text: err.response.data.message,
            confirmButtonText: 'OK'
          })
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
