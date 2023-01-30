import Vcheckbox from './Vcheckbox.vue'
import Vselect from './Vselect.vue'
import VsearchInput from './VsearchInput.vue'
import VlazyImage from './VlazyImage.vue'
import VrangeSlider from './VrangeSlider.vue'
import VmodalWindow from './VmodalWindow.vue'

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
    name: 'v-search-input',
    component: VsearchInput
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
