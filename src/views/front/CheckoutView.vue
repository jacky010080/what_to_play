<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">訂單確認</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <LoadingView v-model:active="isLoading" class="mb-3" />
        <div class="border p-4 mb-4">
          <div class="d-flex mt-2" v-for="item in cart.carts" :key="item.id">
            <img
              :src="item.product.imageUrl"
              alt="productImage"
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            >
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                <p class="mb-0 text-end">NT${{ item.total.toLocaleString() }}</p>
              </div>
              <p class="mb-0 fw-bold">x{{ item.qty }}</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                <td class="border-0 px-0 pt-4 text-end">NT${{ cart.total }}</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">Total</p>
            <p class="mb-0 h4 fw-bold text-end">NT${{ cart.total }}</p>
          </div>
        </div>
      </div>
      <!-- 訂單驗證 -->
      <div class="col-md-6">
        <FormView ref="form" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <FieldView
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <FieldView
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            />
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <FieldView
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="form.user.tel"
            />
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <FieldView
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            />
            <ErrorMessage name="地址" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            />
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-primary text-nowrap">送出訂單</button>
          </div>
        </FormView>
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
      isLoading: false,
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
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/cart`)
        .then(res => {
          this.isLoading = false
          this.cart = res.data.data
          this.cart.total = this.cart.total.toLocaleString()
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
    createOrder () {
      const data = this.form
      this.isLoading = true
      this.$http.post(`${VITE_API}/v2/api/${VITE_APIPATH}/order`, { data })
        .then(res => {
          this.isLoading = false
          this.$refs.form.resetForm()
          this.form.message = ''
          this.getCart()
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            confirmButtonText: 'OK'
          })
          this.$router.push('/')
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
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要填寫正確的電話格式'
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
