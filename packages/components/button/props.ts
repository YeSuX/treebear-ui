import type { PropType } from 'vue'

const typeValidator = (type) => {
  return ['primary', 'secondary', 'tertiary', 'warning', 'danger'].includes(type)
}
const themeValidator = (theme) => {
  return ['light', 'solid', 'borderless'].includes(theme)
}

const sizeValidator = (size) => {
  return ['large', 'default', 'small'].includes(size)
}

export const props = {
  type: {
    type: String as PropType<'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger'>,
    default: 'primary',
    validator: typeValidator
  },
  theme: {
    type: String as PropType<'light' | 'solid' | 'borderless'>,
    default: 'light',
    validator: themeValidator
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default',
    validator: sizeValidator
  },
  block: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  loading: {
    type: Boolean
  }
}