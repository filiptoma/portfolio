import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'

import {
    uniTwitterAltMonochrome, uniGithubAltMonochrome, uniLinkedinAltMonochrome, uniFacebookFMonochrome
} from 'vue-unicons/src/icons'

import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([
    uniTwitterAltMonochrome, uniGithubAltMonochrome, uniLinkedinAltMonochrome, uniFacebookFMonochrome
])

Vue.use(Unicon)