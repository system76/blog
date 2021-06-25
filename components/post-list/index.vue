<template>
  <div>
    <nuxt-link
      class="block w-full mb-6"
      :to="$prismic.linkResolver(post)"
    >
      <nuxt-img
        v-if="post.data.image"
        :src="post.data.image.url"
        :alt="post.data.image.alt"
        :copyright="post.data.image.copyright"
        class="w-full object-scale-down object-cover rounded-lg"
        sizes="sm:100vw md:50vw lg:33vw"
        loading="lazy"
      />
    </nuxt-link>

    <h3 class="text-sm font-bold text-gray-500 uppercase mb-4">
      <time>{{ publishedAt }}</time>
    </h3>

    <h1 class="font-serif font-bold text-3xl mb-2 md:text-2xl xl:text-3xl">
      <nuxt-link :to="$prismic.linkResolver(post)">
        {{ $prismic.asText(post.data.title) }}
      </nuxt-link>
    </h1>

    <p class="xl:text-lg">
      <nuxt-link :to="$prismic.linkResolver(post)">
        {{ $prismic.asText(post.data.description) }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'PostList',

    props: {
      post: {
        type: Object,
        required: true,
        default: () => ({})
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
