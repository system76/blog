import MyComponent from './../../../../slices/PostCopy';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PostCopy'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"post_copy","items":[],"primary":{"text":[{"type":"paragraph","text":"Duis dolore culpa aliqua occaecat commodo laborum ex laboris id. Eiusmod deserunt ad et do ex ipsum enim ex fugiat eiusmod sint.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
