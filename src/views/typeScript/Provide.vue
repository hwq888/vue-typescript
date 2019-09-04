<template>
  <div>
    <h1>@Provide</h1>
    <p class="tl">@Provide 向任意层级的子组件提供可访问的属性，默认为当前属性的名称，可以指定名称</p>
    <p class="daima-box">
      @Component<br>
      class ParentComponent extends Vue {<br>
      @Provide() private info = 'info'<br>
      @Provide('next') private infoNext = 'infoNext'<br>
      }<br>
    </p>
    <!--<p>info:{{info}}</p>-->
    <!--<input v-model="info">-->
    <Inject></Inject>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import Inject from './Inject.vue'
  @Component({
    components: {
      Inject
    }
  })
export default class ProvideVue extends Vue {
    // @Provide() private info!:string;
    // @Provide('next') private infoNext!:string;
    @Provide() private info = 'info'
    @Provide('next') private infoNext = 'infoNext'
}
</script>
