<template>
	<div class="index">
		<div class="index-content">
			<div style="width: 1000px" class="rowscolsTableBox">
				<rowscolsTable :param="tableParam"/>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import index from './index.js';
	export default index;
</script>

<style type="text/css" lang="less">
	@import './index.less';
</style>