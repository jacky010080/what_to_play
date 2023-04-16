<template>
  <div class="container mt-6 pt-6">
    <div class="row justify-content-center mt-6">
      <form id="form" class="form-signin col-8 d-flex flex-column mt-6 mb-5" @submit.prevent="login">
          <div class="form-floating mb-4">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              v-model="user.username"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="user.password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary align-self-center mt-3 mb-5 text-nowrap" type="submit">
            登入
          </button>
        </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_API } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_API}/v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response.status}`,
            text: err.response.data.message,
            confirmButtonText: 'OK'
          })
        })
    }
  }
}
</script>
