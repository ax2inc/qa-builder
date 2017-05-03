import Vue from 'vue'
import Router from 'vue-router'
import ScenariosList from '@/components/ScenariosList'
import ScenarioEdit from '@/components/ScenarioEdit'
import ScenarioPlayer from '@/components/ScenarioPlayer'
import ScenarioVisualizer from '@/components/ScenarioVisualizer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scenario-list',
      component: ScenariosList
    },
    {
      path: '/scenario/edit/:id',
      name: 'scenario-edit',
      component: ScenarioEdit
    },
    {
      path: '/scenario/play/:id',
      name: 'scenario-play',
      component: ScenarioPlayer
    },
    {
      path: '/scenario/visualize/:id',
      name: 'scenario-visualize',
      component: ScenarioVisualizer
    }
  ]
})
