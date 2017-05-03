<template>
  <div id="app">
    <el-row type="flex">
      <el-col :span="24">
        <router-link
          :to="{
            name: 'scenario-list'
          }"><i class="el-icon-menu"></i></router-link>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body, html {
  background: #ccc;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 960px;
  margin: auto;
  min-height: 100%;
  background: white;
  padding: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .15s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
