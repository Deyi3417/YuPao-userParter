<template>
  <!--  NavBar  -->
<!--  <van-nav-bar-->
<!--      title="标题"-->
<!--      left-text="返回"-->
<!--      right-text="按钮"-->
<!--      left-arrow-->
<!--      @click-left="onClickLeft"-->
<!--      @click-right="onClickRight"-->
<!--  />-->

  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id="content">
    <!--  if条件判断跳到不同的页面  -->
    <!--    <template v-if="active === 'home'">-->
    <!--      11111-->
    <!--      <Home></Home>-->
    <!--    </template>-->
    <!--    <template v-if="active === 'team'">-->
    <!--      22222-->
    <!--      <Team></Team>-->
    <!--    </template>-->
    <!--    <template v-if="active === 'user'">-->
    <!--      33333-->
    <!--      <User></User>-->
    <!--    </template>-->
    <!--  Vue Router 控制跳到不同的页面  -->
    <router-view/>
  </div>

  <!--  Tabbar  -->
  <!--  标签栏支持路由模式，用于搭配 vue-router 使用。路由模式下会匹配页面路径和标签的 to 属性，并自动选中对应的标签。-->
  <van-tabbar route @change="onChange">
    <van-tabbar-item replace to="/" icon="home-o" name="home">主页</van-tabbar-item>
    <van-tabbar-item replace  to="/team" icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-circle-o" name="user">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import {Toast} from 'vant';
import * as LDY from "vue-router"

// 注意引入依赖
const router = LDY.useRouter();

const onClickLeft = () => history.back();
const onClickRight = () => {
  router.push("/search")
}

// Toast({
//   message: "liudy23 is so handsome",
//   position: "middle"
// });
// 默认展示主页
// const active = ref('home');
const onChange = (index) => Toast({
  message: `标签 ${index}`,
  position: "top"
});

</script>


<style scoped>

</style>