<template>
  <div>
    <p>name:{{name}}</p>
    <p>syncedName:{{syncedName}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator'
@Component
export default class YourComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}

// export default {
//   props: {
//     name: {
//       type: String
//     }
//   },
//   computed: {
//     syncedName: {
//       get() {
//         return this.name
//       },
//       set(value) {
//         this.$emit('update:name', value)
//       }
//     }
//   }
// }

</script>
