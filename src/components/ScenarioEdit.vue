<template>
  <div>
    <h1>Editing scenario "{{ scenario.title }}"</h1>
    <el-row :gutter="24" type="flex">
      <el-col :span="24">
        <el-button @click="addQuestion" type="primary">
          <i class="el-icon-plus"></i> Add question
        </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex">
      <el-col :span="24">
        <el-collapse accordion>
          <el-collapse-item
            :name="question.id"
            :key="question.id"
            :title="question.text"
            v-for="question in questions">
            <question-form :question="question"></question-form>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="css" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>

<script>
import { mapGetters } from 'vuex'

import QuestionForm from '@/components/QuestionForm'

export default {
  name: 'scenario-edit',
  components: {
    QuestionForm
  },
  data: () => ({
    showQuestionForm: true
  }),
  computed: {
    ...mapGetters({
      'scenario': 'activeScenario',
      'questions': 'activeQuestions'
    })
  },
  created () {
    console.log(this)
  },
  methods: {
    addQuestion () {
      this.$store.dispatch('addQuestion', {
        scenarioId: this.scenario.id,
        text: ''
      })
    }
  }
}
</script>

<style lang="css">
.el-collapse-item__header {
  text-align: left;
}
</style>
