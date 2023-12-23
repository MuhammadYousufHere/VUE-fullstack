<script lang="ts">
export default {
  data() {
    return {
      name: 'Neil',
      image: 'https://picsum.photos/200/300',
      animals: ['Cat', 'Dog', 'Elephant', 'Fox'],
      cart: [
        { product: 'Juice', price: 20 },
        { product: 'Chicken', price: 100 },
        { product: 'Vagetables', price: 41 },
        { product: 'Dairy', price: 102 }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    //  get re rendered / calculated as name changes
    getName() {
      return this.name
    }
  },
  methods: {
    changeName() {
      this.name = 'Yousuf'
    }
  }
}
</script>

<template>
  <main>
    <h1>This is an about page {{ id }}</h1>
    <!-- now image from data doesnt get evaluated here bc it is dynamic  -->
    <!-- it is eqv to src={image} in react -->
    <!-- !Tip - use shortcut :src='image' -->

    <img v-bind:src="image" width="200" height="300" />
    <!-- : tells vue whatever is in double quotes, evaluate it. -->
    <p>Hello, {{ name }}</p>
    <div v-if="1 > 2">
      <img :src="image" :width="200 * 2" height="300" />
    </div>
    <button @click="changeName">Change Name</button>
    <button @click="name = 'Qasim'">Change Name</button>
    <h1>{{ getName }}</h1>
    <div>
      <img v-if="1 > 2" :src="image" :width="200 * 2" height="300" />
      <p v-else-if="true">Hi, {{ name }}</p>
      <img v-else :src="image" :width="200 * 2" height="300" />
    </div>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
    <ol style="margin-top: 1rem">
      <li v-for="{ price, product } of cart" :key="product">{{ product }} - {{ price }}$</li>
    </ol>
  </main>
</template>

<style></style>
