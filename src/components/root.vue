<template>
	<div id="app-3dker">
	    <!--路由-->
	    <router-view></router-view>    
	    <!--导航栏 hybrid隐藏-->
	    <layout-dock :show="dockshow" v-ref:dock></layout-dock>
		<!-- <partial name="my-partial"></partial> -->
		<load-paging :show="pageLoadingStatus" v-ref:pageloading></load-paging>
		<!-- 页面刷新 -->
		<div class="reload" @click="reloadPage(this)">
			reload
		</div>
	</div>
</template>
<script>
import tools from "../util/tools";
import bridge from '../util/bridge'
import loadPaging from '../util/ui/hybrid/pageLoading'
export default {
	ready () {
		
	},
	data () {
		return {
			pageLoadingStatus: false,   //路由切换的loading状态
			isHybrid: tools.isHybrid(),
			dockshow: tools.isHybrid()	//控制下边栏的显示 false显示true隐藏
		}
	},
	components: {
		loadPaging
	},
	methods: {
		reloadPage (e) {
			window.location.reload()
		}
	}
}
</script>
<style>
	.reload {
		width: 2rem;height: 1rem; background: blue; border-radius: 4px; position: fixed; bottom: 2rem; left: .2rem; color: #fff; font-size: 16px;	text-align: center; line-height: 1rem;
	}
</style>