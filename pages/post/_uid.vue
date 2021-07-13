<template>
  <div>
    <nav class="bg-blue-500 text-blue-900">
      <div class="max-w-7xl mx-auto py-3 px-4">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <nuxt-link
              to="/"
              class="flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 md:text-lg"
            >
              <font-awesome-icon icon="arrow-left" />
              <span class="sr-only">All Blog Posts</span>
            </nuxt-link>

            <h1 class="my-0 ml-3 font-sans italic text-lg truncate md:text-3xl">
              Blog Posts
            </h1>
          </div>
        </div>
      </div>
    </nav>

    <article class="pt-4">
      <header class="prose sm:prose-sm xl:prose-xl w-full mx-auto max-w-5xl px-4 my-6 lg:my-12">
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

    <hr class="bg-gray-100 max-w-6xl mx-auto my-8 lg:my-12">

    <social-links :post="post" class="mb-16" />
  </div>
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
