import MyComponent from '../../../../slices/YoutubeVideo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/YoutubeVideo'
}


export const _Default = () => ({
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ","title":"Example YouTube video"},"slice_type":"youtube_video","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
