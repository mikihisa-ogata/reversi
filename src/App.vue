<template>
  <div id="app">
    <h1>オセロゲーム</h1>
    <Board />
  </div>
</template>

<script>
import Board from './components/Board.vue';

export default {
  name: 'App',
  components: {
    Board
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
</style>