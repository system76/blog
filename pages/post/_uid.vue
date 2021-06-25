<template>
  <article class="w-full max-w-7xl mx-auto py-4 px-4 pb-12">
    <h1 class="font-serif font-bold text-3xl my-6 mx-auto lg:text-5xl lg:my-12 max-w-5xl">
      {{ $prismic.asText(post.data.title) }}
    </h1>

    <slice-zone :slices="post.data.slices" />
  </article>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  },

  head () {
    return {}
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        { hid: 'og:site_name', property: 'og:site_name', content: 'System76 Support' },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'og:url', property: 'og:url', content: `https://support.system76.com/articles/${this.article.slug}` },
        { hid: 'og:image', property: 'og:image', content: `https://support.system76.com${this.article.facebookImage}` },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '600' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.article.title },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
        { hid: 'twitter:site', name: 'twitter:site', content: '@system76' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: `https://support.system76.com${this.article.twitterImage}` }
      ]
    }
  },

  async asyncData ({ $prismic, params }) {
    const post = await $prismic.api.getByUID('post', params.uid)

    if (post) {
      return { post }
    } else {
      error({ statusCode: 404, message: 'Blog post not found' })
    }
  }
}
</script>
