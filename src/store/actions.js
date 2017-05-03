/*
 * @Author: Paul Gascou-Vaillancourt
 * @Date:   2017-04-27 12:26:10
 * @Last Modified by:   Paul Gascou-Vaillancourt
 * @Last Modified time: 2017-05-01 23:08:11
 */

import * as types from './mutation-types'

export default {
  addScenario ({ commit }, { title }) {
    commit(types.SCENARIO_ADD, {
      id: Date.now(),
      title
    })
  },
  removeScenario ({ commit }, { id }) {
    commit(types.SCENARIO_REMOVE, { id })
  },
  setScenarioFirstQuestion ({ commit }, { scenarioId, id }) {
    commit(types.SCENARIO_SET_FIRST_QUESTION, { scenarioId, id })
  },
  addQuestion ({ commit }, { scenarioId, text }) {
    commit(types.QUESTION_ADD, {
      id: Date.now(),
      scenarios: [scenarioId],
      text
    })
  },
  updateQuestion ({ commit }, { id, text }) {
    commit(types.QUESTION_UPDATE, {
      id,
      text
    })
  },
  addAnswer ({ commit }, { parentQuestionId, text }) {
    commit(types.ANSWER_ADD, {
      id: Date.now(),
      parentQuestionId,
      text
    })
  },
  updateAnswer ({ commit }, { id, text, nextQuestion }) {
    commit(types.ANSWER_UPDATE, {
      id,
      text,
      nextQuestion
    })
  },
  removeAnswer ({ commit }, { id }) {
    commit(types.ANSWER_REMOVE, {
      id
    })
  },
  addUserAnswer ({ commit }, { questionId, answerId }) {
    commit(types.USER_ANSWER_ADD, {
      questionId,
      answerId
    })
  },
  resetUserAnswers ({ commit }) {
    commit(types.USER_ANSWER_RESET)
  }
}
