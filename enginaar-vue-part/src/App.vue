<template> 
  <HelloWorld lineText="Welcome to Your Vue component" btnText="Click This" :repeats="4"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
