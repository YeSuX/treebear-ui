import sxButton from '../button.vue';
import sxButtonGroup from '../buttonGroup.vue';

export default {
    title: '输入类/按钮 Button',
    component: sxButton,
};

const baseTemplate = () => ({
    components: { sxButton },
    setup() {
        return {};
    },
    template: `<sx-button>基本按钮</sx-button>`,
});

const typeTemplate = () => ({
    components: { sxButton },
    setup() {
        return {  };
    },
    template: `<div class="btn-margin-right">
                  <sx-button>主要按钮</sx-button>
                  <sx-button type="secondary">次要按钮</sx-button>
                  <sx-button type="tertiary">第三按钮</sx-button>
                  <sx-button type="warning">警告按钮</sx-button>
                  <sx-button type="danger">危险按钮</sx-button>
                </div>`,
});

const themeTemplate = () => ({
    components: { sxButton },
    setup() {
        return {  };
    },
    template: `<div class="btn-margin-right mb-2">
                  <sx-button theme='light'>浅色主要</sx-button>
                  <sx-button theme='light' type="secondary">浅色次要</sx-button>
                  <sx-button theme='light' type="tertiary">浅色第三</sx-button>
                  <sx-button theme='light' type="warning">浅色警告</sx-button>
                  <sx-button theme='light' type="danger">浅色危险</sx-button>
                </div>
                <div class="btn-margin-right mb-2">
                  <sx-button theme='solid'>深色主要</sx-button>
                  <sx-button theme='solid' type="secondary">深色次要</sx-button>
                  <sx-button theme='solid' type="tertiary">深色第三</sx-button>
                  <sx-button theme='solid' type="warning">深色警告</sx-button>
                  <sx-button theme='solid' type="danger">深色危险</sx-button>
                </div>
                <div class="btn-margin-right mb-2">
                  <sx-button theme='borderless'>主要</sx-button>
                  <sx-button theme='borderless' type="secondary">次要</sx-button>
                  <sx-button theme='borderless' type="tertiary">第三</sx-button>
                  <sx-button theme='borderless' type="warning">警告</sx-button>
                  <sx-button theme='borderless' type="danger">危险</sx-button>
                </div>`,
});

const sizeTemplate = () => ({
    components: { sxButton },
    setup() {
        return {  };
    },
    template: `<div class="btn-margin-right">
                <sx-button size='large'>大尺寸</sx-button>
                <sx-button size='default'>默认尺寸</sx-button>
                <sx-button size='small'>小尺寸</sx-button>
              </div>`
})

const blockTemplate = () => ({
    components: { sxButton },
    setup() {
        return {  };
    },
    template: `<div class="btn-margin-right">
                <sx-button block>块级按钮</sx-button>
              </div>`
})

const disabledTemplate = () => ({
    components: { sxButton },
    setup() {
        return {  };
    },
    template: `<div class="btn-margin-right">
                <sx-button disabled>禁用</sx-button>
                <sx-button disabled theme="borderless">无背景禁用</sx-button>
                <sx-button disabled theme="light">浅色禁用</sx-button>
                <sx-button disabled theme="borderless" type="primary">无背景主要禁用</sx-button>
                <sx-button disabled theme="solid" type="warning">深色警告禁用</sx-button>
              </div>`
})

const loadingTemplate = () => ({
    components: { sxButton },
    setup() {
        return { };
    },
    template: `<div class="btn-margin-right">
                <sx-button loading>保存</sx-button>
                <sx-button loading type="danger">删除</sx-button>
              </div>`
})

const groupSizeTemplate = () => ({
    components: { sxButton, sxButtonGroup },
    setup() {
        return {  };
    },
    template: `<div class="sx--flex">
              <sx-button-group size="large" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              <sx-button-group size="default" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              <sx-button-group size="small" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              </div>`
})

const groupDisabledTemplate = () => ({
    components: { sxButton, sxButtonGroup },
    setup() {
        return {  };
    },
    template: `<sx-button-group disabled>
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>`
})

const groupTypeTemplate = (args) => ({
    components: { sxButton, sxButtonGroup },
    setup() {
        return { args };
    },
    template: `<div class="sx--flex">
              <sx-button-group type="primary" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              <sx-button-group type="secondary" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              <sx-button-group type="tertiary" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              <sx-button-group type="warning" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              <sx-button-group type="danger" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              </div>`
})

const groupThemeTemplate = () => ({
    components: { sxButton, sxButtonGroup },
    setup() {
        return {  };
    },
    template: `<div class="sx--flex">
              <sx-button-group theme="light" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              <sx-button-group theme="borderless" class="mb-2">
                <sx-button>拷贝</sx-button>
                <sx-button>查询</sx-button>
                <sx-button>剪切</sx-button>
              </sx-button-group>
              </div>`
})

export const 基本按钮 = baseTemplate.bind({});

export const 按钮类型 = typeTemplate.bind({});

export const 按钮主题 = themeTemplate.bind({});

export const 尺寸 = sizeTemplate.bind({});

export const 块级按钮 = blockTemplate.bind({});

export const 禁用状态 = disabledTemplate.bind({});

export const 加载状态 = loadingTemplate.bind({});

export const 组合尺寸 = groupSizeTemplate.bind({});

export const 组合禁用 = groupDisabledTemplate.bind({});

export const 组合类型 = groupTypeTemplate.bind({});

export const 组合主题 = groupThemeTemplate.bind({});