/*
 * @Author: Paul Gascou-Vaillancourt
 * @Date:   2017-04-27 12:25:36
 * @Last Modified by:   Paul Gascou-Vaillancourt
 * @Last Modified time: 2017-05-01 22:13:57
 */

export default {
  routeParams: (state, getters, rootState) => rootState.route.params,
  scenarios: state => state.scenarios,
  activeScenario: (state, getters, rootState) => (
    state.scenarios.find(scenario => scenario.id === rootState.route.params.id)
  ),
  activeQuestions: (state, getters, rootState) => (
    state.questions.filter(question => (
      question.scenarios.find(scenario => scenario === getters.activeScenario.id)
    ))
  ),
  answersForQuestion: (state, getters) => (parentQuestionId) => (
    state.answers.filter(answer => answer.parentQuestionId === parentQuestionId)
  ),
  scenarioById: state => (id) => (state.scenarios.find(scenario => scenario.id === id)),
  questionById: state => (id) => (state.questions.find(question => question.id === id)),
  userAnswers: state => state.userAnswers
}
