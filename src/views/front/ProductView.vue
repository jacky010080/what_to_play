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
    <!-- 單一商品介紹 -->
    <div class="row my-5 col-12 justify-content-center">
      <div class="col-md-6">
        <p>{{ product.description }}</p>
      </div>
      <div class="col-md-4">
        <p class="text-muted">{{ product.content }}</p>
      </div>
    </div>
    <!-- relativeProducts -->
    <div class="row justify-content-center">
      <div class="col-md-10">
          <div class="row justify-content-between mt-4">
            <h3 class="fw-bold">你可能還喜歡...</h3>
            <div class="col-md-4 mt-2" v-for="item in products" :key="item.id">
              <div class="mb-4 position-relative position-relative">
                <img :src="item.imageUrl" class="card-img-top rounded-0" alt="..." style="max-height: 150px;object-fit: cover;object-position: top center;">
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0 d-flex justify-content-between align-items-end">
                  <div class="w-75">
                    <h4 class="mb-0 mt-3 fs-5"><router-link :to="`/product/${item.id}`">{{ item.title }}</router-link></h4>
                    <p class="card-text mb-0">NT${{ item.price }} <span class="text-muted "><del>NT${{ item.origin_price }}</del></span></p>
                  </div>
                  <button type="button" class="btn btn-outline-primary btn-sm text-nowrap" @click="addToCart(item.id)">加入購物車</button>
                </div>
              </div>
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
  data () {
    return {
      product: {},
      products: [],
      isLoading: false
    }
  },
  methods: {
    getTargetProduct () {
      const { id } = this.$route.params
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/product/${id}`)
        .then(res => {
          this.isLoading = false
          this.product = res.data.product
          this.getProducts()
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
    getProducts (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/products/?page=${page}`)
        .then(res => {
          this.isLoading = false
          for (const item of res.data.products) {
            if (item.id !== this.product.id && item.category === this.product.category) {
              this.products.push(item)
            }
            if (this.products.length >= 3) {
              break
            }
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
    this.getTargetProduct()
  }
}
</script>
