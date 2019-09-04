<template>
  <div>
    <h1>@PropSync</h1>
    <p class="tl">@PropSync</p>
    <p class="daima-box">
      import { Vue, Component, PropSync } from 'vue-property-decorator'<br/>
      @Component<br/>
      export default class YourComponent extends Vue {<br/>
      @PropSync('name', { type: String }) syncedName!: string<br/>
      }<br/>
    </p>
    <p class="tl">相当于：</p>
    <p class="daima-box">
      export default {<br/>
      props: {<br/>
      name: {<br/>
      type: String<br/>
      }<br/>
      },<br/>
      computed: {<br/>
      syncedName: {<br/>
      get() {<br/>
      return this.name<br/>
      },<br/>
      set(value) {<br/>
      this.$emit('update:name', value)<br/>
      }<br/>
      }<br/>
      }<br/>
      }<br/>
    </p>
    <p>name：<input v-model="name"></p>
    <h2 class="fw c-red">PropSync子组件：</h2>
    <PropSyncChilder :name="name"></PropSyncChilder>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PropSyncChilder from './PropSyncChilder.vue'
@Component({
  components: {
    PropSyncChilder
  }
})
export default class YourComponent extends Vue {
  name = 'name'
  // @Provide() private age!:number;
  // @Prop(Number) readonly propA: number | undefined
  // @Prop({ default: 'default value' }) readonly propB!: string
  // @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
</script>
