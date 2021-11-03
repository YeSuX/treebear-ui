import type { PropType } from 'vue'

export const props = {
    modelValue: {
        type: Boolean,
        default: true
    },
    checkedValue: {
        type: Boolean,
        default: true,
    },
    uncheckedValue: {
        type: Boolean,
        default: false,
    },
    'update:modelValue': {
        type: Function as PropType<(value: any) => void>
    }
}