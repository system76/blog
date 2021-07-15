import MyComponent from './../../../../slices/PostHero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PostHero'
}


export const _DefaultSlice = () => ({
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"post_hero","items":[],"primary":{"image":{"dimensions":{"width":3840,"height":960},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=3840&h=960&fit=crop","small":{"dimensions":{"width":768,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=768&h=512&fit=crop"}}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
