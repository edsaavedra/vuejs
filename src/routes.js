
const Home = resolve => {
	require.ensure(['./components/Home.vue'], () => {
		resolve(require('./components/Home.vue'))
	})
};
const HttpComp = resolve => {
	require.ensure(['./components/HttpComp.vue'], () => {
		resolve(require('./components/HttpComp.vue'))
	})
};

export const routes = [
	{path: '/', component: Home},
	{path: '/service', component: HttpComp},
	{path: '*', redirect: '/'},
];
