<template>
  <van-cell title="昵称" :value="user.username" is-link @click="toEdit('username', '昵称', user.username)"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link @click="toEdit('avatarUrl', '头像', user.avatarUrl)">
    <img :src="user.avatarUrl" style="height: 50px">
  </van-cell>
  <van-cell title="性别" :value="user.gender" is-link @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="电话" :value="user.phone" is-link @click="toEdit('phone', '邮箱', user.phone)"/>
  <van-cell title="邮箱" :value="user.email" is-link @click="toEdit('email', '性别', user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>

</template>

<script setup lang="ts"> // lang="ts" 使用ts语法

import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: '刘德意',
  userAccount: 'liudy23',
  avatarUrl: 'https://api2.mubu.com/v3/photo/925eae67-7595-426d-a629-16ff249aaf75.jpg',
  gender: '男',
  phone: '18811553417',
  email: '18811553417@163.com',
  planetCode: '3906',
  createTime: new Date(),
  // string 类型的数组
  tags: ['java', 'python', 'c++'],
}
// 使用路由
const router = useRouter();
const toEdit = (editKey: string, editName:string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      // 传值
      editKey: editKey,
      editName: editName,
      currentValue: currentValue,
    }
  })
}
</script>

<style scoped>

</style>