<template>
  <div style="overflow-x: hidden;position: relative;">
    <div id="app">
      <Navbar style="z-index:5"></Navbar>
      <!-- <v-content> -->
      <router-view></router-view>
      <!-- </v-content> -->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>


<style>
#app {
  font-family: "Arial","\u5b8b\u4f53", Tahoma, Geneva, sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* user-select: none; */
}

html {
  overflow-y: scroll;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
