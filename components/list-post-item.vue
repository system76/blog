<template>
  <div class="group w-full grid gap-6 lg:grid-cols-2 items-center">
    <nuxt-link :to="$prismic.linkResolver(post)">
      <nuxt-picture
        :src="post.data.image.url"
        :alt="post.data.image.alt"
        :copyright="post.data.image.copyright"
        class="block w-full aspect-w-2 aspect-h-1 object-scale-down object-cover"
        sizes="md:100vw lg:50vw xl:33vw"
        width="1000"
        height="500"
        loading="lazy"
        provider="prismic"
      />
    </nuxt-link>

    <div>
      <div
        v-if="post.tags.length > 0"
        class="-mx-3 mb-3"
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

      <h3 class="text-sm font-bold text-gray-500 uppercase mb-1">
        <time :datetime="post.first_publication_date">
          {{ publishedAt(post.first_publication_date) }}
        </time>
      </h3>

      <h1 class="sys-article-h2 mb-2 md:sys-article-h3 md:mb-4">
        <nuxt-link :to="$prismic.linkResolver(post)">
          {{ $prismic.asText(post.data.title) }}
        </nuxt-link>
      </h1>

      <p class="line-clamp-4">
        {{ $prismic.asText(post.data.description) }}
      </p>
    </div>
  </div>
</template>

<script>
  import { normalizeURL } from 'ufo'

  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },

    methods: {
      normalizeURL,

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
  picture >>> img {
    border-radius: 0.5rem;
  }
</style>
