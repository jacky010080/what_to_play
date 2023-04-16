<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-6 text-nowrap my-2">
            <h3>{{ article.title }}</h3>
          </div>
        </div>
        <div>
          <img :src="article.image" class="d-block w-100 mb-5" alt="articleImage">
        </div>
        <div class="fs-4">
          <p>{{ article.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      article: {},
      isLoading: false
    }
  },
  methods: {
    getArticle () {
      const { id } = this.$route.params
      this.isLoading = true
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/article/${id}`)
        .then(res => {
          this.isLoading = false
          this.article = res.data.article
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
    this.getArticle()
  }
}
</script>
