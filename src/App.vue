<script setup lang="ts">
import { useConverterStore } from './stores/converter'

// defining store
const store = useConverterStore()
</script>

<template>
  <h1>Currency Converter</h1>

  <!-- form for user input -->
  <form @click="store.onSubmit">

    <!-- from country selector -->
    <div>
      <select id="from" v-model="store.from">
        <option v-for="country in store.data" :key="country.id" :value="country">{{ country.country }}</option>
      </select>
      <!-- from input -->
      <input type="number" v-model="store.fromAmount">
    </div>

    <!-- to country selector -->
    <div>
      <select id="to" v-model="store.to">
        <option v-for="country in store.data" :value="country">{{ country.country }}</option>
      </select>
      <!-- to input -->
      <input type="number" v-model="store.toAmount" :disabled="true">
    </div>

  </form>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

body {
  font-family: 'Roboto Slab', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
h1 {
  text-align: center;
  width: 100%;
}
form {
  display: flex;
  width: 700px;
  margin: auto;
}
div {
  margin: 5%;
}
select{
  width: 105%;
  height: 30px;
  background-color: #eee;
  font-size: 16px;
  padding: 0 5px;
}
input {
  width: 100%;
  height: 40px;
  padding: 0 5px;
  font-size: 20px;
}
</style>
