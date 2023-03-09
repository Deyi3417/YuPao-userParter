<template>
  <!--   属性的名称整理成动态的       -->
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
          :rules="[{ required: true, message: '请填写'+editUser.editName }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
// 添加路由信息
const router = useRouter()
// 使用userRoute接收参数
const route = useRoute()

console.log("liudy23测试3 route.query：", route.query)
const editUser =ref({
  editKey: route.query.editKey,
  editName: route.query.editName,
  currentValue: route.query.currentValue,
})


const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  // todo 把 editKey editName currentValue 提交到后台
  console.log('liudy23测试submit：', values);
};
</script>

<style scoped>

</style>