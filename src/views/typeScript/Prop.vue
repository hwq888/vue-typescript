<template>
  <div>
    <h1>@Prop</h1>
    <p class="tl">@Prop 由标签属性注入，获取对应标签属性上值,可配置具体prop内容，参照js版本props内容</p>
    <p class="daima-box">
      @Component<br/>
      class MyComponent extends Vue {<br/>
      @Prop() age!:number;<br/>
      @Prop({default:1}) sex!:number;<br/>
      }<br/>
    </p>
    <p>age：<input v-model="age"></p>

    <h2 class="fw c-red">PropChildren组件：</h2>
    <PropChildren :age="age"></PropChildren>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PropChildren from './PropChildren.vue'
@Component({
  components: {
    PropChildren
  }
})
export default class YourComponent extends Vue {
  age = '16'
  // @Provide() private age!:number;
  // @Prop(Number) readonly propA: number | undefined
  // @Prop({ default: 'default value' }) readonly propB!: string
  // @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
</script>
