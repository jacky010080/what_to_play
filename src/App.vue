<template>
  <div class="container">
    <router-view />
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <!-- navbar -->
      <div class="col-10">
        <nav class="navbar navbar-expand-lg navbar-light">
          <img src="../public/image/logo 1.png" class="h-100" alt="logo">
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link me-4 active" href="./index.html">商品列表</a>
              <a class="nav-item nav-link me-4" href="./product.html">文章介紹</a>
              <a class="nav-item nav-link me-4" href="./detail.html">關於我們</a>
              <a class="nav-item nav-link me-4" href="./detail.html">關於我們</a>
              <a class="nav-item nav-link" href="./cart.html"><img src="../public/image/Vector.png" alt=""></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <!-- banner -->
  <img src="../public/image/bannerImage.jpg" alt="banner" style="max-width: 100%;">
  <div class="container">
    <div class="row justify-content-center">
      <!-- welcome -->
      <div class="col-10" style="border: 1px solid green;">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../public/image/Rectangle 262.png" alt="" class="w-25">
          <div class="text-center">
            <div class="d-flex justify-content-center align-items-center">
              <h2 class="fs-1 fw-normal text-primary m-4">歡迎來到</h2>
              <img src="../public/image/logo 1.png" alt="">
            </div>
            <p class="fs-6 mb-0">我們專門銷售各式盒玩、扭蛋、模型，我們提供的服務讓各個年齡層的玩具愛好者都可以探索、了解和購買最新和最棒的玩具收藏。</p>
          </div>
          <div class="mt-5">
            <img src="../public/image/Rectangle 264.png" alt="" class="mt-5 pt-5">
          </div>
        </div>
      </div>
      <!-- product_list -->
      <div class="col-10 d-flex flex-column align-items-center mb-5" style="border: 1px solid green;">
        <h2 class="text-center fw-normal">商品一覽</h2>
        <div class="container">
          <div class="row justify-content-between mt-4">
            <div class="col-4 mt-2">
              <div class="card">
                <img
                  src="../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body d-flex align-items-end">
                  <div>
                    <p class="text-primary">RE-MENT 寶可夢 </p>
                    <h4 class="fs-5">AQUA BOTTLE collection</h4>
                  </div>
                  <p class="text-warning">$290</p>
                </div>
              </div>
            </div>
            <div class="col-4 mt-2">
              <div class="card">
                <img
                  src="../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
                  class="card-img-top rounded-0"
                  alt="..."/>
                <div class="card-body d-flex align-items-end">
                  <div>
                    <p class="text-primary">RE-MENT 寶可夢 </p>
                    <h4 class="fs-5">AQUA BOTTLE collection</h4>
                  </div>
                  <p class="text-warning">$290</p>
                </div>
              </div>
            </div>
            <div class="col-4 mt-2">
              <div class="card">
                <img
                  src="../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body d-flex align-items-end">
                  <div>
                    <p class="text-primary">RE-MENT 寶可夢 </p>
                    <h4 class="fs-5">AQUA BOTTLE collection</h4>
                  </div>
                  <p class="text-warning">$290</p>
                </div>
              </div>
            </div>
            <div class="col-4 mt-2">
              <div class="card">
                <img
                  src="../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body d-flex align-items-end">
                  <div>
                    <p class="text-primary">RE-MENT 寶可夢 </p>
                    <h4 class="fs-5">AQUA BOTTLE collection</h4>
                  </div>
                  <p class="text-warning">$290</p>
                </div>
              </div>
            </div>
            <div class="col-4 mt-2">
              <div class="card">
                <img
                  src="../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body d-flex align-items-end">
                  <div>
                    <p class="text-primary">RE-MENT 寶可夢 </p>
                    <h4 class="fs-5">AQUA BOTTLE collection</h4>
                  </div>
                  <p class="text-warning">$290</p>
                </div>
              </div>
            </div>
            <div class="col-4 mt-2">
              <div class="card">
                <img
                  src="../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body d-flex align-items-end">
                  <div>
                    <p class="text-primary">RE-MENT 寶可夢 </p>
                    <h4 class="fs-5">AQUA BOTTLE collection</h4>
                  </div>
                  <p class="text-warning">$290</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary rounded-pill text-white text-center w-25 mt-4">
          查看更多
        </button>
      </div>
    </div>
  </div>
  <!-- more -->
  <div class="position-relative text-white mt-5">
    <img src="../public/image/Rectangle263.png" alt="" class="mw-100">
    <div class="fs-6 text-center position-absolute top-50 start-50 translate-middle" style="width: 45%; margin-left: 100px;">
      <p>我們的網站提供一個容易操作的介面，讓瀏覽和購買玩具成為有趣和愉快的體驗。我們還提供詳細的產品描述和高品質的圖片，幫助您做出明智的購買選擇。
      </p>
      <button type="button" class="btn btn-primary rounded-pill text-white">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解更多&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
    </div>
  </div>
  <!-- footer -->
  <div class="bg-dark py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 d-flex justify-content-between">
          <div class="d-flex align-items-start">
        <a class="text-white h4" href="./index.html"><img src="../public/image/logo 2.png" class="h-100" alt="logo"></a>
          </div>
          <ul class="list-unstyled text-white mb-1">
              <li class="mb-2 fs-6">商品列表</li>
              <li class="mb-2">文章介紹</li>
              <li class="mb-2">關於我們</li>
              <li class="mb-2">後台登入</li>
          </ul>
          <ul class="list-unstyled text-white mb-1">
              <li class="mb-2">聯絡我們</li>
              <li class="mb-2">123456789@gmail.com</li>
              <li class="mb-2">(02) 1234-5678</li>
          </ul>
          <div class="d-flex flex-column align-items-end justify-content-between text-white">
            <ul class="d-flex list-unstyled mb-0 h4">
              <li><a href="#" class="text-white mx-3"><img src="../public/image/fb.png" alt="facebook" class="bg-white rounded-circle border border-5"></a></li>
              <li><a href="#" class="text-white mx-3"><img src="../public/image/linkedin.svg" alt=""></a></li>
              <li><a href="#" class="text-white ms-3"><img src="../public/image/ig.png" alt="instagram" class="bg-white rounded-circle border border-5"></a></li>
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
</template>

<script>
export default {}
</script>

<style lang="scss">

</style>
