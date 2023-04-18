<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 my-5">
        <div class="row justify-content-center mx-1">
          <div class="card col-md-12 px-0 my-2" v-for="article in articles" :key="article.id">
            <router-link :to="`/article/${article.id}`">
              <img
                :src="article.image"
                class="card-img-top rounded-top"
                alt="articleImage"
                style="max-height: 300px;object-fit: cover;object-position: top center;"
              >
            </router-link>
            <div class="card-body mt-3 ms-2">
              <h4 class="card-title mb-0">
                <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
              </h4>
              <p class="text-muted">分類：
                <span v-for="label in article.tag" :key="label" class="me-2">{{ label }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_APIPATH } = import.meta.env

export default {
  data () {
    return {
      articles: {}
    }
  },
  methods: {
    getArt () {
      this.$http.get(`${VITE_API}/v2/api/${VITE_APIPATH}/articles`)
        .then(res => {
          this.articles = res.data.articles
        })
    }
  },
  mounted () {
    this.getArt()
  }
}
</script>
