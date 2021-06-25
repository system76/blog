<template>
  <main>
    <nuxt-picture
      src="/images/hero.jpg"
      class="w-full"
    />

    <nuxt-link
      v-if="firstPost"
      :to="$prismic.linkResolver(firstPost)"
      class="grid grid-cols-1 gap-6 items-center max-w-6xl mx-auto py-4 px-4 md:grid md:grid-cols-2 md:gap-16 md:my-8 xl:grid-cols-3"
    >
      <div class="w-full xl:col-span-2">
        <div class="aspect-w-1 aspect-h-1 lg:aspect-w-2">
          <nuxt-img
            :src="firstPost.data.image.small.url"
            :alt="firstPost.data.image.small.alt"
            :copyright="firstPost.data.image.small.copyright"
            class="w-full object-scale-down rounded-lg object-cover lg:hidden"
            provider="prismic"
          />

          <nuxt-img
            v-if="firstPost.data.image"
            :src="firstPost.data.image.url"
            :alt="firstPost.data.image.alt"
            :copyright="firstPost.data.image.copyright"
            class="hidden w-full object-scale-down rounded-lg object-cover lg:block"
            provider="prismic"
          />
        </div>
      </div>

      <div class="md:my-4">
        <h3 class="text-sm font-bold text-gray-500 uppercase mb-4 lg:text-md">
          <time>{{ publishedAt(firstPost.first_publication_date) }}</time>
        </h3>

        <h1 class="font-serif font-bold text-3xl mb-2 lg:mb-6 xl:mb-8">
          {{ $prismic.asText(firstPost.data.title) }}
        </h1>

        <p class="line-clamp-3 md:line-clamp-6 lg:line-clamp-3 lg:text-lg xl:line-clamp-6">
          {{ $prismic.asText(firstPost.data.description) }}
        </p>
      </div>
    </nuxt-link>

    <ul
      v-if="posts.results.length > 1"
      class="max-w-6xl mx-auto py-4 px-4 grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="post in otherPosts"
        :key="post.id"
      >
        <nuxt-link
          class="block w-full mb-6"
          :to="$prismic.linkResolver(post)"
        >
          <nuxt-img
            :src="post.data.image.small.url"
            :alt="post.data.image.small.alt"
            :copyright="post.data.image.small.copyright"
            class="w-full object-scale-down object-cover rounded-lg"
            sizes="sm:100vw md:50vw lg:33vw"
            loading="lazy"
          />

          <h3 class="text-sm font-bold text-gray-500 uppercase mb-4">
            <time>{{ publishedAt(post.first_publication_date) }}</time>
          </h3>

          <h1 class="font-serif font-bold text-3xl mb-2 md:text-2xl">
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
    asyncData: async ({ $prismic }) => ({
      posts: await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )
    }),

    computed: {
      firstPost () {
        if (this.posts.results.length > 0) {
          return this.posts.results[0]
        } else {
          return null
        }
      },

      otherPosts () {
        if (this.posts.results.length > 1) {
          const n = [...this.posts.results]
          n.shift()
          return n
        } else {
          return []
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
