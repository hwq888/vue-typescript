<template>
  <div>
    <p>count：<input v-model="count" @change="onInputChange"></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class EmitChildrenComponent extends Vue {
    count = 0
    @Emit()
    addToCount (n: number) {
      this.count += n
    }

    @Emit('reset')
    resetCount () {
      this.count = 0
    }

    @Emit()
    returnValue () {
      return 10
    }

    // @Emit()
    // onInputChange (e) {
    //   return e.target.value
    // }

    @Emit()
    promise () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      })
    }
}

// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     addToCount(n) {
//       this.count += n
//       this.$emit('add-to-count', n)
//     },
//     resetCount() {
//       this.count = 0
//       this.$emit('reset')
//     },
//     returnValue() {
//       this.$emit('return-value', 10)
//     },
//     onInputChange(e) {
//       this.$emit('on-input-change', e.target.value, e)
//     },
//     promise() {
//       const promise = new Promise(resolve => {
//         setTimeout(() => {
//           resolve(20)
//         }, 0)
//       })
//
//       promise.then(value => {
//         this.$emit('promise', value)
//       })
//     }
//   }
// }
</script>
