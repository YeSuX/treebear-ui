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
  },
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
  prefix_icon: {
    type: String,
  },
  suffix_icon: {
    type: String,
  },
  addonBefore: {
    type: String
  },
  addonAfter: {
    type: String
  },
  showClear: {
    type: Boolean,
    default: false
  },
  password: {
    type: Boolean,
    default: false
  },
  validateStatus: {
    type: String,
    default: 'default'
  }
}