<script setup>
import {Toast} from 'vant';
import {ref} from 'vue';
import Team from "../pages/Team.vue";
import Home from "../pages/Home.vue";
import User from "../pages/User.vue";

const onClickLeft = () => history.back();
const onClickRight = () => Toast({
  message: "liudy23 is so handsome",
  position: "middle"
});
// 默认展示主页
const active = ref('home');
const onChange = (index) => Toast({
  message: `标签 ${index}`,
  position: "top"
});

</script>

<template>
  <!--  NavBar  -->
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
    <template v-if="active === 'home'">
      11111
      <Home></Home>
    </template>
    <template v-if="active === 'team'">
      22222
      <Team></Team>
    </template>
    <template v-if="active === 'user'">
      33333
      <User></User>
    </template>
  </div>

  <!--  Tabbar  -->
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="home">主页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" name="user">个人</van-tabbar-item>
  </van-tabbar>


</template>



<style scoped>

</style>