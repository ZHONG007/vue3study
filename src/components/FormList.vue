<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        class="form-control"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        {{userInfo.email}}
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface FormProps {
  name: string;
  email?: string;
  password?: string;
  rePassword?: string;
}
export default defineComponent({
  name: 'FormList',
  props: {
    userInfo: {
      type: Object as PropType<FormProps>
    }
  }
})
</script>

<style>
</style>
