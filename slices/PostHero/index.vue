<template>
  <section class="w-full my-6">
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
      class="hidden md:block"
      loading="lazy"
    />
  </section>
</template>

<script>
  export default {
    name: 'PostHero',

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
      }
    }
  }
</script>
