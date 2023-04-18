<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav nav">
              <router-link to="/admin/products" class="nav-item nav-link me-4">產品列表</router-link>
              <router-link to="/admin/orders" class="nav-item nav-link me-4">訂單列表</router-link>
              <router-link to="/" class="nav-item nav-link me-4">回到前台</router-link>
              <button type="button" class="btn btn-warning" @click.prevent="logout">登出</button>
            </div>
          </div>
        </nav>
        <hr>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_API } = import.meta.env

export default {
  methods: {
    logout () {
      document.cookie = `hexToken=; expires=${new Date()};`
      this.$router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      this.$http.post(`${VITE_API}api/user/check`)
        .then((res) => {
          if (!res.data.success) {
            Swal.fire({
              icon: 'error',
              title: '登入失敗',
              text: res.data.message,
              confirmButtonText: 'OK'
            })
            this.$router.push('/login')
          } else {
            Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500
            }).fire({
              icon: 'success',
              title: '登入成功',
              text: res.data.message
            })
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response.status}`,
            text: err.response.data.message,
            confirmButtonText: 'OK'
          })
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
