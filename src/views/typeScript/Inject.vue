<template>
  <div>
    <h1>@Inject 接收</h1>
    <p class="tl">@Inject 获取父级由Provide提供的属性，默认为当前属性的名称，可以指定名称，多个父级提供相同名称属性时，获取最近父级的名称属性</p>
    <p>info: {{info}}</p>
    <p>infoNext: {{infoNext}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Watch, Vue } from 'vue-property-decorator'
@Component
export default class ProvideChild extends Vue {
  @Inject() private info!:string;
  @Inject('next') private infoNext!:string;
}
</script>
