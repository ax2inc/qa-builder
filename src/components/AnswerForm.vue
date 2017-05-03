<template>
  <div>
    <el-input type="text" v-model="text" @change="updateAnswer">
      <el-select
        slot="append"
        placeholder="Question"
        class="question-select"
        v-model="nextQuestion"
        filterable
        @change="updateAnswer">
        <el-option
          v-for="question in questions"
          :key="question.id"
          :label="getQuestionOptionLabel(question)"
          :value="question.id"
          :disabled="question.id === nextQuestion"></el-option>
      </el-select>
      <el-button
        slot="prepend"
        type="danger"
        @click="onRemoveClicked">
        <i class="el-icon-delete"></i>
      </el-button>
    </el-input>
  </div>
</template>

<style lang="css" scoped>
.question-select {
  width: 200px;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'answer-form',
  props: ['answer'],
  data: () => ({
    nextQuestion: null,
    text: ''
  }),
  computed: {
    ...mapGetters({
      'questions': 'activeQuestions'
    })
  },
  created () {
    this.text = this.answer.text
    this.nextQuestion = this.answer.nextQuestion
  },
  methods: {
    ...mapActions([
      'removeAnswer'
    ]),
    getQuestionOptionLabel (question) {
      const { text } = question
      return (text.length <= 30) ? text : `${question.text.substring(0, 30)}...`
    },
    updateAnswer () {
      const { id } = this.answer
      const { text, nextQuestion } = this
      console.log(this)
      this.$store.dispatch('updateAnswer', { id, text, nextQuestion })
    },
    onRemoveClicked () {
      this.removeAnswer({ id: this.answer.id })
    }
  }
}
</script>

<style lang="css">

</style>
