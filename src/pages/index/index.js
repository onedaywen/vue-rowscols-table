import ajax from 'common/js/ajax.js'
import { mapState } from 'vuex';
import indexStore from 'src/pages/index/store/index.js';
import rowscolsTable from 'components/rowscols_table/index.vue';
export default {
	data () {
		return {
			title: '图片展示页面'
		}
	},

	components: {
		rowscolsTable
	},

	computed: mapState({
		tableParam: state => state.index.tableParam,

	}),

	created () {
		if(!this.$store.index) {
			this.$store.registerModule('index', indexStore);
		}
		document.title = this.title;
	},

	methods: {
	}
};