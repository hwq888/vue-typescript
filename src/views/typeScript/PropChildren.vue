<template>
  <div>
    <h2>age:{{age}}</h2>
    <h2>sex:{{sex}}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class YourComponent extends Vue {
  @Prop() age!:number;
  @Prop({ default: 1 }) sex!:string;
}
</script>
