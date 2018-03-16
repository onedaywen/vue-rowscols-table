<template>
<div class="rowscols-table-box">
	<table class="rowscols-table" ref="rowscolsTable">
		<tr class="rowscols-table-title">
			<td v-for="x in param.titleArr" 
				:style="x.style" 
				:class="x.class" :width="x.width">

				<span v-if="x && x.text" @click="x.click && x.click()">
					{{ x.text }}
				</span>
				
				<span v-if="!x || typeof x === 'string' || typeof x === 'number'">
					{{ x || '' }}
				</span>

				<img :src="x.src"
					 v-if="x.src"
					 @click="x.click && x.click()">

				<input tparampe="text" name="" 
				   v-if="x.vmodel"
				   v-model="x.vmodel"
				   :readonly="x.readonly"
				   @focus="x.focus && x.focus()"
				   @change="x.change && x.change()">
			</td>
		</tr>

		<tr v-for="x in param.contentArr"  
			:style="x.style" 
			:class="x.class"  class="rowscols-table-content">
			<td v-for="y in x"
				:style="y.style" 
				:class="y.class"
				:colspan="y.colspan || 1"
				:rowspan="y.rowspan || 1">
				
				<span v-if="y && y.text" @click="y.click && y.click()">
					{{ y.text }}
				</span>
				
				<span v-if="!y || typeof y === 'string' || typeof y === 'number'">
					{{ y || '' }}
				</span>

				<img :src="y.src"
					 v-if="y.src"
					 @click="y.click && y.click()">

				<input type="text" name="" 
				   v-if="y.vmodel"
				   v-model="y.vmodel"
				   :readonly="y.readonly"
				   @focus="y.focus && y.focus()"
				   @change="y.change && y.change()">


				<div v-if="y.data && y.data.length"
					 v-for="z in y.data"
					 :style="z.style" 
					 :class="z.class">
					 
					<span v-if="z && z.text" @click="z.click && z.click()">
						{{ z.text }}
					</span>
					
					<span v-if="!z || typeof z === 'string' || typeof z === 'number'">
						{{ z || '' }}
					</span>

					<img :src="z.src"
						 v-if="z.src"
						 @click="z.click && z.click()">

					<input tparampe="text" name="" 
					   v-if="z.vmodel"
					   v-model="z.vmodel"
					   :readonly="z.readonly"
					   @focus="z.focus && z.focus()"
					   @change="z.change && z.change()">

				</div>

			</td>
		</tr>
	</table>
</div>
</template>


<script type="text/javascript">
	const rowscolsTable = {
		name: 'rowscolsTable',
		components: {

		},
		props: {
			param: {
				type: Object,
				required: true
			}
		},
		data () {
			return {
				
			}
		},

		created () {

		},

		mounted () {
			const tableBoxEle = document.querySelector('.rowscols-table-box');
			tableBoxEle.addEventListener('mousewheel', (e) => {
				e = e || window.event;
				if(tableBoxEle.scrollWidth === tableBoxEle.clientWidth) {
					return;
				}
				if(tableBoxEle.scrollWidth > tableBoxEle.clientWidth) {
					e.preventDefault();
				}

				this.throttle(fn, e, this, 10);
			})
			function fn(e) {
				let i = 20;
        		if (e.wheelDelta) {           
			        if (e.wheelDelta > 0) {
			           i = -i;
			        }
			        if (e.wheelDelta < 0) {
			        	i = i;
			        }
			    } else if (e.detail) { 
			        if (e.detail > 0) {
			        	i = -i;
			        }
			        if (e.detail < 0) {
			        	i = i;
			        }
			    }
			   tableBoxEle.scrollLeft += i;
			}
		},

		methods: {
			throttle (fn, args, context, delay) {
				clearTimeout(fn.tId);
				fn.tId = setTimeout(() => {
					fn.call(context, args)
				}, delay);
			}
		}
	};

	export default rowscolsTable;
</script>

<style type="text/css" lang="less">
.rowscols-table-box {
	overflow: auto;
	.rowscols-table {
		width: 100%;
		text-align: center;
		word-break: break-all;
		border-collapse: collapse;
		font-size: 15px;
		table-layout: fixed;
		word-break: break-all;
		.rowscols-table-title {
			color: #333;
			background-color: #f1f4f7;
		}
		.rowscols-table-content {
			color: #666;
		}

		td, th {
			padding: 5px;
			border: solid 1px #ddd;
			input {
				width: 80%;
				padding: 0 10px;
				height: 30px;
				vertical-align: middle;
			}
			img {
				width: 80%;
				height: auto;
				vertical-align: middle;
			}
		}
	}
}
</style>