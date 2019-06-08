<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <router-link to="/list">go list</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components: {
	HomeHeader,
	HomeSwiper
  }
}
</script>

<style>
</style>
