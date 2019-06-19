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
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated(){
		this.startY = this.$refs['A'][0].offsetTop
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
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(()=>{
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - this.startY) / 20)
					if(index>=0 && index< this.cities.length){
						this.$emit('change', this.cities[index].title)
					}
				},10)
				
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

