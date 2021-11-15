import { PropType } from "@vue/runtime-core";

// const sizeValidator = (size) => {
//   return ['small' || 'middle' || 'large'].includes(size);
// }

export const props = {
  size: {
    type: String as PropType<'small' | 'middle' | 'large'>,
    default: 'middle',
    // validator: sizeValidator
  },
  tip: {
    type: String
  },
  indicator: {
    type: String,
    default: 'spin'
  },
  delay: {
    type: Number,
    default: 0
  },
  color: {
    type: String
  }
}