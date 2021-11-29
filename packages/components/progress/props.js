export const props = {
  percent: {
    type: [Number, String],
    require: true,
    default: 0
  },
  stroke: {
    type: String,
    default: 'var(--sx-color-success)'
  },
  size: {
    type: String
  },
  showInfo: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: 'horizontal'
  },
  type: {
    type: String
  },
  text: {
    type: String
  }
}