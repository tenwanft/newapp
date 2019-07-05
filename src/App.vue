<template>
  <div id="app">
    
   
    <Header></Header>
    <!-- <Home></Home> -->
     <router-view></router-view>
    <Footer></Footer>
    
  </div>
</template>

<script>
// import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'






export default {
  name: 'app',
  components: {
    Header,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
