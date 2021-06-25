# System76 Blog

The blog website is powered by [NuxtJS][1] using [Prismic][2] as a CMS, and
[tailwindcss][3] for styles.

## Adding / Editing Content

All content is edited in [Prismic][2]. When this site builds, it downloads all
of the content and renders it in a beautiful website.

## Adding CMS Components

To make blog posts *pop*, we allow content editors to use custom Vue components
via [Slice Machine][4]. Simply run `npm run slicemachine` to start the Slice
Machine interface. You will also want to start [Storybook][5] via
`npm run storybook` for testing and screenshots.

## Deployments

[Prismic][2] sends webhooks to GitHub actions every time content changes. This
will trigger Nuxt to rebuild the site. This also occurs when code gets pushed
to the `master` branch.

[1]: https://nuxtjs.org/
[2]: https://prismic.io/
[3]: https://tailwindcss.com/
[4]: https://www.slicemachine.dev/
[5]: https://storybook.js.org/
