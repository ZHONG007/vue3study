<template>
  <div class="row">
    <div v-for="column in list" :key="column.id" class="col-3">
      <div class="card h-100 shadow-m">
        <div class="card-body text-center">
          <img :src="column.avatar" alt="" class="card-img-top" />
          <h5>{{ column.title }}</h5>
          <p>{{ column.descprtion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColunmProps {
  id: number;
  title: string;
  avatar: string;
  descprtion: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColunmProps[]>,
      required: true
    }
  }
})
</script>

<style>
</style>
