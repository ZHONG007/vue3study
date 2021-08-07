<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  {{ counter.counter }}
  {{ counter.items }}
  <HelloWorld></HelloWorld>
  <button @click="addNumber" type="button">add</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { counterStore } from './stores/counter'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
  name: 'App ',
  component: HelloWorld,
  setup () {
    const counter = counterStore()

    function addNumber () {
      counter.addItem(0)
    }

    return { counter, addNumber }
  }
})
</script>

<style lang="scss">
</style>
