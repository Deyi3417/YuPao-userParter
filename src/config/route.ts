// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
import {createRouter, createWebHashHistory} from "vue-router";
import * as VueRouter from "vue-router";
import Home from "../pages/HomePage.vue";
import User from "../pages/UserPage.vue";
import Team from "../pages/TeamPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue"
import SearchResultPage from "../pages/SearchResultPage.vue"

const routes = [
    { path: '/', component: Home},
    { path: '/user', component: User },
    { path: '/team', component: Team },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // 不同的历史模式  hash 模式是用 createWebHashHistory() 创建的：
    // 它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(), routes, // `routes: routes` 的缩写
    // 历史模式: (Hash 模式) (HTML5 模式) 两种模式的区别是有无#号
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router