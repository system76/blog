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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"post_copy","items":[],"primary":{"text":[{"type":"heading2","text":"IF IT’S FULLY CONFIGURABLE…WHAT CAN I CONFIGURE?","spans":[]},{"type":"heading3","text":"Your Layout","spans":[]},{"type":"paragraph","text":"Bring commonly used keys right beneath your fingertips. Remap your layout in the System76 Keyboard Configurator application, and then move your keycaps to match. Launch uses only three key sizes (1U, 1.5U, and 2U) to expand your options!","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
