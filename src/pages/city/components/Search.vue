<template>
<div>
	<div class="search">
		<input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名">
	</div>
	<div class="search-content" ref="search" v-show="keyword">
		<ul>
			<li class="search-item border-bottom" v-for="item in list" :key="item" @click="handleCityClick(item)">{{item}}</li>
			<li class="search-item border-bottom" v-show="isNoResult">没有匹配的数据</li>
		</ul>
	</div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
	  cities: Array
  },
  data(){
	  return {
		  keyword: '',
		  list: [],
		  timer: null,
	  }
  },
methods: {
	handleCityClick(city){
		this.updateCity(city)
		this.$router.push('/')
	},
	...mapMutations(['updateCity'])
},
  computed:{
	  isNoResult(){
		  return !this.list.length
	  }
  },
  watch: {
	  keyword:function(){
		  if(this.timer){
			  clearTimeout(this.timer)
		  }
		  if(!this.keyword){
			  this.list = []
			  return
		  }
		  this.timer = setTimeout(()=>{
			  const result = []
			  this.cities.forEach((group)=>{
				  group.lists.forEach(item => {
					  if(item.indexOf(this.keyword) > -1){
						  result.push(item)
					  }
				  })
			  })
			  this.list = result
		  },100)
	  }
  },
  mounted(){
	  this.scroll = new Bscroll(this.$refs.search)
  }
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
.search-content
	overflow hidden
	position absolute
	top 1.58rem
	left 0
	right 0
	bottom 0
	z-index 1
	background #eee
	.search-item
		line-height 0.62rem
		padding-left 0.2rem
		color #666
		background #fff
</style>

