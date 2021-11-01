import SxRadio from '../Radio.vue';

export default {
  title:'单选框 Radio',
  component:SxRadio
}

const radioTemplate = (args)=>({
  components:{SxRadio},
  template:`<sx-Radio></sx-Radio>`
})

export const Radio = radioTemplate.bind({});