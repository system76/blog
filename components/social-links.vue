<template>
  <section
    id="social"
    class="max-w-5xl px-4 mx-auto"
  >
    <h1 class="font-sans text-gray-800 text-center font-extralight mb-6 text-4xl xl:mb-10 xl:text-5xl">
      Like what you see?
    </h1>

    <div class="grid grid-flow-row gap-16 auto-cols-fr md:grid-flow-col">
      <div id="social-share">
        <h2 class="font-sans text-gray-600 text-center font-bold text-xl xl:text-2xl mb-6">
          Share on Social Media
        </h2>

        <ul class="grid grid-flow-col auto-cols-min gap-8 justify-center text-4xl">
          <li>
            <a
              :href="twitterShare"
              class="text-[#1DA1F2]"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title="Twitter"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>

          <li>
            <a
              :href="redditShare"
              class="text-[#ff4500]"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title="Reddit"
            >
              <font-awesome-icon :icon="['fab', 'reddit']" />
            </a>
          </li>

          <li>
            <a
              :href="facebookShare"
              class="text-[#4267B2]"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title="Facebook"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>

          <li>
            <a
              :href="fullUrl"
              class="text-gray-800"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title="Permalink"
              @click="nativeShare"
            >
              <font-awesome-icon icon="share-alt" />
            </a>
          </li>
        </ul>
      </div>

      <div
        v-if="anyDiscussionLink"
        id="social-discussion"
      >
        <h2 class="font-sans text-gray-600 text-center font-bold text-xl xl:text-2xl mb-6">
          Join the Discussion
        </h2>

        <ul class="grid grid-flow-col auto-cols-min gap-8 justify-center text-4xl">
          <li v-if="discussionLink('twitter')">
            <a
              :href="discussionLink('twitter')"
              class="text-[#1DA1F2]"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title="Twitter"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </li>

          <li v-if="discussionLink('reddit')">
            <a
              :href="discussionLink('reddit')"
              class="text-[#ff4500]"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title="Reddit"
            >
              <font-awesome-icon :icon="['fab', 'reddit']" />
            </a>
          </li>

          <li v-if="discussionLink('facebook')">
            <a
              :href="discussionLink('facebook')"
              class="text-[#4267B2]"
              rel="noreferrer nofollow noopener"
              target="_blank"
              title="Facebook"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  const FULL_HOST = 'https://blog.origin76.com'

  export default {
    props: {
      post: {
        type: Object,
        required: true,
        default: () => ({})
      }
    },

    computed: {
      anyDiscussionLink () {
        return this.discussionLink('twitter') || this.discussionLink('reddit') || this.discussionLink('facebook')
      },

      facebookShare () {
        return 'https://www.facebook.com/sharer/sharer.php?' + this.createQuery({
          u: this.fullUrl
        })
      },

      redditShare () {
        return 'http://www.reddit.com/submit?' + this.createQuery({
          title: this.post.data.socialText,
          url: this.fullUrl
        })
      },

      twitterShare () {
        return 'https://twitter.com/intent/tweet?' + this.createQuery({
          text: this.post.data.socialText,
          url: this.fullUrl,
          via: 'system76',
          original_referer: this.fullUrl
        })
      },

      fullUrl () {
        return `${FULL_HOST}/post/${this.post.uid}`
      }
    },

    methods: {
      createQuery (query) {
        return Object.entries(query)
          .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
          .join('&')
      },

      discussionLink (service) {
        const d = (this.post.data.socialLinks || []).find((d) => {
          return (d.link && d.link.provider_name.toLowerCase() === service)
        })

        return (d != null) ? d.link.url || d.link.embed_url : null
      },

      nativeShare (event) {
        if (navigator.share) {
          event.preventDefault()

          navigator.share({
            title: this.post.data.socialText,
            url: this.fullUrl
          })
        }
      }
    }
  }
</script>
