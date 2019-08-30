<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <h3>vue + typescript + sass + router + vuex 新项目起手式</h3>
    <p>项目主要研究 高逼格的 typescript 写法（我知道你们早就想用上 vue + ts 强类型了）</p>

    <h3>什么是typescript??</h3>
    <p>TypeScript 是 JavaScript 的强类型版本。然后在编译期去掉类型和特有语法，生成纯粹的 JavaScript 代码。由于最终在浏览器中运行的仍然是 JavaScript，所以 TypeScript 并不依赖于浏览器的支持，也并不会带来兼容性问题。</p>
    <p>TypeScript 是 JavaScript 的超集，这意味着他支持所有的 JavaScript 语法。并在此之上对 JavaScript 添加了一些扩展，如 class / interface / module 等。这样会大大提升代码的可阅读性。</p>
    <p>与此同时，TypeScript 也是 JavaScript ES6 的超集</p>
    <p>主要包括以下几点：</p>
    <p>1、静态类型检查（静态类型检查可以避免很多不必要的错误, 不用在调试的时候才发现问题）</p>
    <p>2、IDE 智能提示</p>
    <p>3、代码重构</p>
    <p>4、可读性</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
