import App from '../App'
const list = r => require.ensure([], () => r(require('../pages/list')), 'list')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //首页城市列表页
        {
            path: '/list',
            component: list
        },
    ]
}]