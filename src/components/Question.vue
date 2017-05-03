<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      {{ question.text }}
    </div>
    <answer
      v-for="answer in answers"
      :key="answer.id"
      :answer="answer"
      :onClick="onAnswerClicked"></answer>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Answer from '@/components/Answer'

export default {
  name: 'question',
  props: ['question', 'onQuestionAnswered'],
  components: {
    Answer
  },
  computed: {
    ...mapGetters({
    }),
    answers () {
      return this.$store.getters.answersForQuestion(this.question.id)
    }
  },
  methods: {
    ...mapActions([
      'addUserAnswer'
    ]),
    onAnswerClicked (answerId) {
      console.log('onAnswerClicked', answerId)
      this.addUserAnswer({
        questionId: this.question.id,
        answerId
      })
      const answer = this.answers.find(answer => answer.id === answerId)
      this.onQuestionAnswered(answer.nextQuestion)
    }
  }
}
</script>
