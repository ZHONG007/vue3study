<template>
  <div class="container">
    <column-list :list="list"> </column-list
    ><form-list :userInfo="userInfo"></form-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColunmProps } from '@/components/ColumnList.vue'
import FormList, { FormProps } from '@/components/FormList.vue'

const userInfo: FormProps = {
  email: 'zhongwang',
  name: 'zhongwang'
}
const testData: ColunmProps[] = [
  {
    id: 1,
    title: 'test1',
    avatar: 'https://assets.lcsc.com/images/manufacturer/926.jpg',
    descprtion: 'test 2'
  },
  {
    id: 2,
    title: 'test2',
    avatar: 'https://assets.lcsc.com/images/manufacturer/926.jpg',
    descprtion: 'test 2'
  },
  {
    id: 3,
    title: 'test3',
    avatar: 'https://assets.lcsc.com/images/manufacturer/926.jpg',
    descprtion: 'test 2'
  }
]

export default defineComponent({
  components: { ColumnList, FormList },
  name: 'App ',
  setup () {
    return {
      list: testData,
      userInfo: userInfo
    }
  }
})
</script>

<style lang="scss">
</style>
