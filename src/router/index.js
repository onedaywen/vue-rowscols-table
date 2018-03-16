import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Index = () => import('src/pages/index/index.vue');
const routes = [
	{
		path: '/',
		component: Index
	},
];

const router = new VueRouter({
	routes
});


module.exports = router;