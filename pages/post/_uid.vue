<template>
  <article class="pt-4 pb-12">
    <header class="prose sm:prose-sm xl:prose-xl w-full mx-auto max-w-5xl px-4 mb-6 lg:my-12">
      <time
        class="text-sm font-bold text-gray-600 uppercase lg:text-md"
        :datetime="post.first_publication_date"
      >
        {{ publishedAt }}
      </time>

      <h1 class="my-3 lg:my-4">
        {{ $prismic.asText(post.data.title) }}
      </h1>
    </header>

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
    },

    computed: {
      publishedAt () {
        return (new Date(this.post.first_publication_date)).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          timeZone: 'MST',
          weekday: 'long',
          year: 'numeric'
        })
      }
    }
  }
</script>
