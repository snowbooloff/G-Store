import Vcheckbox from './Vcheckbox.vue'
import Vselect from './Vselect.vue'
import VlazyImage from './VlazyImage.vue'
import VrangeSlider from './VrangeSlider.vue'
import VmodalWindow from './VmodalWindow.vue'

import Vinput from './Vinput.vue'
import VsearchInput from './VsearchInput.vue'
import VinputSubmit from './VinputSubmit.vue'
import VpasswordInput from './VpasswordInput.vue'

import VlikeButton from './buttons/VlikeButton.vue'
import VpriceButton from './buttons/VpriceButton.vue'

export default [
  {
    name: 'v-checkbox',
    component: Vcheckbox
  },
  {
    name: 'v-select',
    component: Vselect
  },
  {
    name: 'v-input',
    component: Vinput
  },
  {
    name: 'v-search-input',
    component: VsearchInput
  },
  {
    name: 'v-password-input',
    component: VpasswordInput
  },
  {
    name: 'v-input-submit',
    component: VinputSubmit
  },
  {
    name: 'v-lazy-image',
    component: VlazyImage
  },
  {
    name: 'v-range-slider',
    component: VrangeSlider
  },
  {
    name: 'v-modal-window',
    component: VmodalWindow
  },
  {
    name: 'v-like-button',
    component: VlikeButton
  },
  {
    name: 'v-price-button',
    component: VpriceButton
  }
]
