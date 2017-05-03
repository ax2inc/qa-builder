<template>
  <div>
    <h1>
      Scenarios
    </h1>

    <el-table
      :data="scenarios"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="title"
        label="Title">
      </el-table-column>
      <el-table-column
      label="Operations">
        <template scope="scope">
          <a href="#" @click="onDeleteClicked(scope.row.id)">
            <i class="el-icon-delete"></i> Delete
          </a>
          <router-link
            :to="{
              name: 'scenario-visualize',
              params: {
                id: scope.row.id
              }
            }"><i class="el-icon-view"></i> Visualize</router-link>
          <router-link
            :to="{
              name: 'scenario-play',
              params: {
                id: scope.row.id
              }
            }"><i class="el-icon-caret-right"></i> Play</router-link>
          <router-link
            :to="{
              name: 'scenario-edit',
              params: {
                id: scope.row.id
              }
            }"><i class="el-icon-edit"></i> Edit</router-link>
        </template>
      </el-table-column>
    </el-table>

    <scenario-form></scenario-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Scenario from '@/components/Scenario'
import ScenarioForm from '@/components/ScenarioForm'

export default {
  name: 'scenarios-list',
  components: {
    Scenario,
    ScenarioForm
  },
  computed: {
    ...mapGetters({
      'scenarios': 'scenarios'
    })
  },
  methods: {
    ...mapActions({
      'removeScenario': 'removeScenario'
    }),
    onDeleteClicked (id) {
      console.log(id)
      this.removeScenario({ id })
    }
  }
}
</script>
