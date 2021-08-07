<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Username">
      <a-input type="text" />
    </a-form-item>
    <a-form-item label="Password">
      <a-input type="password" />
    </a-form-item>
    <a-form-item label="Login">
      <a-button type="submit" />
    </a-form-item>
  </a-form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style>
</style>
