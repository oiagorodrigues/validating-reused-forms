<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/new">New</router-link>
    </div>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
  a {
    margin-right: 1rem;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
