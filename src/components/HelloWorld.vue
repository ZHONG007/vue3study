<template>
  <div class="hello">{{ counter.counter }} {{ counter.items }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { counterStore } from '@/stores/counter'

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    const counter = counterStore()

    function addNumber () {
      counter.addItem(0)
    }

    return { counter, addNumber }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
