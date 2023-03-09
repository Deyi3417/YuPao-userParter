import {createApp} from 'vue'
// import './style.css'
import 'vant/lib/index.css';
import App from './App.vue'
import {
    Button,
    Icon,
    NavBar,
    Tabbar,
    TabbarItem,
    Search,
    Tag,
    Divider,
    Collapse,
    CollapseItem,
    TreeSelect,
    Row, Col, Cell, CellGroup, Form, Field
} from "vant";
// import Vant from "vant";
// import 'vant/lib/index.css'
import router from "./config/route";


const app = createApp(App);
// app.use(Vant)
app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Tag)
app.use(Divider)
app.use(Collapse)
app.use(CollapseItem)
app.use(TreeSelect)
app.use(Row)
app.use(Col)
app.use(Cell);
app.use(CellGroup);
app.use(Form);
app.use(Field);

// 使用 vue-router
app.use(router)
// 挂载，顺序不能反
app.mount('#app')
