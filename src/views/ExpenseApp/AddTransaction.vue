<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const amount = ref('')

const emit = defineEmits(['addTransaction'])

const submitHandler = () => {
  if (!text.value && !amount.value) {
    alert('Please enter valid filed values.')
  }
  if (typeof text.value !== 'string') {
    alert('Text should be string')
  }
  if (typeof amount.value !== 'number') {
    alert('Amount should be number')
  }
  emit('addTransaction', { text: text.value, amount: amount.value })
  text.value = ''
  amount.value = ''
}
</script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="submitHandler">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="number" id="amount" placeholder="Enter amount..." v-model="amount" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>
