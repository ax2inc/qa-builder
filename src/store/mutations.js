/*
 * @Author: Paul Gascou-Vaillancourt
 * @Date:   2017-04-27 12:29:31
 * @Last Modified by:   Paul Gascou-Vaillancourt
 * @Last Modified time: 2017-05-01 23:07:29
 */

import * as types from './mutation-types'

export default {
  [types.SCENARIO_ADD] (state, { id, title }) {
    if (title.length === 0) {
      return
    }
    state.scenarios.push({ id, title })
  },
  [types.SCENARIO_SET_FIRST_QUESTION] (state, { scenarioId, id }) {
    let scenarios = state.scenarios
    let scenario = scenarios.find(scenario => scenario.id === scenarioId)
    scenario.first_question = id
    state.scenarios = scenarios
  },
  [types.SCENARIO_REMOVE] (state, { id }) {
    state.scenarios = state.scenarios.filter(scenario => scenario.id !== id)
  },
  [types.QUESTION_ADD] (state, { id, scenarios, text }) {
    state.questions.push({ id, scenarios, text })
  },
  [types.QUESTION_UPDATE] (state, { id, text }) {
    let questions = state.questions
    let question = questions.find(question => question.id === id)
    question.text = text
    state.questions = questions
  },
  [types.ANSWER_ADD] (state, { id, parentQuestionId, text }) {
    state.answers.push({ id, parentQuestionId, text })
  },
  [types.ANSWER_UPDATE] (state, { id, text, nextQuestion }) {
    let answers = state.answers
    let answer = answers.find(answer => answer.id === id)
    answer.text = (text !== answer.text) ? text : answer.text
    answer.nextQuestion = (nextQuestion !== answer.nextQuestion) ? nextQuestion : answer.nextQuestion
    state.answers = answers
  },
  [types.ANSWER_REMOVE] (state, { id }) {
    state.answers = state.answers.filter(answer => answer.id !== id)
  },
  [types.USER_ANSWER_ADD] (state, { questionId, answerId }) {
    let question = state.questions.find(question => question.id === questionId)
    let answer = state.answers.find(answer => answer.id === answerId)
    state.userAnswers.push({
      question: question,
      answer: answer
    })
  },
  [types.USER_ANSWER_RESET] (state) {
    state.userAnswers = []
  }
}
