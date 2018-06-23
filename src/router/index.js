import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App'
import Tools from '../home/Tools'
import List from '../list/List'

import colleague from '../speak/Colleague'
import customer from '../speak/Customer'

import zhaocha from '../zhaocha/Zhaocha'

import wjc from '../wjc/Wjc'

import network from '../network/Network'
import email from '../email/Email'

Vue.use(VueRouter);
const router = new VueRouter({
	routes: [{ //前台路由配置
			path: '/tools',
			component: Tools
		},
		{ //前台路由配置
			path: '/',
			component: Tools
		},
		{
			path: '/network',
			component: network
		},
		{
			path: '/zhaocha',
			component: zhaocha
		},
		{
			path: '/wjc',
			component: wjc
		},
		{
			path: '/colleague',
			component: colleague
		},
		{
			path: '/customer',
			component: customer
		},
		{
			path: '/email',
			component: email
		}
	]
})

router.beforeEach((to, from, next) => {
	console.log(`路由到：${to.path}`)
	next();
});

router.afterEach(route => {

})
export default router