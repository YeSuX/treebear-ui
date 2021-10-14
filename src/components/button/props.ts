import type {PropType} from 'vue'

function typeValidator(type:string):boolean{
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

export const props = {
  type:{
    type:String as PropType<'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
    default:'default',
    validator: typeValidator,
  }
}