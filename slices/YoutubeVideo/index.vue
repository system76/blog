<template>
  <figure
    v-if="embedUrl"
    class="w-full my-6 md:my-12 mx-auto max-w-4xl px-4"
  >
    <div class="embed-responsive">
      <iframe
        :src="embedUrl"
        :title="slice.primary.title || 'Embedded video'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      />
    </div>

    <figcaption
      v-if="slice.primary.title"
      class="mt-1 text-sm text-gray-600"
    >
      {{ slice.primary.title }}
    </figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'YoutubeVideo',

    props: {
      slice: {
        type: Object,
        required: true,
        default: () => ({})
      }
    },

    computed: {
      // Extract the YouTube video id from the supported URL formats:
      //   https://www.youtube.com/watch?v=ID
      //   https://youtu.be/ID
      //   https://www.youtube.com/embed/ID
      //   https://www.youtube.com/shorts/ID
      videoId () {
        const url = this.slice.primary.url

        if (!url) {
          return null
        }

        const match = url.match(
          /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
        )

        return match ? match[1] : null
      },

      embedUrl () {
        return this.videoId
          ? `https://www.youtube.com/embed/${this.videoId}`
          : null
      }
    }
  }
</script>

<style scoped>
  /* Responsive 16:9 wrapper so the iframe scales to the container */
  .embed-responsive {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }

  .embed-responsive iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
</style>
