import SxButton from '../Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: SxButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type:{
      control: 'select' ,
      options:['default' , 'primary' , 'info' , 'success' , 'warning' , 'error','ghost']
    },
    size: {
      control:'select' ,
      options: ['mini','small', 'normal', 'large'],
    },
    color: { control: 'color' },
    textColor: { control: 'color' },
    block:{control:'boolean'},
    round:{control:'boolean'},
    circle:{control:'boolean'},
    bordered:{control:'boolean'},
    disabled:{control:'boolean'},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SxButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<sx-Button v-bind="args">{{ args.slotcontent }}</sx-Button><sx-Button v-bind="args">{{ args.slotcontent }}</sx-Button>`,
});

export const Base = Template.bind({});

Base.args={
  slotcontent:'button'
}