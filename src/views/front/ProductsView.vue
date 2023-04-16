<template>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row justify-content-center">
        <!-- 目錄 -->
        <div class="col-md-2">
          <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div class="card border-0 d-flex flex-column align-items-md-start align-items-center">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <h4 class="mb-0 text-nowrap">商品分類</h4>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block text-muted text-nowrap link-primary" @click.prevent="category = ''">
                        全部
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted text-nowrap link-primary" @click.prevent="category = '盒玩'">
                        盒玩
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted text-nowrap link-primary" @click.prevent="category = '扭蛋'">
                        扭蛋
                      </a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted text-nowrap link-primary" @click.prevent="category = '模型'">
                        模型
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <LoadingView v-model:active="isLoading" />
        </div>
        <!-- product list -->
        <div class="col-md-8">
          <div class="row" v-if="this.category == ''">
            <div class=" col-md-6 mb-3" v-for="product in products" :key="product.id">
              <div class="card mb-2 position-relative position-relative">
                <router-link :to="`/product/${product.id}`">
                  <img
                    :src="product.imageUrl"
                    class="card-img-top rounded-top"
                    alt="productImage"
                    style="height: 150px;object-fit: cover;object-position: top center;"
                  >
                </router-link>
                <div class="card-body pb-2 d-flex flex-column justify-content-md-between" style="height: 140px;">
                  <router-link :to="`/product/${product.id}`">
                    <h4 class="mt-3 fs-5">{{ product.title }}</h4>
                  </router-link>
                  <div class="card-text d-flex justify-content-between"
                  >
                    <p>
                      NT${{ product.price.toLocaleString() }}
                      <span class="text-muted ">
                        <del>NT${{ product.origin_price.toLocaleString() }}</del>
                      </span>
                    </p>
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-md-sm text-nowrap align-self-end mt-4"
                      @click="addToCart(product.id)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-else>
            <div class=" col-md-6 mb-4" v-for="product in filteredProducts" :key="product.id">
              <div class="card mb-2 position-relative position-relative">
                <router-link :to="`/product/${product.id}`">
                  <img
                    :src="product.imageUrl"
                    class="card-img-top rounded-0"
                    alt="productImage"
                    style="max-height: 150px;object-fit: cover;object-position: top center;"
                  >
                </router-link>
                <div class="card-body pb-2 d-flex flex-column justify-content-between" style="height: 160px;">
                  <router-link :to="`/product/${product.id}`"><h4 class="mt-3 fs-5">{{ product.title }}</h4></router-link>
                  <p class="card-text mb-0">
                    NT${{ product.price }}
                    <span class="text-muted">
                      <del>NT${{ product.origin_price }}</del>
                    </span>
                  </p>
                  <button
                  type="button"
                  class="btn btn-outline-primary btn-sm text-nowrap align-self-end"
                  @click="addToCart(product.id)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination -->
          <PaginationView :pages="page" @emit-page="getProducts" class="d-flex justify-content-center" />
        </div>
      </div>
    </div>
</template>

<script>
import PaginationView from '../../components/PaginationView.vue'
import Swal from 'sweetalert2'
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      page: {},
      isLoading: false,
      category: ''
    }
  },
  computed: {
    filteredProducts () {
      return this.products.filter(product => product.category === this.category)
    }
  },
  components: {
    PaginationView
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/products/?page=${page}`)
        .then(res => {
          this.isLoading = false
          this.products = res.data.products
          this.page = res.data.pagination
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
          Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000
          }).fire({
            icon: 'success',
            title: res.data.message
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
