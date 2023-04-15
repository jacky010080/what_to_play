<template>
  <!-- navbar -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link to="/"><img src="../../public/image/logo1.png" class="h-100" alt="logo"></router-link>
          <!-- dropdown -->
          <div v-if="showElement">
            <div class="dropdown">
              <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../../public/image/dropdown.png" alt="dropdownImage">
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li class="ps-2">
                  <router-link to="/products" class="nav-item nav-link">商品列表</router-link>
                </li>
                <li class="ps-2">
                  <router-link to="/articles" class="nav-item nav-link">文章介紹</router-link>
                </li>
                <li class="ps-2">
                  <router-link to="/about" class="nav-item nav-link">關於我們</router-link>
                </li>
                <li class="ps-2">
                  <router-link to="/cart" class="nav-item nav-link">
                    <img src="../../public/image/cart.png" alt="cart">
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/products" class="nav-item nav-link me-4">商品列表</router-link>
              <router-link to="/articles" class="nav-item nav-link me-4">文章介紹</router-link>
              <router-link to="/about" class="nav-item nav-link me-4">關於我們</router-link>
              <router-link to="/cart" class="nav-item nav-link">
                <img src="../../public/image/cart.png" alt="cart">
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <RouterView />
  <!-- footer -->
  <div class="bg-primary position-relative" style="height: 5px;">
    <button
      type="button"
      @click="toTop()"
      class="bg-primary rounded-circle border-0 position-absolute top-50 end-0 translate-middle-y me-6 px-2 py-1"
    >
      <img src="../../public/image/scrollTop.png" alt="arrow" class="mb-1">
    </button>
  </div>
  <div class="bg-dark py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4 d-flex justify-content-md-start justify-content-center">
              <a class="text-white h4" href="">
                <img src="../../public/image/logo2.png" class="mh-100" alt="logo">
              </a>
            </div>
            <!-- first list -->
            <div class="col-md-2 mt-md-0 mt-4 px-0">
              <ul class="list-unstyled text-white mb-1 d-flex flex-md-column justify-content-md-start justify-content-center">
                <li class="mb-2 mx-md-0 mx-sm-3 mx-1">
                  <router-link to="/products" class="text-white text-nowrap">商品列表</router-link>
                </li>
                <li class="mb-2 mx-md-0 mx-sm-3 mx-1">
                  <router-link to="/articles" class="text-white text-nowrap">文章介紹</router-link>
                </li>
                <li class="mb-2 mx-md-0 mx-sm-3 mx-1">
                  <router-link to="/about" class="text-white text-nowrap">關於我們</router-link>
                </li>
                <li class="mb-2 mx-md-0 mx-sm-3 mx-1">
                  <router-link to="/admin" class="text-nowrap">後台登入</router-link>
                </li>
              </ul>
            </div>
            <!-- second list -->
            <div class="col-md-2 mt-md-0 mt-4 px-0">
              <ul class="list-unstyled text-white mb-1 d-flex flex-column align-items-md-start align-items-center">
                <li class="mb-2">聯絡我們</li>
                <li class="mb-2">
                  <a href="mailto:jacky010080@gmail.com" class="d-flex align-items-center text-light">
                    <img src="../../public/image/email.png" alt="email" class="me-2" style="max-height: 15px;">
                    jacky010080@gmail.com
                  </a>
                </li>
                <li class="mb-2">
                  <a href="tel:(02) 1234-5678" class="d-flex align-items-center text-light">
                    <img src="../../public/image/phone.png" alt="phone" class="me-2" style="max-height: 15px;">
                    (02) 1234-5678
                  </a>
                </li>
              </ul>
            </div>
            <!-- contact -->
            <div class="col-md-4 px-0">
              <div class="d-flex flex-column justify-content-between align-items-md-end align-items-center text-white">
                <ul class="d-flex list-unstyled mb-0 mt-md-0 mt-4 flex-wrap">
                  <li>
                    <a href="#" class="text-white mx-2">
                      <img
                        src="../../public/image/fb.png"
                        alt="facebook"
                        class="bg-white rounded-circle border border-5"
                        style="height: 45px;"
                      >
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white mx-2">
                      <img
                        src="../../public/image/linkedin.svg"
                        alt="linkedlin"
                        class="bg-white rounded-circle border border-5"
                        style="height: 45px;"
                      >
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-white mx-2">
                      <img
                        src="../../public/image/ig.png"
                        alt="instagram"
                        class="bg-white rounded-circle border border-5"
                        style="height: 45px;"
                      >
                    </a>
                  </li>
                </ul>
                <div class="d-flex flex-column align-items-md-end align-items-center mt-4">
                  <p class="mb-0">Copyright©  2023 盒玩，何玩？</p>
                  <p class="mb-0">所有圖片為個人練習使用，無商業用途</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default {
  data () {
    return {
      showElement: false,
      windowWidth: 0
    }
  },
  mounted () {
    // 取得視窗寬度
    this.windowWidth = window.innerWidth
    // 註冊 resize 事件監聽器
    window.addEventListener('resize', this.handleResize)
    // 初始狀態下是否要顯示元件，這裡以視窗寬度小於 768px 為例
    this.showElement = this.windowWidth < 768
  },
  beforeUnmount () {
    // 移除 resize 事件監聽器
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      // 視窗寬度改變時，更新 showElement 的值
      this.windowWidth = window.innerWidth
      this.showElement = this.windowWidth < 768
    },
    toTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
