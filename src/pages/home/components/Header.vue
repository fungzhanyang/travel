<template>
  <div class="header">
      <div class="header-left">
		  <div class="iconfont back-icon">&#xe624;</div>
	  </div>
      <div class="header-input">
		  <span class="iconfont">&#xe632;</span>
	  </div>
      <div class="header-right">城市
		  <span class="iconfont arrow-icon">&#xe615;</span>
	  </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header
		display flex
		font-size .32rem
		height .86rem
		line-height 0.86rem
		background-color $bgc
		color #fff
		.header-left
			width .64rem
			.back-icon
				text-align center
				font-size .4rem
		.header-input
			flex 1
			background-color #fff
			margin-top .12rem
			height 0.64rem
			line-height 0.64rem
			margin-left 0.2rem
			border-radius .1rem
			color #ccc
			padding-left .2rem
		.header-right
			width 1.24rem
			text-align center
			.arrow-icon
				margin-left -.04rem
				font-size .24rem
</style>

