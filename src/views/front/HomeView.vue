<template>
  <!-- banner -->
  <img src="/public/image/bannerImage.jpg" alt="banner" style="max-width: 100%;">
  <div class="container">
    <div class="row justify-content-center">
      <!-- welcome -->
      <div class="col-md-10">
        <div class="row justify-content-center align-items-center my-5">
          <div class="col-md-2">
            <img src="../../../public/image/welcomeLeft.png" alt="" style="max-height: 220px">
          </div>
          <div class="col-md-8 text-center">
            <div class="d-flex justify-content-center align-items-center">
              <h2 class="fs-1 fw-normal text-primary m-4 text-nowrap">歡迎來到</h2>
              <img src="../../../public/image/logo1.png" alt="" class="mw-50">
            </div>
            <p class="fs-6 mb-0">我們專門銷售各式盒玩、扭蛋、模型，我們提供的服務讓各個年齡層的玩具愛好者都可以探索、了解和購買最新和最棒的玩具收藏。</p>
          </div>
          <div class="col-md-2">
            <img src="../../../public/image/welcomeRight.png" alt="" class="mt-5 pt-5" style="max-width: 65%;">
          </div>
        </div>
      </div>
      <!-- article -->
      <div class="col-md-10 my-5" style="background: center center; background-size: cover; height: 100%;" :style="{ backgroundImage: `url(${articleBackgroundPath})` }">
        <div class="row justify-content-end">
          <div class="col-md-5 text-white bg-dark" style="height: 380px; --bs-bg-opacity: .6;">
            <div class="mx-md-4 mt-4">
              <h2 class="fw-normal mb-4">文章介紹</h2>
              <p class="">不定期分享盒玩、扭蛋開箱，以及我們對它的介紹與評價，如果你正在猶豫中不知道該買哪款，歡迎點進去看看有沒有喜歡的唷！</p>
              <router-link to="/articles" class="btn btn-primary rounded-pill text-white text-center text-nowrap px-5">查看更多</router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- product_list -->
      <div class="col-10 d-flex flex-column align-items-center mb-5">
        <h2 class="text-center fw-normal">商品一覽</h2>
        <div class="container">
          <div class="row justify-content-between mt-4">
            <div class="col-md-4 mt-2" v-for="product in products" :key="product.id">
              <div class="mb-4 position-relative position-relative">
                <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." style="max-height: 150px;object-fit: cover;object-position: top center;">
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0 d-flex justify-content-between align-items-end">
                  <div class="w-75">
                    <h4 class="mb-0 mt-3 fs-5"><router-link :to="`/product/${product.id}`">{{ product.title }}</router-link></h4>
                    <p class="card-text mb-0">NT${{ product.price }} <span class="text-muted "><del>NT${{ product.origin_price }}</del></span></p>
                  </div>
                  <button type="button" class="btn btn-outline-primary btn-sm text-nowrap" @click="addToCart(product.id)">加入購物車</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/products" class="btn btn-primary rounded-pill text-white text-center mt-4 text-nowrap px-5">查看更多</router-link>
      </div>
    </div>
  </div>
  <!-- more -->
  <div style="background-size: cover;" :style="{ backgroundImage: `url(${knowMorePath})` }">
    <div class="text-white mt-5 container">
      <div class="fs-6 text-center row justify-content-center">
        <div class="col-md-6 my-5">
          <p>我們的網站提供一個容易操作的介面，讓瀏覽和購買玩具成為有趣和愉快的體驗。我們還提供詳細的產品描述和高品質的圖片，幫助您做出明智的購買選擇。
          </p>
          <router-link to="/about" class="btn btn-primary rounded-pill text-white text-center text-nowrap px-5">了解更多</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleBackgroundPath from '../../../public/image/articleBackground.png'
import knowMorePath from '../../../public/image/knowMore.png'
import Swal from 'sweetalert2'
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      articleBackgroundPath,
      knowMorePath
    }
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/products/?page=${page}`)
        .then(res => {
          this.isLoading = false
          this.products = res.data.products
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
    this.getProducts()
  }
}
</script>

<style scoped>
</style>
