<template>
  <ul class="list">
	  <li class="item" v-for="item in cities" :key="item.title">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
	props: {
		cities: Array
	},
  	name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	display flex
	flex-direction column
	justify-content center
	position absolute
	top 1.58rem
	right 0
	bottom 0
	width .4rem
	.item
		text-align center
		line-height 0.4rem
		color $bgc

</style>

