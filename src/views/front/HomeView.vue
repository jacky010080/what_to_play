<template>
  <!-- banner -->
  <img src="../../../public/image/bannerImage.jpg" alt="banner" style="max-width: 100%;">
  <div class="container">
    <div class="row justify-content-center">
      <!-- welcome -->
      <div class="col-10">
        <div class="d-flex justify-content-center align-items-center">
          <img src="../../../public/image/Rectangle262.png" alt="" class="w-25">
          <div class="text-center">
            <div class="d-flex justify-content-center align-items-center">
              <h2 class="fs-1 fw-normal text-primary m-4">歡迎來到</h2>
              <img src="../../../public/image/logo1.png" alt="">
            </div>
            <p class="fs-6 mb-0">我們專門銷售各式盒玩、扭蛋、模型，我們提供的服務讓各個年齡層的玩具愛好者都可以探索、了解和購買最新和最棒的玩具收藏。</p>
          </div>
          <div class="mt-5">
            <img src="../../../public/image/Rectangle264.png" alt="" class="mt-5 pt-5">
          </div>
        </div>
      </div>
      <!-- product_list -->
      <div class="col-10 d-flex flex-column align-items-center mb-5">
        <h2 class="text-center fw-normal">商品一覽</h2>
        <div class="container">
          <div class="row justify-content-between mt-4">
            <div class="col-4 mt-2">
              <div class="card">
                <img
                  src="../../../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
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
                  src="../../../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
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
                  src="../../../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
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
                  src="../../../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
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
                  src="../../../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
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
                  src="../../../public/image/branden-skeli-Y_-Pr7qLDf8-unsplash.png"
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
        <router-link to="/products" class="btn btn-primary rounded-pill text-white text-center w-25 mt-4">查看更多</router-link>
      </div>
    </div>
  </div>
  <!-- more -->
  <div class="position-relative text-white mt-5">
    <img src="../../../public/image/Rectangle263.png" alt="" class="mw-100">
    <div class="fs-6 text-center position-absolute top-50 start-50 translate-middle" style="width: 45%; margin-left: 100px;">
      <p>我們的網站提供一個容易操作的介面，讓瀏覽和購買玩具成為有趣和愉快的體驗。我們還提供詳細的產品描述和高品質的圖片，幫助您做出明智的購買選擇。
      </p>
      <router-link to="/about" class="btn btn-primary rounded-pill text-white text-center w-25">了解更多</router-link>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
</style>
