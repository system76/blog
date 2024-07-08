import fs from 'fs'
import path from 'path'
import * as prismic from '@prismicio/client'

import { apiEndpoint } from '../sm.json'

const createFeed = async (feed, HOST) => {
  try {
    const client = prismic.client(apiEndpoint)
    const { results: posts } = await client.query([
      prismic.predicates.at('document.type', 'post')
    ], {
      orderings: '[my.post.date desc]',
      pageSize: 10
    })

    feed.options = {
      title: 'System76 Blog RSS Feed',
      link: `${HOST}/rss.xml`,
      description: 'System76 Blog RSS Feed',
      generator: '@nuxtjs/feed',
      id: `${HOST}`,
      language: 'en',
      image: `${HOST}/images/hero.jpg`,
      copyright: `All rights reserved ${new Date().getFullYear()}, System76`,
      updated: new Date(posts[0].last_publication_date)
    }

    posts.forEach((post) => {
      feed.addItem({
        title: post.data.seoTitle,
        id: post.id,
        guid: `${HOST}/post/${post.uid}`,
        link: `${HOST}/post/${post.uid}`,
        description: post.data.seoDescription,
        category: post.tags.join(', '),
        published: new Date(post.last_publication_date),
        image: {
          url: post.data.image.url.split('?')[0]
        },
        date: new Date(post.last_publication_date),
        content:
          post.data.seoDescription + ` <a href="${HOST}/post/${post.uid}">${HOST}/post/${post.uid}</a>`
      })
    })
  } catch (error) {
    console.log('ERROR creating rss.xml\r\nERROR:', error) // eslint-disable-line no-console
    process.exit(1)
  }
}

const updateRssFile = () => {
  const rssFeedPath = path.resolve(__dirname, '..', 'dist', 'rss.xml')
  if (fs.existsSync(rssFeedPath)) {
    const rssFeed = fs.readFileSync(rssFeedPath, 'utf8')
    const rssFeedReplaced = rssFeed.replace(
      '?>',
      '?>\r\n<?xml-stylesheet href="/rss.xsl" type="text/xsl"?>'
    )
    fs.writeFileSync(rssFeedPath, rssFeedReplaced)
  }
}

module.exports = {
  createFeed,
  updateRssFile
}
