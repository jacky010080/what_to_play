<template>
  <div class="container mt-5 pt-5">
    <div class="row justify-content-center">
      <form id="form" class="form-signin col-8 d-flex flex-column mt-5 mb-5" @submit.prevent="login">
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
          <button class="btn btn-lg btn-primary align-self-center w-25 mt-3 mb-5" type="submit">
            登入
          </button>
        </form>
    </div>
  </div>
</template>

<script>
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
          alert(res.data.message)
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  }
}
</script>
