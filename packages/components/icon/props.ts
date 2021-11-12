import '../../../.storybook/base/iconBuild'
import type { PropType } from 'vue'

export const props = {
  name: {
    type: String
  },
  size: {
    type: String as PropType<'extra-small' | 'small' | 'default' | 'large' | 'extra-large'>,
    default: 'default'
  },
  spin: {
    type: Boolean
  },
  color: {
    type: String
  }
}