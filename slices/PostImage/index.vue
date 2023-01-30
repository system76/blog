<template>
  <figure
    :class="{
      'w-full flex flex-col my-6 md:my-12 text-base sm:text-lg xl:text-xl': true,
      'mx-auto max-w-[65ch] px-4': (slice.variation === 'article-width'),
      'items-center': (slice.variation === 'free-width')
    }"
  >
    <template v-if="slice.variation === 'full-width'">
      <nuxt-picture
        :alt="slice.primary.image.small.alt"
        :copyright="slice.primary.image.small.copyright"
        :height="slice.primary.image.small.dimensions.height"
        :provider="provider"
        :src="slice.primary.image.small.url"
        :width="slice.primary.image.small.dimensions.width"
        class="w-full md:hidden"
        loading="lazy"
      />
      <nuxt-picture
        :alt="slice.primary.image.alt"
        :copyright="slice.primary.image.copyright"
        :height="slice.primary.image.dimensions.height"
        :provider="provider"
        :src="slice.primary.image.url"
        :width="slice.primary.image.dimensions.width"
        class="w-full hidden md:block"
        loading="lazy"
      />
    </template>
    <template v-else-if="slice.variation === 'article-width'">
      <nuxt-picture
        :alt="slice.primary.image.alt"
        :copyright="slice.primary.image.copyright"
        :height="slice.primary.image.dimensions.height"
        :provider="provider"
        :src="slice.primary.image.url"
        :width="slice.primary.image.dimensions.width"
        class="w-full"
        loading="lazy"
      />
    </template>
    <template v-else-if="slice.variation === 'free-width'">
      <nuxt-picture
        :alt="slice.primary.image.alt"
        :copyright="slice.primary.image.copyright"
        :height="slice.primary.image.dimensions.height"
        :provider="provider"
        :src="slice.primary.image.url"
        :width="slice.primary.image.dimensions.width"
        class="max-w-full lg:max-w-[80vw]"
        loading="lazy"
      />
    </template>

    <div
      v-if="showAlt"
      :class="{
        'mt-1': true,
        'w-full': (slice.variation !== 'free-width'),
        'mx-auto max-w-[65ch] px-8': (slice.variation !== 'article-width'),
        'px-4': (slice.variation === 'article-width')
      }"
    >
      <figcaption class="text-sm text-gray-600">
        {{ slice.primary.image.alt }}
      </figcaption>
    </div>
  </figure>
</template>

<script>
  export default {
    name: 'PostImage',

    props: {
      slice: {
        type: Object,
        required: true,
        default: () => ({})
      }
    },

    computed: {
      // Used to set the correct @nuxt/image provider when we are running
      // storybook with prismic mocks
      provider () {
        if (process.env.STORYBOOK) {
          return 'static'
        } else {
          return 'prismic'
        }
      },

      showAlt () {
        switch (this.slice.variation) {
        case 'full-width':
          return (this.slice.primary.showAlt && this.slice.primary.image.alt)

        default:
          return this.slice.primary.image.alt
        }
      }
    }
  }
</script>
