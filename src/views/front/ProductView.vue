<template>
  <div class="container my-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <LoadingView v-model:active="isLoading"></LoadingView>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item"><router-link to="/" class="text-muted">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/products" class="text-muted">Product</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary py-2 text-nowrap w-100" @click="addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5 col-12 justify-content-center">
      <div class="col-md-6">
        <p>{{ product.description }}</p>
      </div>
      <div class="col-md-4">
        <p class="text-muted">{{ product.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      product: {},
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/product/${id}`)
        .then(res => {
          this.isLoading = false
          this.product = res.data.product
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
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.isLoading = true
      this.$http.post(`${VITE_API}/v2/api/${VITE_APIPATH}/cart`, { data })
        .then(res => {
          this.isLoading = false
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            confirmButtonText: 'OK'
          })
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
    this.getProduct()
  }
}
</script>
