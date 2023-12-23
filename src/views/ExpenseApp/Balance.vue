<script lang="ts" setup>
const { total } = defineProps({ total: { type: Number, required: true } })
</script>
<template>
  <h4>Your Balance</h4>
  <h1 class="balance">${{ total }}</h1>
</template>
