<template>
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/products">產品列表</router-link> |
  <router-link to="/cart">購物車</router-link> |
  <router-link to="/admin" class="btn btn-primary btn-sm">登入後台</router-link>
  <hr> -->
  <!-- navbar -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link to="/"><img src="../../public/image/logo1.png" class="h-100" alt="logo"></router-link>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/products" class="nav-item nav-link me-4 active">商品列表</router-link>
              <a class="nav-item nav-link me-4">文章介紹</a>
              <router-link to="/about" class="nav-item nav-link me-4">關於我們</router-link>
              <router-link to="/cart" class="nav-item nav-link"><img src="../../public/image/Vector.png" alt=""></router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <RouterView></RouterView>
  <!-- footer -->
  <div class="bg-dark py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4">
              <a class="text-white h4" href="">
                <img src="../../public/image/logo2.png" class="mh-100" alt="logo">
              </a>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled text-white mb-1">
                <li class="mb-2"><router-link to="/products" class="text-white">商品列表</router-link></li>
                <li class="mb-2">文章介紹</li>
                <li class="mb-2"><router-link to="/about" class="text-white">關於我們</router-link></li>
                <li class="mb-2"><router-link to="/admin">後台登入</router-link></li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul class="list-unstyled text-white mb-1">
                <li class="mb-2">聯絡我們</li>
                <li class="mb-2">123456789@gmail.com</li>
                <li class="mb-2">(02) 1234-5678</li>
              </ul>
            </div>
            <div class="col-md-4">
              <div class="d-flex flex-column align-items-end justify-content-between text-white">
                <ul class="d-flex list-unstyled mb-0 h4 flex-wrap">
                  <li><a href="#" class="text-white mx-3"><img src="../../public/image/fb.png" alt="facebook" class="bg-white rounded-circle border border-5"></a></li>
                  <li><a href="#" class="text-white mx-3"><img src="../../public/image/linkedin.svg" alt=""></a></li>
                  <li><a href="#" class="text-white ms-3"><img src="../../public/image/ig.png" alt="instagram" class="bg-white rounded-circle border border-5"></a></li>
                </ul>
                <div class="d-flex flex-column align-items-end">
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
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  }
}
</script>
