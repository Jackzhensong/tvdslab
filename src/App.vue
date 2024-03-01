<template>
  <div id="app">
    <!-- <nav> -->
      <router-link to="/index"></router-link>
      <router-link to="/publications"></router-link>
      <router-link to="/team"></router-link>
      <router-link to="/research"></router-link>
      <router-link to="/activities"></router-link>
    <!-- </nav> -->
    <router-view />
    <Navbar></Navbar>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
  created() {
    if(this.$router.path !== '/index'){
      this.$router.replace('/index')
    }
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
