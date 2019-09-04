<template>
  <div>
    <h1>@Component</h1>
    <p class="tl">@Component 声明成一个vue的组件实例，如果不使用，则不能得到一个vue组件</p>
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <p>Watch msg: {{watchMsg}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Component from 'vue-class-component'
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({
  props: {
    propMessage: String
  }
})
export default class component extends Vue {
    // initial data
    msg = 123
    watchMsg = ''

    // use prop values for initial data
    helloMsg = 'Hello, ' + this.propMessage

    // lifecycle hook
    mounted () {
      this.greet()
    }

    @Watch('msg')
    onChildChanged (val, oldVal) {
      this.watchMsg = val
      console.log('val:' + val)
      console.log('oldVal:' + oldVal)
    }

    // computed
    get computedMsg () {
      return 'computed ' + this.msg
    }

    // method
    greet () {
      console.log('greeting: ' + this.msg)
    }
}
</script>
<!--<template>-->
  <!--<div class="about">-->
    <!--<h1>@Component</h1>-->
    <!--<p class="tl">@Component 声明成一个vue的组件实例，如果不使用，则不能得到一个vue组件</p>-->
    <!--<p class="tl fw">第一种方式，不需要定义额外内容：</p>-->
    <!--<p class="daima-box">-->
      <!--@Component<br><br>-->
      <!--class MyComponent extends Vue { }-->
    <!--</p>-->
    <!--<p class="tl fw">第二种方式，定义相关内容：</p>-->
    <!--<p class="daima-box">-->
      <!--@Component({<br>-->
      <!--/* 这里和js版本编写的 vue 组件内容相同，<br>-->
      <!--* 凡是不能在ts里面完成的都可以在这里完成<br>-->
      <!--* 最终会被合并到一个实例中。<br>-->
      <!--* 在这里定义的内容，不会被语法器获取到，因此必须要同步在class中声明<br>-->
      <!--*/<br>-->
      <!--data(){<br>-->
      <!--return { myname:"",age:18 }<br>-->
      <!--}<br>-->
      <!--})<br>-->
      <!--class MyComponent extends Vue {<br>-->
      <!--private myname:string;<br>-->
      <!--mounted(){<br>-->
      <!--this.myname;<br>-->
      <!--this.age;// 语法器报错，当前类找不到age属性<br>-->
      <!--}<br>-->
      <!--}<br>-->
    <!--</p>-->
  <!--</div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--import { Component, Vue } from 'vue-property-decorator'-->
<!--// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src-->

<!--// @Component({-->
<!--//   components: {-->
<!--//     HelloWorld-->
<!--//   }-->
<!--// })-->
<!--// @Component({-->
<!--//   // /* 这里和js版本编写的 vue 组件内容相同，-->
<!--//   //  * 凡是不能在ts里面完成的都可以在这里完成-->
<!--//   //  * 最终会被合并到一个实例中。-->
<!--//   //  * 在这里定义的内容，不会被语法器获取到，因此必须要同步在class中声明-->
<!--//   //  */-->
<!--//   data () {-->
<!--//     return { myname: '', age: 18 }-->
<!--//   }-->
<!--// })-->
<!--// class MyComponent extends Vue {-->
<!--//   private myname:string;-->
<!--//   mounted () {-->
<!--//     this.myname-->
<!--//     this.age// 语法器报错，当前类找不到age属性-->
<!--//   }-->
<!--// }-->
<!--// export default class Home extends Vue {}-->
<!--</script>-->
<!--<style scoped lang="scss">-->
<!--</style>-->
