<template>
  <el-button type="primary" @click="onClick(answer.id)">{{ answer.text }}</el-button>
</template>

<script>
export default {
  name: 'answer',
  props: ['answer', 'onClick'],
  methods: {
  }
}
</script>
