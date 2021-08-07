<template>
  <a-form ref="formRef" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Username">
      <a-input type="text" />
    </a-form-item>
    <a-form-item label="Password">
      <a-input type="password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Login</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const formRef = ref()
    const onSubmit = () => {
      console.log('login')
    }
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formRef,
      onSubmit
    }
  }
})
</script>

<style>
</style>
