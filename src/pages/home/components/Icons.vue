<template>
	<div class="icons">
	<swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
	  	<div class="icon" v-for="(item,index) of page" :key="index">
			<div class="icon-img">
				<img :src="item.img" alt="">
			</div>
			<p class="icon-desc">{{item.name}}</p>
		</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
	</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data(){
		return {
			iconList:[
				{	
					name: '热门景点热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
				{	
					name: '热门景点',
					img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				},
			]
		}
	},
	computed:{
		pages(){
			const pages = []
			this.iconList.forEach((item, index) => {
				const page = Math.floor(index/8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height 0
		padding-bottom 50%
	.icons
		margin-top 0.1rem
		.icon
			float left
			height 0
			width 25%
			padding-bottom 25%
			position relative
			.icon-img
				position absolute
				left 0
				right 0
				top 0
				bottom .44rem
				box-sizing border-box
				padding	.1rem
				img
					display block
					margin 0 auto
					height 100%
			.icon-desc
				position absolute
				left 0
				bottom 0
				right 0
				height .44rem
				line-height .44rem
				color $dark
				text-align center
				ellipsis()
</style>
