import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faReddit } from '@fortawesome/free-brands-svg-icons/faReddit'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons/faShareAlt'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

config.autoAddCss = false

library.add(faArrowLeft)
library.add(faFacebook)
library.add(faReddit)
library.add(faShareAlt)
library.add(faTwitter)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
