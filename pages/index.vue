<template>
  <main>
    <nuxt-picture
      src="/images/hero.jpg"
      class="w-full"
    />

    <div
      v-if="firstPost"
      class="max-w-7xl mx-auto py-4 px-4 md:flex md:py-16"
    >
      <nuxt-link
        class="block w-full mb-6 md:mb-0 md:flex-none md:w-1/3 xl:w-1/2"
        :to="$prismic.linkResolver(firstPost)"
      >
        <nuxt-img
          v-if="firstPost.data.image"
          :src="firstPost.data.image.url"
          :alt="firstPost.data.image.alt"
          :copyright="firstPost.data.image.copyright"
          class="w-full object-scale-down rounded-lg object-cover"
          sizes="sm:100vw md:50vw lg:33vw"
        />
      </nuxt-link>

      <div class="md:ml-4 md:my-4 lg:ml-6 xl:ml-16">
        <h3 class="text-sm font-bold text-gray-500 uppercase mb-4 lg:text-md xl:text-lg">
          <time>{{ publishedAt(firstPost.first_publication_date) }}</time>
        </h3>

        <h1 class="font-serif font-bold text-3xl mb-2 lg:text-4xl lg:mb-6 xl:text-7xl xl:mb-8">
          <nuxt-link :to="$prismic.linkResolver(firstPost)">
            {{ $prismic.asText(firstPost.data.title) }}
          </nuxt-link>
        </h1>

        <p class="lg:text-lg xl:text-xl">
          <nuxt-link :to="$prismic.linkResolver(firstPost)">
            {{ $prismic.asText(firstPost.data.description) }}
          </nuxt-link>
        </p>
      </div>
    </div>

    <ul
      v-if="posts.results.length > 1"
      class="max-w-7xl mx-auto py-4 px-4 grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 xl:gap-24"
    >
      <li
        v-for="(post, i) in posts.results"
        v-if="(i !== 0)"
        :key="post.id"
      >
        <post-list :post="post" />
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  asyncData: async ({ $prismic }) => ({
    posts: await $prismic.api.query(
      $prismic.predicates.at('document.type', 'post'),
      { orderings : '[my.post.date desc]' }
    )
  }),

  computed: {
    firstPost () {
      if (this.posts.results.length > 0) {
        return this.posts.results[0]
      } else {
        return null
      }
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
