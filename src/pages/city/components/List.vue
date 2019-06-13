<template>
  	<div class="list" ref="wrapper">
		  <div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
						v-for="item in hot" :key="item"
						@click="handleCityClick(item)">
						<div class="button">{{item}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="group in cities" :key="group.title" :ref="group.title">
				<div class="title border-topbottom">{{group.title}}</div>
				<div class="item-list" @click="handleCityClick(item)" v-for="item in group.lists" :key="item">
					<div class="item border-bottom">
						{{item}}
					</div>
				</div>
			</div>
		  </div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
	props : {
		cities: Array,
		hot: Array,
		letter: String,
	},
	name: 'CityList',
	methods: {
		handleCityClick(city){
			// this.$store.dispatch('updateCity', city)
			this.$store.commit('updateCity', city)
			this.$router.push('/')
		}
	},
	watch: {
		letter(){
			if(this.letter){
				this.scroll.scrollToElement(this.$refs[this.letter][0], 500)
			}
		}
	},
	mounted(){
		this.scroll = new Bscroll(this.$refs.wrapper)
	},
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
	&:before
		border-color #777
	&:after
		border-color #777
.border-bottom
	&:before
		border-color #777
.list
	position absolute
	top 1.58rem
	left 0
	right 0
	bottom 0
	overflow hidden
	.title
		line-height 0.54rem
		background  #eee
		padding-left 0.2rem
		color #666
		font-size 0.26rem
	.button-list
		overflow hidden
		padding .1rem .6rem .1rem .1rem
		.button-wrapper
			float left
			width 33.33%
			.button
				text-align center
				margin .1rem
				padding .1rem 0
				border-radius .06rem
				border .02rem solid #ccc
	.item-list
		.item
			line-height 0.54rem
			padding-left 0.2rem
</style>

