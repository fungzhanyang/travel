<template>
  <div class="search">
	  <input class="search-input" type="text" placeholder="请输入城市名">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
	height 0.72rem
	background $bgc
	padding 0 .1rem
	.search-input
		box-sizing border-box
		width 100%
		color #666
		height 0.62rem
		text-align center
		line-height 0.62rem
		border-radius .06rem
</style>

