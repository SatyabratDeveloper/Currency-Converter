<template>
  <div>
    <select id="from" v-model="converterStore.from">
      <option
        v-for="country in converterStore.fromCountryList"
        :key="country.id"
        :value="country"
      >
        {{ country.country }}
      </option>
    </select>
    <!-- from input -->
    <input type="number" v-model="converterStore.fromAmount" />
  </div>

  <!-- to country selector -->
  <div>
    <select id="to" v-model="converterStore.to">
      <option
        v-for="country in converterStore.toCountryList"
        :key="country.id"
        :value="country"
      >
        {{ country.country }}
      </option>
    </select>
    <!-- to input -->
    <input type="number" v-model="converterStore.toAmount" :disabled="true" />
  </div>

  <button @click="converterStore.currConverter">Convert</button>
</template>

<script setup lang="ts">
import { useConverterStore } from "@/stores/converter";

// defining store
const converterStore = useConverterStore();
</script>

<style scoped>
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