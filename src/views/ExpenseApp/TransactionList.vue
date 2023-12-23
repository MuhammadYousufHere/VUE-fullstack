<script lang="ts" setup>
// composition API
// two ways
// setup() - put data - func etc inside it.
// or define setup in script as attribute

// Method 1 - Explicit
// export default {
//   setup() {
//     const transactions = [
//       { id: 1, text: 'Flower', amount: -20 },
//       { id: 2, text: 'Salary', amount: 300 },
//       { id: 3, text: 'Book', amount: -10 },
//       { id: 4, text: 'Camera', amount: 150 }
//     ]
//     return { transactions }
//   }
// }

// Method 2 - Implicit

// const transactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 },
//   { id: 5, text: 'Tea', amount: -15 }
// ]

// Options API (old)
// export default {
//   data() {
//     return {
//       transactions: [
//         { id: 1, text: 'Flower', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 }
//       ]
//     }
//   }
// }

type Transaction = { id: number; text: string; amount: number }
interface Props {
  transactions: Transaction[]
  onDelete: (id: number) => void
}
// const { transactions } = defineProps({
//   transactions: {
//     type: Array,
//     required: true
//   }
// })

// provide the types for props - so you dont have to pass inside ().
const { transactions, onDelete } = defineProps<Props>()
</script>
<template>
  <h3>History</h3>
  <ul id="list" class="list" v-for="{ amount, id, text } of transactions" :key="id">
    <li :class="amount > 0 ? 'plus' : 'minus'">
      {{ text }} <span>{{ amount }} $</span
      ><button class="delete-btn" @click="onDelete(id)">x</button>
    </li>
  </ul>
</template>
