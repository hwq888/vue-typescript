<template>
  <div>
    <h1>@Emit</h1>
    <p class="tl">@Emit this.$emit 的装饰器,如果没有指定名称，默认使用函数名称。有返回值时，使用返回值，没有则使用</p>
    <!--<p>n：<input v-model="n"></p>-->
    <!--<EmitChildren></EmitChildren>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EmitChildren from './EmitChildren.vue'
@Component({
  components: {
    EmitChildren
  }
})
export default class EmitComponent extends Vue {
  n = ''
  created () {
    // this.$on('add-to-count', (n) => {
    //   debugger
    //   this.n = n
    // })
  }
  // @Provide() private age!:number;
  // @Prop(Number) readonly propA: number | undefined
  // @Prop({ default: 'default value' }) readonly propB!: string
  // @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
</script>
