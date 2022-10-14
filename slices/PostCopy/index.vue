<template>
  <prismic-rich-text
    :field="slice.primary.text"
    :html-serializer="htmlSerializer"
    class="px-4 mx-auto max-w-[65ch] prose sm:prose-sm xl:prose-xl"
  />
</template>

<script>
  export default {
    name: 'PostCopy',

    props: {
      slice: {
        type: Object,
        required: true,
        default: () => ({})
      }
    },

    methods: {
      htmlSerializer (type, element, content, children) {
        if (type === 'hyperlink') {
          if (element.data.type === 'post') {
            return null
          }
          if (!element.data.url.includes('https://href.li/?')) {
            const target = element.data.target
              ? `target="${element.data.target}" rel="noopener"`
              : ''
            return `<a ${target} href="https://href.li/?${element.data.url}">${children}</a>`
          }
        }

        if (type === 'embed' && element.oembed.provider_name === 'YouTube') {
          const ratio = (element.oembed.height / element.oembed.width).toFixed(3)
          const [, vid] = element.oembed.embed_url.split('?v=')

          return `
          <div
            data-oembed="${element.oembed.embed_url}"
            data-oembed-type="video"
            data-oembed-provider="YouTube"
            style="--aspect-ratio:${ratio};"
          >
            <object class="videoWrapper">
              <iframe
                src="https://www.youtube.com/embed/${vid}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </object>
          </div>
        `
        }

        return null
      }
    }
  }
</script>

<style scoped>
  >>> .videoWrapper {
    position: relative;
    padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
    height: 0;
  }

  >>> .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
