<template>
  <div id="app">
    <!-- 显示当前路由地址所对应的内容 -->
	<!-- 缓存页面 -->
	<keep-alive exclude="Detail">
    	<router-view/>
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
