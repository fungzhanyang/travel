<template>
  <ul class="list">
	  <li class="item" 
	  		v-for="item in cities" 
			  :key="item.title" 
			  :ref="item.title"
			  @click="handleLetterClick"
			  @touchstart="handletouchStart"
			  @touchmove="handletouchMove"
			  @touchend="handletouchEnd"
		>{{item.title}}</li>
  </ul>
</template>

<script>
export default {
	props: {
		cities: Array
	},
	name: 'CityAlphabet',
	data(){
		return {
			touchStatus: false
		}
	},
	methods: {
		handleLetterClick(e){
			this.$emit('change', e.target.innerText)
		},
		handletouchStart(e){
			this.touchStatus = true
		},
		handletouchMove(e){
			if(this.touchStatus){
				const startY = this.$refs['A'][0].offsetTop
				const touchY = e.touches[0].clientY - 79
				const index = Math.floor((touchY - startY) / 20)
				if(index>=0 && index< this.cities.length){
					this.$emit('change', this.cities[index].title)
				}
			}
		},
		handletouchEnd(e){
			this.touchStatus = false
		},
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	display flex
	flex-direction column
	justify-content center
	position absolute
	top 1.58rem
	right 0
	bottom 0
	width .4rem
	.item
		text-align center
		line-height 0.4rem
		color $bgc

</style>

