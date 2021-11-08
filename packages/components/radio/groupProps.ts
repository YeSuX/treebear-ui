import type { PropType } from 'vue'

const directionValidator = (direction: string): boolean => {
  return ['vertical', 'horizontal'].includes(direction)
}

export const props = {
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
    validator: directionValidator
  },
  value: {
    type: [String, Number],
    default: ''
  }
}