import MyComponent from '../../../../slices/MarkdownList';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MarkdownList'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"body":[{"type":"preformatted","text":"- Fruit\n  - Apple\n    - Gala\n    - Fuji\n  - Banana\n- Vegetables\n  - Carrot\n  - Potato\n\n1. Preheat the oven\n2. Mix the ingredients\n   1. Dry ingredients first\n   2. Then the wet ingredients\n3. Bake for 20 minutes","spans":[]}]},"slice_type":"markdown_list","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
