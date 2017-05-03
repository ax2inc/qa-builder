<template>
  <div>
    <h1>{{ scenario.title }}</h1>
    <transition name="translate-fade">
      <div v-if="questionLoaded">
        <question
          :question="currentQuestion"
          :onQuestionAnswered="goToQuestion"></question>
      </div>
      <div v-if="reachedEnd">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>Thanks for answering our questions!</h2>
            <p>
              Here's what you told us
            </p>
          </div>
          <p v-for="answer in userAnswers">
            <b>{{ answer.question.text }}</b> {{ answer.answer.text }}
          </p>
        </el-card>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Question from '@/components/Question'
import Answer from '@/components/Answer'

export default {
  name: 'scenario-player',
  components: {
    Question,
    Answer
  },
  data: () => ({
    questionLoaded: true,
    hasJustStarted: true,
    reachedEnd: false,
    currentQuestion: null
  }),
  computed: {
    ...mapGetters({
      'scenario': 'activeScenario',
      'userAnswers': 'userAnswers'
    }),
    firstQuestion () {
      return this.$store.getters.questionById(this.scenario.first_question)
    }
  },
  created () {
    console.log(this)
    this.currentQuestion = this.firstQuestion
    this.resetUserAnswers()
  },
  methods: {
    ...mapActions([
      'resetUserAnswers'
    ]),
    goToQuestion (questionId) {
      console.log('goToQuestion', questionId)
      this.questionLoaded = false
      setTimeout(() => {
        const question = this.$store.getters.questionById(questionId)
        if (question === undefined) {
          this.reachedEnd = true
        } else {
          this.currentQuestion = question
          this.questionLoaded = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="css" scoped>
.translate-fade-enter-active, .translate-fade-leave-active {
  transition: all .5s;
}
.translate-fade-enter, .translate-fade-leave-active {
  opacity: 0;
}
.translate-fade-enter {
  transform: translateX(31px);
}
.translate-fade-leave-active {
  transform: translateX(-31px);
}
</style>
