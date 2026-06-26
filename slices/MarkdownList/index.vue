<template>
  <div
    class="px-4 mx-auto max-w-[65ch] prose sm:prose-sm xl:prose-xl"
    v-html="html"
  />
</template>

<script>
  import { marked } from 'marked'

  export default {
    name: 'MarkdownList',

    props: {
      slice: {
        type: Object,
        required: true,
        default: () => ({})
      }
    },

    computed: {
      html () {
        const md = this.$prismic.asText(this.slice.primary.body) || ''
        return marked.parse(md)
      }
    }
  }
</script>
