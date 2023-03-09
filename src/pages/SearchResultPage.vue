<template>
    {{JSON.stringify(route.query)}}

</template>

<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
const route = useRoute()

const {tags} = route.query;
console.log("tags" + {tags})
</script>

<style scoped>

</style>