import Vcheckbox from '@/components/UI/Vcheckbox.vue'
import Vselect from '@/components/UI/Vselect.vue'
import VlazyImage from '@/components/UI/VlazyImage.vue'
import VrangeSlider from '@/components/UI/VrangeSlider.vue'
import VmodalWindow from '@/components/UI/VmodalWindow.vue'

import Vinput from '@/components/UI/Vinput.vue'
import VsearchInput from '@/components/UI/VsearchInput.vue'
import VinputSubmit from '@/components/UI/VinputSubmit.vue'
import VpasswordInput from '@/components/UI/VpasswordInput.vue'

import VlikeButton from '@/components/UI/buttons/VlikeButton.vue'
import VpriceButton from '@/components/UI/buttons/VpriceButton.vue'

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
