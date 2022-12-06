import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {Button, Icon, NavBar, Tabbar, TabbarItem} from "vant";

const app = createApp(App);

app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
// 挂载，顺序不能反
app.mount('#app')
