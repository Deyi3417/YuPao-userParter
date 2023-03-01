<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

const searchText = ref('');
const onSearch = (val) => Toast(val);
const onCancel = () => Toast('取消');



</script>

<style scoped>

</style>