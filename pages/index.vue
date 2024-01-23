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
        width="2048"
        height="513"
        alt="The Blog of System76"
      />
    </div>

    <ul
      v-if="posts.results.length > 0"
      class="max-w-7xl mx-auto py-12 px-4 space-y-12"
    >
      <li
        v-for="post in posts.results"
        :key="post.id"
      >
        <list-post-item :post="post" />
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    asyncData: async ({ $prismic }) => ({
      posts: await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]', pageSize: 100 }
      )
    })
  }
</script>
