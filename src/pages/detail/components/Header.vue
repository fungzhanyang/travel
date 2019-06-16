<template>
	<div>
		<router-link v-if="showAbs" tag="div" to="/" class="header-abs">
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
		<div class="header-fixed" v-if="!showAbs"
			:style="opacityStyle">
			<router-link to="/">
				<div class="iconfont back-icon">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data(){
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll(){
			const top = document.documentElement.scrollTop
			if(top > 60){
				let opacity = top/200
				if(opacity>1) opacity = 1
				this.opacityStyle = { opacity }
				this.showAbs = false
			}else{
				this.showAbs = true
			}
		}
	},
	activated(){
		window.addEventListener('scroll', this.handleScroll)
	},
	deactivated(){
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
.header-abs
	position absolute
	left 0.2rem
	top .2rem
	width 0.8rem
	height 0.8rem
	border-radius .4rem
	background-color rgba(0,0,0,.5)
	display flex
	justify-content center
	align-items center
	.back-icon
		color #fff
@import '~styles/varibles.styl'
.header-fixed
	position fixed
	overflow hidden
	left 0
	top 0
	right 0
	height $headerHeight
	line-height $headerHeight
	text-align center
	color #fff
	background-color $bgc
	font-size .32rem
	.back-icon
		position absolute
		color #fff
		height $headerHeight
		width $headerHeight
</style>

