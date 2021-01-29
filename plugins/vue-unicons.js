import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'

import {
    uniFacebookF, uniTwitterAlt, uniLinkedinAlt, uniGithubAlt
} from 'vue-unicons/src/icons'

import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([
    uniFacebookF, uniTwitterAlt, uniLinkedinAlt, uniGithubAlt
])

Vue.use(Unicon)