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

    <ul
      v-if="posts.results.length > 0"
      class="max-w-7xl mx-auto py-12 px-4 space-y-12"
    >
      <li
        v-for="post in posts.results"
        :key="post.id"
      >
        <list-post-item :post="post" />
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
    }
  }
</script>
