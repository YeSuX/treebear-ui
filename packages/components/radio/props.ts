import type { PropType } from 'vue'

const modeValidator = (mode: string): boolean => {
    return ['normal', 'advanced'].includes(mode)
}

export const props = {
    modelValue: {
        type: Boolean,
        default: false
    },
    checkedValue: {
        type: Boolean,
        default: true,
    },
    uncheckedValue: {
        type: Boolean,
        default: false,
    },
    extra: {
        type: String
    },
    disabled: {
        type: Boolean
    },
    mode: {
        type: String as PropType<'normal' | 'advanced'>,
        default: 'normal',
        validator: modeValidator
    }
}