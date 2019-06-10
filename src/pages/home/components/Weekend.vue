<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	data(){
		return {
			recommendList:[
				{
					id:'001',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg',
					title: '秦岭野生动物园',
					desc: '秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园'
				},
				{
					id:'002',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg',
					title: '秦岭野生动物园',
					desc: '秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园秦岭野生动物园'
				},
				{
					id:'003',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg',
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
.item-img-wrapper
	height 0
	overflow hidden
	padding-bottom 33.9%
	.item-img
		width 100%
.item-info
	padding .1rem
	.item-title
		line-height .54rem
		font-size .32rem
		ellipsis()
	.item-desc
		line-height .4rem
		color #ccc
		ellipsis()
</style>
