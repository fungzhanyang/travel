<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	data(){
		return {
			recommendList:[
				{
					id:'001',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
					title: '秦岭野生动物园',
					desc: '秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园'
				},
				{
					id:'002',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
					title: '秦岭野生动物园',
					desc: '秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园'
				},
				{
					id:'003',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/c5/a017645d82ab89f271fdfb1bd6ecc2e0.water.jpg_200x200_2de772de.jpg',
					title: '秦岭野生动物园',
					desc: '秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园'
				}
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.title
	margin-top 0.2rem
	line-height 0.8rem
	background #cccccc
	text-indent .2rem
.item
	display flex
	overflow hidden
	height 1.9rem
	.item-img
		width 1.7rem
		height 1.7rem
		padding .1rem
	.item-info
		flex 1
		padding .1rem
		min-width 0
		.item-title
			line-height .54rem
			font-size .32rem
			ellipsis()
		.item-desc
			line-height .4rem
			color #ccc
			ellipsis()
		.item-button
			line-height 0.44rem
			background #ff9300
			padding 0 .2rem
			border-radius .06rem
			margin-top .16rem
			color #fff
			
</style>
