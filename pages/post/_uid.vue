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
      <header class="w-full mx-auto text-base max-w-[65ch] px-4 mt-6 mb-10 sm:text-lg lg:mt-8 lg:mb-16 xl:text-xl">
        <div class="-mx-3 my-2 lg:my-3">
          <nuxt-link
            v-for="tag in post.tags"
            :key="tag"
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500"
            :to="`/tags/${encodeURIComponent(tag)}`"
          >
            {{ tag }}
          </nuxt-link>
        </div>

        <time
          class="text-sm font-bold text-gray-600 uppercase lg:text-md"
          :datetime="datePublished"
        >
          {{ publishedAt }}
        </time>

        <h1 class="sys-article-h1 my-3 lg:my-4">
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

    async asyncData ({ $prismic, error, redirect, params, from }) {
      const post = await $prismic.api.getByUID('post', params.uid)

      if (post) {
        return { post }
      } else {
        if (from) {
          if ('id' in from.params) {
            return redirect(`https://www.tumblr.com/system76/${from.params.id}/${from.params.uid}`)
          }
        }
        error({ statusCode: 404, message: 'Blog post not found' })
      }
    },

    head () {
      const seoImage = (this.post.data.seoSocial[0] != null)
        ? this.post.data.seoSocial[0].image
        : null

      return {
        title: this.post.data.seoTitle,

        meta: [
          { hid: 'description', name: 'description', content: this.post.data.seoDescription },

          { hid: 'og:site_name', property: 'og:site_name', content: 'System76 Blog' },
          { hid: 'og:title', property: 'og:title', content: this.post.data.seoTitle },
          { hid: 'og:description', property: 'og:description', content: this.post.data.seoDescription },
          { hid: 'og:url', property: 'og:url', content: `${process.env.HOST}/post/${this.post.uid}` },

          { hid: 'twitter:title', name: 'twitter:title', content: this.post.data.seoTitle },
          { hid: 'twitter:description', name: 'twitter:description', content: this.post.data.seoDescription },
          { hid: 'twitter:site', name: 'twitter:site', content: '@system76' },

          ...(seoImage)
            ? [
              { hid: 'og:image', property: 'og:image', content: seoImage.url },
              { hid: 'og:image:alt', property: 'og:image:alt', content: seoImage.alt },
              { hid: 'og:image:width', property: 'og:image:width', content: seoImage.dimensions.width },
              { hid: 'og:image:height', property: 'og:image:height', content: seoImage.dimensions.height },

              { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
              { hid: 'twitter:image:src', name: 'twitter:image:src', content: seoImage.url }
            ]
            : []
        ]
      }
    },

    computed: {
      datePublished () {
        if ('date' in this.post.data) {
          if (this.post.data.date) {
            return this.post.data.date
          }
        }
        return this.post.first_publication_date
      },

      publishedAt () {
        return (new Date(this.datePublished)).toLocaleDateString('en-US', {
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
