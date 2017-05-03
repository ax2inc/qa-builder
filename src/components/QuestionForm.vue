<template>
  <div>
    <el-row :gutter="12" type="flex" justify="end">
      <el-button @click="setFirstQuestion">
        <i class="el-icon-share"></i> First question
      </el-button>
    </el-row>
    <el-row :gutter="12" type="flex">
      <el-col :span="24">
        <el-input @change="updateQuestion" v-model="text" type="textarea"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="24">
        <el-button @click="addAnswer" type="primary">
          <i class="el-icon-plus"></i> Add answer
        </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="12" type="flex" justify="end" v-for="(answer, index) in answers" :key="index">
      <el-col :span="24">
        <answer-form :parent-question-id="this.id" :answer="answer"></answer-form>
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

import AnswerForm from '@/components/AnswerForm'

export default {
  name: 'QuestionForm',
  components: {
    AnswerForm
  },
  props: ['question'],
  data: () => ({
    text: ''
  }),
  computed: {
    ...mapGetters({
      'scenario': 'activeScenario'
    }),
    answers () {
      const { id } = this.question
      return this.$store.getters.answersForQuestion(id)
    }
  },
  created () {
    this.text = this.question.text
  },
  methods: {
    updateQuestion () {
      const { id } = this.question
      this.$store.dispatch('updateQuestion', { id, text: this.text })
    },
    addAnswer () {
      const { id } = this.question
      this.$store.dispatch('addAnswer', { parentQuestionId: id, text: '' })
    },
    setFirstQuestion () {
      const { id } = this.question
      this.$store.dispatch('setScenarioFirstQuestion', { scenarioId: this.scenario.id, id })
    }
  }
}
</script>
