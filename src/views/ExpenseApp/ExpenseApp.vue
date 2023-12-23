<script lang="ts" setup>
import ExpenseHeader from './ExpenseHeader.vue'
import Balance from './Balance.vue'
import IncomeExpense from './IncomeExpense.vue'
import TransactionList from './TransactionList.vue'
import AddTransaction from './AddTransaction.vue'
import { ref, computed } from 'vue'

// anything reactive - wrap in ref
const transactions = ref([
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
  { id: 5, text: 'Tea', amount: -15 }
])

const total = computed(() => {
  return transactions.value.reduce((acc, curr) => acc + curr.amount, 0)
})
const expense = computed(() => {
  return transactions.value
    .filter((tansaction) => tansaction.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0)
})
const income = computed(() => {
  return transactions.value
    .filter((tansaction) => tansaction.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0)
})

const handleAddTransaction = (values: { text: string; amount: number }) => {
  console.log(values)
  transactions.value.push({
    ...values,
    id: new Date().getDate()
  })
}
const deleteTransaction = (id: number) => {
  console.log('delete it', id)
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
}
console.log(transactions.value)
</script>

<template>
  <ExpenseHeader />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpense :income="income" :expense="expense" />
    <TransactionList :transactions="transactions" :onDelete="deleteTransaction" />
    <AddTransaction @addTransaction="handleAddTransaction" />
  </div>
</template>

<style>
@import './expense.styles.css';
</style>
