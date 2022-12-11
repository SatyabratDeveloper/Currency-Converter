<script setup lang="ts">
import Input from './components/Input.vue'
</script>

<template>
  <h1>Currency Converter</h1>
  <Input />
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
</style>
