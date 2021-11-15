
const sizeValidator = (size) => {
  return ['large', 'default', 'small'].includes(size)
}

export const props = {
  modelValue: {
    type: String || Number,
    default: ''
  },
  placeholder: {
    type: String
  },
  size: {
    type: String,
    default: 'default',
    validator: sizeValidator
  },
  disabled: {
    type: Boolean,
    default: false
  }
}