<template>
  <div class="tree-wrapper">
    <d3tree
      class="tree"
      node-text="text"
      :zoomable="true"
      :data="tree"
      :identifier="getId"
      :marginX="800"
      :marginY="800"
      :duration="750"></d3tree>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { D3tree } from 'vued3tree'

export default {
  name: 'scenario-visualizer',
  props: ['scenarioId'],
  components: {
    D3tree
  },
  data: () => ({
    tree: {}
  }),
  computed: {
    ...mapGetters({
      'scenario': 'activeScenario'
    })
  },
  created () {
    this.buildTree()
  },
  methods: {
    buildTree () {
      console.log('lets build this tree', this)
      let tree = {}
      const firstQuestion = this.$store.getters.questionById(this.scenario.first_question)
      const answers = this.$store.getters.answersForQuestion(firstQuestion.id)
      tree.text = firstQuestion.text
      tree.children = answers
      this.tree = this.parseTree(firstQuestion)
      console.log(tree)
      this.tree = tree
    },
    parseTree (node) {
      node = Object.assign({}, node)
      console.log('parseTree', node)
      const branches = Array.prototype.slice.call(this.$store.getters.answersForQuestion(node.id))
      node.children = branches
      node.children.forEach((branch) => {
        branch = Object.assign({}, branch)
        const nextNode = Object.assign({}, this.$store.getters.questionById(branch.nextQuestion))
        console.log('nextNode', nextNode)
        if (nextNode !== undefined) {
          branch.children = [nextNode]
          this.parseTree(nextNode)
        }
      })
      return node
    },
    getId (node) {
      return node.text
    }
  }
}
</script>

<style lang="css">
.tree-wrapper {
  width: 3000px;
  position: fixed;
  background: white;
  top: 40px;
  right: 0;
  bottom: 0;
  left: 0;
}
.tree {
  height: 1000px;
  width: 100%;
}
</style>
