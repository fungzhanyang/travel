<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
		  pagination: '.swiper-pagination',
		  loop: true
	  },
	  swiperList: [
		  {
			  id: 1,
			  imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/b0732b5a58a2c613f6202beb35c571d3.jpg_750x200_c6a2ebe2.jpg'
		  },
		  {
			  id: 2,
			  imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
		  }
	  ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
	background #fff
.swiper
	overflow hidden
	width 100%
	height 0
	padding-bottom 26.66%
	background #ccc
	.swiper-img
		width 100%
</style>
