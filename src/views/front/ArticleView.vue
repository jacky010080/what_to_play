<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div>
          <img :src="article.image" class="d-block w-100 mb-3" alt="articleImage">
        </div>
        <div class="row">
          <div class="col-md-6 text-nowrap mb-4">
            <h3>{{ article.title }}</h3>
            <p>作者：{{ article.author }}</p>
            分類：<span v-for="label in article.tag" :key="label" class="me-2">{{ label }}</span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 fs-5 px-0">
            <p>{{ article.description }}</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 fs-5 px-0">
            <p>{{ article.content }}</p>
          </div>
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
