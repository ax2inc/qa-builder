<template>
  <form v-on:submit.prevent="onFormSubmit">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-input type="" v-model="title">
          <el-button
            type="primary"
            slot="append">Add</el-button>
        </el-input>
      </el-col>
    </el-row>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'scenario-form',
  data: () => ({
    title: ''
  }),
  methods: {
    ...mapActions({
      'addScenario': 'addScenario'
    }),
    onFormSubmit (e) {
      this.addScenario({
        title: this.title
      })
      this.title = ''
    }
  }
}
</script>
