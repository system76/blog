import MyComponent from '../../../../slices/PostImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PostImage'
}


export const _FullWidth = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"full-width","name":"Full Width","slice_type":"post_image","items":[],"primary":{"image":{"dimensions":{"width":3840,"height":960},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=3840&h=960&fit=crop","small":{"dimensions":{"width":768,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=768&h=512&fit=crop"}},"showAlt":{"content":true}},"id":"_FullWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullWidth.storyName = 'Full Width'

export const _ArticleWidth = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"article-width","name":"Article Width","slice_type":"post_image","items":[],"primary":{"image":{"dimensions":{"width":768,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=768&h=512&fit=crop"}},"id":"_ArticleWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ArticleWidth.storyName = 'Article Width'

export const _FreeWidth = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"free-width","name":"Free Width","slice_type":"post_image","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":800},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=1000&h=800&fit=crop"}},"id":"_FreeWidth"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FreeWidth.storyName = 'Free Width'
