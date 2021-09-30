//Styles
import './Button.scss'

import {h,VNode} from 'vue'

export default {
  name:'Button',
  computed:{
    classes(){
      return{
        'sx-button': true,
      }
    }
  },
  methods:{
    getContent():VNode{
      return h('span',{
        class:'sx-button__content'
      },this.$slots.default())
    }
  },
  render():VNode{
    const children = [this.getContent()]

    return h(
      'button',
      {class:this.classes},
      children
    )
  }
}