<template>
  <main>
    <div>
      <nuxt-picture
        src="/images/hero.jpg"
        class="w-full md:hidden"
        width="800"
        height="513"
        alt="The Blog of System76"
      />
      <nuxt-picture
        src="/images/hero.jpg"
        class="hidden w-full md:block"
        alt="The Blog of System76"
      />
    </div>

    <nuxt-link
      v-if="firstPost"
      :to="$prismic.linkResolver(firstPost)"
      class="blog-post grid grid-cols-1 gap-6 items-center max-w-7xl mx-auto py-4 px-4 md:grid md:grid-cols-2 md:gap-8 md:mt-8 xl:grid-cols-3"
    >
      <div class="w-full xl:col-span-2">
        <div class="aspect-w-1 aspect-h-1 lg:aspect-w-2">
          <nuxt-picture
            :src="firstPost.data.image.small.url"
            :alt="firstPost.data.image.small.alt"
            :copyright="firstPost.data.image.small.copyright"
            class="w-full object-scale-down object-cover lg:hidden"
            provider="prismic"
          />

          <nuxt-picture
            v-if="firstPost.data.image"
            :src="firstPost.data.image.url"
            :alt="firstPost.data.image.alt"
            :copyright="firstPost.data.image.copyright"
            class="hidden w-full object-scale-down object-cover lg:block"
            provider="prismic"
          />
        </div>
      </div>

      <div class="md:my-4">
        <div
          v-if="firstPost.tags.length > 0"
          class="-mx-3 mb-6 lg:my-3"
        >
          <nuxt-link
            v-for="tag in firstPost.tags"
            :key="tag"
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500"
            :to="`/tags/${encodeURIComponent(tag)}`"
          >
            {{ tag }}
          </nuxt-link>
        </div>

        <h3 class="text-sm font-bold text-gray-500 uppercase mb-1 lg:text-md">
          <time>{{ publishedAt(firstPost.first_publication_date) }}</time>
        </h3>

        <h1 class="sys-article-h2 mb-2 md:mb-4">
          {{ $prismic.asText(firstPost.data.title) }}
        </h1>

        <p class="line-clamp-3 md:line-clamp-6 lg:line-clamp-3 lg:text-lg xl:line-clamp-6">
          {{ $prismic.asText(firstPost.data.description) }}
        </p>
      </div>
    </nuxt-link>

    <ul
      v-if="posts.results.length > 1"
      class="max-w-7xl mx-auto py-4 px-4 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="post in otherPosts"
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

          <div
            v-if="post.tags.length > 0"
            class="-mx-3 my-3 lg:my-3"
          >
            <nuxt-link
              v-for="tag in post.tags"
              :key="tag"
              class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500"
              :to="`/tags/${encodeURIComponent(tag)}`"
            >
              {{ tag }}
            </nuxt-link>
          </div>

          <h3
            :class="{
              'text-sm font-bold text-gray-500 uppercase my-1': true,
              'mt-6': post.tags.length === 0
            }"
          >
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

<style scoped>
  .blog-post picture >>> img {
    border-radius: 0.5rem;
  }
</style>
