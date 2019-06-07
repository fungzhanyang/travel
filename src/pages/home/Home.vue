<template>
  <div>
    <home-header></home-header>
    <router-link to="/list">go list</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>
