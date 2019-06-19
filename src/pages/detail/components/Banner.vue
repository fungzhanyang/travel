<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" alt="">
			<div class="banner-info">
				<div class="banner-title">{{sightName}}</div>
				<div class="banner-number">
					<span class="iconfont icon-img"></span>
					{{gallartimgs.length}}
				</div>
			</div>
		</div>
		<gallary @close="handleGarllaryClose" :imgs="gallartimgs" v-show="showGallary"></gallary>
	</div>
</template>

<script>
import gallary from 'common/gallary/Gallary'
export default {
	name: 'DetailBanner',
	props: {
		sightName: String,
		bannerImg: String,
		gallartimgs: Array,
	},
	components: {
		gallary
	},
	methods: {
		handleBannerClick(){
			this.showGallary = true
		},
		handleGarllaryClose(){
			this.showGallary = false
		}
	},
	data(){
		return {
			showGallary: false,
		}
	}
}
</script>

<style lang="stylus" scoped>
.banner
	position relative
	overflow hidden
	height 0
	padding-bottom 55%
	.banner-img
		width 100%
	.banner-info
		display flex
		align-items center
		position absolute
		left 0
		right 0
		bottom 0
		height 0.6rem
		color #fff
		background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.6))
		.banner-title
			flex 1
			font-size .32rem
			padding .2rem
		.banner-number
			padding 0 .4rem
			height 0.32rem
			line-height 0.32rem
			border-radius .2rem
			background rgba(0,0,0,.8)
			font-size .24rem
			.icon-img
				font-size .28rem
</style>

