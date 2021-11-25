const typeValidator = (type) => {
  return ['info', 'warning', 'danger', 'success'].includes(type);
}

export const props = {
  type: {
    type: String,
    default: 'info',
    validator: typeValidator
  },
  description: {
    type: String
  },
  fullMode: {
    type: Boolean,
    default: true
  }
}