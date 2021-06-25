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

    async asyncData ({ $prismic, error, params }) {
      const post = await $prismic.api.getByUID('post', params.uid)

      if (post) {
        return { post }
      } else {
        error({ statusCode: 404, message: 'Blog post not found' })
      }
    }
  }
</script>
