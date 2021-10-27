import type { PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'ghost'].includes(type)
}

function sizeValidator(size: string): boolean {
  return ['mini', 'small', 'normal', 'large'].includes(size)
}

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'|'ghost'>,
    default: 'default',
    validator: typeValidator,
  },
  size: {
    type: String as PropType<'normal' | 'mini' | 'small' | 'large'>,
    default: 'normal',
    validator: sizeValidator,
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  block: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: true
  }
}