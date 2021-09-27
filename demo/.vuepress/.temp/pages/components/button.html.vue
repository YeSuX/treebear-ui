<template><h1 id="按钮-button" tabindex="-1"><a class="header-anchor" href="#按钮-button" aria-hidden="true">#</a> 按钮 Button</h1>
<p>按钮用来触发一些操作。</p>
<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>
<h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3>
<p>按钮的 <code>type</code> 分别为 <code>default</code>、<code>primary</code>、<code>info</code>、<code>success</code>、<code>warning</code> 和 <code>error</code>。</p>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>
<h3 id="button-props" tabindex="-1"><a class="header-anchor" href="#button-props" aria-hidden="true">#</a> Button Props</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>attr-type</td>
<td><code>'button' | 'submit' | 'reset'</code></td>
<td><code>'button'</code></td>
<td>按钮的 DOM 的 <code>type</code> 属性</td>
</tr>
<tr>
<td>block</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>按钮是否显示为块级</td>
</tr>
<tr>
<td>bordered</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>按钮是否显示 border</td>
</tr>
<tr>
<td>circle</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>按钮是否为圆形</td>
</tr>
<tr>
<td>color</td>
<td><code>string</code></td>
<td><code>undefined</code></td>
<td>按钮颜色（支持形如 <code>#FFF</code>， <code>#FFFFFF</code>， <code>yellow</code>，<code>rgb(0, 0, 0)</code> 的颜色）</td>
</tr>
<tr>
<td>dashed</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>按钮边框是否为虚线</td>
</tr>
<tr>
<td>disabled</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>按钮是否禁用</td>
</tr>
<tr>
<td>ghost</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>按钮是否透明</td>
</tr>
<tr>
<td>icon-placement</td>
<td><code>'left' | 'right'</code></td>
<td><code>'left'</code></td>
<td>按钮中图标的位置</td>
</tr>
<tr>
<td>keyboard</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>是否支持键盘操作</td>
</tr>
<tr>
<td>loading</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>按钮是否显示加载状态</td>
</tr>
<tr>
<td>round</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>按钮是否显示圆角</td>
</tr>
<tr>
<td>size</td>
<td><code>'tiny' | 'small' | 'medium' | 'large'</code></td>
<td><code>'medium'</code></td>
<td>按钮的尺寸</td>
</tr>
<tr>
<td>text</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>是否显示为文本按钮</td>
</tr>
<tr>
<td>text-color</td>
<td><code>string</code></td>
<td><code>undefined</code></td>
<td>按钮文字颜色（支持形如 <code>#FFF</code>， <code>#FFFFFF</code>， <code>yellow</code>，<code>rgb(0, 0, 0)</code> 的颜色）</td>
</tr>
<tr>
<td>type</td>
<td><code>'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'</code></td>
<td><code>'default'</code></td>
<td>按钮的类型</td>
</tr>
<tr>
<td>tag</td>
<td><code>string</code></td>
<td><code>'button'</code></td>
<td>按钮需要被渲染为什么标签</td>
</tr>
</tbody>
</table>
<h3 id="button-group-props" tabindex="-1"><a class="header-anchor" href="#button-group-props" aria-hidden="true">#</a> Button Group Props</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>size</td>
<td><code>'tiny' | 'small' | 'medium' | 'large'</code></td>
<td><code>undefined</code></td>
<td>在组内的按钮的尺寸。如果设定，内部的按钮尺寸将不生效</td>
</tr>
<tr>
<td>vertical</td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>组内按钮的排列方式</td>
</tr>
</tbody>
</table>
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2>
<h3 id="button-slots" tabindex="-1"><a class="header-anchor" href="#button-slots" aria-hidden="true">#</a> Button Slots</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td><code>()</code></td>
<td>按钮的内容</td>
</tr>
<tr>
<td>icon</td>
<td><code>()</code></td>
<td>按钮的图标</td>
</tr>
</tbody>
</table>
<h3 id="button-group-slots" tabindex="-1"><a class="header-anchor" href="#button-group-slots" aria-hidden="true">#</a> Button Group Slots</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td><code>()</code></td>
<td>按钮组的内容</td>
</tr>
</tbody>
</table>
</template>
