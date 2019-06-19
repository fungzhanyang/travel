<template>
	<div class="container" @click="handleGarllaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in imgs" :key="index">
					<img class="gallary-img" :src="item">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonGallary',
	props: {
		imgs: {
			type: Array,
			default(){
				return ['//img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_600x330_ddcee9e0.jpg']
			}
		}
	},
	methods: {
		handleGarllaryClick(){
			this.$emit('close')
		}
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observeParents: true,
				observer: true
			}
		};
	},
}
</script>

<style lang="stylus" scoped>
.container
	.swiper-container
		overflow visible
	display flex
	flex-direction column
	justify-content center
	position absolute
	top 0
	bottom 0
	left 0
	right 0
	z-index 1
	background-color #000
	.wrapper
		width 100%
		height 0
		padding-bottom 100%
		overflow hidden
		.gallary-img
			width 100%
		.swiper-pagination
			color #fff
			bottom -1rem
</style>

