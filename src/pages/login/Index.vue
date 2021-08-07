<template>
  <a-form ref="formRef" :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Username" >
      <a-input type="text" v-model:value="formState.username"/>
    </a-form-item>
    <a-form-item label="Password" >
      <a-input type="password" v-model:value="formState.password"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Login</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
interface IFormState {
  username: string;
  password: string;
}
export default defineComponent({
  setup () {
    const formRef = ref()
    const formState = reactive<IFormState>({
      username: '',
      password: ''
    })
    const onSubmit = () => {
      console.log(formState)
    }
    const rules = {
      username: [],
      password: []
    }
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
      rules
    }
  }
})
</script>

<style>
</style>
