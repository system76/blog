<template>
  <main>
    <header class="bg-blue-500 text-blue-900">
      <div class="max-w-7xl mx-auto py-3 px-4">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <nuxt-link
              to="/"
              class="flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 md:text-lg"
            >
              <font-awesome-icon icon="arrow-left" />
              <span class="sr-only">Homepage</span>
            </nuxt-link>

            <h1 class="my-0 ml-3 font-sans italic text-lg truncate md:text-3xl">
              {{ tag }} Posts
            </h1>
          </div>
        </div>
      </div>
    </header>

    <ul class="max-w-7xl mx-auto py-4 px-4 grid gap-4 md:my-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="post in posts.results"
        :key="post.id"
      >
        <nuxt-link
          class="blog-post block w-full mb-6"
          :to="$prismic.linkResolver(post)"
        >
          <nuxt-picture
            :src="post.data.image.small.url"
            :alt="post.data.image.small.alt"
            :copyright="post.data.image.small.copyright"
            class="w-full object-scale-down object-cover"
            sizes="md:100vw lg:50vw xl:33vw"
            loading="lazy"
            provider="prismic"
          />

          <h3 class="text-sm font-bold text-gray-500 uppercase mt-6 mb-1">
            <time>{{ publishedAt(post.first_publication_date) }}</time>
          </h3>

          <h1 class="sys-article-h2 mb-2 md:sys-article-h3 md:mb-4">
            {{ $prismic.asText(post.data.title) }}
          </h1>

          <p class="line-clamp-4">
            {{ $prismic.asText(post.data.description) }}
          </p>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    async asyncData ({ $prismic, error, params }) {
      const posts = await $prismic.api.query(
        $prismic.predicates.at('document.tags', [params.tag]),
        { orderings: '[my.post.date desc]' }
      )

      if (posts.results_size > 0) {
        return {
          tag: params.tag,
          posts
        }
      } else {
        error({ statusCode: 404, message: 'Tag not found' })
      }
    },

    methods: {
      publishedAt (date) {
        return (new Date(date)).toLocaleDateString('en-US', {
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

<style scoped>
  .blog-post picture >>> img {
    border-radius: 0.5rem;
  }
</style>
